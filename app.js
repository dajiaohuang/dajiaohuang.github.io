(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const languageToggle = document.querySelector('[data-language-toggle]');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');

  const english = {
    accountAlt: 'Wu Shuwen’s GitHub account statistics and rank', rankNote: 'Third-party account rank by GitHub Readme Stats',
    contrib0: 'Prevent failed reads from overwriting existing JSON files',
    contrib1: 'Propagate build-command failures',
    contrib2: 'Return errors for unsupported Redis storage operations',
    contrib3: 'Reject removal of immutable proxy configuration',
    contrib4: 'Preserve complete raw fallback content for oversized session archives',
    contrib5: 'Fix UPSERT target-alias resolution',
    contrib6: 'Align documented agent tool requirements',
    contrib7: 'Align semantic processing tests with current APIs',
    contrib8: 'Preserve browserURL path prefixes',
    moreWork: 'More work', scienceLimits: 'Evo presents fossil and evolutionary records with uncertainty; Solar is for orbital exploration, not operational navigation.',
    skip: 'Skip to content', backTop: 'Wu Shuwen, back to top', primaryNav: 'Primary navigation', theme: 'Theme',
    navWork: 'Work', navContributions: 'Contributions', navResearch: 'Research', navAbout: 'About',
    heroEyebrow: 'Software engineering · agent systems · scientific interfaces',
    heroLede: 'Working on agent systems and scientific visualization.',
    viewWork: 'View work', emailMe: 'Email me', factsAria: 'Current information', now: 'Now', nowValue: 'Software Engineer Intern · TikTok',
    study: 'Study', studyValue: 'MSc DSML · National University of Singapore', base: 'Base', baseValue: 'Singapore · UTC+8',
    workTitle: 'Selected projects', workIntro: 'Agent-led tabletop play, open-source maintenance, and a local AI gateway.',
    sagaKind: 'Agent platform · Active Alpha', sagaDesc: 'A tabletop role-playing platform combining agent-led play with a rules engine.',
    repoKind: 'Portable stewardship Skill', repoDesc: 'A workflow for discovering, fixing, and following up on open-source repository issues.',
    cotKind: 'Local-first AI gateway · Go', cotDesc: 'A local Go AI gateway across providers and accounts, with an OpenAI-compatible interface.',
    site: 'Site ↗', source: 'Source ↗', contribTitle: 'Selected contributions', contribIntro: 'Merged external contributions. Follow the links for each fix.',
    exclusionNote: 'Excludes repositories owned by dajiaohuang and SagaSmithAI.', allContribs: 'All external contributions ↗',
    researchTitle: 'Research', researchIntro: 'Human motion and interaction research, with two co-authored papers.',
    interxRole: 'Co-author · dual-human interaction dataset and benchmark', himoRole: 'Co-author · human–multi-object interaction benchmark',
    paper: 'Paper ↗', project: 'Project ↗', timelineAria: 'Experience', present: 'Now', tiktokRole: 'Software Engineer Intern', nus: 'National University of Singapore',
    nusRole: 'MSc, Data Science & Machine Learning', cpic: 'China Pacific Insurance', cpicRole: 'Algorithm Intern · agentic RAG',
    sjtu: 'Shanghai Jiao Tong University', sjtuRole: 'BEng, Information Security · IEEE Honor Class',
    viewSource: 'View source ↗',
  };

  const metadata = {
    zh: {
      title: 'Wu Shuwen — 软件工程、智能体与开源',
      description: 'Wu Shuwen 的个人主页：软件工程、智能体系统、科学交互与开源贡献。',
      ogDescription: '软件工程、智能体系统、科学交互与开源贡献。',
    },
    en: {
      title: 'Wu Shuwen — Software engineering, agents, and open source',
      description: 'Wu Shuwen’s personal site: software engineering, agent systems, scientific interfaces, and open-source contributions.',
      ogDescription: 'Software engineering, agent systems, scientific interfaces, and open-source contributions.',
    },
  };

  document.querySelectorAll('[data-i18n]').forEach((element) => { element.dataset.zh = element.textContent; });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => { element.dataset.zhAria = element.getAttribute('aria-label'); });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => { element.dataset.zhAlt = element.getAttribute('alt'); });

  const applyTheme = (theme, persist = true) => {
    const nextIsDark = theme !== 'dark';
    const isEnglish = root.dataset.lang === 'en';
    root.dataset.theme = theme;
    themeColor?.setAttribute('content', theme === 'dark' ? '#0d141a' : '#f2f6f8');
    themeToggle?.setAttribute('aria-label', isEnglish
      ? `Switch to ${nextIsDark ? 'dark' : 'light'} theme`
      : `切换至${nextIsDark ? '深色' : '浅色'}主题`);
    if (persist) {
      try { localStorage.setItem('ws-theme', theme); } catch (_) {}
    }
  };

  const applyLanguage = (language, persist = true) => {
    const isEnglish = language === 'en';
    root.dataset.lang = isEnglish ? 'en' : 'zh';
    root.lang = isEnglish ? 'en' : 'zh-CN';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = isEnglish && english[key] ? english[key] : element.dataset.zh;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const key = element.dataset.i18nAria;
      element.setAttribute('aria-label', isEnglish && english[key] ? english[key] : element.dataset.zhAria);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const key = element.dataset.i18nAlt;
      element.setAttribute('alt', isEnglish && english[key] ? english[key] : element.dataset.zhAlt);
    });

    const copy = metadata[isEnglish ? 'en' : 'zh'];
    document.title = copy.title;
    metaDescription?.setAttribute('content', copy.description);
    ogTitle?.setAttribute('content', copy.title);
    ogDescription?.setAttribute('content', copy.ogDescription);

    if (languageToggle) {
      languageToggle.querySelector('[data-language-current]').textContent = isEnglish ? 'EN' : '中';
      languageToggle.querySelector('[data-language-other]').textContent = isEnglish ? '中' : 'EN';
      languageToggle.setAttribute('aria-label', isEnglish ? '切换为中文' : 'Switch to English');
    }
    applyTheme(root.dataset.theme || 'light', false);
    if (persist) {
      try { localStorage.setItem('ws-lang', isEnglish ? 'en' : 'zh'); } catch (_) {}
    }
  };

  applyTheme(root.dataset.theme || 'light', false);
  applyLanguage(root.dataset.lang || 'zh', false);

  themeToggle?.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  languageToggle?.addEventListener('click', () => applyLanguage(root.dataset.lang === 'en' ? 'zh' : 'en'));

  const header = document.querySelector('[data-header]');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${visible.target.id}`) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: [0.01, 0.2] });
    sections.forEach((section) => observer.observe(section));
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
