const baseUrl = 'https://phullinsights.com';
const lastModified = '2026-09-22';

const pageMetadata = {
  '/': { changeFrequency: 'weekly', priority: 1.0 },
  '/client/': { changeFrequency: 'monthly', priority: 0.9 },
  '/recruiter/': { changeFrequency: 'monthly', priority: 0.9 },
  '/peer/': { changeFrequency: 'monthly', priority: 0.8 },
  '/services/': { changeFrequency: 'monthly', priority: 0.9 },
  '/methodology/': { changeFrequency: 'monthly', priority: 0.8 },
  '/about/': { changeFrequency: 'monthly', priority: 0.8 },
  '/insights/': { changeFrequency: 'weekly', priority: 0.8 },
  '/trust/': { changeFrequency: 'monthly', priority: 0.7 },
  '/privacy/': { changeFrequency: 'monthly', priority: 0.7 },
  '/journeyiq/': { changeFrequency: 'monthly', priority: 0.9 },
  '/contact/': { changeFrequency: 'monthly', priority: 0.7 },
};

function metadataForRoute(route) {
  if (pageMetadata[route]) return pageMetadata[route];
  if (/^\/services\/[^/]+\/$/.test(route)) {
    return { changeFrequency: 'monthly', priority: 0.8 };
  }
  if (/^\/insights\/[^/]+\/$/.test(route)) {
    return { changeFrequency: 'monthly', priority: 0.6 };
  }
  throw new Error(`Missing sitemap metadata for canonical route: ${route}`);
}

function createSitemapEntries(routes) {
  if (new Set(routes).size !== routes.length) {
    throw new Error('Canonical route list contains duplicate entries.');
  }

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    ...metadataForRoute(route),
  }));
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function renderSitemapXml(routes) {
  const entries = createSitemapEntries(routes);
  const urls = entries.map((entry) => [
    '  <url>',
    `    <loc>${escapeXml(entry.url)}</loc>`,
    `    <lastmod>${entry.lastModified}</lastmod>`,
    `    <changefreq>${entry.changeFrequency}</changefreq>`,
    `    <priority>${entry.priority.toFixed(1)}</priority>`,
    '  </url>',
  ].join('\n'));

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
}

module.exports = {
  baseUrl,
  createSitemapEntries,
  metadataForRoute,
  renderSitemapXml,
};
