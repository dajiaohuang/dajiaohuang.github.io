---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class="anchor" id="about-me"></span>

<section class="profile-hero">
  <div class="profile-hero__content">
    <p class="eyebrow">Data Science & Machine Learning · NUS</p>
    <h1>Shuwen Wu</h1>
    <p class="profile-hero__lead">I build machine learning systems for multimodal understanding, human motion modeling, recommendation, and interactive data products.</p>
    <div class="profile-hero__actions">
      <a class="btn-profile" href="mailto:mikewushuwen@gmail.com"><i class="fas fa-fw fa-envelope" aria-hidden="true"></i> Email</a>
      <a class="btn-profile btn-profile--secondary" href="https://github.com/dajiaohuang"><i class="fab fa-fw fa-github" aria-hidden="true"></i> GitHub</a>
      <a class="btn-profile btn-profile--secondary" href="https://scholar.google.com/citations?user=vXMJOTIAAAAJ"><i class="fas fa-fw fa-graduation-cap" aria-hidden="true"></i> Scholar</a>
    </div>
  </div>
  <div class="profile-hero__panel">
    <div class="hero-stat">
      <span>Focus</span>
      <strong>Vision · NLP · Multimodal AI</strong>
    </div>
    <div class="hero-stat">
      <span>Current</span>
      <strong>MSc Student at NUS</strong>
    </div>
    <div class="hero-stat">
      <span>Selected Work</span>
      <strong>CVPR 2024 · ECCV 2024 · GitHub Pages apps</strong>
    </div>
  </div>
</section>

<section class="section-block section-block--intro">
  <p>I am currently a Master's student in Data Science and Machine Learning at <a href="https://www.nus.edu.sg/">National University of Singapore</a>. I completed my undergraduate studies at <a href="https://en.sjtu.edu.cn/">Shanghai Jiao Tong University</a>, majoring in Information Security in the IEEE Honor Class.</p>
  <p>My recent work combines research prototypes and deployable applications: human-human and human-object motion datasets, LLM-based recommendation and meme interpretation, and interactive web tools for scientific visualization and Singapore rental search.</p>
</section>

<span class="anchor" id="-news"></span>
<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Updates</p>
    <h2>News</h2>
  </div>
  <div class="timeline-list">
    <div class="timeline-item">
      <time>2025.08</time>
      <p>Started the Master's program in Data Science and Machine Learning at NUS.</p>
    </div>
    <div class="timeline-item">
      <time>2024.07</time>
      <p>Paper accepted to <strong>ECCV 2024</strong>: HIMO benchmark for full-body human-object interaction.</p>
    </div>
    <div class="timeline-item">
      <time>2024.06</time>
      <p>Won <strong>third place</strong> in the CVPR 2024 Ego-EXO4D Challenge, Body Pose Track.</p>
    </div>
    <div class="timeline-item">
      <time>2024.02</time>
      <p>Paper accepted to <strong>CVPR 2024</strong>: Inter-X dataset for human-human interaction analysis.</p>
    </div>
  </div>
</section>

<span class="anchor" id="-publications"></span>
<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Research</p>
    <h2>Publications</h2>
  </div>

  <article class="feature-card publication-card">
    <div class="feature-card__media">
      <img src="images/InterX.png" alt="Inter-X dataset preview">
    </div>
    <div class="feature-card__body">
      <p class="card-kicker">CVPR 2024</p>
      <h3>Inter-X: Towards Versatile Human-Human Interaction Analysis</h3>
      <p class="authors">Liang Xu, Xintao Lv, Yichao Yan, Xin Jin, <strong>Shuwen Wu</strong>, Congsheng Xu, Yifan Liu, Yizhou Zhou, Fengyun Rao, Xingdong Sheng, Yunhui Liu, Wenjun Zeng, Xiaokang Yang.</p>
      <p>The largest dual-human interaction dataset to date, with SMPL-X parameters, skeleton sequences, body-part-level text descriptions, interaction order, relationship, and personality annotations for downstream tasks such as text-to-motion, reaction generation, and motion captioning.</p>
      <div class="link-row">
        <a href="https://arxiv.org/pdf/2312.16051.pdf">Paper</a>
        <a href="https://liangxuy.github.io/inter-x/">Project</a>
      </div>
    </div>
  </article>

  <article class="feature-card publication-card">
    <div class="feature-card__media">
      <div class="feature-card__placeholder">
        <strong>HIMO</strong>
        <span>Full-body human-object interaction benchmark</span>
      </div>
    </div>
    <div class="feature-card__body">
      <p class="card-kicker">ECCV 2024</p>
      <h3>HIMO: A New Benchmark for Full-Body Human Interacting with Multiple Objects</h3>
      <p class="authors">Xintao Lv, Liang Xu, Yichao Yan, Xin Jin, Congsheng Xu, <strong>Shuwen Wu</strong>, Yizhou Zhou, Yifan Liu, Lincheng Li, Mengxiao Bi, Wenjun Zeng, Xiaokang Yang.</p>
      <p>A large-scale human-multi-object interaction benchmark with 3.3K sequences, 4.08M frames, and 53 object types, plus a dual-branch diffusion model and autoregressive generation pipeline for fine-grained temporal control.</p>
      <div class="link-row">
        <a href="https://arxiv.org/abs/2407.12371">Paper</a>
        <a href="https://lvxintao.github.io/himo/">Project</a>
      </div>
    </div>
  </article>
</section>

<span class="anchor" id="-projects"></span>
<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Engineering</p>
    <h2>Projects</h2>
  </div>

  <div class="project-grid">
    <article class="project-card project-card--featured">
      <div class="project-card__topline">
        <span>React · D3 · Leaflet</span>
        <span>2026</span>
      </div>
      <h3>Evo</h3>
      <p class="project-card__subtitle">Paleontological Evolution Visualization</p>
      <p>Interactive history-of-life explorer with synchronized paleogeographic maps, phylogenetic trees, geological timeline controls, and 13,600+ fossil records from the Paleobiology Database.</p>
      <div class="link-row">
        <a href="https://dajiaohuang.github.io/evo/">Live Demo</a>
        <a href="https://github.com/dajiaohuang/evo">GitHub</a>
      </div>
    </article>

    <article class="project-card project-card--featured">
      <div class="project-card__topline">
        <span>React · TypeScript · Routing</span>
        <span>2026</span>
      </div>
      <h3>SG Rent</h3>
      <p class="project-card__subtitle">Singapore Rental Housing Recommendation System</p>
      <p>Static web app for ranking HDB and condo options by MRT commute time, price, and amenities. Includes Dijkstra routing across MRT/LRT lines, map overlays, filters, and 1,535 property records.</p>
      <div class="link-row">
        <a href="https://dajiaohuang.github.io/sg_rent/">Live Demo</a>
        <a href="https://github.com/dajiaohuang/sg_rent">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-card__topline">
        <span>AgentSkill · Tooling</span>
        <span>2026</span>
      </div>
      <h3>Claude Code Skill</h3>
      <p>OpenClaw-compatible AgentSkill that routes coding tasks through Claude Code CLI, including implementation, refactoring, debugging, review, project scaffolding, and subagent workflows.</p>
      <div class="link-row">
        <a href="https://github.com/dajiaohuang/claude-code-skill">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-card__topline">
        <span>LLaVA · QLoRA · RAG</span>
        <span>2026.03 - 2026.04</span>
      </div>
      <h3>MemeSense</h3>
      <p>Interpretable meme understanding pipeline with OCR, structured annotation, cultural context classification, selective RAG retrieval, and caption generation. Selective context injection outperformed always-retrieve and never-retrieve baselines.</p>
    </article>

    <article class="project-card">
      <div class="project-card__topline">
        <span>Qwen2 · QLoRA · Recommendation</span>
        <span>NUS DSA5106</span>
      </div>
      <h3>CoLLM Reproduction & Extension</h3>
      <p>Reproduced CoLLM and migrated the Vicuna/LLaMA setup to Qwen2 with QLoRA. A two-stage pipeline injected collaborative embeddings into the LLM hidden space and improved MovieLens-1M OOD AUC from 0.678 to 0.691.</p>
    </article>

    <article class="project-card">
      <div class="project-card__topline">
        <span>Transformer · Pose Estimation</span>
        <span>CVPR 2024</span>
      </div>
      <h3>Ego-EXO4D Body Pose Challenge</h3>
      <p>Designed a level-wise Transformer network for 3D body pose estimation from egocentric and exocentric camera views, placing third in the CVPR 2024 challenge. Built training, inference, WandB tracking, and coordinate transformation pipelines.</p>
    </article>

    <article class="project-card">
      <div class="project-card__topline">
        <span>Stable Diffusion · SVDiff</span>
        <span>SJTU AI3603</span>
      </div>
      <h3>SVD-InST: Image Style Transfer</h3>
      <p>Combined Textual Inversion with Singular Value Decomposition fine-tuning on Stable Diffusion 1.4. Trained only 3.7M parameters and outperformed InST, CycleGAN, and StyTR-2 on the Nine-Colored Mural benchmark.</p>
      <div class="link-row">
        <a href="https://github.com/dajiaohuang/SVD-InST">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-card__topline">
        <span>Three.js · Vite · TypeScript</span>
        <span>2025</span>
      </div>
      <h3>Solar</h3>
      <p>Interactive 3D solar system trajectory visualizer with planetary orbits, asteroid catalog browsing, conjunction detection, frame comparison, URL state persistence, and JSON/CSV export.</p>
      <div class="link-row">
        <a href="https://dajiaohuang.github.io/solar/">Live Demo</a>
      </div>
    </article>
  </div>
</section>

<span class="anchor" id="-experiences"></span>
<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Background</p>
    <h2>Experience</h2>
  </div>

  <div class="experience-list">
    <article class="experience-card">
      <div>
        <h3>AI Institute, School of Computer Science, Shanghai Jiao Tong University</h3>
        <p class="meta">Undergraduate Research Intern · July 2023 - May 2024</p>
      </div>
      <p>Worked on computer vision and embodied intelligence research under Prof. Xiaokang Yang and Prof. Yichao Yan. Contributed to motion capture data collection, human motion model training, virtual scene rendering, and two papers published at CVPR 2024 and ECCV 2024.</p>
    </article>

    <article class="experience-card">
      <div>
        <h3>Digital Intelligence Institute, China Pacific Insurance</h3>
        <p class="meta">Algorithm Intern · Feb 2025 - July 2025</p>
      </div>
      <p>Built enterprise LLM systems, including an OpenAI-style RAG service for document QA and a multi-agent platform with specialized agents for structured DataQA, document understanding, and troubleshooting.</p>
    </article>
  </div>
</section>

<span class="anchor" id="-honors-and-awards"></span>
<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Recognition</p>
    <h2>Honors</h2>
  </div>
  <ul class="compact-list">
    <li><strong>Third Place</strong>, CVPR 2024 Ego-EXO4D Challenge, Body Pose Track.</li>
    <li><strong>First-Class Cyber-Security Scholarship</strong>, Shanghai Jiao Tong University, 2023.</li>
    <li><strong>Excellent League Member of SJTU</strong>, 2022.</li>
    <li><strong>Outstanding Freshman Award</strong>, Shanghai Jiao Tong University, 2021.</li>
  </ul>
</section>

<span class="anchor" id="-educations"></span>
<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Training</p>
    <h2>Education</h2>
  </div>
  <div class="education-grid">
    <article class="education-card">
      <h3>National University of Singapore</h3>
      <p class="meta">MSc, Data Science and Machine Learning · 2025.08 - Present</p>
      <p>Selected courses: Machine Learning, Scalable Distributed Computing, Data Management and Retrieval.</p>
    </article>
    <article class="education-card">
      <h3>Shanghai Jiao Tong University</h3>
      <p class="meta">BEng, Information Security, IEEE Honor Class · 2021.09 - 2025.06</p>
      <p>GPA: 85.5/100. Selected courses: Algorithm Design and Analysis, C++ Program Design Practice, Unreal Engine Program Design, Artificial Intelligence Principles, Natural Language Processing.</p>
    </article>
  </div>
</section>

<span class="anchor" id="-links"></span>
<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Live Work</p>
    <h2>Links</h2>
  </div>
  <div class="link-grid">
    <a href="https://dajiaohuang.github.io/evo/">
      <strong>Evo</strong>
      <span>Interactive paleontology and evolution visualization.</span>
    </a>
    <a href="https://dajiaohuang.github.io/sg_rent/">
      <strong>SG Rent</strong>
      <span>Singapore rental search ranked by commute, price, and amenities.</span>
    </a>
    <a href="https://dajiaohuang.github.io/solar/">
      <strong>Solar</strong>
      <span>3D solar system trajectory visualizer.</span>
    </a>
    <a href="https://github.com/dajiaohuang">
      <strong>GitHub</strong>
      <span>Code, experiments, and project repositories.</span>
    </a>
  </div>
</section>
