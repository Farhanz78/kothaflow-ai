# KothaFlow voice worker

This service is intentionally separate from the Vercel web dashboard because realtime voice workers need long-lived connections and predictable media processing.

## Recommended MVP path

1. Create a LiveKit Cloud project.
2. Copy `.env.example` values into `voice-agent/.env.local` for LiveKit + model credentials.
3. Install `uv` and run `uv sync`.
4. Run locally with `lk agent dev` or `python agent.py` according to your LiveKit setup.
5. Connect a SIP trunk in LiveKit for inbound/outbound telephony.
6. Keep a managed-provider fallback (Retell/Vapi/Bolna/ElevenLabs) for pilots or regions where it performs better.

Never commit credentials.
