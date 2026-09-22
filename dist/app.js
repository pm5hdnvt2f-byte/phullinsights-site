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
  previewForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    const submitButton = previewForm.querySelector('button[type="submit"]');
    const accessKey = previewForm.querySelector('[name="access_key"]')?.value;

    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY') {
      if (status) status.textContent = 'This form is not configured yet. Please email hello@phullinsights.com instead.';
      return;
    }

    if (status) status.textContent = 'Sending…';
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(previewForm),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        if (status) status.textContent = "Thanks — I'll be in touch shortly.";
        previewForm.reset();
      } else if (status) {
        status.textContent = 'Something went wrong. Please email instead.';
      }
    } catch (error) {
      if (status) status.textContent = 'Something went wrong. Please email instead.';
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
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
