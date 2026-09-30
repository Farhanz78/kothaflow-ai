# Architecture decision log

## 2026-09-30 — Open-source-first is mandatory
Before building a major subsystem from scratch, research mature, well-liked, legally reusable open-source projects. Prefer adapting an existing foundation and document the license/decision.

## 2026-09-30 — Dograh is the primary voice platform foundation
**Decision:** Fork Dograh (BSD-2-Clause) as `Farhanz78/kothaflow-core` and rebuild KothaFlow around it.

**Why:** It is a complete self-hosted Vapi/Retell-style platform, not merely a library: visual workflows, voice runtime, telephony, human transfer, tools/knowledge, testing, SDKs, and MCP. This avoids rebuilding solved infrastructure.

## 2026-09-30 — Two-repo separation
**Decision:** `kothaflow-core` contains the upstream-derived voice platform; `kothaflow-ai` contains KothaFlow-specific SaaS/business/control-plane work and docs.

**Why:** Keeps upstream merges practical and separates generic voice infrastructure from our Bangladesh/business differentiation.

## 2026-09-30 — Pipecat/LiveKit are secondary upstreams
Use Pipecat/LiveKit when Dograh has a measured gap or they are already part of the selected architecture. Do not maintain redundant voice runtimes just for optionality.

## 2026-09-30 — Supabase remains optional pending core mapping
The earlier Supabase schema is a prototype/control-plane candidate. Do not modify existing Supabase projects. Finalize the KothaFlow-specific data boundary after mapping Dograh's actual database/auth model.

## 2026-09-30 — First sellable vertical
Finish a clinic/dental AI receptionist demo before broad feature expansion.
