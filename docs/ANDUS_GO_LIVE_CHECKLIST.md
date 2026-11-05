# ANDUS International — release and operational acceptance

Updated: 2026-11-05. This is a deployment gate, not a declaration that the site is in production.

## Completed in the review branch

- Original, sanitised company photography and logo are stored in `public/images/company/` and `public/brand/`. No runtime WordPress dependency.
- Seven business divisions have their own content and compact layouts; Projects, Media, About, CAC, finance and investment enquiries are included.
- WebP file size and metadata, Next.js production build and dependency checks run through `.github/workflows/andus-ci.yml`.
- Next.js `15.5.29` is pinned; `X-Powered-By` is suppressed, public source maps disabled and security headers set.
- Public forms validate input, enforce a privacy acknowledgement and require database persistence before returning a reference number.
- When application service is not configured, visitors see WhatsApp/call alternatives before typing a form, never a false success.
- A staff-only case management UI is included with MFA and role checks.

## Required before switching the production domain

1. **Dedicated data project** — Create a *separate ANDUS-owned* Supabase project. Never apply this migration to an unrelated business database. Project creation and billing should be approved by the owner.
2. **Database** — Apply and review `supabase/migrations/20261104090000_andus_case_management.sql` to that new project. Inspect RLS, grants and `SECURITY INVOKER` RPCs; verify the expected tables and audit flow. The service-role key is server-only.
3. **Vercel secrets** — Set the following in the correct ANDUS Vercel project, not GitHub or browser code:
   - `ANDUS_SUPABASE_URL` (project API URL)
   - `ANDUS_SUPABASE_SERVICE_ROLE_KEY` (server-only secret)
   - `ANDUS_RATE_LIMIT_SECRET` (secure random string at least 32 characters)
   - `NEXT_PUBLIC_ANDUS_SUPABASE_URL` (public API URL for staff login)
   - `NEXT_PUBLIC_ANDUS_SUPABASE_PUBLISHABLE_KEY` (publishable key, not service-role)
   - `NEXT_PUBLIC_SITE_URL` (canonical deployed URL when cut over)
   Optional notifications: `RESEND_API_KEY`, `ANDUS_SENDER_EMAIL`, `CONTACT_EMAIL`. Keep all email service keys server-only.
4. **Staff sign-in** — Create staff users in ANDUS Auth. Verify their email addresses and TOTP MFA. Insert staff roles only for verified user UUIDs. Confirm that unassigned accounts cannot access any case.
5. **End-to-end testing** — Submit one non-sensitive *test* enquiry for each of Contact, Loan, CAC and Investment; verify actual database persistence, unique reference, visibility in staff dashboard, status transition audit, error handling and optional email notification.
6. **Security testing** — Verify origin rejection, XSS escaping, rate limiting, payload size limits, negative authorization cases, secrets isolation, and that no sensitive identifiers or files are accepted in the public enquiry.
7. **Media and content review** — Review company photographs and all eight video IDs for accuracy, obtain legal approval for public claims/regulated products and check mobile/desktop layouts and animation-reduced accessibility.
8. **WordPress shutdown** — Preserve a complete off-host backup of its database and uploads, redirect existing URLs to Next.js, confirm the new domain and DNS/SSL, then retire WordPress and remove the compromised hosting code. Do not reset WordPress first.

## Current access limitations

At this checkpoint, connected Supabase shows only an unrelated "Business Platform" project. No ANDUS project is available there. The ANDUS Vercel project currently has no environment variables configured. Therefore **the production enquiry and staff features have not been acceptance-tested and must not be described as operational**.

A Vercel preview build status of READY and a successful CI run confirm build integrity only; they do not prove live business workflow delivery.

## Release strategy

The branch `upgrade/andus-green-security-2026-11` is intentionally isolated from `main`. Complete the gate above, validate a fresh Vercel preview against the exact commit, then merge the reviewed commit through a protected PR. Promote only after human content approval and genuine application acceptance tests. Keep a rollback deployment and preserve the WordPress backups during cutover.
