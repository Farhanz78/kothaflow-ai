# Prompt for Gemini Antigravity

You are taking over **KothaFlow AI**, a Bangladesh-first, global-ready AI call-center product.

## Critical architecture correction
Do not continue building the voice platform from scratch in `kothaflow-ai`.

The primary open-source foundation is the BSD-2-Clause **Dograh** fork:
**https://github.com/Farhanz78/kothaflow-core**

The original Dograh upstream is:
**https://github.com/dograh-hq/dograh**

Before coding, read:
- `AGENTS.md`
- `docs/OPEN_SOURCE_FOUNDATION.md`
- `docs/PROJECT_STATE.md`
- `docs/PRD.md`
- `docs/ARCHITECTURE.md`
- `docs/MVP_CLINIC_DEMO.md`

## Mandatory workflow
1. Inspect the Dograh fork first for any requested voice/call-center capability.
2. Prefer **configure → extend → replace** in that order.
3. Never rebuild an upstream feature in parallel without a documented measured gap.
4. Preserve BSD-2-Clause copyright/license notices and keep modifications upstream-merge-friendly.
5. Keep KothaFlow-specific business logic separated from generic upstream code.
6. Search GitHub/the wider web for mature legally reusable OSS before implementing any other major subsystem from scratch.

## Product priorities
- Rebrand the Dograh-derived product to KothaFlow without breaking upstream attribution.
- Bangladesh-first telephony: local SIP/IPTSP must be supported.
- Bangla, Banglish, English phone behavior.
- First sellable workflow: clinic/dental receptionist.
- Real appointment booking.
- Human handoff.
- Grounded business knowledge; never invent unsupported facts.
- Call records, outcomes, QA, actual provider cost, and customer billable usage.
- Mobile + desktop professional UX.
- Security and tenant isolation.
- Provider/model flexibility based on measured latency, quality, reliability, and cost.

## Important state
The old Next.js dashboard, LiveKit worker, and Supabase schema in `kothaflow-ai` are prototypes. Do not treat them as sacred architecture. Reuse only pieces that remain useful after comparing them with the actual Dograh implementation.

Supabase is currently blocked by the account's 2-active-free-project limit. Do not pause, delete, or modify the existing two projects.

## Execution
For substantial work, follow `.agent/PLANS.md`. Start with an audit and affected-file plan. Implement in coherent commits. Run relevant build/typecheck/tests/evals. If a credential or external service is missing, document the exact blocker and do not fake success. Update `docs/PROJECT_STATE.md` and `docs/DECISIONS.md` when reality changes.
