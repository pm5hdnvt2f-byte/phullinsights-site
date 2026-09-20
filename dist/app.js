const root = document.documentElement;
const themeButtons = [...document.querySelectorAll('.theme-toggle')];

function currentTheme() {
  return root.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function syncThemeLabels() {
  const dark = currentTheme() === 'dark';
  themeButtons.forEach((button) => {
    button.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    button.title = dark ? 'Switch to light theme' : 'Switch to dark theme';
  });
}

themeButtons.forEach((button) => button.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('pi-theme', next); } catch (error) {}
  syncThemeLabels();
}));

const menuButton = document.querySelector('.nav-mobile-btn');
const mobileNav = document.querySelector('#mobile-nav');
if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
syncThemeLabels();

const scenarios = {
  delay: {
    signal: 'Batch 7A delayed at consolidation hub. UK clinical allocation may fall below safety stock in 9 days. Freight partner reports conflicting ETA data; two open quality-release dependencies remain.',
    status: 'RED · Immediate attention',
    summary: 'The delay is no longer a logistics-only exception. Inventory exposure, uncertain release timing and conflicting partner data create a credible service interruption risk.',
    issues: ['Nine-day runway to a UK safety-stock breach', 'Quality release and transport milestones are not on one critical path'],
    actions: ['Establish one incident owner and reconcile the milestone chain', 'Model allocation options against clinical priority and substitution constraints']
  },
  inventory: {
    signal: 'ERP shows 1,284 units available; warehouse count confirms 1,041. Four locations used manual transfers during the last close. Two customer orders depend on disputed stock.',
    status: 'AMBER · Controlled intervention',
    summary: 'The discrepancy is material but containable. Customer commitments need protection while the stock ledger is reconciled at transaction level.',
    issues: ['243-unit variance between system and physical stock', 'Manual transfers lack a consistent approval trail'],
    actions: ['Quarantine disputed quantities from new allocation', 'Reconcile transfer timestamps, locations and approvers']
  },
  supplier: {
    signal: 'Quarterly supplier review shows improving delivery performance and stable forecast adherence. One recurring packaging deviation remains open.',
    status: 'GREEN · Performance on track',
    summary: 'Overall performance is stable and trending positively. The open packaging deviation warrants targeted follow-through rather than broad escalation.',
    issues: ['Recurring packaging deviation lacks verified preventive action'],
    actions: ['Keep allocation stable and close the packaging action with evidence', 'Track delivery performance through the next review cycle']
  }
};

const scenarioButtons = [...document.querySelectorAll('.scenario-btn')];
let selectedScenario = 'delay';
function selectScenario(key) {
  selectedScenario = key;
  scenarioButtons.forEach((button) => {
    const active = button.dataset.scenario === key;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const signal = document.querySelector('#signal-text');
  if (signal) signal.textContent = scenarios[key].signal;
  const result = document.querySelector('#analysis-result');
  const empty = document.querySelector('#output-empty');
  if (result) result.hidden = true;
  if (empty) empty.hidden = false;
}
scenarioButtons.forEach((button) => button.addEventListener('click', () => selectScenario(button.dataset.scenario)));

const runButton = document.querySelector('#run-analysis');
if (runButton) runButton.addEventListener('click', () => {
  const data = scenarios[selectedScenario];
  document.querySelector('#output-empty').hidden = true;
  const result = document.querySelector('#analysis-result');
  result.hidden = false;
  document.querySelector('#result-status').textContent = data.status;
  document.querySelector('#result-summary').textContent = data.summary;
  const issueList = document.querySelector('#issue-list');
  issueList.replaceChildren(...data.issues.map((item) => Object.assign(document.createElement('li'), { textContent: item })));
  const actionList = document.querySelector('#action-list');
  actionList.replaceChildren(...data.actions.map((item) => Object.assign(document.createElement('li'), { textContent: item })));
});

const filterButtons = [...document.querySelectorAll('.filter-btn')];
filterButtons.forEach((button) => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
  document.querySelectorAll('.article-card, .case-study-card').forEach((card) => {
    card.hidden = filter !== 'all' && card.dataset.category !== filter;
  });
}));

const linkedCase = document.querySelector(window.location.hash);
if (linkedCase && linkedCase.matches('details.case-study-card')) linkedCase.open = true;

const enquiryTabs = [...document.querySelectorAll('.enquiry-tab')];
const enquiryInput = document.querySelector('#enquiry-type');
const messageLabel = document.querySelector('#message-label');
const messageField = document.querySelector('#message');
const enquiryPrompts = {
  advisory: ['Describe the operational question', 'What is happening, what decision is blocked and what would a better outcome change?'],
  executive: ['Share the role and mandate', 'Include the role, organisation, location, engagement type and the leadership outcome required.'],
  speaking: ['Describe the audience and topic', 'Share the event, audience, format, timing and the theme you would like to explore.'],
  other: ['How can Phull Insights help?', 'Share enough context to route the conversation well.']
};
enquiryTabs.forEach((button) => button.addEventListener('click', () => {
  enquiryTabs.forEach((item) => item.classList.toggle('is-active', item === button));
  const key = button.dataset.enquiry;
  if (enquiryInput) enquiryInput.value = key;
  if (messageLabel) messageLabel.textContent = enquiryPrompts[key][0];
  if (messageField) messageField.placeholder = enquiryPrompts[key][1];
}));

if (enquiryTabs.length) {
  const requestedType = new URLSearchParams(window.location.search).get('type');
  const requestedTab = enquiryTabs.find((button) => button.dataset.enquiry === requestedType);
  if (requestedTab) requestedTab.click();
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  const formData = new FormData(contactForm);
  const enquiryType = String(formData.get('enquiry-type') || 'other');
  const name = String(formData.get('name') || '').trim();
  const organisation = String(formData.get('organisation') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const subject = `Phull Insights enquiry: ${enquiryType}`;
  const body = [
    `Name: ${name}`,
    `Organisation: ${organisation || 'Not provided'}`,
    `Email: ${email}`,
    `Enquiry type: ${enquiryType}`,
    '',
    message
  ].join('\n');

  status.hidden = false;
  status.textContent = 'Your email application is opening with the enquiry ready to send.';
  window.location.href = `mailto:hello@phullinsights.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
