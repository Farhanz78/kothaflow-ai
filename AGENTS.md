# KothaFlow AI — agent instructions

This is the entry point for coding agents. Detailed truth lives in `docs/`.

## Mission
Build a Bangladesh-first, global-ready AI call-center SaaS with natural phone conversations, approved business actions, measurable outcomes, and safe human handoff.

## Current state
Check `docs/PROJECT_STATE.md` before assuming a feature is implemented. UI mocks and schemas do not mean an integration is live.

## Non-negotiables
- Multi-tenant isolation is mandatory.
- Never trust a client-supplied organization ID.
- Provider/Supabase secrets are server-side only.
- Voice vendors are replaceable adapters.
- Never fabricate business facts.
- Human transfer remains available.
- Bangla, Banglish, and English are first-class.
- Optimize for short phone-friendly responses, interruption handling, and low latency.
- Do not modify/delete existing Supabase projects/data without explicit approval.
- Do not commit secrets, real recordings, or customer PII.
- Prefer small coherent changes with tests over rewrites.

## Read task-relevant docs
Product → `docs/PRD.md`
Current implementation → `docs/PROJECT_STATE.md`
Architecture → `docs/ARCHITECTURE.md`
Database/RLS → `docs/DATABASE.md`
API/webhooks → `docs/API_CONTRACTS.md`
Voice → `docs/VOICE_SYSTEM.md`
Vendors → `docs/VENDOR_ADAPTERS.md`
Prompts/tools → `docs/PROMPT_ENGINEERING.md`
Integrations → `docs/INTEGRATIONS.md`
UI → `docs/DESIGN_SYSTEM.md`, `docs/UX_GUIDELINES.md`
Security/privacy → `docs/SECURITY.md`, `docs/PRIVACY_COMPLIANCE.md`
Testing/evals → `docs/TESTING.md`, `docs/EVALS.md`
Deploy/ops → `docs/DEPLOYMENT.md`, `docs/OBSERVABILITY.md`, `docs/RUNBOOK.md`
Priorities/decisions → `docs/ROADMAP.md`, `docs/DECISIONS.md`

## Planning
For substantial multi-file work, migrations, integrations, or refactors, follow `.agent/PLANS.md`.

## Validation
For web work run applicable checks:
```bash
npm install
npm run typecheck
npm run build
```
Run tests when present. Validate the voice worker separately.

## Database
Use new migrations, enable/test RLS, prove cross-tenant denial, and run Supabase advisors when a project is connected.

## Definition of done
Use `docs/DEFINITION_OF_DONE.md`.
