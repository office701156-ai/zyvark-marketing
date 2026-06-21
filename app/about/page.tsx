import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/home/CTABand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zyvark Solutions builds trustworthy, AI-native fintech products that give everyone access to institutional-grade tools.",
};

const values = [
  {
    title: "Trust is the product",
    body: "Escrow, audit trails, and transparency aren't features — they're the foundation everything else sits on.",
  },
  {
    title: "Clarity over complexity",
    body: "We do the hard engineering so the experience feels obvious. If it needs a manual, we're not done.",
  },
  {
    title: "Build in the open",
    body: "We ship fast, explain our reasoning, and let real usage — not hype — decide what we build next.",
  },
];

// TODO: replace with your real team.
const team = [
  { name: "Founder Name", role: "Founder & CEO" },
  { name: "Co-founder Name", role: "CTO" },
  { name: "Team Member", role: "Head of Product" },
  { name: "Team Member", role: "Head of Design" },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pb-10">
        <SectionHeading
          eyebrow="About Zyvark"
          title="Institutional-grade fintech, made accessible"
          subtitle="We started Zyvark because the best financial tools were locked behind enterprise contracts and steep learning curves. We're changing that."
        />
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
          <p>
            {/* TODO: replace with your real story. */}
            Zyvark Solutions is a fintech and AI software company building a
            suite of products that work beautifully on their own and even better
            together. From AI-driven market analytics to escrow-protected
            trading and automated, tax-ready books, every product shares one
            promise: serious capability without the friction.
          </p>
          <p>
            Our mission is simple — give everyone access to the kind of tooling
            that used to be reserved for institutions, wrapped in an experience
            anyone can pick up in minutes.
          </p>
        </div>
      </Section>

      <Section className="bg-muted/20 pt-0">
        <SectionHeading eyebrow="What we believe" title="Our values" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <h3 className="font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="The team" title="Who's building Zyvark" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.role}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-bg text-xl font-bold text-white">
                {m.name.charAt(0)}
              </span>
              <h3 className="mt-4 font-semibold">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
