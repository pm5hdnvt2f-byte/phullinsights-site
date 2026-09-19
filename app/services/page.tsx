import type { Metadata } from "next";
import Link from "next/link";
import { methodology } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Phull Insights",
  description:
    "Supply-chain diagnostics, operations advisory, focused monitoring, and team capability for regulated and complex operating networks.",
};

const offers = [
  {
    name: "JourneyIQ diagnostic",
    for: "Leaders who can see the symptoms but do not yet have a trusted end-to-end account of the cause.",
    work:
      "Define the management question, reconstruct the relevant journey from available operational evidence, quantify the material friction, and prioritise the first interventions.",
    outcome:
      "An executive view, evidence trail, opportunity register, and sequenced action roadmap.",
    href: "/journeyiq/",
    link: "Explore JourneyIQ",
  },
  {
    name: "Operating model and network advisory",
    for: "Distribution, manufacturing, and branch networks under service, margin, capacity, or accountability pressure.",
    work:
      "Test how work, decisions, measures, and ownership move across the network; redesign the model where the evidence supports change.",
    outcome:
      "A practical target model, transition priorities, governance, and leadership support through the first phase of change.",
  },
  {
    name: "Diagnostic monitoring",
    for: "Teams that have completed a diagnostic and need a focused view of whether interventions are holding.",
    work:
      "Refresh agreed data, review priority exceptions, track the movement in opportunity and risk, and focus management attention on material changes.",
    outcome:
      "A repeatable review rhythm without turning the proposition into a broad dashboard programme.",
  },
  {
    name: "Team capability and handover",
    for: "Internal teams that want to own the method rather than depend on a permanent external layer.",
    work:
      "Build practical routines for journey mapping, evidence quality, root-cause review, opportunity framing, and decision follow-through.",
    outcome:
      "Definitions, templates, review routines, and a handover the team can operate after the engagement.",
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <h1 className="text-3xl font-medium md:text-4xl">Services</h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-mist/75">
            Start with the evidence gap, not a predetermined solution. The
            work can stop at a focused diagnosis, continue into operating
            model change, or establish a monitoring and handover rhythm where
            the need is genuinely recurring.
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-8 md:px-8">
          <div className="divide-y divide-line border-y border-line">
            {offers.map((offer, index) => (
              <article
                key={offer.name}
                className="grid gap-7 py-10 md:grid-cols-[90px_210px_1fr] md:gap-8"
              >
                <p className="font-serif text-xl text-brass">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="font-serif text-2xl text-ink">{offer.name}</h2>
                <div className="space-y-4 text-[0.96rem] leading-relaxed text-slate">
                  <p>
                    <span className="font-medium text-ink">For: </span>
                    {offer.for}
                  </p>
                  <p>
                    <span className="font-medium text-ink">The work: </span>
                    {offer.work}
                  </p>
                  <p>
                    <span className="font-medium text-ink">Designed output: </span>
                    {offer.outcome}
                  </p>
                  {offer.href && (
                    <Link
                      href={offer.href}
                      className="focus-ring inline-block border-b border-ink/30 pb-0.5 text-ink hover:border-brass hover:text-brass"
                    >
                      {offer.link}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-14">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-brass">
                Shared method
              </p>
              <h2 className="mt-3 text-2xl font-medium md:text-3xl">
                Every route uses the same diagnostic discipline
              </h2>
            </div>
            <div>
              <div className="grid gap-6 sm:grid-cols-2">
                {methodology.map((stage) => (
                  <div key={stage.step} className="border-t border-mist/15 pt-5">
                    <p className="font-serif text-brass">{stage.step}</p>
                    <h3 className="mt-2 font-serif text-lg">{stage.name}</h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-mist/65">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/methodology/"
                className="focus-ring mt-8 inline-block border-b border-mist/40 pb-0.5 text-[0.9rem] text-mist/80 hover:border-brass hover:text-brass"
              >
                Read the full methodology
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <h2 className="font-serif text-2xl text-ink">
            A narrower first conversation
          </h2>
          <div className="text-[0.98rem] leading-relaxed text-slate">
            <p>
              The first conversation should establish the operating symptom,
              the decision that is currently difficult, the likely evidence
              boundary, and whether a diagnostic could change the next action.
              No data transfer is needed for that conversation.
            </p>
            <div className="mt-5 flex flex-wrap gap-6">
              <Link
                href="/contact/"
                className="focus-ring border-b border-ink/40 pb-0.5 text-ink hover:border-brass hover:text-brass"
              >
                Start a conversation
              </Link>
              <Link
                href="/trust/"
                className="focus-ring border-b border-ink/25 pb-0.5 text-slate hover:border-brass hover:text-brass"
              >
                Trust and data principles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
