import type { Metadata } from "next";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = aboutContent.metadata;

export default function About() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <h1 className="text-3xl font-medium text-ink md:text-4xl">
            {aboutContent.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-slate">
            {aboutContent.introduction}
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.4fr] md:px-8">
          <div>
            <p className="font-serif text-xl text-ink">
              {aboutContent.founder.name}
            </p>
            <p className="mt-1 text-[0.9rem] text-slate">
              {aboutContent.founder.role}
            </p>
            <dl className="mt-8 space-y-5 border-t border-line pt-6 text-[0.88rem]">
              {aboutContent.founder.details.map((detail) => (
                <div key={detail.heading}>
                  <dt className="text-slate">{detail.heading}</dt>
                  {detail.items.map((item, index) => (
                    <dd
                      key={item}
                      className={`${index === 0 ? "mt-1 " : ""}text-ink`}
                    >
                      {item}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-5 text-[1rem] leading-relaxed text-slate">
            {aboutContent.founder.biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
