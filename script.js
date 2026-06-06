/* ============================================================
   DIARIO DE HCI — script.js
   ============================================================ */

// ── Nav active link on scroll ──
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// ── Back to top ──
const btn = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  btn.classList.toggle('visible', window.scrollY > 400);
});
btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Mobile nav toggle ──
const toggle = document.getElementById('nav-toggle');
const navLinksEl = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
});
// Close on link click
navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinksEl.classList.remove('open'));
});

// ── Fade-in on scroll ──
const fadeEls = document.querySelectorAll('.card, .interaction-card, .color-card, .step');
const fadeObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  fadeObs.observe(el);
});
