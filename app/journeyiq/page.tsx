import type { Metadata } from "next";
import Link from "next/link";
import RouteMark from "@/components/RouteMark";
import { diagnosticOutputs, methodology } from "@/lib/content";

export const metadata: Metadata = {
  title: "JourneyIQ supply chain diagnostic | Phull Insights",
  description:
    "An evidence-led supply-chain diagnostic for regulated manufacturers, MedTech businesses, and complex operating networks.",
};

const questions = [
  "Where are service, inventory, and management effort being lost?",
  "Which exceptions are isolated events, and which are repeatable patterns?",
  "What is observed, what is calculated, and what still depends on an assumption?",
  "Which intervention deserves attention first, and what evidence supports it?",
];

const suitableFor = [
  "Regulated manufacturers and MedTech supply chains",
  "ERP-enabled operations still relying on spreadsheet and email workarounds",
  "Leaders who need an end-to-end view across suppliers, planning, logistics, and internal handoffs",
  "Teams that want a focused diagnostic before considering a major systems programme",
];

const notDesignedFor = [
  "Clinical or patient-facing decision-making",
  "Replacing a quality-management system or regulatory review",
  "Promising savings before the evidence and assumptions are agreed",
  "A generic dashboard implementation without a defined management question",
];

export default function JourneyIQ() {
  return (
    <>
      <section className="bg-ink text-mist">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8 md:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brass">
              JourneyIQ supply chain diagnostic
            </p>
            <h1 className="mt-5 text-[2.15rem] font-medium leading-[1.15] md:text-[2.9rem]">
              From fragmented operating data to a prioritised case for action.
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-mist/75">
              JourneyIQ reconstructs the end-to-end supply-chain journey,
              identifies where performance and value may be leaking, and
              turns the evidence into a focused improvement roadmap without
              making an ERP replacement the starting assumption.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="/contact/"
                className="focus-ring bg-brass px-6 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:bg-brass-deep"
              >
                Discuss a diagnostic
              </Link>
              <Link
                href="/methodology/"
                className="focus-ring border-b border-mist/40 pb-0.5 text-[0.95rem] text-mist/85 hover:border-brass hover:text-brass"
              >
                See the method
              </Link>
            </div>
          </div>
          <RouteMark />
        </div>
      </section>

      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
            <h2 className="text-2xl font-medium text-ink md:text-3xl">
              A diagnostic, not another visibility promise
            </h2>
            <div className="space-y-4 text-[1rem] leading-relaxed text-slate">
              <p>
                Extraction tools and operational dashboards are widely
                available. The harder question is what the evidence means,
                what it is costing, and which management action should follow.
              </p>
              <p>
                JourneyIQ is positioned as a service-led diagnostic for
                regulated and operationally complex environments. Technology
                supports the work; the proposition is the quality, speed, and
                financial prioritisation of the diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <h2 className="text-2xl font-medium text-ink md:text-3xl">
            The questions it is built to answer
          </h2>
          <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2">
            {questions.map((question, index) => (
              <div key={question} className="bg-mist p-7">
                <p className="font-serif text-lg text-brass">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 max-w-sm text-[1rem] leading-relaxed text-ink">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-brass">
                The diagnostic
              </p>
              <h2 className="mt-3 text-2xl font-medium md:text-3xl">
                Four stages from evidence to action
              </h2>
            </div>
            <Link
              href="/methodology/"
              className="focus-ring w-fit border-b border-mist/40 pb-0.5 text-[0.9rem] text-mist/80 hover:border-brass hover:text-brass"
            >
              Explore the full methodology
            </Link>
          </div>
          <div className="mt-10 grid gap-8 border-t border-mist/15 pt-10 sm:grid-cols-2 md:grid-cols-4">
            {methodology.map((item) => (
              <div key={item.step}>
                <p className="font-serif text-lg text-brass">{item.step}</p>
                <h3 className="mt-2 font-serif text-lg text-mist">{item.name}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-mist/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <h2 className="text-2xl font-medium text-ink md:text-3xl">
            What the engagement is designed to leave behind
          </h2>
          <div className="mt-8 divide-y divide-line border-t border-line">
            {diagnosticOutputs.map((output) => (
              <div
                key={output.name}
                className="grid gap-2 py-7 md:grid-cols-[220px_1fr] md:gap-10"
              >
                <h3 className="font-serif text-xl text-ink">{output.name}</h3>
                <p className="max-w-2xl text-[0.98rem] leading-relaxed text-slate">
                  {output.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-serif text-2xl text-ink">A good fit</h2>
            <ul className="mt-6 space-y-3 border-t border-line pt-6 text-[0.95rem] leading-relaxed text-slate">
              {suitableFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="text-brass">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-ink">Not designed for</h2>
            <ul className="mt-6 space-y-3 border-t border-line pt-6 text-[0.95rem] leading-relaxed text-slate">
              {notDesignedFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="text-brass">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brass">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:px-8">
          <div>
            <p className="max-w-xl font-serif text-2xl leading-snug text-ink">
              Start with the management question. Then decide what evidence is
              worth assembling.
            </p>
            <Link
              href="/trust/"
              className="focus-ring mt-3 inline-block border-b border-ink/40 pb-0.5 text-[0.9rem] text-ink"
            >
              Review the trust and data principles
            </Link>
          </div>
          <Link
            href="/contact/"
            className="focus-ring border-b border-ink pb-0.5 text-[0.95rem] font-medium text-ink"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
