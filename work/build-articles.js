const fs = require('fs');
const path = require('path');
const { articles, publicationOrder } = require('./articles');

const base = 'https://phullinsights.com';
const published = '2026-09-22';
const ordered = publicationOrder.map((number) => articles.find((article) => article.number === number));

function escape(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function card(article, index) {
  return `<article class="article-index-card"><div class="article-card-meta"><span>${String(index + 1).padStart(2, '0')}</span><span>${escape(article.category)}</span><span>2 min read</span></div><h3>${escape(article.title)}</h3><p>${escape(article.deck)}</p><a class="text-link card-cta" href="/insights/${article.slug}/">Read article <span aria-hidden="true">→</span></a></article>`;
}

function relatedTo(article) {
  return ordered.filter((item) => item.number !== article.number).sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category)).slice(0, 3);
}

function articleBody(article, primaryCta) {
  const related = relatedTo(article);
  return `<article class="article-content"><div class="article-shell">
    <div class="article-byline"><strong>Pupsi Phull · Phull Insights</strong><span>22 September 2026</span><span>2 min read</span><span>${escape(article.category)}</span></div>
    <aside class="evidence-boundary"><strong>Evidence boundary</strong><p>Personal analysis and professional reflection based on earlier postgraduate work. Named-company examples describe historical research, not current 2026 corporate policies, figures or commitments. No unpublished case result is represented as a verified outcome.</p></aside>
    <div class="article-prose"><h2>Why this matters</h2><p>${escape(article.why)}</p><h2>What the evidence suggests</h2><p>${escape(article.evidence)}</p><h2>What it looks like in practice</h2><p>${escape(article.practice)}</p></div>
    <section class="action-section" aria-labelledby="actions-heading"><p class="eyebrow">Practical next steps</p><h2 id="actions-heading">Three things leaders can do now</h2><div class="action-grid">${article.actions.map((action, index) => `<div class="action-card"><span>0${index + 1}</span><p>${escape(action)}</p></div>`).join('')}</div></section>
    <section class="perspective-panel"><p class="eyebrow">Phull Insights Perspective</p><h2>The view beneath the headline.</h2><p>${escape(article.perspective)}</p></section>
    <ul class="tag-list" aria-label="Article tags">${article.tags.map((tag) => `<li>${escape(tag)}</li>`).join('')}</ul>
    <p class="article-source">Adapted from Pupsi Phull's postgraduate research and professional reflections. Views are personal.</p>
  </div></article>
  <section class="related-section section-border"><div class="container"><div class="section-heading compact-heading"><div><p class="eyebrow">Continue exploring</p><h2>Related articles</h2></div><a class="text-link" href="/insights/#articles">View all articles →</a></div><div class="related-articles">${related.map((item) => `<a class="related-article" href="/insights/${item.slug}/"><small>${escape(item.category)}</small><strong>${escape(item.title)}</strong><em>Read article →</em></a>`).join('')}</div></div></section>
  ${primaryCta('Have a similar operating question?')}`;
}

function articleSchema(article) {
  const route = `/insights/${article.slug}/`;
  const text = [article.deck, article.why, article.evidence, article.practice, ...article.actions, article.perspective].join(' ');
  return {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: article.title,
    description: article.description, mainEntityOfPage: `${base}${route}`, url: `${base}${route}`,
    datePublished: published, dateModified: published, wordCount: text.split(/\s+/).length,
    author: { '@type': 'Person', name: 'Pupsi Phull', url: `${base}/about/` },
    publisher: { '@type': 'Organization', name: 'Phull Insights', url: base },
    articleSection: article.category, keywords: article.tags.join(', '),
    isAccessibleForFree: true, inLanguage: 'en-GB',
  };
}

const css = `
/* Articles & Perspectives */
.insights-switcher { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 2rem; }
.insights-switcher a { min-height: 44px; display: inline-flex; align-items: center; padding: .65rem .9rem; border: 1px solid #a8bec5; color: var(--inverse); text-decoration: none; font-weight: 650; }
.insights-switcher a:first-child { color: #132f3a; border-color: var(--brass-light); background: var(--brass-light); }
.section-intro { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(260px, .75fr); gap: 3rem; align-items: end; margin-bottom: 2.3rem; }
.section-intro h2 { margin-bottom: 0; }
.section-intro > p { margin: 0; color: var(--muted); font-size: 1.08rem; }
.article-index-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; padding: 1px; background: var(--border); }
.article-index-card { min-width: 0; min-height: 300px; display: flex; flex-direction: column; padding: 2rem; background: var(--surface); }
.article-index-card:nth-child(-n+4) { box-shadow: inset 0 4px 0 var(--brass); }
.article-index-card h3 { margin: 1.6rem 0 1rem; font-size: 1.7rem; }
.article-index-card p { color: var(--muted); }
.article-index-card .card-cta { margin-top: auto; padding-top: 1rem; }
.article-card-meta { display: flex; flex-wrap: wrap; gap: .55rem 1rem; color: var(--muted); font: 500 .72rem "DM Mono", monospace; text-transform: uppercase; }
.article-card-meta span:first-child { color: var(--brass); }
.stream-divider { padding-block: 1.1rem; border-block: 1px solid var(--border); background: var(--raised); }
.stream-divider .container { display: flex; justify-content: space-between; gap: 1rem; color: var(--muted); font: 500 .76rem "DM Mono", monospace; text-transform: uppercase; }
.article-content { padding-block: clamp(3.8rem, 7vw, 6.5rem); }
.article-shell { width: min(860px, calc(100% - 2rem)); margin-inline: auto; }
.article-byline { display: flex; flex-wrap: wrap; gap: .65rem 1.3rem; margin-bottom: 2rem; color: var(--muted); font: 500 .78rem "DM Mono", monospace; text-transform: uppercase; }
.article-byline strong { color: var(--brass); }
.evidence-boundary { margin: 0 0 3rem; padding: 1.25rem 1.35rem; border-left: 4px solid var(--brass); color: var(--text); background: var(--brass-bg); }
.evidence-boundary strong { display: block; margin-bottom: .35rem; font: 600 .76rem "DM Mono", monospace; letter-spacing: .1em; text-transform: uppercase; }
.evidence-boundary p { margin: 0; }
.article-prose h2 { margin-top: 3.2rem; font-size: clamp(1.9rem, 4vw, 2.8rem); }
.article-prose h2:first-child { margin-top: 0; }
.article-prose p { color: var(--muted); font-size: 1.08rem; line-height: 1.8; }
.action-section { margin-top: 4rem; padding-top: 3rem; border-top: 1px solid var(--border); }
.action-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; padding: 1px; background: var(--border); }
.action-card { padding: 1.5rem; background: var(--surface); }
.action-card span { color: var(--brass); font: 600 .78rem "DM Mono", monospace; }
.action-card p { margin-bottom: 0; color: var(--muted); }
.perspective-panel { margin-top: 4rem; padding: clamp(2rem, 5vw, 3.5rem); color: var(--inverse); background: var(--navy); }
.perspective-panel .eyebrow { color: var(--brass-light); }
.perspective-panel h2 { max-width: 680px; }
.perspective-panel p:not(.eyebrow) { color: #d8e0e2; font-size: 1.08rem; line-height: 1.8; }
.tag-list { display: flex; flex-wrap: wrap; gap: .6rem; margin: 2.5rem 0 0; padding: 0; list-style: none; }
.tag-list li { padding: .42rem .65rem; border: 1px solid var(--border); color: var(--muted); background: var(--surface); font: 500 .76rem "DM Mono", monospace; }
.related-section { padding-block: clamp(3.8rem, 7vw, 6rem); background: var(--raised); }
.related-articles { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; padding: 1px; background: var(--border); }
.related-article { min-height: 220px; display: flex; flex-direction: column; padding: 1.5rem; color: var(--text); background: var(--surface); text-decoration: none; }
.related-article small { color: var(--brass); font: 500 .72rem "DM Mono", monospace; text-transform: uppercase; }
.related-article strong { margin: 1.5rem 0; font: 700 1.35rem/1.25 "Playfair Display", Georgia, serif; }
.related-article em { margin-top: auto; color: var(--brass); font-style: normal; font-weight: 700; }
.article-source { margin-top: 2rem; color: var(--muted); font-size: .86rem; }
@media (max-width: 900px) { .section-intro { grid-template-columns: 1fr; gap: 1rem; } .action-grid, .related-articles { grid-template-columns: 1fr; } }
@media (max-width: 680px) { .article-index-grid { grid-template-columns: 1fr; } .stream-divider .container { flex-direction: column; } }
`;

function buildArticles({ layout, write, out, caseTopics, primaryCta }) {
  if (articles.length !== 16 || publicationOrder.length !== 16 || new Set(publicationOrder).size !== 16 || ordered.some((item) => !item)) throw new Error('Expected 16 unique articles in publication order');
  const indexBody = `<section class="content-section section-border" id="articles"><div class="container"><div class="section-intro"><div><p class="eyebrow">Articles &amp; Perspectives</p><h2>Practical thinking for complex operations.</h2></div><p>Sixteen articles across supply chain, leadership, governance, finance and sustainable performance. Named-company material is clearly framed as historical analysis or personal reflection.</p></div><div class="article-index-grid">${ordered.map(card).join('')}</div></div></section>
  <div class="stream-divider"><div class="container"><span>Separate content stream</span><span>Identity anonymised · every published case number verified</span></div></div>
  <section class="content-section section-border" id="cases"><div class="container"><div class="section-intro"><div><p class="eyebrow">Anonymised Cases</p><h2>Operating questions, methods and evidence boundaries.</h2></div><p>Existing case studies remain separate from Articles &amp; Perspectives. The first three have complete pages; seven remain queued.</p></div><div class="insight-grid">${caseTopics.map((topic, index) => `<article class="insight-card"><div class="insight-meta"><span>${String(index + 1).padStart(2, '0')}</span><span>${topic.state === 'published' ? 'Anonymised case' : 'Anonymised case queued'}</span></div><h2>${escape(topic.title)}</h2><p>${escape(topic.summary)}</p>${topic.state === 'published' ? `<a class="text-link card-cta" href="/insights/${topic.slug}/">Read case <span aria-hidden="true">→</span></a>` : '<p class="held-note">Company names are excluded. The page and any metrics await source review.</p>'}</article>`).join('')}</div></div></section>
  <section class="content-section section-border"><div class="container split-layout"><div><p class="eyebrow">Evidence standard for cases</p><h2>Identity anonymised. Every number verified.</h2><p class="lead-copy">Company and client identities are anonymised. Every number published in a case study is valid and has been checked against its approved source, period, baseline and context before publication.</p></div><aside class="side-panel"><h3>Every published case includes</h3><ul><li>Challenge and context</li><li>Diagnosis and rebuild</li><li>Verified figures and source context</li><li>Questions for the reader</li><li>Related service and case links</li><li>Author and publication date</li></ul></aside></div></section>`;

  write('/insights/', layout({
    route: '/insights/', title: 'Operations Articles, Perspectives and Case Studies | Phull Insights',
    description: 'Executive articles and anonymised cases across operations, supply chain, transformation and sustainable performance.',
    eyebrow: 'Peer route · Insights hub', h1: 'Articles, perspectives and evidence-led cases.',
    lead: 'Practical thinking drawn from professional experience and postgraduate research, alongside anonymised operational cases with a separate evidence standard.',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights/' }],
    schemas: [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Phull Insights articles, perspectives and cases', url: `${base}/insights/`, hasPart: ordered.map((item) => ({ '@type': 'BlogPosting', name: item.title, url: `${base}/insights/${item.slug}/` })) }],
    body: `<nav class="insights-switcher container" aria-label="Insights streams"><a href="#articles">Articles &amp; Perspectives</a><a href="#cases">Anonymised Cases</a></nav>${indexBody}`,
  }));

  for (const article of articles) {
    const route = `/insights/${article.slug}/`;
    write(route, layout({
      route, title: article.seoTitle, description: article.description, pageType: 'article',
      eyebrow: `${article.category} · Personal perspective`, h1: escape(article.title), lead: escape(article.deck),
      breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights/' }, { name: article.title, path: route }],
      schemas: [articleSchema(article)], body: articleBody(article, primaryCta),
    }));
  }

  fs.appendFileSync(path.join(out, 'styles.css'), css);
  const routesPath = path.join(out, 'routes.json');
  const routes = JSON.parse(fs.readFileSync(routesPath, 'utf8'));
  routes.push(...ordered.map((article) => `/insights/${article.slug}/`));
  fs.writeFileSync(routesPath, `${JSON.stringify(routes, null, 2)}\n`);
  return routes.length;
}

module.exports = { buildArticles };
