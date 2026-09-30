# AI coding documentation research

Reviewed 2026-09-30.

## Practical findings
Repository-level instruction files are now common, but naming differs by tool. A reliable pattern is: one short canonical instruction map, tool-specific adapters, durable domain docs, and explicit plan files for large work.

GitHub Copilot supports repository-wide custom instructions in `.github/copilot-instructions.md` and path-specific instructions under `.github/instructions/`.

Gemini CLI uses `GEMINI.md` context files.

Claude Code uses `CLAUDE.md` project context.

AGENTS.md is a widely adopted tool-neutral repository instruction convention.

For substantial tasks, durable implementation plans are more reliable than depending on chat/session memory. KothaFlow uses `.agent/PLANS.md`.

## Design decision
Do not copy the full PRD/architecture into every AI file. Duplication drifts. Keep:
- universal rules in AGENTS.md
- tool-specific behavior in tool files
- product/engineering truth in docs/

## Sources
- GitHub Copilot custom instructions: https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
- Gemini CLI: https://github.com/google-gemini/gemini-cli
- OpenAI Codex: https://developers.openai.com/codex/
- Anthropic Claude Code: https://docs.anthropic.com/en/docs/claude-code
