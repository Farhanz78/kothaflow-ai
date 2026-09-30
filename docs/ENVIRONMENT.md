# Environment variables

Canonical template: `.env.example`.

## Browser-safe
NEXT_PUBLIC_APP_NAME, NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.

## Server-only
SUPABASE_SERVICE_ROLE_KEY, LIVEKIT_API_KEY, LIVEKIT_API_SECRET, OPENAI_API_KEY, VAPI_API_KEY, RETELL_API_KEY, BOLNA_API_KEY, ELEVENLABS_API_KEY, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_TRUNK_SID, VOICE_WEBHOOK_SECRET, CRON_SECRET.

## Rules
Never prefix a secret with NEXT_PUBLIC_. Separate credentials by environment. Remove temporary shared-secret webhook auth when native signature verification is implemented.
