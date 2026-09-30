# Open-source foundation decision

Updated: 2026-09-30

## User-mandated build rule
Before building a major KothaFlow subsystem from scratch, first search GitHub and the wider web for mature, well-liked, actively maintained open-source software that already solves the same problem. Prefer adapting a permissively licensed foundation over re-inventing it. Record the research and license before implementation.

## Research performed
Candidates reviewed:

| Project | GitHub stars (checked 2026-09-30) | License | Strength |
|---|---:|---|---|
| pipecat-ai/pipecat | ~16.1k | BSD-2-Clause | Very mature realtime voice/multimodal framework and broad provider support |
| livekit/agents | ~14.4k | Apache-2.0 | Strong realtime/WebRTC/SIP agent framework, testing, turn detection, telephony |
| dograh-hq/dograh | ~5.8k | BSD-2-Clause | Full self-hosted voice-AI platform: visual builder, telephony, handoff, MCP, UI, APIs |
| vocodedev/vocode-core | ~3.8k | MIT | Mature modular voice-agent framework, but upstream activity is older |
| bolna-ai/bolna | ~779 | MIT | End-to-end voice orchestration, telephony, regional-language orientation |
| rasonyang/ai-native-callcenter | ~170 | Apache-2.0 | Full AI-native call-center product with FreeSWITCH, human queues, call records |

External comparisons also consistently identify LiveKit/Pipecat as leading open-source voice frameworks, while Dograh is a closer self-hosted Vapi/Retell-style product.

## Primary foundation: Dograh
KothaFlow will use **Dograh** as the primary open-source product foundation rather than re-implementing the entire voice-agent platform from scratch.

Why:
- complete self-hosted product, not only a library
- visual workflow builder
- browser test audio/chat
- telephony integrations
- human transfer
- knowledge/tool/webhook support
- BYOK LLM/STT/TTS/telephony
- Python backend + UI + SDKs
- MCP support for coding agents
- active project with strong community adoption
- BSD-2-Clause permits commercial modification/distribution if license conditions are preserved

Upstream: https://github.com/dograh-hq/dograh

Our fork: https://github.com/Farhanz78/kothaflow-core

## Secondary upstream references
KothaFlow may reuse/integrate upstream components instead of replacing mature work:
- Pipecat for pipeline/provider patterns where Dograh already depends on or benefits from it.
- LiveKit Agents for specific realtime/SIP/testing capabilities if measured requirements justify a separate route.
- ai-native-callcenter as an architectural reference for human queue/handoff and unified call records, not as the primary codebase.

## Repo roles
### kothaflow-core
Fork of Dograh. This becomes the open-source-derived voice platform: agent workflows, realtime voice orchestration, telephony, testing, tools, and the reusable operational UI where appropriate.

### kothaflow-ai
KothaFlow-specific control plane/business layer: brand/site, multi-tenant SaaS/business policy, Bangladesh-specific onboarding, billing/margin, reseller/admin experience, product documentation, and any integration layer that should remain independent from upstream core.

Do not duplicate a Dograh feature in kothaflow-ai merely because the old scaffold already contains a mock screen. Prefer adapting the real upstream feature.

## License obligations
Dograh is BSD-2-Clause. Preserve its copyright notice and license in the fork and in any redistribution containing substantial Dograh source. Do not imply Dograh's trademarks/branding belong to KothaFlow. Our modifications can be rebranded, but upstream attribution/license must remain where required.

## Rebuild policy
1. Inspect the upstream Dograh implementation for the requested feature.
2. Decide: configure, extend, or replace only if there is a documented gap.
3. Prefer upstream-compatible changes so future Dograh updates can be merged.
4. Keep KothaFlow-specific business logic in separable modules.
5. Benchmark Bangla/Banglish, Bangladesh SIP/IPTSP, latency, and cost with real test calls.
6. Record substantial deviations in DECISIONS.md.
