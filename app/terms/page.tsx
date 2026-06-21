import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <p className="rounded-xl border border-border bg-muted/40 p-4 text-sm">
            ⚠️ This is placeholder boilerplate. Replace it with terms reviewed by
            your legal counsel before launch.
          </p>

          <Block title="1. Acceptance of terms">
            By accessing or using {site.name}, you agree to be bound by these
            terms. If you do not agree, do not use the service.
          </Block>
          <Block title="2. Use of the service">
            You agree to use the service in compliance with all applicable laws
            and not to misuse, disrupt, or attempt to gain unauthorized access to
            any part of it.
          </Block>
          <Block title="3. Accounts">
            You are responsible for safeguarding your account credentials and for
            all activity that occurs under your account.
          </Block>
          <Block title="4. Disclaimers">
            The service is provided &ldquo;as is&rdquo; without warranties of any
            kind. Nothing here constitutes financial, investment, or tax advice.
          </Block>
          <Block title="5. Contact">
            Questions about these terms? Email{" "}
            <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </Block>
        </div>
      </div>
    </Section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-foreground">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed">{children}</p>
    </section>
  );
}
