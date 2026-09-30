# AI-assisted / vibe-coding workflow

The goal is fast iteration without letting chat history become the architecture.

## Documentation hierarchy
1. `AGENTS.md` — short universal project map.
2. Tool-specific entry files: `GEMINI.md`, `CLAUDE.md`, `.github/copilot-instructions.md`.
3. `docs/PROJECT_STATE.md` — truth about what currently works.
4. Task-relevant durable docs in `docs/`.
5. ExecPlan for substantial work using `.agent/PLANS.md`.

## Before coding
Ask the coding agent to inspect repo state, read only relevant docs, identify affected files, state assumptions/external blockers, and write an ExecPlan for broad changes.

## During coding
Work in small coherent increments. Validate after milestones. Do not accept "fully working" without tests. Do not paste secrets into prompts. Keep docs updated when assumptions become decisions.

## After coding
Require typecheck/build/tests, security/tenant review, actual external integration tests when credentials exist, and updates to PROJECT_STATE/DECISIONS.

## Avoid context bloat
Do not duplicate the whole PRD/architecture into every tool-specific file. Keep one source of truth and link to it.
