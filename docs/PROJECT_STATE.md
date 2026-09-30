# Project state

Updated: 2026-09-30

## Major correction
The initial KothaFlow scaffold was started too much from scratch. The project has now been corrected to the required **open-source-first** process.

A public fork of Dograh has been created:
**https://github.com/Farhanz78/kothaflow-core**

This is now the primary voice/call-center foundation.

## kothaflow-core
- Full Dograh source is present through the GitHub fork.
- Upstream license: BSD-2-Clause.
- Upstream provides visual workflow builder, telephony, handoff, provider modularity, knowledge/tools, testing, APIs/SDKs, and MCP.
- KothaFlow rebranding/business-specific adaptation is not finished yet.

## kothaflow-ai
Implemented:
- business/product/engineering docs
- open-source foundation research/decision
- original Next.js UI/dashboard scaffold
- original Supabase schema prototype

Prototype / not canonical:
- old LiveKit worker scaffold
- mock dashboard data
- prototype agent API/webhook
- unconnected Supabase layer

These should not drive architecture where Dograh already provides a better real implementation.

## External blockers
- Supabase account currently has 2 active free projects; neither may be paused/deleted without explicit approval.
- Real phone calls still require telephony/SIP and provider credentials.

## Next work
1. Audit Dograh code/features against KothaFlow PRD.
2. Identify what can be used unchanged, rebranded, or extended.
3. Rebrand the fork to KothaFlow without removing required BSD attribution.
4. Add Bangladesh/Bangla/Banglish defaults and local SIP/IPTSP path.
5. Build the clinic/dental workflow in the real core.
6. Decide which KothaFlow-specific SaaS features remain in this control-plane repo.
7. Benchmark real calls before declaring production readiness.
