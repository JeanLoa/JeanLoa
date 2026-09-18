window.PORTFOLIO_PROJECTS = [
  {
    "id": "venturseed-alfalfa",
    "title": "Alfalfa",
    "eyebrow": "VenturSeed / AI Internship",
    "category": "Internships",
    "organization": "VenturSeed",
    "sequence": "01",
    "family": "AI Product Engineering Internship",
    "summary": "A lightweight bilingual AI assistant and inspectable coding agent that keeps model routing, evidence and workspace actions visible to the user.",
    "challenge": "Turn conversational and coding assistance into an efficient, explainable product without hiding tool use, evidence or workspace changes behind opaque automation.",
    "solution": "An Angular Studio and Python runtime connect grounded retrieval, web research, attachments, deliberate model routing and approval-gated reversible coding workflows.",
    "architecture": [
      "Angular Studio experience",
      "Python assistant runtime",
      "Grounded retrieval and model routing",
      "Approval-gated coding workflows"
    ],
    "capabilities": [
      "Bilingual conversations and cited retrieval",
      "Files, web research and persistent workspaces",
      "Beta, Sigma, Alfa and Omega routing",
      "Reviewable patches, validation and safe undo"
    ],
    "technologies": [
      "Angular",
      "TypeScript",
      "Python",
      "RAG",
      "LLMs",
      "Cloud Run"
    ],
    "signals": {
      "files": 4062,
      "code": 60,
      "tests": 93,
      "notebooks": 0
    },
    "status": "Active internship",
    "liveUrl": "https://alfalfa-1088743147874.us-central1.run.app/",
    "liveProvider": "GCP",
    "featured": false,
    "internship": true,
    "accent": "internship"
  },
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
    "liveProvider": "Render",
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
      "C#",
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
    "liveProvider": "Firebase",
    "apiProvider": "GCP",
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
      "Java",
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
    "liveProvider": "Firebase",
    "apiProvider": "GCP",
    "featured": true,
    "accent": "university",
    "image": "assets/electrocorp-home.jpg"
  },
  {
    "id": "path-software-engineer-advanced-ml-decision-platform-03-advanced-ml-decision-platform",
    "title": "Advanced ML Decision Platform",
    "category": "Software Engineering",
    "family": "Advanced ML Decision Platform",
    "summary": "An evidence-first application that turns advanced machine-learning outputs into inspectable, versioned decision-support experiences.",
    "technologies": [
      "Angular",
      "Java",
      "Python",
      "FastAPI",
      "Spring Boot",
      "PostgreSQL",
      "Docker"
    ],
    "signals": {
      "files": 4715,
      "code": 153,
      "tests": 30,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/Advanced-ML-Applied-Tools/tree/main/03-advanced-ml-decision-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Advanced-ML-Decision-Platform/03-advanced-ml-decision-platform",
    "roadmapNumber": 3,
    "cloudFocus": "GCP",
    "liveUrl": "https://sf-03-advanced-ml-web-1069123053246.us-central1.run.app/",
    "apiUrl": "https://sf-03-advanced-ml-api-1069123053246.us-central1.run.app/swagger-ui/index.html",
    "gallery": [
      {
        "src": "assets/project-captures/software-engineer/plan-03/03-advanced-ml-decision-platform/01-platform-overview.png",
        "alt": "Advanced ML Decision Platform overview with three evidence workspaces",
        "label": "Platform overview",
        "caption": "The Angular product connects clustering, explainable ranking and probabilistic forecasting under one explicit evidence boundary."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-03/03-advanced-ml-decision-platform/02-cluster-insight.png",
        "alt": "Cluster Insight deterministic K-Means workspace",
        "label": "Cluster workspace",
        "caption": "The full stack creates and persists a controlled K-Means execution with reproducible configuration controls."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-03/03-advanced-ml-decision-platform/05-cluster-evidence.png",
        "alt": "Cluster validation metrics PCA projection and comparative profiles",
        "label": "Cluster evidence",
        "caption": "Silhouette, Davies-Bouldin, Calinski-Harabasz and the PCA projection remain inspectable beside the completed run status."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-03/03-advanced-ml-decision-platform/03-recommendation-playground.png",
        "alt": "Explainable recommendation playground with ranked results and offline evidence",
        "label": "Recommendations",
        "caption": "A real recommendation query returns ranked catalog items, reason factors and bounded offline evaluation metrics."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-03/03-advanced-ml-decision-platform/04-probabilistic-forecast.png",
        "alt": "Probabilistic demand forecast viewer with quantile metrics",
        "label": "Forecast viewer",
        "caption": "The persisted forecast exposes P10, P50 and P90 uncertainty with a chronological baseline comparison and calibration warning."
      }
    ]
  },
  {
    "id": "path-ai-engineer-final-ai-quantum-robotics-platform-67-ai-quantum-robotics-platform-architecture",
    "title": "AI Quantum Robotics Platform Architecture",
    "category": "AI Engineering",
    "family": "Final AI Quantum Robotics Platform",
    "summary": "A documented AI Quantum Robotics Platform Architecture blueprint defining the experiment, modules, evaluation signals and known limitations inside Final AI Quantum Robotics Platform.",
    "technologies": [
      "RAG",
      "Quantum ML"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/tree/main/67-ai-quantum-robotics-platform-architecture",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/67-ai-quantum-robotics-platform-architecture",
    "roadmapNumber": 12,
    "cloudFocus": "Azure"
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
      "files": 161,
      "code": 104,
      "tests": 36,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/06-ai-software-foundations-platform",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/06-ai-software-foundations-platform",
    "roadmapNumber": 1,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-01-p06-ai-foundations-platform-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-01-p06-ai-foundations-platform-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-01/06-ai-software-foundations-platform/capture00001.png",
        "alt": "AI Software Foundations Platform operations overview and observed demand workflow",
        "label": "Operations overview",
        "caption": "The integrated platform exposes portfolio health and the observed-demand workflow in one surface."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/06-ai-software-foundations-platform/capture00244.png",
        "alt": "New AI decision form for inventory recommendation evidence",
        "label": "New decision",
        "caption": "A bounded decision form connects inventory inputs to the platform recommendation service."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/06-ai-software-foundations-platform/capture00487.png",
        "alt": "AI platform batch evaluation workspace with multiple inventory positions",
        "label": "Batch studio",
        "caption": "The batch workspace evaluates multiple inventory positions under the same governed contract."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/06-ai-software-foundations-platform/capture00973.png",
        "alt": "AI platform operations view after completing the product workflow",
        "label": "Evidence loop",
        "caption": "The operations view closes the loop between observations, recommendations and recorded evidence."
      }
    ]
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
      "files": 67,
      "code": 28,
      "tests": 8,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/14-anomaly-detection-monitor",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/14-anomaly-detection-monitor",
    "roadmapNumber": 3,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-03-p14-anomaly-detection-monitor-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-03-p14-anomaly-detection-monitor-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-03/14-anomaly-detection-monitor/01-overview.png",
        "alt": "Anomaly Operations Console overview with operational readiness and alert evidence",
        "label": "Operations overview",
        "caption": "The overview connects the selected detector, calibrated threshold, replay readiness and held-out evaluation evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/14-anomaly-detection-monitor/02-model-benchmark.png",
        "alt": "Anomaly detector benchmark comparing isolation forest and baseline evidence",
        "label": "Model benchmark",
        "caption": "The benchmark compares candidate detectors under the same chronological data split before threshold selection."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/14-anomaly-detection-monitor/03-threshold-lab.png",
        "alt": "Anomaly threshold lab with calibration curve and operating point",
        "label": "Threshold lab",
        "caption": "Calibration-only threshold selection makes the operating point and alert tradeoff explicit without tuning on test data."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/14-anomaly-detection-monitor/04-live-replay.png",
        "alt": "Live anomaly evidence replay with scored telemetry and active alerts",
        "label": "Live replay",
        "caption": "The real evidence replay streams timestamped scores through the selected threshold and surfaces alert candidates for review."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/14-anomaly-detection-monitor/05-evaluation-report.png",
        "alt": "Held out anomaly evaluation report with precision recall F1 and PR AUC",
        "label": "Evaluation report",
        "caption": "The held-out report records precision, recall, F1 and PR-AUC alongside protocol checks and known operational limitations."
      }
    ]
  },
  {
    "id": "path-ai-engineer-reinforcement-learning-world-models-robotics-simulation-40-robotics-navigation-simulation",
    "title": "Asteria Robot Navigation Mission Control",
    "category": "AI Engineering",
    "family": "Reinforcement Learning World Models Robotics Simulation",
    "summary": "Project 40 implements an auditable, simulation-only navigation mission-control system for a differential-drive robot. It owns its scenario registry, deterministic mission evaluator, safety supervisor, API, web console, ROS workspace contracts and benchmark evidence; it does no…",
    "technologies": [
      "Next.js",
      "Python"
    ],
    "signals": {
      "files": 91,
      "code": 34,
      "tests": 7,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/tree/main/40-robotics-navigation-simulation",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/40-robotics-navigation-simulation",
    "roadmapNumber": 7,
    "cloudFocus": "Azure",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-07/40-robotics-navigation-simulation/01-overview.jpg",
        "alt": "Robotics navigation simulation overview",
        "label": "Overview",
        "caption": "The Asteria workspace presents the simulated mission, planners and safety boundary."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/40-robotics-navigation-simulation/02-map-route.jpg",
        "alt": "Robotics navigation map and route planner",
        "label": "Map and route",
        "caption": "Map geometry, route intent and obstacles share one inspectable planning surface."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/40-robotics-navigation-simulation/03-mission-run.jpg",
        "alt": "Robotics simulated mission run",
        "label": "Mission run",
        "caption": "Planner and controller behavior is visible across the complete simulated mission."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/40-robotics-navigation-simulation/04-safety.jpg",
        "alt": "Robotics navigation safety supervisor",
        "label": "Safety",
        "caption": "Safety supervision, stop conditions and intervention evidence remain explicit."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/40-robotics-navigation-simulation/05-benchmark.jpg",
        "alt": "Robotics planner controller benchmark",
        "label": "Benchmark",
        "caption": "Four planner-controller pairs are compared under matched simulation scenarios."
      }
    ]
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
      "files": 110,
      "code": 38,
      "tests": 110,
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
    "apiUrl": "https://ai-03-p18-automl-meta-benchmark-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-03/18-automl-meta-learning-benchmark-lab/01-benchmark-overview.png",
        "alt": "Atlas AutoML benchmark qualification overview and evidence boundary",
        "label": "Benchmark overview",
        "caption": "The overview accounts for datasets, strategies, paired seeds and every qualification block while clearly limiting the claim scope."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/18-automl-meta-learning-benchmark-lab/02-search-explorer.png",
        "alt": "AutoML anytime search trajectories and selected pipeline outcomes",
        "label": "Search explorer",
        "caption": "Raw incumbent trajectories share measured fit time, keeping the winning pipeline traceable to its ordered trial ledger."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/18-automl-meta-learning-benchmark-lab/03-strategy-comparison.png",
        "alt": "AutoML search strategy comparison under equal resource space",
        "label": "Strategy comparison",
        "caption": "Default, random, cold-search and meta-warm-start strategies are compared under a common qualification budget and task matrix."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/18-automl-meta-learning-benchmark-lab/04-meta-learning.png",
        "alt": "LODO meta-learning lab with target exclusion and source task portfolio",
        "label": "Meta-learning lab",
        "caption": "The leave-one-dataset-out flow excludes the target before scaling, neighbor retrieval and source-configuration selection."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/18-automl-meta-learning-benchmark-lab/05-resource-failure.png",
        "alt": "AutoML resource and failure lab with trial accounting and measured compute",
        "label": "Resource and failure lab",
        "caption": "Completed, failed, timed-out and pruned trials remain explicit beside measured fit time and budget utilization."
      }
    ]
  },
  {
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-29-agent-security-redteam-lab",
    "title": "BastionOps Agent Security Range",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "Project 29 is an authorized, synthetic red-team laboratory for a tool-using agent. It compares a vulnerable control (V0), a prompt-only control (V1) and a policy-enforced control (V2) against paired adversarial and benign cases. The product surface is the Agent Security Comman…",
    "technologies": [
      "React",
      "Python",
      "FastAPI",
      "Docker",
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 139,
      "code": 59,
      "tests": 18,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/tree/main/29-agent-security-redteam-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/29-agent-security-redteam-lab",
    "roadmapNumber": 5,
    "cloudFocus": "AWS",
    "liveUrl": "https://b7v6pqvatvqqx7a6pzn774xfay0mseht.lambda-url.us-east-1.on.aws/app/",
    "apiUrl": "https://b7v6pqvatvqqx7a6pzn774xfay0mseht.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-05/29-agent-security-redteam-lab/01-overview.jpg",
        "alt": "BastionOps defensive agent security overview",
        "label": "Overview",
        "caption": "The synthetic range compares vulnerable, prompt-only and policy-enforced controls."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/29-agent-security-redteam-lab/02-campaigns.jpg",
        "alt": "BastionOps paired security campaigns",
        "label": "Campaigns",
        "caption": "Sanitized attacks and benign controls are paired across twelve threat families."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/29-agent-security-redteam-lab/03-policy.jpg",
        "alt": "BastionOps deny-by-default policy controls",
        "label": "Policy",
        "caption": "Versioned Rego rules constrain identity, capabilities, effects and egress."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/29-agent-security-redteam-lab/04-approvals.jpg",
        "alt": "BastionOps exact payload approval flow",
        "label": "Approvals",
        "caption": "Typed write effects bind exact payload approval to a durable event trail."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/29-agent-security-redteam-lab/05-evaluation.jpg",
        "alt": "BastionOps honest security evaluation boundary",
        "label": "Evaluation",
        "caption": "Deterministic Track A is separated from the unexecuted real-model Track B."
      }
    ]
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
      "files": 87,
      "code": 51,
      "tests": 8,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/16-causal-promotion-effect-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/16-causal-promotion-effect-lab",
    "roadmapNumber": 3,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-03-p16-causal-promotion-lab-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-03-p16-causal-promotion-lab-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-03/16-causal-promotion-effect-lab/01-study-overview.png",
        "alt": "Causal Promotion evidence lab study overview with locked protocol",
        "label": "Study overview",
        "caption": "The study overview keeps the eligible population, primary estimand, artifact version and synthetic-evidence boundary together."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/16-causal-promotion-effect-lab/02-average-effects.png",
        "alt": "Average promotion effects forest plot across four causal estimators",
        "label": "Average effects",
        "caption": "Naive, adjusted, weighted and doubly robust estimates are compared with their uncertainty under the same locked protocol."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/16-causal-promotion-effect-lab/03-heterogeneity.png",
        "alt": "Promotion effect heterogeneity analysis with subgroup evidence",
        "label": "Heterogeneity",
        "caption": "Subgroup effects and uncertainty expose where estimated lift varies without presenting exploratory differences as proof."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/16-causal-promotion-effect-lab/04-policy-simulator.png",
        "alt": "Executed ranked policy simulation with cost capacity and estimated net value",
        "label": "Policy simulator",
        "caption": "A real policy request applies contact cost and capacity, then compares the ranked decision with treat-none, treat-all and random baselines."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/16-causal-promotion-effect-lab/05-robustness.png",
        "alt": "Causal robustness workspace with recovery placebo subset and clipping checks",
        "label": "Robustness checks",
        "caption": "Known-truth recovery, placebo treatment, subset stability and propensity clipping attempt to refute the estimate before reuse."
      }
    ]
  },
  {
    "id": "path-ai-engineer-machine-learning-engineering-software-foundations-03-classical-model-comparison-suite",
    "title": "Classical Model Comparison Suite",
    "category": "AI Engineering",
    "family": "Machine Learning Engineering Software Foundations",
    "summary": "A reproducible and configurable laboratory for comparing classical machine learning models under one explicit experimental protocol.",
    "technologies": [
      "Python",
      "Docker"
    ],
    "signals": {
      "files": 581,
      "code": 91,
      "tests": 376,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/03-classical-model-comparison-suite",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/03-classical-model-comparison-suite",
    "roadmapNumber": 1,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-01-p03-model-comparison-suite-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-01-p03-model-comparison-suite-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-01/03-classical-model-comparison-suite/01-overview.png",
        "alt": "Classical Model Comparison Suite overview with committed experiment evidence",
        "label": "Evidence overview",
        "caption": "The opening view frames classification and regression comparison as a read-only evidence workflow."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/03-classical-model-comparison-suite/02-classification.png",
        "alt": "Classification comparison view under shared stratified folds",
        "label": "Classification",
        "caption": "The classification view identifies the registered dataset, shared folds and immutable official run."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/03-classical-model-comparison-suite/03-regression.png",
        "alt": "Regression model comparison view with deterministic five fold protocol",
        "label": "Regression",
        "caption": "The regression view presents error comparison within the recorded dataset and deterministic fold contract."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/03-classical-model-comparison-suite/04-protocol.png",
        "alt": "Model comparison protocol and provenance view",
        "label": "Protocol",
        "caption": "The protocol view makes shared folds, pipeline boundaries, baselines, ranking policy and exclusions explicit."
      }
    ]
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
      "files": 148,
      "code": 74,
      "tests": 11,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/09-cnn-foundations-image-classifier",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/09-cnn-foundations-image-classifier",
    "roadmapNumber": 2,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-02-p09-cnn-vision-lab-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-02-p09-cnn-vision-lab-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-02/09-cnn-foundations-image-classifier/01-overview.png",
        "alt": "CNN Vision Lab overview with model topology and inference status",
        "label": "Vision lab overview",
        "caption": "The overview connects the FashionMNIST input contract, CNN topology and inference-only serving boundary."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/09-cnn-foundations-image-classifier/02-classification-result.png",
        "alt": "CNN Vision Lab classification result for an official ankle boot sample",
        "label": "Classification",
        "caption": "A held-out gallery sample returns its real top prediction, probabilities, model version and runtime evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/09-cnn-foundations-image-classifier/03-convolution-lab.png",
        "alt": "Interactive convolution lab with input kernel and feature response matrices",
        "label": "Convolution lab",
        "caption": "The spatial lab exposes the input, selected kernel and computed response with exact PyTorch parity."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/09-cnn-foundations-image-classifier/04-feature-maps.png",
        "alt": "CNN intermediate feature maps captured for a controlled test sample",
        "label": "Feature maps",
        "caption": "Whitelisted conv1 activations make intermediate spatial responses inspectable without claiming causality."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/09-cnn-foundations-image-classifier/05-evaluation.png",
        "alt": "CNN evaluation dashboard with held out metrics and confusion evidence",
        "label": "Evaluation",
        "caption": "Held-out accuracy, macro F1, the MLP baseline and per-class evidence share one explicit evaluation contract."
      }
    ]
  },
  {
    "id": "path-ai-engineer-generative-models-diffusion-systems-35-controlnet-guided-generation-lab",
    "title": "Control Guidance Studio",
    "category": "AI Engineering",
    "family": "Generative Models Diffusion Systems",
    "summary": "Project 35 of the AI Engineer path is an evidence-first laboratory for spatially controlled text-to-image generation. It compares an uncontrolled Stable Diffusion 1.5 baseline with Canny-conditioned ControlNet runs while keeping prompt, seed, scheduler and inference budget fixed.",
    "technologies": [
      "Docker"
    ],
    "signals": {
      "files": 76,
      "code": 31,
      "tests": 10,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Generative-Models-Diffusion-Systems/tree/main/35-controlnet-guided-generation-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/35-controlnet-guided-generation-lab",
    "roadmapNumber": 6,
    "cloudFocus": "AWS",
    "liveUrl": "https://qnzsgo7h6nfsmfecldfowj55uy0zxkib.lambda-url.us-east-1.on.aws/",
    "apiUrl": "https://qnzsgo7h6nfsmfecldfowj55uy0zxkib.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-06/35-controlnet-guided-generation-lab/01-overview.jpg",
        "alt": "Control Guidance Studio evidence overview",
        "label": "Overview",
        "caption": "The real observatory states its local evidence and no-browser-inference boundary."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/35-controlnet-guided-generation-lab/02-structure-lab.jpg",
        "alt": "ControlNet structure protocol controls",
        "label": "Structure lab",
        "caption": "Protocol controls expose the spatial conditioning contract without starting inference."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/35-controlnet-guided-generation-lab/03-scale-matrix.jpg",
        "alt": "ControlNet fixed scale comparison matrix",
        "label": "Scale matrix",
        "caption": "Fixed comparisons make conditioning scale and structural trade-offs inspectable."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/35-controlnet-guided-generation-lab/04-evaluation.jpg",
        "alt": "ControlNet measured trade-off evaluation",
        "label": "Evaluation",
        "caption": "Measured and missing evidence remain clearly separated in the evaluation surface."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/35-controlnet-guided-generation-lab/05-research-cards.jpg",
        "alt": "ControlNet identity and safety research cards",
        "label": "Research cards",
        "caption": "Model identity, safety and execution limits stay visible beside the protocol."
      }
    ]
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
      "files": 183,
      "code": 107,
      "tests": 31,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/04-customer-segmentation-and-churn-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/04-customer-segmentation-and-churn-api",
    "roadmapNumber": 1,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-01-p04-customer-intel-dashboard-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-01-p04-customer-intel-api-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-01/04-customer-segmentation-and-churn-api/capture00001.png",
        "alt": "Customer Signal Desk landing surface for segmentation and churn analysis",
        "label": "System overview",
        "caption": "The opening view frames segmentation and churn as separate signals for one customer record."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/04-customer-segmentation-and-churn-api/capture00132.png",
        "alt": "Customer account form collecting profile service and billing variables",
        "label": "Account input",
        "caption": "The input surface groups customer profile, service and billing evidence before inference."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/04-customer-segmentation-and-churn-api/capture00394.png",
        "alt": "Customer account form populated for segmentation and churn scoring",
        "label": "Prepared record",
        "caption": "A complete account state is prepared against the validated segmentation and churn contract."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/04-customer-segmentation-and-churn-api/capture00525.png",
        "alt": "Customer intelligence result showing segment assignment and churn probability",
        "label": "Combined result",
        "caption": "The response pairs an assigned segment with an estimated churn probability and review context."
      }
    ]
  },
  {
    "id": "path-software-engineer-deep-learning-software-lab-platform-02-deep-learning-visual-lab-platform",
    "title": "Deep Learning Visual Lab Platform",
    "category": "Software Engineering",
    "family": "Deep Learning Software Lab Platform",
    "summary": "Project 02 of the Software Engineer path. Axon is a full-stack educational platform for inspecting registered PyTorch models through bounded FastAPI contracts and responsive Next.js experiences.",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
      "PyTorch"
    ],
    "signals": {
      "files": 222,
      "code": 121,
      "tests": 38,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/Deep-Learning-Software-Lab-Platform/tree/main/02-deep-learning-visual-lab-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Deep-Learning-Software-Lab-Platform/02-deep-learning-visual-lab-platform",
    "roadmapNumber": 2,
    "cloudFocus": "GCP",
    "liveUrl": "https://sf-02-deep-learning-visual-lab-web-s3dd5t6azq-uc.a.run.app/",
    "apiUrl": "https://sf-02-deep-learning-visual-lab-api-s3dd5t6azq-uc.a.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/software-engineer/plan-02/02-deep-learning-visual-lab-platform/desktop-1440.png",
        "alt": "Deep Learning Visual Lab desktop interface at 1440 pixels",
        "label": "Desktop lab",
        "caption": "The full desktop workspace exposes the deep-learning experiment and its visual evidence."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-02/02-deep-learning-visual-lab-platform/tablet-768.png",
        "alt": "Deep Learning Visual Lab responsive tablet interface",
        "label": "Tablet layout",
        "caption": "The tablet layout preserves the experiment hierarchy and primary controls at a narrower width."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-02/02-deep-learning-visual-lab-platform/mobile-viewport-375.png",
        "alt": "Deep Learning Visual Lab responsive mobile interface",
        "label": "Mobile layout",
        "caption": "The mobile view demonstrates the same workflow at a narrow viewport without hiding its primary controls."
      }
    ]
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
      "files": 110,
      "code": 48,
      "tests": 13,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/17-probabilistic-demand-forecasting",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/17-probabilistic-demand-forecasting",
    "roadmapNumber": 3,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-03-p17-demand-uncertainty-studio-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-03-p17-demand-uncertainty-studio-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-03/17-probabilistic-demand-forecasting/01-forecast-explorer.png",
        "alt": "Demand uncertainty forecast explorer with 24 hour calibrated interval evidence",
        "label": "Forecast explorer",
        "caption": "The forecast explorer presents nested quantiles, realized demand and a locked-test origin as one operational evidence view."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/17-probabilistic-demand-forecasting/02-model-comparison.png",
        "alt": "Probabilistic demand model comparison across point and interval metrics",
        "label": "Model comparison",
        "caption": "Five model families share the same locked test, balancing WIS, coverage, interval width and deployable feature availability."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/17-probabilistic-demand-forecasting/03-calibration-lab.png",
        "alt": "Demand interval calibration lab with coverage by forecast horizon",
        "label": "Calibration lab",
        "caption": "Coverage and interval width travel together, with post-development CQR calibration and conditional horizon diagnostics."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/17-probabilistic-demand-forecasting/04-decision-simulator.png",
        "alt": "Executed capacity decision simulation using underage and overage costs",
        "label": "Decision simulator",
        "caption": "The executed scenario translates asymmetric costs into a P80 capacity rule and compares its backtest cost with decision baselines."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/17-probabilistic-demand-forecasting/05-data-availability.png",
        "alt": "Demand forecasting feature availability and leakage guard contracts",
        "label": "Data availability",
        "caption": "The serving contract separates features known at the forecast origin from oracle inputs that cannot be selected in production."
      }
    ]
  },
  {
    "id": "path-ai-engineer-generative-models-diffusion-systems-32-diffusion-from-scratch-mini-lab",
    "title": "Diffusion Process Observatory",
    "category": "AI Engineering",
    "family": "Generative Models Diffusion Systems",
    "summary": "Project 32 implements a compact Denoising Diffusion Probabilistic Model from its equations to a reproducible DDPM/DDIM evidence workflow. The runner uses repository-owned PyTorch schedules, forward/reverse equations, time-conditioned U-Net, EMA and sampler contracts. No pretra…",
    "technologies": [
      "React",
      "Python",
      "PyTorch"
    ],
    "signals": {
      "files": 103,
      "code": 60,
      "tests": 15,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Generative-Models-Diffusion-Systems/tree/main/32-diffusion-from-scratch-mini-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/32-diffusion-from-scratch-mini-lab",
    "roadmapNumber": 6,
    "cloudFocus": "AWS",
    "liveUrl": "https://vgmeex6prckdnak3tlphrf3l2u0ipxvb.lambda-url.us-east-1.on.aws/",
    "apiUrl": "https://vgmeex6prckdnak3tlphrf3l2u0ipxvb.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-06/32-diffusion-from-scratch-mini-lab/01-overview.jpg",
        "alt": "Diffusion Process Observatory overview",
        "label": "Overview",
        "caption": "Repository-owned equations, U-Net, EMA and samplers form the complete workflow."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/32-diffusion-from-scratch-mini-lab/02-schedules.jpg",
        "alt": "Linear and cosine diffusion schedule view",
        "label": "Schedules",
        "caption": "Beta, alpha-bar and signal-to-noise tensors make the forward process inspectable."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/32-diffusion-from-scratch-mini-lab/03-samplers.jpg",
        "alt": "DDPM and DDIM sampler comparison",
        "label": "Samplers",
        "caption": "DDPM and DDIM consume the same immutable checkpoint and seed contract."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/32-diffusion-from-scratch-mini-lab/04-evidence.jpg",
        "alt": "Diffusion content-addressed run evidence",
        "label": "Evidence",
        "caption": "Quality proxies, latency, checkpoint identity and resume state remain connected."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/32-diffusion-from-scratch-mini-lab/05-protocol.jpg",
        "alt": "Diffusion smoke and mini protocol boundary",
        "label": "Protocol",
        "caption": "Smoke qualification is visibly separated from the required six-run mini matrix."
      }
    ]
  },
  {
    "id": "path-ai-engineer-computer-vision-multimodal-ai-edge-optimization-22-document-vision-ocr-extractor",
    "title": "Document Extraction Workbench",
    "category": "AI Engineering",
    "family": "Computer Vision Multimodal AI Edge Optimization",
    "summary": "Project 22 of the AI Engineer path is an evidence-first document intelligence product. It turns a single-page receipt into localized OCR lines, normalized business fields and an auditable extraction record without hiding uncertainty behind a polished interface.",
    "technologies": [
      "React",
      "Python",
      "FastAPI",
      "Docker"
    ],
    "signals": {
      "files": 104,
      "code": 46,
      "tests": 11,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/22-document-vision-ocr-extractor",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/22-document-vision-ocr-extractor",
    "roadmapNumber": 4,
    "cloudFocus": "AWS",
    "liveUrl": "https://4pmxw3wqyo5c3aajxegkdox6bm0lmgrn.lambda-url.us-east-1.on.aws/app/",
    "apiUrl": "https://4pmxw3wqyo5c3aajxegkdox6bm0lmgrn.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-04/22-document-vision-ocr-extractor/01-overview.png",
        "alt": "LedgerLens document extraction evidence workbench overview",
        "label": "Document overview",
        "caption": "The workbench ties OCR, key-field extraction, normalization and human review to a sealed qualification bundle."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/22-document-vision-ocr-extractor/02-extraction.png",
        "alt": "Executed receipt extraction with localized company address date and total",
        "label": "Live extraction",
        "caption": "A real sealed receipt request keeps localized regions, raw OCR, normalized fields, confidence and operator edits together."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/22-document-vision-ocr-extractor/03-reading-order.png",
        "alt": "Document OCR reading order and line evidence inspection",
        "label": "Reading order",
        "caption": "Recognized lines preserve their spatial and reading sequence so extracted values can be traced back to document evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/22-document-vision-ocr-extractor/04-evaluation.png",
        "alt": "OCR and document extraction evaluation with separate reader and extractor metrics",
        "label": "Evaluation",
        "caption": "Character error, word error, line exact match and document exact match remain separate rather than collapsing into one score."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/22-document-vision-ocr-extractor/05-error-gallery.png",
        "alt": "Document extraction failure gallery with missing address field",
        "label": "Error gallery",
        "caption": "The qualification failure stays visible with expected value, missing prediction, confidence and review-required decision."
      }
    ]
  },
  {
    "id": "path-ai-engineer-reinforcement-learning-world-models-robotics-simulation-38-dqn-control-dashboard",
    "title": "DQN Control Observatory",
    "category": "AI Engineering",
    "family": "Reinforcement Learning World Models Robotics Simulation",
    "summary": "Project 38 of the AI Engineer path: an evidence-first Deep Q-Learning laboratory for CartPole-v1 and Acrobot-v1. The repository implements DQN and Double DQN from first principles, compares them with declared baselines, preserves reproducible checkpoints, and exposes immutable…",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "PyTorch",
      "GitHub Actions"
    ],
    "signals": {
      "files": 647,
      "code": 102,
      "tests": 217,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/tree/main/38-dqn-control-dashboard",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/38-dqn-control-dashboard",
    "roadmapNumber": 7,
    "cloudFocus": "Azure",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-07/38-dqn-control-dashboard/01-overview.jpg",
        "alt": "DQN control dashboard experiment overview",
        "label": "Overview",
        "caption": "The control surface summarizes the registered environment, DQN variant and reproducibility boundary."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/38-dqn-control-dashboard/02-learning-curves.jpg",
        "alt": "DQN and Double DQN learning curves",
        "label": "Learning curves",
        "caption": "Seed-level returns and stability trends remain visible without collapsing training and evaluation."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/38-dqn-control-dashboard/03-q-diagnostics.jpg",
        "alt": "DQN action-value diagnostics",
        "label": "Q diagnostics",
        "caption": "Action values, targets and approximation health are exposed for model diagnosis."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/38-dqn-control-dashboard/04-episode-replay.jpg",
        "alt": "DQN episode replay workspace",
        "label": "Episode replay",
        "caption": "A complete desktop replay connects actions, rewards and terminal semantics."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/38-dqn-control-dashboard/05-evidence.jpg",
        "alt": "DQN experiment evidence registry",
        "label": "Evidence",
        "caption": "Seeds, ablations, checkpoints and evaluation artifacts remain traceable."
      }
    ]
  },
  {
    "id": "path-ai-engineer-computer-vision-multimodal-ai-edge-optimization-24-edge-vision-optimization-lab",
    "title": "Edge Vision Benchmark Console",
    "category": "AI Engineering",
    "family": "Computer Vision Multimodal AI Edge Optimization",
    "summary": "Project 24 closes Plan 4 with an evidence-first laboratory for visual inference optimization. It compares quality, latency, artifact size, sparsity and runtime parity without treating a smaller file, more zero weights or a successful export as automatic acceleration.",
    "technologies": [
      "React",
      "Python",
      "FastAPI",
      "Docker",
      "PyTorch",
      "NumPy"
    ],
    "signals": {
      "files": 142,
      "code": 55,
      "tests": 17,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/24-edge-vision-optimization-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/24-edge-vision-optimization-lab",
    "roadmapNumber": 4,
    "cloudFocus": "AWS",
    "liveUrl": "https://d1sb1ox4sh9pff.cloudfront.net/app/",
    "apiUrl": "https://d1sb1ox4sh9pff.cloudfront.net/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-04/24-edge-vision-optimization-lab/01-decision-desk.png",
        "alt": "EdgeForge edge inference optimization decision desk",
        "label": "Decision desk",
        "caption": "The decision desk compares quality, latency, size and sparsity under one recorded CPU environment without naming a fake universal winner."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/24-edge-vision-optimization-lab/02-inference-lab.png",
        "alt": "Executed edge classification inference with approved runtime variant",
        "label": "Inference lab",
        "caption": "A real qualification fixture returns ranked classes and request latency using an explicitly approved PyTorch FP32 runtime."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/24-edge-vision-optimization-lab/03-variant-registry.png",
        "alt": "Edge vision runtime variant registry with artifact approval states",
        "label": "Variant registry",
        "caption": "Runtime families, precision, artifact size and approval state stay visible before any benchmark comparison is reused."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/24-edge-vision-optimization-lab/04-benchmark-matrix.png",
        "alt": "Edge vision benchmark matrix comparing quality latency size and sparsity",
        "label": "Benchmark matrix",
        "caption": "All variants share the same host, warmup and iteration contract while macro F1, Top-1, P50, P95, size and sparsity remain separate."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/24-edge-vision-optimization-lab/05-evidence-room.png",
        "alt": "Edge inference evidence room with host parity and benchmark controls",
        "label": "Evidence room",
        "caption": "Measured host, runtime parity, benchmark controls and failed eligibility checks determine whether an exported artifact is acceptable."
      }
    ]
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
    "id": "path-ai-engineer-final-ai-quantum-robotics-platform-70-embodied-robotics-simulation-platform",
    "title": "Embodied Robotics Simulation Platform",
    "category": "AI Engineering",
    "family": "Final AI Quantum Robotics Platform",
    "summary": "A documented Embodied Robotics Simulation Platform blueprint defining the experiment, modules, evaluation signals and known limitations inside Final AI Quantum Robotics Platform.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/tree/main/70-embodied-robotics-simulation-platform",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/70-embodied-robotics-simulation-platform",
    "roadmapNumber": 12,
    "cloudFocus": "Azure"
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
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-26-enterprise-rag-with-citations",
    "title": "Enterprise Citation Console",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "Project 26 of the AI Engineer path is an authorization-first, multi-tenant RAG qualification system. It reduces the corpus to evidence visible to the authenticated identity before retrieval or reranking, produces claim-linked citations, verifies each source structurally and ab…",
    "technologies": [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 96,
      "code": 43,
      "tests": 9,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/tree/main/26-enterprise-rag-with-citations",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/26-enterprise-rag-with-citations",
    "roadmapNumber": 5,
    "cloudFocus": "AWS",
    "liveUrl": "https://fq6bvzn7ktxvthyeje6prdsc7y0shejo.lambda-url.us-east-1.on.aws/app/",
    "apiUrl": "https://fq6bvzn7ktxvthyeje6prdsc7y0shejo.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-05/26-enterprise-rag-with-citations/01-command-center.jpg",
        "alt": "Enterprise RAG authorization-first command center",
        "label": "Command center",
        "caption": "The connected workspace exposes authorized corpus state and qualification context."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/26-enterprise-rag-with-citations/02-knowledge-catalog.jpg",
        "alt": "Enterprise RAG governed knowledge catalog",
        "label": "Knowledge catalog",
        "caption": "Only current authorized document versions are visible in the governed catalog."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/26-enterprise-rag-with-citations/03-governed-answer.jpg",
        "alt": "Enterprise RAG answer with verified citations",
        "label": "Governed answer",
        "caption": "A real request returns claim-linked citations against the authorized corpus."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/26-enterprise-rag-with-citations/04-retrieval-inspector.jpg",
        "alt": "Enterprise RAG authorized retrieval inspector",
        "label": "Retrieval inspector",
        "caption": "Candidate authorization, reranking and audit evidence remain visible together."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/26-enterprise-rag-with-citations/05-evaluation.jpg",
        "alt": "Enterprise RAG qualification evaluation",
        "label": "Evaluation",
        "caption": "Development authorization probes are shown without implying that the locked final was run."
      }
    ]
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
    "id": "path-ai-engineer-final-ai-quantum-robotics-platform-72-final-ai-quantum-robotics-platform-demo",
    "title": "Final AI Quantum Robotics Platform Demo",
    "category": "AI Engineering",
    "family": "Final AI Quantum Robotics Platform",
    "summary": "A documented Final AI Quantum Robotics Platform Demo blueprint defining the experiment, modules, evaluation signals and known limitations inside Final AI Quantum Robotics Platform.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/tree/main/72-final-ai-quantum-robotics-platform-demo",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/72-final-ai-quantum-robotics-platform-demo",
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
    "id": "path-software-engineer-generative-ai-control-platform-06-generative-ai-control-platform",
    "title": "Generative AI Control Platform",
    "category": "Software Engineering",
    "family": "Generative AI Control Platform",
    "summary": "Project 6 of the Software Engineer path converts controlled Generative AI evidence into a product with explicit contracts, durable metadata and responsible interpretation boundaries.",
    "technologies": [
      "Python",
      "ASP.NET Core",
      "PostgreSQL",
      "Docker",
      "PyTorch"
    ],
    "signals": {
      "files": 3234,
      "code": 124,
      "tests": 372,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/Generative-AI-Control-Platform/tree/main/06-generative-ai-control-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Generative-AI-Control-Platform/06-generative-ai-control-platform",
    "roadmapNumber": 6,
    "cloudFocus": "AWS",
    "liveUrl": "https://d4nv0cxcyxmp4.cloudfront.net/",
    "apiUrl": "https://d4nv0cxcyxmp4.cloudfront.net/swagger/index.html",
    "gallery": [
      {
        "src": "assets/project-captures/software-engineer/plan-06/06-generative-ai-control-platform/01-overview.jpg",
        "alt": "Generative AI Control Platform overview with VAE GAN and diffusion families",
        "label": "Platform overview",
        "caption": "The overview connects three model families while keeping registered evidence separate from real execution claims."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-06/06-generative-ai-control-platform/02-family-comparison.jpg",
        "alt": "Generative AI Control Platform VAE and GAN mechanism comparison",
        "label": "Family comparison",
        "caption": "The comparison surface contrasts VAE and GAN mechanisms, published evidence and interpretation limits without creating a leaderboard."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-06/06-generative-ai-control-platform/03-safety-boundary.jpg",
        "alt": "Generative AI Control Platform safety constraints and remaining boundaries",
        "label": "Safety boundary",
        "caption": "Risk, control and remaining limitation stay together for conceptual evidence, conditioning, metrics and training data."
      }
    ]
  },
  {
    "id": "path-ai-engineer-generative-models-diffusion-systems-36-generative-media-safety-eval-suite",
    "title": "Generative Media Safety Evaluation Suite",
    "category": "AI Engineering",
    "family": "Generative Models Diffusion Systems",
    "summary": "Project 36 closes Plan 6 with a reproducible, policy-first system for evaluating image generators. It measures safety and utility together, preserves uncertainty, routes ambiguous cases to human review, and emits a traceable release decision without exposing restricted prompts…",
    "technologies": [
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "PyTorch"
    ],
    "signals": {
      "files": 108,
      "code": 53,
      "tests": 19,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Generative-Models-Diffusion-Systems/tree/main/36-generative-media-safety-eval-suite",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/36-generative-media-safety-eval-suite",
    "roadmapNumber": 6,
    "cloudFocus": "AWS",
    "liveUrl": "https://iuj4ao33iqcp2wpkl7x46qzp7e0duadr.lambda-url.us-east-1.on.aws/",
    "apiUrl": "https://iuj4ao33iqcp2wpkl7x46qzp7e0duadr.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-06/36-generative-media-safety-eval-suite/01-overview.jpg",
        "alt": "Generative Trust and Safety Console overview",
        "label": "Overview",
        "caption": "Fixture qualification is visibly separated from missing real-model evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/36-generative-media-safety-eval-suite/02-benchmark.jpg",
        "alt": "Generative media approved benchmark boundary",
        "label": "Benchmark",
        "caption": "Only approved suite identifiers reach the authorized evaluation path."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/36-generative-media-safety-eval-suite/03-metrics.jpg",
        "alt": "Generative media multi-axis safety metrics",
        "label": "Metrics",
        "caption": "Safety, utility, calibration, fairness and privacy remain separate evidence axes."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/36-generative-media-safety-eval-suite/04-review.jpg",
        "alt": "Generative media human review and provenance controls",
        "label": "Review",
        "caption": "Review, quarantine and fail-closed provenance controls remain inspectable."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/36-generative-media-safety-eval-suite/05-release-gate.jpg",
        "alt": "Generative media withheld release decision",
        "label": "Release gate",
        "caption": "Real-model, locked-test, human-review and C2PA evidence are required before release."
      }
    ]
  },
  {
    "id": "path-ai-engineer-reinforcement-learning-world-models-robotics-simulation-37-reinforcement-learning-foundations-gridworld",
    "title": "GridWorld Policy Lab",
    "category": "AI Engineering",
    "family": "Reinforcement Learning World Models Robotics Simulation",
    "summary": "An auditable tabular reinforcement-learning product that makes the MDP, policy, value functions and learning process inspectable from environment definition to registered evidence. Project 37 deliberately stops before DQN: Q-Learning and SARSA are implemented from first princi…",
    "technologies": [
      "Next.js",
      "Python",
      "FastAPI",
      "Docker",
      "Reinforcement Learning"
    ],
    "signals": {
      "files": 698,
      "code": 79,
      "tests": 17,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/tree/main/37-reinforcement-learning-foundations-gridworld",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/37-reinforcement-learning-foundations-gridworld",
    "roadmapNumber": 7,
    "cloudFocus": "Azure",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-07/37-reinforcement-learning-foundations-gridworld/01-environment.jpg",
        "alt": "GridWorld Policy Lab versioned environment and transition model",
        "label": "Environment",
        "caption": "The connected laboratory exposes the registered GridWorld layout, reward geometry and complete stochastic transition model."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/37-reinforcement-learning-foundations-gridworld/02-policy.jpg",
        "alt": "GridWorld Policy Lab learned policy and state action values",
        "label": "Policy",
        "caption": "The greedy policy, state values and every Q-value remain inspectable against the same versioned environment."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/37-reinforcement-learning-foundations-gridworld/03-learning.jpg",
        "alt": "GridWorld Policy Lab learning telemetry and evaluation metrics",
        "label": "Learning",
        "caption": "Training telemetry is separated from the frozen greedy evaluation, with return, success, coverage and Bellman residual visible."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/37-reinforcement-learning-foundations-gridworld/04-comparison.jpg",
        "alt": "GridWorld Policy Lab Q Learning and SARSA comparison",
        "label": "Comparison",
        "caption": "Q-Learning and SARSA are compared under equal budgets using seed-level aggregates and explicit uncertainty intervals."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/37-reinforcement-learning-foundations-gridworld/05-evidence.jpg",
        "alt": "GridWorld Policy Lab reproducibility manifest and artifact lineage",
        "label": "Evidence",
        "caption": "The evidence view links every result to frozen configuration, seeds, layout hash, commit and content-addressed artifacts."
      }
    ]
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
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-52-vqe-qaoa-advanced-optimization",
    "title": "Hybrid Quantum Optimization Workbench",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "Project 52 of Plan 9 is an evidence-bounded laboratory for two distinct hybrid workflows: VQE energy minimization and QAOA MaxCut optimization. Both tracks share typed lifecycle, resource, failure, oracle, and artifact contracts without merging their domain semantics.",
    "technologies": [
      "Next.js",
      "FastAPI",
      "Docker"
    ],
    "signals": {
      "files": 95,
      "code": 57,
      "tests": 13,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/tree/main/52-vqe-qaoa-advanced-optimization",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/52-vqe-qaoa-advanced-optimization",
    "roadmapNumber": 9,
    "cloudFocus": "Azure",
    "liveUrl": "https://p9-p52-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p9-p52-api.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-09/52-vqe-qaoa-advanced-optimization/01-overview.jpg",
        "alt": "VQE QAOA optimization studio overview",
        "label": "Overview",
        "caption": "VQE and QAOA remain separate optimization tracks with explicit semantics."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/52-vqe-qaoa-advanced-optimization/02-vqe-track.jpg",
        "alt": "VQE experiment track",
        "label": "VQE track",
        "caption": "Hamiltonian, ansatz and convergence evidence are presented for the VQE fixtures."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/52-vqe-qaoa-advanced-optimization/03-qaoa-track.jpg",
        "alt": "QAOA graph optimization track",
        "label": "QAOA track",
        "caption": "Graph instances, depth and objective quality remain inspectable for QAOA."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/52-vqe-qaoa-advanced-optimization/04-trainability.jpg",
        "alt": "VQE QAOA trainability diagnostics",
        "label": "Trainability",
        "caption": "Optimization difficulty and seed variability are visible without hardware claims."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/52-vqe-qaoa-advanced-optimization/05-evidence.jpg",
        "alt": "VQE QAOA final evidence",
        "label": "Evidence",
        "caption": "Final fixtures, graph cases and simulation-only boundaries remain explicit."
      }
    ]
  },
  {
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-54-hybrid-ai-quantum-workflow-platform",
    "title": "Hybrid Quantum Workflow Control Plane",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "Project 54 is a local-first platform for defining, validating, executing and inspecting declarative AI + quantum workflows. It demonstrates platform architecture and evidence boundaries; it does not claim quantum advantage, enterprise production readiness or perfect provider p…",
    "technologies": [
      "Next.js",
      "FastAPI",
      "Docker",
      "Qiskit"
    ],
    "signals": {
      "files": 123,
      "code": 65,
      "tests": 8,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/tree/main/54-hybrid-ai-quantum-workflow-platform",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/54-hybrid-ai-quantum-workflow-platform",
    "roadmapNumber": 9,
    "cloudFocus": "Azure",
    "liveUrl": "https://p9-p54-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p9-p54-api.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-09/54-hybrid-ai-quantum-workflow-platform/01-catalog.jpg",
        "alt": "Hybrid AI quantum workflow catalog",
        "label": "Catalog",
        "caption": "Six registered workflow templates expose their declarative contracts."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/54-hybrid-ai-quantum-workflow-platform/02-workflow-builder.jpg",
        "alt": "Hybrid AI quantum workflow builder",
        "label": "Workflow builder",
        "caption": "Classical and quantum steps are composed as an auditable DAG."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/54-hybrid-ai-quantum-workflow-platform/03-run-timeline.jpg",
        "alt": "Hybrid AI quantum workflow run timeline",
        "label": "Run timeline",
        "caption": "Execution stages, approvals and artifacts remain visible in sequence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/54-hybrid-ai-quantum-workflow-platform/04-provider-adapters.jpg",
        "alt": "Hybrid AI quantum provider adapters",
        "label": "Providers",
        "caption": "Provider capabilities, budgets and portability limits are surfaced together."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/54-hybrid-ai-quantum-workflow-platform/05-evidence.jpg",
        "alt": "Hybrid AI quantum workflow evidence",
        "label": "Evidence",
        "caption": "Eighty scenarios preserve lineage without implying quantum advantage or universal portability."
      }
    ]
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
      "files": 184,
      "code": 106,
      "tests": 42,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/05-inventory-optimization-ml-service",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/05-inventory-optimization-ml-service",
    "roadmapNumber": 1,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-01-p05-inventory-dashboard-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-01-p05-inventory-api-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-01/05-inventory-optimization-ml-service/capture00001.png",
        "alt": "Inventory Desk landing surface describing evidence based replenishment",
        "label": "System overview",
        "caption": "The product frames replenishment as a forecast-backed, constraint-aware decision."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/05-inventory-optimization-ml-service/capture00126.png",
        "alt": "Inventory position form with product planning date stock and backlog inputs",
        "label": "Inventory input",
        "caption": "The planner collects the inventory position and operating constraints for one product."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/05-inventory-optimization-ml-service/capture00251.png",
        "alt": "Inventory optimization form populated with planning quantities",
        "label": "Prepared position",
        "caption": "A complete inventory position is ready for the forecasting and reorder policy workflow."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/05-inventory-optimization-ml-service/capture00376.png",
        "alt": "Inventory optimization recommendation with replenishment quantity and calibrated horizon",
        "label": "Recommendation",
        "caption": "The result exposes the proposed replenishment quantity beside its calibrated demand horizon."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/05-inventory-optimization-ml-service/capture00501.png",
        "alt": "Inventory decision evidence table and forecast interval chart",
        "label": "Decision evidence",
        "caption": "Forecast intervals, policy inputs and decision metadata remain visible for review."
      }
    ]
  },
  {
    "id": "university-01-portfolio-projects-electrocorp-enterprise-platform-suite-java-fundamentals-course-electrocorp",
    "title": "Java Fundamentals Course",
    "category": "University",
    "family": "Technical Education",
    "summary": "An eleven-lesson Java course with starter files, completed examples, online execution guidance and aligned teaching documentation.",
    "technologies": [
      "Java"
    ],
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
    "id": "path-ai-engineer-generative-models-diffusion-systems-31-vae-gan-foundations-lab",
    "title": "Latent Generative Observatory",
    "category": "AI Engineering",
    "family": "Generative Models Diffusion Systems",
    "summary": "Project 31 opens Plan 6 with a reproducible comparison of five objectives on Fashion-MNIST: deterministic autoencoder, VAE, beta-VAE, DCGAN and WGAN-GP. The product is a read-only observatory built from immutable run bundles; it never trains a model in a web request.",
    "technologies": [
      "React",
      "Python"
    ],
    "signals": {
      "files": 433,
      "code": 50,
      "tests": 17,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Generative-Models-Diffusion-Systems/tree/main/31-vae-gan-foundations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/31-vae-gan-foundations-lab",
    "roadmapNumber": 6,
    "cloudFocus": "AWS",
    "liveUrl": "https://xkkhaujklv3g3btdoi5k5jffbq0rbdaz.lambda-url.us-east-1.on.aws/",
    "apiUrl": "https://xkkhaujklv3g3btdoi5k5jffbq0rbdaz.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-06/31-vae-gan-foundations-lab/01-overview.jpg",
        "alt": "Latent Generative Observatory overview",
        "label": "Overview",
        "caption": "Five generative objectives share a frozen Fashion-MNIST comparison protocol."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/31-vae-gan-foundations-lab/02-objectives.jpg",
        "alt": "Latent model objective decomposition",
        "label": "Objectives",
        "caption": "Reconstruction, KL, ELBO and adversarial components remain individually visible."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/31-vae-gan-foundations-lab/03-latent-space.jpg",
        "alt": "Seeded latent representation diagnostics",
        "label": "Latent space",
        "caption": "Reconstructions, interpolations and traversals reuse fixed evaluation seeds."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/31-vae-gan-foundations-lab/04-audit.jpg",
        "alt": "Latent model coverage and memorization audit",
        "label": "Audit",
        "caption": "Coverage, duplicates and nearest-neighbor evidence complement visual samples."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/31-vae-gan-foundations-lab/05-protocol.jpg",
        "alt": "Latent model immutable evidence protocol",
        "label": "Protocol",
        "caption": "Dataset checksums, transforms, checkpoint metadata and blocked test state stay attached."
      }
    ]
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
      "files": 164,
      "code": 76,
      "tests": 14,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/11-autoencoder-representation-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/11-autoencoder-representation-lab",
    "roadmapNumber": 2,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-02-p11-latent-representation-lab-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-02-p11-latent-representation-lab-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-02/11-autoencoder-representation-lab/01-overview.png",
        "alt": "Latent Representation Lab overview with encoder bottleneck decoder flow",
        "label": "Representation overview",
        "caption": "The opening view frames reconstruction, representation and robustness around an explicit bottleneck."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/11-autoencoder-representation-lab/02-reconstruction.png",
        "alt": "Autoencoder reconstruction with original decoded image error map and metrics",
        "label": "Reconstruction",
        "caption": "A controlled fixture is decoded through the active convolutional autoencoder with error maps and per-image metrics."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/11-autoencoder-representation-lab/03-denoising.png",
        "alt": "Matched corruption recovery comparison between autoencoders",
        "label": "Denoising",
        "caption": "Standard and denoising autoencoders receive the same seeded corruption and are evaluated against the untouched target."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/11-autoencoder-representation-lab/04-latent-explorer.png",
        "alt": "Direct two dimensional latent space explorer",
        "label": "Latent explorer",
        "caption": "The explorer plots direct 2D encoder outputs and keeps labels limited to evaluation coloring."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/11-autoencoder-representation-lab/05-representation-comparison.png",
        "alt": "Representation comparison retaining conflicting baseline evidence",
        "label": "Representation comparison",
        "caption": "Reconstruction, probe utility, capacity and robustness remain separate so the strongest PCA fixture baseline stays visible."
      }
    ]
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
    "id": "path-ai-engineer-generative-models-diffusion-systems-34-lora-finetuning-concept-lab",
    "title": "LoRA Adaptation Bench",
    "category": "AI Engineering",
    "family": "Generative Models Diffusion Systems",
    "summary": "Project 34 of the AI Engineer path is an evidence-first laboratory for Low-Rank Adaptation over Stable Diffusion 1.5. It asks a narrow question: how much domain adaptation does each rank buy per trainable parameter, and what does it cost in retention, diversity, memory risk an…",
    "technologies": [
      "React",
      "Python",
      "Docker"
    ],
    "signals": {
      "files": 101,
      "code": 50,
      "tests": 15,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Generative-Models-Diffusion-Systems/tree/main/34-lora-finetuning-concept-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/34-lora-finetuning-concept-lab",
    "roadmapNumber": 6,
    "cloudFocus": "AWS",
    "liveUrl": "https://t5tdpttxbwefktio7g6qopwdem0kmpen.lambda-url.us-east-1.on.aws/",
    "apiUrl": "https://t5tdpttxbwefktio7g6qopwdem0kmpen.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-06/34-lora-finetuning-concept-lab/01-overview.jpg",
        "alt": "LoRA Adaptation Bench overview",
        "label": "Overview",
        "caption": "Ranks 4, 8 and 16 share one frozen base and equal optimization budget."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/34-lora-finetuning-concept-lab/02-rank-comparison.jpg",
        "alt": "LoRA rank capacity comparison",
        "label": "Rank comparison",
        "caption": "Trainable capacity, retention and compute remain separate comparison axes."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/34-lora-finetuning-concept-lab/03-dataset.jpg",
        "alt": "LoRA licensed dataset contract",
        "label": "Dataset",
        "caption": "Row count, CC0 license, split and materialization gate are explicit."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/34-lora-finetuning-concept-lab/04-evaluation.jpg",
        "alt": "LoRA adaptation evaluation axes",
        "label": "Evaluation",
        "caption": "Alignment, diversity, retention, memorization and human review form the evidence set."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/34-lora-finetuning-concept-lab/05-release-gate.jpg",
        "alt": "LoRA adapter publication gate",
        "label": "Release gate",
        "caption": "Missing GPU runs, artifacts and review keep publication explicitly withheld."
      }
    ]
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
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-28-mcp-tool-server-lab",
    "title": "MCP Protocol Observatory",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "Project 28 of the AI Engineer path is a protocol-first laboratory for Model Context Protocol 2026-07-28. It exposes a deterministic HarborOps operations snapshot through tools, resources, resource templates and prompts, then verifies equivalent semantics over direct dispatch,…",
    "technologies": [
      "React",
      "Python",
      "Docker",
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 139,
      "code": 46,
      "tests": 23,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/tree/main/28-mcp-tool-server-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/28-mcp-tool-server-lab",
    "roadmapNumber": 5,
    "cloudFocus": "AWS",
    "liveUrl": "https://rynvqkrfx7leay4nlajsbueife0vvqiz.lambda-url.us-east-1.on.aws/app/",
    "apiUrl": "https://rynvqkrfx7leay4nlajsbueife0vvqiz.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-05/28-mcp-tool-server-lab/01-overview.jpg",
        "alt": "MCP Protocol Observatory overview",
        "label": "Overview",
        "caption": "The HarborOps surface summarizes tools, resources, templates, prompts and conformance evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/28-mcp-tool-server-lab/02-tools.jpg",
        "alt": "MCP read-only typed tool catalog",
        "label": "Tools",
        "caption": "Seven read-only tools expose versioned JSON Schema input and output contracts."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/28-mcp-tool-server-lab/03-resources.jpg",
        "alt": "MCP resources templates and prompts",
        "label": "Resources",
        "caption": "Static resources, URI templates and user-controlled prompts keep context explicit."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/28-mcp-tool-server-lab/04-transports.jpg",
        "alt": "MCP direct stdio and HTTP transport matrix",
        "label": "Transports",
        "caption": "Direct dispatch, newline-framed stdio and Streamable HTTP share one semantic contract."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/28-mcp-tool-server-lab/05-conformance.jpg",
        "alt": "MCP versioned conformance evidence",
        "label": "Conformance",
        "caption": "Development and locked cases stay separate and MCP Inspector remains explicitly unexecuted."
      }
    ]
  },
  {
    "id": "path-ai-engineer-final-ai-quantum-robotics-platform-68-multiservice-ai-platform-core",
    "title": "Multiservice AI Platform Core",
    "category": "AI Engineering",
    "family": "Final AI Quantum Robotics Platform",
    "summary": "A documented Multiservice AI Platform Core blueprint defining the experiment, modules, evaluation signals and known limitations inside Final AI Quantum Robotics Platform.",
    "technologies": [
      "RAG"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/tree/main/68-multiservice-ai-platform-core",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/68-multiservice-ai-platform-core",
    "roadmapNumber": 12,
    "cloudFocus": "Azure"
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
      "files": 120,
      "code": 54,
      "tests": 20,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/07-neural-network-foundations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/07-neural-network-foundations-lab",
    "roadmapNumber": 2,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-02-p07-neural-foundations-lab-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-02-p07-neural-foundations-lab-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-02/07-neural-network-foundations-lab/01-experiment-overview.png",
        "alt": "Neural Network Foundations Lab deterministic XOR experiment configuration",
        "label": "Experiment setup",
        "caption": "The real Streamlit lab exposes the NumPy network configuration, deterministic seed and initial learning state."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/07-neural-network-foundations-lab/02-trained-experiment.png",
        "alt": "Neural Network Foundations Lab after one thousand training epochs",
        "label": "Trained experiment",
        "caption": "The bounded XOR run reaches 100% training accuracy while retaining its loss trajectory and configuration context."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/07-neural-network-foundations-lab/03-forward-backward-trace.png",
        "alt": "Per-neuron forward and backward trace for a trained NumPy network",
        "label": "Signal trace",
        "caption": "A selected observation is traced through activations, gradients and parameter updates instead of treating the network as a black box."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/07-neural-network-foundations-lab/04-decision-boundary.png",
        "alt": "XOR decision boundary before and after one thousand epochs",
        "label": "Decision boundary",
        "caption": "The learned nonlinear boundary is compared directly with the deterministic initialization on the same observations."
      }
    ]
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
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-25-personal-document-rag-system",
    "title": "Personal Knowledge Desk",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "Project 25 of the AI Engineer path is a local-first retrieval-augmented generation system for personal documents. It treats parsing, retrieval, grounding, citations, abstention and privacy as separate, testable contracts.",
    "technologies": [
      "React",
      "Python",
      "Docker",
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 193,
      "code": 59,
      "tests": 43,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/tree/main/25-personal-document-rag-system",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/25-personal-document-rag-system",
    "roadmapNumber": 5,
    "cloudFocus": "AWS",
    "liveUrl": "https://qswbpj2hx56lvs2hgcc6a4b7ai0njdut.lambda-url.us-east-1.on.aws/app/",
    "apiUrl": "https://qswbpj2hx56lvs2hgcc6a4b7ai0njdut.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-05/25-personal-document-rag-system/01-overview.jpg",
        "alt": "Personal Knowledge Desk grounded RAG overview",
        "label": "Overview",
        "caption": "The local-first workspace makes document lineage, retrieval and abstention part of the product surface."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/25-personal-document-rag-system/02-library.jpg",
        "alt": "Personal Knowledge Desk document library controls",
        "label": "Library",
        "caption": "Supported sources, stable identifiers and deterministic chunk strategies remain inspectable."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/25-personal-document-rag-system/03-grounded-answer.jpg",
        "alt": "Personal Knowledge Desk grounded answer outcomes",
        "label": "Grounded answer",
        "caption": "The answer view distinguishes supported responses from insufficient or absent evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/25-personal-document-rag-system/04-retrieval-inspector.jpg",
        "alt": "Personal Knowledge Desk retrieval inspector",
        "label": "Retrieval",
        "caption": "BM25, dense and hybrid paths expose backend identity, ranks and source locators."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/25-personal-document-rag-system/05-evaluation.jpg",
        "alt": "Personal Knowledge Desk evaluation boundary",
        "label": "Evaluation",
        "caption": "Qualification evidence stays separate from the unopened sealed evaluation split."
      }
    ]
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
      "files": 321,
      "code": 45,
      "tests": 10,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/19-image-classification-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/19-image-classification-api",
    "roadmapNumber": 4,
    "cloudFocus": "AWS",
    "liveUrl": "https://bfrfpilgexeu7u5yzg7rjgwtqe0zembl.lambda-url.us-east-1.on.aws/app/",
    "apiUrl": "https://bfrfpilgexeu7u5yzg7rjgwtqe0zembl.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-04/19-image-classification-api/01-overview.png",
        "alt": "Vision Ledger pet breed classification studio overview",
        "label": "Vision overview",
        "caption": "The overview connects validation, visual transformation, calibration and abstention to a qualification-only evidence bundle."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/19-image-classification-api/02-classification.png",
        "alt": "Executed pet breed classification with ranked probabilities and abstention",
        "label": "Classification result",
        "caption": "A real qualification image request returns the primary breed, Top-5 ranking, confidence, abstention and artifact trace."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/19-image-classification-api/03-evaluation.png",
        "alt": "Pet classifier qualification evaluation and locked-test evidence",
        "label": "Evaluation",
        "caption": "Evaluation evidence remains explicitly separated from the unopened Oxford-IIIT Pet test boundary."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/19-image-classification-api/04-error-gallery.png",
        "alt": "Pet breed classifier error gallery with low confidence cases",
        "label": "Error gallery",
        "caption": "Misclassifications and weakest correct decisions stay visible with actual labels and confidence for failure analysis."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/19-image-classification-api/05-model-comparison.png",
        "alt": "Pet classifier candidate registry separating executed and unqualified models",
        "label": "Model comparison",
        "caption": "The candidate registry distinguishes executed qualification models from implementations that have not earned benchmark claims."
      }
    ]
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
    "id": "path-ai-engineer-quantum-computing-quantum-ai-foundations-48-post-quantum-security-scanner-lite",
    "title": "Post-Quantum Readiness Scanner Lite",
    "category": "AI Engineering",
    "family": "Quantum Computing Quantum AI Foundations",
    "summary": "Project 48 closes Plan 8 with a defensive, local-first static analysis system for post-quantum migration readiness. It inventories bounded cryptographic evidence in approved Python, Java, JavaScript/TypeScript, Go, dependency, and configuration files; classifies observations;…",
    "technologies": [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Java",
      "Python",
      "FastAPI",
      "Docker"
    ],
    "signals": {
      "files": 748,
      "code": 526,
      "tests": 521,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/tree/main/48-post-quantum-security-scanner-lite",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/48-post-quantum-security-scanner-lite",
    "roadmapNumber": 8,
    "cloudFocus": "Azure",
    "liveUrl": "https://p8-pqscan-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p8-pqscan-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-08/48-post-quantum-security-scanner-lite/01-new-scan.jpg",
        "alt": "Post-quantum security scanner new scan",
        "label": "New scan",
        "caption": "The deployed scanner accepts a bounded software inventory for analysis."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/48-post-quantum-security-scanner-lite/02-inventory.jpg",
        "alt": "Post-quantum cryptographic inventory",
        "label": "Inventory",
        "caption": "Discovered cryptographic dependencies are organized in one reviewable inventory."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/48-post-quantum-security-scanner-lite/03-findings.jpg",
        "alt": "Post-quantum scanner findings",
        "label": "Findings",
        "caption": "Risk findings remain linked to affected algorithms and evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/48-post-quantum-security-scanner-lite/04-migration-board.jpg",
        "alt": "Post-quantum migration board",
        "label": "Migration board",
        "caption": "Prioritized remediation work is separated from detected evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/48-post-quantum-security-scanner-lite/05-evidence.jpg",
        "alt": "Post-quantum scanner evidence view",
        "label": "Evidence",
        "caption": "Scanner provenance and assessment limits remain explicit."
      }
    ]
  },
  {
    "id": "path-ai-engineer-reinforcement-learning-world-models-robotics-simulation-39-ppo-simulated-agent-lab",
    "title": "PPO Simulated Agent Lab",
    "category": "AI Engineering",
    "family": "Reinforcement Learning World Models Robotics Simulation",
    "summary": "Project 39 of the AI Engineer path implements the progression from policy gradients to actor-critic and PPO for bounded continuous control. The implementation is local to this repository; Stable-Baselines3 is an optional external reference, never the trainer behind the owned r…",
    "technologies": [
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker"
    ],
    "signals": {
      "files": 580,
      "code": 104,
      "tests": 31,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/tree/main/39-ppo-simulated-agent-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/39-ppo-simulated-agent-lab",
    "roadmapNumber": 7,
    "cloudFocus": "Azure",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-07/39-ppo-simulated-agent-lab/01-overview.jpg",
        "alt": "PPO simulated agent laboratory overview",
        "label": "Overview",
        "caption": "The laboratory states its simulation-only scope and frozen evaluation protocol."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/39-ppo-simulated-agent-lab/02-rollouts.jpg",
        "alt": "PPO rollout inspection surface",
        "label": "Rollouts",
        "caption": "Collected trajectories expose advantages, returns and episode boundaries."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/39-ppo-simulated-agent-lab/03-optimization.jpg",
        "alt": "PPO clipped optimization diagnostics",
        "label": "Optimization",
        "caption": "Policy loss, value loss, entropy and clipping behavior are inspected together."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/39-ppo-simulated-agent-lab/04-robustness.jpg",
        "alt": "PPO robustness and seed analysis",
        "label": "Robustness",
        "caption": "The final ablation preserves seed-level variability and fixed budgets."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/39-ppo-simulated-agent-lab/05-evidence.jpg",
        "alt": "PPO sealed evidence view",
        "label": "Evidence",
        "caption": "Pre-freeze decisions and once-opened test evidence remain separated."
      }
    ]
  },
  {
    "id": "path-ai-engineer-reinforcement-learning-world-models-robotics-simulation-42-world-model-planning-lab",
    "title": "Project 42 — Latent Planning Observatory",
    "category": "AI Engineering",
    "family": "Reinforcement Learning World Models Robotics Simulation",
    "summary": "An evidence-bounded laboratory for learning partial-observation MiniGrid dynamics with an educational RSSM-lite, imagining prior-only futures and planning with random shooting, categorical CEM and uncertainty-aware receding-horizon control.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Docker"
    ],
    "signals": {
      "files": 183,
      "code": 70,
      "tests": 25,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/tree/main/42-world-model-planning-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/42-world-model-planning-lab",
    "roadmapNumber": 7,
    "cloudFocus": "Azure",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-07/42-world-model-planning-lab/01-overview.jpg",
        "alt": "World model planning laboratory overview",
        "label": "Overview",
        "caption": "The workspace connects learned dynamics, uncertainty and planning evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/42-world-model-planning-lab/02-dataset.jpg",
        "alt": "World model transition dataset registry",
        "label": "Dataset",
        "caption": "The 600k-transition corpus and its split contract remain inspectable."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/42-world-model-planning-lab/03-prediction.jpg",
        "alt": "World model prediction diagnostics",
        "label": "Prediction",
        "caption": "Latent prediction quality and uncertainty are compared across registered seeds."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/42-world-model-planning-lab/04-planning.jpg",
        "alt": "World model planning workspace",
        "label": "Planning",
        "caption": "Candidate plans are evaluated under a fixed horizon and explicit partial observation."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/42-world-model-planning-lab/05-evidence.jpg",
        "alt": "World model sealed planning evidence",
        "label": "Evidence",
        "caption": "Locked planning seeds, ensemble lineage and evaluation limits remain visible."
      }
    ]
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
      "files": 178,
      "code": 81,
      "tests": 22,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/08-pytorch-regression-classification-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/08-pytorch-regression-classification-api",
    "roadmapNumber": 2,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-02-p08-pytorch-tabular-studio-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-02-p08-pytorch-tabular-studio-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-02/08-pytorch-regression-classification-api/overview-desktop-1440.png",
        "alt": "PyTorch Tabular Studio overview with regression classification and batch navigation",
        "label": "Studio overview",
        "caption": "The studio presents two trained neural networks through one production-shaped inference surface."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/08-pytorch-regression-classification-api/classification-result-1440.png",
        "alt": "PyTorch classification result with probability evidence",
        "label": "Classification",
        "caption": "The classification workflow returns a prediction with its probability-level evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/08-pytorch-regression-classification-api/regression-result-1440.png",
        "alt": "PyTorch regression result with numerical inference evidence",
        "label": "Regression",
        "caption": "The regression workflow exposes the numerical result and the input contract used to produce it."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/08-pytorch-regression-classification-api/batch-result-1440.png",
        "alt": "PyTorch Tabular Studio batch inference result",
        "label": "Batch studio",
        "caption": "Batch inference applies the approved bundle to multiple records while preserving individual outputs."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/08-pytorch-regression-classification-api/experiments-desktop-1440.png",
        "alt": "PyTorch experiment evidence and model lifecycle view",
        "label": "Experiments",
        "caption": "Experiment evidence keeps model selection and lifecycle decisions inspectable from the product."
      }
    ]
  },
  {
    "id": "path-software-engineer-qml-benchmark-software-platform-09-qml-benchmark-platform",
    "title": "QML Benchmark Hybrid Platform",
    "category": "Software Engineering",
    "family": "QML Benchmark Software Platform",
    "summary": "Sprint 3 release candidate: Quantum Noise Limitations Board — ideal, finite-shot, noisy and readout-mitigated QSVM evidence on the same immutable dataset, split, model and seeds.",
    "technologies": [
      "Docker",
      "Quantum ML"
    ],
    "signals": {
      "files": 91,
      "code": 37,
      "tests": 91,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/QML-Benchmark-Software-Platform/tree/main/09-qml-benchmark-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/QML-Benchmark-Software-Platform/09-qml-benchmark-platform",
    "roadmapNumber": 9,
    "cloudFocus": "Azure",
    "liveUrl": "https://p9qml-platform.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p9qml-platform.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/software-engineer/plan-09/09-qml-benchmark-platform/01-encoding.jpg",
        "alt": "QML Benchmark Platform executed feature encoding workspace",
        "label": "Feature encoding",
        "caption": "A persisted three-feature encoding run exposes normalization, circuit depth, qubit count and the deterministic preparation boundary."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-09/09-qml-benchmark-platform/02-kernel-benchmark.jpg",
        "alt": "QML Benchmark Platform completed paired kernel benchmark",
        "label": "Kernel benchmark",
        "caption": "Four models share the same immutable split, seeds and metrics across eight paired runs with zero hardware jobs."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-09/09-qml-benchmark-platform/03-kernel-matrix.jpg",
        "alt": "QML Benchmark Platform kernel matrix heatmap and values",
        "label": "Kernel matrix",
        "caption": "The persisted linear kernel is visible as both a heatmap and an auditable sample-by-sample value table."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-09/09-qml-benchmark-platform/04-noise-study.jpg",
        "alt": "QML Benchmark Platform completed paired noise study",
        "label": "Noise study",
        "caption": "Ideal, finite-shot, noisy and readout-mitigated QSVM modes are compared across twelve paired runs under one declared budget."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-09/09-qml-benchmark-platform/05-interpretation-boundary.jpg",
        "alt": "QML Benchmark Platform provenance and interpretation boundary",
        "label": "Evidence boundary",
        "caption": "The final evidence view states that no hardware or quantum advantage was demonstrated and that mitigation is not quantum error correction."
      }
    ]
  },
  {
    "id": "path-ai-engineer-quantum-computing-quantum-ai-foundations-44-quantum-algorithms-playground",
    "title": "Quantum Algorithms Playground — Project 44",
    "category": "AI Engineering",
    "family": "Quantum Computing Quantum AI Foundations",
    "summary": "An evidence-first, local simulation laboratory for six bounded quantum-algorithm families. The product connects a frozen instance registry, explicit reversible oracle builders, Qiskit circuits, exact reference calculations, seeded Aer shot execution, a controlled FastAPI servi…",
    "technologies": [
      "Next.js",
      "Python",
      "FastAPI",
      "Docker",
      "Qiskit"
    ],
    "signals": {
      "files": 141,
      "code": 62,
      "tests": 47,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/tree/main/44-quantum-algorithms-playground",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/44-quantum-algorithms-playground",
    "roadmapNumber": 8,
    "cloudFocus": "Azure",
    "liveUrl": "https://p8-qalgorithms.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p8-qalgorithms.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-08/44-quantum-algorithms-playground/01-deutsch-jozsa-problem.jpg",
        "alt": "Quantum Algorithms Playground Deutsch-Jozsa problem contract in desktop view",
        "label": "Deutsch-Jozsa",
        "caption": "The approved Deutsch-Jozsa instance exposes its promise-query input, expected classification and recorded run."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/44-quantum-algorithms-playground/02-grover-amplitudes.jpg",
        "alt": "Quantum Algorithms Playground Grover amplitude and phase inspection",
        "label": "Grover amplitudes",
        "caption": "The simulator makes Grover's amplified marked state visible while retaining the bounded instance and shot budget."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/44-quantum-algorithms-playground/03-qft-circuit-steps.jpg",
        "alt": "Quantum Algorithms Playground QFT circuit step sequence",
        "label": "QFT steps",
        "caption": "The QFT workspace decomposes the approved circuit into an inspectable sequence of operations and measurements."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/44-quantum-algorithms-playground/04-phase-estimation-measurement.jpg",
        "alt": "Quantum Algorithms Playground phase estimation measurement evidence",
        "label": "Phase estimation",
        "caption": "Exact and shot-based phase-estimation outcomes are compared with their TVD and correctness result."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/44-quantum-algorithms-playground/05-shor-evidence.jpg",
        "alt": "Quantum Algorithms Playground bounded Shor order-finding evidence",
        "label": "Order evidence",
        "caption": "The N=15-only order-finding run keeps simulator provenance, hashes and the no-hardware boundary visible."
      }
    ]
  },
  {
    "id": "path-ai-engineer-quantum-computing-quantum-ai-foundations-45-quantum-gates-and-circuits-lab",
    "title": "Quantum Circuit Observatory — Project 45",
    "category": "AI Engineering",
    "family": "Quantum Computing Quantum AI Foundations",
    "summary": "An applied laboratory for defining a bounded quantum circuit once, materializing it in Qiskit and Cirq, and proving that ordering, global phase, sampling, noise, and transpilation preserve—or intentionally change—the same mathematical intent.",
    "technologies": [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "NumPy",
      "Qiskit"
    ],
    "signals": {
      "files": 475,
      "code": 60,
      "tests": 9,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/tree/main/45-quantum-gates-and-circuits-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/45-quantum-gates-and-circuits-lab",
    "roadmapNumber": 8,
    "cloudFocus": "Azure",
    "liveUrl": "https://p8-qcircuits-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p8-qcircuits-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-08/45-quantum-gates-and-circuits-lab/01-circuit-builder.jpg",
        "alt": "Quantum Circuit Observatory canonical Bell circuit builder",
        "label": "Circuit builder",
        "caption": "The builder preserves one canonical two-qubit intent, explicit wire ordering and a bounded gate palette."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/45-quantum-gates-and-circuits-lab/02-gate-inspector.jpg",
        "alt": "Quantum Circuit Observatory unitary gate inspector",
        "label": "Gate inspector",
        "caption": "The selected Hadamard gate is shown as an exact matrix with its unitarity, arity and ordering contract."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/45-quantum-gates-and-circuits-lab/03-framework-compare.jpg",
        "alt": "Quantum Circuit Observatory Qiskit and Cirq framework comparison",
        "label": "Framework compare",
        "caption": "Canonical, Qiskit and Cirq state fidelities are aligned only after explicit endian and global-phase normalization."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/45-quantum-gates-and-circuits-lab/04-noise-model.jpg",
        "alt": "Quantum Circuit Observatory simulated depolarizing noise view",
        "label": "Noise model",
        "caption": "The density-matrix surface reports trace, purity and ideal fidelity under a declared simulated channel without mitigation claims."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/45-quantum-gates-and-circuits-lab/05-evidence.jpg",
        "alt": "Quantum Circuit Observatory reproducible evidence contract",
        "label": "Evidence",
        "caption": "The evidence surface keeps schema, seeds, simulator-only boundary and canonical circuit payload visible."
      }
    ]
  },
  {
    "id": "path-ai-engineer-quantum-computing-quantum-ai-foundations-46-quantum-cloud-abstraction-layer",
    "title": "Quantum Cloud Control Plane",
    "category": "AI Engineering",
    "family": "Quantum Computing Quantum AI Foundations",
    "summary": "Project 46 of the AI Engineer quantum foundations path. This repository implements an evidence-bounded control plane for local Qiskit/Aer and Braket simulation plus pinned IBM Quantum, Amazon Braket and Azure Quantum adapter contracts.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Qiskit"
    ],
    "signals": {
      "files": 359,
      "code": 71,
      "tests": 215,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/tree/main/46-quantum-cloud-abstraction-layer",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/46-quantum-cloud-abstraction-layer",
    "roadmapNumber": 8,
    "cloudFocus": "Azure",
    "liveUrl": "https://p8-qcloud-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p8-qcloud-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-08/46-quantum-cloud-abstraction-layer/01-provider-registry.jpg",
        "alt": "Quantum Cloud Control Plane provider registry after a local workload",
        "label": "Provider registry",
        "caption": "Five provider contracts remain comparable while only local and deterministic adapters carry executed evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/46-quantum-cloud-abstraction-layer/02-backend-catalog.jpg",
        "alt": "Quantum Cloud Control Plane safe backend capability catalog",
        "label": "Backend catalog",
        "caption": "The capability registry separates online local simulators from cloud backends whose discovery was not executed."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/46-quantum-cloud-abstraction-layer/03-submit-review.jpg",
        "alt": "Quantum Cloud Control Plane submission policy review",
        "label": "Submit review",
        "caption": "The review surface allows a zero-priced local path and visibly denies cost-bearing cloud submission without approval."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/46-quantum-cloud-abstraction-layer/04-local-result.jpg",
        "alt": "Quantum Cloud Control Plane successful local Bell workload result",
        "label": "Local result",
        "caption": "A real local run records 256 samples, a zero-dollar cost, normalized outcomes and an immutable artifact hash."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/46-quantum-cloud-abstraction-layer/05-evidence.jpg",
        "alt": "Quantum Cloud Control Plane frozen release evidence",
        "label": "Evidence",
        "caption": "The verified bundle reports 144 conformance runs, a locked test protocol and zero paid jobs."
      }
    ]
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
    "title": "Quantum Foundations Visual Platform",
    "category": "Software Engineering",
    "family": "Quantum Foundations Software Platform",
    "summary": "An accessible educational platform that connects verified quantum-foundation notes to bounded, reproducible Qiskit Aer evidence. It teaches the mathematics and the software boundary without presenting a simulator as hardware or a small demonstration as quantum advantage.",
    "technologies": [
      "Python",
      "FastAPI",
      "Docker",
      "Qiskit"
    ],
    "signals": {
      "files": 119,
      "code": 32,
      "tests": 14,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/Quantum-Foundations-Visual-Tools/tree/main/08-quantum-foundations-visual-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Quantum-Foundations-Software-Platform/08-quantum-foundations-visual-platform",
    "roadmapNumber": 8,
    "cloudFocus": "Azure",
    "liveUrl": "https://p8qf-platform.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p8qf-platform.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/software-engineer/plan-08/08-quantum-foundations-visual-platform/01-overview.jpg",
        "alt": "Quantum Foundations Visual Platform overview and evidence boundary",
        "label": "Foundations overview",
        "caption": "The learning path places exact theory, ideal simulation, absent hardware and the no-advantage claim in one opening view."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-08/08-quantum-foundations-visual-platform/02-state-lab.jpg",
        "alt": "Quantum Foundations one-qubit interactive normalized state lab",
        "label": "State lab",
        "caption": "Bounded angle controls update amplitudes, probabilities, Bloch coordinates and a visual state projection together."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-08/08-quantum-foundations-visual-platform/03-algorithms.jpg",
        "alt": "Quantum Foundations algorithm comparison workspace",
        "label": "Algorithms",
        "caption": "The algorithm surface compares problem, classical baseline, quantum idea and complexity before any speedup interpretation."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-08/08-quantum-foundations-visual-platform/04-optimization.jpg",
        "alt": "Quantum Foundations bounded optimization scenario workspace",
        "label": "Optimization",
        "caption": "The scenario keeps classical limits and bounded estimates visible while stating that no quantum solver was executed."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-08/08-quantum-foundations-visual-platform/05-simulation.jpg",
        "alt": "Quantum Foundations reproducible Bell-state simulation result",
        "label": "Simulation evidence",
        "caption": "A real 1,024-shot ideal simulation records outcomes 00 and 11 with a circuit digest and explicit no-hardware boundary."
      }
    ]
  },
  {
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-50-quantum-kernel-benchmark",
    "title": "Quantum Kernel Benchmark Studio",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "Project 50 of Plan 9 is an evidence-bounded benchmark for classical and quantum kernels. It studies the Gram matrix itself—geometry, stability, cost, conditioning, and lineage—before interpreting downstream SVC or kernel-ridge scores.",
    "technologies": [
      "Next.js",
      "PostgreSQL",
      "Docker",
      "Qiskit"
    ],
    "signals": {
      "files": 100,
      "code": 58,
      "tests": 100,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/tree/main/50-quantum-kernel-benchmark",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/50-quantum-kernel-benchmark",
    "roadmapNumber": 9,
    "cloudFocus": "Azure",
    "liveUrl": "https://p9-p50-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p9-p50-api.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-09/50-quantum-kernel-benchmark/01-overview.jpg",
        "alt": "Quantum kernel benchmark studio overview",
        "label": "Overview",
        "caption": "The studio states the shared preprocessing contract and no-advantage boundary."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/50-quantum-kernel-benchmark/02-matrix-lab.jpg",
        "alt": "Quantum kernel Gram matrix laboratory",
        "label": "Matrix lab",
        "caption": "Classical and quantum Gram matrices remain directly inspectable."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/50-quantum-kernel-benchmark/03-feature-maps.jpg",
        "alt": "Quantum kernel feature map catalog",
        "label": "Feature maps",
        "caption": "Auditable feature-map definitions and resource expectations are exposed."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/50-quantum-kernel-benchmark/04-cost-preview.jpg",
        "alt": "Quantum kernel execution cost preview",
        "label": "Cost preview",
        "caption": "Exact, finite-shot and noisy execution facets remain distinct before a run."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/50-quantum-kernel-benchmark/05-evidence.jpg",
        "alt": "Quantum kernel frozen evidence",
        "label": "Evidence",
        "caption": "Datasets, configurations and once-opened tests remain traceable."
      }
    ]
  },
  {
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-49-quantum-ml-model-zoo",
    "title": "Quantum ML Model Observatory",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "Project 49 of the AI Engineer roadmap is an executable, evidence-bounded model zoo for small quantum machine-learning systems. It places six quantum families beside paired classical references and records the data, encoding, circuit, backend and resource boundary behind every…",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
      "scikit-learn",
      "Qiskit"
    ],
    "signals": {
      "files": 88,
      "code": 53,
      "tests": 10,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/tree/main/49-quantum-ml-model-zoo",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/49-quantum-ml-model-zoo",
    "roadmapNumber": 9,
    "cloudFocus": "Azure",
    "liveUrl": "https://p9-p49-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p9-p49-api.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-09/49-quantum-ml-model-zoo/01-zoo-catalog.jpg",
        "alt": "Quantum ML model zoo catalog",
        "label": "Zoo catalog",
        "caption": "The connected local application presents the registered model families and backends."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/49-quantum-ml-model-zoo/02-experiment-builder.jpg",
        "alt": "Quantum ML model zoo experiment builder",
        "label": "Experiment builder",
        "caption": "Dataset, model and execution settings are configured against the live local API."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/49-quantum-ml-model-zoo/03-circuit-inspector.jpg",
        "alt": "Quantum ML model zoo circuit inspector",
        "label": "Circuit inspector",
        "caption": "Circuit structure and resource details remain inspectable before comparison."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/49-quantum-ml-model-zoo/04-comparison-arena.jpg",
        "alt": "Quantum ML model comparison arena",
        "label": "Comparison arena",
        "caption": "Classical and quantum candidates share one controlled comparison surface."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/49-quantum-ml-model-zoo/05-model-card.jpg",
        "alt": "Quantum ML model evidence card",
        "label": "Model card",
        "caption": "Capabilities, provenance and claim limits remain attached to the selected model."
      }
    ]
  },
  {
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-53-quantum-error-mitigation-basics",
    "title": "Quantum Noise & Mitigation Observatory",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "Project 53 of the AI Engineer path. This repository is a reproducible, evidence-bounded laboratory for controlled quantum noise characterization, error suppression, error mitigation, and a deliberately narrow repetition-code correction boundary.",
    "technologies": [
      "Next.js",
      "Python",
      "FastAPI",
      "Docker"
    ],
    "signals": {
      "files": 102,
      "code": 58,
      "tests": 12,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/tree/main/53-quantum-error-mitigation-basics",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/53-quantum-error-mitigation-basics",
    "roadmapNumber": 9,
    "cloudFocus": "Azure",
    "liveUrl": "https://p9-p53-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p9-p53-api.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-09/53-quantum-error-mitigation-basics/01-overview.jpg",
        "alt": "Quantum error mitigation laboratory overview",
        "label": "Overview",
        "caption": "The laboratory separates ideal, noisy and mitigated evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/53-quantum-error-mitigation-basics/02-noise-lab.jpg",
        "alt": "Quantum error mitigation noise laboratory",
        "label": "Noise lab",
        "caption": "Declared simulated noise channels and workload conditions remain visible."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/53-quantum-error-mitigation-basics/03-mitigation-lab.jpg",
        "alt": "Quantum error mitigation method comparison",
        "label": "Mitigation lab",
        "caption": "Mitigation methods are compared under the same simulation protocol."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/53-quantum-error-mitigation-basics/04-correction-boundary.jpg",
        "alt": "Mitigation versus correction boundary",
        "label": "Correction boundary",
        "caption": "The interface states that mitigation is not quantum error correction."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/53-quantum-error-mitigation-basics/05-evidence.jpg",
        "alt": "Quantum error mitigation evidence registry",
        "label": "Evidence",
        "caption": "The frozen 36/12/12 workload split and simulation boundary remain traceable."
      }
    ]
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
    "id": "path-ai-engineer-quantum-computing-quantum-ai-foundations-47-quantum-optimization-basic-lab",
    "title": "Quantum Optimization Workbench",
    "category": "AI Engineering",
    "family": "Quantum Computing Quantum AI Foundations",
    "summary": "Project 47 of the AI Engineer quantum foundations path. It is an evidence-bounded laboratory for QAOA on Max-Cut and VQE on H2, with exact references, finite-shot and noisy local simulation, classical baselines, an experiment API, and a nine-surface Next.js observatory.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Docker",
      "Qiskit"
    ],
    "signals": {
      "files": 105,
      "code": 55,
      "tests": 11,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/tree/main/47-quantum-optimization-basic-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/47-quantum-optimization-basic-lab",
    "roadmapNumber": 8,
    "cloudFocus": "Azure",
    "liveUrl": "https://p8-qopt-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p8-qopt-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-08/47-quantum-optimization-basic-lab/01-problem-catalog.jpg",
        "alt": "Quantum optimization problem catalog",
        "label": "Problem catalog",
        "caption": "The deployed application exposes bounded optimization fixtures and their formulations."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/47-quantum-optimization-basic-lab/02-experiment-builder.jpg",
        "alt": "Quantum optimization experiment builder",
        "label": "Experiment builder",
        "caption": "Algorithm, backend and budget controls are assembled before execution."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/47-quantum-optimization-basic-lab/03-circuit.jpg",
        "alt": "Quantum optimization circuit inspector",
        "label": "Circuit",
        "caption": "The selected circuit and its execution contract remain inspectable."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/47-quantum-optimization-basic-lab/04-results.jpg",
        "alt": "Quantum optimization result comparison",
        "label": "Results",
        "caption": "Objective quality and classical references are compared without an advantage claim."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/47-quantum-optimization-basic-lab/05-evidence.jpg",
        "alt": "Quantum optimization evidence registry",
        "label": "Evidence",
        "caption": "Simulator provenance, seeds and bounded conclusions remain visible."
      }
    ]
  },
  {
    "id": "path-ai-engineer-final-ai-quantum-robotics-platform-69-quantum-service-layer-and-optimization-hub",
    "title": "Quantum Service Layer And Optimization Hub",
    "category": "AI Engineering",
    "family": "Final AI Quantum Robotics Platform",
    "summary": "A documented Quantum Service Layer And Optimization Hub blueprint defining the experiment, modules, evaluation signals and known limitations inside Final AI Quantum Robotics Platform.",
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
    "url": "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/tree/main/69-quantum-service-layer-and-optimization-hub",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/69-quantum-service-layer-and-optimization-hub",
    "roadmapNumber": 12,
    "cloudFocus": "Azure"
  },
  {
    "id": "path-ai-engineer-quantum-computing-quantum-ai-foundations-43-quantum-math-for-software-lab",
    "title": "Quantum State Mathematics Lab",
    "category": "AI Engineering",
    "family": "Quantum Computing Quantum AI Foundations",
    "summary": "Project 43 is an interactive, evidence-first laboratory that translates quantum-computing foundations into small, testable software operations. It implements the mathematics itself with NumPy and SymPy, then compares frozen results independently with Qiskit Quantum Information.",
    "technologies": [
      "Next.js",
      "Python",
      "FastAPI",
      "NumPy",
      "Qiskit",
      "Quantum ML"
    ],
    "signals": {
      "files": 411,
      "code": 62,
      "tests": 8,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/tree/main/43-quantum-math-for-software-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/43-quantum-math-for-software-lab",
    "roadmapNumber": 8,
    "cloudFocus": "Azure",
    "liveUrl": "https://p8-qmath-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p8-qmath-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-08/43-quantum-math-for-software-lab/01-complex-analysis.jpg",
        "alt": "Quantum State Mathematics Lab complex plane analysis in a full desktop workspace",
        "label": "Complex analysis",
        "caption": "The workspace resolves an exact complex-number payload and exposes its plotted coordinate, result envelope and invariant checks."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/43-quantum-math-for-software-lab/02-state-validation.jpg",
        "alt": "Quantum State Mathematics Lab qubit state validation workspace",
        "label": "Qubit state",
        "caption": "Normalized amplitudes, Born probabilities and global-phase equivalence are evaluated against an explicit state payload."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/43-quantum-math-for-software-lab/03-bloch-sphere.jpg",
        "alt": "Quantum State Mathematics Lab Bloch sphere analysis with rendered vector",
        "label": "Bloch sphere",
        "caption": "A one-qubit state is projected into a three-dimensional Bloch vector while the source amplitudes remain visible."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/43-quantum-math-for-software-lab/04-entanglement.jpg",
        "alt": "Quantum State Mathematics Lab entanglement analysis workspace",
        "label": "Entanglement",
        "caption": "The bipartite-state surface computes Schmidt structure, separability, reduced states and entropy from bounded input."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-08/43-quantum-math-for-software-lab/05-evidence-registry.jpg",
        "alt": "Quantum State Mathematics Lab reproducibility evidence registry",
        "label": "Evidence registry",
        "caption": "The evidence view materializes the frozen split inventory, runtime ledger, reference boundary and verified final bundle."
      }
    ]
  },
  {
    "id": "path-software-engineer-rag-agentic-software-platform-05-rag-agent-workflow-platform",
    "title": "RAG & Agent Workflow Platform",
    "category": "Software Engineering",
    "family": "RAG Agentic Software Platform",
    "summary": "Project 05 of the Software Engineer path is a modular platform for trustworthy retrieval and observable agent workflows. It turns controlled documents into resolvable search evidence, measures retrieval behavior under comparable experiments, and executes one bounded read-only…",
    "technologies": [
      "NestJS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "LangGraph",
      "RAG"
    ],
    "signals": {
      "files": 324,
      "code": 191,
      "tests": 42,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/RAG-Agentic-Software-Platform/tree/main/05-rag-agent-workflow-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/RAG-Agentic-Software-Platform/05-rag-agent-workflow-platform",
    "roadmapNumber": 5,
    "cloudFocus": "AWS",
    "liveUrl": "https://d3fm03zlz7v223.cloudfront.net/",
    "apiUrl": "https://d3fm03zlz7v223.cloudfront.net/api/docs",
    "gallery": [
      {
        "src": "assets/project-captures/software-engineer/plan-05/05-rag-agent-workflow-platform/01-overview.jpg",
        "alt": "Atlas governed evidence platform overview in desktop view",
        "label": "Platform overview",
        "caption": "Atlas connects controlled ingestion, source-resolvable search, retrieval evaluation and governed workflow traces."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-05/05-rag-agent-workflow-platform/02-documents.jpg",
        "alt": "Atlas document registry with four completed resources",
        "label": "Document registry",
        "caption": "Four controlled Markdown and text resources are indexed with durable status, source metadata and chunk counts."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-05/05-rag-agent-workflow-platform/03-search.jpg",
        "alt": "Atlas semantic search returning four ranked evidence sources",
        "label": "Evidence search",
        "caption": "A real query retrieves four cited sources while the interface keeps similarity explicitly separate from confidence."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-05/05-rag-agent-workflow-platform/04-evaluation.jpg",
        "alt": "Atlas retrieval evaluation strategy comparison and relevance analysis",
        "label": "Retrieval evaluation",
        "caption": "Three chunking strategies are compared against the same ground-truth queries with recall, precision, MRR and visible error analysis."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-05/05-rag-agent-workflow-platform/05-agent-runs.jpg",
        "alt": "Atlas completed governed workflow trace with four citations",
        "label": "Agent trace",
        "caption": "The completed bounded run exposes its graph, tool-call budget, elapsed time and four citation artifacts without private reasoning."
      }
    ]
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
      "files": 118,
      "code": 70,
      "tests": 21,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/15-recommender-system-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/15-recommender-system-api",
    "roadmapNumber": 3,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-03-p15-recommendation-studio-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-03-p15-recommendation-studio-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-03/15-recommender-system-api/01-discover.png",
        "alt": "Reelwise recommendation studio discovery workspace and catalog evidence",
        "label": "Discovery workspace",
        "caption": "The catalog workspace exposes the selected signal, eligible users and evidence boundary before a ranking request is made."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/15-recommender-system-api/02-known-user.png",
        "alt": "Known user Top 10 recommendation result with serving strategy and exclusions",
        "label": "Known-user ranking",
        "caption": "A real BPR request returns a personalized Top 10 while disclosing model version, seen-title exclusions and fallback state."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/15-recommender-system-api/03-new-profile.png",
        "alt": "Cold start profile built from three explicit movie choices",
        "label": "Cold-start profile",
        "caption": "Three explicit session choices produce a content-based ranking without attaching the temporary profile to an identity."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/15-recommender-system-api/04-compare-models.png",
        "alt": "Recommendation model comparison across four ranking policies",
        "label": "Model comparison",
        "caption": "Popularity, content, item-kNN and BPR rankings are compared under one candidate and exclusion protocol."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/15-recommender-system-api/05-evaluation.png",
        "alt": "Offline recommender evaluation with NDCG coverage diversity and chronological protocol",
        "label": "Offline evaluation",
        "caption": "The evaluation view reads relevance beside catalog reach and diversity while keeping the chronological test boundary visible."
      }
    ]
  },
  {
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-30-multi-agent-repository-assistant",
    "title": "Repository Intelligence Studio",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "Project 30 is the Plan 5 integrator: an evidence-first multi-agent repository qualification system. ForgeGuard Repository Sandbox contains four frozen, synthetic repositories; RepoPilot Team coordinates a supervisor and five specialists through typed handoffs, scoped context a…",
    "technologies": [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "LangGraph",
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 5236,
      "code": 160,
      "tests": 456,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/tree/main/30-multi-agent-repository-assistant",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/30-multi-agent-repository-assistant",
    "roadmapNumber": 5,
    "cloudFocus": "AWS",
    "liveUrl": "https://gr3ppliox2rbf7ixgmjn4ldz7q0ijgjb.lambda-url.us-east-1.on.aws/app/overview",
    "apiUrl": "https://gr3ppliox2rbf7ixgmjn4ldz7q0ijgjb.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-05/30-multi-agent-repository-assistant/01-overview.jpg",
        "alt": "Repository Intelligence Studio overview",
        "label": "Overview",
        "caption": "The integrator coordinates a supervisor and five specialists over frozen repositories."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/30-multi-agent-repository-assistant/02-orchestration.jpg",
        "alt": "RepoPilot durable orchestration view",
        "label": "Orchestration",
        "caption": "Typed handoffs, isolated roles, graph state and explicit budgets remain visible."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/30-multi-agent-repository-assistant/03-evidence.jpg",
        "alt": "RepoPilot content-addressed evidence view",
        "label": "Evidence",
        "caption": "Every conclusion resolves to snapshot, path, lines and content hash."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/30-multi-agent-repository-assistant/04-approval.jpg",
        "alt": "RepoPilot patch approval boundary",
        "label": "Approval",
        "caption": "Patch proposals stop at a human gate before bounded ephemeral execution."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/30-multi-agent-repository-assistant/05-evaluation.jpg",
        "alt": "RepoPilot architecture evaluation ledger",
        "label": "Evaluation",
        "caption": "Observed local architectures stay distinct from credentialed provider harnesses and sealed tests."
      }
    ]
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
      "files": 131,
      "code": 60,
      "tests": 33,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/01-retail-demand-prediction-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/01-retail-demand-prediction-api",
    "roadmapNumber": 1,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-01-p01-retail-demand-lab-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-01-p01-retail-demand-lab-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-01/01-retail-demand-prediction-api/capture00001.png",
        "alt": "Retail Demand Prediction API landing view with product positioning and model evidence",
        "label": "System overview",
        "caption": "The product surface introduces explainable retail-demand inference and its validated model context."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/01-retail-demand-prediction-api/capture00112.png",
        "alt": "Retail demand inference form with date product store stock and price inputs",
        "label": "Inference request",
        "caption": "A typed request surface collects the observation needed by the FastAPI prediction contract."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/01-retail-demand-prediction-api/capture00334.png",
        "alt": "Retail demand form populated with a validated product observation",
        "label": "Validated input",
        "caption": "The completed observation shows the concrete feature set sent through the prediction workflow."
      }
    ]
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
      "files": 558,
      "code": 230,
      "tests": 58,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/Applied-ML-Software-Platform/tree/main/01-retail-intelligence-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Applied-AI-Software-Platform/01-retail-intelligence-platform",
    "roadmapNumber": 1,
    "cloudFocus": "GCP",
    "liveUrl": "https://sf-01-retail-intelligence-web-s3dd5t6azq-uc.a.run.app/",
    "apiUrl": "https://sf-01-retail-intelligence-api-s3dd5t6azq-uc.a.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/software-engineer/plan-01/01-retail-intelligence-platform/sprint-01/capture00001.png",
        "alt": "Retail Intelligence Platform demand dashboard overview",
        "label": "Demand overview",
        "caption": "The retail dashboard introduces the observed demand period and its primary operating measures."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-01/01-retail-intelligence-platform/sprint-01/capture00229.png",
        "alt": "Retail demand dashboard comparing product volume and value",
        "label": "Product signals",
        "caption": "Product-level volume and value are shown as distinct decision signals."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-01/01-retail-intelligence-platform/sprint-01/capture00457.png",
        "alt": "Retail intelligence evidence cards with product context",
        "label": "Evidence cards",
        "caption": "Evidence cards retain the context behind each aggregated retail measure."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-01/01-retail-intelligence-platform/sprint-02/capture00359.png",
        "alt": "Retail machine learning model comparison with decision metrics",
        "label": "Model comparison",
        "caption": "Candidate models are compared through decision-facing evidence instead of a bare leaderboard."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-01/01-retail-intelligence-platform/sprint-03/capture00525.png",
        "alt": "Retail intelligence model selection workspace",
        "label": "Model decision",
        "caption": "The final workspace records the selected model and the contract used to justify it."
      }
    ]
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
      "files": 127,
      "code": 48,
      "tests": 10,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/20-retail-shelf-object-detection",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/20-retail-shelf-object-detection",
    "roadmapNumber": 4,
    "cloudFocus": "AWS",
    "liveUrl": "https://d4iau0xa5tbzq.cloudfront.net/app/",
    "apiUrl": "https://d4iau0xa5tbzq.cloudfront.net/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-04/20-retail-shelf-object-detection/01-overview.png",
        "alt": "Shelf Lens retail object detection operations overview",
        "label": "Detection overview",
        "caption": "The overview connects image decoding, candidate detection, NMS, visible counts and evaluation boundaries."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/20-retail-shelf-object-detection/02-detection.png",
        "alt": "Executed shelf detector with visible boxes thresholds and count controls",
        "label": "Detection canvas",
        "caption": "A real shelf-scene request renders accepted boxes while exposing confidence, NMS IoU, zoom and the operational count."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/20-retail-shelf-object-detection/03-evaluation.png",
        "alt": "Shelf detector qualification evaluation by scene density",
        "label": "Evaluation",
        "caption": "Detection quality and count error remain separate across low, medium and high-density qualification slices."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/20-retail-shelf-object-detection/04-count-errors.png",
        "alt": "Shelf detection error slices comparing truth and predicted boxes",
        "label": "Count errors",
        "caption": "Truth and predicted geometry are overlaid for each density slice so count deltas can be inspected visually."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/20-retail-shelf-object-detection/05-model-registry.png",
        "alt": "Shelf detector candidate registry with executed and unrun model states",
        "label": "Model registry",
        "caption": "The registry reports the qualification artifact while leaving unrun YOLO and Faster R-CNN candidates without invented metrics."
      }
    ]
  },
  {
    "id": "path-software-engineer-rl-simulation-software-platform-07-rl-simulation-control-platform",
    "title": "Rl Simulation Control Platform",
    "category": "Software Engineering",
    "family": "RL Simulation Software Platform",
    "summary": "Current implementation status — Azure + Neon release candidate",
    "technologies": [
      "Vue",
      "Python",
      "PostgreSQL",
      "Docker",
      "Reinforcement Learning"
    ],
    "signals": {
      "files": 159,
      "code": 35,
      "tests": 20,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/RL-Simulation-Software-Platform/tree/main/07-rl-simulation-control-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/RL-Simulation-Software-Platform/07-rl-simulation-control-platform",
    "roadmapNumber": 7,
    "cloudFocus": "Azure",
    "liveUrl": "https://p7rl-platform.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p7rl-platform.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs/",
    "gallery": [
      {
        "src": "assets/project-captures/software-engineer/plan-07/07-rl-simulation-control-platform/01-experiment.jpg",
        "alt": "Vector RL evidence lab world-model experiment overview",
        "label": "Experiment",
        "caption": "The public workspace frames one registered Gridworld rollout and keeps its bounded transition-model limitations visible."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-07/07-rl-simulation-control-platform/02-world-model.jpg",
        "alt": "Vector expected state versus imagined state comparison",
        "label": "World model",
        "caption": "Expected and predicted states are compared beside first divergence, accumulated error and the rollout drift curve."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-07/07-rl-simulation-control-platform/03-rollout.jpg",
        "alt": "Vector autoregressive rollout step inspector",
        "label": "Rollout inspector",
        "caption": "Eleven persisted actions remain individually inspectable together with the open-loop planning limitation and metric samples."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-07/07-rl-simulation-control-platform/04-rollout-step-7.jpg",
        "alt": "Vector Gridworld step seven expected and predicted state divergence",
        "label": "Step divergence",
        "caption": "Step seven exposes the exact one-cell model drift between the real transition and the autoregressive prediction."
      }
    ]
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
    "id": "path-ai-engineer-final-ai-quantum-robotics-platform-71-safety-observability-evaluation-suite",
    "title": "Safety Observability Evaluation Suite",
    "category": "AI Engineering",
    "family": "Final AI Quantum Robotics Platform",
    "summary": "A documented Safety Observability Evaluation Suite blueprint defining the experiment, modules, evaluation signals and known limitations inside Final AI Quantum Robotics Platform.",
    "technologies": [
      "RAG"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/tree/main/71-safety-observability-evaluation-suite",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/71-safety-observability-evaluation-suite",
    "roadmapNumber": 12,
    "cloudFocus": "Azure"
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
      "files": 237,
      "code": 147,
      "tests": 60,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/02-sales-forecasting-dashboard-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/02-sales-forecasting-dashboard-api",
    "roadmapNumber": 1,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-01-p02-sales-forecast-dashboard-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-01-p02-sales-forecast-api-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-01/02-sales-forecasting-dashboard-api/capture00001.png",
        "alt": "Forecast Desk dashboard with SKU selector and seven day planning controls",
        "label": "Forecast desk",
        "caption": "The dashboard starts from a specific SKU and an explicit seven-day planning horizon."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/02-sales-forecasting-dashboard-api/capture00235.png",
        "alt": "Observed demand history and generated sales forecast chart with daily table",
        "label": "Forecast output",
        "caption": "Observed history and the forecast horizon are rendered together with daily forecast values."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/02-sales-forecasting-dashboard-api/capture00352.png",
        "alt": "Sales forecast dashboard showing demand summary metrics and timeline",
        "label": "Demand metrics",
        "caption": "Summary measures expose historical demand, forecast demand, peak demand and forecast error."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/02-sales-forecasting-dashboard-api/capture00469.png",
        "alt": "Sales forecast comparison for a second retail product",
        "label": "SKU comparison",
        "caption": "The same contract supports product-level comparison without changing the analytical workflow."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-01/02-sales-forecasting-dashboard-api/capture00586.png",
        "alt": "Forecast Desk daily prediction table beneath the demand chart",
        "label": "Daily evidence",
        "caption": "The detailed daily table keeps the plotted forecast inspectable as operational evidence."
      }
    ]
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
      "files": 204,
      "code": 73,
      "tests": 75,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/10-sequence-models-rnn-lstm-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/10-sequence-models-rnn-lstm-lab",
    "roadmapNumber": 2,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-02-p10-sequence-memory-lab-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-02-p10-sequence-memory-lab-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-02/10-sequence-models-rnn-lstm-lab/01-overview.png",
        "alt": "Sequence Memory Lab overview of recurrent activity classification",
        "label": "Memory lab overview",
        "caption": "The overview maps nine inertial signals through bounded recurrent inference and states the fixture evidence boundary."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/10-sequence-models-rnn-lstm-lab/02-classification-result.png",
        "alt": "RNN activity classification result with probabilities and runtime evidence",
        "label": "Activity inference",
        "caption": "A real fixture sequence is classified through the RNN bundle with ranked probabilities, latency and model version."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/10-sequence-models-rnn-lstm-lab/03-sequence-lab.png",
        "alt": "LSTM state and gate laboratory with PyTorch parity",
        "label": "States and gates",
        "caption": "The sequence lab exposes recurrent inputs, updated state, gate values and exact educational-cell parity."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/10-sequence-models-rnn-lstm-lab/04-model-comparison.png",
        "alt": "RNN LSTM and GRU comparison under one fixture protocol",
        "label": "Model comparison",
        "caption": "RNN, LSTM and GRU are compared under the same split, seed, preprocessing and validation selection rule."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/10-sequence-models-rnn-lstm-lab/05-evaluation.png",
        "alt": "Sequence model evaluation and activity error analysis",
        "label": "Evaluation",
        "caption": "Fixture accuracy, macro metrics and confusion evidence remain explicit and separate from UCI HAR benchmark claims."
      }
    ]
  },
  {
    "id": "path-ai-engineer-generative-models-diffusion-systems-33-stable-diffusion-app-lab",
    "title": "Stable Diffusion Production Studio",
    "category": "AI Engineering",
    "family": "Generative Models Diffusion Systems",
    "summary": "A local-first image generation and editing system built around Stable Diffusion XL. It treats inference as an asynchronous, auditable job—not as a prompt wired directly to a model.",
    "technologies": [
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker"
    ],
    "signals": {
      "files": 87,
      "code": 39,
      "tests": 13,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Generative-Models-Diffusion-Systems/tree/main/33-stable-diffusion-app-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/33-stable-diffusion-app-lab",
    "roadmapNumber": 6,
    "cloudFocus": "AWS",
    "liveUrl": "https://hvnhjxormu2nwsycxg6f2x54sa0yuvgq.lambda-url.us-east-1.on.aws/",
    "apiUrl": "https://hvnhjxormu2nwsycxg6f2x54sa0yuvgq.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-06/33-stable-diffusion-app-lab/01-overview.jpg",
        "alt": "Stable Diffusion Production Studio overview",
        "label": "Overview",
        "caption": "The metadata-mode studio exposes asynchronous job and worker boundaries."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/33-stable-diffusion-app-lab/02-generation.jpg",
        "alt": "Stable Diffusion bounded generation request",
        "label": "Generation",
        "caption": "Model identity and request controls remain visible while unqualified GPU execution stays disabled."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/33-stable-diffusion-app-lab/03-editing.jpg",
        "alt": "Stable Diffusion image editing validation",
        "label": "Editing",
        "caption": "Source hashing, dimension validation and metadata stripping guard edit workflows."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/33-stable-diffusion-app-lab/04-jobs.jpg",
        "alt": "Stable Diffusion durable job lifecycle",
        "label": "Jobs",
        "caption": "PostgreSQL truth, bounded delivery and safety decisions define the lifecycle."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-06/33-stable-diffusion-app-lab/05-governance.jpg",
        "alt": "Stable Diffusion governance and evaluation",
        "label": "Governance",
        "caption": "The reviewed development suite is shown without inventing missing GPU evidence."
      }
    ]
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
      "files": 241,
      "code": 62,
      "tests": 19,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/21-segmentation-quality-control-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/21-segmentation-quality-control-lab",
    "roadmapNumber": 4,
    "cloudFocus": "AWS",
    "liveUrl": "https://fwnivrqjijm7ha442fmskohfji0aameu.lambda-url.us-east-1.on.aws/app/",
    "apiUrl": "https://fwnivrqjijm7ha442fmskohfji0aameu.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-04/21-segmentation-quality-control-lab/01-overview.png",
        "alt": "Surface Quality Control Lab overview with qualification metrics and evidence boundary",
        "label": "Quality overview",
        "caption": "The React console presents the versioned Small U-Net bundle, validation evidence and the locked official-test boundary."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/21-segmentation-quality-control-lab/02-live-inspection.png",
        "alt": "Surface defect inspection rejected by the Small U-Net quality workflow",
        "label": "Defect inspection",
        "caption": "A real backend inference renders the source, probability map, binary mask and rejected piece-level decision."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/21-segmentation-quality-control-lab/03-clean-surface-accept.png",
        "alt": "Clean qualification surface accepted after live segmentation inference",
        "label": "Clean acceptance",
        "caption": "A second real inference confirms the independent ACCEPT path with zero retained defect components."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/21-segmentation-quality-control-lab/04-threshold-policy.png",
        "alt": "Pixel threshold sweep and piece-level quality policy",
        "label": "Threshold policy",
        "caption": "Validation-only pixel calibration remains visibly separate from the operational area policy for accept, review and reject."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/21-segmentation-quality-control-lab/05-model-record.png",
        "alt": "Immutable Small U-Net model record with training trace and limitations",
        "label": "Model record",
        "caption": "The selected bundle keeps its architecture, checkpoint hash, training trace and reuse limitations together."
      }
    ]
  },
  {
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-27-langgraph-tool-agent",
    "title": "Tool Agent Control Room",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "Project 27 is a governed incident-investigation lab for the synthetic AtlasOps platform. It demonstrates a single agent that may propose tool calls while the application retains authority over validation, permissions, budgets, approvals, execution, evidence, and termination.",
    "technologies": [
      "React",
      "Python",
      "Docker",
      "LangGraph",
      "RAG",
      "LLMs"
    ],
    "signals": {
      "files": 182,
      "code": 49,
      "tests": 36,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/tree/main/27-langgraph-tool-agent",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/27-langgraph-tool-agent",
    "roadmapNumber": 5,
    "cloudFocus": "AWS",
    "liveUrl": "https://xvicyoqjqbwhqgx43sufykmvci0jckws.lambda-url.us-east-1.on.aws/app/",
    "apiUrl": "https://xvicyoqjqbwhqgx43sufykmvci0jckws.lambda-url.us-east-1.on.aws/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-05/27-langgraph-tool-agent/01-task-composer.jpg",
        "alt": "AtlasOps bounded task composer",
        "label": "Task composer",
        "caption": "The task surface binds a goal to explicit capability and budget limits."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/27-langgraph-tool-agent/02-live-run.jpg",
        "alt": "AtlasOps persisted LangGraph run",
        "label": "Live run",
        "caption": "Graph progress, model turns, tool calls and token budgets remain observable."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/27-langgraph-tool-agent/03-approval-inbox.jpg",
        "alt": "AtlasOps exact payload approval inbox",
        "label": "Approval inbox",
        "caption": "A reversible sandbox write pauses for review of its exact scoped payload."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/27-langgraph-tool-agent/04-evidence-ledger.jpg",
        "alt": "AtlasOps observed source evidence ledger",
        "label": "Evidence ledger",
        "caption": "Observed sources and tool events persist beside the governed workflow."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-05/27-langgraph-tool-agent/05-evaluation.jpg",
        "alt": "AtlasOps frozen evaluation protocol",
        "label": "Evaluation",
        "caption": "The 80-case campaign is labeled not executed and no hosted-model metrics are invented."
      }
    ]
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
      "files": 8392,
      "code": 68,
      "tests": 245,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/12-transformer-from-architecture-foundations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/12-transformer-from-architecture-foundations-lab",
    "roadmapNumber": 2,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-02-p12-transformer-architecture-lab-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-02-p12-transformer-architecture-lab-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-02/12-transformer-from-architecture-foundations-lab/01-overview.png",
        "alt": "Transformer Architecture Lab overview with encoder decoder evidence",
        "label": "Architecture overview",
        "caption": "The overview maps source tokens through encoder and decoder stages while keeping validation and frozen-test status explicit."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/12-transformer-from-architecture-foundations-lab/02-attention-math.png",
        "alt": "Scaled dot product attention calculation with normalized weights",
        "label": "Attention math",
        "caption": "The attention fixture computes QK transpose, scaling, normalization and context vectors with a numerical difference check."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/12-transformer-from-architecture-foundations-lab/03-architecture-trace.png",
        "alt": "Transformer architecture trace with real token attention matrix",
        "label": "Architecture trace",
        "caption": "A bounded copy sample exposes a real encoder attention matrix with layer, head, token axes and entropy evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/12-transformer-from-architecture-foundations-lab/04-sequence-transduction.png",
        "alt": "Transformer sequence transduction result compared with oracle target",
        "label": "Sequence transduction",
        "caption": "Greedy EOS-bounded decoding reports token accuracy, latency and the exact mismatch between prediction and oracle target."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-02/12-transformer-from-architecture-foundations-lab/05-experiments.png",
        "alt": "Transformer validation experiment registry with ID and OOD evidence",
        "label": "Experiments",
        "caption": "The registry separates ID and OOD validation, records runtime cost and preserves the unopened frozen-test boundary."
      }
    ]
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
      "files": 2435,
      "code": 86,
      "tests": 551,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/13-unsupervised-learning-lab-suite",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/13-unsupervised-learning-lab-suite",
    "roadmapNumber": 3,
    "cloudFocus": "GCP",
    "liveUrl": "https://ai-03-p13-unsupervised-learning-lab-1088743147874.us-central1.run.app/",
    "apiUrl": "https://ai-03-p13-unsupervised-learning-lab-1088743147874.us-central1.run.app/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-03/13-unsupervised-learning-lab-suite/01-overview.png",
        "alt": "Unsupervised Structure Lab overview with label blind clustering evidence",
        "label": "Structure overview",
        "caption": "The overview reports internal geometry, aligned stability, cluster count and runtime without assigning semantic labels."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/13-unsupervised-learning-lab-suite/02-clustering-workspace.png",
        "alt": "Clustering workspace with PCA K means configuration and inferred projection",
        "label": "Clustering workspace",
        "caption": "The workspace binds representation, clustering family, cluster count and seed to an immutable development run."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/13-unsupervised-learning-lab-suite/03-projection-explorer.png",
        "alt": "Projection explorer comparing PCA t SNE and UMAP evidence boundaries",
        "label": "Projection explorer",
        "caption": "Projection quality and out-of-sample behavior remain separate from clustering quality and interpretation."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/13-unsupervised-learning-lab-suite/04-stability-lab.png",
        "alt": "Clustering stability lab with adjusted Rand index and unstable samples",
        "label": "Stability lab",
        "caption": "Seed agreement and subsampling expose assignment fragility before any external labels are revealed."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-03/13-unsupervised-learning-lab-suite/05-run-report.png",
        "alt": "Immutable unsupervised run report with hashes warnings and audit state",
        "label": "Run report",
        "caption": "The report preserves configuration, dataset lineage, stability, warnings and the locked external-audit boundary."
      }
    ]
  },
  {
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-51-vqc-qsvm-comparison-suite",
    "title": "Variational–Kernel Quantum Arena",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "Project 51 of Plan 9 is a controlled, evidence-bounded comparison of variational quantum classifiers, fidelity-kernel SVMs, and strong classical baselines. Every comparable method receives the same sample IDs, split, train-fitted preprocessing, feature budget, and prediction c…",
    "technologies": [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Docker"
    ],
    "signals": {
      "files": 99,
      "code": 59,
      "tests": 14,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/tree/main/51-vqc-qsvm-comparison-suite",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/51-vqc-qsvm-comparison-suite",
    "roadmapNumber": 9,
    "cloudFocus": "Azure",
    "liveUrl": "https://p9-p51-web.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/",
    "apiUrl": "https://p9-p51-api.delightfulwave-8159d6fc.centralus.azurecontainerapps.io/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-09/51-vqc-qsvm-comparison-suite/01-overview.jpg",
        "alt": "VQC QSVM comparison suite overview",
        "label": "Overview",
        "caption": "The suite frames VQC, QSVC and classical baselines under one protocol."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/51-vqc-qsvm-comparison-suite/02-experiment-builder.jpg",
        "alt": "VQC QSVM experiment builder",
        "label": "Experiment builder",
        "caption": "Task, model family and budget choices are assembled in a controlled surface."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/51-vqc-qsvm-comparison-suite/03-circuit-inspector.jpg",
        "alt": "VQC QSVM circuit inspector",
        "label": "Circuit inspector",
        "caption": "Variational and kernel circuit structure is visible beside resource estimates."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/51-vqc-qsvm-comparison-suite/04-comparison-arena.jpg",
        "alt": "VQC QSVM comparison arena",
        "label": "Comparison arena",
        "caption": "Validation and test evidence is compared without declaring a universal winner."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-09/51-vqc-qsvm-comparison-suite/05-evidence.jpg",
        "alt": "VQC QSVM evidence registry",
        "label": "Evidence",
        "caption": "Eight tasks and their frozen evaluation lineage remain inspectable."
      }
    ]
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
      "files": 254,
      "code": 100,
      "tests": 19,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/Vision-Multimodal-Demos/tree/main/04-vision-multimodal-ai-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Vision-Multimodal-AI-Platform/04-vision-multimodal-ai-platform",
    "roadmapNumber": 4,
    "cloudFocus": "AWS",
    "liveUrl": "https://d12p4ywh8pvfjo.cloudfront.net/",
    "apiUrl": "https://d12p4ywh8pvfjo.cloudfront.net/api/docs",
    "gallery": [
      {
        "src": "assets/project-captures/software-engineer/plan-04/04-vision-multimodal-ai-platform/01-overview.png",
        "alt": "Prism vision and multimodal evidence platform overview",
        "label": "Platform overview",
        "caption": "The real Flutter workspace connects classification, detection and image-text retrieval through one asynchronous evidence-first product."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-04/04-vision-multimodal-ai-platform/02-classifier.png",
        "alt": "Prism image classifier module with upload and uncertainty boundaries",
        "label": "Classifier module",
        "caption": "The classification interface keeps upload constraints, ranked-score limitations and the reference-adapter evidence boundary visible."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-04/04-vision-multimodal-ai-platform/03-detection.png",
        "alt": "Prism object detection viewer with threshold and geometry contract",
        "label": "Detection viewer",
        "caption": "The detection module preserves absolute-pixel geometry and makes the visible score threshold an explicit display control."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-04/04-vision-multimodal-ai-platform/04-image-text-query.png",
        "alt": "Executed red object query in the Prism image text assistant",
        "label": "Image-text query",
        "caption": "A real controlled-vocabulary text query is submitted to the seeded local corpus with the product's abstention boundary visible."
      },
      {
        "src": "assets/project-captures/software-engineer/plan-04/04-vision-multimodal-ai-platform/05-retrieved-evidence.png",
        "alt": "Prism image text assistant ranked red object retrieval evidence",
        "label": "Retrieved evidence",
        "caption": "The grounded response returns versioned source assets, stable IDs and similarity scores instead of inventing an answer."
      }
    ]
  },
  {
    "id": "path-ai-engineer-reinforcement-learning-world-models-robotics-simulation-41-vision-action-agent-sim",
    "title": "Vision-Action Driving Studio",
    "category": "AI Engineering",
    "family": "Reinforcement Learning World Models Robotics Simulation",
    "summary": "Project 41 is a simulation-only, evidence-bounded laboratory for policies that map a four-frame pixel history to one of nine frozen macro-actions in CarRacing-v3. It compares random and visual heuristic baselines, Behavior Cloning, Offline DQN, discrete CQL, PPO-CNN and BC-ini…",
    "technologies": [
      "Next.js",
      "Python",
      "PostgreSQL",
      "PyTorch"
    ],
    "signals": {
      "files": 29872,
      "code": 70,
      "tests": 21642,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/tree/main/41-vision-action-agent-sim",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/41-vision-action-agent-sim",
    "roadmapNumber": 7,
    "cloudFocus": "Azure",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-07/41-vision-action-agent-sim/01-overview.jpg",
        "alt": "Vision action agent simulation overview",
        "label": "Overview",
        "caption": "The simulation surface connects dataset, policy inventory and evaluation boundaries."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/41-vision-action-agent-sim/02-dataset.jpg",
        "alt": "Vision action agent dataset registry",
        "label": "Dataset",
        "caption": "The registered transition inventory keeps collection and split evidence visible."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/41-vision-action-agent-sim/03-policy-inventory.jpg",
        "alt": "Vision action policy inventory",
        "label": "Policies",
        "caption": "Candidate policies remain comparable without obscuring their training lineage."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/41-vision-action-agent-sim/04-diagnostics.jpg",
        "alt": "Vision action agent diagnostic workspace",
        "label": "Diagnostics",
        "caption": "Prediction, action and failure diagnostics are presented as separate evidence."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-07/41-vision-action-agent-sim/05-evaluation.jpg",
        "alt": "Vision action agent frozen evaluation",
        "label": "Evaluation",
        "caption": "Simulation-only evaluation reports performance without implying real-driving readiness."
      }
    ]
  },
  {
    "id": "path-ai-engineer-computer-vision-multimodal-ai-edge-optimization-23-vision-language-search-assistant",
    "title": "Vision-Language Retrieval Studio",
    "category": "AI Engineering",
    "family": "Computer Vision Multimodal AI Edge Optimization",
    "summary": "Project 23 of the AI Engineer path turns multimodal similarity into an auditable search product. It retrieves a sealed image collection from text, another image or a short sequence of deterministic refinements. Every answer cites imageid, normalized ranking scores and stored c…",
    "technologies": [
      "React",
      "Python",
      "FastAPI",
      "Docker"
    ],
    "signals": {
      "files": 126,
      "code": 58,
      "tests": 13,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/23-vision-language-search-assistant",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/23-vision-language-search-assistant",
    "roadmapNumber": 4,
    "cloudFocus": "AWS",
    "liveUrl": "https://dv1vtt2v6aeny.cloudfront.net/app/",
    "apiUrl": "https://dv1vtt2v6aeny.cloudfront.net/docs",
    "gallery": [
      {
        "src": "assets/project-captures/ai-engineer/plan-04/23-vision-language-search-assistant/01-retrieval-studio.png",
        "alt": "Lensline vision language retrieval studio with executed city night query",
        "label": "Retrieval studio",
        "caption": "The executed text query exposes retrieval method, index strategy, semantic weight and corpus filters before ranking."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/23-vision-language-search-assistant/02-ranked-evidence.png",
        "alt": "Ranked visual evidence for a city at night query with component scores",
        "label": "Ranked evidence",
        "caption": "Six traceable images return IDs, captions, categories and semantic, lexical and hybrid component scores."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/23-vision-language-search-assistant/03-refinement-room.png",
        "alt": "Vision language grounded refinement session workspace",
        "label": "Refinement room",
        "caption": "The refinement workspace keeps grounded session context and retrieval evidence attached as the search intent changes."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/23-vision-language-search-assistant/04-benchmark.png",
        "alt": "Vision language retrieval benchmark comparing methods and indexes",
        "label": "Retrieval benchmark",
        "caption": "Qualification metrics compare component methods and index strategies using the same versioned retrieval engine as the API."
      },
      {
        "src": "assets/project-captures/ai-engineer/plan-04/23-vision-language-search-assistant/05-failure-atlas.png",
        "alt": "Vision language adversarial failure atlas for negation spatial and abstract queries",
        "label": "Failure atlas",
        "caption": "Fixed adversarial queries expose unresolved negation, spatial relations and abstract language as model-card limitations."
      }
    ]
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
  }
];
