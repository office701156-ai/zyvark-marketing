import type { Metadata } from "next";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Zyvark Solutions team — sales, support, or partnerships.",
};

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        subtitle="Questions, demos, partnerships — we read every message."
      />
      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <ContactItem
            icon={Mail}
            title="Email us"
            body={site.email}
            href={`mailto:${site.email}`}
          />
          <ContactItem
            icon={MessageSquare}
            title="Sales & demos"
            body="Tell us your use case and we'll tailor a walkthrough."
          />
          <ContactItem
            icon={MapPin}
            title="Where we are"
            body="Remote-first — add your HQ address here before launch."
          />
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}

function ContactItem({
  icon: Icon,
  title,
  body,
  href,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-colors hover:border-accent/50">
      {content}
    </a>
  ) : (
    content
  );
}
