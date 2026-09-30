# Project state

Updated: 2026-09-30

## Implemented
- Public Next.js repository and dashboard scaffold.
- Landing page and dashboard pages for agents, calls, knowledge, phone/SIP, integrations, and billing.
- Provider-neutral voice adapter types.
- LiveKit-based realtime voice worker scaffold.
- Initial Supabase migration with organizations, members, agents, numbers, knowledge, calls, integrations, leads, appointments, usage, and RLS foundations.
- Business, architecture, pricing, research, launch, and AI-agent documentation.

## Scaffolded / demo-only
- Dashboard currently uses mock/demo data.
- Agent POST endpoint does not persist to Supabase yet.
- Voice webhook uses temporary shared-secret verification and does not store normalized events yet.
- Supabase is not connected because the account has reached its free-project limit.
- No production LiveKit project/SIP trunk, auth/onboarding, billing, calendar, e-commerce, or CRM integration is connected yet.

## External blockers
- Supabase: existing 2 free projects are active. Do not pause/delete either without explicit approval.
- Telephony/realtime voice requires provider credentials.

## Next build target
A sellable clinic/dental AI receptionist demo with auth/workspace, agent config, clinic knowledge, SIP test route, appointment booking, human transfer, call records, usage/cost tracking, and voice evaluations.

Update this document whenever implementation status materially changes.
