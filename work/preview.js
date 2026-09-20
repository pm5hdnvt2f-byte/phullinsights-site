const mobileButton = document.querySelector('.nav-mobile-btn');
const mobileNav = document.querySelector('#mobile-nav');

if (mobileButton && mobileNav) {
  mobileButton.addEventListener('click', () => {
    const open = mobileNav.hasAttribute('hidden');
    mobileNav.toggleAttribute('hidden', !open);
    mobileButton.setAttribute('aria-expanded', String(open));
    mobileButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
}

document.querySelectorAll('.theme-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('pi-theme', next); } catch (error) {}
  });
});

const previewForm = document.querySelector('#preview-contact-form');
if (previewForm) {
  previewForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    if (status) status.textContent = 'Preview only: no information was sent. Form delivery will be enabled only after provider and privacy approval.';
  });
}

// Consent-safe analytics foundation: route events are individually named but
// are not transmitted unless a future approved consent layer and provider both exist.
document.querySelectorAll('[data-event]').forEach((element) => {
  element.addEventListener('click', () => {
    let consent = null;
    try { consent = localStorage.getItem('pi-analytics-consent'); } catch (error) {}
    if (consent !== 'granted' || !window.phullAnalytics?.track) return;
    window.phullAnalytics.track(element.dataset.event);
  });
});
