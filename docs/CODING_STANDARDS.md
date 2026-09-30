# Coding standards

## TypeScript / Next.js
Strict TypeScript. Validate boundaries. Prefer server-side authorization even with RLS. Keep client components minimal. Never import server-secret code into browser bundles.

## Structure
Keep provider-specific code in adapters. Put side effects in services/domain layers, not presentation components. Avoid giant files and unrelated refactors.

## Errors
Use stable domain/API error codes and safe user messages.

## Side effects
External writes should be idempotent when possible.

## Dependencies
Add only when they materially reduce complexity/risk; prefer maintained packages.

## AI-generated code
Review it. Remove dead scaffolding, fake implementations, exposed secrets, and unverified claims before merge.
