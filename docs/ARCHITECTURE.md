# Architecture

## Core principle

KothaFlow owns the customer experience, tenant data model, workflows, analytics, billing logic, and provider routing. Voice vendors are replaceable adapters.

```text
PSTN / local IPTSP / global carrier
        |
       SIP
        |
 LiveKit / managed voice provider
        |
 realtime voice model OR STT -> LLM -> TTS
        |
 KothaFlow tool gateway
   |        |        |
Calendar   CRM   Business APIs
        |
 Supabase: tenants, agents, calls, knowledge, usage
        |
 Next.js dashboard + billing/admin
```

## Why this architecture

- **Human-like UX:** realtime turn-taking, interruption handling, noise control, and low latency.
- **Bangladesh-first:** custom/local SIP is a first-class path rather than assuming US phone numbers.
- **Low lock-in:** LiveKit can be the controllable orchestration layer while Vapi, Retell, Bolna, or ElevenLabs remain selectable managed fallbacks.
- **Cost control:** route simple calls to cheaper pipelines and reserve premium models/voices for high-value calls.
- **Safety:** tools are allow-listed per agent; uncertain answers escalate instead of guessing.

## Deployment

- Web/dashboard/API: Vercel
- Database/Auth/Storage: Supabase
- Realtime voice worker: LiveKit Cloud first; later self-host if economics justify it
- SIP: licensed Bangladesh IPTSP for local numbers; global SIP carrier for international tenants
- Background jobs: Supabase Edge Functions / queue worker / n8n for non-realtime work

## Provider strategy

Do not hard-code the business around one vendor. Keep a normalized call event schema and provider adapter interface. Benchmark providers quarterly on: Bangla word error rate, interruption recovery, time-to-first-audio, p95 latency, tool-call reliability, transfer success, call completion, and blended cost per minute.
