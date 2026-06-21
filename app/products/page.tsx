import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProductCard } from "@/components/ProductCard";
import { CTABand } from "@/components/home/CTABand";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the Zyvark Solutions product suite — AI crypto analytics, escrow-protected P2P exchange, automated books, and infrastructure monitoring.",
};

export default function ProductsPage() {
  return (
    <>
      <Section className="pb-10">
        <SectionHeading
          eyebrow="Products"
          title="Everything you need, under one brand"
          subtitle="Pick a product to dive in, or start free and use them together."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
