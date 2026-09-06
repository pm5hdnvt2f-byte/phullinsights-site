import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Phull Insights",
  description: "Start a conversation with Phull Insights.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <h1 className="text-3xl font-medium md:text-4xl">
            Start a conversation
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-mist/75">
            The first conversation is a diagnostic in miniature: what the
            network looks like on paper, what it&apos;s actually doing, and
            whether there&apos;s a gap worth closing.
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1fr_1fr] md:px-8">
          <div>
            <h2 className="font-serif text-xl text-ink">Get in touch</h2>
            <dl className="mt-6 space-y-5 border-t border-line pt-6 text-[0.98rem]">
              <div>
                <dt className="text-slate">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:hello@phullinsights.com"
                    className="focus-ring text-ink hover:text-brass"
                  >
                    hello@phullinsights.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate">More about the founder</dt>
                <dd className="mt-1">
                  <a
                    href="https://pupsiphull.com"
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring text-ink hover:text-brass"
                  >
                    pupsiphull.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate">Based in</dt>
                <dd className="mt-1 text-ink">Berkshire, United Kingdom</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink">
              Before you write in
            </h2>
            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-slate">
              A useful first email includes:
            </p>
            <ul className="mt-4 max-w-md space-y-3 border-t border-line pt-4 text-[0.95rem] leading-relaxed text-slate">
              <li>What the network or operation looks like today — size, sites, and volume.</li>
              <li>The specific symptom prompting the conversation — cost, service, or compliance.</li>
              <li>Whether you&apos;re looking for advisory input, a technology build, or both.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
