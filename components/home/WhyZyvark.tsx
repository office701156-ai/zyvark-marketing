import { ShieldCheck, BrainCircuit, Zap, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Compliance built in",
    body: "GST and VDA logic, audit trails, and filing-ready summaries come standard — not as an afterthought.",
  },
  {
    icon: BrainCircuit,
    title: "Clarity, not jargon",
    body: "Every signal, number, and recommendation comes with the reasoning behind it, in plain language.",
  },
  {
    icon: Zap,
    title: "Less tab-switching",
    body: "Books, tax, analytics, and monitoring in one place, so your business stops living across ten tools.",
  },
  {
    icon: Sparkles,
    title: "Productive on day one",
    body: "Powerful under the hood, effortless on the surface. Start free and get value in your first session.",
  },
];

export function WhyZyvark() {
  return (
    <Section className="bg-muted/20">
      <SectionHeading
        eyebrow="Why Zyvark"
        title="Built for founders, not finance departments"
        subtitle="The capability of enterprise tooling, sized and priced for small businesses."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
