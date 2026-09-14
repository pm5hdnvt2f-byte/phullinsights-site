# phullinsights-site

The Phull Insights corporate website — an operations advisory and technology
practice. Built with Next.js (App Router, static export) and Tailwind CSS,
deployed to GitHub Pages at [phullinsights.com](https://phullinsights.com).

## Structure

- `content/` — the editable website wording, organised into one clearly named
  file per page. Start here for routine updates.
- `app/` — pages: home (`page.tsx`), `about/`, `services/`, `insights/`
  (list + `[slug]` for individual posts), `contact/`
- `components/` — `Nav`, `Footer`, `RouteMark` (the hero graphic)
- `public/CNAME` — the custom domain for GitHub Pages
- `.github/workflows/deploy.yml` — builds and deploys automatically on
  every push to `main`

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Editing content

All routine wording and business-detail changes live in the `content/` folder.
The page code and styling are separate, so updating copy does not require
working with the site's layout.

See **[Editing the website without AI](EDITING.md)** for a page-by-page file
guide, exact GitHub editing steps, and an example of adding an Insights article.

## Deploying

This repo deploys itself. On every push to `main`, the GitHub Actions
workflow in `.github/workflows/deploy.yml` builds the site and publishes the
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
