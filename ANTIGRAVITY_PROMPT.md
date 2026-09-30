# Prompt for Gemini Antigravity

You are taking over an existing production-oriented repository called **KothaFlow AI**, a Bangladesh-first, global-ready AI call-center SaaS. Do **not** rebuild blindly. First inspect the entire repository, `BUSINESS_PLAN.md`, `docs/ARCHITECTURE.md`, `docs/RESEARCH.md`, `docs/LAUNCH_CHECKLIST.md`, the Supabase migration, and `voice-agent/`.

Your job is to continue this codebase into a polished, working MVP while preserving its provider-independent architecture.

Priorities:
1. Finish authentication + onboarding + organization/workspace creation with Supabase.
2. Replace dashboard mock data with tenant-scoped Supabase queries and real CRUD for agents, calls, knowledge, numbers, integrations, and usage.
3. Implement knowledge ingestion/RAG safely (URL/document/Q&A), with citations/internal source references and a strict "do not invent unsupported business facts" policy.
4. Connect the LiveKit voice worker end-to-end, including provider call IDs, webhook/event normalization, transcripts, summaries, outcomes, cost accounting, interruption handling, Bangla/Banglish/English behavior, and human handoff.
5. Keep adapters/interfaces for Vapi, Retell, Bolna, and ElevenLabs; never scatter vendor-specific logic across UI/business code.
6. Implement Google Calendar booking and a generic signed REST/webhook tool gateway. Tool permissions must be scoped per agent and tenant.
7. Build a professional responsive UI for mobile + desktop. Keep the current visual direction but improve navigation, loading/empty/error states, forms, tables, charts, modals, confirmations, and accessibility.
8. Add a testing playground to simulate calls and regression-test prompts before publishing an agent.
9. Add admin/ops views for tenant health, failed calls, failed transfers, QA flags, provider spend, and gross margin.
10. Add security: RLS verification, server-only secrets, webhook signature verification, rate limits, input validation, audit events, safe file handling, and tenant-bound provider IDs. Never expose service-role keys to the browser.
11. Add automated tests for critical multi-tenant authorization and webhook normalization. Run lint/typecheck/tests/build after changes.
12. Do not hardcode credentials or generated IDs. Keep `.env.example` updated.

Important product rules:
- Natural phone UX matters more than chatbot verbosity. Replies should be short and conversational.
- Caller interruptions must stop AI speech quickly.
- Confirm dates, names, phone numbers, quantities, and money before irreversible actions.
- If knowledge is missing, say so and offer handoff/message capture; never guess business facts.
- Human transfer must remain available.
- Bangladesh local SIP/IPTSP is a first-class route; global SIP is also supported.
- Store normalized provider events so vendors can be swapped.
- Track real provider cost and customer billable usage separately.
- Preserve migration safety: create new migrations; do not edit an already-applied migration in production.

Before coding, write a short implementation plan based on the current repo. Then make the changes in small coherent commits. If an external credential or account is required, implement everything around it and leave an explicit setup step instead of faking success.
