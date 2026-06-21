import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/NewsletterForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start free",
  description:
    "Create your free Zyvark Solutions account — AI analytics, escrow-protected trading, and automated books in one place. No credit card required.",
};

const perks = [
  "Free forever — no credit card required",
  "One account unlocks the whole product suite",
  "Set up in under a minute",
  "Upgrade to Pro only when you're ready",
];

export default function SignupPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center"
      >
        <div className="h-[420px] w-[680px] rounded-full bg-accent/20 blur-[140px]" />
      </div>

      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Start free with <span className="gradient-text">Zyvark</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Enter your email to create your account. We&apos;ll send a magic link
            to get you in — no password to remember.
          </p>

          <div className="mx-auto mt-9 max-w-md">
            <NewsletterForm />
          </div>

          <ul className="mx-auto mt-10 grid max-w-md gap-3 text-left">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-sm">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3 w-3" />
                </span>
                {perk}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href={site.signInUrl} className="font-semibold text-accent hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
