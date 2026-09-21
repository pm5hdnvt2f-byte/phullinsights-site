const fs = require('fs');
const path = require('path');

const dist = process.env.PHULL_OUTPUT_DIR
  ? path.resolve(process.env.PHULL_OUTPUT_DIR)
  : path.resolve(__dirname, '../dist');
const base = 'https://phullinsights.com';
const routes = JSON.parse(fs.readFileSync(path.join(dist, 'routes.json'), 'utf8'));
const errors = [];
const titles = new Map();
const descriptions = new Map();

function htmlPath(route) {
  return route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.replace(/^\//, ''), 'index.html');
}

function routeForFile(file) {
  const relative = path.relative(dist, file).replace(/\\/g, '/');
  return relative === 'index.html' ? '/' : `/${relative.replace(/\/index\.html$/, '')}/`;
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
  if (!description) errors.push(`${route}: missing meta description`);
  if (canonical !== `${base}${route}`) errors.push(`${route}: canonical ${canonical || 'missing'} does not match route`);
  if (!robots || !robots.includes('noindex')) errors.push(`${route}: preview noindex missing`);
  if (h1Count !== 1) errors.push(`${route}: expected one H1, found ${h1Count}`);
  if (!html.includes(`property="og:url" content="${base}${route}"`)) errors.push(`${route}: Open Graph URL mismatch`);
  if (!html.includes('property="og:image"')) errors.push(`${route}: Open Graph image missing`);
  if (!html.includes('name="twitter:card" content="summary_large_image"')) errors.push(`${route}: large Twitter card missing`);
  if (title) { if (titles.has(title)) errors.push(`${route}: duplicate title with ${titles.get(title)}`); else titles.set(title, route); }
  if (description) { if (descriptions.has(description)) errors.push(`${route}: duplicate description with ${descriptions.get(description)}`); else descriptions.set(description, route); }
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
if (/PGCert in Sustainability|Sustainability \(in progress\)|in progress/i.test(allHtml)) errors.push('Outdated qualification wording found');
if (/£330|330m|GBP 330 million/i.test(allHtml)) errors.push('Combined scope figure found');
if (/Owner-approved wording: retain the Punjabi meaning and transliteration/i.test(allHtml)) errors.push('Internal editorial wording found in public output');
if (/href="\/track-record\//.test(allHtml)) errors.push('Obsolete /track-record/ link found');
if (!allHtml.includes('Making complex operations clearer and easier to run.')) errors.push('Required homepage hero wording missing');
if (/—|&mdash;|&#8212;|&#x2014;/i.test(allHtml)) errors.push('Em dash found in generated website');
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
for (const route of ['/client/', '/recruiter/', '/peer/']) if (!routes.includes(route)) errors.push(`Audience route missing: ${route}`);
if (routes.includes('/executive-leadership/')) errors.push('Legacy executive-leadership route must not remain canonical');
const executiveRedirect = fs.readFileSync(path.join(dist, 'executive-leadership', 'index.html'), 'utf8');
if (!executiveRedirect.includes('href="https://phullinsights.com/recruiter/"') || !executiveRedirect.includes('url=/recruiter/')) errors.push('Legacy executive-leadership redirect is incorrect');
for (const discipline of ['Operations', 'Supply Chain', 'Transformation', 'Sustainable Performance']) if (!allHtml.includes(`>${discipline}<`)) errors.push(`Four-discipline model wording missing: ${discipline}`);
if (!titles.has('JourneyIQ Operational Diagnostic Concept | Phull Insights')) errors.push('JourneyIQ page title missing');
if (!allHtml.includes('Postgraduate Certificate in Sustainability, Cranfield University, 2026')) errors.push('Exact Cranfield qualification wording missing');
if (!allHtml.includes('£230m revenue scope') || !allHtml.includes('£100m P&amp;L accountability')) errors.push('Separate scope proof points missing');
if (fs.existsSync(path.join(dist, 'sitemap.xml'))) errors.push('Preview must not include sitemap.xml');
for (const image of ['home.png', 'services.png', 'insights.png']) if (!fs.existsSync(path.join(dist, 'social', image))) errors.push(`Social preview image missing: ${image}`);
const robotsTxt = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8');
if (!robotsTxt.includes('Disallow: /')) errors.push('Preview robots.txt does not block crawling');

if (errors.length) {
  console.error(`Preview validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Validated ${routes.length} routes: links, unique metadata, canonicals, noindex, H1s, JSON-LD and truth-lock checks all pass.`);
