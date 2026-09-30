# Architecture decision log

## 2026-09-30 — Provider-independent core
KothaFlow owns tenant/workflow/data/analytics/billing logic; voice providers are adapters. This reduces lock-in and supports Bangladesh/local SIP flexibility.

## 2026-09-30 — LiveKit reference runtime
Use LiveKit Agents + SIP as the controllable reference while retaining managed-provider adapters.

## 2026-09-30 — Supabase
Use PostgreSQL/Supabase with RLS for SaaS data/auth.

## 2026-09-30 — Vercel scope
Use Vercel for web/API, not long-lived realtime voice workers.

## 2026-09-30 — First sellable vertical
Finish a clinic/dental AI receptionist demo before broad feature expansion.
