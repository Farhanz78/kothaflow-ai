# Launch checklist

## Phase 0 — validation
- Interview 10-20 businesses that receive meaningful call volume.
- Pick 2 verticals first: recommended starting point is appointment businesses + e-commerce/support.
- Record the top 30 real caller intents in Bangla, Banglish, and English.
- Define human handoff and prohibited automation cases.

## Phase 1 — technical pilot
- Connect Supabase and apply migration.
- Create LiveKit Cloud project and deploy the voice worker.
- Connect test SIP number.
- Implement authenticated workspace creation and agent CRUD.
- Implement provider webhook normalization.
- Add knowledge ingestion/RAG and tool gateway.
- Add Google Calendar + one e-commerce/order integration.
- Run at least 200 test calls across noise levels and accents.

## Phase 2 — paid design partners
- Onboard 3-5 businesses manually.
- Collect p50/p95 latency, resolution rate, transfer rate, error rate, cost/minute, cost/resolution, booking conversion.
- Add disclosure/recording settings per customer and jurisdiction.
- Confirm BTRC classification/registration requirements for outsourced AI call-center service before commercial scale in Bangladesh.

## Phase 3 — self-serve
- Stripe/international billing + Bangladesh payment option.
- Automated number/SIP onboarding where possible.
- QA evaluator, prompt/version history, RBAC, audit logs, retention controls.
- Provider router and automatic failover.

## Minimum production gates
- p95 first-audio latency target defined and met for each supported route.
- Human transfer tested end-to-end.
- No tenant can query another tenant's records.
- All provider webhooks signed/verified.
- Secrets server-side only.
- Recording consent/disclosure configurable.
- PII redaction/retention policy documented.
- No hallucinated business facts in evaluation suite.
