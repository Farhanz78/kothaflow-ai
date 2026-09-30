# KothaFlow AI

**Bangladesh-first, global-ready AI call-center SaaS.**

KothaFlow is being built **open-source-first**: before we implement a major subsystem from scratch, we search for mature, well-liked, legally reusable open-source foundations and adapt them.

## Primary open-source foundation

The voice/call-center core is based on **Dograh**, a BSD-2-Clause self-hosted voice-AI platform with visual workflows, telephony, human handoff, BYOK model providers, tools, knowledge, testing, SDKs, and MCP support.

- Upstream: https://github.com/dograh-hq/dograh
- KothaFlow fork: https://github.com/Farhanz78/kothaflow-core
- Research/decision: `docs/OPEN_SOURCE_FOUNDATION.md`

This repository, `kothaflow-ai`, is the KothaFlow-specific SaaS/business/control-plane layer and documentation. It should not reimplement core capabilities that already exist in the Dograh fork unless a measured requirement justifies it.

## Product direction

KothaFlow targets businesses that need AI reception/support over phone: Bangla/Banglish/English, approved knowledge, appointment booking, business tools, human transfer, call analytics, and cost/margin visibility.

Initial sellable vertical: clinic/dental receptionist.

## Current state

See `docs/PROJECT_STATE.md`. The original Next.js dashboard is still mostly scaffold/demo code and should be treated as a prototype while the product is rebuilt around the open-source core.

## Documentation

Start with:
- `AGENTS.md`
- `docs/OPEN_SOURCE_FOUNDATION.md`
- `docs/PROJECT_STATE.md`
- `docs/PRD.md`
- `docs/ARCHITECTURE.md`
- `docs/MVP_CLINIC_DEMO.md`

## Security

Never commit provider secrets, SIP passwords, service-role keys, or real customer call data. Preserve all upstream license obligations when modifying/distributing open-source code.
