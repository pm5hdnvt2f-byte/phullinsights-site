import type { Metadata } from "next";
import Link from "next/link";
import { methodology } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Phull Insights",
  description:
    "Advisory, technology, methodology, and insights: four ways Phull Insights works with supply chains under pressure to perform.",
};

export default function Services() {
  return (
    <>
      <section className="bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <h1 className="text-3xl font-medium md:text-4xl">Services</h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-mist/75">
            Four ways in, depending on whether the problem is the operating
            model, the visibility into it, the discipline behind the review,
            or simply deciding whether this way of working fits.
          </p>
        </div>
      </section>

      {/* Advisory */}
      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
            <h2 className="font-serif text-2xl text-ink">Advisory</h2>
            <div className="max-w-2xl space-y-4 text-[1rem] leading-relaxed text-slate">
              <p>
                Operating model design, network and branch strategy, and
                turnaround leadership for supply chains carrying tens to
                hundreds of millions in throughput.
              </p>
              <p>
                <span className="text-ink">Who it&apos;s for: </span>
                businesses running a distribution or branch network under
                margin or service pressure, where the current structure was
                inherited rather than designed.
              </p>
              <p>
                <span className="text-ink">What you get: </span>
                a diagnosed root cause, a redesigned operating model, and
                hands-on leadership through the first phase of change where
                that&apos;s useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
            <h2 className="font-serif text-2xl text-ink">Technology</h2>
            <div className="max-w-2xl space-y-4 text-[1rem] leading-relaxed text-slate">
              <p>
                Tools that ingest the unstructured data a supply chain
                already produces — emails, ERP exports, delivery notes, scanned
                PDFs — and reconstruct the actual journey an order or shipment
                took.
              </p>
              <p>
                <span className="text-ink">Who it&apos;s for: </span>
                teams who suspect their reporting doesn&apos;t reflect
                reality, but don&apos;t have the hours to trace it by hand.
              </p>
              <p>
                <span className="text-ink">What you get: </span>
                a working visibility tool built around your own data, not a
                slide deck describing what one could look like.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="border-b border-line bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
            <h2 className="font-serif text-2xl">Methodology</h2>
            <div className="max-w-2xl">
              <p className="text-[1rem] leading-relaxed text-mist/75">
                A four-stage diagnostic, drawn from Six Sigma and PRINCE2
                discipline, that finds root cause before it prescribes a fix.
                Every engagement runs through all four stages, in order.
              </p>
              <div className="mt-8 space-y-6 border-t border-mist/15 pt-8">
                {methodology.map((m) => (
                  <div key={m.step} className="flex gap-5">
                    <p className="font-serif text-lg text-brass">{m.step}</p>
                    <div>
                      <p className="font-serif text-lg">{m.name}</p>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-mist/70">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
            <h2 className="font-serif text-2xl text-ink">Insights</h2>
            <div className="max-w-2xl space-y-4 text-[1rem] leading-relaxed text-slate">
              <p>
                Field notes and short essays drawn from live engagements —
                what&apos;s actually breaking in regulated manufacturing and
                multi-site distribution, and what fixed it.
              </p>
              <p>
                <span className="text-ink">Who it&apos;s for: </span>
                anyone deciding whether this way of working fits their
                problem, before the first conversation.
              </p>
              <Link
                href="/insights/"
                className="focus-ring inline-block border-b border-ink/30 pb-0.5 text-ink hover:border-brass hover:text-brass"
              >
                Read the latest insights
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
