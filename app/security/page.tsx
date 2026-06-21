import type { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  ScrollText,
  ServerCog,
  Eye,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CTABand } from "@/components/home/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description:
    "How Zyvark Solutions protects your money and data — escrow, encryption, access controls, audit trails, and our compliance roadmap.",
};

const pillars = [
  {
    icon: ShieldCheck,
    title: "Escrow-protected by design",
    body: "Funds on Zyvark Exchange are locked in smart escrow the moment a trade opens and released only when both parties confirm — removing counterparty risk from every transaction.",
  },
  {
    icon: Lock,
    title: "Encryption everywhere",
    body: "Data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Secrets are managed in a dedicated vault, never in source control.",
  },
  {
    icon: KeyRound,
    title: "Strong access controls",
    body: "Role-based access, least-privilege defaults, and optional SSO and 2FA keep accounts and admin actions tightly scoped.",
  },
  {
    icon: ScrollText,
    title: "Complete audit trails",
    body: "Every sensitive action — trades, disputes, exports, settings changes — is logged immutably so there's always a clear record.",
  },
  {
    icon: ServerCog,
    title: "Resilient infrastructure",
    body: "Hosted on hardened, autoscaling cloud infrastructure with automated backups and monitored, redundant services.",
  },
  {
    icon: Eye,
    title: "Privacy first",
    body: "We never sell your data. We collect the minimum needed to run the service and give you control over your information.",
  },
];

// TODO: update these statuses as you achieve each certification.
const roadmap = [
  { label: "TLS + AES-256 encryption", status: "Live" },
  { label: "Role-based access & audit logs", status: "Live" },
  { label: "Independent penetration test", status: "In progress" },
  { label: "SOC 2 Type II", status: "Planned" },
  { label: "ISO 27001", status: "Planned" },
];

const statusStyles: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-400",
  "In progress": "bg-amber-500/15 text-amber-400",
  Planned: "bg-muted text-muted-foreground",
};

export default function SecurityPage() {
  return (
    <>
      <Section className="pb-10">
        <SectionHeading
          eyebrow="Security & Compliance"
          title="Built to be trusted with money"
          subtitle="Security isn't a feature at Zyvark — it's the foundation every product is built on. Here's how we protect your funds and your data."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/20 pt-0">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Compliance roadmap"
            title="Where we are, and where we're headed"
          />
          <ul className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {roadmap.map((r) => (
              <li
                key={r.label}
                className="flex items-center justify-between gap-4 px-6 py-4"
              >
                <span className="text-sm font-medium">{r.label}</span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[r.status]}`}
                >
                  {r.status}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Found a vulnerability? We appreciate responsible disclosure — email{" "}
            <a
              href={`mailto:security@${site.url.replace(/^https?:\/\//, "")}`}
              className="font-semibold text-accent hover:underline"
            >
              security@{site.url.replace(/^https?:\/\//, "")}
            </a>
            .
          </p>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            {/* This page describes our security practices and is not a legal
            guarantee. Replace placeholder roadmap statuses and disclosures as
            your program matures. */}
            This overview reflects current practices; have your team confirm
            specifics before relying on it contractually.
          </p>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
