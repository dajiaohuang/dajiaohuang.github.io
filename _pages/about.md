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

I am currently a Master's student in Data Science and Machine Learning at [National University of Singapore (NUS)](https://www.nus.edu.sg/). I completed my undergraduate studies at [Shanghai Jiao Tong University (SJTU)](https://en.sjtu.edu.cn/), majoring in Information Security (IEEE Honor Class). My research interests span computer vision, natural language processing, and multimodal understanding, with a focus on human motion modeling, large language models, and their real-world applications.

<span class='anchor' id='-news'></span>
# 🔥 News

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
<a href="https://arxiv.org/pdf/2312.16051.pdf">[paper]</a> <a href="https://liangxuy.github.io/inter-x/">[project]</a></p>

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
<a href="https://arxiv.org/abs/2407.12371">[paper]</a> <a href="https://lvxintao.github.io/himo/">[project]</a></p>

<p>First large-scale full-body human-multi-object interaction benchmark (3.3K sequences, 4.08M frames, 53 object types). Proposes a dual-branch diffusion model with Mutual Interaction Module and autoregressive generation pipeline for fine-grained temporal control in HOI synthesis.</p>

  </div>
</div>

<span class='anchor' id='-projects'></span>
# 💻 Projects

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">CS4248</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><strong>MemeSense: Structured Textual Explanations for Meme Interpretation</strong></p>
    <p><i>NUS CS4248 — Multimodal Understanding</i> | 2026.03 - 2026.04</p>
    <p>Built a multi-stage pipeline (OCR → structured annotation → cultural context classification → RAG retrieval → caption generation) for interpretable meme understanding using <strong>LLaVA-1.5-7B + QLoRA</strong>. Designed a "selective knowledge injection" mechanism: the model decides when external cultural knowledge is needed rather than always retrieving. Key finding: selective context injection outperforms both "always retrieve" and "never retrieve" baselines. 83.3% of predicted captions judged better than original dataset captions in human evaluation.</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">DSA5106</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><strong>CoLLM: Collaborative LLM for Recommendation — Reproduction & Extension</strong></p>
    <p><i>NUS DSA5106 — Scalable Distributed Computing</i></p>
    <p>Reproduced the CoLLM framework (text-based recommendation + collaborative filtering injection) and migrated the original Vicuna/LLaMA codebase to <strong>Qwen2 + QLoRA</strong> (4-bit NF4, double quantization). Implemented a two-stage pipeline: Stage 1 trains the LLM on textual recommendation; Stage 2 freezes the LLM and trains a projection MLP to inject MF collaborative embeddings into the LLM's hidden space. Stage 2 improved AUC from 0.678 to <strong>0.691</strong> on MovieLens-1M OOD, demonstrating that collaborative signals add value even on top of strong LLM backbones. Training on NUS NSCC with single A100 40GB.</p>
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
    <p>Designed a <strong>level-wise Transformer</strong> network for 3D body pose estimation from egocentric/exocentric camera views, winning <strong>third place</strong> in the CVPR 2024 Ego-EXO4D Challenge. Dual-branch encoder: a shallow Transformer (3 layers) captures local temporal patterns; a deep Transformer (32 layers) models global temporal dependencies. Both branches regress 17 keypoint coordinates via MLP stabilizers with weighted fusion. Implemented full training pipeline with WandB tracking, sliding window inference, and coordinate transformation between global and Aria camera systems.</p>
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
    <p>Combined <strong>Textual Inversion</strong> (InST) with <strong>Singular Value Decomposition fine-tuning</strong> (SVDiff) on Stable Diffusion 1.4 for artistic style transfer. Only 3.7M trainable parameters (0.25% of full model). Achieved <strong>FID 125.1</strong>, outperforming InST (127.5), CycleGAN (178.3), and StyTR-2 (171.3) on the Nine-Colored Mural style transfer benchmark.</p>
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
    <p>Developed a recommendation system integrating multiple graph neural network algorithms (GraphConv, GCN, GAT, FT-Transformer, TabNet). Combined <strong>GraphSage + SkipGNN</strong> to improve collaborative filtering performance. Conducted instruction tuning on <strong>GPT-J</strong> and <strong>GPT-3</strong> for movie recommendation tasks, exploring LLM-based recommendation capabilities.</p>
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
    <p><strong>Spoken Natural Language Understanding</strong></p>
    <p><i>SJTU CS3602 NLP Final Project</i> | 2024.11 - 2024.12</p>
    <p>Two complementary approaches to Chinese spoken NLU for in-car navigation: (1) A <strong>BERT-RNN</strong> sequence labeling model for semantic slot filling, with chunk-level fusion (Jieba-based) and POI data augmentation — achieving <strong>F1 82.75</strong>; (2) Prompt engineering with <strong>DeepSeek Chat</strong> for zero-shot structured extraction. Combined improvements in data augmentation and chunk fusion outperformed encoder-only substitutions.</p>
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
    <p>Research Focus: Computer Vision, Embodied Intelligence</p>
    <ul>
      <li><strong>Data Collection & Processing:</strong> Coordinated motion capture data collection with 89+ participants for human interaction datasets. Developed visualization and data processing tools for human action sequences, supporting data slicing, inspection, and text annotation. Resolved technical inconsistencies between Noitom PNS hand-motion-capture gloves and OptiTrack body MoCap systems through manual offset correction and calibration.</li>
      <li><strong>Model Training & Validation:</strong> Trained and evaluated Human Motion Diffusion, Motion Latent Diffusion, and Text-to-Motion models on Inter-X and HIMO datasets. Monitored FID, R-Precision, Matching Score, and Diversity metrics. Managed multiple Docker containers for baseline models with customized data preprocessing pipelines.</li>
      <li><strong>Virtual Scene Development:</strong> Created and rendered high-fidelity virtual scenes in Unreal Engine. Independently designed a virtual rendering pipeline using Unreal C++/Blueprint and Blender for batch-rendered animations across 4 scenes × 6 viewpoints.</li>
      <li><strong>Research Contribution:</strong> Co-authored two conference papers published at <strong>CVPR 2024</strong> (Inter-X) and <strong>ECCV 2024</strong> (HIMO).</li>
    </ul>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-text">
    <p><strong>Digital Intelligence Institute, China Pacific Insurance (CPIC)</strong></p>
    <p><i>Algorithm Intern</i> | Feb 2025 - July 2025</p>
    <p>Supervisor: Hui Wang</p>
    <p>Research Focus: Natural Language Processing, Software Engineering</p>
    <ul>
      <li><strong>RAG System:</strong> Deployed LLMs and built a Retrieval-Augmented Generation system with OpenAI-style API, enabling enterprise document QA and knowledge retrieval.</li>
      <li><strong>Multi-agent Platform:</strong> Developed a multi-agent platform featuring specialized agents for DataQA (structured data queries), DocQA (document understanding), and Troubleshooting (system diagnostics and issue resolution).</li>
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

<span class='anchor' id='-links'></span>
# 🔗 Links

- [Solar — Interactive Solar System Trajectory Visualizer](https://dajiaohuang.github.io/solar/) — A 3D solar system simulation with React, Three.js, and TypeScript. Explore planetary orbits, browse asteroid catalogs, and detect conjunction events.
