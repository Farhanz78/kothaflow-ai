# Operations runbook

## Calls failing
Check carrier/SIP, voice runtime/provider, model provider, recent deploy/config, webhook/API errors. Fail over only to a tested route.

## High latency
Break down carrier, turn detection, model/tool, synthesis/output. Measure before changing architecture.

## Wrong answers
Identify whether prompt, retrieval, tool output, or model behavior caused it. Fix source/policy, add regression eval, record version change.

## Cost spike
Check long calls, loops/retries, premium routing, duplicate billing, compromised outbound use.

## Suspected tenant leak
Stop affected path, preserve logs, assess scope, rotate credentials if needed, follow incident process, fix and add regression test.
