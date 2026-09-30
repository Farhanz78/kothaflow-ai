# Observability

## Correlation
Use IDs that connect web/API request, provider call, normalized call, tool execution, webhook, and usage/cost.

## Metrics
Voice: starts/completions/failures, p50/p95 first-audio, interruption recovery, transfer/tool success, duration.
Business: resolution, bookings/leads, transfers.
Economics: provider cost/min, cost/resolution, billable usage, gross margin.

## Logging
Structured logs; redact PII/secrets. Do not log complete prompts/tokens/credentials by default.

## Alerts
Failed-call spikes, provider outage, transfer failure, webhook verification failure, unexpected spend, elevated QA failures.
