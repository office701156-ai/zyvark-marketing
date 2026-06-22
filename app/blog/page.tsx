import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/home/CTABand";
import { getAllPosts } from "@/lib/posts";
import { getProduct } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides on GST and crypto tax, market analytics, escrow trading, and infrastructure monitoring — from the team building Zyvark.",
  alternates: { canonical: `${site.url}/blog` },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const allPosts = getAllPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} Blog`,
    url: `${site.url}/blog`,
    blogPost: allPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      url: `${site.url}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Section className="pb-10">
        <SectionHeading
          eyebrow="Blog"
          title="Practical guides for builders and founders"
          subtitle="Tax, compliance, markets, and reliability — covering every Zyvark product, written to actually be useful."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => {
            const product = getProduct(post.relatedProduct);
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-muted px-2.5 py-1 font-medium text-accent">
                    {post.category}
                  </span>
                  <span>{post.readingMinutes} min read</span>
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                  {product && <span>On {product.name}</span>}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Read guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
