# Voice vendor adapters

## Goal
Change voice infrastructure without rewriting product logic.

Supported adapter names: livekit, vapi, retell, bolna, elevenlabs.

## Adapter responsibilities
- map KothaFlow agent config
- provision/attach number or SIP where supported
- initiate calls when enabled
- verify webhooks
- normalize events
- expose tools/transfer capabilities
- return usage/cost when available

## Product logic must not depend on
Provider event names, transcript formats, provider status enums, dashboard URLs, or provider tenant concepts.

## Benchmarks
Bangla recognition, Banglish, naturalness, interruption recovery, p50/p95 latency, tool accuracy, transfer success, call completion, cost/minute, cost/resolved outcome, reliability.

Choose routes from measured evidence.
