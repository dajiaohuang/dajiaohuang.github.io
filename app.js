(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const languageToggle = document.querySelector('[data-language-toggle]');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');

  const english = {
    archiveKind: 'Career and academic application workflow', archiveDesc: 'Turns experience records into traceable resumes, interview materials, and academic applications.',
    evoKind: 'Scientific visualization · geological time', evoDesc: 'Explore geological time, fossils, and evolutionary relationships with scientific uncertainty.',
    solarKind: 'Scientific visualization · orbital dynamics', solarDesc: 'Explore Solar System orbits and small bodies; not for operational navigation.',
    contribDesc0: "Agent runtime, tool calls, session and storage reliability fixes",
    contribDesc1: "Pricing stability, date handling, and cash-flow fixes",
    contribDesc2: "Device protocol, hardware concurrency, and resource management fixes",
    contribDesc3: "Session recovery, process lifecycle, and cross-platform fixes",
    contribDesc4: "Command aliases, test isolation, and CI validation fixes",
    contribDesc5: "API entries and duplicate-link checker fixes",
    contribDesc6: "System and cloud audit checks and CLI behavior fixes",
    contribDesc7: "Windows execution, API authentication, and session archive fixes",
    contribDesc8: "Browser connection, temporary profile cleanup, and Windows build fixes",
    contribDesc9: "Tool selection, Windows launch, and session state fixes",
    contribDesc10: "SQL alias, JSON NULL, and SQLite compatibility fixes",
    contribDesc11: "Windows sandbox execution fixes and extension documentation updates",
    contribDesc12: "Inference cancellation fixes and Windows test compatibility",
    contribDesc13: "Memory indexing, patch handling, and Windows Go SDK fixes",
    contribDesc14: "Added a React learning resource",
    contribDesc15: "Configuration coercion fixes, Windows tests, and routing documentation",
    contribDesc16: "Documentation link fixes and CLI catalog completion",
    contribDesc17: "Tuple formatting, documentation encoding, and format-reference fixes",
    contribDesc18: "File-read error reporting and Windows installation path fixes",
    contribDesc19: "Linux desktop launch and OIDC logout fixes",
    contribDesc20: "Fixed integer precision in the trailing-zeroes algorithm",
    contribDesc21: "Security policy scope and contribution documentation links",
    contribDesc22: "Evaluation failure handling and model request measurement fixes",
    contribDesc23: "Corrected the plugin system documentation example",
    contribDesc24: "Diagnostic retention, SARIF severity, and OAuth callback fixes",
    contribDesc25: "Fixed MiniMax M2 partial rotary parameter mapping",
    contribDesc26: "Build failure propagation fixes and documentation link maintenance",
    contribDesc27: "Configuration parsing, cross-platform commands, and Rust CI fixes",
    contribDesc28: "Documentation link fixes and agent tool requirement updates",
    contribDesc29: "Policy immutability, concurrent registries, and port-range fixes",
    mergedPR: 'merged PR', mergedPRs: 'merged PRs', contribOrder: '30 selected projects, ordered by project reach (GitHub stars) and merged contribution count.',
    accountAlt: 'Wu Shuwen’s GitHub account statistics and rank', rankNote: 'Third-party account rank by GitHub Readme Stats',
    skip: 'Skip to content', backTop: 'Wu Shuwen, back to top', primaryNav: 'Primary navigation', theme: 'Theme',
    navWork: 'Work', navContributions: 'Contributions', navResearch: 'Research', navAbout: 'About',
    heroEyebrow: 'Software engineering · agent systems · scientific interfaces',
    heroLede: 'Working on agent systems and scientific visualization.',
    viewWork: 'View work', emailMe: 'Email me', factsAria: 'Current information', now: 'Now', nowValue: 'Software Engineer Intern · TikTok',
    study: 'Study', studyValue: 'MSc DSML · National University of Singapore', base: 'Base', baseValue: 'Singapore · UTC+8',
    workTitle: 'Selected projects', workIntro: 'Agent tools, open-source workflows, and scientific visualization.',
    sagaKind: 'Agent platform · Active Alpha', sagaDesc: 'A tabletop role-playing platform combining agent-led play with a rules engine.',
    repoKind: 'Portable stewardship Skill', repoDesc: 'A workflow for discovering, fixing, and following up on open-source repository issues.',
    cotKind: 'Local-first AI gateway · Go', cotDesc: 'A local Go AI gateway across providers and accounts, with an OpenAI-compatible interface.',
    site: 'Site ↗', source: 'Source ↗', contribTitle: 'Selected contributions', contribIntro: 'As of 2026-10-03 19:28 (UTC+8): 736 merged PRs across 319 public external repositories.',
    exclusionNote: 'Excludes owned and private repositories.',
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
