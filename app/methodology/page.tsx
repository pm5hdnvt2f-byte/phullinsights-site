import type { Metadata } from "next";
import Link from "next/link";
import { evidenceLevels, methodology } from "@/lib/content";

export const metadata: Metadata = {
  title: "Diagnostic methodology | Phull Insights",
  description:
    "The Phull Insights method for mapping, measuring, diagnosing, and rebuilding complex supply-chain journeys.",
};

const stageDetails = [
  {
    questions: "What is the journey in scope, and where do material, information, and decisions actually move?",
    output: "An agreed journey boundary, event sequence, definitions, and evidence request.",
  },
  {
    questions: "Where does performance vary, what is the operational burden, and how reliable is the evidence?",
    output: "A measured baseline with data-quality caveats and comparable segments.",
  },
  {
    questions: "Which patterns are causal, which are symptoms, and what alternative explanations remain?",
    output: "A root-cause view with source references, confidence, and explicit assumptions.",
  },
  {
    questions: "Which intervention should be tested first, who owns it, and how will the result be reviewed?",
    output: "A prioritised roadmap with measures, owners, dependencies, and review points.",
  },
];

export default function Methodology() {
  return (
    <>
      <section className="bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-brass">
            Methodology
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-medium leading-tight md:text-4xl">
            Root cause before recommendation. Evidence before confidence.
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-mist/75">
            The method combines operational mapping, disciplined measurement,
            structured diagnosis, and practical redesign. It is designed to
            make the reasoning visible, including the points where the data
            cannot support a confident conclusion.
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <h2 className="text-2xl font-medium text-ink md:text-3xl">
            Four stages, each with a decision gate
          </h2>
          <div className="mt-8 divide-y divide-line border-t border-line">
            {methodology.map((stage, index) => (
              <div
                key={stage.step}
                className="grid gap-6 py-9 md:grid-cols-[90px_190px_1fr] md:gap-8"
              >
                <p className="font-serif text-xl text-brass">{stage.step}</p>
                <div>
                  <h3 className="font-serif text-2xl text-ink">{stage.name}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-slate">
                    {stage.description}
                  </p>
                </div>
                <dl className="space-y-4 text-[0.92rem] leading-relaxed">
                  <div>
                    <dt className="font-medium text-ink">Question</dt>
                    <dd className="mt-1 text-slate">
                      {stageDetails[index].questions}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink">Stage output</dt>
                    <dd className="mt-1 text-slate">
                      {stageDetails[index].output}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-brass">
                Evidence ladder
              </p>
              <h2 className="mt-3 text-2xl font-medium text-ink md:text-3xl">
                Keep facts, assumptions, and opportunities separate
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-slate">
                The presentation should never make an estimate look like an
                observed fact. Each level answers a different question and
                carries a different degree of confidence.
              </p>
            </div>
            <div className="divide-y divide-line border-t border-line">
              {evidenceLevels.map((level, index) => (
                <div
                  key={level.name}
                  className="grid gap-2 py-5 sm:grid-cols-[36px_130px_1fr]"
                >
                  <p className="font-serif text-brass">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="font-medium text-ink">{level.name}</p>
                  <div className="text-[0.9rem] leading-relaxed text-slate">
                    <p>{level.description}</p>
                    <p className="mt-1 italic text-slate/80">
                      Example: {level.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <h2 className="text-2xl font-medium md:text-3xl">
            Five rules that protect the quality of the diagnosis
          </h2>
          <div className="mt-8 grid gap-px border border-mist/15 bg-mist/15 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Agree definitions before calculating",
              "Preserve the route back to source",
              "Show data quality with the result",
              "Use human review for recommendations",
              "Stop when the evidence does not justify the next step",
            ].map((rule, index) => (
              <div key={rule} className="bg-ink p-5">
                <p className="font-serif text-brass">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-mist/80">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brass">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:px-8">
          <p className="max-w-xl font-serif text-2xl leading-snug text-ink">
            The method should make a weak case visible as quickly as it makes
            a strong one.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/journeyiq/"
              className="focus-ring border-b border-ink/50 pb-0.5 text-[0.95rem] text-ink"
            >
              Explore JourneyIQ
            </Link>
            <Link
              href="/contact/"
              className="focus-ring border-b border-ink pb-0.5 text-[0.95rem] font-medium text-ink"
            >
              Discuss a diagnostic
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
