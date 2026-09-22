const fs = require('fs');
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createSitemapEntries } = require('../lib/sitemap');

const dist = path.resolve(__dirname, '../dist');
const base = 'https://phullinsights.com';
const routes = JSON.parse(fs.readFileSync(path.join(dist, 'routes.json'), 'utf8'));
const errors = [];
const titles = new Map();
const descriptions = new Map();
const requiredSitemapRoutes = [
  '/',
  '/client/',
  '/recruiter/',
  '/peer/',
  '/services/',
  '/services/supply-chain-consultancy/',
  '/services/operations-transformation/',
  '/services/medtech-supply-chain/',
  '/services/operational-excellence/',
  '/methodology/',
  '/about/',
  '/insights/',
  '/trust/',
  '/privacy/',
  '/journeyiq/',
  '/contact/',
];

function htmlPath(route) {
  return route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.replace(/^\//, ''), 'index.html');
}

for (const route of routes) {
  const file = htmlPath(route);
  if (!fs.existsSync(file)) { errors.push(`${route}: missing index.html`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1];
  const robots = html.match(/<meta name="robots" content="([^"]+)">/)?.[1];
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (!title) errors.push(`${route}: missing title`);
  if (!description) errors.push(`${route}: missing description`);
  if (canonical !== `${base}${route}`) errors.push(`${route}: canonical mismatch`);
  if (!robots || !robots.includes('index') || robots.includes('noindex')) errors.push(`${route}: production index directive missing`);
  if (h1Count !== 1) errors.push(`${route}: expected one H1, found ${h1Count}`);
  if (!html.includes(`property="og:url" content="${base}${route}"`)) errors.push(`${route}: Open Graph URL mismatch`);
  if (!html.includes('property="og:image"')) errors.push(`${route}: Open Graph image missing`);
  if (/TEST PREVIEW|not published to production|Preview form only|non-production outline/i.test(html)) errors.push(`${route}: preview-only wording found`);
  if (title) { if (titles.has(title)) errors.push(`${route}: duplicate title`); else titles.set(title, route); }
  if (description) { if (descriptions.has(description)) errors.push(`${route}: duplicate description`); else descriptions.set(description, route); }
  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(block[1]); } catch (error) { errors.push(`${route}: invalid JSON-LD`); }
  }
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const target = href.split('#')[0].split('?')[0];
    if (!target) continue;
    const targetFile = target.endsWith('/') ? htmlPath(target) : path.join(dist, target.replace(/^\//, ''));
    if (!fs.existsSync(targetFile)) errors.push(`${route}: broken internal link ${href}`);
  }
}

const allHtml = routes.map((route) => fs.readFileSync(htmlPath(route), 'utf8')).join('\n');
if (/—|&mdash;|&#8212;|&#x2014;/i.test(allHtml)) errors.push('Em dash found in production website');
if (/PGCert in Sustainability|Sustainability \(in progress\)/i.test(allHtml)) errors.push('Outdated qualification wording found');
if (/£330m|GBP 330 million/i.test(allHtml)) errors.push('Combined scope figure found');
if (/Owner-approved wording: retain the Punjabi meaning and transliteration/i.test(allHtml)) errors.push('Internal editorial wording found in public output');
if (!allHtml.includes('Postgraduate Certificate in Sustainability, Cranfield University, 2026')) errors.push('Exact qualification wording missing');
if (!allHtml.includes('£230m revenue scope') || !allHtml.includes('£100m P&amp;L accountability')) errors.push('Separate scope proof points missing');
for (const route of routes) {
  const html = fs.readFileSync(htmlPath(route), 'utf8');
  if (!/<nav class="desktop-nav"[\s\S]*?<a href="\/insights\/">Insights<\/a>/.test(html)) errors.push(`${route}: Insights missing from primary navigation`);
  if (route !== '/insights/' && /href="\/insights\/[^"/]+\/"/.test(html)) errors.push(`${route}: article links must be selected through the Insights hub`);
}
const publishedCaseRoutes = routes.filter((route) => /^\/insights\/[^/]+\/$/.test(route));
for (const route of publishedCaseRoutes) {
  const html = fs.readFileSync(htmlPath(route), 'utf8');
  if (/Scenario status:|Illustrative scenario/i.test(html)) errors.push(`${route}: old illustrative scenario wording found`);
  if (!html.includes('Identity anonymised. Every published number is valid')) errors.push(`${route}: verified evidence wording missing`);
}
const insightsHub = fs.readFileSync(htmlPath('/insights/'), 'utf8');
if (!insightsHub.includes('Identity anonymised. Every number verified.')) errors.push('Insights evidence standard heading missing');
if (!insightsHub.includes('Every number published in a case study is valid')) errors.push('Insights verification explanation missing');
if (routes.includes('/executive-leadership/')) errors.push('Legacy executive-leadership route must not remain canonical');
const executiveRedirect = fs.readFileSync(path.join(dist, 'executive-leadership', 'index.html'), 'utf8');
if (!executiveRedirect.includes('href="https://phullinsights.com/recruiter/"') || !executiveRedirect.includes('url=/recruiter/')) errors.push('Legacy executive-leadership redirect is incorrect');
if (allHtml.includes('id="preview-contact-form"')) errors.push('Disabled preview form found in production');
if (!allHtml.includes('mailto:hello@phullinsights.com?subject=Client%20operational%20diagnostic%20enquiry')) errors.push('Client email route missing');
if (!allHtml.includes('mailto:hello@phullinsights.com?subject=Executive%20mandate%20discussion')) errors.push('Recruiter email route missing');
if (!allHtml.includes('mailto:hello@phullinsights.com?subject=Peer%20or%20speaking%20enquiry')) errors.push('Peer email route missing');

const robots = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8');
if (!robots.includes('Allow: /') || robots.includes('Disallow: /')) errors.push('Production robots policy is incorrect');
const sitemapPath = path.join(dist, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  errors.push('Production sitemap missing');
} else {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const sitemapEntries = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>\s*<changefreq>([^<]+)<\/changefreq>\s*<priority>([^<]+)<\/priority>\s*<\/url>/g)]
    .map((match) => ({ url: match[1], lastModified: match[2], changeFrequency: match[3], priority: Number(match[4]) }));
  let expectedSitemapEntries = [];
  try {
    expectedSitemapEntries = createSitemapEntries(routes);
  } catch (error) {
    errors.push(error.message);
  }

  if (sitemapEntries.length !== routes.length) {
    errors.push(`Sitemap contains ${sitemapEntries.length} entries for ${routes.length} canonical routes`);
  }
  if (new Set(sitemapEntries.map((entry) => entry.url)).size !== sitemapEntries.length) {
    errors.push('Sitemap contains duplicate URLs');
  }
  for (const requiredRoute of requiredSitemapRoutes) {
    if (!routes.includes(requiredRoute)) errors.push(`Required canonical route missing: ${requiredRoute}`);
  }
  for (const expected of expectedSitemapEntries) {
    const actual = sitemapEntries.find((entry) => entry.url === expected.url);
    if (!actual) {
      errors.push(`Sitemap URL missing: ${expected.url}`);
      continue;
    }
    if (
      actual.lastModified !== expected.lastModified
      || actual.changeFrequency !== expected.changeFrequency
      || actual.priority !== expected.priority
    ) {
      errors.push(`Sitemap metadata mismatch: ${expected.url}`);
    }
  }
  for (const route of publishedCaseRoutes) {
    if (!sitemapEntries.some((entry) => entry.url === `${base}${route}`)) {
      errors.push(`Published Insight missing from sitemap: ${route}`);
    }
  }
}
if (fs.readFileSync(path.join(dist, 'CNAME'), 'utf8').trim() !== 'phullinsights.com') errors.push('CNAME missing or incorrect');
if (fs.existsSync(path.join(dist, 'contact', 'thank-you', 'index.html'))) errors.push('Inactive thank-you route should not ship');

if (errors.length) {
  console.error(`Production validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Validated production build: ${routes.length} canonical routes, links, metadata, indexability, contact routes, sitemap and CNAME all pass.`);
