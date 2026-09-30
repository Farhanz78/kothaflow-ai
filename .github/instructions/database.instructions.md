---
applyTo: "supabase/**/*.sql,lib/supabase/**/*.ts"
---
# Database instructions

Follow `docs/DATABASE.md` and `docs/SECURITY.md`.
Tenant tables need safe tenant scope and RLS. Use new migrations. Never trust browser/webhook organization IDs without authorization/mapping. Prefer constraints/indexes that encode invariants. Do not hardcode generated UUIDs.
