# Validation Report

The final JavaScript version was re-audited locally with Node.js 22 and npm 10.

## Passed commands

A clean dependency installation and production build were tested with the normal npm workflow:

```text
npm install          -> 396 packages installed
npm run verify:data  -> passed
npm run lint         -> passed
npm run build        -> passed
npm audit --omit=dev -> 0 vulnerabilities
```

## Route smoke tests

- `/` returned HTTP 200 and contained the required “Find Your Next Read” heading
- `/books` returned HTTP 200
- `/books?category=Tech` returned HTTP 200 on direct reload
- `/login` returned HTTP 200
- `/register` returned HTTP 200
- `/api/books` returned HTTP 200 with exactly 12 valid book objects
- `/api/books/the-hobbit` returned HTTP 200
- Invalid book API ID returned HTTP 404
- Logged-out `/books/the-hobbit` redirected to Login with a callback URL
- Logged-out `/profile` and `/profile/update` redirected to Login
- Unknown routes returned the custom HTTP 404 page

## Source and data checks

- Application source uses JavaScript (`.js`, `.jsx`, and `.mjs`)
- No `.ts`, `.tsx`, `next-env.d.ts`, or `tsconfig.json` files are present
- All 12 records contain exactly the required fields
- Categories are limited to Story, Tech, and Science
- Book IDs are unique and quantities are non-negative integers
- External book covers are allowed through `next.config.mjs`

## Production build summary

Next.js compiled the App Router application, APIs, dynamic private pages, and Next.js 16 proxy successfully.

## External-service limitation

Email registration/login, Google OAuth, profile update, and logout require a reachable MongoDB database plus valid Google OAuth credentials. Those service-backed flows must be tested again after `.env.local` or Vercel environment variables are configured. No credentials are included in the ZIP.
