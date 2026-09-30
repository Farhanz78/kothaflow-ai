# KothaFlow AI repository instructions

Use `AGENTS.md` as the project map and `docs/PROJECT_STATE.md` for current status.

- Do not assume mock dashboard data is production-connected.
- Preserve tenant isolation and RLS.
- Never put service-role/provider secrets in client code.
- Keep voice-provider code behind adapters and normalize events.
- Optimize calls for brevity, interruption handling, safe tools, and human handoff.
- Add migrations rather than rewriting applied migrations.
- Update docs for architecture/contracts/env/status changes.
- Use `.agent/PLANS.md` for significant work.
- Run relevant typecheck/build/tests.
