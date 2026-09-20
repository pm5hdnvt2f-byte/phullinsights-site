const visitorContent = {
  client: {
    headline: "Transforming Supply Chains Through Strategic Insight and Technology",
    subtitle:
      "Phull Insights delivers independent advisory, proprietary methodology, and AI-powered tooling for operations leaders navigating complexity in regulated sectors.",
    primary: { label: "Explore the Practice", href: "#expertise" },
    secondary: { label: "See JourneyIQ in Action", href: "#journeyiq" },
    eyebrow: "Independent perspective",
    aboutTitle: "From operating reality to confident decisions.",
    aboutLead:
      "Phull Insights helps leaders see the system behind the symptoms, align stakeholders around what matters, and move from analysis to measurable change.",
    aboutLink: "Discuss a live challenge",
    expertiseIntro:
      "Engage for a focused decision, a transformation programme, or an intelligence layer that strengthens both.",
    contactEyebrow: "Start a useful conversation",
    contactTitle: "Bring the decision that needs a clearer path.",
    contactCopy:
      "Share the situation, the constraint and what a good outcome would change. Phull Insights will respond with a focused next step.",
    contactCta: "Email Phull Insights",
  },
  recruiter: {
    headline: "Senior Operations Leadership Built Across Transformation, Supply Chain and Technology",
    subtitle:
      "A recruiter’s view of executive scope, delivery credibility and the leadership pattern behind multi-market operational change.",
    primary: { label: "Review Leadership Profile", href: "#about" },
    secondary: { label: "See Scope and Credentials", href: "#expertise" },
    eyebrow: "Leadership profile",
    aboutTitle: "Commercial judgement with an operator’s grip on delivery.",
    aboutLead:
      "The profile combines enterprise transformation, supply-chain leadership and technology adoption, with experience translating executive intent into operating rhythm and measurable outcomes.",
    aboutLink: "Start a confidential conversation",
    expertiseIntro:
      "The evidence below connects executive decision-making, programme leadership and methodology depth without separating strategy from delivery.",
    contactEyebrow: "Recruiter conversation",
    contactTitle: "Explore fit, scope and leadership context.",
    contactCopy:
      "Share the mandate and success profile. The conversation can focus quickly on relevant scale, operating environment and leadership evidence.",
    contactCta: "Discuss an opportunity",
  },
  peer: {
    headline: "Methodology-First Thinking for Practitioners Working in Complex Operations",
    subtitle:
      "Practical frameworks, decision patterns and an open view into JourneyIQ for peers turning fragmented signals into responsible action.",
    primary: { label: "Explore the Methods", href: "#expertise" },
    secondary: { label: "Try the JourneyIQ Demo", href: "#journeyiq" },
    eyebrow: "Practitioner exchange",
    aboutTitle: "Useful methods should survive contact with reality.",
    aboutLead:
      "Phull Insights develops and tests ways to frame ambiguity, surface competing constraints and make recommendations that other practitioners can inspect, challenge and improve.",
    aboutLink: "Compare notes with a practitioner",
    expertiseIntro:
      "Explore diagnostic patterns, transformation mechanics and the design principles behind JourneyIQ’s structured decision briefs.",
    contactEyebrow: "Peer exchange",
    contactTitle: "Bring a method, a tension or a hard-earned lesson.",
    contactCopy:
      "The best practitioner conversations sharpen the work. Share what you are testing and where the current methods fall short.",
    contactCta: "Start a practitioner exchange",
  },
};

const scenarios = {
  delay: {
    preview:
      "Batch 7A delayed at consolidation hub. UK clinical allocation may fall below safety stock in 9 days. Freight partner reports conflicting ETA data; two open quality-release dependencies remain.",
    status: "red",
    statusLabel: "RED · Immediate attention",
    summary:
      "The delay is no longer a logistics-only exception. Inventory exposure, uncertain release timing and conflicting partner data create a credible service interruption risk within the current planning horizon.",
    issues: [
      ["Nine-day runway to UK clinical safety-stock breach", "critical"],
      ["Quality release and transport milestones are not on one critical path", "high"],
      ["Conflicting ETA data weakens allocation decisions", "high"],
    ],
    recommendations: [
      ["Establish a single incident owner and reconcile the milestone chain today", "P0"],
      ["Model allocation options against clinical priority and substitution constraints", "P0"],
      ["Set twice-daily partner checkpoints until the arrival window stabilises", "P1"],
    ],
  },
  inventory: {
    preview:
      "ERP shows 1,284 units available; warehouse count confirms 1,041. Four locations used manual transfers during the last close. Reconciliation is due in 48 hours and two customer orders depend on disputed stock.",
    status: "amber",
    statusLabel: "AMBER · Controlled intervention",
    summary:
      "The discrepancy is material but still containable. Manual transfers and timing differences are the likely drivers; customer commitments should be protected while the stock ledger is reconciled at transaction level.",
    issues: [
      ["243-unit variance between system and physical stock", "high"],
      ["Manual transfers are missing a consistent approval trail", "high"],
      ["Two orders rely on stock that may not be available", "medium"],
    ],
    recommendations: [
      ["Quarantine disputed quantities from new allocation", "P0"],
      ["Reconcile transfer timestamps, locations and approvers", "P1"],
      ["Introduce a daily exception report until variance remains below threshold", "P2"],
    ],
  },
  supplier: {
    preview:
      "Quarterly supplier review: on-time delivery improved from 91% to 96%. CAPA closure averages 18 days against a 20-day target. One recurring packaging deviation remains open; forecast adherence is stable.",
    status: "green",
    statusLabel: "GREEN · Performance on track",
    summary:
      "Overall performance is stable and trending positively. The open packaging deviation warrants targeted follow-through, but current evidence does not support broad escalation or a change to supply allocation.",
    issues: [
      ["Recurring packaging deviation lacks a verified preventive action", "medium"],
      ["Improved delivery performance has not yet held for a full quarter", "medium"],
    ],
    recommendations: [
      ["Keep allocation stable and close the packaging action with evidence", "P1"],
      ["Track delivery performance for the next eight weeks", "P2"],
      ["Recognise the supplier’s measurable service improvement", "P2"],
    ],
  },
};

const modeButtons = [...document.querySelectorAll(".mode-pill")];
const heroTitle = document.querySelector("#hero-title");
const heroSub = document.querySelector("#hero-sub");
const primaryCta = document.querySelector("#primary-cta");
const secondaryCta = document.querySelector("#secondary-cta");

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function updateAudienceEmphasis(mode) {
  document.body.dataset.mode = mode;

  document.querySelectorAll("[data-relevance]").forEach((chip) => {
    chip.classList.toggle("is-relevant", chip.dataset.relevance.split(" ").includes(mode));
  });

  document.querySelectorAll(".practice-card[data-audience]").forEach((card) => {
    const relevant = card.dataset.audience.split(" ").includes(mode);
    card.classList.toggle("is-emphasised", relevant);
    card.classList.toggle("is-muted", !relevant);
  });
}

function applyVisitorMode(mode, animate = true) {
  const content = visitorContent[mode];
  if (!content) return;

  modeButtons.forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const writeContent = () => {
    heroTitle.textContent = content.headline;
    heroSub.textContent = content.subtitle;
    primaryCta.querySelector("span").textContent = content.primary.label;
    primaryCta.href = content.primary.href;
    secondaryCta.textContent = content.secondary.label;
    secondaryCta.href = content.secondary.href;
    setText("#about-eyebrow", content.eyebrow);
    setText("#about-title", content.aboutTitle);
    setText("#about-lead", content.aboutLead);
    document.querySelector("#about-link").childNodes[0].textContent = `${content.aboutLink} `;
    setText("#expertise-intro", content.expertiseIntro);
    setText("#contact-eyebrow", content.contactEyebrow);
    setText("#contact-title", content.contactTitle);
    setText("#contact-copy", content.contactCopy);
    document.querySelector("#contact-cta").childNodes[0].textContent = `${content.contactCta} `;
    updateAudienceEmphasis(mode);
  };

  if (!animate) {
    writeContent();
    return;
  }

  heroTitle.classList.add("fade");
  heroSub.classList.add("fade");
  window.setTimeout(() => {
    writeContent();
    heroTitle.classList.remove("fade");
    heroSub.classList.remove("fade");
  }, 200);
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => applyVisitorMode(button.dataset.mode));
});

const themeButtons = [...document.querySelectorAll(".theme-toggle")];
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function effectiveTheme() {
  return document.documentElement.dataset.theme || (darkQuery.matches ? "dark" : "light");
}

function syncThemeLabels() {
  const isDark = effectiveTheme() === "dark";
  themeButtons.forEach((button) => {
    button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    button.title = isDark ? "Switch to light theme" : "Switch to dark theme";
  });
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("pi-theme", next);
    syncThemeLabels();
  });
});

darkQuery.addEventListener("change", () => {
  if (!document.documentElement.dataset.theme) syncThemeLabels();
});

const mobileButton = document.querySelector(".nav-mobile-btn");
const mobileNav = document.querySelector("#mobile-nav");

function closeMobileNav() {
  mobileNav.hidden = true;
  mobileButton.setAttribute("aria-expanded", "false");
  mobileButton.setAttribute("aria-label", "Open navigation");
}

mobileButton.addEventListener("click", () => {
  const willOpen = mobileNav.hidden;
  mobileNav.hidden = !willOpen;
  mobileButton.setAttribute("aria-expanded", String(willOpen));
  mobileButton.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
});

mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileNav));

const scenarioButtons = [...document.querySelectorAll(".scen-btn")];
const preview = document.querySelector("#scenario-preview p");
const runButton = document.querySelector("#run-analysis");
const outputPanel = document.querySelector(".demo-output");
const placeholder = document.querySelector("#output-placeholder");
const loadingState = document.querySelector("#loading-state");
const loadingMessage = document.querySelector("#loading-message");
const result = document.querySelector("#analysis-result");
let selectedScenario = "delay";
let loadingTimer;
let resultTimer;

function resetOutput() {
  window.clearInterval(loadingTimer);
  window.clearTimeout(resultTimer);
  placeholder.hidden = false;
  loadingState.hidden = true;
  result.hidden = true;
  runButton.disabled = false;
  outputPanel.setAttribute("aria-busy", "false");
}

scenarioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedScenario = button.dataset.scenario;
    scenarioButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    preview.textContent = scenarios[selectedScenario].preview;
    resetOutput();
  });
});

function renderResult(scenario) {
  document.querySelector("#status-dot").className = `status-dot ${scenario.status}`;
  setText("#status-label", scenario.statusLabel);
  setText("#result-summary", scenario.summary);

  const issueList = document.querySelector("#issue-list");
  issueList.replaceChildren(
    ...scenario.issues.map(([text, severity]) => {
      const item = document.createElement("li");
      const label = document.createElement("span");
      label.textContent = text;
      const badge = document.createElement("span");
      badge.className = `severity ${severity}`;
      badge.textContent = severity;
      item.append(label, badge);
      return item;
    }),
  );

  const recommendationList = document.querySelector("#recommendation-list");
  recommendationList.replaceChildren(
    ...scenario.recommendations.map(([text, priority]) => {
      const item = document.createElement("li");
      const label = document.createElement("span");
      label.textContent = text;
      const badge = document.createElement("span");
      badge.className = "priority";
      badge.textContent = priority;
      item.append(label, badge);
      return item;
    }),
  );
}

runButton.addEventListener("click", () => {
  const messages = ["Mapping dependencies…", "Testing materiality…", "Structuring recommendations…"];
  let messageIndex = 0;
  placeholder.hidden = true;
  result.hidden = true;
  loadingState.hidden = false;
  runButton.disabled = true;
  outputPanel.setAttribute("aria-busy", "true");
  loadingMessage.textContent = messages[messageIndex];

  loadingTimer = window.setInterval(() => {
    messageIndex = (messageIndex + 1) % messages.length;
    loadingMessage.textContent = messages[messageIndex];
  }, 1800);

  resultTimer = window.setTimeout(() => {
    window.clearInterval(loadingTimer);
    renderResult(scenarios[selectedScenario]);
    loadingState.hidden = true;
    result.hidden = false;
    runButton.disabled = false;
    outputPanel.setAttribute("aria-busy", "false");
  }, 3600);
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#contact-cta").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#contact-note").hidden = false;
});
syncThemeLabels();
applyVisitorMode("client", false);
