# Definition of done

A task is done only when applicable items pass.

## Behavior
Acceptance criteria work; failure/loading/empty states handled; no fake success for missing external credentials.

## Security
Tenant authorization checked; external input validated; no secrets exposed; webhooks/tools reviewed; RLS updated/tested if needed.

## Quality
Typecheck, build, relevant tests, and voice eval regressions pass.

## Operations
Errors are observable; provider/cost impact considered; rollout/rollback documented where needed.

## Documentation
Update PROJECT_STATE, architecture/contracts, env template, roadmap/decisions as applicable.

## UX
Responsive, accessible, clear status/errors, demo data not confused with real production data.
