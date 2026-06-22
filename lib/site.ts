export const site = {
  name: "Zyvark Solutions",
  shortName: "Zyvark",
  // Canonical production domain. Swap to a custom domain later if acquired.
  url: "https://zyvark-marketing.vercel.app",
  tagline: "Institutional-grade fintech, built for everyone.",
  description:
    "Zyvark Solutions builds AI-powered fintech products — analytics, escrow-protected exchange, and more — under one trusted brand. Start free.",
  // TODO: point this at your real signup/app URL.
  signupUrl: "/signup",
  signInUrl: "/signin",
  email: "hello@zyvark.com",
  social: {
    twitter: "https://twitter.com/zyvark",
    linkedin: "https://linkedin.com/company/zyvark",
    github: "https://github.com/zyvark",
  },
} as const;

export const nav = [
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
