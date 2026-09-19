# phullinsights-site

The Phull Insights corporate website — an operations advisory and technology
practice. Built with Next.js (App Router, static export) and Tailwind CSS,
deployed to GitHub Pages at [phullinsights.com](https://phullinsights.com).

## Structure

- `app/` — pages: home, about, services, JourneyIQ, methodology, trust,
  insights (list + individual posts), and contact
- `components/` — `Nav`, `Footer`, `RouteMark` (the hero graphic)
- `lib/content.ts` — shared editable copy for services, methodology,
  diagnostic outputs, trust principles, and insights posts
- `public/CNAME` — the custom domain for GitHub Pages
- `.github/workflows/deploy-pages.yml` — builds and deploys automatically on
  every push to `main`

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Editing content

Most of the site's copy lives in `lib/content.ts`:

- `services` — the four lines shown on the home page and `/services`
- `methodology` — the four-stage diagnostic (Map, Measure, Diagnose, Rebuild)
- `diagnosticOutputs`, `evidenceLevels`, and `trustPrinciples` — shared
  JourneyIQ, methodology, and trust copy
- `posts` — the five long-form Insights articles. Add a new object with a
  unique `slug`; a page is generated automatically. Keep the `kind` and
  `disclosure` fields accurate so scenarios cannot be mistaken for client work.

Page-specific copy (the About bio, the Contact page) lives directly in each
`app/**/page.tsx` file.

## Deploying

This repo deploys itself. On every push to `main`, the GitHub Actions
workflow in `.github/workflows/deploy-pages.yml` builds the site and publishes the
`out/` folder to GitHub Pages.

**One-time setup**, before the first deploy will work:

1. In this repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**
   (not "Deploy from a branch").
3. Under **Settings → Pages → Custom domain**, enter `phullinsights.com`
   and save (the `public/CNAME` file already contains this, so GitHub will
   pick it up on the next deploy — this step confirms it and provisions
   HTTPS).
4. At your domain registrar, point `phullinsights.com` at GitHub Pages:
   add the four GitHub Pages `A` records (185.199.108.153,
   185.199.109.153, 185.199.110.153, 185.199.111.153) for the apex domain,
   or a `CNAME` record to `<your-github-username>.github.io` if you're
   using a `www` subdomain instead. GitHub's current instructions are at
   https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

After that, every push to `main` — including one made by editing a file
directly in the GitHub web UI — will rebuild and redeploy the live site
within a couple of minutes. Check the **Actions** tab on this repo to watch
a deploy or see why one failed.

## Tech notes

- `next.config.ts` sets `output: "export"` so `npm run build` produces a
  fully static `out/` folder — required for GitHub Pages, which can't run
  a Node server.
- Fonts are IBM Plex Serif (headings) and IBM Plex Sans (body), loaded via
  `next/font/google`.
- The Contact page currently just lists an email address and a short
  checklist — there's no working form, since GitHub Pages can't process
  form submissions server-side. If you want an actual contact form, the
  simplest options are a third-party form endpoint (e.g. Formspree) or
  moving hosting to a platform with serverless functions.

## JourneyIQ demo branch

The JourneyIQ expansion is prepared on the preview/journeyiq-expansion branch.
The GitHub Pages workflow deploys only from main, so this branch remains a
review-only demo unless it is explicitly merged later.

Shared proposition, methodology, trust, and article content is kept in
lib/content.ts. Illustrative insights include a visible disclosure and must not
be presented as real client work or verified customer outcomes.
