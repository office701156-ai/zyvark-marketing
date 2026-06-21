import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/NewsletterForm";

export function CTABand() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center sm:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-30"
          >
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent/40 blur-[120px]" />
            <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-2/40 blur-[120px]" />
          </div>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Start free today. Upgrade when you&apos;re ready.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join thousands using Zyvark to trade smarter, settle safer, and keep
            cleaner books. No credit card required.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
