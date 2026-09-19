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
        <p className="mt-6 text-[0.82rem] uppercase tracking-[0.08em] text-brass">
          Preview · {post.kind}
        </p>
        <h1 className="mt-3 text-3xl font-medium text-ink md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-[0.88rem] text-slate">{post.readingTime}</p>
        <p className="mt-8 border-y border-line py-5 text-[0.92rem] italic leading-relaxed text-slate/85">
          {post.disclosure}
        </p>
        <div className="mt-10 space-y-10 text-[1.03rem] leading-relaxed text-slate">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl text-ink">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-5 space-y-3 border-l-2 border-brass pl-5 text-[0.96rem]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
        <div className="mt-14 border-t border-line pt-8">
          <p className="font-serif text-xl text-ink">
            Have a journey that needs testing against the evidence?
          </p>
          <Link
            href="/contact/"
            className="focus-ring mt-4 inline-block border-b border-ink/40 pb-0.5 text-[0.95rem] text-ink hover:border-brass hover:text-brass"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </article>
  );
}
