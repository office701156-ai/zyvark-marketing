import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/home/CTABand";
import { getAllPosts, getPost, type Block } from "@/lib/posts";
import { getProduct } from "@/lib/products";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.titleTag ?? post.title,
    description: post.description,
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${site.url}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="mt-10 font-display text-2xl font-bold tracking-tight"
        >
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={i} className="mt-4 space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={i} className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      );
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const product = getProduct(post.relatedProduct);
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 2, name: post.title, item: `${site.url}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Section className="pb-0">
        <Container className="max-w-3xl px-0">
          <Link
            href="/blog"
            className="text-sm font-semibold text-accent hover:underline"
          >
            ← All guides
          </Link>
          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-muted px-2.5 py-1 font-medium text-accent">
              {post.category}
            </span>
            <span>{date}</span>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
        </Container>
      </Section>

      <Section className="pt-10">
        <Container className="max-w-3xl px-0">
          <article>{post.body.map(renderBlock)}</article>

          {product && (
            <div className="mt-14 rounded-2xl border border-border bg-card p-7">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Related product
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {product.tagline}
              </p>
              <div className="mt-5">
                <Button href={`/products/${product.slug}`}>
                  Explore {product.name}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
