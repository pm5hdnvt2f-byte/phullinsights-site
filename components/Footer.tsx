import Link from "next/link";
import { siteContent } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-mist">
      <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-serif text-lg font-medium">{siteContent.name}</p>
            <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-mist/70">
              {siteContent.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-mist/50">
              {siteContent.footer.practiceHeading}
            </p>
            <ul className="mt-3 space-y-2 text-[0.95rem]">
              {siteContent.navigation.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring text-mist/85 hover:text-brass"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-mist/50">
              {siteContent.footer.contactHeading}
            </p>
            <ul className="mt-3 space-y-2 text-[0.95rem]">
              <li>
                <a
                  href={`mailto:${siteContent.email}`}
                  className="focus-ring text-mist/85 hover:text-brass"
                >
                  {siteContent.email}
                </a>
              </li>
              <li>
                <Link href="/contact/" className="focus-ring text-mist/85 hover:text-brass">
                  {siteContent.footer.contactLinkLabel}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-mist/15 pt-6 text-[0.85rem] text-mist/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteContent.name}. All rights reserved.</p>
          <p>{siteContent.registeredLocation}</p>
        </div>
      </div>
    </footer>
  );
}
