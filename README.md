# Tezcode Landing Page

Next.js 16 landing page scaffold for **tezcode.dev** — Tezcode AI company.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **i18n:** next-intl v4 — 5 locales: UZ / RU / EN / AR / UK
- **Forms:** react-hook-form + zod v4 validation
- **Fonts:** Syne (display) + Inter (body)
- **Deploy:** Railway (Nixpacks) — see `railway.json` + `nixpacks.toml`

## Brand

| Token | Value |
|-------|-------|
| Ink (background) | `#0a0a0f` |
| Blue (primary) | `#0040ff` |
| Gold (accent) | `#d4a017` |

## Setup

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
# → http://localhost:3000

# Production build
pnpm build

# Type check
pnpm type-check
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/           ← i18n pages (5 locales)
│   │   ├── layout.tsx      ← Root layout + metadata + fonts
│   │   ├── page.tsx        ← Main landing page
│   │   └── globals.css     ← Tailwind + brand CSS variables
│   ├── api/
│   │   └── contact/route.ts ← Contact form API → Telegram
│   ├── sitemap.ts          ← Auto-generated sitemap.xml
│   └── robots.ts           ← robots.txt
├── components/
│   ├── Navbar.tsx          ← Fixed navbar + locale switcher
│   ├── Hero.tsx            ← Hero section with stats
│   ├── ProductsGrid.tsx    ← 8 products grid
│   ├── BusinessSolutions.tsx ← 4 solution cards
│   ├── Team.tsx            ← Team members grid
│   ├── Partners.tsx        ← Partner logos row
│   ├── ContactForm.tsx     ← react-hook-form + zod + API
│   └── Footer.tsx          ← Links + socials + copyright
├── messages/
│   ├── uz.json             ← FULL content (default locale)
│   ├── ru.json             ← Full content
│   ├── en.json             ← Full content
│   ├── ar.json             ← Full content (RTL)
│   └── uk.json             ← Full content
├── i18n/
│   ├── routing.ts          ← defineRouting (5 locales, uz default)
│   └── request.ts          ← getRequestConfig
├── proxy.ts                 ← next-intl locale routing + geo detection (Next 16 renamed middleware → proxy)
└── lib/
    ├── telegram.ts         ← Telegram Bot notification helper
    └── seo.ts              ← SEO utilities + structured data
```

## i18n URL Structure

| Locale | URL |
|--------|-----|
| Uzbek (default) | `https://tezcode.dev/` |
| Russian | `https://tezcode.dev/ru` |
| English | `https://tezcode.dev/en` |
| Arabic (RTL) | `https://tezcode.dev/ar` |
| Ukrainian | `https://tezcode.dev/uk` |

## Environment Variables

```env
# Optional — for contact form Telegram notifications
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=914653833

# Required for production SEO
NEXT_PUBLIC_BASE_URL=https://tezcode.dev

# Optional — distributed rate limit (REQUIRED if Railway runs >1 replica)
# Without these the limiter falls back to in-memory per-instance counters.
UPSTASH_REDIS_REST_URL=https://your-db.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token
```

## What's Skeleton (TODO next phase)

- [ ] Real team photos (replace AvatarPlaceholder)
- [ ] Real partner logos (replace text placeholders)
- [ ] Product page routes (/[locale]/products/[slug])
- [ ] Blog routes
- [ ] Privacy + Terms pages
- [ ] OG image generation (/api/og)
- [ ] Analytics (Plausible / GA4)
- [ ] Real Telegram bot token in .env.local

## Deploy to Railway

Push to the `main` branch — Railway builds via Nixpacks using
`pnpm install && pnpm build`, then runs `pnpm start`.

Required production env vars:

- `NEXT_PUBLIC_BASE_URL=https://tezcode.dev`
- `TELEGRAM_BOT_TOKEN` (if contact form notifications are enabled)
- `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` (when running >1 replica)

```bash
# CLI deploy
railway up
```
