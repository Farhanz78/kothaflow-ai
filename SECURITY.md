# Security policy

KothaFlow may handle phone metadata, transcripts, and sensitive business/customer information. Do not report security vulnerabilities through a public issue.

Development requirements: `docs/SECURITY.md` and `docs/PRIVACY_COMPLIANCE.md`.

Never commit API keys, SIP passwords, service-role keys, auth tokens, real customer recordings/transcripts, or production dumps.

Critical examples: cross-tenant access, auth bypass, exposed credentials, unsigned webhook acceptance, arbitrary tool/API execution, cross-tenant knowledge retrieval.

Until a dedicated security address exists, report privately to the repository owner.
