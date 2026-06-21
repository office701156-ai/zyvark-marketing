import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";

const rows = [
  {
    eyebrow: "ZyMetrics",
    title: "Know what the market is doing — and what to do about it",
    body: "AI-scored signals, multi-timeframe charts, and screeners turn raw market noise into a clear next move.",
    bullets: ["Plain-language AI signals", "RSI / MACD / volume screeners", "Sector & DeFi heatmaps"],
    href: "/products/zymetrics",
    reverse: false,
  },
  {
    eyebrow: "Zyvark Exchange",
    title: "Trade peer-to-peer without trusting strangers",
    body: "Smart escrow locks funds until both sides confirm, with transparent reputation and fast dispute resolution.",
    bullets: ["Smart-contract escrow", "Counterparty reputation", "Evidence-based disputes"],
    href: "/products/exchange",
    reverse: true,
  },
];

export function FeatureRows() {
  return (
    <Section className="bg-muted/20">
      <div className="space-y-24">
        {rows.map((row) => (
          <Reveal key={row.title}>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className={row.reverse ? "lg:order-2" : ""}>
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  {row.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {row.title}
                </h3>
                <p className="mt-4 text-muted-foreground">{row.body}</p>
                <ul className="mt-6 space-y-3">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <Check className="h-3 w-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href={row.href} variant="secondary">
                    Explore {row.eyebrow}
                  </Button>
                </div>
              </div>

              <div className={row.reverse ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-2xl border border-border bg-card p-6 border-glow">
                  <div className="grid h-full grid-rows-3 gap-3">
                    {[0, 1, 2].map((r) => (
                      <div
                        key={r}
                        className="flex items-end gap-1.5 rounded-xl bg-muted/50 p-3"
                      >
                        {Array.from({ length: 14 }).map((_, j) => (
                          <div
                            key={j}
                            className="flex-1 rounded-sm gradient-bg opacity-70"
                            style={{ height: `${25 + ((r * 5 + j * 9) % 70)}%` }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
