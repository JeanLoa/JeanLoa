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
    "title": "AI Recommendation Logic",
    "eyebrow": "DecodeLabs / Project 03",
    "category": "Internships",
    "organization": "DecodeLabs",
    "sequence": "03",
    "family": "Artificial Intelligence Internship",
    "summary": "A planned recommendation system that will match user interests with item attributes through explicit preference and similarity logic.",
    "challenge": "Move from generic suggestions to explainable pattern alignment between user profiles and candidate items.",
    "solution": "The official project brief is available and scoped; implementation has not started, so this entry remains explicitly pending.",
    "architecture": [
      "User preference input",
      "Profile and item attributes",
      "Similarity or rule matching",
      "Ranked recommendation output"
    ],
    "capabilities": [
      "Capture choices and interests",
      "Match preferences",
      "Explain recommendation logic",
      "Display ranked items"
    ],
    "technologies": [
      "Python",
      "Recommendation Systems"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Pending",
    "url": "https://github.com/JeanLoa/DecodeLabs",
    "featured": false,
    "internship": true,
    "accent": "internship"
  },
  {
    "id": "decodelabs-optic-nerve",
    "title": "Machine's Optic Nerve",
    "eyebrow": "DecodeLabs / Project 04",
    "category": "Internships",
    "organization": "DecodeLabs",
    "sequence": "04",
    "family": "Artificial Intelligence Internship",
    "summary": "A planned image and text recognition pipeline for extracting machine-readable information from raw visual data with validated confidence.",
    "challenge": "Bridge unstructured images and scanned documents with reliable text or object recognition.",
    "solution": "The official brief defines an OCR or object-recognition pipeline; implementation remains pending and is not represented as completed work.",
    "architecture": [
      "Raw image ingestion",
      "Image preprocessing",
      "OCR or object detection",
      "Validated recognition output"
    ],
    "capabilities": [
      "Process unstructured visual data",
      "Recognize text or objects",
      "Report confidence",
      "Produce machine-readable results"
    ],
    "technologies": [
      "Python",
      "OpenCV",
      "Tesseract",
      "MobileNet SSD"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Pending",
    "url": "https://github.com/JeanLoa/DecodeLabs",
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
      "Render"
    ],
    "signals": {
      "files": 757,
      "code": 757,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Built system",
    "url": "https://github.com/JeanLoa/University/tree/main/01-portfolio-projects/lowcortisol-digital-health-platform",
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
      "Render"
    ],
    "signals": {
      "files": 1075,
      "code": 1075,
      "tests": 83,
      "notebooks": 0
    },
    "status": "Built system",
    "url": "https://github.com/JeanLoa/University/tree/main/01-portfolio-projects/electrocorp-enterprise-platform-suite",
    "featured": true,
    "accent": "university",
    "image": "assets/electrocorp-home.png"
  },
  {
    "id": "path-software-engineer-advanced-ml-decision-platform-03-advanced-ml-decision-platform",
    "title": "Advanced ML Decision Platform",
    "category": "Software Engineering",
    "family": "Advanced ML Decision Platform",
    "summary": "A product-platform blueprint translating Advanced ML Decision Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Docker",
      "GCP"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-Software-Engineer/Advanced-ML-Applied-Tools/tree/main/03-advanced-ml-decision-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Advanced-ML-Decision-Platform/03-advanced-ml-decision-platform"
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
      "LLMs",
      "GCP"
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
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/29-agentic-workflow-langgraph-lab"
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
      "Docker",
      "GCP"
    ],
    "signals": {
      "files": 261,
      "code": 104,
      "tests": 95,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/06-ai-software-foundations-platform",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/06-ai-software-foundations-platform"
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
    "path": "Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/66-android-systems-cognitive-architecture"
  },
  {
    "id": "path-ai-engineer-advanced-ml-backgrounds-14-anomaly-detection-monitor",
    "title": "Anomaly Detection Monitor",
    "category": "AI Engineering",
    "family": "Advanced ML Backgrounds",
    "summary": "A documented Anomaly Detection Monitor blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced ML Backgrounds.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/14-anomaly-detection-monitor",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/14-anomaly-detection-monitor"
  },
  {
    "id": "path-ai-engineer-deep-learning-core-11-autoencoder-representation-lab",
    "title": "Autoencoder Representation Lab",
    "category": "AI Engineering",
    "family": "Deep Learning Core",
    "summary": "A documented Autoencoder Representation Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Deep Learning Core.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/11-autoencoder-representation-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/11-autoencoder-representation-lab"
  },
  {
    "id": "path-ai-engineer-advanced-ml-backgrounds-18-automl-meta-learning-benchmark-lab",
    "title": "AutoML Meta Learning Benchmark Lab",
    "category": "AI Engineering",
    "family": "Advanced ML Backgrounds",
    "summary": "A documented AutoML Meta Learning Benchmark Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced ML Backgrounds.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 1,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/18-automl-meta-learning-benchmark-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/18-automl-meta-learning-benchmark-lab"
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
    "title": "Causal Promotion Effect Lab",
    "category": "AI Engineering",
    "family": "Advanced ML Backgrounds",
    "summary": "A documented Causal Promotion Effect Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced ML Backgrounds.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/16-causal-promotion-effect-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/16-causal-promotion-effect-lab"
  },
  {
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-27-chunking-retrieval-evaluation-lab",
    "title": "Chunking Retrieval Evaluation Lab",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "A documented Chunking Retrieval Evaluation Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside LLMs RAG Agents Agentic Systems.",
    "technologies": [
      "RAG",
      "LLMs",
      "GCP"
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
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/27-chunking-retrieval-evaluation-lab"
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
      "files": 573,
      "code": 86,
      "tests": 326,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/03-classical-model-comparison-suite",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/03-classical-model-comparison-suite"
  },
  {
    "id": "path-ai-engineer-deep-learning-core-09-cnn-foundations-image-classifier",
    "title": "CNN Foundations Image Classifier",
    "category": "AI Engineering",
    "family": "Deep Learning Core",
    "summary": "A documented CNN Foundations Image Classifier blueprint defining the experiment, modules, evaluation signals and known limitations inside Deep Learning Core.",
    "technologies": [
      "PyTorch",
      "Computer Vision"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/09-cnn-foundations-image-classifier",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/09-cnn-foundations-image-classifier"
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
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/35-conditioned-generation-control-lab"
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
      "Docker",
      "GCP",
      "Render"
    ],
    "signals": {
      "files": 281,
      "code": 107,
      "tests": 65,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/04-customer-segmentation-and-churn-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/04-customer-segmentation-and-churn-api"
  },
  {
    "id": "path-software-engineer-deep-learning-software-lab-platform-02-deep-learning-visual-lab-platform",
    "title": "Deep Learning Visual Lab Platform",
    "category": "Software Engineering",
    "family": "Deep Learning Software Lab Platform",
    "summary": "A product-platform blueprint translating Deep Learning Visual Lab Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-Software-Engineer/Deep-Learning-Visual-Tools/tree/main/02-deep-learning-visual-lab-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Deep-Learning-Software-Lab-Platform/02-deep-learning-visual-lab-platform"
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
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/39-deep-q-network-gymnasium-lab"
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
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/34-diffusion-denoising-foundations-lab"
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
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/24-edge-vision-optimization-lab"
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
    "path": "Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/61-embodied-ai-foundations-lab"
  },
  {
    "id": "path-software-engineer-embodied-ai-robotics-software-platform-11-embodied-robotics-control-platform",
    "title": "Embodied AI Robotics Platform",
    "category": "Software Engineering",
    "family": "Embodied AI Robotics Software Platform",
    "summary": "A product-platform blueprint translating Embodied AI Robotics Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "GCP"
    ],
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
    "path": "Path-Software-Engineer/Embodied-AI-Robotics-Software-Platform/11-embodied-robotics-control-platform"
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
    "path": "Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/56-enterprise-ai-product-line"
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
    "path": "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/README.md"
  },
  {
    "id": "path-software-engineer-final-ai-quantum-robotics-software-platform-12-ai-quantum-robotics-platform-portal",
    "title": "Final AI Quantum Robotics Platform",
    "category": "Software Engineering",
    "family": "Final AI Quantum Robotics Software Platform",
    "summary": "A product-platform blueprint translating Final AI Quantum Robotics Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Streamlit",
      "GCP",
      "Render"
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
    "path": "Path-Software-Engineer/Final-AI-Quantum-Robotics-Software-Platform/12-ai-quantum-robotics-platform-portal"
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
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/33-gan-image-generation-lab"
  },
  {
    "id": "path-software-engineer-generative-ai-control-platform-06-generative-ai-control-platform",
    "title": "Generative AI Control Platform",
    "category": "Software Engineering",
    "family": "Generative AI Control Platform",
    "summary": "A product-platform blueprint translating Generative AI Control Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Docker",
      "GCP"
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
    "path": "Path-Software-Engineer/Generative-AI-Control-Platform/06-generative-ai-control-platform"
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
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/36-generative-ai-evaluation-suite"
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
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/31-generative-models-foundations-lab"
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
    "path": "Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/64-human-robot-interaction-safety-lab"
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
    "path": "Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/65-humanoid-robotics-architecture-blueprint"
  },
  {
    "id": "path-ai-engineer-advanced-quantum-machine-learning-hybrid-ai-quantum-platforms-54-hybrid-ai-quantum-platform-blueprint",
    "title": "Hybrid AI Quantum Platform Blueprint",
    "category": "AI Engineering",
    "family": "Advanced Quantum Machine Learning Hybrid AI Quantum Platforms",
    "summary": "A documented Hybrid AI Quantum Platform Blueprint blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced Quantum Machine Learning Hybrid AI Quantum Platforms.",
    "technologies": [
      "Quantum ML",
      "GCP"
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
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/54-hybrid-ai-quantum-platform-blueprint"
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
      "GCP",
      "Render"
    ],
    "signals": {
      "files": 286,
      "code": 106,
      "tests": 76,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/05-inventory-optimization-ml-service",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/05-inventory-optimization-ml-service"
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
      "LLMs",
      "GCP"
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
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/30-llm-evaluation-guardrails-mcp-suite"
  },
  {
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-28-llm-tool-use-function-calling-lab",
    "title": "LLM Tool Use Function Calling Lab",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "A documented LLM Tool Use Function Calling Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside LLMs RAG Agents Agentic Systems.",
    "technologies": [
      "RAG",
      "LLMs",
      "GCP"
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
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/28-llm-tool-use-function-calling-lab"
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
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/23-multimodal-image-text-assistant"
  },
  {
    "id": "path-ai-engineer-deep-learning-core-07-neural-network-foundations-lab",
    "title": "Neural Network Foundations Lab",
    "category": "AI Engineering",
    "family": "Deep Learning Core",
    "summary": "A documented Neural Network Foundations Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Deep Learning Core.",
    "technologies": [
      "PyTorch"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/07-neural-network-foundations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/07-neural-network-foundations-lab"
  },
  {
    "id": "path-ai-engineer-computer-vision-multimodal-ai-edge-optimization-21-object-detection-retail-lab",
    "title": "Object Detection Retail Lab",
    "category": "AI Engineering",
    "family": "Computer Vision Multimodal AI Edge Optimization",
    "summary": "A documented Object Detection Retail Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Computer Vision Multimodal AI Edge Optimization.",
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
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/21-object-detection-retail-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/21-object-detection-retail-lab"
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
    "path": "Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/62-perception-memory-action-agent-lab"
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
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/48-post-quantum-security-and-hybrid-workflows-lab"
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
    "path": "Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/57-post-quantum-security-product-blueprint"
  },
  {
    "id": "path-ai-engineer-advanced-ml-backgrounds-17-probabilistic-demand-forecasting",
    "title": "Probabilistic Demand Forecasting",
    "category": "AI Engineering",
    "family": "Advanced ML Backgrounds",
    "summary": "A documented Probabilistic Demand Forecasting blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced ML Backgrounds.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/17-probabilistic-demand-forecasting",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/17-probabilistic-demand-forecasting"
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
    "title": "PyTorch Regression Classification API",
    "category": "AI Engineering",
    "family": "Deep Learning Core",
    "summary": "A documented PyTorch Regression Classification API blueprint defining the experiment, modules, evaluation signals and known limitations inside Deep Learning Core.",
    "technologies": [
      "FastAPI",
      "PyTorch"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/08-pytorch-regression-classification-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/08-pytorch-regression-classification-api"
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
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/38-q-learning-agent-lab"
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
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/52-qaoa-vqe-optimizer-comparison-lab"
  },
  {
    "id": "path-software-engineer-qml-benchmark-software-platform-09-qml-benchmark-platform",
    "title": "QML Benchmark Hybrid Platform",
    "category": "Software Engineering",
    "family": "QML Benchmark Software Platform",
    "summary": "A product-platform blueprint translating QML Benchmark Hybrid Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Quantum ML",
      "GCP"
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
    "path": "Path-Software-Engineer/QML-Benchmark-Software-Platform/09-qml-benchmark-platform"
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
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/45-quantum-algorithms-basics-lab"
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
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/44-quantum-circuits-and-gates-playground"
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
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/46-quantum-cloud-provider-comparison-lab"
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
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/43-quantum-computing-foundations-lab"
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
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/49-quantum-data-encoding-lab"
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
    "path": "Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/59-quantum-developer-platform-design"
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
    "path": "Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/55-quantum-first-company-vision"
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
    "path": "Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/60-quantum-first-platform-roadmap"
  },
  {
    "id": "path-software-engineer-quantum-first-product-platform-10-quantum-first-product-platform",
    "title": "Quantum First Product Platform",
    "category": "Software Engineering",
    "family": "Quantum First Product Platform",
    "summary": "A product-platform blueprint translating Quantum First Product Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Python",
      "GCP"
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
    "path": "Path-Software-Engineer/Quantum-First-Product-Platform/10-quantum-first-product-platform"
  },
  {
    "id": "path-software-engineer-quantum-foundations-software-platform-08-quantum-foundations-visual-platform",
    "title": "Quantum Foundations Software Platform",
    "category": "Software Engineering",
    "family": "Quantum Foundations Software Platform",
    "summary": "A product-platform blueprint translating Quantum Foundations Software Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Streamlit",
      "GCP",
      "Render"
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
    "path": "Path-Software-Engineer/Quantum-Foundations-Software-Platform/08-quantum-foundations-visual-platform"
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
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/51-quantum-kernel-benchmark-lab"
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
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/53-quantum-noise-and-qml-limitations-lab"
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
    "path": "Path-AI-Engineer/Quantum-Computing-Quantum-AI-Foundations/47-quantum-optimization-foundations-lab"
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
    "path": "Path-AI-Engineer/Quantum-First-Business-Product-Developer-Platform/58-quantum-optimization-service-proposal"
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
      "LLMs",
      "GCP"
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
    "path": "Path-Software-Engineer/RAG-Agentic-Software-Platform/05-rag-agent-workflow-platform"
  },
  {
    "id": "path-ai-engineer-llms-rag-agents-agentic-systems-26-rag-document-assistant",
    "title": "RAG Document Assistant",
    "category": "AI Engineering",
    "family": "LLMs RAG Agents Agentic Systems",
    "summary": "A documented RAG Document Assistant blueprint defining the experiment, modules, evaluation signals and known limitations inside LLMs RAG Agents Agentic Systems.",
    "technologies": [
      "RAG",
      "LLMs",
      "GCP"
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
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/26-rag-document-assistant"
  },
  {
    "id": "path-ai-engineer-advanced-ml-backgrounds-15-recommender-system-api",
    "title": "Recommender System API",
    "category": "AI Engineering",
    "family": "Advanced ML Backgrounds",
    "summary": "A documented Recommender System API blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced ML Backgrounds.",
    "technologies": [
      "FastAPI"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/15-recommender-system-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/15-recommender-system-api"
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
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/37-reinforcement-learning-foundations-gridworld"
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
      "Pandas",
      "GCP",
      "Render"
    ],
    "signals": {
      "files": 216,
      "code": 60,
      "tests": 83,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/01-retail-demand-prediction-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/01-retail-demand-prediction-api"
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
      "FastAPI",
      "GCP"
    ],
    "signals": {
      "files": 818,
      "code": 230,
      "tests": 168,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-Software-Engineer/Applied-ML-Software-Platform/tree/main/01-retail-intelligence-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Applied-AI-Software-Platform/01-retail-intelligence-platform"
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
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/40-reward-design-and-agent-evaluation-lab"
  },
  {
    "id": "path-software-engineer-rl-simulation-software-platform-07-rl-simulation-control-platform",
    "title": "Rl Simulation Control Platform",
    "category": "Software Engineering",
    "family": "RL Simulation Software Platform",
    "summary": "A product-platform blueprint translating Rl Simulation Control Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Docker",
      "Reinforcement Learning",
      "GCP",
      "Render"
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
    "path": "Path-Software-Engineer/RL-Simulation-Software-Platform/07-rl-simulation-control-platform"
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
    "path": "Path-AI-Engineer/Embodied-AI-Humanoid-Robotics-Android-Systems/63-robot-task-planning-control-lab"
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
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/42-robotics-simulation-control-lab"
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
      "files": 410,
      "code": 147,
      "tests": 137,
      "notebooks": 0
    },
    "status": "Implementation",
    "url": "https://github.com/Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/tree/main/02-sales-forecasting-dashboard-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Machine-Learning-Engineering-Software-Foundations/02-sales-forecasting-dashboard-api"
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
      "LLMs",
      "GCP"
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
    "path": "Path-AI-Engineer/LLMs-RAG-Agents-Agentic-Systems/25-semantic-search-embeddings-api"
  },
  {
    "id": "path-ai-engineer-deep-learning-core-10-sequence-models-rnn-lstm-lab",
    "title": "Sequence Models RNN LSTM Lab",
    "category": "AI Engineering",
    "family": "Deep Learning Core",
    "summary": "A documented Sequence Models RNN LSTM Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Deep Learning Core.",
    "technologies": [
      "LLMs"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/10-sequence-models-rnn-lstm-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/10-sequence-models-rnn-lstm-lab"
  },
  {
    "id": "path-ai-engineer-computer-vision-multimodal-ai-edge-optimization-19-transfer-learning-image-classifier",
    "title": "Transfer Learning Image Classifier",
    "category": "AI Engineering",
    "family": "Computer Vision Multimodal AI Edge Optimization",
    "summary": "A documented Transfer Learning Image Classifier blueprint defining the experiment, modules, evaluation signals and known limitations inside Computer Vision Multimodal AI Edge Optimization.",
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
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/19-transfer-learning-image-classifier",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/19-transfer-learning-image-classifier"
  },
  {
    "id": "path-ai-engineer-deep-learning-core-12-transformer-architecture-foundations-lab",
    "title": "Transformer Architecture Foundations Lab",
    "category": "AI Engineering",
    "family": "Deep Learning Core",
    "summary": "A documented Transformer Architecture Foundations Lab blueprint defining the experiment, modules, evaluation signals and known limitations inside Deep Learning Core.",
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
    "url": "https://github.com/Path-AI-Engineer/Deep-Learning-Core/tree/main/12-transformer-architecture-foundations-lab",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Deep-Learning-Core/12-transformer-architecture-foundations-lab"
  },
  {
    "id": "path-ai-engineer-advanced-ml-backgrounds-13-unsupervised-learning-lab-suite",
    "title": "Unsupervised Learning Lab Suite",
    "category": "AI Engineering",
    "family": "Advanced ML Backgrounds",
    "summary": "A documented Unsupervised Learning Lab Suite blueprint defining the experiment, modules, evaluation signals and known limitations inside Advanced ML Backgrounds.",
    "technologies": [],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Advanced-ML-Backgrounds/tree/main/13-unsupervised-learning-lab-suite",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Advanced-ML-Backgrounds/13-unsupervised-learning-lab-suite"
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
    "path": "Path-AI-Engineer/Generative-Models-Diffusion-Systems/32-variational-autoencoder-lab"
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
    "path": "Path-AI-Engineer/Advanced-Quantum-Machine-Learning-Hybrid-AI-Quantum-Platforms/50-variational-quantum-classifier-lab"
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
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/22-video-understanding-basics-lab"
  },
  {
    "id": "path-software-engineer-vision-multimodal-ai-platform-04-vision-multimodal-ai-platform",
    "title": "Vision Multimodal AI Platform",
    "category": "Software Engineering",
    "family": "Vision Multimodal AI Platform",
    "summary": "A product-platform blueprint translating Vision Multimodal AI Platform into a dashboard, API, AI services, data, reports and implementation evidence.",
    "technologies": [
      "Docker",
      "Computer Vision",
      "GCP"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-Software-Engineer/Vision-Multimodal-Demos/tree/main/04-vision-multimodal-ai-platform",
    "featured": false,
    "accent": "blue",
    "path": "Path-Software-Engineer/Vision-Multimodal-AI-Platform/04-vision-multimodal-ai-platform"
  },
  {
    "id": "path-ai-engineer-computer-vision-multimodal-ai-edge-optimization-20-visual-search-embeddings-api",
    "title": "Visual Search Embeddings API",
    "category": "AI Engineering",
    "family": "Computer Vision Multimodal AI Edge Optimization",
    "summary": "A documented Visual Search Embeddings API blueprint defining the experiment, modules, evaluation signals and known limitations inside Computer Vision Multimodal AI Edge Optimization.",
    "technologies": [
      "FastAPI",
      "Computer Vision"
    ],
    "signals": {
      "files": 1,
      "code": 0,
      "tests": 0,
      "notebooks": 0
    },
    "status": "Blueprint",
    "url": "https://github.com/Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/tree/main/20-visual-search-embeddings-api",
    "featured": false,
    "accent": "violet",
    "path": "Path-AI-Engineer/Computer-Vision-Multimodal-AI-Edge-Optimization/20-visual-search-embeddings-api"
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
    "path": "Path-AI-Engineer/Reinforcement-Learning-World-Models-Robotics-Simulation/41-world-models-planning-mini-lab"
  }
];
