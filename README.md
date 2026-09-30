# KothaFlow AI

**Bangladesh-first, global-ready AI call-center SaaS.**

KothaFlow is a production-oriented foundation for human-like AI phone agents that can answer calls, speak Bangla/Banglish/English, use a business knowledge base, book appointments, look up data, capture leads, and transfer to humans.

> Working product name. The architecture is intentionally provider-independent.

## Stack

- **Web / SaaS:** Next.js + TypeScript
- **Database/Auth:** Supabase + PostgreSQL + RLS + pgvector
- **Realtime voice reference path:** LiveKit Agents + SIP + realtime model
- **Optional managed adapters:** Vapi, Retell, Bolna, ElevenLabs
- **Deployment:** Vercel for web; LiveKit Cloud or a long-running worker platform for realtime agent

## Why not build directly on one voice vendor?

Voice providers change quickly. KothaFlow owns tenant data, business workflows, analytics, billing, provider routing, and the customer dashboard. Providers are adapters. This keeps the business portable and lets us benchmark Bangla quality, latency, reliability, and cost.

## Local run

```bash
cp .env.example .env.local
npm install
npm run dev
```

Then open `http://localhost:3000`.

The UI runs with demo data until Supabase is connected.

## Database

Apply `supabase/migrations/20260930_initial_schema.sql` to a fresh Supabase project. The schema includes organizations, members, agents, phone numbers, knowledge, call sessions/events, integrations, leads, appointments, and a usage ledger with RLS enabled.

Before production, add an atomic server/RPC flow for creating an organization + first owner membership, and run Supabase security advisors.

## Voice agent

See `voice-agent/README.md`. Realtime voice should not run inside Vercel serverless functions.

## Product docs

- `BUSINESS_PLAN.md`
- `docs/ARCHITECTURE.md`
- `docs/RESEARCH.md`
- `docs/PRICING_MODEL.md`
- `docs/LAUNCH_CHECKLIST.md`
- `ANTIGRAVITY_PROMPT.md`

## Security

Never commit provider secrets, Supabase service-role keys, SIP passwords, or customer data. Provider webhooks must be verified server-side and mapped to tenant-owned external IDs; never trust tenant IDs from webhook bodies.

## License

No open-source license is granted by this repository. Source is public for development/collaboration purposes; all rights are reserved by the repository owner unless a license is added later.
