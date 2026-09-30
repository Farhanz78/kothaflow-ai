# Engineering security requirements

## Tenant isolation
Cross-tenant access is critical severity. Use RLS plus server-side authorization. Resolve provider events from server-owned mappings and test denial paths.

## Secrets
Public keys only in browser. Service role/provider credentials remain server-side and never enter prompts/logs.

## Webhooks
Verify native signatures, validate body schema, deduplicate replays, protect public endpoints.

## Tools
Allow-list, validate arguments, block arbitrary URL/SQL/code execution, use least privilege, confirm high-impact writes.

## AI-specific threats
Test prompt injection from caller speech, ingested documents/web pages, tool output, and CRM notes. System/tool policy outranks retrieved content.

## Data
Minimize PII, redact logs, define retention, support export/deletion before broad rollout.
