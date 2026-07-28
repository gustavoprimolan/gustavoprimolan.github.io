const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

function onScroll() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 20);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealElements = document.querySelectorAll(
  '.section-header, .about-grid, .skill-card, .project-card, .timeline-item, .contact-card, .accomplishment-card, .blog-list-item, .page-header'
);

revealElements.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach((el) => revealObserver.observe(el));

document.querySelectorAll('.skills-grid, .projects-grid, .accomplishments-grid').forEach((grid) => {
  grid.querySelectorAll('.skill-card, .project-card, .accomplishment-card').forEach((card, i) => {
    (card as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
  });
});
