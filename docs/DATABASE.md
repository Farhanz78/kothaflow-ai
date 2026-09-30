# Database design

Current migration: `supabase/migrations/20260930_initial_schema.sql`.

## Principles
- PostgreSQL is the source of truth.
- Tenant tables carry `organization_id` or derive it safely.
- RLS is mandatory for tenant data.
- Service-role code repeats authorization because service role bypasses RLS.
- Provider webhooks resolve tenant ownership from server-known mappings.

## Current tables
organizations, organization_members, agents, phone_numbers, knowledge_sources, knowledge_chunks, call_sessions, call_events, integrations, leads, appointments, usage_ledger.

## Near-term additions
Atomic org+owner creation RPC, prompt_versions, agent_tools, audit_log, qa_evaluations, webhook idempotency, retention jobs.

## Migration rules
Use new timestamped migrations; do not rewrite applied production migrations. Make backfills retry-safe. Add indexes for tenant/time/provider lookups.

## RLS tests
Own-org read/write where allowed, cross-org denial, non-member denial, retrieval isolation, call-event isolation, matching storage policies.

## Vector note
`vector(1536)` is a placeholder until the embedding model is deliberately selected.
