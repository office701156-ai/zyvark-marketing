import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <p className="rounded-xl border border-border bg-muted/40 p-4 text-sm">
            ⚠️ This is placeholder boilerplate. Replace it with a privacy policy
            reviewed by your legal counsel before launch.
          </p>

          <Block title="1. Information we collect">
            We collect information you provide directly (such as your email and
            account details) and information collected automatically (such as
            usage data and device information) to operate and improve our
            services.
          </Block>
          <Block title="2. How we use information">
            We use your information to provide and secure the service, communicate
            with you, and comply with legal obligations.
          </Block>
          <Block title="3. Sharing">
            We do not sell your personal information. We share data only with
            service providers under contract and where required by law.
          </Block>
          <Block title="4. Your rights">
            Depending on your jurisdiction, you may have rights to access,
            correct, or delete your personal information. Contact us to exercise
            these rights.
          </Block>
          <Block title="5. Contact">
            Questions about this policy? Email{" "}
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
