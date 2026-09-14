import type { Metadata } from "next";
import Link from "next/link";
import { methodology, servicesPageContent } from "@/content/services";

export const metadata: Metadata = servicesPageContent.metadata;

function ServiceParagraphs({
  section,
}: {
  section: (typeof servicesPageContent.sections)[number];
}) {
  return (
    <>
      {section.paragraphs.map((paragraph, index) => (
        <p key={paragraph}>
          {section.labels[index] && (
            <span className="text-ink">{section.labels[index]}</span>
          )}
          {paragraph}
        </p>
      ))}
      {"link" in section && section.link && (
        <Link
          href={section.link.href}
          className="focus-ring inline-block border-b border-ink/30 pb-0.5 text-ink hover:border-brass hover:text-brass"
        >
          {section.link.label}
        </Link>
      )}
    </>
  );
}

export default function Services() {
  const standardSections = servicesPageContent.sections.filter(
    (section) => section.slug !== "methodology",
  );
  const methodologySection = servicesPageContent.sections.find(
    (section) => section.slug === "methodology",
  )!;

  return (
    <>
      <section className="bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <h1 className="text-3xl font-medium md:text-4xl">
            {servicesPageContent.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-mist/75">
            {servicesPageContent.introduction}
          </p>
        </div>
      </section>

      {standardSections.slice(0, 2).map((section) => (
        <section key={section.slug} className="border-b border-line bg-mist">
          <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
            <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
              <h2 className="font-serif text-2xl text-ink">{section.name}</h2>
              <div className="max-w-2xl space-y-4 text-[1rem] leading-relaxed text-slate">
                <ServiceParagraphs section={section} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="methodology" className="border-b border-line bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
            <h2 className="font-serif text-2xl">{methodologySection.name}</h2>
            <div className="max-w-2xl">
              <p className="text-[1rem] leading-relaxed text-mist/75">
                {methodologySection.paragraphs[0]}
              </p>
              <div className="mt-8 space-y-6 border-t border-mist/15 pt-8">
                {methodology.map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <p className="font-serif text-lg text-brass">{item.step}</p>
                    <div>
                      <p className="font-serif text-lg">{item.name}</p>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-mist/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {standardSections.slice(2).map((section) => (
        <section key={section.slug} className="bg-mist">
          <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
            <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
              <h2 className="font-serif text-2xl text-ink">{section.name}</h2>
              <div className="max-w-2xl space-y-4 text-[1rem] leading-relaxed text-slate">
                <ServiceParagraphs section={section} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
