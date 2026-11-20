document.documentElement.classList.add('js');

const themeToggle = document.querySelector('.theme-toggle');
const themeLabel = document.querySelector('.theme-label');
const themeIcon = document.querySelector('.theme-icon');
const savedTheme = (() => { try { return localStorage.getItem('mythtech-theme'); } catch { return null; } })();
const setTheme = theme => {
  const light = theme === 'light';
  document.documentElement.dataset.theme = light ? 'light' : 'dark';
  themeToggle?.setAttribute('aria-pressed', String(light));
  themeToggle?.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
  if (themeLabel) themeLabel.textContent = light ? 'Dark mode' : 'Light mode';
  if (themeIcon) themeIcon.textContent = light ? '☾' : '☼';
  try { localStorage.setItem('mythtech-theme', light ? 'light' : 'dark'); } catch {}
};
setTheme(savedTheme === 'light' ? 'light' : 'dark');
themeToggle?.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'));

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  mobileMenu.classList.toggle('open', !open);
});

document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  mobileMenu.classList.remove('open');
}));

const filters = document.querySelectorAll('.filter-chip');
const cards = document.querySelectorAll('.project-card');
filters.forEach(filter => filter.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  filter.classList.add('active');
  const value = filter.dataset.filter;
  cards.forEach(card => {
    const matches = value === 'all' || card.dataset.category.includes(value);
    card.classList.toggle('is-hidden', !matches);
    card.classList.toggle('filter-match', matches && value !== 'all');
  });
}));

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

const navLinks = [...document.querySelectorAll('.desktop-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window && navLinks.length) {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
  sections.forEach(section => navObserver.observe(section));
}

if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
  document.body.classList.add('pointer-ready');
  const cursorOrb = document.createElement('div');
  cursorOrb.className = 'cursor-orb';
  cursorOrb.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cursorOrb);

  window.addEventListener('pointermove', event => {
    document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    cursorOrb.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  }, { passive: true });

  const heroArt = document.querySelector('.hero-art');
  heroArt?.addEventListener('pointermove', event => {
    const bounds = heroArt.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroArt.style.setProperty('--tilt-x', `${(-y * 4).toFixed(2)}deg`);
    heroArt.style.setProperty('--tilt-y', `${(x * 4).toFixed(2)}deg`);
    heroArt.style.setProperty('--glow-x', `${((x + 0.5) * 100).toFixed(1)}%`);
    heroArt.style.setProperty('--glow-y', `${((y + 0.5) * 100).toFixed(1)}%`);
  });
  heroArt?.addEventListener('pointerleave', () => {
    heroArt.style.setProperty('--tilt-x', '0deg');
    heroArt.style.setProperty('--tilt-y', '0deg');
    heroArt.style.setProperty('--glow-x', '50%');
    heroArt.style.setProperty('--glow-y', '50%');
  });

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      card.style.setProperty('--card-x', `${(x * 100).toFixed(1)}%`);
      card.style.setProperty('--card-y', `${(y * 100).toFixed(1)}%`);
      card.style.setProperty('--card-rx', `${((0.5 - y) * 2.5).toFixed(2)}deg`);
      card.style.setProperty('--card-ry', `${((x - 0.5) * 2.5).toFixed(2)}deg`);
      card.classList.add('is-tilting');
    });
    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-tilting');
      card.style.setProperty('--card-rx', '0deg');
      card.style.setProperty('--card-ry', '0deg');
    });
  });
}
