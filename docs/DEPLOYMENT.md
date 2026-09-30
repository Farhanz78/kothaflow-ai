# Deployment

## Web
Vercel. Keep server secrets in deployment secrets; only public Supabase values go client-side.

## Database
Dedicated Supabase project. Apply migrations in order, run advisors, use synthetic seeds, back up before risky changes.

## Voice worker
Long-lived realtime processing should not run in Vercel serverless. Use LiveKit Cloud agent deployment or a container/VM worker platform.

## Environments
Local, staging, production with separate databases/provider credentials.

## Release record
Commit SHA, migrations, env changes, provider config, rollout, rollback, smoke test.
