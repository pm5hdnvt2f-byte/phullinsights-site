import type { Metadata } from "next";
import { contactContent } from "@/content/contact";
import { siteContent } from "@/content/site";

export const metadata: Metadata = contactContent.metadata;

export default function Contact() {
  return (
    <>
      <section className="bg-ink text-mist">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <h1 className="text-3xl font-medium md:text-4xl">
            {contactContent.heading}
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-mist/75">
            {contactContent.introduction}
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1fr_1fr] md:px-8">
          <div>
            <h2 className="font-serif text-xl text-ink">
              {contactContent.contactHeading}
            </h2>
            <dl className="mt-6 space-y-5 border-t border-line pt-6 text-[0.98rem]">
              <div>
                <dt className="text-slate">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteContent.email}`}
                    className="focus-ring text-ink hover:text-brass"
                  >
                    {siteContent.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate">{contactContent.founderLinkLabel}</dt>
                <dd className="mt-1">
                  <a
                    href={siteContent.founderWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring text-ink hover:text-brass"
                  >
                    {siteContent.founderWebsite.replace("https://", "")}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate">{contactContent.locationLabel}</dt>
                <dd className="mt-1 text-ink">{siteContent.location}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="font-serif text-xl text-ink">
              {contactContent.preparationHeading}
            </h2>
            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-slate">
              {contactContent.preparationIntroduction}
            </p>
            <ul className="mt-4 max-w-md space-y-3 border-t border-line pt-4 text-[0.95rem] leading-relaxed text-slate">
              {contactContent.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
