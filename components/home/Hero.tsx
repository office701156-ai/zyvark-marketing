import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center"
      >
        <div className="h-[480px] w-[760px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="h-[420px] w-[520px] rounded-full bg-accent-2/20 blur-[140px]" />
      </div>

      <Container className="py-24 text-center sm:py-32">
        <div className="flex justify-center">
          <Badge>
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Built for Indian SMBs &amp; founders
          </Badge>
        </div>

        <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Every money job for your business,{" "}
          <span className="gradient-text">under one brand.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Reconciled books, GST and crypto tax, market analytics, and uptime
          monitoring — Zyvark gives founders and small businesses one trusted
          toolkit, so compliance and growth stop living in ten different tabs.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={site.signupUrl} size="lg">
            Start free <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/products" variant="secondary" size="lg">
            See products
          </Button>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Free to start · No credit card required · One login for every Zyvark
          product
        </p>

        <HeroMock />
      </Container>
    </section>
  );
}

function HeroMock() {
  return (
    <div className="relative mx-auto mt-16 max-w-4xl">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-accent/10">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-amber-400/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-xs text-muted-foreground">
            app.zyvark.com — dashboard
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 p-6">
          {["Books", "GST", "Uptime"].map((label, i) => (
            <div key={label} className="rounded-xl border border-border bg-muted/50 p-4">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="mt-2 font-display text-2xl font-bold">
                {["Reconciled", "Ready", "99.9%"][i]}
              </p>
              <div className="mt-4 flex h-16 items-end gap-1">
                {Array.from({ length: 9 }).map((_, j) => (
                  <div
                    key={j}
                    className="flex-1 rounded-sm gradient-bg opacity-80"
                    style={{ height: `${30 + ((i * 3 + j * 7) % 70)}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
