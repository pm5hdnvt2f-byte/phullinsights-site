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

// Scroll reveal and animated evidence counters (used on the About page impact grid).
const revealTargets = document.querySelectorAll('[data-reveal]');
if (revealTargets.length) {
  let reducedMotion = false;
  try { reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (error) {}

  const animateCount = (span) => {
    const from = parseFloat(span.dataset.from);
    const to = parseFloat(span.dataset.to);
    const decimals = parseInt(span.dataset.decimals || '0', 10);
    const finalText = span.dataset.toText || (Number.isNaN(to) ? span.textContent : to.toFixed(decimals));
    if (reducedMotion || Number.isNaN(from) || Number.isNaN(to)) {
      span.textContent = finalText;
      return;
    }
    const duration = 900;
    let start = null;
    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      if (progress >= 1) {
        span.textContent = finalText;
        return;
      }
      const eased = 1 - Math.pow(1 - progress, 3);
      span.textContent = (from + (to - from) * eased).toFixed(decimals);
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const reveal = (element) => {
    if (element.classList.contains('is-visible')) return;
    element.classList.add('is-visible');
    element.querySelectorAll('.count-num').forEach(animateCount);
  };

  let observer;
  try {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    revealTargets.forEach((element) => observer.observe(element));
  } catch (error) {
    revealTargets.forEach(reveal);
  }

  // Safety net: nothing stays hidden if the observer never fires.
  setTimeout(() => revealTargets.forEach(reveal), 4000);
}
