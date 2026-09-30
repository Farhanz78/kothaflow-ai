# Product requirements document

## Product
KothaFlow AI is a multi-tenant AI phone-agent platform for businesses. It answers calls, uses approved knowledge, completes approved business actions, and transfers to humans.

## Initial segments
1. Clinics, dental, diagnostics, salons, appointment businesses.
2. E-commerce and service support.

## Core jobs
- Answer calls quickly.
- Understand Bangla, Banglish, and English.
- Give accurate approved answers.
- Book/reschedule/cancel appointments.
- Capture leads/messages.
- Look up business data.
- Transfer to humans.
- Show transcripts, outcomes, costs, and QA.

## MVP
### Workspace
Authentication, organization creation, roles, tenant-safe access.

### Agent builder
Name, role, languages, voice/provider, behavior, greeting, business hours, knowledge, tools, transfer rules, test/publish.

### Knowledge
URL, document, text, Q&A; tenant scoped; retrieval must never cross tenants.

### Calls
Inbound first; lifecycle; barge-in; transcript/summary; intent/outcome; handoff; cost/billable usage; configurable recording.

### Integrations
Google Calendar first, generic signed REST/webhook second, e-commerce/order lookup third.

### Analytics
Calls, minutes, resolution, booking/lead conversion, transfers, latency, provider cost, margin.

## Phone behavior
Use short natural replies. Confirm critical dates, names, numbers, money, quantities, and irreversible actions. Never guess unsupported business facts. Honor human requests where transfer is available.

## Non-goals for MVP
Medical/legal/financial advice, emergency replacement, hundreds of integrations, proprietary foundation models, complex outbound automation before consent/compliance controls.

## Pilot success
Reliable routing, no known cross-tenant access, working handoff, core clinic eval pass, owner-visible call outcomes, measured provider cost.
