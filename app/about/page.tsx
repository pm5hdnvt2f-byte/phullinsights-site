import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Phull Insights",
  description:
    "Phull Insights was founded by Pupsi Phull, an operations director with two decades in regulated manufacturing and multi-site distribution.",
};

export default function About() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <h1 className="text-3xl font-medium text-ink md:text-4xl">
            About Phull Insights
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-slate">
            A practice built on a simple premise: most supply chain problems
            are already visible in the data a business generates every day.
            The work is tracing it properly, then having the operational
            authority to act on what it shows.
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.4fr] md:px-8">
          <div>
            <p className="font-serif text-xl text-ink">Pupsi Phull</p>
            <p className="mt-1 text-[0.9rem] text-slate">Founder</p>
            <dl className="mt-8 space-y-5 border-t border-line pt-6 text-[0.88rem]">
              <div>
                <dt className="text-slate">Education</dt>
                <dd className="mt-1 text-ink">
                  Executive MBA, Cranfield School of Management (2022)
                </dd>
                <dd className="text-ink">BSc, De Montfort University</dd>
              </div>
              <div>
                <dt className="text-slate">Credentials</dt>
                <dd className="mt-1 text-ink">PRINCE2 Practitioner</dd>
                <dd className="text-ink">Six Sigma</dd>
                <dd className="text-ink">
                  PGCert in Sustainability (in progress)
                </dd>
              </div>
              <div>
                <dt className="text-slate">Beyond the practice</dt>
                <dd className="mt-1 text-ink">Scout District Trustee</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-5 text-[1rem] leading-relaxed text-slate">
            <p>
              Pupsi is an operations director with two decades across
              regulated manufacturing, international logistics, and
              multi-site distribution. He currently leads supply chain
              operations for a global medtech manufacturer, where the same
              diagnostic discipline behind this practice is applied daily to
              a regulated, safety-critical network.
            </p>
            <p>
              Before that, as Operations Director at RS Group, he held
              responsibility for a £100m P&amp;L across a 16-branch network
              and around 180 colleagues — and, before that, a Value-Added
              Services and Technical Director role spanning a £230m revenue
              scope. Earlier roles at DHL GlobalMatch, CRYOPDP, and DX Group
              built a grounding in international, temperature-controlled, and
              multi-carrier distribution.
            </p>
            <p>
              That range — regulated manufacturing on one side, high-volume
              multi-site distribution on the other — is why the practice
              exists. Most advisory work specialises in one or the other.
              Few operators have had to be personally accountable for the
              P&amp;L, the compliance file, and the branch network all at
              once, and design their recommendations knowing they&apos;d be
              the one implementing them.
            </p>
            <p>
              Phull Insights was built to bring that same standard —
              evidence before opinion, and a plan the team can run without
              the consultant in the room — to a small number of engagements
              at a time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
