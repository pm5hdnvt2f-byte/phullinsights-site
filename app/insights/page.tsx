import type { Metadata } from "next";
import Link from "next/link";
import { insightsPageContent, posts } from "@/content/insights";

export const metadata: Metadata = insightsPageContent.metadata;

export default function Insights() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <h1 className="text-3xl font-medium text-ink md:text-4xl">
            {insightsPageContent.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-slate">
            {insightsPageContent.introduction}
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
          <div className="divide-y divide-line border-t border-line">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}/`}
                className="focus-ring group block py-8"
              >
                <p className="text-[0.85rem] text-slate">
                  {new Date(p.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p className="mt-2 font-serif text-xl text-ink group-hover:text-brass">
                  {p.title}
                </p>
                <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-slate">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
