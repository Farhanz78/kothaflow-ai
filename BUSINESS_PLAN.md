# KothaFlow AI — business plan v0.1

## 1. Product

A multi-tenant AI call-center SaaS for businesses that need phone reception, booking, customer support, lead qualification, reminders, and overflow handling. The product should feel like a capable teammate on the phone while remaining transparent, controllable, and easy to escalate to humans.

## 2. Beachhead market

Start in Bangladesh with two narrow verticals before broadening:

1. **Appointment-driven businesses** — clinics, dental, salons, diagnostics, home services. Clear ROI from answering missed calls and booking automatically.
2. **E-commerce / service support** — order status, COD confirmation, delivery questions, returns triage, lead capture.

After operational proof, expand to international SMBs and Bangladesh BPO/outsourcing partners.

## 3. Differentiation

- Bangla + Banglish call quality measured on real Bangladesh phone audio.
- Local SIP/IPTSP compatibility instead of forcing foreign phone numbers.
- Provider-independent routing for cost and quality.
- Business actions, not just conversation: booking, order lookup, CRM updates, lead capture.
- Human transfer with context.
- Clear per-call QA and cost analytics.
- Vertical templates so onboarding takes minutes, not consulting weeks.

## 4. Product surfaces

Customer dashboard: organizations, members, agents, phone/SIP, knowledge, integrations, call logs, analytics, usage/billing, testing playground, prompt versions, QA.

Internal admin: tenant health, provider incidents, gross margin, high-cost calls, failed transfers, flagged hallucinations, abuse controls, support tooling.

## 5. Voice strategy

Primary reference architecture: LiveKit Agents + SIP with a realtime voice model for the most natural interaction. Keep managed adapters for Vapi, Retell, Bolna, and ElevenLabs. Route by tenant/region/language after benchmarking.

For Bangladesh, prioritize a commercial relationship with a licensed local SIP/IPTSP. Twilio can terminate Bangladesh calls but does not provide a Bangladesh-local voice number in its public Bangladesh SIP pricing page.

## 6. Go-to-market

- Founder-led sales for first 20 customers.
- Build 2 live demo numbers by vertical.
- Offer a short pilot with a hard cap on minutes.
- Show missed-call recovery, bookings, and staff time saved.
- Partner with web agencies, CRM implementers, clinics/e-commerce software vendors, and BPOs.
- Publish real call demos (with consent) and before/after metrics.

## 7. Pricing

Subscription + included minutes + overage + optional setup/integration fees. Do not race to the bottom on per-minute price. Build plans around value and support level.

## 8. Core metrics

North-star: successful automated outcomes per customer per month.

Track: answer rate, containment/resolution, booking/lead conversion, transfer rate, p50/p95 latency, hallucination/QA failures, call completion, provider cost/min, provider cost/resolution, revenue/min, gross margin, churn, setup time.

## 9. Regulatory and trust

BTRC currently publishes Call Center/BPO registration material that covers outsourced Call Center, Hosted Call Center/HCCSP and BPO categories. The public guideline predates modern AI-only operations, so obtain current written/legal clarification before scaling commercial outsourced AI calling in Bangladesh. Also make AI disclosure, call recording consent, data retention, and outbound calling rules configurable by jurisdiction.

## 10. 90-day execution

**Days 1-15:** platform skeleton, Supabase, one voice route, SIP test, agent builder, call logs.

**Days 16-30:** knowledge/RAG, calendar tool, human transfer, Bangla benchmark set, first demo vertical.

**Days 31-60:** 3-5 design partners, e-commerce/order tool, QA evaluator, usage ledger, provider comparison.

**Days 61-90:** paid plans, onboarding, internal admin, provider failover, sales/demo assets, regulatory checklist.
