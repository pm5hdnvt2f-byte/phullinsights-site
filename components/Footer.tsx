import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-mist">
      <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-serif text-lg font-medium">Phull Insights</p>
            <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-mist/70">
              Operations advisory and technology for supply chains that can&apos;t
              afford to guess.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-mist/50">Practice</p>
            <ul className="mt-3 space-y-2 text-[0.95rem]">
              <li>
                <Link href="/about/" className="focus-ring text-mist/85 hover:text-brass">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services/" className="focus-ring text-mist/85 hover:text-brass">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/insights/" className="focus-ring text-mist/85 hover:text-brass">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-mist/50">Get in touch</p>
            <ul className="mt-3 space-y-2 text-[0.95rem]">
              <li>
                <a
                  href="mailto:hello@phullinsights.com"
                  className="focus-ring text-mist/85 hover:text-brass"
                >
                  hello@phullinsights.com
                </a>
              </li>
              <li>
                <Link href="/contact/" className="focus-ring text-mist/85 hover:text-brass">
                  Start a conversation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-mist/15 pt-6 text-[0.85rem] text-mist/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Phull Insights. All rights reserved.</p>
          <p>Registered in England &amp; Wales.</p>
        </div>
      </div>
    </footer>
  );
}
