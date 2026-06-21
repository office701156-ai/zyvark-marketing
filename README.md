# Zyvark Solutions — Marketing Website

The corporate marketing site for **Zyvark Solutions**, an umbrella fintech + AI
brand. Built to showcase the product suite and convert visitors into self-serve
sign-ups.

Built from [`MASTER_PROMPT.md`](./MASTER_PROMPT.md).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a CSS-variable design-token layer (centralized theming)
- **Framer Motion** for tasteful scroll reveals
- **lucide-react** icons
- Deploys to **Vercel**

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
app/
  layout.tsx              Root layout: fonts, metadata, JSON-LD, nav/footer
  page.tsx                Home (hero, trust, products, why, how, features, social, CTA)
  products/               Products index + dynamic [slug] detail pages
  pricing/                Pricing tiers + FAQ
  about/                  Mission, values, team
  contact/                Contact form + channels
  privacy/ terms/         Legal boilerplate (placeholder)
  api/subscribe/          Stub email-capture endpoint
  api/contact/            Stub contact endpoint
  sitemap.ts robots.ts    SEO
components/                Reusable UI + section components
lib/
  site.ts                 Brand config (name, urls, social, signup URL)
  products.ts             Product catalog (single source of truth)
```

## Theming

All colors are CSS variables in [`app/globals.css`](./app/globals.css) (dark is the
default theme; `.light` overrides). Tailwind maps them as semantic colors
(`background`, `foreground`, `card`, `muted`, `border`, `accent`) in
[`tailwind.config.ts`](./tailwind.config.ts). Change the brand gradient by editing
`--accent` and `--accent-2`.

## Before you launch — replace these placeholders

Search the codebase for `TODO` and update:

1. **`lib/site.ts`** — `url`, `signupUrl`, `signInUrl`, `email`, and social links.
2. **`lib/products.ts`** — confirm/replace the Ledger and Pulse products with your
   real lineup; tune taglines and features.
3. **Metrics** — `components/home/TrustBar.tsx` and the Hero credibility line use
   placeholder numbers.
4. **Testimonials** — `components/home/Testimonials.tsx` (real quotes + names).
5. **Pricing** — `app/pricing/page.tsx` (real prices and the custody FAQ answer).
6. **Team** — `app/about/page.tsx`.
7. **Legal** — `app/privacy/page.tsx` and `app/terms/page.tsx` (have counsel review).
8. **Forms** — `app/api/subscribe/route.ts` and `app/api/contact/route.ts` are stubs
   that only log; wire them to your email provider / CRM / signup flow.
9. **OG image** — add a real `opengraph-image` for richer link previews.

## Deploy to Vercel

```bash
npm i -g vercel      # if you don't have it
vercel               # preview deploy
vercel --prod        # production deploy
```

Or connect the repo at vercel.com and every push to `main` auto-deploys. No env
vars are required for the marketing site as-is; add them when you wire up the
form endpoints.
