import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

// TODO: replace with real customer quotes and names.
const quotes = [
  {
    quote:
      "ZyMetrics caught a rotation two days before it showed up anywhere else. It's paid for itself many times over.",
    name: "Aarav Mehta",
    role: "Independent trader",
  },
  {
    quote:
      "We moved our P2P desk to Zyvark Exchange and disputes dropped to near zero. The escrow flow just works.",
    name: "Lena Fischer",
    role: "Ops lead, OTC desk",
  },
  {
    quote:
      "Reconciliation that used to take a week now takes an afternoon. The tax summaries are genuinely filing-ready.",
    name: "Priya Nair",
    role: "Founder & CA",
  },
];

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Loved by operators"
        title="Trusted by people who can't afford to be wrong"
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal key={q.name} delay={i * 0.06}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full gradient-bg text-sm font-bold text-white">
                  {q.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{q.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {q.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
