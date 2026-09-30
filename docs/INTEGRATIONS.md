# Integration architecture

## First integrations
1. Google Calendar
2. Generic signed REST/webhook tool
3. E-commerce/order lookup
4. CRM

## Tool gateway rules
- Allow-list tools per organization/agent.
- Never put credentials in prompts.
- Validate tool input server-side.
- Scope every query to the tenant connection.
- Use idempotency for mutations.
- Apply timeout/retry policies.
- Log tool, status, latency, and redacted errors.

## Calendar
Resolve timezone, re-check availability before write, confirm date/time, store external event ID, handle conflicts safely.

## Generic REST/webhook
Never allow caller-supplied arbitrary URLs. The business configures destination/schema; the agent supplies only validated parameters.
