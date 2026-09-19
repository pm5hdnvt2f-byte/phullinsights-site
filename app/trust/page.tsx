import type { Metadata } from "next";
import Link from "next/link";
import { trustPrinciples } from "@/lib/content";

export const metadata: Metadata = {
  title: "Trust and data principles — Phull Insights",
  description:
    "How Phull Insights approaches data minimisation, evidence, AI-assisted analysis, security boundaries, and human review.",
};

export default function Trust() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-brass">
            Trust and data principles
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-medium leading-tight text-ink md:text-4xl">
            A useful diagnosis has to be explainable, proportionate, and safe
            to challenge.
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-slate">
            JourneyIQ is an operational diagnostic proposition. Any live use
            of client data would require engagement-specific controls and
            evidence before transfer. This page sets the intended principles;
            it does not claim a certification or production security status.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <div className="grid gap-px border border-line bg-line md:grid-cols-2">
            {trustPrinciples.map((principle, index) => (
              <div key={principle.name} className="bg-mist p-7 md:p-8">
                <p className="font-serif text-lg text-brass">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-serif text-xl text-ink">
                  {principle.name}
                </h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-mist">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="text-2xl font-medium md:text-3xl">
              The current boundary
            </h2>
            <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-mist/70">
              <p>
                The proposition concerns operational and supply-chain data:
                orders, commitments, shipments, receipts, inventory events,
                supplier communications, and related management information.
              </p>
              <p>
                Patient, clinical, and unnecessary personal data are outside
                the current scope. JourneyIQ is not a medical device, a
                quality-management system, or a substitute for qualified
                legal, privacy, cybersecurity, or regulatory advice.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-medium md:text-3xl">
              Before a live data engagement
            </h2>
            <ul className="mt-6 space-y-3 border-t border-mist/15 pt-6 text-[0.95rem] leading-relaxed text-mist/70">
              {[
                "Agree the question, minimum dataset, and permitted use",
                "Confirm access, storage, processor, retention, and deletion arrangements",
                "Identify restricted fields and remove data that is not required",
                "Define who can review findings and approve assumptions",
                "Document incident, backup, and recovery expectations appropriate to the engagement",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="text-brass">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <h2 className="text-2xl font-medium text-ink md:text-3xl">
            How AI fits
          </h2>
          <div className="space-y-4 text-[1rem] leading-relaxed text-slate">
            <p>
              Core operational metrics and financial logic should be
              deterministic, documented, and reconcilable. AI may assist with
              approved unstructured material or with drafting a narrative, but
              it should not become the untraceable source of a KPI or value
              claim.
            </p>
            <p>
              AI-assisted outputs should retain source references, expose
              confidence and assumptions, and remain subject to human review.
              Where evidence is insufficient, the appropriate output is a
              caveat or a stop decision — not a more confident sentence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brass">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:px-8">
          <p className="max-w-xl font-serif text-2xl leading-snug text-ink">
            Trust starts with a narrower question and less data, not a longer
            list of promises.
          </p>
          <Link
            href="/contact/"
            className="focus-ring border-b border-ink pb-0.5 text-[0.95rem] font-medium text-ink"
          >
            Ask a trust or data question
          </Link>
        </div>
      </section>
    </>
  );
}
