import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { getAllPosts } from "@/lib/posts";

export function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Section id="blog" className="bg-muted/20">
      <SectionHeading
        eyebrow="From the blog"
        title="Guides worth reading"
        subtitle="Practical writing on tax, markets, trust, and reliability — from the team building Zyvark."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-muted px-2.5 py-1 font-medium text-accent">
                  {post.category}
                </span>
                <span>{post.readingMinutes} min read</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Read guide
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
        >
          View all guides
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
