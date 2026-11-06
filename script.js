const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const scrollProgress = document.querySelector(".scroll-progress span");

if (scrollProgress) {
  let progressFrame = 0;
  const updateScrollProgress = () => {
    if (progressFrame) {
      return;
    }

    progressFrame = window.requestAnimationFrame(() => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      scrollProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
      progressFrame = 0;
    });
  };

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress);
  updateScrollProgress();
}

const heroArt = document.querySelector(".hero-art");
if (
  heroArt &&
  window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches
) {
  heroArt.addEventListener("pointermove", (event) => {
    const bounds = heroArt.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    heroArt.style.setProperty("--pointer-x", `${x}%`);
    heroArt.style.setProperty("--pointer-y", `${y}%`);
  });

  heroArt.addEventListener("pointerleave", () => {
    heroArt.style.removeProperty("--pointer-x");
    heroArt.style.removeProperty("--pointer-y");
  });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      siteNav.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("#current-year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const projects = [
  {
    id: "oralvision",
    title: "OralVision — Oral Disease Screening",
    category: "MEDICAL AI / COMPUTER VISION",
    categories: ["vision", "deep-learning"],
    visual: "vision",
    monogram: "OV",
    accent: "#d3f36b",
    description:
      "A research-driven oral healthcare project for multi-class disease image classification and symptom-based screening workflows. Intended to support, not replace, professional medical assessment.",
    highlights: ["Oral image classification", "Attention-enhanced features", "Screening workflow"],
    stack: "Python · TensorFlow · EfficientNet-B0 · Coordinate Attention · YOLO · U-Net · FastAPI · Flutter · Supabase",
    links: [
      {
        label: "Research code",
        url: "https://github.com/moizpirzada1/OralVision-A-Deep-Learning-Framework-for-Multi-Class-Oral-Disease-Classification",
      },
      {
        label: "Related repository",
        url: "https://github.com/moizpirzada1/oral-vision",
      },
    ],
    featured: true,
  },
  {
    id: "sid",
    title: "SID — Smart Intelligent Developer",
    category: "AGENTIC AI / MULTI-AGENT SYSTEMS",
    categories: ["agentic-ai"],
    visual: "network",
    monogram: "SID",
    accent: "#74d7ce",
    description:
      "A multi-agent software agency architecture designed to coordinate specialized AI agents across software-development and business workflows.",
    highlights: ["Central orchestration", "Structured agent communication", "Workflow automation"],
    stack: "Python · FastAPI · Next.js · React · TypeScript · Tailwind CSS · Supabase · Gemini · Groq · Ollama",
    sourceNote: "Project details previously shared; no public GitHub repository was found.",
  },
  {
    id: "oralvision-vit",
    title: "Self-Supervised Vision Transformer for Oral Disease Recognition",
    category: "COMPUTER VISION / RESEARCH",
    categories: ["vision", "deep-learning"],
    visual: "neural",
    monogram: "ViT",
    accent: "#9bb6ff",
    description:
      "A research exploration of self-supervised Vision Transformer methods for oral disease recognition.",
    highlights: ["Vision Transformer", "Self-supervised learning", "Oral image recognition"],
    stack: "Jupyter Notebook · Computer vision · Deep learning",
    repo: "Self-supervised-vision-transformer-for-oral-disease-recognition",
  },
  {
    id: "housing-classification",
    title: "Housing Price Classifier",
    category: "MACHINE LEARNING / CLASSIFICATION",
    categories: ["machine-learning"],
    visual: "data",
    monogram: "HOME",
    accent: "#f0bf79",
    description:
      "Classifies California districts into high- or low-median-house-value groups using a logistic-regression model, with Flask and Gradio interfaces.",
    highlights: ["Binary classification", "Housing features", "Flask and Gradio interfaces"],
    stack: "Python · Scikit-learn · Logistic Regression · Flask · Gradio",
    repo: "housing_classification",
  },
  {
    id: "freight-rate",
    title: "Freight Rate Assessment",
    category: "MACHINE LEARNING / REGRESSION",
    categories: ["machine-learning"],
    visual: "chart",
    monogram: "RATE",
    accent: "#f3a276",
    description:
      "Predicts freight load rates with a LightGBM model and a time-aware validation workflow, including shared train-and-inference feature engineering.",
    highlights: ["LightGBM regression", "Temporal validation", "Feature engineering"],
    stack: "Python · LightGBM · Pandas · NumPy",
    repo: "freight-rate-assessment",
  },
  {
    id: "resume-matching",
    title: "Resume Matching AI",
    category: "NLP / MACHINE LEARNING",
    categories: ["nlp", "machine-learning"],
    visual: "document",
    monogram: "CV",
    accent: "#92c6ff",
    description:
      "Compares multiple PDF resumes with a job description, scores similarity, identifies shared keywords, and ranks candidates for review.",
    highlights: ["Resume PDF extraction", "Candidate ranking", "CSV export"],
    stack: "Python · Streamlit · TF-IDF · Cosine similarity · NLP",
    repo: "Resume-Matching-AI",
    demo: "https://resume-matching-ai-rxkhfntapfpqvtwhzwtd5n.streamlit.app/",
  },
  {
    id: "cicids2017",
    title: "CICIDS2017 Intrusion Detection",
    category: "MACHINE LEARNING / CYBERSECURITY",
    categories: ["machine-learning"],
    visual: "network",
    monogram: "IDS",
    accent: "#f08c9b",
    description:
      "A Random Forest classifier for distinguishing benign from attack traffic using the CICIDS2017 dataset, with single-input and CSV prediction workflows.",
    highlights: ["Benign vs. attack classification", "CSV predictions", "Preprocessing pipeline"],
    stack: "Python · Scikit-learn · Random Forest · Pandas · NumPy · Streamlit",
    repo: "cicids2017-intrusion-detection-system",
    demo: "https://cicids2017-intrusion-detection-system-ctalhe52qzdvpdcw6uxzzo.streamlit.app/",
  },
  {
    id: "multimodal-housing",
    title: "Multimodal Housing Price Prediction",
    category: "DEEP LEARNING / MULTIMODAL",
    categories: ["vision", "deep-learning", "machine-learning"],
    visual: "multimodal",
    monogram: "MM",
    accent: "#d5a5ff",
    description:
      "Combines image features from a CNN with structured housing data processed by an MLP, then fuses the representations for price prediction.",
    highlights: ["Image + tabular inputs", "CNN / MLP fusion", "Interactive app"],
    stack: "Python · TensorFlow · Keras · CNN · MLP · Streamlit",
    repo: "developershub_Multimodal-ML-Housing-Price-Prediction-Using-Images-Tabular-Data-",
    demo: "https://9vjehvtrybapb2csgugfuj.streamlit.app/",
  },
  {
    id: "news-bert",
    title: "News Topic Classifier Using BERT",
    category: "NLP / DEEP LEARNING",
    categories: ["nlp", "deep-learning", "machine-learning"],
    visual: "language",
    monogram: "BERT",
    accent: "#76d7bd",
    description:
      "Classifies news headlines or articles into world, sports, business, and science/technology topics, showing confidence and class probabilities.",
    highlights: ["Transformer text classification", "Four news topics", "Prediction confidence"],
    stack: "Python · BERT · Transformers · Streamlit",
    repo: "developershub_News-Topic-Classifier-Using-BERT",
    demo: "https://news-topic-classifier-using-bert-tchpc3qxlxyx9rgno9mtfn.streamlit.app/",
  },
  {
    id: "telco-churn",
    title: "Telco Customer Churn Prediction",
    category: "MACHINE LEARNING / END-TO-END PIPELINE",
    categories: ["machine-learning"],
    visual: "workflow",
    monogram: "ML",
    accent: "#9ad495",
    description:
      "An end-to-end churn classification workflow with preprocessing pipelines, model tuning, single and batch predictions, and prediction history.",
    highlights: ["Logistic Regression / Random Forest", "GridSearchCV", "Batch predictions"],
    stack: "Python · Scikit-learn Pipelines · Streamlit · SQLite · Plotly",
    repo: "developershub_End-to-End-ML-Pipeline-with-sk-learn-Pipeline-API",
    demo: "https://zeomfecj2exjurj2xnindg.streamlit.app/",
  },
  {
    id: "stock-price",
    title: "Short-Term Stock Price Prediction",
    category: "MACHINE LEARNING / TIME SERIES",
    categories: ["machine-learning"],
    visual: "chart",
    monogram: "TS",
    accent: "#88b8ff",
    description:
      "Uses current-day market features to estimate the next trading day’s closing price, then compares predictions with observed prices.",
    highlights: ["Next-day close prediction", "Linear Regression / Random Forest", "MAE and RMSE evaluation"],
    stack: "Python · yfinance · Scikit-learn · Pandas · Matplotlib",
    repo: "Predict-Future-Stock-Prices-Short-Term-",
  },
  {
    id: "house-price",
    title: "House Price Prediction",
    category: "MACHINE LEARNING / REGRESSION",
    categories: ["machine-learning"],
    visual: "data",
    monogram: "HP",
    accent: "#edc66d",
    description:
      "A housing-price regression project using property and location features, with data preprocessing and actual-versus-predicted analysis.",
    highlights: ["Categorical feature encoding", "Linear Regression", "Gradient Boosting"],
    stack: "Python · Pandas · NumPy · Scikit-learn · Matplotlib · Seaborn",
    repo: "House-Price-Prediction",
  },
  {
    id: "health-chatbot",
    title: "General Health Query Chatbot",
    category: "NLP / GENERATIVE AI",
    categories: ["nlp"],
    visual: "health",
    monogram: "Q&A",
    accent: "#7dd7c0",
    description:
      "A prompt-engineering-based chatbot for general health questions. Its instructions avoid diagnosis and medication guidance and encourage consulting a clinician for serious concerns.",
    highlights: ["General health information", "Safety-oriented prompts", "Conversation interface"],
    stack: "Python · GPT-3.5 API · Prompt engineering · Jupyter Notebook",
    repo: "General-Health-Query-Chatbot-Prompt-Engineering-Based-",
  },
  {
    id: "heart-disease",
    title: "Heart Disease Prediction",
    category: "MACHINE LEARNING / HEALTH DATA",
    categories: ["machine-learning"],
    visual: "health",
    monogram: "HD",
    accent: "#f18f9b",
    description:
      "An educational classification project using logistic regression and structured clinical data, with preprocessing and model evaluation.",
    highlights: ["Logistic Regression", "Feature scaling", "Classification evaluation"],
    stack: "Python · Pandas · Scikit-learn · Logistic Regression",
    repo: "Heart-Disease-Prediction",
  },
  {
    id: "iris-eda",
    title: "Iris Dataset Exploration",
    category: "DATA EXPLORATION / VISUALIZATION",
    categories: ["other"],
    visual: "dataset",
    monogram: "EDA",
    accent: "#b1d974",
    description:
      "Exploratory analysis of the Iris dataset using descriptive statistics, scatter plots, histograms, and box plots. No machine-learning model is applied.",
    highlights: ["Feature distributions", "Species comparisons", "Outlier visualization"],
    stack: "Python · Scikit-learn dataset · Jupyter · Matplotlib / Seaborn",
    repo: "Exploring-and-Visualizing-a-Simple-Dataset",
  },
  {
    id: "shop-genie",
    title: "ShopGenie — Smart Shopping Assistant",
    category: "AI APPLICATION / NLP",
    categories: ["nlp", "machine-learning"],
    visual: "commerce",
    monogram: "SG",
    accent: "#f2bb75",
    description:
      "An AI shopping assistant project combining receipt OCR, product text analysis, recommendations, voice interaction, and expense visualizations.",
    highlights: ["Receipt OCR", "Product analysis", "Voice assistant"],
    stack: "Python · EasyOCR · spaCy · NLTK · Whisper · Streamlit · FAISS · LangChain",
    repo: "shop-genie",
  },
  {
    id: "handwritten-character",
    title: "Handwritten Character Recognition",
    category: "COMPUTER VISION / DEEP LEARNING",
    categories: ["vision", "deep-learning"],
    visual: "vision",
    monogram: "Aa",
    accent: "#c5a5ff",
    description:
      "A notebook-based handwritten character recognition project with a saved model artifact.",
    highlights: ["Character image input", "Neural model", "Saved model artifact"],
    stack: "Python · Jupyter Notebook · Deep learning",
    repo: "CodeAlpha_handwritten-characther-recognization",
  },
  {
    id: "credit-score",
    title: "Credit Score Modeling",
    category: "MACHINE LEARNING / CLASSIFICATION",
    categories: ["machine-learning"],
    visual: "data",
    monogram: "CS",
    accent: "#82d0cc",
    description:
      "A credit-score modeling project with trained decision-tree and logistic-regression artifacts.",
    highlights: ["Decision Tree", "Logistic Regression", "Model artifacts"],
    stack: "Python · Scikit-learn · Jupyter Notebook",
    repo: "CodeAlpha_Credit-Score-Modeling",
  },
  {
    id: "medical-disease",
    title: "Disease Prediction from Medical Data",
    category: "MACHINE LEARNING / HEALTH DATA",
    categories: ["machine-learning"],
    visual: "health",
    monogram: "ML",
    accent: "#92b9ec",
    description:
      "A medical-data classification project comparing several model families. This is an experimental ML project, not a clinical diagnostic tool.",
    highlights: ["Model comparison", "Structured-data classification", "Evaluation workflow"],
    stack: "Python · Scikit-learn · Random Forest · SVM · XGBoost",
    repo: "CodeAplha_Disease-Prediction-from-Medical-Data",
  },
  {
    id: "ann-coursework",
    title: "Artificial Neural Network Experiments",
    category: "DEEP LEARNING / COURSEWORK",
    categories: ["deep-learning", "machine-learning"],
    visual: "neural",
    monogram: "ANN",
    accent: "#df9de0",
    description:
      "Coursework experiments with neural-network approaches including Perceptron, MLP, RBF, SOM, and BAM models.",
    highlights: ["Perceptron / MLP", "RBF network", "SOM / BAM"],
    stack: "Python · Jupyter Notebook · Neural networks",
    repo: "ann_as4",
  },
  {
    id: "knn-naive-bayes",
    title: "KNN & Naive Bayes Prediction",
    category: "MACHINE LEARNING / COURSEWORK",
    categories: ["machine-learning"],
    visual: "dataset",
    monogram: "KNN",
    accent: "#ebb779",
    description:
      "A machine-learning course project exploring predictions with k-nearest neighbors and Naive Bayes.",
    highlights: ["K-nearest neighbors", "Naive Bayes", "Classification"],
    stack: "Python · Jupyter Notebook · Scikit-learn",
    repo: "ml-pinal-project",
  },
];

const githubRepositoryCount = projects.reduce((total, project) => {
  const projectLinks = project.links || [];
  return (
    total +
    Number(Boolean(project.repo)) +
    projectLinks.filter((link) => link.url.startsWith("https://github.com/moizpirzada1/")).length
  );
}, 0);

const projectGrid = document.querySelector("#project-grid");
const projectCount = document.querySelector("#project-count");
const filterButtons = document.querySelectorAll(".filter-button");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function projectThumbnail(project) {
  const accent = /^#[\da-f]{6}$/i.test(project.accent) ? project.accent : "#d3f36b";
  const motif = {
    vision:
      `<rect x="131" y="46" width="82" height="82" rx="8" fill="none" stroke="${accent}" stroke-width="2"/><circle cx="172" cy="87" r="22" fill="none" stroke="${accent}" stroke-width="2"/><path d="M172 52v14m0 42v14m-35-35h14m42 0h14" stroke="${accent}" stroke-width="2"/>`,
    neural:
      `<path d="m138 54 46 28-46 28 46-28 41-29m-41 29 41 28" fill="none" stroke="${accent}" stroke-width="2"/><g fill="#151713" stroke="${accent}" stroke-width="2"><circle cx="138" cy="54" r="7"/><circle cx="138" cy="110" r="7"/><circle cx="184" cy="82" r="9"/><circle cx="225" cy="53" r="7"/><circle cx="225" cy="111" r="7"/></g>`,
    network:
      `<path d="m139 56 39 27 43-31m-43 31-37 34m37-34 46 35" fill="none" stroke="${accent}" stroke-width="2"/><g fill="${accent}"><circle cx="139" cy="56" r="6"/><circle cx="178" cy="83" r="8"/><circle cx="221" cy="52" r="6"/><circle cx="141" cy="117" r="6"/><circle cx="224" cy="118" r="6"/></g>`,
    data:
      `<path d="M133 120h96M144 120V91h17v29m9 0V68h17v52m9 0V49h17v71" fill="none" stroke="${accent}" stroke-width="3"/><circle cx="144" cy="85" r="4" fill="${accent}"/><circle cx="178" cy="62" r="4" fill="${accent}"/>`,
    chart:
      `<path d="M132 118h98M139 113V48m5 56 24-19 18 7 26-35 16 6" fill="none" stroke="${accent}" stroke-width="2.5"/><g fill="${accent}"><circle cx="144" cy="104" r="4"/><circle cx="168" cy="85" r="4"/><circle cx="186" cy="92" r="4"/><circle cx="212" cy="57" r="4"/><circle cx="228" cy="63" r="4"/></g>`,
    document:
      `<path d="M149 45h43l22 22v66h-65z" fill="#171a16" stroke="${accent}" stroke-width="2"/><path d="M192 45v23h22m-48 18h39m-39 14h34m-34 14h27" fill="none" stroke="${accent}" stroke-width="2"/>`,
    language:
      `<path d="M138 51h67a9 9 0 0 1 9 9v43a9 9 0 0 1-9 9h-29l-20 17v-17h-18a9 9 0 0 1-9-9V60a9 9 0 0 1 9-9z" fill="#171a16" stroke="${accent}" stroke-width="2"/><path d="M153 72h46m-46 17h36" stroke="${accent}" stroke-width="2"/>`,
    multimodal:
      `<rect x="132" y="52" width="42" height="53" rx="5" fill="#171a16" stroke="${accent}" stroke-width="2"/><path d="M139 96 151 81l8 9 6-7 9 13" fill="none" stroke="${accent}" stroke-width="2"/><path d="M190 60h44m-44 15h34m-34 15h39m-39 15h26" stroke="${accent}" stroke-width="3"/><path d="m176 79 11 0" stroke="${accent}" stroke-width="2" stroke-dasharray="3 3"/>`,
    workflow:
      `<path d="M141 83h28m20 0h27M179 83V55" stroke="${accent}" stroke-width="2"/><g fill="#171a16" stroke="${accent}" stroke-width="2"><rect x="129" y="70" width="20" height="26" rx="5"/><rect x="169" y="41" width="20" height="26" rx="5"/><rect x="189" y="70" width="20" height="26" rx="5"/><rect x="216" y="70" width="20" height="26" rx="5"/></g>`,
    health:
      `<path d="M129 87h24l10-20 15 42 13-29 10 14h29" fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="180" cy="87" r="47" fill="none" stroke="${accent}" stroke-opacity=".24"/>`,
    dataset:
      `<g fill="none" stroke="${accent}" stroke-width="2"><rect x="137" y="51" width="22" height="22" rx="3"/><rect x="167" y="51" width="22" height="22" rx="3"/><rect x="197" y="51" width="22" height="22" rx="3"/><rect x="137" y="81" width="22" height="22" rx="3"/><rect x="167" y="81" width="22" height="22" rx="3"/><rect x="197" y="81" width="22" height="22" rx="3"/><path d="M137 116h82"/></g>`,
    commerce:
      `<path d="M148 48h49l16 16v66h-65z" fill="#171a16" stroke="${accent}" stroke-width="2"/><path d="M197 48v18h16m-51 17h34m-34 13h34m-34 13h22" stroke="${accent}" stroke-width="2"/><path d="M137 71h-9m-1 0v46m1 0h9" fill="none" stroke="${accent}" stroke-width="2"/>`,
  }[project.visual] || "";
  const title = escapeHtml(project.title);
  const monogram = escapeHtml(project.monogram);
  const id = escapeHtml(project.id);

  return `<svg class="project-thumbnail" viewBox="0 0 360 170" role="img" aria-label="${title} thumbnail" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="thumb-${id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${accent}" stop-opacity=".16"/><stop offset="1" stop-color="#11120f" stop-opacity="0"/></linearGradient></defs><rect width="360" height="170" fill="#141612"/><rect width="360" height="170" fill="url(#thumb-${id})"/><path d="M0 34h360M0 136h360M36 0v170M324 0v170" stroke="#f3f1e9" stroke-opacity=".055"/><circle cx="181" cy="85" r="65" fill="none" stroke="${accent}" stroke-opacity=".12"/><circle cx="181" cy="85" r="48" fill="none" stroke="${accent}" stroke-opacity=".1"/>${motif}<text x="26" y="148" fill="#777d70" font-family="monospace" font-size="9" letter-spacing="2">${escapeHtml(project.category.split(" / ")[0])}</text><text x="334" y="150" fill="${accent}" font-family="monospace" font-size="9" text-anchor="end">${monogram}</text></svg>`;
}

function externalLink(label, url, className = "project-link") {
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch {
    return "";
  }
  if (parsedUrl.protocol !== "https:") {
    return "";
  }
  return `<a class="${className}" href="${escapeHtml(parsedUrl.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;
}

function projectCard(project) {
  const links = (project.links || []).map((link) => externalLink(link.label, link.url)).join("");
  const repositoryLink = project.repo
    ? externalLink(
        "View on GitHub",
        `https://github.com/moizpirzada1/${project.repo}`,
      )
    : "";
  const demoLink = project.demo ? externalLink("Live demo", project.demo) : "";
  const sourceNote = project.sourceNote
    ? `<span class="project-source-note">${escapeHtml(project.sourceNote)}</span>`
    : "";
  const chips = project.highlights
    .map((highlight) => `<span>${escapeHtml(highlight)}</span>`)
    .join("");

  return `<article class="project-card${project.featured ? " project-card-featured" : ""}" data-reveal data-categories="${project.categories.map(escapeHtml).join(" ")}"><div class="project-visual">${projectThumbnail(project)}</div><div class="project-body"><span class="project-category">${escapeHtml(project.category)}</span><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p><div class="project-highlights">${chips}</div><p class="project-stack"><strong>STACK</strong> ${escapeHtml(project.stack)}</p><div class="project-links">${repositoryLink}${links}${demoLink}${sourceNote}</div></div></article>`;
}

if (projectGrid) {
  projectGrid.innerHTML = projects.map(projectCard).join("");
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(
  ".section-index, .intro-content, .focus-heading, .focus-card, .work-heading, .research-card, .experience-card, .skill-group, .education-card, .closing-grid",
);

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  let observerHasReported = false;
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      observerHasReported = true;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
  );

  revealElements.forEach((element, index) => {
    element.setAttribute("data-reveal", "");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    revealObserver.observe(element);
  });

  document.querySelectorAll("#project-grid .project-card").forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${(index % 6) * 45}ms`);
    revealObserver.observe(element);
  });
  document.documentElement.classList.add("has-motion");

  window.setTimeout(() => {
    if (!observerHasReported) {
      document.querySelectorAll("[data-reveal]").forEach((element) => {
        element.classList.add("is-visible");
      });
      revealObserver.disconnect();
    }
  }, 2000);
}

function updateProjectCount(filter = "all") {
  const visibleCount = projects.filter(
    (project) => filter === "all" || project.categories.includes(filter),
  ).length;
  if (projectCount) {
    projectCount.textContent = `Showing ${visibleCount} of ${projects.length} projects · ${githubRepositoryCount} public GitHub repositories`;
  }
}

updateProjectCount();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter") || "all";

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    projectGrid?.querySelectorAll(".project-card").forEach((card) => {
      const categories = card.getAttribute("data-categories")?.split(" ") ?? [];
      card.hidden = filter !== "all" && !categories.includes(filter);
    });
    updateProjectCount(filter);
  });
});
