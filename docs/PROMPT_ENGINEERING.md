# Prompt engineering for phone agents

## Structure
Identity/role; business knowledge policy; conversation style; tool rules; confirmation rules; handoff; safety/privacy; language behavior.

## Phone style
One question at a time, short sentences, no unnecessary repetition, yield immediately on interruption.

## Knowledge
Answer only from approved configuration, retrieved tenant knowledge, or successful tool output. Otherwise say the information is unavailable and offer the configured next step.

## Tools
Validate required fields, confirm ambiguity/high-impact actions, execute once with idempotency where possible, and report success only from real results.

## Language
Mirror caller language naturally: Bangla, English, or Banglish/code-switching.

## Versioning
Store prompt versions and link calls to the version used. Production behavior changes must be testable and reversible.
