// Smooth scroll for navbar links (with Bootstrap offset)
document.querySelectorAll('a.nav-link[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;
    e.preventDefault();

    const offset = 72; // navbar height
    const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});

// Back-to-top button behavior
const backToTopBtn = document.getElementById('backToTop');

const toggleBackToTop = () => {
  if (!backToTopBtn) return;
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
};

window.addEventListener('scroll', toggleBackToTop);

if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// Simple scroll-triggered animations using IntersectionObserver
const animatedEls = document.querySelectorAll('[data-animate]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-animate-delay');
          if (delay) {
            entry.target.style.transitionDelay = `${parseInt(delay, 10)}ms`;
          }
          entry.target.classList.add('animate-in');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  animatedEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: immediately show elements if IntersectionObserver not supported
  animatedEls.forEach((el) => el.classList.add('animate-in'));
}


