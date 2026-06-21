import { ShieldCheck, BrainCircuit, Zap, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Security by default",
    body: "Escrow protection, audit trails, and bank-grade encryption are built in — not bolted on.",
  },
  {
    icon: BrainCircuit,
    title: "AI that explains itself",
    body: "Every signal and recommendation comes with the reasoning behind it, in plain language.",
  },
  {
    icon: Zap,
    title: "Fast where it counts",
    body: "Sub-second dashboards and real-time data so you act on the moment, not the memory of it.",
  },
  {
    icon: Sparkles,
    title: "Designed to feel simple",
    body: "Powerful under the hood, effortless on the surface. Your team is productive on day one.",
  },
];

export function WhyZyvark() {
  return (
    <Section className="bg-muted/20">
      <SectionHeading
        eyebrow="Why Zyvark"
        title="Serious infrastructure, without the friction"
        subtitle="The trust of an institution with the speed of a startup."
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
