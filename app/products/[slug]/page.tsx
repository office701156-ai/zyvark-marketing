import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTABand } from "@/components/home/CTABand";
import { products, getProduct } from "@/lib/products";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `${site.url}/products/${product.slug}` },
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const Icon = product.icon;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description: product.description,
    url: `${site.url}/products/${product.slug}`,
    brand: { "@type": "Brand", name: site.name },
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Products", item: `${site.url}/products` },
      { "@type": "ListItem", position: 2, name: product.name, item: `${site.url}/products/${product.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-32 -z-10 flex justify-center"
        >
          <div className="h-80 w-[600px] rounded-full bg-accent/15 blur-[130px]" />
        </div>
        <Container className="py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge>
                <span
                  className={`inline-flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br ${product.accent} text-white`}
                >
                  <Icon className="h-2.5 w-2.5" />
                </span>
                {product.name}
              </Badge>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {product.tagline}
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                {product.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={site.signupUrl} size="lg">
                  Start free <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Talk to us
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {product.highlights.map((h) => (
                  <li key={h}>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 text-accent" />
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 border-glow">
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} text-white`}
              >
                <Icon className="h-7 w-7" />
              </div>
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, r) => (
                  <div
                    key={r}
                    className="flex items-center gap-1.5 rounded-xl bg-muted/50 p-3"
                  >
                    {Array.from({ length: 16 }).map((_, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-sm gradient-bg opacity-70"
                        style={{ height: `${10 + ((r * 6 + j * 11) % 28)}px` }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Capabilities"
          title={`What makes ${product.name} different`}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {product.features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="text-sm font-semibold text-accent hover:underline"
          >
            ← Back to all products
          </Link>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
