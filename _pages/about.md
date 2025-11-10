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

I'm currently a Master's student at [National University of Singapore (NUS)](https://www.nus.edu.sg/), majoring in Data Science and Machine Learning. I completed my undergraduate studies at [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/), where I majored in Information Security (IEEE Honor Class).

# 🔥 News



# 📝 Publications 

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <img src="images/InterX.png" alt="sym" width="100%">
    </div>
  </div>
  <div class="paper-box-text">
    <p><strong>Inter-X: Towards Versatile Human-Human Interaction Analysis</strong></p>

*Liang Xu, Xintao Lv, Yichao Yan, Xin Jin, **Shuwen Wu**, Congsheng Xu, Yifan Liu, Yizhou Zhou, Fengyun Rao, Xingdong Sheng, Yunhui Liu, Wenjun Zeng, Xiaokang Yang.  
IEEE Conference on Computer Vision and Pattern Recognition (**CVPR**), 2024.*  
      [[paper]](https://arxiv.org/pdf/2312.16051.pdf) [[project]](https://liangxuy.github.io/inter-x/)

<p>         
Inter-X is a large-scale human-human interaction MoCap dataset with ~11K interaction sequences and more than 8.1M frames. The fine-grained textual descriptions, semantic action categories, interaction order, and relationship and personality annotations allow for 4 categories of downstream tasks.</p>

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

*Xintao Lv, Liang Xu, Yichao Yan, Xin Jin, Congsheng Xu, **Shuwen Wu**, Yizhou Zhou, Yifan Liu, Lincheng Li, Mengxiao Bi, Wenjun Zeng, Xiaokang Yang.  
European Conference on Computer Vision (**ECCV**), 2024.*  
      [[paper]](https://arxiv.org/abs/2407.12371) [[project]](https://lvxintao.github.io/himo/)

<p>         
HIMO is a large-scale MoCap dataset of full-body humans interacting with multiple objects, benchmarking two novel tasks of HOI synthesis conditioned on either the whole text prompt or the segmented text prompts as fine-grained timeline control.</p>

  </div>
</div>

# 💻 Undergraduate Projects

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">AI3603</div>
  <img src="images/ai3603.png" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><a href="https://github.com/dajiaohuang/SVD-InST">SVD-InST: Image Style Transfer</a></p>
    <p><i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/dajiaohuang/SVD-InST"> GitHub</a>｜<svg t="1697827825990" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7835" width="16" height="16"><path d="M645.071238 97.52381L828.952381 281.258667V414.47619h48.761905v390.095239h-48.761905v48.761904a73.142857 73.142857 0 0 1-73.142857 73.142857H268.190476a73.142857 73.142857 0 0 1-73.142857-73.142857v-48.761904H146.285714V414.47619h48.761905V170.666667a73.142857 73.142857 0 0 1 73.142857-73.142857h376.880762zM755.809524 804.571429H268.190476v48.761904h487.619048v-48.761904zM368.274286 520.94781H299.154286v174.445714h43.885714v-53.101714h10.971429a177.493333 177.493333 0 0 0 31.597714-2.852572 103.619048 103.619048 0 0 0 16.237714-4.827428c4.534857-2.048 8.777143-4.461714 12.726857-7.241143 7.168-5.412571 12.507429-12.141714 16.018286-20.187429 3.364571-8.484571 5.046857-17.334857 5.046857-26.550857a72.338286 72.338286 0 0 0-4.388571-23.698286 56.441905 56.441905 0 0 0-13.604572-19.968 62.025143 62.025143 0 0 0-23.917714-12.726857 116.784762 116.784762 0 0 0-25.453714-3.291428z m140.434285 0h-61.44v174.445714h61.44c6.875429-0.146286 13.750857-0.731429 20.626286-1.755429 6.144-1.024 12.141714-2.56 17.993143-4.608 5.266286-2.194286 10.313143-4.754286 15.140571-7.68 4.388571-3.218286 8.411429-6.875429 12.068572-10.971428 3.510857-4.388571 6.582857-9.069714 9.216-14.043429a110.689524 110.689524 0 0 0 6.144-16.896c2.194286-10.24 3.364571-20.626286 3.510857-31.158857a176.37181 176.37181 0 0 0-1.755429-21.284571 113.249524 113.249524 0 0 0-4.608-18.432 90.599619 90.599619 0 0 0-7.68-15.579429 78.214095 78.214095 0 0 0-10.532571-12.507429 77.994667 77.994667 0 0 0-13.604571-9.435428 93.42781 93.42781 0 0 0-16.457143-6.363429 139.702857 139.702857 0 0 0-30.061715-3.730285z m213.504 0h-116.736v174.445714h43.885715v-65.828572h63.414857v-34.011428h-63.414857v-39.497143h72.850285v-35.108571z m-206.482285 35.108571c4.973714 0.146286 9.654857 1.536 14.043428 4.169143 4.534857 3.072 8.265143 7.021714 11.190857 11.849143 3.218286 5.851429 5.485714 11.995429 6.802286 18.432 1.024 5.997714 1.609143 11.995429 1.755429 17.993143-0.146286 6.144-0.731429 12.214857-1.755429 18.212571a62.22019 62.22019 0 0 1-6.802286 18.212571c-2.925714 4.681143-6.656 8.557714-11.190857 11.629715a28.038095 28.038095 0 0 1-14.043428 3.730285h-24.576v-104.228571h24.576z m-151.625143 0c3.949714 0.146286 7.826286 0.877714 11.629714 2.194286 3.364571 1.316571 6.363429 3.218286 8.996572 5.705143 4.681143 5.12 7.021714 11.117714 7.021714 17.993142 0 7.314286-2.706286 13.385143-8.118857 18.212572a28.525714 28.525714 0 0 1-9.874286 5.485714 47.88419 47.88419 0 0 1-12.068571 1.536h-18.651429v-51.126857h21.065143z m217.307428-385.414095L268.190476 170.666667v243.809523h487.619048v-49.956571h-174.372572L581.412571 170.666667z m73.142858 39.740952v80.993524h81.042285l-81.042285-80.993524z" p-id="7836"></path></svg> <a href="/blob/main/Report.pdf">PDF</a></p>
    <p>In this project, we build our SVD-InST model for image style transfer on Stable Diffusion 1.4 model. By introducing the SVDiff and text inversion finetuning technique, we achieve decent result on the given dataset.</p>
  </div>
</div>


<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">CS3324</div>
  <img src="images/cs3324.png" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><a href="https://github.com/dajiaohuang/Text-Aligned-SalGAN">Text Aligned SalGAN
</a></p>
    <p><i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/dajiaohuang/Text-Aligned-SalGAN"> GitHub</a>｜<svg t="1697827825990" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7835" width="16" height="16"><path d="M645.071238 97.52381L828.952381 281.258667V414.47619h48.761905v390.095239h-48.761905v48.761904a73.142857 73.142857 0 0 1-73.142857 73.142857H268.190476a73.142857 73.142857 0 0 1-73.142857-73.142857v-48.761904H146.285714V414.47619h48.761905V170.666667a73.142857 73.142857 0 0 1 73.142857-73.142857h376.880762zM755.809524 804.571429H268.190476v48.761904h487.619048v-48.761904zM368.274286 520.94781H299.154286v174.445714h43.885714v-53.101714h10.971429a177.493333 177.493333 0 0 0 31.597714-2.852572 103.619048 103.619048 0 0 0 16.237714-4.827428c4.534857-2.048 8.777143-4.461714 12.726857-7.241143 7.168-5.412571 12.507429-12.141714 16.018286-20.187429 3.364571-8.484571 5.046857-17.334857 5.046857-26.550857a72.338286 72.338286 0 0 0-4.388571-23.698286 56.441905 56.441905 0 0 0-13.604572-19.968 62.025143 62.025143 0 0 0-23.917714-12.726857 116.784762 116.784762 0 0 0-25.453714-3.291428z m140.434285 0h-61.44v174.445714h61.44c6.875429-0.146286 13.750857-0.731429 20.626286-1.755429 6.144-1.024 12.141714-2.56 17.993143-4.608 5.266286-2.194286 10.313143-4.754286 15.140571-7.68 4.388571-3.218286 8.411429-6.875429 12.068572-10.971428 3.510857-4.388571 6.582857-9.069714 9.216-14.043429a110.689524 110.689524 0 0 0 6.144-16.896c2.194286-10.24 3.364571-20.626286 3.510857-31.158857a176.37181 176.37181 0 0 0-1.755429-21.284571 113.249524 113.249524 0 0 0-4.608-18.432 90.599619 90.599619 0 0 0-7.68-15.579429 78.214095 78.214095 0 0 0-10.532571-12.507429 77.994667 77.994667 0 0 0-13.604571-9.435428 93.42781 93.42781 0 0 0-16.457143-6.363429 139.702857 139.702857 0 0 0-30.061715-3.730285z m213.504 0h-116.736v174.445714h43.885715v-65.828572h63.414857v-34.011428h-63.414857v-39.497143h72.850285v-35.108571z m-206.482285 35.108571c4.973714 0.146286 9.654857 1.536 14.043428 4.169143 4.534857 3.072 8.265143 7.021714 11.190857 11.849143 3.218286 5.851429 5.485714 11.995429 6.802286 18.432 1.024 5.997714 1.609143 11.995429 1.755429 17.993143-0.146286 6.144-0.731429 12.214857-1.755429 18.212571a62.22019 62.22019 0 0 1-6.802286 18.212571c-2.925714 4.681143-6.656 8.557714-11.190857 11.629715a28.038095 28.038095 0 0 1-14.043428 3.730285h-24.576v-104.228571h24.576z m-151.625143 0c3.949714 0.146286 7.826286 0.877714 11.629714 2.194286 3.364571 1.316571 6.363429 3.218286 8.996572 5.705143 4.681143 5.12 7.021714 11.117714 7.021714 17.993142 0 7.314286-2.706286 13.385143-8.118857 18.212572a28.525714 28.525714 0 0 1-9.874286 5.485714 47.88419 47.88419 0 0 1-12.068571 1.536h-18.651429v-51.126857h21.065143z m217.307428-385.414095L268.190476 170.666667v243.809523h487.619048v-49.956571h-174.372572L581.412571 170.666667z m73.142858 39.740952v80.993524h81.042285l-81.042285-80.993524z" p-id="7836"></path></svg> <a href="/blob/main/Report.pdf">PDF</a></p>
    <p>In this project, I tried to invent an arch combining CLIP and GAN to predict visual saliency. The model is trained on a dataset of eye tracking data where subjects are provided with text cues during the experiments. </p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">NIS4301</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p><a href="https://github.com/dajiaohuang/rllm">Recommendation System & LLM Instruction Tuning
</a></p>
    <p><i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/dajiaohuang/rllm"> GitHub</a></p>
    <p>Developed a recommendation system integrating various graph neural network algorithms (GraphConv, GCN, GAT, FT-Transformer, TabNet). Combined GraphSage and SkipGNN to improve existing algorithms. Conducted instruction tuning on GPT-J and GPT-3 models for movie recommendation tasks. </p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">NLP Course</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p>Spoken Natural Language Understanding</p>
    <p>Conducted two complementary studies on Spoken Language Understanding (SLU): (1) a traditional deep learning-based semantic slot filling system and (2) a generative LLM-based information extraction framework. Implemented a BERT-RNN model for Chinese semantic slot filling, integrating data augmentation and noise filtering. Designed and tested multiple prompt engineering strategies for DeepSeek Chat, successfully enabling zero-shot structured extraction of semantic triplets.</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">CVPR 2024 Workshop</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p>3D Human Body Motion Estimation</p>
    <p><strong>🏆 Third Place on CVPR 2024 Ego-EXO4D Challenge</strong></p>
    <p>Actively participated in the Ego-EXO4D Challenge at the CVPR 2024 workshop, where our team secured third place among a competitive field of international participants. Developed a state-of-the-art 3D body motion estimation model leveraging the Coarse-to-Fine Vision Transformer (CF-ViT).</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
  <div>
  <div class="badge">Unreal Engine</div>
  <img src="" width="100%"></div>
  </div>
  <div class="paper-box-text">
    <p>Empty Star - SandBox RPG</p>
    <p>A SandBox RPG developed with Unreal Engine, where players take on the role of an explorer from an underground civilization, trying to traverse the Earth's crust and reach the surface.</p>
  </div>
</div>


# 📇 Experiences

<div class="paper-box">
  <div class="paper-box-text">
    <p><strong>AI Institute, School of Computer Science, Shanghai Jiao Tong University</strong></p>
    <p><i>Undergraduate Research Intern</i> | July 2023 - May 2024</p>
    <p>Supervisor: Prof. Xiaokang Yang, Prof. Yichao Yan</p>
    <p>Research Focus: Computer Vision, Embodied Intelligence</p>
    <ul>
      <li><strong>Data Collection & Processing:</strong> Managed data collection and participant coordination, developing visualized data processing tools for human action sequences with features for data slicing and text annotation. Resolved technical inconsistencies between hand-motion-capture gloves and Body MoCap system through manual offset correction.</li>
      <li><strong>Model Training & Validation:</strong> Validated dataset reliability by training and testing advanced models (motion diffusion models, motion latent diffusion, text2motion). Managed multiple Docker containers for baseline models with tailored data preprocessing.</li>
      <li><strong>Virtual Scene Development:</strong> Created and rendered multiple virtual scenes in Unreal Engine. Independently designed a virtual rendering pipeline using Unreal C++/Blueprint and Blender for batch-rendered animations.</li>
      <li><strong>Research Contribution:</strong> Participated in and published two conference papers presented at CVPR 2024 and ECCV 2024.</li>
    </ul>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-text">
    <p><strong>Digital Intelligence Institute, China Pacific Insurance Co</strong></p>
    <p><i>Algorithm Intern</i> | Feb 2025 - July 2025</p>
    <p>Supervisor: Hui Wang</p>
    <p>Research Focus: Natural Language Processing, Software Engineering</p>
    <ul>
      <li><strong>RAG Set-up:</strong> Helped deploy LLMs and set up a RAG system with OpenAI style API.</li>
      <li><strong>Multi-agent Platform Development:</strong> Developed multi-agent platform with agents for DataQA, DocQA, and Troubleshoot helper.</li>
    </ul>
  </div>
</div>



# 🎖 Honors and Awards
- **Third Place**, CVPR 2024 Ego-EXO4D Challenge (2024)
- **First-Class Cyber-Security Scholarship**, Shanghai Jiao Tong University (2023)
- **Excellent League Member of SJTU** (2022)
- **Outstanding Freshman Award**, Shanghai Jiao Tong University (2021)

# 📖 Educations
- *2025.08 - Current*, **Master of Science, Data Science and Machine Learning**, National University of Singapore, Singapore.
  - Selected Courses: Machine Learning, Scalable Distributed Computing, Data Management and Retrieval
- *2021.09 - 2025.06*, **Bachelor of Engineering, Information Security (IEEE Honor Class)**, Shanghai Jiao Tong University, Shanghai, China. GPA: 85.5/100
  - Selected Courses: Algorithm Design and Analysis (A), C++ Program Design Practice (A+), Unreal Engine Program Design (A+), Artificial Intelligence Principles (A), Natural Language Processing (A)
- *2018.09 - 2021.06*, Shanghai High School, Shanghai, China.

<!-- # 💬 Invited Talks

- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

