# Architecture

## Open-source-first foundation

KothaFlow uses the forked **Dograh** platform as the primary voice/call-center engine:
`Farhanz78/kothaflow-core`.

Dograh already provides major platform capabilities that should not be re-created in parallel: visual voice workflows, telephony integrations, human handoff, test audio/chat, knowledge/tools, provider modularity, APIs/SDKs, and MCP support.

```text
                   KothaFlow SaaS / business layer
        branding · tenants · billing · BD onboarding · admin
                           |
                      API / SDK boundary
                           |
                 KothaFlow Core (Dograh fork)
     workflow builder · voice runtime · tools · knowledge · tests
                           |
         telephony / SIP / Asterisk / carrier integrations
                           |
              LLM / realtime / STT / TTS providers
```

## Repo responsibilities

### kothaflow-core
Forked Dograh source. Keep upstream merge-friendly. Put voice orchestration, telephony, workflow builder, tool runtime, knowledge runtime, and reusable operational call features here when they belong to the upstream-derived product.

### kothaflow-ai
KothaFlow-specific SaaS/control plane and business differentiation:
- Bangladesh-first onboarding and language defaults
- organization/customer plans and billing/margin logic
- reseller/agency/admin features
- business templates, especially clinic/dental
- Bangladesh SIP/IPTSP setup experience
- product marketing/site/docs
- cross-core analytics/business reporting where needed

The older Next.js voice-agent scaffold in this repo is prototype code, not the canonical runtime.

## Supporting upstreams

Pipecat and LiveKit Agents remain high-quality upstream references/components. Use them only where Dograh has a real measured gap or already integrates them. Do not create duplicate runtime stacks without evidence.

## Data strategy

The exact control-plane database will be finalized after the core adaptation is mapped. A future Supabase project can handle KothaFlow-specific tenancy/auth/billing if it remains the simplest fit. Do not force Supabase into Dograh internals merely because the earlier scaffold assumed it.

## Bangladesh

Local licensed SIP/IPTSP compatibility is a first-class requirement. Bangla/Banglish/English quality must be benchmarked on real phone audio. Carrier/provider routing is chosen by measured quality, latency, reliability, and cost.

## Safety

Tools are allow-listed; unsupported business facts are never guessed; high-impact actions are confirmed; human transfer remains available.

## Development rule

Before a major implementation, inspect `docs/OPEN_SOURCE_FOUNDATION.md` and upstream code first. Prefer configure → extend → replace, in that order.
