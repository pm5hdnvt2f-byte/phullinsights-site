const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const base = 'https://phullinsights.com';

execFileSync(process.execPath, [path.join(__dirname, 'build-preview.js')], {
  cwd: root,
  env: { ...process.env, PHULL_BUILD_MODE: 'production' },
  stdio: 'inherit',
});

const routeFile = path.join(dist, 'routes.json');
const routes = JSON.parse(fs.readFileSync(routeFile, 'utf8')).filter((route) => route !== '/contact/thank-you/');
fs.rmSync(path.join(dist, 'contact', 'thank-you'), { recursive: true, force: true });

const productionReplacements = [
  ['This preview describes the intended operating principles.', 'This page describes the intended operating principles.'],
  ['This preview does not imply that any particular provider or control is already in place.', 'This page does not imply that any particular provider or control is already in place.'],
  ['Proposed web-enquiry periods are listed on the privacy page for owner and legal review.', 'The approved web-enquiry periods are listed on the privacy page.'],
  ['Preview privacy outline for Phull Insights business enquiries, with confirmed controller wording and approved retention periods.', 'Privacy outline for Phull Insights business enquiries, with confirmed controller wording and approved retention periods.'],
  ['Privacy · Preview outline', 'Privacy'],
  ['This is a non-production outline. The controller wording and retention periods are owner-approved; the postal address, providers, data flows and approval date still require completion before publication.', 'The controller wording and retention periods are owner-approved. The postal address, hosted-form provider and analytics platform remain scheduled for the next update.'],
  ['To be updated before production.', 'To be updated in the next privacy update.'],
  ['The preview uses local storage only to remember the colour-theme choice and does not run analytics.', 'This site uses local storage only to remember the colour-theme choice and does not run analytics.'],
  ['The production analytics platform remains open.', 'The analytics platform remains open for the next update.'],
  ['Until the final notice is approved, privacy questions may be sent to', 'Privacy questions may be sent to'],
  ['JourneyIQ remains the working name for this preview.', 'JourneyIQ remains the working name for the current site.'],
  ['JourneyIQ remains visible in this preview and is scheduled for a naming decision in the next version.', 'JourneyIQ remains visible on the current site; the timing of the next naming decision remains open.'],
  ['The requested Phull Insights preview page could not be found.', 'The requested Phull Insights page could not be found.'],
  ['That page is not part of this preview.', 'That page could not be found.'],
];

const productionContactPanel = `<div class="form-panel"><h2>Choose an email route</h2><p>Until the hosted form is selected, each route opens an email addressed to Pupsi. No response-time promise is made.</p><div class="email-route-list"><a class="btn btn-primary" data-event="client_contact" href="mailto:hello@phullinsights.com?subject=Client%20operational%20diagnostic%20enquiry">Client enquiry <span aria-hidden="true">→</span></a><a class="btn btn-ghost" data-event="recruiter_contact" href="mailto:hello@phullinsights.com?subject=Executive%20mandate%20discussion">Recruiter enquiry <span aria-hidden="true">→</span></a><a class="btn btn-ghost" data-event="peer_contact" href="mailto:hello@phullinsights.com?subject=Peer%20or%20speaking%20enquiry">Peer or speaking enquiry <span aria-hidden="true">→</span></a></div><p class="form-warning">Do not send patient data, special-category personal data, confidential files or operational extracts.</p></div>`;

for (const route of routes) {
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.replace(/^\//, ''), 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  for (const [from, to] of productionReplacements) html = html.split(from).join(to);
  if (route === '/contact/') {
    html = html.replace(
      'Choose the route that fits. All three routes are designed to reach Pupsi at hello@phullinsights.com and to be tracked separately. The preview form remains disabled until the hosted provider and spam controls are approved.',
      'Choose the route that fits. All three routes reach Pupsi at hello@phullinsights.com and remain distinguishable for the next analytics update.'
    );
    html = html.replace(/<div class="form-panel"><form id="preview-contact-form"[\s\S]*?<\/form><p>Planned recipient for every route:[\s\S]*?<\/p><\/div>/, productionContactPanel);
  }
  fs.writeFileSync(file, html);
}

const redirects = {
  '/executive-leadership/': '/recruiter/',
  '/track-record/': '/insights/',
  '/track-record/otif-branch-network/': '/insights/otif-score-that-hid-the-real-problem/',
  '/track-record/temperature-controlled-logistics/': '/insights/cold-chain-sla-redesign/',
  '/track-record/regulated-medtech-baseline/': '/insights/',
  '/track-record/network-restructuring/': '/insights/',
  '/medtech-supply-chain-consultancy/': '/services/medtech-supply-chain/',
  '/operations-network-transformation/': '/services/operations-transformation/',
  '/supply-chain-diagnostic/': '/services/supply-chain-consultancy/',
  '/insights/delivery-confirmed-otif/': '/insights/otif-score-that-hid-the-real-problem/',
  '/insights/inventory-rises-while-service-falls/': '/insights/inventory-service-protected/',
  '/insights/when-a-control-becomes-a-queue/': '/insights/',
  '/insights/every-spreadsheet-tells-a-different-story/': '/methodology/',
  '/insights/diagnostic-that-says-do-not-build/': '/journeyiq/',
};

for (const [from, to] of Object.entries(redirects)) {
  const folder = path.join(dist, from.replace(/^\//, '').replace(/\/$/, ''));
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, 'index.html'), `<!doctype html>
<html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, follow"><title>Page moved | Phull Insights</title>
<link rel="canonical" href="${base}${to}"><meta http-equiv="refresh" content="0; url=${to}">
</head><body><p>This page has moved to <a href="${to}">${to}</a>.</p></body></html>`);
}

fs.writeFileSync(routeFile, JSON.stringify(routes, null, 2));
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *
Allow: /
Sitemap: ${base}/sitemap.xml
`);
fs.writeFileSync(path.join(dist, 'CNAME'), 'phullinsights.com\n');
fs.writeFileSync(path.join(dist, '.nojekyll'), '');
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${base}${route}</loc><lastmod>2026-09-21</lastmod></url>`).join('\n')}
</urlset>
`);

let notFound = fs.readFileSync(path.join(dist, '404.html'), 'utf8');
notFound = notFound.replace('index, follow, max-image-preview:large', 'noindex, follow');
for (const [from, to] of productionReplacements) notFound = notFound.split(from).join(to);
fs.writeFileSync(path.join(dist, '404.html'), notFound);

console.log(`Generated production build: ${routes.length} canonical routes and ${Object.keys(redirects).length} legacy redirect pages.`);
