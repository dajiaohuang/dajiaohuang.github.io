(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const languageToggle = document.querySelector('[data-language-toggle]');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');

  const english = {
    skip: 'Skip to content', backTop: 'Wu Shuwen, back to top', primaryNav: 'Primary navigation',
    navWork: 'Work', navContributions: 'Contributions', navMethod: 'Method', navResearch: 'Research', navAbout: 'About', theme: 'Theme',
    heroEyebrow: 'Building in public', heroTitle: 'I build systems that can <em>explain themselves.</em>',
    heroLede: 'Agent infrastructure, evidence-first workflows, and scientific interfaces—designed with explicit authority, reproducible state, and honest boundaries.',
    exploreWork: 'Explore selected work', startConversation: 'Start a conversation', coordNow: 'Now', coordNowValue: 'Software Engineer Intern · TikTok',
    coordStudy: 'Study', coordStudyValue: 'MSc, Data Science & Machine Learning · NUS', coordRange: 'Range', coordRangeValue: 'Agents · MCP · scientific computing · open source',
    mapHeading: 'Current system map', signal: 'Signal', workEyebrow: 'Selected systems', workTitle: 'Five projects, one operating idea.',
    workIntro: 'Useful systems make their sources, state, permissions, and failure modes visible. These projects apply that idea at very different scales.',
    sagaDomain: 'Agent platform · multi-repository system', activeAlpha: 'Active alpha', sagaThesis: 'A world should remember every choice—without asking the model to become the database.',
    sagaDesc: 'SagaSmith is an AI-native TTRPG platform spanning a local Agent Kit, a hosted web product, system-neutral runtime primitives, and D&D, CoC, and narrative domains. Agents interpret and host; deterministic engines and authoritative MCP services own rules and persistent state.',
    visitProduct: 'Visit product site', exploreOrg: 'Explore the organization', repoDomain: 'Open-source stewardship', repoThesis: 'Contribution is a maintenance loop, not a one-shot patch.',
    repoDesc: 'A portable Agent Skill for finding actionable work, auditing complete repositories, producing focused fixes, verifying current GitHub state, and maintaining PRs through review and CI.',
    repository: 'Repository', projectSite: 'Project site', archiveDomain: 'Evidence-to-application workflow', archiveThesis: 'Career materials should be derived from evidence, not memory.',
    archiveDesc: 'A source-first Codex Skill that turns experience evidence and role requirements into traceable resumes, interview packs, job pipelines, and academic application materials.',
    evoDomain: 'Scientific interface · deep time', evoThesis: 'Explore 4.567 billion years without hiding uncertainty.',
    evoDesc: 'A static-first atlas linking geological time, fossil occurrence coordinates, phylogenetic hypotheses, and curated evidence. It separates navigation ontology, sampled occurrence records, and scientific maturity instead of blending them into false certainty.',
    solarDomain: 'Scientific interface · orbital dynamics', solarThesis: 'Make the model—and its limits—part of the interface.',
    solarDesc: 'A browser-native Solar System dynamics and small-body atlas connecting spatial views, orbital-element space, event search, mission analysis, and reproducible scene URLs. Built for exploration and teaching, not operational navigation.',
    liveAtlas: 'Live atlas', source: 'Source', contribEyebrow: 'Open-source contributions', contribTitle: 'Maintaining real software beyond my own projects.',
    contribIntro: 'Only public repositories owned by other people or organizations are included here, and every contribution shown has been merged. Counts come from verifiable GitHub PR records.',
    activityAria: 'View Wu Shuwen’s GitHub Contribution Activity', activityAlt: 'Wu Shuwen’s animated GitHub Contribution Activity', dailyRefresh: 'Refreshed daily ↗',
    motionPaused: 'Animation is paused to respect your reduced-motion preference. Open GitHub to view the contribution record.',
    mergedPRs: 'merged PRs', praisonFocus: 'Agent runtime, reliability, and desktop', vchartFocus: 'Build fixes and documentation integrity',
    g3Focus: 'Rust, cross-platform commands, CI, and docs', varmorFocus: 'Policy correctness, concurrency, and tests',
    nanobotFocus: 'Security boundaries, Windows support, and session recovery', openvikingFocus: 'Memory indexing, patch handling, and Go SDK',
    rufloFocus: 'Session state, Windows launch, and MCP tool selection', rslibFocus: 'Node archive performance and documentation',
    contribNote: 'Verified on 2026-08-29; excludes repositories owned by dajiaohuang and SagaSmithAI.', viewAllContribs: 'View all external contributions ↗',
    methodEyebrow: 'How I work', methodTitle: 'Interfaces on top. Contracts underneath.', authorityTitle: 'Make authority explicit',
    authorityDesc: 'Separate the model from the source of truth. Every write path should reveal who may act, against which revision, and with what scope.',
    maintenanceTitle: 'Design for maintenance', maintenanceDesc: 'Verification, rollback, observability, and handoff are product features. A shipped system begins a maintenance relationship.',
    evidenceTitle: 'Keep evidence distinct', evidenceDesc: 'A source, an inference, and a polished claim are not interchangeable. Good tools keep the path between them inspectable.',
    researchEyebrow: 'Research & earlier work', researchTitle: 'From human motion to agent systems.',
    researchIntro: 'My research foundation is computer vision and multimodal understanding; my current work brings the same emphasis on measurement and reproducibility to agents and software systems.',
    interxDesc: 'Co-authored a large dual-human interaction dataset and benchmark spanning motion, text, interaction order, relationship, and personality annotations.',
    himoDesc: 'Co-authored a benchmark for fine-grained, full-body human–multi-object interaction synthesis across 3.3K sequences and 53 object types.',
    paper: 'Paper', project: 'Project', challengeTitle: '3D human body motion estimation',
    challengeDesc: 'Placed third in the Body Pose track as team SJTU-SEIEE with a level-wise Transformer for egocentric and exocentric 3D keypoint estimation.',
    currentBase: 'Current base', singapore: 'Singapore', aboutEyebrow: 'About',
    aboutLede: 'I am a software engineer and MSc student working across agent infrastructure, retrieval, scientific visualization, and open-source maintenance.',
    aboutDesc: 'I study Data Science and Machine Learning at the National University of Singapore and graduated from Shanghai Jiao Tong University’s IEEE Honor Class in Information Security. Before my current TikTok internship, I worked on enterprise agentic RAG at China Pacific Insurance and human-motion research at SJTU’s AI Institute.',
    timelineNow: 'Now', tiktokRole: 'Software Engineer Intern', nusName: 'National University of Singapore', nusDegree: 'MSc, Data Science & Machine Learning',
    cpicName: 'China Pacific Insurance', cpicRole: 'Algorithm Intern · agentic RAG and database troubleshooting', sjtuName: 'Shanghai Jiao Tong University',
    sjtuDegree: 'BEng, Information Security · IEEE Honor Class', email: 'Email', footerNote: 'Designed and built by Wu Shuwen. No trackers, no remote fonts, no framework.', viewSource: 'View source',
  };

  const zhMetadata = {
    title: 'Wu Shuwen — 系统、智能体与证据',
    description: 'Wu Shuwen 在新加坡构建智能体基础设施、证据优先工作流与科学交互界面。',
    ogDescription: '智能体基础设施、证据优先工作流与科学交互界面。',
  };
  const enMetadata = {
    title: 'Wu Shuwen — Systems, agents, and evidence',
    description: 'Wu Shuwen builds agent infrastructure, evidence-first workflows, and scientific interfaces in Singapore.',
    ogDescription: 'Agent infrastructure, evidence-first workflows, and scientific interfaces.',
  };

  const mapNodes = [...document.querySelectorAll('[data-map-node]')];
  const mapTitle = document.querySelector('[data-map-title]');
  const mapKind = document.querySelector('[data-map-kind]');
  const mapCopy = document.querySelector('[data-map-copy]');
  const defaultNode = mapNodes.find((node) => node.classList.contains('map-node-center'));
  let activeNode = defaultNode;

  const activateNode = (node) => {
    if (!node) return;
    activeNode = node;
    const language = root.dataset.lang === 'en' ? 'en' : 'zh';
    mapNodes.forEach((candidate) => candidate.classList.toggle('is-active', candidate === node));
    if (mapTitle) mapTitle.textContent = node.dataset.title || '';
    if (mapKind) mapKind.textContent = node.dataset[`kind${language === 'zh' ? 'Zh' : 'En'}`] || '';
    if (mapCopy) mapCopy.textContent = node.dataset[`copy${language === 'zh' ? 'Zh' : 'En'}`] || '';
  };

  const applyLanguage = (language, persist = true) => {
    const isEnglish = language === 'en';
    root.dataset.lang = isEnglish ? 'en' : 'zh';
    root.lang = isEnglish ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (isEnglish && english[key]) element.textContent = english[key];
      else if (!isEnglish && element.dataset.zh) element.textContent = element.dataset.zh;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const key = element.dataset.i18nHtml;
      if (isEnglish && english[key]) element.innerHTML = english[key];
      else if (!isEnglish && element.dataset.zhHtml) element.innerHTML = element.dataset.zhHtml;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const key = element.dataset.i18nAria;
      if (isEnglish && english[key]) element.setAttribute('aria-label', english[key]);
      else if (!isEnglish && element.dataset.zhAria) element.setAttribute('aria-label', element.dataset.zhAria);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const key = element.dataset.i18nAlt;
      if (isEnglish && english[key]) element.setAttribute('alt', english[key]);
      else if (!isEnglish && element.dataset.zhAlt) element.setAttribute('alt', element.dataset.zhAlt);
    });
    const metadata = isEnglish ? enMetadata : zhMetadata;
    document.title = metadata.title;
    metaDescription?.setAttribute('content', metadata.description);
    ogTitle?.setAttribute('content', metadata.title);
    ogDescription?.setAttribute('content', metadata.ogDescription);
    if (languageToggle) {
      languageToggle.querySelector('[data-language-current]').textContent = isEnglish ? 'EN' : '中';
      languageToggle.querySelector('[data-language-other]').textContent = isEnglish ? '中' : 'EN';
      languageToggle.setAttribute('aria-label', isEnglish ? '切换为中文' : 'Switch to English');
    }
    activateNode(activeNode);
    applyTheme(root.dataset.theme || 'light', false);
    if (persist) {
      try { localStorage.setItem('ws-lang', isEnglish ? 'en' : 'zh'); } catch (_) {}
    }
  };

  const applyTheme = (theme, persist = true) => {
    root.dataset.theme = theme;
    if (themeToggle) {
      const darkNext = theme !== 'dark';
      const isEnglish = root.dataset.lang === 'en';
      themeToggle.setAttribute('aria-label', isEnglish
        ? `Switch to ${darkNext ? 'dark' : 'light'} theme`
        : `切换至${darkNext ? '深色' : '浅色'}主题`);
    }
    themeColor?.setAttribute('content', theme === 'dark' ? '#0e151b' : '#edf3f7');
    if (persist) {
      try { localStorage.setItem('ws-theme', theme); } catch (_) {}
    }
  };

  document.querySelectorAll('[data-i18n]').forEach((element) => { element.dataset.zh = element.textContent; });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => { element.dataset.zhHtml = element.innerHTML; });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => { element.dataset.zhAria = element.getAttribute('aria-label'); });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => { element.dataset.zhAlt = element.getAttribute('alt'); });

  applyTheme(root.dataset.theme || 'light', false);
  applyLanguage(root.dataset.lang || 'zh', false);

  themeToggle?.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  languageToggle?.addEventListener('click', () => applyLanguage(root.dataset.lang === 'en' ? 'zh' : 'en'));

  mapNodes.forEach((node) => {
    node.addEventListener('pointerenter', () => activateNode(node));
    node.addEventListener('focus', () => activateNode(node));
  });
  document.querySelector('.map-canvas')?.addEventListener('pointerleave', () => activateNode(defaultNode));
  activateNode(defaultNode);

  const revealItems = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const header = document.querySelector('[data-header]');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${visible.target.id}`;
        if (active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0.01, 0.2, 0.6] });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
