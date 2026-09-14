import Link from "next/link";
import RouteMark from "@/components/RouteMark";
import { homeContent } from "@/content/home";
import { posts } from "@/content/insights";
import { methodology, serviceSummaries } from "@/content/services";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-mist">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28 md:px-8">
          <div>
            <h1 className="text-[2.1rem] leading-[1.15] font-medium md:text-[2.9rem]">
              {homeContent.hero.heading}
            </h1>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-mist/75">
              {homeContent.hero.introduction}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href={homeContent.hero.primaryLink.href}
                className="focus-ring bg-brass px-6 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:bg-brass-deep"
              >
                {homeContent.hero.primaryLink.label}
              </Link>
              <Link
                href={homeContent.hero.secondaryLink.href}
                className="focus-ring border-b border-mist/40 pb-0.5 text-[0.95rem] text-mist/85 hover:border-brass hover:text-brass"
              >
                {homeContent.hero.secondaryLink.label}
              </Link>
            </div>
          </div>
          <RouteMark />
        </div>
      </section>

      {/* Positioning strip */}
      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
          <p className="max-w-2xl text-[1.05rem] leading-relaxed text-slate">
            {homeContent.positioning.introduction}
          </p>
          <dl className="mt-10 grid gap-8 sm:grid-cols-3">
            {homeContent.positioning.statistics.map((statistic) => (
              <div key={statistic.value}>
                <dt className="font-serif text-3xl text-ink">{statistic.value}</dt>
                <dd className="mt-1 text-sm text-slate">{statistic.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services */}
      <section className="bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <h2 className="text-2xl font-medium text-ink md:text-3xl">
            {homeContent.servicesHeading}
          </h2>
          <div className="mt-8 divide-y divide-line border-t border-line">
            {serviceSummaries.map((s) => (
              <div
                key={s.slug}
                className="grid gap-2 py-7 md:grid-cols-[180px_1fr] md:gap-8"
              >
                <p className="font-serif text-xl text-ink">{s.name}</p>
                <p className="max-w-2xl text-[0.98rem] leading-relaxed text-slate">
                  {s.summary}
                </p>
              </div>
            ))}
          </div>
          <Link
            href={homeContent.servicesLink.href}
            className="focus-ring mt-8 inline-block border-b border-ink/30 pb-0.5 text-[0.95rem] text-ink hover:border-brass hover:text-brass"
          >
            {homeContent.servicesLink.label}
          </Link>
        </div>
      </section>

      {/* Methodology preview */}
      <section id="methodology" className="bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <h2 className="text-2xl font-medium md:text-3xl">
            {homeContent.methodologyHeading}
          </h2>
          <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-mist/70">
            {homeContent.methodologyIntroduction}
          </p>
          <div className="mt-10 grid gap-8 border-t border-mist/15 pt-10 sm:grid-cols-2 md:grid-cols-4">
            {methodology.map((m) => (
              <div key={m.step}>
                <p className="font-serif text-lg text-brass">{m.step}</p>
                <p className="mt-2 font-serif text-lg text-mist">{m.name}</p>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-mist/65">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights preview */}
      <section className="bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-2xl font-medium text-ink md:text-3xl">
              {homeContent.insightsHeading}
            </h2>
            <Link
              href={homeContent.insightsLink.href}
              className="focus-ring border-b border-ink/30 pb-0.5 text-[0.9rem] text-ink hover:border-brass hover:text-brass"
            >
              {homeContent.insightsLink.label}
            </Link>
          </div>
          <div className="mt-8 divide-y divide-line border-t border-line">
            {posts.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}/`}
                className="focus-ring group block py-6"
              >
                <p className="font-serif text-lg text-ink group-hover:text-brass">
                  {p.title}
                </p>
                <p className="mt-2 max-w-2xl text-[0.92rem] leading-relaxed text-slate">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-brass">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-lg font-serif text-2xl leading-snug text-ink">
              {homeContent.callToAction.text}
            </p>
            <Link
              href={homeContent.callToAction.link.href}
              className="focus-ring border-b border-ink pb-0.5 text-[0.95rem] font-medium text-ink"
            >
              {homeContent.callToAction.link.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
