import Link from "next/link";
import RouteMark from "@/components/RouteMark";
import { services, methodology, posts } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-mist">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28 md:px-8">
          <div>
            <h1 className="text-[2.1rem] leading-[1.15] font-medium md:text-[2.9rem]">
              The friction in your supply chain is measurable. So is the fix.
            </h1>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-mist/75">
              Phull Insights is an operations advisory and technology practice
              for supply chains that can&apos;t afford to guess — regulated
              manufacturing, medtech distribution, and multi-site networks
              under pressure to perform.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="/contact/"
                className="focus-ring bg-brass px-6 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:bg-brass-deep"
              >
                Start a conversation
              </Link>
              <Link
                href="/#methodology"
                className="focus-ring border-b border-mist/40 pb-0.5 text-[0.95rem] text-mist/85 hover:border-brass hover:text-brass"
              >
                See how the diagnostic works
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
            Most operating reviews start from an org chart and a set of
            opinions. This practice starts from the actual journey — the
            emails, exceptions, and handoffs a network produces every day —
            and builds the case for change from there.
          </p>
          <dl className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <dt className="font-serif text-3xl text-ink">£330m+</dt>
              <dd className="mt-1 text-sm text-slate">
                combined P&amp;L and revenue scope led across operations roles
              </dd>
            </div>
            <div>
              <dt className="font-serif text-3xl text-ink">16</dt>
              <dd className="mt-1 text-sm text-slate">
                branch distribution network restructured and turned around
              </dd>
            </div>
            <div>
              <dt className="font-serif text-3xl text-ink">4</dt>
              <dd className="mt-1 text-sm text-slate">
                stages in the diagnostic — map, measure, diagnose, rebuild
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Services */}
      <section className="bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <h2 className="text-2xl font-medium text-ink md:text-3xl">
            Four ways in
          </h2>
          <div className="mt-8 divide-y divide-line border-t border-line">
            {services.map((s) => (
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
            href="/services/"
            className="focus-ring mt-8 inline-block border-b border-ink/30 pb-0.5 text-[0.95rem] text-ink hover:border-brass hover:text-brass"
          >
            More on how each line works
          </Link>
        </div>
      </section>

      {/* Methodology preview */}
      <section id="methodology" className="bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <h2 className="text-2xl font-medium md:text-3xl">The diagnostic</h2>
          <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-mist/70">
            Every engagement runs through the same four stages, in this
            order, before a single recommendation is made.
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
              Recent insights
            </h2>
            <Link
              href="/insights/"
              className="focus-ring border-b border-ink/30 pb-0.5 text-[0.9rem] text-ink hover:border-brass hover:text-brass"
            >
              All insights
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
              If a network review is overdue, the first conversation is free.
            </p>
            <Link
              href="/contact/"
              className="focus-ring border-b border-ink pb-0.5 text-[0.95rem] font-medium text-ink"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
