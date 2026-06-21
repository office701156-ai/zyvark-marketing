import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/home/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free, upgrade when you're ready. Simple, transparent pricing across the Zyvark Solutions suite.",
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get started across the suite.",
    cta: "Start free",
    href: site.signupUrl,
    featured: false,
    features: [
      "Core ZyMetrics dashboard",
      "P2P trades with escrow",
      "Up to 100 reconciled transactions/mo",
      "Community support",
    ],
  },
  {
    name: "Pro",
    // TODO: confirm real pricing.
    price: "$29",
    period: "per month",
    description: "For active traders and operators who want the full toolkit.",
    cta: "Start free trial",
    href: site.signupUrl,
    featured: true,
    features: [
      "AI signals & advanced screeners",
      "Priority escrow & lower fees",
      "Unlimited reconciliation & invoicing",
      "Tax-ready summaries",
      "Email support",
    ],
  },
  {
    name: "Business",
    price: "Custom",
    period: "let's talk",
    description: "Multi-seat, multi-tenant, and dedicated support for teams.",
    cta: "Contact sales",
    href: "/contact",
    featured: false,
    features: [
      "Everything in Pro",
      "Team seats & roles",
      "Multi-tenant Pulse monitoring",
      "SSO & audit logs",
      "Dedicated success manager",
    ],
  },
];

const faqs = [
  {
    q: "Is the free plan really free?",
    a: "Yes — the Free plan is free forever, no credit card required. You can upgrade to Pro whenever you need the advanced features.",
  },
  {
    q: "Can I use one plan across all products?",
    a: "Absolutely. A single Zyvark account unlocks every product in the suite at your plan's tier.",
  },
  {
    q: "Do you take custody of my funds?",
    a: "Trades on Zyvark Exchange are protected by smart escrow. Replace this answer with your final custody and regulatory disclosures before launch.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Plans are month-to-month and you can cancel or downgrade at any time from your dashboard.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Section className="pb-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          subtitle="Start free. Upgrade only when the value is obvious."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border bg-card p-8 ${
                tier.featured
                  ? "border-accent/60 border-glow"
                  : "border-border"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 rounded-full gradient-bg px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {tier.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-bold">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  /{tier.period}
                </span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href={tier.href}
                  variant={tier.featured ? "primary" : "secondary"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-12">
          <FAQ items={faqs} />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
