import { Section, SectionHeading } from "@/components/ui/Section";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/products";

export function ProductGrid() {
  return (
    <Section id="products">
      <SectionHeading
        eyebrow="One brand, many tools"
        title="The Zyvark product suite"
        subtitle="Each product stands on its own — together they cover the full fintech workflow, from insight to settlement to books."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
