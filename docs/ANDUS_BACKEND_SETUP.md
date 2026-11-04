# ANDUS private applications backend

**Status:** Source implementation only. A dedicated ANDUS Supabase project and tested keys are required. Never use the unrelated Business Platform database.

1. Create an ANDUS-owned Supabase project (confirm cost/organization first). Apply `supabase/migrations/20261104090000_andus_case_management.sql` there only.
2. Disable public Auth signup. Create individual staff users from Auth > Users and add their verified UUIDs to `public.andus_staff_roles` (admin / reviewer).
3. Configure server-side `ANDUS_SUPABASE_URL`, `ANDUS_SUPABASE_SERVICE_ROLE_KEY`, `ANDUS_RATE_LIMIT_SECRET` (>=32 random bytes); browser `NEXT_PUBLIC_ANDUS_SUPABASE_URL`, `NEXT_PUBLIC_ANDUS_SUPABASE_PUBLISHABLE_KEY`. Never prefix service role key with NEXT_PUBLIC.
4. Require MFA (TOTP) for staff and verify at least two real staff accounts before acceptance. Do not log customer submissions or Auth tokens.
5. Configure optional `RESEND_API_KEY`, `CONTACT_EMAIL`, `ANDUS_SENDER_EMAIL` for notifications. A saved database record is success even when optional notification is not delivered; staff must use the dashboard as the primary source of truth.
6. Test rate limiting, status transitions, denied unauthorized reads/writes, failure paths, backup/restore, privacy/retention, and consent before production.
7. **Scope:** no public BVN, NIN, bank statements or documents are accepted yet. All four forms are initial enquiries until a separate reviewed and verified sensitive-document channel is live. CAC enrolment is not a filing with the Corporate Affairs Commission.

The old WordPress and its injected code must not be imported. All published image assets are local WebP.
