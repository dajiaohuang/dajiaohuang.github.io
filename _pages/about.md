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

<span class='anchor' id='about-me'></span>

I am currently a Master's student in Data Science and Machine Learning at [National University of Singapore (NUS)](https://www.nus.edu.sg/). I completed my undergraduate studies at [Shanghai Jiao Tong University (SJTU)](https://en.sjtu.edu.cn/), majoring in Information Security (IEEE Honor Class). My work spans LLM agents, agentic RAG, MCP/tool-use systems, recommender systems, computer vision, and multimodal understanding, with a focus on building deployable AI systems from research prototypes.

<span class='anchor' id='-news'></span>
# 🔥 News

- *2026.05* — Built a campus-oriented LLM Agent and MCP tool ecosystem, including SJTU Agent, Shuiyuan MCP, and Treehole MCP.
- *2025.08* — Started Master's program in Data Science and Machine Learning at NUS.
- *2024.07* — One paper accepted to **ECCV 2024**: HIMO benchmark for human-object interaction.
- *2024.06* — 🏆 **Third Place** in CVPR 2024 Ego-EXO4D Challenge (Body Pose Track).
- *2024.02* — One paper accepted to **CVPR 2024**: Inter-X dataset for human-human interaction analysis.

<span class='anchor' id='-publications'></span>
# 📝 Publications 

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <img src="images/InterX.png" alt="sym" width="100%">
    </div>
  </div>
  <div class="paper-box-text">
    <p><strong>Inter-X: Towards Versatile Human-Human Interaction Analysis</strong></p>

<p><em>Liang Xu, Xintao Lv, Yichao Yan, Xin Jin, <strong>Shuwen Wu</strong>, Congsheng Xu, Yifan Liu, Yizhou Zhou, Fengyun Rao, Xingdong Sheng, Yunhui Liu, Wenjun Zeng, Xiaokang Yang.<br>
IEEE Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>), 2024.</em><br>
<a href="https://arxiv.org/pdf/2312.16051.pdf">[paper]</a> <a href="https://liangxuy.github.io/inter-x/">[project]</a> <a href="https://doi.org/10.1109/cvpr52733.2024.02101">[doi]</a></p>

<p>The largest dual-human interaction dataset to date (~11K sequences, 8.1M+ frames), featuring SMPL-X parameters, skeleton sequences, body-part-level textual descriptions, interaction order, relationship, and personality annotations. Supports 8 downstream tasks including text-to-motion, reaction generation, and motion captioning.</p>

  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <img src="images/HIMO.png" alt="sym" width="100%">
    </div>
  </div>
  <div class="paper-box-text">
    <p><strong>HIMO: A New Benchmark for Full-Body Human Interacting with Multiple Objects</strong></p>

<p><em>Xintao Lv, Liang Xu, Yichao Yan, Xin Jin, Congsheng Xu, <strong>Shuwen Wu</strong>, Yizhou Zhou, Yifan Liu, Lincheng Li, Mengxiao Bi, Wenjun Zeng, Xiaokang Yang.<br>
European Conference on Computer Vision (<strong>ECCV</strong>), 2024.</em><br>
<a href="https://arxiv.org/abs/2407.12371">[paper]</a> <a href="https://lvxintao.github.io/himo/">[project]</a> <a href="https://doi.org/10.1007/978-3-031-73235-5_17">[doi]</a></p>

<p>First large-scale full-body human-multi-object interaction benchmark (3.3K sequences, 4.08M frames, 53 object types). Proposes a dual-branch diffusion model with Mutual Interaction Module and autoregressive generation pipeline for fine-grained temporal control in HOI synthesis.</p>

  </div>
</div>

<span class='anchor' id='-projects'></span>
# 💻 Projects

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">Agent/MCP</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><strong>Campus Agent and MCP Tool Ecosystem</strong></p>
    <p><i>Personal / Open-source Agent Engineering Project</i> | 2026.05</p>
    <p>Built a campus-oriented LLM agent tool ecosystem around <strong>sjtu-agent</strong>, <strong>shuiyuan-mcp</strong>, and <strong>ykst-treehole-mcp</strong>. Upgraded SJTU Agent from a fixed built-in tool list into an extensible local agent runtime with dynamic MCP tool discovery, stdio/SSE/streamable HTTP transports, short-lived MCP sessions, OpenAI/Anthropic streaming tool loops, and <strong>SKILL.md</strong> prompt injection shared by CLI, Web SSE, Telegram, Feishu, WeChat, and reminder daemons. Implemented Shuiyuan MCP for Discourse/SSO-cookie workflows with 25 tools and 10 resources, and reverse-engineered Treehole's gRPC-Web/protobuf protocol to expose 51 MCP tools. Added pinned install flows, local-session secret safeguards, and explicit write gates such as <code>confirm: true</code>.</p>
    <p><i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/dajiaohuang/sjtu-agent"> SJTU Agent</a> | <a href="https://github.com/dajiaohuang/shuiyuan-mcp">Shuiyuan MCP</a> | <a href="https://github.com/dajiaohuang/ykst-treehole-mcp">Treehole MCP</a></p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">CS4248</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><strong>MemeSense: Structured Textual Explanations for Meme Interpretation</strong></p>
    <p><i>NUS CS4248 — Multimodal Understanding</i> | 2026.03 - 2026.04</p>
    <p>Built an interpretable meme-understanding pipeline using <strong>LLaVA-1.5-7B + QLoRA</strong>: EasyOCR adaptive preprocessing → GPT-4o structured silver labels → cultural-context need classification → BM25 RAG retrieval → caption generation. Designed selective knowledge injection so the model retrieves external cultural context only when needed, outperforming always-retrieve and never-retrieve baselines. In a 30-sample human evaluation, <strong>83.3%</strong> of generated explanations were preferred over original dataset captions; token F1, ROUGE-L, and BERTScore were used for multi-input ablations.</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">DSA5106</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><a href="https://github.com/dajiaohuang/CoLLM">CoLLM: Collaborative LLM for Recommendation — Reproduction & Extension</a></p>
    <p><i>NUS DSA5106 — Scalable Distributed Computing</i> | 2026.04 - 2026.05</p>
    <p>Reproduced and extended the CoLLM framework for injecting collaborative filtering signals into LLM-based recommendation. Migrated the codebase from Vicuna/LLaMA to <strong>Qwen2-7B + QLoRA</strong> (4-bit NF4, double quantization), fixed AMP NaN loss, missing <code>&lt;unk&gt;</code> token handling, and collaborative token embedding alignment. Two-stage training first taught the LLM to recommend from user-history text, then froze LLM + LoRA and trained a GELU MLP to project MF user/item embeddings into the LLM hidden space as soft collaborative tokens. On MovieLens-1M OOD, AUC improved from <strong>0.678</strong> to <strong>0.691</strong>, above the MF-only baseline of 0.674.</p>
    <p><i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/dajiaohuang/CoLLM"> GitHub</a></p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">CVPR 2024</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><strong>🏆 3D Human Body Motion Estimation — Ego-EXO4D Challenge (3rd Place)</strong></p>
    <p><i>CVPR 2024 Workshop</i> | 2024.04 - 2024.05</p>
    <p>Designed a <strong>level-wise Transformer</strong> network to predict 17 body keypoint positions in 3D from egocentric and exocentric camera footage, placing <strong>third</strong> in the CVPR 2024 Ego-EXO4D Challenge body pose track as team SJTU-SEIEE. Used a dual-branch architecture: a shallow encoder captures local motion patterns while a deep 32-layer encoder models long-range temporal context. Implemented training, evaluation, sliding-window inference, WandB tracking, and coordinate transformation between global and Aria camera systems; evaluated across 9 real-world activity scenarios using MPJPE and MPJVE.</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">AI3603</div>
  <img src="images/ai3603.png" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><a href="https://github.com/dajiaohuang/SVD-InST">SVD-InST: Image Style Transfer</a></p>
    <p><i>SJTU AI3603 Final Project</i> | 2023.11 - 2023.12</p>
    <p>Fine-tuned Stable Diffusion 1.4 to translate real photos into the Nine-Colored Mural artistic style. Combined <strong>Textual Inversion</strong> for learning a style token with <strong>Singular Value Decomposition fine-tuning</strong> (SVDiff), freezing most model weights and training only 3.7M parameters (0.25% of the full model). Achieved the best FID score among compared methods: <strong>FID 125.1</strong>, outperforming InST (127.5), CycleGAN (178.3), StyTR-2 (171.3), and fast-style-transfer (172.7), with LPIPS 0.54 on par with InST.</p>
    <p><i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/dajiaohuang/SVD-InST"> GitHub</a> | <a href="/blob/main/Report.pdf">PDF</a></p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">NIS4301</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><a href="https://github.com/dajiaohuang/rllm">Recommendation System & LLM Instruction Tuning</a></p>
    <p><i>SJTU NIS4301</i> | 2024.03 - 2024.05</p>
    <p>Built a recommendation system that integrates graph neural network and tabular modeling approaches, including GraphConv, GCN, GAT, FT-Transformer, and TabNet. Improved collaborative filtering performance by combining <strong>GraphSage + SkipGNN</strong>, and explored instruction tuning with <strong>GPT-J</strong> and <strong>GPT-3</strong> for movie recommendation tasks to evaluate the potential of LLM-based recommenders.</p>
    <p><i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/dajiaohuang/rllm"> GitHub</a></p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">NLP</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><a href="https://github.com/CalciumArgon/CS3602_Natural_Language_Processing">Spoken Natural Language Understanding</a></p>
    <p><i>SJTU CS3602 NLP Final Project</i> | 2024.11 - 2024.12</p>
    <p>Extracted structured semantic triples (act, slot type, value) from noisy Chinese ASR transcripts for in-car navigation commands. Built a supervised <strong>BERT-RNN</strong> sequence-labeling pipeline with BIO tagging, POI-based data augmentation, and Jieba word-chunk fusion, achieving <strong>F1 82.75</strong>. Also evaluated zero-shot, few-shot, and chain-of-thought prompting with DeepSeek Chat as a generative semantic parsing baseline, focusing on output controllability and hallucination analysis.</p>
    <p><i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/CalciumArgon/CS3602_Natural_Language_Processing"> GitHub</a></p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">CS3324</div>
  <img src="images/cs3324.png" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><a href="https://github.com/dajiaohuang/Text-Aligned-SalGAN">Text Aligned SalGAN</a></p>
    <p><i>SJTU CS3324</i></p>
    <p>Designed an architecture combining <strong>CLIP</strong> and <strong>GAN</strong> to predict visual saliency maps from text cues. Trained on an eye-tracking dataset where subjects received text prompts during visual experiments.</p>
    <p><i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/dajiaohuang/Text-Aligned-SalGAN"> GitHub</a> | <a href="/blob/main/Report.pdf">PDF</a></p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">React</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><a href="https://github.com/dajiaohuang/evo">Evo — Paleontological Evolution Visualization</a></p>
    <p><i>Personal Project</i> | 2026</p>
    <p>Built an interactive web application for exploring the history of life on Earth through three synchronized views: a <strong>paleogeographic map</strong>, a <strong>phylogenetic tree of life</strong>, and a draggable <strong>geological timeline</strong>. The app renders continental reconstructions across Phanerozoic periods, temporal filtering on the tree of life, and 13,600+ fossil occurrence records from the Paleobiology Database. Implemented with <strong>React + TypeScript</strong>, Leaflet/react-leaflet, D3.js, custom SVG timeline interactions, and Zustand state management.</p>
    <p><i class="fas fa-fw fa-globe" aria-hidden="true"></i> <a href="https://dajiaohuang.github.io/evo/"> Live Demo</a> | <i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/dajiaohuang/evo"> GitHub</a></p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">React</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><a href="https://github.com/dajiaohuang/sg_rent">SG Rent — Singapore Rental Housing Recommendation System</a></p>
    <p><i>Personal Project</i> | 2026</p>
    <p>Developed a browser-based rental recommendation tool for Singapore housing search. Users enter up to five commuting destinations and receive ranked HDB and condo properties based on MRT commute time, price, and amenities. The system includes Dijkstra shortest-path routing across MRT/LRT lines, Leaflet map visualization with property and station overlays, weighted ranking, property filters, and a static dataset of 1,535 properties and 163 MRT/LRT stations. Built as a pure static frontend with <strong>React + TypeScript</strong>, requiring no backend at runtime.</p>
    <p><i class="fas fa-fw fa-globe" aria-hidden="true"></i> <a href="https://dajiaohuang.github.io/sg_rent/"> Live Demo</a> | <i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/dajiaohuang/sg_rent"> GitHub</a></p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">AgentSkill</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><a href="https://github.com/dajiaohuang/claude-code-skill">Claude Code Skill — OpenClaw AgentSkill</a></p>
    <p><i>Personal Tooling Project</i> | 2026</p>
    <p>Created an OpenClaw-compatible AgentSkill that routes coding tasks through the <strong>Claude Code CLI</strong>, covering implementation, refactoring, debugging, code review, and project scaffolding workflows. The skill defines Windows-first installation guidance, one-shot and interactive invocation patterns, fallback behavior, subagent parallelism for independent tasks, and prompt-writing conventions for reliable code execution.</p>
    <p><i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/dajiaohuang/claude-code-skill"> GitHub</a></p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">React</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><strong>Solar — Interactive Solar System Trajectory Visualizer</strong></p>
    <p><i>Personal Project</i> | 2025</p>
    <p>An interactive 3D solar system simulation built with <strong>React + Three.js + Vite + TypeScript</strong>. Features real-time planetary trajectory rendering in both 2D and 3D views, asteroid catalog browsing with chunked lazy loading, conjunction event detection, split-screen reference frame comparison, URL-based state persistence, and JSON/CSV data export. Supports NEO distance heatmaps and custom celestial body group management.</p>
    <p><i class="fas fa-fw fa-globe" aria-hidden="true"></i> <a href="https://dajiaohuang.github.io/solar/"> Live Demo</a></p>
  </div>
</div>

<span class='anchor' id='-experiences'></span>
# 📇 Experiences

<div class="paper-box">
  <div class="paper-box-text">
    <p><strong>AI Institute, School of Computer Science, Shanghai Jiao Tong University</strong></p>
    <p><i>Undergraduate Research Intern</i> | July 2023 - May 2024</p>
    <p>Supervisor: Prof. Xiaokang Yang, Prof. Yichao Yan</p>
    <p>Research Focus: Computer Vision, Embodied Intelligence, Human Motion Modeling</p>
    <ul>
      <li><strong>MoCap Data & Tooling:</strong> Managed motion-capture data collection and built processing, visualization, slicing, annotation, and calibration tools for the <strong>Inter-X</strong> and <strong>HIMO</strong> benchmarks. Resolved technical inconsistencies between Noitom PNS hand-motion-capture gloves and OptiTrack body MoCap systems through manual offset correction and calibration.</li>
      <li><strong>Model Training & Validation:</strong> Trained and evaluated diffusion-based text-to-motion and human-object interaction generation models for dataset validation, covering Inter-X text-to-motion pipelines and HIMO 2-object / 3-object HOI generation workflows. Monitored FID, R-Precision, Matching Score, and Diversity metrics with customized preprocessing pipelines.</li>
      <li><strong>Virtual Scene Development:</strong> Independently built an Unreal Engine C++/Blueprint + Blender virtual rendering pipeline and generated high-fidelity motion visualizations across 4 scenes × 6 viewpoints.</li>
      <li><strong>Research Contribution:</strong> Contributed to two papers published at <strong>CVPR 2024</strong> (Inter-X) and <strong>ECCV 2024</strong> (HIMO), and placed <strong>third</strong> in the CVPR 2024 Ego-Exo4D body pose challenge.</li>
    </ul>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-text">
    <p><strong>Digital Intelligence Institute, China Pacific Insurance (CPIC)</strong></p>
    <p><i>Algorithm Intern</i> | Feb 2025 - July 2025</p>
    <p>Supervisor: Hui Wang</p>
    <p>Research Focus: LLM Agent, Agentic RAG, Enterprise Knowledge Base, Database Troubleshooting Assistant</p>
    <ul>
      <li><strong>OceanBase Agentic RAG:</strong> Helped deliver an internal OceanBase documentation QA and troubleshooting workbench for database administrators and data-management users, built with FastAPI, Milvus dense/sparse vectors, scalar metadata filters, reranking, and DeepSeek's OpenAI-compatible API.</li>
      <li><strong>Agent Architecture:</strong> Implemented and integrated QAAgent and TroubleshootAgent capabilities including query routing, version resolution, specialized retrieval, multi-hop retrieval, lightweight doc graph expansion, evidence verification, clarifying questions, session memory, and observable Agent Trace metadata.</li>
      <li><strong>Safety & Evaluation:</strong> Designed a read-only diagnostic-tool contract for Phase 1 to avoid production SQL execution, parameter changes, or service restarts. Added agentic evaluation coverage beyond Recall/MRR, including version-resolution accuracy, citation coverage, troubleshooting acceptability, and high-risk suggestion checks; unit test suite covered 37 cases.</li>
    </ul>
  </div>
</div>

<span class='anchor' id='-honors-and-awards'></span>
# 🎖 Honors and Awards
- **Third Place**, CVPR 2024 Ego-EXO4D Challenge — Body Pose Track (2024)
- **First-Class Cyber-Security Scholarship**, Shanghai Jiao Tong University (2023)
- **Excellent League Member of SJTU** (2022)
- **Outstanding Freshman Award**, Shanghai Jiao Tong University (2021)

<span class='anchor' id='-educations'></span>
# 📖 Educations
- *2025.08 - Present*, **Master of Science, Data Science and Machine Learning**, National University of Singapore, Singapore.
  - Selected Courses: Machine Learning, Scalable Distributed Computing, Data Management and Retrieval
- *2021.09 - 2025.06*, **Bachelor of Engineering, Information Security (IEEE Honor Class)**, Shanghai Jiao Tong University, Shanghai, China. GPA: 85.5/100
  - Selected Courses: Algorithm Design and Analysis (A), C++ Program Design Practice (A+), Unreal Engine Program Design (A+), Artificial Intelligence Principles (A), Natural Language Processing (A)
- *2018.09 - 2021.06*, Shanghai High School, Shanghai, China.

<span class='anchor' id='-skills'></span>
# 🛠 Skills
- **Agent / LLM:** Agentic RAG, MCP / Tool Calling, Multi-Agent Workflow, OpenAI / Anthropic APIs, Prompt Engineering, LLM Evaluation, LoRA / QLoRA.
- **Engineering:** Python, FastAPI, PyTorch, Hugging Face Transformers, Milvus / Vector DB, Docker / Kubernetes, SQL, TypeScript / Node.js, Linux, Shell, Git.
- **Research & Systems:** Multimodal Understanding, Computer Vision, Human Motion Modeling, Recommendation Systems, Retrieval, Evidence Verification, Session Memory, Agent Trace.

<span class='anchor' id='-links'></span>
# 🔗 Links

- [Evo — Paleontological Evolution Visualization](https://dajiaohuang.github.io/evo/) — Explore fossils, continental reconstructions, phylogenetic relationships, and geological time through synchronized interactive views.
- [SG Rent — Singapore Rental Housing Recommendation System](https://dajiaohuang.github.io/sg_rent/) — Rank Singapore HDB and condo rentals by MRT commute time, price, amenities, and search filters.
- [Solar — Interactive Solar System Trajectory Visualizer](https://dajiaohuang.github.io/solar/) — A 3D solar system simulation with React, Three.js, and TypeScript. Explore planetary orbits, browse asteroid catalogs, and detect conjunction events.
- [Campus Agent and MCP Tool Ecosystem](https://github.com/dajiaohuang/sjtu-agent) — Local-first campus agent runtime with dynamic MCP tools, Skills, and community automation integrations.
