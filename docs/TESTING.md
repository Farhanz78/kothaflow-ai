# Testing strategy

## Unit
Validation, provider normalization, cost calculations, state transitions, tool arguments.

## Integration
Auth/tenant authorization, RLS, webhook verification/idempotency, integrations, adapter mappings.

## E2E web
Onboarding, agent CRUD/publish, knowledge, call detail, transfer config, usage.

## Voice
Use the fixed evaluation suite in `EVALS.md`.

## Mandatory security tests
Org A cannot access Org B; forged org ID rejected; forged webhook rejected; duplicate webhook does not duplicate action/billing; unapproved tool destinations blocked; browser cannot access service-role secrets.

CI target: typecheck, automated tests, production build.
