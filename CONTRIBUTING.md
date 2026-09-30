# Contributing

1. Read `AGENTS.md`.
2. Check `docs/PROJECT_STATE.md`.
3. Use an ExecPlan for substantial work.
4. Make focused changes.
5. Add/update tests/docs.
6. Run typecheck/build/tests.
7. Open a PR with the template.

## Rules
Strict TypeScript; validate external input; provider logic stays in adapters; no server secrets in browser; tenant data needs authorization/RLS; DDL needs new migrations; never commit customer call data.

Prefer clear imperative commit messages.
