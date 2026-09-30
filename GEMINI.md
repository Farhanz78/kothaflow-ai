# Gemini / Antigravity context — KothaFlow AI

Read `AGENTS.md` first.

**Important:** KothaFlow no longer treats the hand-written voice scaffold as the main product foundation. The primary voice/call-center foundation is the BSD-2-Clause Dograh fork at:
`https://github.com/Farhanz78/kothaflow-core`

Before adding a major capability:
1. inspect Dograh/upstream and other mature OSS first;
2. configure or extend existing code when possible;
3. only build from scratch for a documented gap;
4. preserve upstream license/notices and keep changes merge-friendly.

Also:
- Check `docs/PROJECT_STATE.md` before assuming a feature works.
- Read `docs/OPEN_SOURCE_FOUNDATION.md` for the research/decision.
- Read only task-relevant docs.
- Start substantial work with a short plan and affected-file list.
- Do not claim an integration works without credentials and a real test.
- If credentials are missing, implement around the blocker and document exact setup.
- Keep environment templates synchronized.
- Preserve responsive mobile/desktop UX.
- Run applicable typecheck/build/tests after changes.
- Update PROJECT_STATE when implementation status changes.
- Record durable architecture choices in DECISIONS.
- For large changes follow `.agent/PLANS.md`.
