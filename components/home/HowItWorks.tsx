import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Sign up free",
    body: "Create your Zyvark account in under a minute — no credit card, no sales call.",
  },
  {
    n: "02",
    title: "Connect your data",
    body: "Link an exchange, import a statement, or add a service. Everything syncs into one place.",
  },
  {
    n: "03",
    title: "Get value instantly",
    body: "AI signals, secure trades, and clean books — working for you from the first session.",
  },
];

export function HowItWorks() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How it works"
        title="From sign-up to value in three steps"
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="relative h-full rounded-2xl border border-border bg-card p-7">
              <span className="font-display text-5xl font-bold text-accent/20">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
