(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const applyTheme = (theme, persist = true) => {
    root.dataset.theme = theme;
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    }
    if (themeColor) {
      themeColor.setAttribute('content', theme === 'dark' ? '#0e151b' : '#edf3f7');
    }
    if (persist) {
      try {
        localStorage.setItem('ws-theme', theme);
      } catch (_) {}
    }
  };

  applyTheme(root.dataset.theme || 'light', false);

  themeToggle?.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  const mapNodes = [...document.querySelectorAll('[data-map-node]')];
  const mapTitle = document.querySelector('[data-map-title]');
  const mapKind = document.querySelector('[data-map-kind]');
  const mapCopy = document.querySelector('[data-map-copy]');
  const defaultNode = mapNodes.find((node) => node.classList.contains('map-node-center'));

  const activateNode = (node) => {
    if (!node) return;
    mapNodes.forEach((candidate) => candidate.classList.toggle('is-active', candidate === node));
    if (mapTitle) mapTitle.textContent = node.dataset.title || '';
    if (mapKind) mapKind.textContent = node.dataset.kind || '';
    if (mapCopy) mapCopy.textContent = node.dataset.copy || '';
  };

  mapNodes.forEach((node) => {
    node.addEventListener('pointerenter', () => activateNode(node));
    node.addEventListener('focus', () => activateNode(node));
  });

  document.querySelector('.map-canvas')?.addEventListener('pointerleave', () => activateNode(defaultNode));
  activateNode(defaultNode);

  const revealItems = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const header = document.querySelector('[data-header]');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${visible.target.id}`;
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.01, 0.2, 0.6] },
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
