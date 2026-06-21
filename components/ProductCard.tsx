import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:border-glow"
    >
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${product.accent} text-white`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-xl font-semibold">{product.name}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">
        {product.tagline}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
