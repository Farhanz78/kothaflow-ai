# API and event contracts

## General
Validate all external input. Authenticated endpoints derive the user from session and authorize organization access server-side. Mutations should be idempotent when retries are possible.

## Agent creation
`POST /api/agents` is currently a scaffold. Target request includes name, role, primaryLanguage, provider. Target response returns a persisted agent.

## Voice webhook
`POST /api/voice/webhook`

Temporary shared-secret auth must be replaced with each provider's native signature/token verification.

Normalize to:
```json
{"provider":"retell","externalCallId":"abc","eventType":"started|transcript|tool|transferred|ended|error","occurredAt":"ISO-8601","payload":{}}
```

Resolve tenant from server-owned external agent/number/call mappings. Never trust an organization ID from the webhook body.

## Errors
Prefer stable codes:
```json
{"error":{"code":"VALIDATION_ERROR","message":"Safe message","requestId":"..."}}
```
Never expose stack traces, SQL, credentials, or provider secrets.
