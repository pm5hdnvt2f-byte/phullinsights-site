# Executive profile preview assessment

Assessment completed 22 September 2026 against the requested five criteria. Scores use a ten-point scale and compare the previous Recruiter route with the isolated preview. The Client and Peer routes were intentionally preserved.

| Criterion | Before | Preview | What changed |
|---|---:|---:|---|
| SEO | 7.4 | 8.8 | The Recruiter page now has a person-led title, a specific executive-profile description, one clear search intent, a stronger H1 and Person structured data aligned to the current remit. Preview no-index protection remains in place. |
| Client | 8.5 | 8.5 | No Client content or routing was changed. The shared navigation, visual language and Client to Recruiter distinction remain intact. |
| Recruiter | 6.9 | 9.3 | The route now answers mandate fit first, then separates £100m P&L accountability from £230m revenue scope, adds source context, removes two metrics absent from the supplied profile, and shows outcomes, career trajectory, capabilities, leadership approach and qualifications. |
| Flow | 7.3 | 8.9 | The previous sequence moved quickly from hero to metrics. The preview follows a recruiter decision path: proposition → mandate → scale → outcomes → career → sectors and capabilities → leadership approach → qualifications and contact. |
| AI detection and human feel | 7.0 | 8.8 | Generic compressed lists were replaced with role-specific context and the source profile's natural leadership language. Repetition and sales phrasing were reduced. This is a human-feel assessment; no AI detector can reliably prove authorship. |

## Release checks completed

- The preview is isolated in `preview-executive-profile/`; `dist/` was not rebuilt.
- All 20 preview routes pass link, metadata, canonical, JSON-LD, H1, no-index and truth-lock validation.
- `robots.txt` blocks crawling and every page contains `noindex, nofollow, noarchive`.
- £100m P&L accountability and £230m revenue scope are visibly separate and are not combined.
- The sustainability qualification is stated exactly as `Postgraduate Certificate in Sustainability, Cranfield University, 2026`.
- The Recruiter route contains no DSO or SLA claims absent from the supplied Executive Profile.
- Desktop and 390-pixel mobile layouts were visually reviewed; no horizontal overflow was found.
- The page has one H1, an orderly semantic heading structure, named links, a working mobile menu, no missing image alternative text and no browser console errors.
- Client, Recruiter and Peer navigation remains visible and distinct.
- No publishing, merge, push or production build was performed.

## Exact remaining recommendations

1. Approve the expanded Recruiter copy and each named-company outcome before any production release; the uploaded profile is sufficient for this preview but does not replace the explicit production gate.
2. Decide whether the Recruiter page should offer a controlled downloadable CV. The current truth lock says no website CV link, so the preview correctly leaves it out.
3. If the page will be shared heavily in recruiter outreach, commission a Recruiter-specific social preview card; until then, retain the existing site-wide image rather than inventing a new asset.
4. Before production, rerun the full production crawl, redirect, canonical and sitemap checks, then remove preview no-index controls only through the approved production build.
5. Keep the existing legal, privacy, form-provider, consent and analytics items blocked until their separate owners approve them; none is required to review this content preview.
