import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/content";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Phull Insights`,
    description: post.excerpt,
  };
}

export default async function Post({ params }: { params: Params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="bg-mist">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-20">
        <Link
          href="/insights/"
          className="focus-ring text-[0.9rem] text-slate hover:text-brass"
        >
          ← All insights
        </Link>
        <p className="mt-6 text-[0.85rem] text-slate">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="mt-3 text-3xl font-medium text-ink md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-8 space-y-5 border-t border-line pt-8 text-[1.05rem] leading-relaxed text-slate">
          {post.body.map((paragraph, i) => (
            <p key={i} className={i === 0 ? "italic text-slate/80" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
