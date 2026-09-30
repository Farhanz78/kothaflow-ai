# Market research snapshot — 2026-09-30

Public sources reviewed before choosing the reference stack:

- LiveKit Agents + telephony/SIP: https://docs.livekit.io/agents/ and https://docs.livekit.io/telephony/
- LiveKit OpenAI/GPT-Live integration: https://docs.livekit.io/agents/integrations/openai/
- Vapi pricing and modular stack: https://vapi.ai/pricing
- Retell pricing: https://www.retellai.com/pricing
- Bolna pricing: https://www.bolna.ai/pricing
- ElevenLabs SIP trunking: https://elevenlabs.io/docs/eleven-agents/phone-numbers/sip-trunking
- Twilio Bangladesh SIP pricing: https://www.twilio.com/en-us/sip-trunking/pricing/bd
- BTRC Call Center/BPO registration page: https://btrc.gov.bd/site/page/a8758660-0069-47cf-98db-508322004a3e/Call-center-BPO-Registration

## Observed market pattern

Successful voice-AI products increasingly separate telephony, realtime orchestration, model/voice providers, business tools, and analytics. Managed platforms make pilots fast; open orchestration frameworks make provider switching and unit-economics optimization easier at scale.

## KothaFlow decision

Use **LiveKit Agents as the reference controllable core**, plus adapters for **Vapi, Retell, Bolna, and ElevenLabs**. For Bangladesh, connect a licensed local SIP/IPTSP partner when possible. Use managed providers in pilots when their Bangla quality or operational reliability wins benchmarks.

Do not claim one provider is universally best. Run real Bangla/Banglish call tests with the exact accents, industries, phone codecs, and background noise your customers will have.
