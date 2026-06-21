# MASTER PROMPT — Zyvark Solutions Marketing Website

## ROLE
You are a senior product designer + front-end engineer + conversion copywriter rolled
into one. Build a complete, production-ready marketing website for **Zyvark Solutions**,
an umbrella fintech + AI software company. The site is the corporate brand home that
showcases the full product portfolio and converts visitors into self-serve sign-ups.

Treat this as a real launch: ship clean, typed, accessible, fast, deployable code — not
a throwaway demo.

## COMPANY CONTEXT
- **Brand:** Zyvark Solutions — a modern fintech/AI software house.
- **What we make:** a portfolio of products under one brand. Lead with these (edit as needed):
  - **ZyMetrics** — AI-powered crypto analytics dashboard (charts, signals, screeners).
  - **Zyvark Exchange** — escrow-protected P2P crypto exchange.
  - **[Product 3 — name + one-line description]**
  - **[Product 4 — name + one-line description]**
- **Positioning:** "[one-sentence positioning, e.g. 'Institutional-grade fintech tools,
  built for everyone.']"
- **Audience:** retail + pro crypto/fintech users, and prosumers evaluating our products.
- **Tone:** confident, technical-but-clear, trustworthy. No hype, no jargon soup.

## PRIMARY GOAL (the whole site optimizes for this)
Drive **self-serve sign-ups / "Start free"**. Every page has a clear path to the
primary CTA. Secondary goal: help visitors find the right product fast.

## TECH STACK (non-negotiable)
- **Next.js (App Router, latest stable)** + **TypeScript**.
- **Tailwind CSS** for styling, with a small design-token layer (CSS variables for
  colors/spacing/radii) so theming is centralized.
- **React Server Components** by default; client components only where interactivity needs them.
- Deployed to **Vercel** — must build cleanly with zero TypeScript/ESLint errors and
  `next build` passing.
- Use `next/image`, `next/font`, and `next/link`. No heavy UI libraries unless justified;
  prefer small, composable components. Lucide for icons, Framer Motion only for tasteful
  micro-interactions.
- Fully responsive (360px → 1440px+), mobile-first. Dark mode is the primary theme;
  include a light mode toggle.

## INFORMATION ARCHITECTURE (pages)
1. **Home (`/`)** — the hero pitch + portfolio overview + social proof + CTA.
2. **Products (`/products`)** — grid of all products; each card links to a detail page.
3. **Product detail (`/products/[slug]`)** — one page per product (ZyMetrics, Exchange, …).
4. **Pricing (`/pricing`)** — tiered plans, "Start free" emphasized, FAQ.
5. **About (`/about`)** — mission, story, team placeholders, values.
6. **Contact (`/contact`)** — form + alternate channels.
7. **Legal** — `/privacy`, `/terms` (basic boilerplate, clearly marked as placeholder).
8. **404** — branded.

Global: sticky responsive **navbar** (logo, nav links, "Sign in" + primary "Start free"
button) and a comprehensive **footer** (product links, company, legal, social, newsletter
capture).

## HOMEPAGE SECTION-BY-SECTION
1. **Hero** — bold headline + subhead + dual CTA ("Start free" primary, "See products"
   secondary). Include a product visual/mockup or abstract animated gradient. One sentence
   of credibility under the CTAs.
2. **Trust bar** — logos / metrics strip (e.g. "[X] users", "[Y] volume", "[Z] uptime") —
   use believable placeholders, clearly editable.
3. **Product portfolio** — cards for each product: icon, name, one-liner, "Learn more".
4. **Why Zyvark** — 3–4 value-prop blocks (security/escrow, AI insight, speed, design).
5. **How it works** — 3-step "sign up → connect → get value" flow.
6. **Feature deep-dive** — alternating text/visual rows highlighting flagship capabilities.
7. **Social proof** — testimonials (placeholder quotes) + optional stats.
8. **Final CTA band** — strong restated offer with "Start free" + email capture.
9. **Footer.**

## DESIGN SYSTEM
- **Aesthetic:** sleek, premium fintech — deep dark base, a vivid accent (violet→cyan
  gradient as the Zyvark accent; exposed as `--accent` tokens), generous whitespace, crisp
  typographic hierarchy, subtle glassmorphism/border-glow on cards.
- **Type:** modern geometric sans for headings (via `next/font`), readable sans for body.
- **Components:** reusable `Button`, `Card`, `Section`, `Badge`, `Container`, `Nav`,
  `Footer`, `FeatureRow`, `PricingCard`, `Testimonial`, `FAQItem`. Keep them in
  `/components`. Centralize tokens in `globals.css` + Tailwind theme.
- **Motion:** subtle scroll-reveal and hover states only; never block content or hurt perf.

## CONTENT
- Write all real marketing copy yourself — headlines, subheads, feature descriptions,
  CTA labels, pricing tier names, FAQ. Make it specific and on-brand, not lorem ipsum.
- Mark any business-specific number or claim with a clear placeholder so it's easy to swap.

## FORMS
- Newsletter capture + contact form: client-side validation, accessible labels, success/
  error states. Wire submit to a stubbed `/api/*` route handler (or a clearly-commented
  TODO for the real endpoint). The "Start free" button links to `[signup URL or /signup]`.

## QUALITY BAR (acceptance criteria)
- [ ] `npm run build` passes with no errors; no TS/ESLint errors.
- [ ] Lighthouse: Performance, SEO, Accessibility, Best-Practices all ≥ 90.
- [ ] Fully responsive, no horizontal scroll at any breakpoint; dark/light both polished.
- [ ] **SEO:** per-page `metadata` (title/description/OG/Twitter), semantic HTML,
      sitemap.xml, robots.txt, JSON-LD Organization schema, descriptive alt text.
- [ ] **A11y:** keyboard navigable, visible focus states, WCAG AA contrast, aria where needed.
- [ ] Every page reachable from nav/footer; primary CTA present on every page.
- [ ] Clean component structure, no dead code, sensible file organization.

## DELIVERABLES
1. Complete Next.js project (all pages, components, styles, config).
2. `README.md`: setup, run, build, and **deploy-to-Vercel** steps, plus a list of every
   placeholder to replace before going live.
3. A short note of design decisions and where to customize brand tokens/content.

## HOW TO PROCEED
1. First output a brief plan: sitemap, component list, and the color/type token set.
2. Then scaffold the project and build it page by page, home first.
3. Keep code idiomatic and readable; comment only where intent isn't obvious.
4. End by confirming the build passes and summarizing what to edit before launch.
