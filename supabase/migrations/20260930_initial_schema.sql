-- KothaFlow AI multi-tenant foundation
create extension if not exists pgcrypto;
create extension if not exists vector;

create type public.org_role as enum ('owner','admin','manager','member','viewer');
create type public.agent_status as enum ('draft','testing','live','paused','archived');
create type public.call_direction as enum ('inbound','outbound');
create type public.call_status as enum ('queued','ringing','in_progress','completed','failed','transferred');

create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  country_code text not null default 'BD',
  timezone text not null default 'Asia/Dhaka',
  plan text not null default 'trial',
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.organization_members (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.org_role not null default 'member',
  created_at timestamptz not null default now(),
  primary key (organization_id,user_id)
);

create table public.agents (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  role text not null default 'reception',
  status public.agent_status not null default 'draft',
  primary_language text not null default 'bn-BD',
  allowed_languages text[] not null default array['bn-BD','en-US'],
  provider text not null default 'livekit',
  provider_agent_id text,
  system_prompt text not null default '',
  first_message text,
  voice_config jsonb not null default '{}'::jsonb,
  behavior_config jsonb not null default '{}'::jsonb,
  transfer_config jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index agents_org_idx on public.agents(organization_id);

create table public.phone_numbers (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  agent_id uuid references public.agents(id) on delete set null,
  e164 text not null,
  country_code text,
  provider text not null,
  provider_number_id text,
  sip_uri text,
  capabilities jsonb not null default '{}'::jsonb,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  unique(organization_id,e164)
);

create table public.knowledge_sources (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  agent_id uuid references public.agents(id) on delete cascade,
  source_type text not null check(source_type in ('url','document','qa','text')),
  title text not null,
  source_url text,
  storage_path text,
  status text not null default 'pending',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.knowledge_chunks (
  id bigserial primary key,
  organization_id uuid not null references public.organizations(id) on delete cascade,
  source_id uuid not null references public.knowledge_sources(id) on delete cascade,
  content text not null,
  embedding vector(1536),
  metadata jsonb not null default '{}'::jsonb
);
create index knowledge_chunks_org_idx on public.knowledge_chunks(organization_id);

create table public.call_sessions (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  agent_id uuid references public.agents(id) on delete set null,
  phone_number_id uuid references public.phone_numbers(id) on delete set null,
  provider text not null,
  provider_call_id text,
  direction public.call_direction not null,
  status public.call_status not null default 'queued',
  from_number text,
  to_number text,
  started_at timestamptz,
  ended_at timestamptz,
  duration_seconds integer,
  transcript text,
  summary text,
  intent text,
  outcome text,
  sentiment text,
  transferred boolean not null default false,
  provider_cost_usd numeric(12,6) not null default 0,
  customer_billable_usd numeric(12,6) not null default 0,
  recording_url text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique(provider,provider_call_id)
);
create index calls_org_time_idx on public.call_sessions(organization_id,created_at desc);

create table public.call_events (
  id bigserial primary key,
  call_id uuid not null references public.call_sessions(id) on delete cascade,
  event_type text not null,
  occurred_at timestamptz not null default now(),
  payload jsonb not null default '{}'::jsonb
);
create index call_events_call_idx on public.call_events(call_id,occurred_at);

create table public.integrations (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  provider text not null,
  display_name text not null,
  status text not null default 'disconnected',
  config jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(organization_id,provider,display_name)
);

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  call_id uuid references public.call_sessions(id) on delete set null,
  name text,
  phone text,
  email text,
  score integer check(score between 0 and 100),
  status text not null default 'new',
  notes text,
  created_at timestamptz not null default now()
);

create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  call_id uuid references public.call_sessions(id) on delete set null,
  integration_id uuid references public.integrations(id) on delete set null,
  external_id text,
  customer_name text,
  customer_phone text,
  starts_at timestamptz not null,
  ends_at timestamptz,
  status text not null default 'booked',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.usage_ledger (
  id bigserial primary key,
  organization_id uuid not null references public.organizations(id) on delete cascade,
  call_id uuid references public.call_sessions(id) on delete set null,
  units numeric(14,4) not null,
  unit_type text not null default 'minute',
  provider_cost_usd numeric(12,6) not null default 0,
  billable_usd numeric(12,6) not null default 0,
  occurred_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
);

create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;
create trigger organizations_touch before update on public.organizations for each row execute procedure public.touch_updated_at();
create trigger agents_touch before update on public.agents for each row execute procedure public.touch_updated_at();
create trigger knowledge_sources_touch before update on public.knowledge_sources for each row execute procedure public.touch_updated_at();
create trigger integrations_touch before update on public.integrations for each row execute procedure public.touch_updated_at();

create or replace function public.is_org_member(org_id uuid) returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.organization_members m where m.organization_id=org_id and m.user_id=auth.uid());
$$;
create or replace function public.is_org_admin(org_id uuid) returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.organization_members m where m.organization_id=org_id and m.user_id=auth.uid() and m.role in ('owner','admin'));
$$;

alter table public.organizations enable row level security;
alter table public.organization_members enable row level security;
alter table public.agents enable row level security;
alter table public.phone_numbers enable row level security;
alter table public.knowledge_sources enable row level security;
alter table public.knowledge_chunks enable row level security;
alter table public.call_sessions enable row level security;
alter table public.call_events enable row level security;
alter table public.integrations enable row level security;
alter table public.leads enable row level security;
alter table public.appointments enable row level security;
alter table public.usage_ledger enable row level security;

create policy org_read on public.organizations for select using (public.is_org_member(id));
create policy org_update on public.organizations for update using (public.is_org_admin(id));
create policy members_read on public.organization_members for select using (public.is_org_member(organization_id));
create policy members_manage on public.organization_members for all using (public.is_org_admin(organization_id)) with check (public.is_org_admin(organization_id));

create policy agents_member_all on public.agents for all using (public.is_org_member(organization_id)) with check (public.is_org_member(organization_id));
create policy phones_member_all on public.phone_numbers for all using (public.is_org_member(organization_id)) with check (public.is_org_member(organization_id));
create policy knowledge_member_all on public.knowledge_sources for all using (public.is_org_member(organization_id)) with check (public.is_org_member(organization_id));
create policy chunks_member_all on public.knowledge_chunks for all using (public.is_org_member(organization_id)) with check (public.is_org_member(organization_id));
create policy calls_member_read on public.call_sessions for select using (public.is_org_member(organization_id));
create policy call_events_member_read on public.call_events for select using (exists(select 1 from public.call_sessions c where c.id=call_id and public.is_org_member(c.organization_id)));
create policy integrations_member_all on public.integrations for all using (public.is_org_member(organization_id)) with check (public.is_org_member(organization_id));
create policy leads_member_all on public.leads for all using (public.is_org_member(organization_id)) with check (public.is_org_member(organization_id));
create policy appointments_member_all on public.appointments for all using (public.is_org_member(organization_id)) with check (public.is_org_member(organization_id));
create policy usage_member_read on public.usage_ledger for select using (public.is_org_member(organization_id));

-- Organization creation should be done by a SECURITY DEFINER RPC/server function that
-- inserts both the organization and the initial owner membership atomically.
