# Domain model

**Organization** — top-level tenant.

**Member** — user in an organization with owner/admin/manager/member/viewer role.

**Agent** — configured AI phone worker with languages, prompts, provider route, knowledge, tools, and handoff policy.

**Phone number / SIP route** — telephony identity mapped to an organization and usually an agent.

**Knowledge source** — approved URL/document/text/Q&A parsed into retrievable chunks.

**Call session** — canonical provider-independent record for one call.

**Call event** — normalized timeline such as started, transcript, tool, transferred, ended, error.

**Integration** — tenant-owned connection to calendar, CRM, e-commerce, REST/webhook, etc.

**Lead** — potential customer captured from a call.

**Appointment** — booking created/modified through a tool.

**Usage ledger** — provider cost and customer-billable usage entries.

## Invariants
- Every tenant-owned entity resolves to exactly one organization.
- External provider IDs never grant authorization.
- Historical calls remain readable after agent changes.
- Tool execution is attributable to organization + agent + call.
