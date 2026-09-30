# Voice system

## Objective
Phone conversations must feel responsive and competent, not like long-form chat.

## Reference runtime
Telephony/SIP → LiveKit Agents → realtime model → approved tools → normalized events → Supabase.

Managed providers remain replaceable adapters.

## Required behavior
Fast greeting, natural turn detection, barge-in, short responses, Bangla/Banglish/English switching, noise resilience, confirmation of critical fields, safe tools, human handoff.

## Canonical lifecycle
queued → ringing → in_progress → completed / failed / transferred.

## Measure
Carrier connection, turn detection, model/tool latency, first output audio, p50/p95 latency, interruption recovery, transfer success.

## Failures
Never fabricate tool success. On tool/model/provider failure, use tested failover or apologize and transfer/capture a message.

## Recording
Off until business/jurisdiction policy is configured. Store consent/disclosure and retention settings when enabled.
