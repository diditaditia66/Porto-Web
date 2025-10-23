# Next.js + AWS Amplify Portfolio Starter

A minimal, production-leaning starter to deploy a personal portfolio with live demos on **AWS Amplify Hosting**.

## Features
- Next.js App Router (TypeScript)
- TailwindCSS
- Projects page fed by JSON (easy to edit)
- API routes:
  - `/api/projects` – serves local project list
  - `/api/data?table=sensors&limit=50` – **example** Postgres read-only query (whitelisted tables)

## Local Dev
```bash
npm install
cp .env.example .env.local  # edit values
npm run dev
```

## Deploy to AWS Amplify
1. Push this repo to GitHub.
2. In AWS Console → Amplify Hosting → Connect app → choose this repo/branch.
3. Add **Environment Variables** (Amplify > App settings > Environment variables):
   - `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER_RO`, `DB_PASS`, `DB_SSL`
4. Deploy. Amplify auto-detects Next.js.
5. (Optional) Connect a custom domain; TLS cert via ACM is automatic.

## Securing the DB
- Use a dedicated **read-only** DB user.
- Keep `/api/data` to a **strict whitelist** of tables/columns.
- Implement pagination and rate limiting as needed.
- Consider anonymized snapshots for public demos.

## Customize
- Edit `data/projects.json` to add your projects.
- Tweak layout in `app/layout.tsx`, styles in `app/globals.css`.
- Add new demo pages in `app/demos/*` and API routes under `app/api/*`.
