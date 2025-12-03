This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## NOTES // TODO - remove

Prietter

jeśli w global.css
@theme - Unknown at rule @theme
to
Zainstaluj i włącz rozszerzenie „Tailwind CSS IntelliSense” oraz ustaw tryb języka na „Tailwind CSS” dla pliku .css (Command Palette → „Change Language Mode” → „Tailwind CSS”).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Database Setup — Neon (Serverless Postgres)

This project uses a serverless PostgreSQL database hosted on [Neon](https://neon.tech) to store contact form submissions.

### Setup Instructions

#### 1. Create a Neon account and project
- Go to https://neon.tech
- Sign up with email or GitHub
- Create a new project (choose your region, e.g., `eu-west-1` for Europe)
- Neon will create a default database `neondb` with user `neondb_owner`

#### 2. Get your connection string
- In the Neon dashboard → your project → **SQL Editor** tab
- Look for "Connection string" at the top right
- Copy the PostgreSQL connection string (looks like: `postgresql://user:password@host/dbname`)

#### 3. Create the contacts table
- In the SQL Editor, run this query:

```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 4. Add DATABASE_URL to `.env.local`
- Create `.env.local` in the project root (copy from `.env.example`)
- Paste your connection string as `DATABASE_URL`:

```
DATABASE_URL=postgresql://user:password@host/dbname
```

#### 5. Test the connection
- Run the dev server:

```bash
npm run dev
```

- Send a test request to the form endpoint (PowerShell):

```powershell
$body = @{ name='Damian'; email='damian@example.com'; message='Test' } | ConvertTo-Json
Invoke-RestMethod -Uri http://localhost:3000/api/form -Method POST -Body $body -ContentType 'application/json'
```

- Check if the record was saved in Neon SQL Editor:

```sql
SELECT * FROM contacts;
```

### Notes
- Do **not** commit `.env.local` to git — add it to `.gitignore` (already configured by Next.js)
- Connection string contains credentials — keep it secret
- For production, use environment variables in your hosting platform (Vercel, Netlify, etc.)
- Neon offers a generous free tier (sufficient for this project)
