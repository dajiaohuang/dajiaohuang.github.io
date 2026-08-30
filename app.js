(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const languageToggle = document.querySelector('[data-language-toggle]');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');

  const english = {
    skip: 'Skip to content', backTop: 'Wu Shuwen, back to top', primaryNav: 'Primary navigation', theme: 'Theme',
    navWork: 'Work', navContributions: 'Contributions', navResearch: 'Research', navAbout: 'About',
    heroEyebrow: 'Software engineering · agent systems · scientific interfaces',
    heroLede: 'I build software systems with explicit boundaries, reproducible state, and traceable evidence.',
    viewWork: 'View work', emailMe: 'Email me', factsAria: 'Current information', now: 'Now', nowValue: 'Software Engineer Intern · TikTok',
    study: 'Study', studyValue: 'MSc DSML · National University of Singapore', base: 'Base', baseValue: 'Singapore · UTC+8',
    workTitle: 'Selected work', workIntro: 'Five systems share one approach: make authority explicit, preserve evidence, and state limits honestly.',
    sagaKind: 'Agent platform · Active Alpha', sagaDesc: 'An AI-native TTRPG platform where agents interpret while deterministic engines and MCP services own rules and state.',
    repoKind: 'Open-source stewardship', repoDesc: 'A durable loop for verification, audit, repair, testing, submission, and PR maintenance.',
    archiveKind: 'Evidence to application', archiveDesc: 'Turns experience evidence into traceable resumes, interview packs, job pipelines, and academic applications.',
    evoKind: 'Scientific interface · deep time', evoDesc: 'A static-first evidence atlas connecting geological time, fossil records, phylogenetic hypotheses, and uncertainty.',
    solarKind: 'Scientific interface · orbital dynamics', solarDesc: 'Browser-native Solar System dynamics, small-body exploration, and reproducible mission workspaces; not for operational navigation.',
    site: 'Site ↗', source: 'Source ↗', atlas: 'Atlas ↗', principlesAria: 'Working principles', principleOne: 'Explicit authority',
    principleTwo: 'Reproducible state', principleThree: 'Focused validation', principleFour: 'Maintainable delivery',
    contribTitle: 'External contributions', contribIntro: 'Only repositories owned by other people or organizations are counted; figures are merged PRs verified on 2026-08-29.',
    activityAria: 'View Wu Shuwen’s GitHub Contribution Activity', dailyRefresh: 'Updated daily ↗', activityAlt: 'Wu Shuwen’s animated GitHub Contribution Activity',
    motionPaused: 'Animation is paused for reduced motion; open GitHub to view the contribution record.',
    exclusionNote: 'Excludes repositories owned by dajiaohuang and SagaSmithAI.', allContribs: 'All external contributions ↗',
    researchTitle: 'Research', researchIntro: 'Starting from human motion and multimodal understanding, I bring measurement and reproducibility into software systems.',
    interxRole: 'Co-author · dual-human interaction dataset and benchmark', himoRole: 'Co-author · human–multi-object interaction benchmark',
    paper: 'Paper ↗', project: 'Project ↗', thirdPlace: 'Third place', challengeRole: 'Body Pose track · team SJTU-SEIEE',
    aboutIntro: 'Software engineer and data-science MSc student working across agent infrastructure, retrieval, scientific visualization, and open-source maintenance.',
    aboutBody: 'I am interning at TikTok and studying Data Science and Machine Learning at NUS. I graduated from SJTU’s IEEE Honor Class in Information Security and previously worked on enterprise agentic RAG and human-motion research.',
    timelineAria: 'Experience', present: 'Now', tiktokRole: 'Software Engineer Intern', nus: 'National University of Singapore',
    nusRole: 'MSc, Data Science & Machine Learning', cpic: 'China Pacific Insurance', cpicRole: 'Algorithm Intern · agentic RAG',
    sjtu: 'Shanghai Jiao Tong University', sjtuRole: 'BEng, Information Security · IEEE Honor Class',
    footerNote: 'Chinese first · no trackers · zero framework', viewSource: 'View source ↗',
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
