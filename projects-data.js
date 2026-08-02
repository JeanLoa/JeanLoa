window.PORTFOLIO_PROJECTS = [
  {
    "id": "decodelabs-decodebot",
    "title": "DecodeBot Assistant",
    "eyebrow": "DecodeLabs / Project 01",
    "category": "Internships",
    "organization": "DecodeLabs",
    "sequence": "01",
    "family": "Artificial Intelligence Internship",
    "summary": "A polished rule-based assistant with bilingual intent matching, local conversation history, exports and a transparent decision trace.",
    "challenge": "Turn deterministic phrase matching into a credible conversational product without overstating its AI capabilities.",
    "solution": "A Streamlit experience backed by normalized O(1) intent lookup, SQLite persistence and independently testable conversation logic.",
    "architecture": [
      "Reusable conversation core",
      "Normalized intent index",
      "SQLite persistence",
      "Streamlit presentation"
    ],
    "capabilities": [
      "Eight bilingual intents",
      "Multiple persistent conversations",
      "JSON conversation export",
      "Decision trace and controlled fallback"
    ],
    "technologies": [
      "Python",
      "Streamlit",
      "SQLite"
    ],
    "signals": {
      "files": 13,
      "code": 6,
      "tests": 2,
      "notebooks": 0
    },
    "status": "Completed",
    "url": "https://github.com/JeanLoa/DecodeLabs/tree/main/01-decodebot-assistant",
    "featured": false,
    "internship": true,
    "accent": "internship"
  },
  {
    "id": "decodelabs-decodeclassify",
    "title": "DecodeClassify",
    "eyebrow": "DecodeLabs / Project 02",
    "category": "Internships",
    "organization": "DecodeLabs",
    "sequence": "02",
    "family": "Artificial Intelligence Internship",
    "summary": "An interactive Iris classification lab that connects reproducible ETL, leakage-safe KNN training, model evaluation and new-sample prediction.",
    "challenge": "Demonstrate supervised learning as a complete and inspectable workflow instead of presenting accuracy as the only result.",
    "solution": "A local Streamlit lab with schema validation, stratified splitting, a scikit-learn pipeline, cross-validation and multiclass metrics.",
    "architecture": [
      "Validated raw data",
      "Reproducible ETL",
      "Leakage-safe training pipeline",
      "Interactive evaluation surface"
    ],
    "capabilities": [
      "KNN tuning with cross-validation",
      "Accuracy and macro F1",
      "Confusion matrix and class metrics",
      "Interactive flower prediction"
    ],
    "technologies": [
      "Python",
      "Streamlit",
      "scikit-learn",
      "Pandas"
    ],
    "signals": {
      "files": 22,
      "code": 11,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Completed",
    "url": "https://github.com/JeanLoa/DecodeLabs/tree/main/02-decode-classify",
    "featured": false,
    "internship": true,
    "accent": "internship"
  },
  {
    "id": "decodelabs-recommendation-logic",
    "title": "DecodePath Recommender",
    "eyebrow": "DecodeLabs / Project 03",
    "category": "Internships",
    "organization": "DecodeLabs",
    "sequence": "03",
    "family": "Artificial Intelligence Internship",
    "summary": "A transparent tech-stack recommender that ranks three explainable career paths from a user's skills, goals and interests.",
    "challenge": "Turn sparse career preferences into useful recommendations without hiding the matching logic behind an opaque score.",
    "solution": "A local content-based system uses canonical profile terms, TF-IDF vectors and cosine similarity against a validated catalog of 18 technology roles.",
    "architecture": [
      "Canonical profile vocabulary",
      "TF-IDF vectorization",
      "Cosine-similarity ranking",
      "Streamlit explanation workspace"
    ],
    "capabilities": [
      "Top-three deterministic ranking",
      "Matched skills and gap analysis",
      "Cold-start presets and fallback",
      "SQLite history and JSON export"
    ],
    "technologies": [
      "Python",
      "Streamlit",
      "scikit-learn",
      "TF-IDF",
      "Cosine Similarity",
      "SQLite"
    ],
    "signals": {
      "files": 50,
      "code": 8,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Completed",
    "url": "https://github.com/JeanLoa/DecodeLabs/tree/main/03-decodepath-recommender",
    "featured": false,
    "internship": true,
    "accent": "internship"
  },
  {
    "id": "decodelabs-optic-nerve",
    "title": "DecodeVision OCR",
    "eyebrow": "DecodeLabs / Project 04",
    "category": "Internships",
    "organization": "DecodeLabs",
    "sequence": "04",
    "family": "Artificial Intelligence Internship",
    "summary": "An inspectable OCR workspace that transforms document images into confidence-gated text and bounding-box evidence.",
    "challenge": "Make OCR preprocessing, recognition confidence and rejected words visible instead of presenting raw extracted text as unquestionably correct.",
    "solution": "A layered OpenCV pipeline performs grayscale conversion, denoising, thresholding and deskewing before a native Tesseract adapter returns word-level evidence.",
    "architecture": [
      "Validated image ingestion",
      "OpenCV preprocessing pipeline",
      "Tesseract OCR adapter",
      "Confidence-gated evidence workspace"
    ],
    "capabilities": [
      "Adaptive and Otsu thresholding",
      "Safe foreground deskewing",
      "Word confidence and bounding boxes",
      "TXT and JSON exports"
    ],
    "technologies": [
      "Python",
      "Streamlit",
      "OpenCV",
      "Tesseract",
      "Pillow"
    ],
    "signals": {
      "files": 42,
      "code": 11,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Completed",
    "url": "https://github.com/JeanLoa/DecodeLabs/tree/main/04-decodevision-ocr",
    "featured": false,
    "internship": true,
    "accent": "internship"
  },
  {
    "id": "spotter-fuel-route-optimizer",
    "title": "Fuel Route Optimizer API",
    "eyebrow": "SpotterAI / Technical Project",
    "category": "Internships",
    "organization": "SpotterAI",
    "sequence": "01",
    "family": "Backend Engineering Project",
    "summary": "A Django REST API that maps US driving routes and recommends cost-effective fuel stops from a catalog of 6,626 stations.",
    "challenge": "Combine road routing, imperfect station data and vehicle constraints into a feasible, inspectable fuel-purchasing plan.",
    "solution": "A layered Django service integrates Geoapify once per route, filters stations along the corridor and applies a cheaper-station fuel strategy.",
    "architecture": [
      "DRF validation and resources",
      "Geoapify provider integration",
      "Route corridor selection",
      "Fuel optimization services"
    ],
    "capabilities": [
      "US geocoding and routing",
      "GeoJSON route output",
      "Per-stop gallons and cost",
      "Structured errors and mocked provider tests"
    ],
    "technologies": [
      "Python",
      "Django",
      "Django REST Framework",
      "HTTPX",
      "Geoapify",
      "SQLite"
    ],
    "signals": {
      "files": 59,
      "code": 38,
      "tests": 9,
      "notebooks": 0
    },
    "status": "Completed",
    "url": "https://github.com/JeanLoa/fuel-route-optimizer-api",
    "featured": false,
    "internship": true,
    "accent": "internship"
  },
  {
    "id": "smartlocation",
    "title": "SmartLocation",
    "eyebrow": "Route intelligence / Lima",
    "category": "University",
    "family": "Mobility systems",
    "summary": "A functional geospatial console for Lima that calculates urban routes, resolves real places and exposes distance, time and graph statistics through a layered map experience.",
    "challenge": "Make algorithmic route planning understandable without flattening the engineering behind graph search, road constraints and geospatial data.",
    "solution": "An Angular 22 experience with layered architecture, MapLibre rendering, OpenStreetMap/Overpass data and a Python engine that runs Dijkstra, A* and BFS. The TypeScript comparison surface remains an explicit next step.",
    "architecture": [
      "Domain graph algorithms",
      "Application use cases + facade",
      "Infrastructure repositories",
      "MapLibre presentation system"
    ],
    "capabilities": [
      "Dijkstra, A* and BFS route engine",
      "43 Lima districts and 44 local boundaries",
      "Distance, time and graph statistics",
      "Nominatim geocoding and OSRM fallback"
    ],
    "technologies": [
      "Angular",
      "TypeScript",
      "MapLibre",
      "OpenStreetMap",
      "OSRM",
      "Python"
    ],
    "signals": {
      "files": 75,
      "code": 32,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Functional demo",
    "url": "https://github.com/JeanLoa/University/tree/main/01-portfolio-projects/smartlocation-route-optimization-platform",
    "liveUrl": "https://smartlocation.onrender.com",
    "featured": true,
    "accent": "university",
    "visual": "map"
  },
  {
    "id": "lowcortisol",
    "title": "LowCortisol",
    "eyebrow": "Water & gas operations",
    "category": "University",
    "family": "Resource monitoring",
    "summary": "A full-stack operations platform for monitoring water and gas across sites, rooms, devices, sensors, valves, alerts, reports and support workflows.",
    "challenge": "Connect physical resource monitoring with the people, places, controls and decisions that make consumption actionable.",
    "solution": "A Vue 3 operational SPA and ASP.NET Core API organized through DDD/CQRS bounded contexts, reusable UI primitives and explicit product relationships.",
    "architecture": [
      "Bounded-context frontend modules",
      "DDD/CQRS backend",
      "PostgreSQL persistence",
      "Role-aware operational workflows"
    ],
    "capabilities": [
      "Sites, rooms and device groups",
      "Monitoring and valve control",
      "Alerts, goals and routines",
      "Reports, plans and support"
    ],
    "technologies": [
      "Vue",
      "JavaScript",
      "ASP.NET Core",
      "PostgreSQL",
      "Docker",
      "Cloud Run",
      "Firebase Hosting",
      "Neon"
    ],
    "signals": {
      "files": 757,
      "code": 757,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Built system",
    "url": "https://github.com/JeanLoa/University/tree/main/01-portfolio-projects/lowcortisol-digital-health-platform",
    "liveUrl": "https://university-lowcortisol.web.app",
    "apiUrl": "https://lowcortisol-platform-y2umk6uzwq-ue.a.run.app/swagger/index.html",
    "featured": true,
    "accent": "university",
    "image": "assets/lowcortisol-reports.png"
  },
  {
    "id": "electrocorp",
    "title": "ElectroCorp",
    "eyebrow": "Smart energy / enterprise flow",
    "category": "University",
    "family": "Energy systems",
    "summary": "An enterprise-style smart energy platform spanning subscriptions, spaces, devices, monitoring, alerts, reports, support, deployment and disciplined releases.",
    "challenge": "Model a connected energy product whose frontend, backend, database, documentation and delivery history all tell the same architectural story.",
    "solution": "An Angular workflow layer over a Spring Boot platform with DDD/CQRS modules, JWT security, PostgreSQL and a guarded Gitflow release chain.",
    "architecture": [
      "Angular bounded workflows",
      "Spring Boot DDD/CQRS",
      "JWT + BCrypt security",
      "Gitflow release architecture"
    ],
    "capabilities": [
      "8 bounded contexts and 99 HTTP operations",
      "Device and energy monitoring",
      "Alerts, reports, subscriptions and support",
      "Versioned releases and deployment evidence"
    ],
    "technologies": [
      "Angular",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Cloud Run",
      "Firebase Hosting",
      "Neon"
    ],
    "signals": {
      "files": 1075,
      "code": 1075,
      "tests": 83,
      "notebooks": 0
    },
    "status": "Built system",
    "url": "https://github.com/JeanLoa/University/tree/main/01-portfolio-projects/electrocorp-enterprise-platform-suite",
    "liveUrl": "https://university-electrocorp.web.app",
    "apiUrl": "https://electrocorp-platform-vfvqevfzvq-ue.a.run.app/swagger-ui.html",
    "featured": true,
    "accent": "university",
    "image": "assets/electrocorp-home.png"
  },
  {
    "id": "path-software-engineer-advanced-ml-decision-platform-03-advanced-ml-decision-platform",
    "title": "Advanced ML Decision Platform",
    "category": "Software Engineering",
    "family": "Advanced ML Decision Platform",
    "summary": "An evidence-first application that turns advanced machine-learning outputs into inspectable, versioned decision-support experiences.",
    "technologies": [
      "Angular",
      "Python",
      "FastAPI",
      "Spring Boot",
      "PostgreSQL",
      "Docker"
    ],
    "signals": {
      "files": 4734,
      "code": 153,
      "tests": 35,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/Advanced-ML-Applied-Tools/tree/main/03-advanced-ml-decision-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Advanced-ML-Decision-Platform/03-advanced-ml-decision-platform",
    "roadmapNumber": 3,
    "cloudFocus": "GCP",
    "liveUrl": "https://sf-03-advanced-ml-api-1069123053246.us-central1.run.app",
    "apiUrl": "https://sf-03-advanced-ml-api-1069123053246.us-central1.run.app/swagger-ui/index.html"
  },
  {
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-29-agentic-workflow-langgraph-lab",
    "title": "Agentic Workflow LangGraph Lab",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "A documented Agentic Workflow LangGraph Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside LLMs RAG Agents Agentic Systems.",
    "technologies": [
      "LangGraph",
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/tree/main/29-agentic-workflow-langgraph-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/29-agentic-workflow-langgraph-lab",
    "roadmapNumber": 5,
    "cloudFocus": "AWS"
  },
  {
    "id": "roadmap-72",
    "title": "AI + Quantum + Robotics Capstone",
    "category": "AI Engineering",
    "family": "Final AI Quantum Robotics Platform",
    "summary": "The final integration roadmap: developer portal, API documentation, evaluation evidence, safety report and product demo.",
    "technologies": [],
    "signals": {
      "files": 0,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Roadmap",
    "url": "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform",
    "featured": false,
    "accent": "orange",
    "roadmapNumber": 12,
    "cloudFocus": "Azure",
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/README.md"
  },
  {
    "id": "path-ai-engineer-machine-learning-engineering-software-foundations-06-ai-software-foundations-platform",
    "title": "AI Software Foundations Platform",
    "category": "AI Engineering",
    "family": "Machine Learning Engineering Software Foundations",
    "summary": "A production-oriented decision platform combining a React operator console, durable FastAPI workflows, trusted model artifacts and operational evidence.",
    "technologies": [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker"
    ],
    "signals": {
      "files": 322,
      "code": 104,
      "tests": 155,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/06-ai-software-foundations-platform",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/06-ai-software-foundations-platform",
    "roadmapNumber": 1,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-01-p06-ai-foundations-platform-1088743147874.us-central1.run.app",
    "apiUrl": "https://ai-01-p06-ai-foundations-platform-1088743147874.us-central1.run.app/docs"
  },
  {
    "id": "university-02-computer-science-coursework-algorithm-complexity-analysis",
    "title": "Algorithm Complexity Analysis",
    "category": "University",
    "family": "Computer Science Coursework",
    "summary": "A coursework collection focused on reasoning about time, space and growth rates before choosing an implementation strategy.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Coursework",
    "url": "https://github.com/JeanLoa/University/tree/main/02-computer-science-coursework/algorithm-complexity-analysis",
    "featured": false,
    "accent": "cyan",
    "path": "University/02-computer-science-coursework/algorithm-complexity-analysis"
  },
  {
    "id": "path-ai-engineer-embodied-ai-humanoid-robotics-android-systems-66-android-systems-cognitive-architecture",
    "title": "Android Systems Cognitive Architecture",
    "category": "AI Engineering",
    "family": "Embodied AI Humanoid Robotics Android Systems",
    "summary": "A documented Android Systems Cognitive Architecture blueprint defining the experiment, modules, evaluation signals and known limitations inside Embodied AI Humanoid Robotics Android Systems.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/tree/main/66-android-systems-cognitive-architecture",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/66-android-systems-cognitive-architecture",
    "roadmapNumber": 11,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-advanced-ml-backgrounds-14-anomaly-detection-monitor",
    "title": "Anomaly Operations Console",
    "category": "AI Engineering",
    "family": "Advanced ML Backgrounds",
    "summary": "An operational anomaly-monitoring workspace that learns normal temporal behavior, produces canonical anomaly scores, calibrates explicit operating points and turns them into reviewable alerts. It combines reproducible offline evaluation with stateful replay, REST/SSE contracts…",
    "technologies": [
      "React",
      "Python",
      "Docker"
    ],
    "signals": {
      "files": 351,
      "code": 28,
      "tests": 60,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/14-anomaly-detection-monitor",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/14-anomaly-detection-monitor",
    "roadmapNumber": 3,
    "cloudFocus": "GCP"
  },
  {
    "id": "path-ai-engineer-advanced-ml-backgrounds-18-automl-meta-learning-benchmark-lab",
    "title": "AutoML Meta-Benchmark Studio",
    "category": "AI Engineering",
    "family": "Advanced ML Backgrounds",
    "summary": "A read-only evidence product for comparing equal-space search strategies, anytime behavior, failure accounting and leave-one-dataset-out warm starts. The platform includes 17 read-only API contracts and nine functional research views.",
    "technologies": [
      "Python",
      "FastAPI",
      "Docker",
      "scikit-learn"
    ],
    "signals": {
      "files": 316,
      "code": 38,
      "tests": 316,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/18-automl-meta-learning-benchmark-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/18-automl-meta-learning-benchmark-lab",
    "roadmapNumber": 3,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-03-p18-automl-meta-benchmark-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-03-p18-automl-meta-benchmark-1088743147874.us-central1.run.app/docs"
  },
  {
    "id": "university-02-computer-science-coursework-cpp-data-structures-and-algorithms",
    "title": "C++ Data Structures & Algorithms",
    "category": "University",
    "family": "Computer Science Coursework",
    "summary": "Twenty-four implementations spanning AVL trees, linked graphs, stacks, queues, searching, sorting and dynamic memory.",
    "technologies": [],
    "signals": {
      "files": 27,
      "code": 24,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Implemented coursework",
    "url": "https://github.com/JeanLoa/University/tree/main/02-computer-science-coursework/cpp-data-structures-and-algorithms",
    "featured": false,
    "accent": "cyan",
    "path": "University/02-computer-science-coursework/cpp-data-structures-and-algorithms"
  },
  {
    "id": "university-03-academic-final-projects-final-project-deliverables-semester-02-deliverables",
    "title": "C++ Data-Structure Supermarket",
    "category": "University",
    "family": "Academic Capstones",
    "summary": "A supermarket system combining circular lists, queues, stacks, AVL trees, hashing, graphs, sales flows and persistence.",
    "technologies": [],
    "signals": {
      "files": 390,
      "code": 4,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Archived capstone",
    "url": "https://github.com/JeanLoa/University/tree/main/03-academic-final-projects/final-project-deliverables/semester-02-deliverables",
    "featured": false,
    "accent": "cyan",
    "path": "University/03-academic-final-projects/final-project-deliverables/semester-02-deliverables"
  },
  {
    "id": "leisure-05-cpp-fundamentals",
    "title": "C++ Fundamentals",
    "category": "Leisure",
    "family": "Programming Foundations",
    "summary": "Six progressive modules covering basic programming, mathematics, pointers, records, console games, patterns and assessments.",
    "technologies": [],
    "signals": {
      "files": 45,
      "code": 45,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Practice collection",
    "url": "https://github.com/JeanLoa/Leisure/tree/main/05-cpp-fundamentals",
    "featured": false,
    "accent": "orange",
    "path": "Leisure/05-cpp-fundamentals"
  },
  {
    "id": "university-03-academic-final-projects-final-project-deliverables-semester-03-deliverables",
    "title": "C++/CLI Action Game",
    "category": "University",
    "family": "Academic Capstones",
    "summary": "A Windows Forms action game with sprites, a playable hero, enemies, a boss, projectiles, health, audio and animation.",
    "technologies": [],
    "signals": {
      "files": 3,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Archived capstone",
    "url": "https://github.com/JeanLoa/University/tree/main/03-academic-final-projects/final-project-deliverables/semester-03-deliverables",
    "featured": false,
    "accent": "cyan",
    "path": "University/03-academic-final-projects/final-project-deliverables/semester-03-deliverables"
  },
  {
    "id": "path-ai-engineer-advanced-ml-backgrounds-16-causal-promotion-effect-lab",
    "title": "Causal Promotion Lab",
    "category": "AI Engineering",
    "family": "Advanced ML Backgrounds",
    "summary": "A reproducible causal-inference workspace for promotion decisions. It keeps study design, identification, estimation, heterogeneity and offline policy evaluation traceable through one immutable evidence contract.",
    "technologies": [
      "Python",
      "FastAPI"
    ],
    "signals": {
      "files": 419,
      "code": 51,
      "tests": 66,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/16-causal-promotion-effect-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/16-causal-promotion-effect-lab",
    "roadmapNumber": 3,
    "cloudFocus": "GCP"
  },
  {
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-27-chunking-retrieval-evaluation-lab",
    "title": "Chunking Retrieval Evaluation Lab",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "A documented Chunking Retrieval Evaluation Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside LLMs RAG Agents Agentic Systems.",
    "technologies": [
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/tree/main/27-chunking-retrieval-evaluation-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/27-chunking-retrieval-evaluation-lab",
    "roadmapNumber": 5,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-machine-learning-engineering-software-foundations-03-classical-model-comparison-suite",
    "title": "Classical Model Comparison Suite",
    "category": "AI Engineering",
    "family": "Machine Learning Engineering Software Foundations",
    "summary": "A reproducible and configurable laboratory for comparing classical machine learning models under one explicit experimental protocol.",
    "technologies": [
      "Python"
    ],
    "signals": {
      "files": 598,
      "code": 86,
      "tests": 351,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/03-classical-model-comparison-suite",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/03-classical-model-comparison-suite",
    "roadmapNumber": 1,
    "cloudFocus": "GCP"
  },
  {
    "id": "path-ai-engineer-deep-learning-core-09-cnn-foundations-image-classifier",
    "title": "CNN Vision Lab",
    "category": "AI Engineering",
    "family": "Deep Learning Core",
    "summary": "An inspectable FashionMNIST product that connects convolution mechanics, controlled CNN inference, intermediate activations and held-out evaluation in one professional web laboratory.",
    "technologies": [
      "Python",
      "PyTorch",
      "Computer Vision"
    ],
    "signals": {
      "files": 1028,
      "code": 74,
      "tests": 114,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/09-cnn-foundations-image-classifier",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/09-cnn-foundations-image-classifier",
    "roadmapNumber": 2,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-02-p09-cnn-vision-lab-1088743147874.us-central1.run.app",
    "apiUrl": "https://ai-02-p09-cnn-vision-lab-1088743147874.us-central1.run.app/docs"
  },
  {
    "id": "path-ai-engineer-generative-models-diffusion-systems-35-conditioned-generation-control-lab",
    "title": "Conditioned Generation Control Lab",
    "category": "AI Engineering",
    "family": "Generative Models Diffusion Systems",
    "summary": "A documented Conditioned Generation Control Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Generative Models Diffusion Systems.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Generative-Models-Diffusion-Systems/tree/main/35-conditioned-generation-control-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/35-conditioned-generation-control-lab",
    "roadmapNumber": 6,
    "cloudFocus": "AWS"
  },
  {
    "id": "roadmap-68",
    "title": "Core Multi-Service AI Platform",
    "category": "AI Engineering",
    "family": "Final AI Quantum Robotics Platform",
    "summary": "A roadmap for an API gateway, RAG, agents, tools, logs and evaluation hooks across a shared AI service layer.",
    "technologies": [],
    "signals": {
      "files": 0,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Roadmap",
    "url": "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform",
    "featured": false,
    "accent": "orange",
    "roadmapNumber": 12,
    "cloudFocus": "Azure",
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/README.md"
  },
  {
    "id": "path-ai-engineer-machine-learning-engineering-software-foundations-04-customer-segmentation-and-churn-api",
    "title": "Customer Segmentation and Churn API",
    "category": "AI Engineering",
    "family": "Machine Learning Engineering Software Foundations",
    "summary": "An end-to-end classical machine-learning product that keeps segment discovery and churn review priority as two separate, interpretable workflows.",
    "technologies": [
      "Python",
      "FastAPI",
      "Streamlit",
      "PostgreSQL",
      "Docker"
    ],
    "signals": {
      "files": 336,
      "code": 107,
      "tests": 119,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/04-customer-segmentation-and-churn-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/04-customer-segmentation-and-churn-api",
    "roadmapNumber": 1,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-01-p04-customer-intel-dashboard-1088743147874.us-central1.run.app",
    "apiUrl": "https://ai-01-p04-customer-intel-api-1088743147874.us-central1.run.app/docs"
  },
  {
    "id": "path-software-engineer-deep-learning-software-lab-platform-02-deep-learning-visual-lab-platform",
    "title": "Deep Learning Visual Lab Platform",
    "category": "Software Engineering",
    "family": "Deep Learning Software Lab Platform",
    "summary": "Project 02 of the Software Engineer path. Axon is a full-stack educational platform for inspecting registered PyTorch models through bounded FastAPI contracts and responsive Next.js experiences.",
    "technologies": [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
      "PyTorch"
    ],
    "signals": {
      "files": 1138,
      "code": 358,
      "tests": 74,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/Deep-Learning-Software-Lab-Platform/tree/main/02-deep-learning-visual-lab-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Deep-Learning-Software-Lab-Platform/02-deep-learning-visual-lab-platform",
    "roadmapNumber": 2,
    "cloudFocus": "GCP",
    "liveUrl": "https://sf-02-deep-learning-visual-lab-web-s3dd5t6azq-uc.a.run.app",
    "apiUrl": "https://sf-02-deep-learning-visual-lab-api-s3dd5t6azq-uc.a.run.app/docs"
  },
  {
    "id": "path-ai-engineer-reinforcement-learning-world-models-robotics-simulation-39-deep-q-network-gymnasium-lab",
    "title": "Deep Q Network Gymnasium Lab",
    "category": "AI Engineering",
    "family": "Reinforcement Learning World Models Robotics Simulation",
    "summary": "A documented Deep Q Network Gymnasium Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Reinforcement Learning World Models Robotics Simulation.",
    "technologies": [
      "Reinforcement Learning"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/tree/main/39-deep-q-network-gymnasium-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/39-deep-q-network-gymnasium-lab",
    "roadmapNumber": 7,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-advanced-ml-backgrounds-17-probabilistic-demand-forecasting",
    "title": "Demand Uncertainty Studio",
    "category": "AI Engineering",
    "family": "Advanced ML Backgrounds",
    "summary": "Evidence boundary: the approved demonstration bundle is a deterministic, heteroscedastic fixture with 17,379 hourly rows. It mirrors the size and target semantics of UCI Bike Sharing but is not presented as the UCI observations.",
    "technologies": [
      "React",
      "Python",
      "Docker"
    ],
    "signals": {
      "files": 521,
      "code": 48,
      "tests": 70,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/17-probabilistic-demand-forecasting",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/17-probabilistic-demand-forecasting",
    "roadmapNumber": 3,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-03-p17-demand-uncertainty-studio-1088743147874.us-central1.run.app",
    "apiUrl": "https://ai-03-p17-demand-uncertainty-studio-1088743147874.us-central1.run.app/docs"
  },
  {
    "id": "path-ai-engineer-generative-models-diffusion-systems-34-diffusion-denoising-foundations-lab",
    "title": "Diffusion Denoising Foundations Lab",
    "category": "AI Engineering",
    "family": "Generative Models Diffusion Systems",
    "summary": "A documented Diffusion Denoising Foundations Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Generative Models Diffusion Systems.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Generative-Models-Diffusion-Systems/tree/main/34-diffusion-denoising-foundations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/34-diffusion-denoising-foundations-lab",
    "roadmapNumber": 6,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-computer-vision-multimodal-ai-edge-optimization-24-edge-vision-optimization-lab",
    "title": "Edge Vision Optimization Lab",
    "category": "AI Engineering",
    "family": "Computer Vision Multimodal AI Edge Optimization",
    "summary": "A documented Edge Vision Optimization Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Computer Vision Multimodal AI Edge Optimization.",
    "technologies": [
      "Computer Vision"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/24-edge-vision-optimization-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/24-edge-vision-optimization-lab",
    "roadmapNumber": 4,
    "cloudFocus": "AWS"
  },
  {
    "id": "university-03-academic-final-projects-final-project-deliverables-semester-01-cpp-final-project",
    "title": "Educational Math Adventure",
    "category": "University",
    "family": "Academic Capstones",
    "summary": "A console adventure built around Pythagorean and equation challenges, with three worlds, tutors, enemies and scoring.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 1,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Academic capstone",
    "url": "https://github.com/JeanLoa/University/tree/main/03-academic-final-projects/final-project-deliverables/semester-01-cpp-final-project",
    "featured": false,
    "accent": "cyan",
    "path": "University/03-academic-final-projects/final-project-deliverables/semester-01-cpp-final-project"
  },
  {
    "id": "path-ai-engineer-embodied-ai-humanoid-robotics-android-systems-61-embodied-ai-foundations-lab",
    "title": "Embodied AI Foundations Lab",
    "category": "AI Engineering",
    "family": "Embodied AI Humanoid Robotics Android Systems",
    "summary": "A documented Embodied AI Foundations Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Embodied AI Humanoid Robotics Android Systems.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/tree/main/61-embodied-ai-foundations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/61-embodied-ai-foundations-lab",
    "roadmapNumber": 11,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-software-engineer-embodied-ai-robotics-software-platform-11-embodied-robotics-control-platform",
    "title": "Embodied AI Robotics Platform",
    "category": "Software Engineering",
    "family": "Embodied AI Robotics Software Platform",
    "summary": "A product-platform blueprint translating Embodied AI Robotics Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-Software-Engineer/Embodied-AI-Robotics-Software-Platform/tree/main/11-embodied-robotics-control-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Embodied-AI-Robotics-Software-Platform/11-embodied-robotics-control-platform",
    "roadmapNumber": 11,
    "cloudFocus": "AWS"
  },
  {
    "id": "roadmap-70",
    "title": "Embodied Simulation Platform",
    "category": "AI Engineering",
    "family": "Final AI Quantum Robotics Platform",
    "summary": "A roadmap connecting simulation, perception-memory-action loops, planning, control and explicit safety constraints.",
    "technologies": [],
    "signals": {
      "files": 0,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Roadmap",
    "url": "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform",
    "featured": false,
    "accent": "orange",
    "roadmapNumber": 12,
    "cloudFocus": "Azure",
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/README.md"
  },
  {
    "id": "path-ai-engineer-quantum-first-business-product-developer-platform-56-enterprise-ai-product-line",
    "title": "Enterprise AI Product Line",
    "category": "AI Engineering",
    "family": "Quantum First Business Product Developer Platform",
    "summary": "A documented Enterprise AI Product Line blueprint defining the experiment, modules, evaluation signals and known limitations inside Quantum First Business Product Developer Platform.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/tree/main/56-enterprise-ai-product-line",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/56-enterprise-ai-product-line",
    "roadmapNumber": 10,
    "cloudFocus": "GCP"
  },
  {
    "id": "roadmap-67",
    "title": "Final AI + Quantum + Robotics Architecture",
    "category": "AI Engineering",
    "family": "Final AI Quantum Robotics Platform",
    "summary": "An integration map for service boundaries, API contracts, cloud infrastructure and Kubernetes-ready deployment.",
    "technologies": [],
    "signals": {
      "files": 0,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Roadmap",
    "url": "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform",
    "featured": false,
    "accent": "orange",
    "roadmapNumber": 12,
    "cloudFocus": "Azure",
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/README.md"
  },
  {
    "id": "path-software-engineer-final-ai-quantum-robotics-software-platform-12-ai-quantum-robotics-platform-portal",
    "title": "Final AI Quantum Robotics Platform",
    "category": "Software Engineering",
    "family": "Final AI Quantum Robotics Software Platform",
    "summary": "A product-platform blueprint translating Final AI Quantum Robotics Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Streamlit"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-Software-Engineer/Final-AI-Quantum-Robotics-Software-Platform/tree/main/12-ai-quantum-robotics-platform-portal",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Final-AI-Quantum-Robotics-Software-Platform/12-ai-quantum-robotics-platform-portal",
    "roadmapNumber": 12,
    "cloudFocus": "Azure"
  },
  {
    "id": "leisure-03-machine-learning-pipelines",
    "title": "Five Machine Learning Pipelines",
    "category": "Leisure",
    "family": "Independent Laboratories",
    "summary": "Regression and classification pipelines across housing, fraud, Iris, heart disease and Titanic datasets, grouped as practice builds.",
    "technologies": [],
    "signals": {
      "files": 5,
      "code": 5,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Lab collection",
    "url": "https://github.com/JeanLoa/Leisure/tree/main/03-machine-learning-pipelines",
    "featured": false,
    "accent": "orange",
    "path": "Leisure/03-machine-learning-pipelines"
  },
  {
    "id": "path-ai-engineer-generative-models-diffusion-systems-33-gan-image-generation-lab",
    "title": "GAN Image Generation Lab",
    "category": "AI Engineering",
    "family": "Generative Models Diffusion Systems",
    "summary": "A documented GAN Image Generation Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Generative Models Diffusion Systems.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Generative-Models-Diffusion-Systems/tree/main/33-gan-image-generation-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/33-gan-image-generation-lab",
    "roadmapNumber": 6,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-software-engineer-generative-ai-control-platform-06-generative-ai-control-platform",
    "title": "Generative AI Control Platform",
    "category": "Software Engineering",
    "family": "Generative AI Control Platform",
    "summary": "A product-platform blueprint translating Generative AI Control Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Docker"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-Software-Engineer/Generative-AI-Control-Platform/tree/main/06-generative-ai-control-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Generative-AI-Control-Platform/06-generative-ai-control-platform",
    "roadmapNumber": 6,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-generative-models-diffusion-systems-36-generative-ai-evaluation-suite",
    "title": "Generative AI Evaluation Suite",
    "category": "AI Engineering",
    "family": "Generative Models Diffusion Systems",
    "summary": "A documented Generative AI Evaluation Suite blueprint defining the experiment, modules, evaluation signals and known limitations inside Generative Models Diffusion Systems.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Generative-Models-Diffusion-Systems/tree/main/36-generative-ai-evaluation-suite",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/36-generative-ai-evaluation-suite",
    "roadmapNumber": 6,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-generative-models-diffusion-systems-31-generative-models-foundations-lab",
    "title": "Generative Models Foundations Lab",
    "category": "AI Engineering",
    "family": "Generative Models Diffusion Systems",
    "summary": "A documented Generative Models Foundations Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Generative Models Diffusion Systems.",
    "technologies": [
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Generative-Models-Diffusion-Systems/tree/main/31-generative-models-foundations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/31-generative-models-foundations-lab",
    "roadmapNumber": 6,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-embodied-ai-humanoid-robotics-android-systems-64-human-robot-interaction-safety-lab",
    "title": "Human Robot Interaction Safety Lab",
    "category": "AI Engineering",
    "family": "Embodied AI Humanoid Robotics Android Systems",
    "summary": "A documented Human Robot Interaction Safety Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Embodied AI Humanoid Robotics Android Systems.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/tree/main/64-human-robot-interaction-safety-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/64-human-robot-interaction-safety-lab",
    "roadmapNumber": 11,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-embodied-ai-humanoid-robotics-android-systems-65-humanoid-robotics-architecture-blueprint",
    "title": "Humanoid Robotics Architecture Blueprint",
    "category": "AI Engineering",
    "family": "Embodied AI Humanoid Robotics Android Systems",
    "summary": "A documented Humanoid Robotics Architecture Blueprint blueprint defining the experiment, modules, evaluation signals and known limitations inside Embodied AI Humanoid Robotics Android Systems.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/tree/main/65-humanoid-robotics-architecture-blueprint",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/65-humanoid-robotics-architecture-blueprint",
    "roadmapNumber": 11,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-54-hybrid-ai-quantum-platform-blueprint",
    "title": "Hybrid AI Quantum Platform Blueprint",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "A documented Hybrid AI Quantum Platform Blueprint blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced Quantum Machine Learning Hybrid AI Quantum Platforms.",
    "technologies": [
      "Quantum ML"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/tree/main/54-hybrid-ai-quantum-platform-blueprint",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/54-hybrid-ai-quantum-platform-blueprint",
    "roadmapNumber": 9,
    "cloudFocus": "Azure"
  },
  {
    "id": "university-02-computer-science-coursework-cpp-introduction-to-algorithms",
    "title": "Introduction to Algorithms in C++",
    "category": "University",
    "family": "Computer Science Coursework",
    "summary": "Foundational algorithm exercises that build from control flow and decomposition toward reusable problem-solving patterns.",
    "technologies": [],
    "signals": {
      "files": 39,
      "code": 38,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Implemented coursework",
    "url": "https://github.com/JeanLoa/University/tree/main/02-computer-science-coursework/cpp-introduction-to-algorithms",
    "featured": false,
    "accent": "cyan",
    "path": "University/02-computer-science-coursework/cpp-introduction-to-algorithms"
  },
  {
    "id": "path-ai-engineer-machine-learning-engineering-software-foundations-05-inventory-optimization-ml-service",
    "title": "Inventory Optimization ML Service",
    "category": "AI Engineering",
    "family": "Machine Learning Engineering Software Foundations",
    "summary": "A machine-learning decision product that transforms retail demand history into explainable, human-reviewed replenishment recommendations.",
    "technologies": [
      "Python",
      "FastAPI",
      "Streamlit",
      "Docker"
    ],
    "signals": {
      "files": 346,
      "code": 106,
      "tests": 133,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/05-inventory-optimization-ml-service",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/05-inventory-optimization-ml-service",
    "roadmapNumber": 1,
    "cloudFocus": "GCP"
  },
  {
    "id": "university-01-portfolio-projects-electrocorp-enterprise-platform-suite-java-fundamentals-course-electrocorp",
    "title": "Java Fundamentals Course",
    "category": "University",
    "family": "Technical Education",
    "summary": "An eleven-lesson Java course with starter files, completed examples, online execution guidance and aligned teaching documentation.",
    "technologies": [],
    "signals": {
      "files": 39,
      "code": 22,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Published course",
    "url": "https://github.com/JeanLoa/University/tree/main/01-portfolio-projects/electrocorp-enterprise-platform-suite/java-fundamentals-course-electrocorp",
    "featured": false,
    "accent": "cyan",
    "path": "University/01-portfolio-projects/electrocorp-enterprise-platform-suite/java-fundamentals-course-electrocorp"
  },
  {
    "id": "path-ai-engineer-deep-learning-core-11-autoencoder-representation-lab",
    "title": "Latent Representation Lab",
    "category": "AI Engineering",
    "family": "Deep Learning Core",
    "summary": "An inspectable reconstruction and representation-learning laboratory built around deterministic autoencoders. It reconstructs and denoises images, exposes a dedicated two-dimensional latent space, interpolates between samples, compares model families and makes the largest erro…",
    "technologies": [
      "React",
      "TypeScript",
      "Python",
      "FastAPI"
    ],
    "signals": {
      "files": 684,
      "code": 76,
      "tests": 109,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/11-autoencoder-representation-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/11-autoencoder-representation-lab",
    "roadmapNumber": 2,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-02-p11-latent-representation-lab-1088743147874.us-central1.run.app",
    "apiUrl": "https://ai-02-p11-latent-representation-lab-1088743147874.us-central1.run.app/docs"
  },
  {
    "id": "leisure-02-machine-learning-labs-model-benchmarking",
    "title": "LLM Benchmark Markov Chain Analysis",
    "category": "Leisure",
    "family": "Independent Laboratories",
    "summary": "An exploratory comparison of seventeen language models using normalisation, t-SNE, transition matrices and Markov-chain analysis.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 1,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Exploration",
    "url": "https://github.com/JeanLoa/Leisure/tree/main/02-machine-learning-labs/model-benchmarking",
    "featured": false,
    "accent": "orange",
    "path": "Leisure/02-machine-learning-labs/model-benchmarking"
  },
  {
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-30-llm-evaluation-guardrails-mcp-suite",
    "title": "LLM Evaluation Guardrails MCP Suite",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "A documented LLM Evaluation Guardrails MCP Suite blueprint defining the experiment, modules, evaluation signals and known limitations inside LLMs RAG Agents Agentic Systems.",
    "technologies": [
      "LangGraph",
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/tree/main/30-llm-evaluation-guardrails-mcp-suite",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/30-llm-evaluation-guardrails-mcp-suite",
    "roadmapNumber": 5,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-28-llm-tool-use-function-calling-lab",
    "title": "LLM Tool Use Function Calling Lab",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "A documented LLM Tool Use Function Calling Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside LLMs RAG Agents Agentic Systems.",
    "technologies": [
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/tree/main/28-llm-tool-use-function-calling-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/28-llm-tool-use-function-calling-lab",
    "roadmapNumber": 5,
    "cloudFocus": "AWS"
  },
  {
    "id": "leisure-02-machine-learning-labs",
    "title": "Machine Learning Lab Collection",
    "category": "Leisure",
    "family": "Independent Laboratories",
    "summary": "Hands-on clustering, data structures, visualisation, model benchmarking and NumPy experiments kept as a learning laboratory.",
    "technologies": [],
    "signals": {
      "files": 19,
      "code": 19,
      "tests": 2,
      "notebooks": 0
    },
    "status": "Lab collection",
    "url": "https://github.com/JeanLoa/Leisure/tree/main/02-machine-learning-labs",
    "featured": false,
    "accent": "orange",
    "path": "Leisure/02-machine-learning-labs"
  },
  {
    "id": "path-ai-engineer-computer-vision-multimodal-ai-edge-optimization-23-multimodal-image-text-assistant",
    "title": "Multimodal Image Text Assistant",
    "category": "AI Engineering",
    "family": "Computer Vision Multimodal AI Edge Optimization",
    "summary": "A documented Multimodal Image Text Assistant blueprint defining the experiment, modules, evaluation signals and known limitations inside Computer Vision Multimodal AI Edge Optimization.",
    "technologies": [
      "Computer Vision"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/23-multimodal-image-text-assistant",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/23-multimodal-image-text-assistant",
    "roadmapNumber": 4,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-deep-learning-core-07-neural-network-foundations-lab",
    "title": "Neural Network Foundations Lab",
    "category": "AI Engineering",
    "family": "Deep Learning Core",
    "summary": "Plan 2 · Deep Learning Core · Global days 190–210",
    "technologies": [
      "Python",
      "Streamlit",
      "Docker",
      "PyTorch",
      "NumPy"
    ],
    "signals": {
      "files": 1551,
      "code": 54,
      "tests": 430,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/07-neural-network-foundations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/07-neural-network-foundations-lab",
    "roadmapNumber": 2,
    "cloudFocus": "GCP"
  },
  {
    "id": "university-02-computer-science-coursework-cpp-object-oriented-algorithms",
    "title": "Object-Oriented Algorithms in C++",
    "category": "University",
    "family": "Computer Science Coursework",
    "summary": "Fifty-one exercises and simulations using composition, inheritance, polymorphism, games and Windows Forms project work.",
    "technologies": [],
    "signals": {
      "files": 54,
      "code": 36,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Implemented coursework",
    "url": "https://github.com/JeanLoa/University/tree/main/02-computer-science-coursework/cpp-object-oriented-algorithms",
    "featured": false,
    "accent": "cyan",
    "path": "University/02-computer-science-coursework/cpp-object-oriented-algorithms"
  },
  {
    "id": "path-ai-engineer-embodied-ai-humanoid-robotics-android-systems-62-perception-memory-action-agent-lab",
    "title": "Perception Memory Action Agent Lab",
    "category": "AI Engineering",
    "family": "Embodied AI Humanoid Robotics Android Systems",
    "summary": "A documented Perception Memory Action Agent Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Embodied AI Humanoid Robotics Android Systems.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/tree/main/62-perception-memory-action-agent-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/62-perception-memory-action-agent-lab",
    "roadmapNumber": 11,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-computer-vision-multimodal-ai-edge-optimization-19-image-classification-api",
    "title": "Pet Breed Classification Studio",
    "category": "AI Engineering",
    "family": "Computer Vision Multimodal AI Edge Optimization",
    "summary": "An evidence-first computer-vision product that validates image inputs, produces calibrated Top-K breed probabilities, abstains below a declared threshold and exposes model evidence through FastAPI and a React Studio.",
    "technologies": [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
      "PyTorch"
    ],
    "signals": {
      "files": 470,
      "code": 45,
      "tests": 46,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/19-image-classification-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/19-image-classification-api",
    "roadmapNumber": 4,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-quantum-computing-quantum-ai-foundations-48-post-quantum-security-and-hybrid-workflows-lab",
    "title": "Post Quantum Security And Hybrid Workflows Lab",
    "category": "AI Engineering",
    "family": "Quantum Computing Quantum AI Foundations",
    "summary": "A documented Post Quantum Security And Hybrid Workflows Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Quantum Computing Quantum AI Foundations.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/tree/main/48-post-quantum-security-and-hybrid-workflows-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/48-post-quantum-security-and-hybrid-workflows-lab",
    "roadmapNumber": 8,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-quantum-first-business-product-developer-platform-57-post-quantum-security-product-blueprint",
    "title": "Post Quantum Security Product Blueprint",
    "category": "AI Engineering",
    "family": "Quantum First Business Product Developer Platform",
    "summary": "A documented Post Quantum Security Product Blueprint blueprint defining the experiment, modules, evaluation signals and known limitations inside Quantum First Business Product Developer Platform.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/tree/main/57-post-quantum-security-product-blueprint",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/57-post-quantum-security-product-blueprint",
    "roadmapNumber": 10,
    "cloudFocus": "GCP"
  },
  {
    "id": "leisure-04-python-fundamentals",
    "title": "Python Fundamentals",
    "category": "Leisure",
    "family": "Programming Foundations",
    "summary": "Eleven small programs covering arithmetic, collections, loops, summaries and foundational problem-solving in Python.",
    "technologies": [],
    "signals": {
      "files": 11,
      "code": 11,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Practice collection",
    "url": "https://github.com/JeanLoa/Leisure/tree/main/04-python-fundamentals",
    "featured": false,
    "accent": "orange",
    "path": "Leisure/04-python-fundamentals"
  },
  {
    "id": "path-ai-engineer-deep-learning-core-08-pytorch-regression-classification-api",
    "title": "PyTorch Tabular Studio",
    "category": "AI Engineering",
    "family": "Deep Learning Core",
    "summary": "A complete Deep Learning workflow for tabular regression and multiclass classification. Two approved PyTorch MLPs are served through a versioned FastAPI backend and a responsive React interface with batch inference, reproducible artifacts and explicit model limitations.",
    "technologies": [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
      "PyTorch"
    ],
    "signals": {
      "files": 699,
      "code": 81,
      "tests": 112,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/08-pytorch-regression-classification-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/08-pytorch-regression-classification-api",
    "roadmapNumber": 2,
    "cloudFocus": "GCP"
  },
  {
    "id": "path-ai-engineer-reinforcement-learning-world-models-robotics-simulation-38-q-learning-agent-lab",
    "title": "Q Learning Agent Lab",
    "category": "AI Engineering",
    "family": "Reinforcement Learning World Models Robotics Simulation",
    "summary": "A documented Q Learning Agent Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Reinforcement Learning World Models Robotics Simulation.",
    "technologies": [
      "Reinforcement Learning"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/tree/main/38-q-learning-agent-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/38-q-learning-agent-lab",
    "roadmapNumber": 7,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-52-qaoa-vqe-optimizer-comparison-lab",
    "title": "QAOA VQE Optimizer Comparison Lab",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "A documented QAOA VQE Optimizer Comparison Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced Quantum Machine Learning Hybrid AI Quantum Platforms.",
    "technologies": [
      "Quantum ML"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/tree/main/52-qaoa-vqe-optimizer-comparison-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/52-qaoa-vqe-optimizer-comparison-lab",
    "roadmapNumber": 9,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-software-engineer-qml-benchmark-software-platform-09-qml-benchmark-platform",
    "title": "QML Benchmark Hybrid Platform",
    "category": "Software Engineering",
    "family": "QML Benchmark Software Platform",
    "summary": "A product-platform blueprint translating QML Benchmark Hybrid Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Quantum ML"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-Software-Engineer/QML-Benchmark-Software-Platform/tree/main/09-qml-benchmark-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/QML-Benchmark-Software-Platform/09-qml-benchmark-platform",
    "roadmapNumber": 9,
    "cloudFocus": "Azure"
  },
  {
    "id": "roadmap-69",
    "title": "Quantum & QML Service Layer",
    "category": "AI Engineering",
    "family": "Final AI Quantum Robotics Platform",
    "summary": "A planned provider router, job system, experiment registry, result normalisation and cost-awareness layer.",
    "technologies": [],
    "signals": {
      "files": 0,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Roadmap",
    "url": "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform",
    "featured": false,
    "accent": "orange",
    "roadmapNumber": 12,
    "cloudFocus": "Azure",
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/README.md"
  },
  {
    "id": "path-ai-engineer-quantum-computing-quantum-ai-foundations-45-quantum-algorithms-basics-lab",
    "title": "Quantum Algorithms Basics Lab",
    "category": "AI Engineering",
    "family": "Quantum Computing Quantum AI Foundations",
    "summary": "A documented Quantum Algorithms Basics Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Quantum Computing Quantum AI Foundations.",
    "technologies": [
      "Quantum ML"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/tree/main/45-quantum-algorithms-basics-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/45-quantum-algorithms-basics-lab",
    "roadmapNumber": 8,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-quantum-computing-quantum-ai-foundations-44-quantum-circuits-and-gates-playground",
    "title": "Quantum Circuits And Gates Playground",
    "category": "AI Engineering",
    "family": "Quantum Computing Quantum AI Foundations",
    "summary": "A documented Quantum Circuits And Gates Playground blueprint defining the experiment, modules, evaluation signals and known limitations inside Quantum Computing Quantum AI Foundations.",
    "technologies": [
      "Qiskit"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/tree/main/44-quantum-circuits-and-gates-playground",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/44-quantum-circuits-and-gates-playground",
    "roadmapNumber": 8,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-quantum-computing-quantum-ai-foundations-46-quantum-cloud-provider-comparison-lab",
    "title": "Quantum Cloud Provider Comparison Lab",
    "category": "AI Engineering",
    "family": "Quantum Computing Quantum AI Foundations",
    "summary": "A documented Quantum Cloud Provider Comparison Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Quantum Computing Quantum AI Foundations.",
    "technologies": [
      "Qiskit"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/tree/main/46-quantum-cloud-provider-comparison-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/46-quantum-cloud-provider-comparison-lab",
    "roadmapNumber": 8,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-quantum-computing-quantum-ai-foundations-43-quantum-computing-foundations-lab",
    "title": "Quantum Computing Foundations Lab",
    "category": "AI Engineering",
    "family": "Quantum Computing Quantum AI Foundations",
    "summary": "A documented Quantum Computing Foundations Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Quantum Computing Quantum AI Foundations.",
    "technologies": [
      "Quantum ML"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/tree/main/43-quantum-computing-foundations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/43-quantum-computing-foundations-lab",
    "roadmapNumber": 8,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-49-quantum-data-encoding-lab",
    "title": "Quantum Data Encoding Lab",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "A documented Quantum Data Encoding Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced Quantum Machine Learning Hybrid AI Quantum Platforms.",
    "technologies": [
      "Quantum ML"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/tree/main/49-quantum-data-encoding-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/49-quantum-data-encoding-lab",
    "roadmapNumber": 9,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-quantum-first-business-product-developer-platform-59-quantum-developer-platform-design",
    "title": "Quantum Developer Platform Design",
    "category": "AI Engineering",
    "family": "Quantum First Business Product Developer Platform",
    "summary": "A documented Quantum Developer Platform Design blueprint defining the experiment, modules, evaluation signals and known limitations inside Quantum First Business Product Developer Platform.",
    "technologies": [
      "Python",
      "Quantum ML"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/tree/main/59-quantum-developer-platform-design",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/59-quantum-developer-platform-design",
    "roadmapNumber": 10,
    "cloudFocus": "GCP"
  },
  {
    "id": "path-ai-engineer-quantum-first-business-product-developer-platform-55-quantum-first-company-vision",
    "title": "Quantum First Company Vision",
    "category": "AI Engineering",
    "family": "Quantum First Business Product Developer Platform",
    "summary": "A documented Quantum First Company Vision blueprint defining the experiment, modules, evaluation signals and known limitations inside Quantum First Business Product Developer Platform.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/tree/main/55-quantum-first-company-vision",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/55-quantum-first-company-vision",
    "roadmapNumber": 10,
    "cloudFocus": "GCP"
  },
  {
    "id": "path-ai-engineer-quantum-first-business-product-developer-platform-60-quantum-first-platform-roadmap",
    "title": "Quantum First Platform Roadmap",
    "category": "AI Engineering",
    "family": "Quantum First Business Product Developer Platform",
    "summary": "A documented Quantum First Platform Roadmap blueprint defining the experiment, modules, evaluation signals and known limitations inside Quantum First Business Product Developer Platform.",
    "technologies": [
      "Quantum ML"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/tree/main/60-quantum-first-platform-roadmap",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/60-quantum-first-platform-roadmap",
    "roadmapNumber": 10,
    "cloudFocus": "GCP"
  },
  {
    "id": "path-software-engineer-quantum-first-product-platform-10-quantum-first-product-platform",
    "title": "Quantum First Product Platform",
    "category": "Software Engineering",
    "family": "Quantum First Product Platform",
    "summary": "A product-platform blueprint translating Quantum First Product Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Python"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-Software-Engineer/Quantum-First-Product-Platform/tree/main/10-quantum-first-product-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Quantum-First-Product-Platform/10-quantum-first-product-platform",
    "roadmapNumber": 10,
    "cloudFocus": "GCP"
  },
  {
    "id": "path-software-engineer-quantum-foundations-software-platform-08-quantum-foundations-visual-platform",
    "title": "Quantum Foundations Software Platform",
    "category": "Software Engineering",
    "family": "Quantum Foundations Software Platform",
    "summary": "A product-platform blueprint translating Quantum Foundations Software Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Streamlit"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-Software-Engineer/Quantum-Foundations-Visual-Tools/tree/main/08-quantum-foundations-visual-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Quantum-Foundations-Software-Platform/08-quantum-foundations-visual-platform",
    "roadmapNumber": 8,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-51-quantum-kernel-benchmark-lab",
    "title": "Quantum Kernel Benchmark Lab",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "A documented Quantum Kernel Benchmark Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced Quantum Machine Learning Hybrid AI Quantum Platforms.",
    "technologies": [
      "Quantum ML"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/tree/main/51-quantum-kernel-benchmark-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/51-quantum-kernel-benchmark-lab",
    "roadmapNumber": 9,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-53-quantum-noise-and-qml-limitations-lab",
    "title": "Quantum Noise And QML Limitations Lab",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "A documented Quantum Noise And QML Limitations Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced Quantum Machine Learning Hybrid AI Quantum Platforms.",
    "technologies": [
      "Quantum ML"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/tree/main/53-quantum-noise-and-qml-limitations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/53-quantum-noise-and-qml-limitations-lab",
    "roadmapNumber": 9,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-quantum-computing-quantum-ai-foundations-47-quantum-optimization-foundations-lab",
    "title": "Quantum Optimization Foundations Lab",
    "category": "AI Engineering",
    "family": "Quantum Computing Quantum AI Foundations",
    "summary": "A documented Quantum Optimization Foundations Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Quantum Computing Quantum AI Foundations.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/tree/main/47-quantum-optimization-foundations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/47-quantum-optimization-foundations-lab",
    "roadmapNumber": 8,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-quantum-first-business-product-developer-platform-58-quantum-optimization-service-proposal",
    "title": "Quantum Optimization Service Proposal",
    "category": "AI Engineering",
    "family": "Quantum First Business Product Developer Platform",
    "summary": "A documented Quantum Optimization Service Proposal blueprint defining the experiment, modules, evaluation signals and known limitations inside Quantum First Business Product Developer Platform.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/tree/main/58-quantum-optimization-service-proposal",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/58-quantum-optimization-service-proposal",
    "roadmapNumber": 10,
    "cloudFocus": "GCP"
  },
  {
    "id": "path-software-engineer-rag-agentic-software-platform-05-rag-agent-workflow-platform",
    "title": "RAG Agent Workflow Platform",
    "category": "Software Engineering",
    "family": "RAG Agentic Software Platform",
    "summary": "A product-platform blueprint translating RAG Agent Workflow Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "LangGraph",
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-Software-Engineer/RAG-Agents-Tooling-Apps/tree/main/05-rag-agent-workflow-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/RAG-Agentic-Software-Platform/05-rag-agent-workflow-platform",
    "roadmapNumber": 5,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-26-rag-document-assistant",
    "title": "RAG Document Assistant",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "A documented RAG Document Assistant blueprint defining the experiment, modules, evaluation signals and known limitations inside LLMs RAG Agents Agentic Systems.",
    "technologies": [
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/tree/main/26-rag-document-assistant",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/26-rag-document-assistant",
    "roadmapNumber": 5,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-advanced-ml-backgrounds-15-recommender-system-api",
    "title": "Recommendation Studio — Top-N Recommender System API",
    "category": "AI Engineering",
    "family": "Advanced ML Backgrounds",
    "summary": "Recommendation Studio is an evidence-first ranking product for anonymous MovieLens-style interactions. It compares Popularity, genre Content, Item-kNN and PyTorch BPR matrix factorization under one chronological, full-catalog protocol, then serves known-user, cold-start, simil…",
    "technologies": [
      "React",
      "Python",
      "FastAPI",
      "Docker",
      "PyTorch"
    ],
    "signals": {
      "files": 672,
      "code": 70,
      "tests": 130,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/15-recommender-system-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/15-recommender-system-api",
    "roadmapNumber": 3,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-03-p15-recommendation-studio-1088743147874.us-central1.run.app",
    "apiUrl": "https://ai-03-p15-recommendation-studio-1088743147874.us-central1.run.app/docs"
  },
  {
    "id": "path-ai-engineer-reinforcement-learning-world-models-robotics-simulation-37-reinforcement-learning-foundations-gridworld",
    "title": "Reinforcement Learning Foundations Gridworld",
    "category": "AI Engineering",
    "family": "Reinforcement Learning World Models Robotics Simulation",
    "summary": "A documented Reinforcement Learning Foundations Gridworld blueprint defining the experiment, modules, evaluation signals and known limitations inside Reinforcement Learning World Models Robotics Simulation.",
    "technologies": [
      "Reinforcement Learning"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/tree/main/37-reinforcement-learning-foundations-gridworld",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/37-reinforcement-learning-foundations-gridworld",
    "roadmapNumber": 7,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-machine-learning-engineering-software-foundations-01-retail-demand-prediction-api",
    "title": "Retail Demand Prediction API",
    "category": "AI Engineering",
    "family": "Machine Learning Engineering Software Foundations",
    "summary": "A retail demand prediction service with validated data, temporal features, a classical baseline and API-ready inference.",
    "technologies": [
      "Python",
      "FastAPI",
      "Docker",
      "Pandas"
    ],
    "signals": {
      "files": 238,
      "code": 60,
      "tests": 100,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/01-retail-demand-prediction-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/01-retail-demand-prediction-api",
    "roadmapNumber": 1,
    "cloudFocus": "GCP"
  },
  {
    "id": "path-software-engineer-applied-ai-software-platform-01-retail-intelligence-platform",
    "title": "Retail Intelligence Platform",
    "category": "Software Engineering",
    "family": "Applied AI Software Platform",
    "summary": "An applied AI software platform combining demand insights, forecast evidence, decision-support workflows and sprint-based delivery.",
    "technologies": [
      "React",
      "Python",
      "FastAPI"
    ],
    "signals": {
      "files": 864,
      "code": 230,
      "tests": 210,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/Applied-ML-Software-Platform/tree/main/01-retail-intelligence-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Applied-AI-Software-Platform/01-retail-intelligence-platform",
    "roadmapNumber": 1,
    "cloudFocus": "GCP",
    "liveUrl": "https://sf-01-retail-intelligence-web-s3dd5t6azq-uc.a.run.app",
    "apiUrl": "https://sf-01-retail-intelligence-api-s3dd5t6azq-uc.a.run.app/docs"
  },
  {
    "id": "path-ai-engineer-computer-vision-multimodal-ai-edge-optimization-20-retail-shelf-object-detection",
    "title": "Retail Shelf Detection Console",
    "category": "AI Engineering",
    "family": "Computer Vision Multimodal AI Edge Optimization",
    "summary": "An evidence-first object-detection API and React console for dense retail shelf images. The product exposes bounding boxes, confidence and NMS thresholds, visible-object counts, AP metrics, count error, density slices and immutable model evidence.",
    "technologies": [
      "React",
      "Python",
      "FastAPI",
      "Docker",
      "PyTorch"
    ],
    "signals": {
      "files": 575,
      "code": 48,
      "tests": 101,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/20-retail-shelf-object-detection",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/20-retail-shelf-object-detection",
    "roadmapNumber": 4,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-reinforcement-learning-world-models-robotics-simulation-40-reward-design-and-agent-evaluation-lab",
    "title": "Reward Design And Agent Evaluation Lab",
    "category": "AI Engineering",
    "family": "Reinforcement Learning World Models Robotics Simulation",
    "summary": "A documented Reward Design And Agent Evaluation Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Reinforcement Learning World Models Robotics Simulation.",
    "technologies": [
      "Reinforcement Learning"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/tree/main/40-reward-design-and-agent-evaluation-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/40-reward-design-and-agent-evaluation-lab",
    "roadmapNumber": 7,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-software-engineer-rl-simulation-software-platform-07-rl-simulation-control-platform",
    "title": "Rl Simulation Control Platform",
    "category": "Software Engineering",
    "family": "RL Simulation Software Platform",
    "summary": "A product-platform blueprint translating Rl Simulation Control Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Docker",
      "Reinforcement Learning"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-Software-Engineer/RL-Simulation-Software-Platform/tree/main/07-rl-simulation-control-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/RL-Simulation-Software-Platform/07-rl-simulation-control-platform",
    "roadmapNumber": 7,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-embodied-ai-humanoid-robotics-android-systems-63-robot-task-planning-control-lab",
    "title": "Robot Task Planning Control Lab",
    "category": "AI Engineering",
    "family": "Embodied AI Humanoid Robotics Android Systems",
    "summary": "A documented Robot Task Planning Control Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Embodied AI Humanoid Robotics Android Systems.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/tree/main/63-robot-task-planning-control-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/63-robot-task-planning-control-lab",
    "roadmapNumber": 11,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-reinforcement-learning-world-models-robotics-simulation-42-robotics-simulation-control-lab",
    "title": "Robotics Simulation Control Lab",
    "category": "AI Engineering",
    "family": "Reinforcement Learning World Models Robotics Simulation",
    "summary": "A documented Robotics Simulation Control Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Reinforcement Learning World Models Robotics Simulation.",
    "technologies": [
      "Reinforcement Learning"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/tree/main/42-robotics-simulation-control-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/42-robotics-simulation-control-lab",
    "roadmapNumber": 7,
    "cloudFocus": "Azure"
  },
  {
    "id": "roadmap-71",
    "title": "Safety, Observability & Evaluation Suite",
    "category": "AI Engineering",
    "family": "Final AI Quantum Robotics Platform",
    "summary": "A cross-system plan for logs, metrics, traces, incident reports and a unified quality dashboard.",
    "technologies": [],
    "signals": {
      "files": 0,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Roadmap",
    "url": "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform",
    "featured": false,
    "accent": "orange",
    "roadmapNumber": 12,
    "cloudFocus": "Azure",
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/README.md"
  },
  {
    "id": "path-ai-engineer-machine-learning-engineering-software-foundations-02-sales-forecasting-dashboard-api",
    "title": "Sales Forecasting Dashboard API",
    "category": "AI Engineering",
    "family": "Machine Learning Engineering Software Foundations",
    "summary": "Applied machine-learning system that turns product-level sales history into auditable seven-day forecasts.",
    "technologies": [
      "Python",
      "FastAPI",
      "Streamlit",
      "PostgreSQL",
      "Docker"
    ],
    "signals": {
      "files": 477,
      "code": 147,
      "tests": 203,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/02-sales-forecasting-dashboard-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/02-sales-forecasting-dashboard-api",
    "roadmapNumber": 1,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-01-p02-sales-forecast-dashboard-1088743147874.us-central1.run.app",
    "apiUrl": "https://ai-01-p02-sales-forecast-api-1088743147874.us-central1.run.app/docs"
  },
  {
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-25-semantic-search-embeddings-api",
    "title": "Semantic Search Embeddings API",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "A documented Semantic Search Embeddings API blueprint defining the experiment, modules, evaluation signals and known limitations inside LLMs RAG Agents Agentic Systems.",
    "technologies": [
      "FastAPI",
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/tree/main/25-semantic-search-embeddings-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/25-semantic-search-embeddings-api",
    "roadmapNumber": 5,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-deep-learning-core-10-sequence-models-rnn-lstm-lab",
    "title": "Sequence Memory Lab",
    "category": "AI Engineering",
    "family": "Deep Learning Core",
    "summary": "An inspectable sequence-classification workspace for comparing vanilla RNN, LSTM, and GRU models on multivariate sensor windows. It joins reproducible PyTorch experiments, educational recurrent-cell labs, versioned inference bundles, a FastAPI service, and a six-view React int…",
    "technologies": [
      "React",
      "Python",
      "FastAPI",
      "Docker",
      "PyTorch"
    ],
    "signals": {
      "files": 664,
      "code": 73,
      "tests": 135,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/10-sequence-models-rnn-lstm-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/10-sequence-models-rnn-lstm-lab",
    "roadmapNumber": 2,
    "cloudFocus": "GCP"
  },
  {
    "id": "path-ai-engineer-computer-vision-multimodal-ai-edge-optimization-21-segmentation-quality-control-lab",
    "title": "Surface Quality Control Lab",
    "category": "AI Engineering",
    "family": "Computer Vision Multimodal AI Edge Optimization",
    "summary": "An evidence-first computer-vision laboratory that turns pixel-level surface-defect segmentation into an auditable piece-level inspection decision. The project implements a real compact U-Net, an OpenCV baseline, validation-only threshold selection, a FastAPI contract and a res…",
    "technologies": [
      "React",
      "Python",
      "FastAPI",
      "Docker"
    ],
    "signals": {
      "files": 475,
      "code": 62,
      "tests": 90,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/21-segmentation-quality-control-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/21-segmentation-quality-control-lab",
    "roadmapNumber": 4,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-deep-learning-core-12-transformer-from-architecture-foundations-lab",
    "title": "Transformer Architecture Lab",
    "category": "AI Engineering",
    "family": "Deep Learning Core",
    "summary": "An inspectable encoder-decoder Transformer built from PyTorch primitives, trained on controlled sequence-transduction tasks and delivered as a research-oriented web instrument.",
    "technologies": [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
      "PyTorch"
    ],
    "signals": {
      "files": 8894,
      "code": 68,
      "tests": 311,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/12-transformer-from-architecture-foundations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/12-transformer-from-architecture-foundations-lab",
    "roadmapNumber": 2,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-02-p12-transformer-architecture-lab-1088743147874.us-central1.run.app",
    "apiUrl": "https://ai-02-p12-transformer-architecture-lab-1088743147874.us-central1.run.app/docs"
  },
  {
    "id": "path-ai-engineer-advanced-ml-backgrounds-13-unsupervised-learning-lab-suite",
    "title": "Unsupervised Structure Lab",
    "category": "AI Engineering",
    "family": "Advanced ML Backgrounds",
    "summary": "A reproducible, label-blind laboratory for questioning structure in the sklearn Digits dataset and deterministic stress-test fixtures. The product compares centroid, hierarchical, density and probabilistic clustering plus explicit random and trivial baselines, while external l…",
    "technologies": [
      "React",
      "Python",
      "FastAPI",
      "scikit-learn"
    ],
    "signals": {
      "files": 2881,
      "code": 86,
      "tests": 685,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/13-unsupervised-learning-lab-suite",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/13-unsupervised-learning-lab-suite",
    "roadmapNumber": 3,
    "cloudFocus": "GCP"
  },
  {
    "id": "path-ai-engineer-generative-models-diffusion-systems-32-variational-autoencoder-lab",
    "title": "Variational Autoencoder Lab",
    "category": "AI Engineering",
    "family": "Generative Models Diffusion Systems",
    "summary": "A documented Variational Autoencoder Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Generative Models Diffusion Systems.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Generative-Models-Diffusion-Systems/tree/main/32-variational-autoencoder-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/32-variational-autoencoder-lab",
    "roadmapNumber": 6,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-50-variational-quantum-classifier-lab",
    "title": "Variational Quantum Classifier Lab",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "A documented Variational Quantum Classifier Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced Quantum Machine Learning Hybrid AI Quantum Platforms.",
    "technologies": [
      "Quantum ML"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/tree/main/50-variational-quantum-classifier-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/50-variational-quantum-classifier-lab",
    "roadmapNumber": 9,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-computer-vision-multimodal-ai-edge-optimization-22-video-understanding-basics-lab",
    "title": "Video Understanding Basics Lab",
    "category": "AI Engineering",
    "family": "Computer Vision Multimodal AI Edge Optimization",
    "summary": "A documented Video Understanding Basics Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Computer Vision Multimodal AI Edge Optimization.",
    "technologies": [
      "Computer Vision"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/22-video-understanding-basics-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/22-video-understanding-basics-lab",
    "roadmapNumber": 4,
    "cloudFocus": "AWS"
  },
  {
    "id": "path-software-engineer-vision-multimodal-ai-platform-04-vision-multimodal-ai-platform",
    "title": "Vision Multimodal AI Platform",
    "category": "Software Engineering",
    "family": "Vision Multimodal AI Platform",
    "summary": "Vision & Multimodal AI Platform es una aplicación de software aplicada a inteligencia artificial visual para mostrar clasificación de imágenes, detección de objetos y asistencia imagen-texto de forma clara, visual y responsable.",
    "technologies": [
      "Python",
      "PostgreSQL",
      "Docker",
      "PyTorch",
      "Computer Vision"
    ],
    "signals": {
      "files": 354,
      "code": 100,
      "tests": 41,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/Vision-Multimodal-Demos/tree/main/04-vision-multimodal-ai-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Vision-Multimodal-AI-Platform/04-vision-multimodal-ai-platform",
    "roadmapNumber": 4,
    "cloudFocus": "AWS",
    "liveUrl": "https://d12p4ywh8pvfjo.cloudfront.net",
    "apiUrl": "https://d12p4ywh8pvfjo.cloudfront.net/api/docs"
  },
  {
    "id": "university-01-portfolio-projects-lowcortisol-digital-health-platform-webdev-course-lowcortisol",
    "title": "Web Development Fundamentals Course",
    "category": "University",
    "family": "Technical Education",
    "summary": "An eight-lesson HTML and CSS learning path with reusable resources, lesson links and delivery-ready course material.",
    "technologies": [],
    "signals": {
      "files": 55,
      "code": 32,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Published course",
    "url": "https://github.com/JeanLoa/University/tree/main/01-portfolio-projects/lowcortisol-digital-health-platform/webdev-course-lowcortisol",
    "featured": false,
    "accent": "cyan",
    "path": "University/01-portfolio-projects/lowcortisol-digital-health-platform/webdev-course-lowcortisol"
  },
  {
    "id": "path-ai-engineer-reinforcement-learning-world-models-robotics-simulation-41-world-models-planning-mini-lab",
    "title": "World Models Planning Mini Lab",
    "category": "AI Engineering",
    "family": "Reinforcement Learning World Models Robotics Simulation",
    "summary": "A documented World Models Planning Mini Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Reinforcement Learning World Models Robotics Simulation.",
    "technologies": [
      "Reinforcement Learning"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/tree/main/41-world-models-planning-mini-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/41-world-models-planning-mini-lab",
    "roadmapNumber": 7,
    "cloudFocus": "Azure"
  }
];
