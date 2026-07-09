import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const site = process.cwd();
const root = join(site, "..");
const skip = new Set(["node_modules", ".git", ".venv", "venv", "dist", "build", "target", "coverage", ".angular"]);
const techMatchers = [
  ["Angular", /\bangular\b/i], ["Vue", /\bvue(?:\.js| 3)?\b/i], ["React", /\breact\b/i],
  ["TypeScript", /\btypescript\b/i], ["JavaScript", /\bjavascript\b/i], ["Python", /\bpython\b/i],
  ["FastAPI", /\bfastapi\b/i], ["Spring Boot", /\bspring boot\b/i], ["ASP.NET Core", /asp\.net core/i],
  ["PostgreSQL", /\bpostgres(?:ql)?\b/i], ["Docker", /\bdocker\b/i], ["MapLibre", /\bmaplibre\b/i],
  ["OpenStreetMap", /openstreetmap|open street map/i], ["PyTorch", /\bpytorch\b/i], ["TensorFlow", /\btensorflow\b/i],
  ["scikit-learn", /scikit-learn|sklearn/i], ["Pandas", /\bpandas\b/i], ["NumPy", /\bnumpy\b/i],
  ["MLflow", /\bmlflow\b/i], ["LangGraph", /\blanggraph\b/i], ["RAG", /\brag\b/i],
  ["LLMs", /\bllm(?:s)?\b/i], ["Computer Vision", /computer vision/i], ["Qiskit", /\bqiskit\b/i],
  ["Quantum ML", /quantum machine learning|\bqml\b/i], ["Reinforcement Learning", /reinforcement learning/i],
  ["Cloudflare", /\bcloudflare\b/i], ["Render", /\brender\b/i], ["GitHub Actions", /github actions/i]
];

const titleWords = {
  ai: "AI", ml: "ML", llm: "LLM", llms: "LLMs", rag: "RAG", api: "API", cnn: "CNN",
  rnn: "RNN", lstm: "LSTM", gru: "GRU", gan: "GAN", vae: "VAE", dqn: "DQN", qml: "QML",
  qaoa: "QAOA", vqe: "VQE", pqc: "PQC", sdk: "SDK", mcp: "MCP", ui: "UI", ux: "UX",
  langgraph: "LangGraph", automl: "AutoML", pytorch: "PyTorch", fastapi: "FastAPI", dbscan: "DBSCAN"
};

const titleCase = value => value
  .replace(/^\d{2}-/, "")
  .split("-")
  .map(word => titleWords[word.toLowerCase()] || (word ? word[0].toUpperCase() + word.slice(1) : word))
  .join(" ");

function cleanMarkdown(value) {
  return value
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[`*_>#|]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTitle(markdown, fallback) {
  const line = markdown.split(/\r?\n/).find(item => /^#\s+/.test(item));
  const cleaned = cleanMarkdown(line?.replace(/^#\s+/, "") || fallback).replace(/^[^A-Za-z0-9]+/, "");
  return cleaned.includes("-") && !cleaned.includes(" ") ? titleCase(cleaned) : cleaned;
}

function extractSummary(markdown, fallback) {
  const blocks = markdown
    .replace(/```[\s\S]*?```/g, "")
    .split(/\r?\n\s*\r?\n/)
    .map(cleanMarkdown)
    .filter(block => block.length > 45 && !/^(table of contents|contents|badges|status|technologies|stack)/i.test(block));
  const chosen = blocks.find(block => !block.startsWith(extractTitle(markdown, fallback))) || blocks[0] || fallback;
  return chosen.length > 280 ? `${chosen.slice(0, 277).trim()}…` : chosen;
}

async function walk(directory, found = []) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
    const full = join(directory, entry.name);
    if (entry.isDirectory()) await walk(full, found);
    else found.push(full);
  }
  return found;
}

async function signalsFor(directory) {
  const files = await walk(directory);
  const extensions = files.reduce((map, file) => {
    const ext = file.split(".").pop()?.toLowerCase() || "file";
    map[ext] = (map[ext] || 0) + 1;
    return map;
  }, {});
  const tests = files.filter(file => /(?:test|spec|evaluation|benchmark)/i.test(file)).length;
  const notebooks = extensions.ipynb || 0;
  const code = files.filter(file => /\.(?:py|ts|tsx|js|jsx|java|cs|cpp|c|html|css)$/i.test(file)).length;
  return { files: files.length, code, tests, notebooks };
}

async function makeProject({ directory, category, family, url, fallbackTitle, featured = false, accent = "violet" }) {
  let markdown = "";
  try { markdown = await readFile(join(directory, "README.md"), "utf8"); } catch {}
  const title = extractTitle(markdown, fallbackTitle);
  const extractedSummary = extractSummary(markdown, `${title} is a documented engineering build within ${family}.`);
  const technologies = techMatchers.filter(([, matcher]) => matcher.test(markdown)).map(([name]) => name).slice(0, 7);
  const signals = await signalsFor(directory);
  const status = signals.code >= 4 ? "Implementation" : "Blueprint";
  let summary = extractedSummary;
  if (category === "AI Engineering") {
    summary = status === "Implementation"
      ? "An implementation-stage retail demand workflow with data validation, temporal features, a classical model baseline and evaluation evidence."
      : `A documented ${title} blueprint defining the experiment, modules, evaluation signals and known limitations inside ${titleCase(family)}.`;
  }
  if (category === "Software Engineering") {
    summary = status === "Implementation"
      ? "A partially implemented retail-intelligence platform with Python analytics, processed sales data, demand insights and measured baseline performance."
      : `A product-platform blueprint translating ${title} into a dashboard, API, AI services, data, reports and implementation evidence.`;
  }
  return {
    id: relative(root, directory).split(sep).join("-").toLowerCase(),
    title,
    category,
    family: titleCase(family),
    summary,
    technologies,
    signals,
    status,
    url,
    featured,
    accent,
    path: relative(root, directory).split(sep).join("/")
  };
}

async function repositoryUrl(directory, fallback) {
  try {
    const config = await readFile(join(directory, ".git", "config"), "utf8");
    const remote = config.match(/url\s*=\s*(.+)/)?.[1]?.trim();
    if (!remote) return fallback;
    return remote
      .replace(/^git@github\.com:/, "https://github.com/")
      .replace(/^ssh:\/\/git@github\.com\//, "https://github.com/")
      .replace(/\.git$/, "");
  } catch {
    return fallback;
  }
}

const curated = [
  {
    id: "smartlocation",
    title: "SmartLocation",
    eyebrow: "Route intelligence / Lima",
    category: "University",
    family: "Mobility systems",
    summary: "A functional geospatial console for Lima that calculates urban routes, resolves real places and exposes distance, time and graph statistics through a layered map experience.",
    challenge: "Make algorithmic route planning understandable without flattening the engineering behind graph search, road constraints and geospatial data.",
    solution: "An Angular 22 experience with layered architecture, MapLibre rendering, OpenStreetMap/Overpass data and a Python engine that runs Dijkstra, A* and BFS. The TypeScript comparison surface remains an explicit next step.",
    architecture: ["Domain graph algorithms", "Application use cases + facade", "Infrastructure repositories", "MapLibre presentation system"],
    capabilities: ["Dijkstra, A* and BFS route engine", "43 Lima districts and 44 local boundaries", "Distance, time and graph statistics", "Nominatim geocoding and OSRM fallback"],
    technologies: ["Angular", "TypeScript", "MapLibre", "OpenStreetMap", "OSRM", "Python"],
    signals: { files: 75, code: 32, tests: 1, notebooks: 0 },
    status: "Functional demo",
    url: "https://github.com/JeanLoa/University/tree/main/01-portfolio-projects/smartlocation-route-optimization-platform",
    featured: true,
    accent: "lime",
    visual: "map"
  },
  {
    id: "lowcortisol",
    title: "LowCortisol",
    eyebrow: "Water & gas operations",
    category: "University",
    family: "Resource monitoring",
    summary: "A full-stack operations platform for monitoring water and gas across sites, rooms, devices, sensors, valves, alerts, reports and support workflows.",
    challenge: "Connect physical resource monitoring with the people, places, controls and decisions that make consumption actionable.",
    solution: "A Vue 3 operational SPA and ASP.NET Core API organized through DDD/CQRS bounded contexts, reusable UI primitives and explicit product relationships.",
    architecture: ["Bounded-context frontend modules", "DDD/CQRS backend", "PostgreSQL persistence", "Role-aware operational workflows"],
    capabilities: ["Sites, rooms and device groups", "Monitoring and valve control", "Alerts, goals and routines", "Reports, plans and support"],
    technologies: ["Vue", "JavaScript", "ASP.NET Core", "PostgreSQL", "Docker", "Render"],
    signals: { files: 757, code: 757, tests: 0, notebooks: 0 },
    status: "Built system",
    url: "https://github.com/JeanLoa/University/tree/main/01-portfolio-projects/lowcortisol-digital-health-platform",
    featured: true,
    accent: "blue",
    image: "assets/lowcortisol-reports.png"
  },
  {
    id: "electrocorp",
    title: "ElectroCorp",
    eyebrow: "Smart energy / enterprise flow",
    category: "University",
    family: "Energy systems",
    summary: "An enterprise-style smart energy platform spanning subscriptions, spaces, devices, monitoring, alerts, reports, support, deployment and disciplined releases.",
    challenge: "Model a connected energy product whose frontend, backend, database, documentation and delivery history all tell the same architectural story.",
    solution: "An Angular workflow layer over a Spring Boot platform with DDD/CQRS modules, JWT security, PostgreSQL and a guarded Gitflow release chain.",
    architecture: ["Angular bounded workflows", "Spring Boot DDD/CQRS", "JWT + BCrypt security", "Gitflow release architecture"],
    capabilities: ["8 bounded contexts and 99 HTTP operations", "Device and energy monitoring", "Alerts, reports, subscriptions and support", "Versioned releases and deployment evidence"],
    technologies: ["Angular", "TypeScript", "Spring Boot", "PostgreSQL", "Docker", "Render"],
    signals: { files: 1075, code: 1075, tests: 83, notebooks: 0 },
    status: "Built system",
    url: "https://github.com/JeanLoa/University/tree/main/01-portfolio-projects/electrocorp-enterprise-platform-suite",
    featured: true,
    accent: "cyan",
    image: "assets/electrocorp-home.png"
  }
];

const generated = [];
const collections = [
  { base: "Path-AI-Engineer", category: "AI Engineering", org: "Path-AI-Engineer" },
  { base: "Path-Software-Engineer", category: "Software Engineering", org: "Path-Software-Engineer" }
];

for (const collection of collections) {
  const collectionPath = join(root, collection.base);
  for (const repository of await readdir(collectionPath, { withFileTypes: true })) {
    if (!repository.isDirectory() || repository.name.startsWith(".")) continue;
    const repositoryPath = join(collectionPath, repository.name);
    const baseUrl = await repositoryUrl(repositoryPath, `https://github.com/${collection.org}/${repository.name}`);
    const entries = await readdir(repositoryPath, { withFileTypes: true });
    const numbered = entries.filter(entry => entry.isDirectory() && /^\d{2}-/.test(entry.name));
    for (const entry of numbered) {
      const projectPath = join(repositoryPath, entry.name);
      const projectUrl = `${baseUrl}/tree/main/${entry.name}`;
      generated.push(await makeProject({
        directory: projectPath,
        category: collection.category,
        family: repository.name,
        url: projectUrl,
        fallbackTitle: titleCase(entry.name),
        accent: collection.category === "AI Engineering" ? "violet" : "blue"
      }));
    }
  }
}

const supplementalDefinitions = [
  {
    path: "University/02-computer-science-coursework/algorithm-complexity-analysis",
    title: "Algorithm Complexity Analysis",
    category: "University",
    family: "Computer Science Coursework",
    summary: "A coursework collection focused on reasoning about time, space and growth rates before choosing an implementation strategy.",
    status: "Coursework"
  },
  {
    path: "University/02-computer-science-coursework/cpp-data-structures-and-algorithms",
    title: "C++ Data Structures & Algorithms",
    category: "University",
    family: "Computer Science Coursework",
    summary: "Twenty-four implementations spanning AVL trees, linked graphs, stacks, queues, searching, sorting and dynamic memory.",
    status: "Implemented coursework"
  },
  {
    path: "University/02-computer-science-coursework/cpp-introduction-to-algorithms",
    title: "Introduction to Algorithms in C++",
    category: "University",
    family: "Computer Science Coursework",
    summary: "Foundational algorithm exercises that build from control flow and decomposition toward reusable problem-solving patterns.",
    status: "Implemented coursework"
  },
  {
    path: "University/02-computer-science-coursework/cpp-object-oriented-algorithms",
    title: "Object-Oriented Algorithms in C++",
    category: "University",
    family: "Computer Science Coursework",
    summary: "Fifty-one exercises and simulations using composition, inheritance, polymorphism, games and Windows Forms project work.",
    status: "Implemented coursework"
  },
  {
    path: "University/03-academic-final-projects/final-project-deliverables/semester-01-cpp-final-project",
    title: "Educational Math Adventure",
    category: "University",
    family: "Academic Capstones",
    summary: "A console adventure built around Pythagorean and equation challenges, with three worlds, tutors, enemies and scoring.",
    status: "Academic capstone"
  },
  {
    path: "University/03-academic-final-projects/final-project-deliverables/semester-02-deliverables",
    title: "C++ Data-Structure Supermarket",
    category: "University",
    family: "Academic Capstones",
    summary: "A supermarket system combining circular lists, queues, stacks, AVL trees, hashing, graphs, sales flows and persistence.",
    status: "Archived capstone"
  },
  {
    path: "University/03-academic-final-projects/final-project-deliverables/semester-03-deliverables",
    title: "C++/CLI Action Game",
    category: "University",
    family: "Academic Capstones",
    summary: "A Windows Forms action game with sprites, a playable hero, enemies, a boss, projectiles, health, audio and animation.",
    status: "Archived capstone"
  },
  {
    path: "Leisure/02-machine-learning-labs",
    title: "Machine Learning Lab Collection",
    category: "Leisure",
    family: "Independent Laboratories",
    summary: "Hands-on clustering, data structures, visualisation, model benchmarking and NumPy experiments kept as a learning laboratory.",
    status: "Lab collection"
  },
  {
    path: "Leisure/02-machine-learning-labs/model-benchmarking",
    title: "LLM Benchmark Markov Chain Analysis",
    category: "Leisure",
    family: "Independent Laboratories",
    summary: "An exploratory comparison of seventeen language models using normalisation, t-SNE, transition matrices and Markov-chain analysis.",
    status: "Exploration"
  },
  {
    path: "Leisure/03-machine-learning-pipelines",
    title: "Five Machine Learning Pipelines",
    category: "Leisure",
    family: "Independent Laboratories",
    summary: "Regression and classification pipelines across housing, fraud, Iris, heart disease and Titanic datasets, grouped as practice builds.",
    status: "Lab collection"
  },
  {
    path: "Leisure/04-python-fundamentals",
    title: "Python Fundamentals",
    category: "Leisure",
    family: "Programming Foundations",
    summary: "Eleven small programs covering arithmetic, collections, loops, summaries and foundational problem-solving in Python.",
    status: "Practice collection"
  },
  {
    path: "Leisure/05-cpp-fundamentals",
    title: "C++ Fundamentals",
    category: "Leisure",
    family: "Programming Foundations",
    summary: "Six progressive modules covering basic programming, mathematics, pointers, records, console games, patterns and assessments.",
    status: "Practice collection"
  },
  {
    path: "University/01-portfolio-projects/electrocorp-enterprise-platform-suite/java-fundamentals-course-electrocorp",
    title: "Java Fundamentals Course",
    category: "University",
    family: "Technical Education",
    summary: "An eleven-lesson Java course with starter files, completed examples, online execution guidance and aligned teaching documentation.",
    status: "Published course"
  },
  {
    path: "University/01-portfolio-projects/lowcortisol-digital-health-platform/webdev-course-lowcortisol",
    title: "Web Development Fundamentals Course",
    category: "University",
    family: "Technical Education",
    summary: "An eight-lesson HTML and CSS learning path with reusable resources, lesson links and delivery-ready course material.",
    status: "Published course"
  }
];

for (const definition of supplementalDefinitions) {
  const directory = join(root, ...definition.path.split("/"));
  const repository = definition.path.startsWith("University/") ? "University" : "Leisure";
  const insideRepository = definition.path.split("/").slice(1).join("/");
  const project = await makeProject({
    directory,
    category: definition.category,
    family: definition.family,
    url: `https://github.com/JeanLoa/${repository}/tree/main/${insideRepository}`,
    fallbackTitle: definition.title,
    accent: definition.category === "University" ? "cyan" : "orange"
  });
  generated.push({ ...project, title: definition.title, summary: definition.summary, status: definition.status });
}

const roadmapProjects = [
  [67, "Final AI + Quantum + Robotics Architecture", "An integration map for service boundaries, API contracts, cloud infrastructure and Kubernetes-ready deployment."],
  [68, "Core Multi-Service AI Platform", "A roadmap for an API gateway, RAG, agents, tools, logs and evaluation hooks across a shared AI service layer."],
  [69, "Quantum & QML Service Layer", "A planned provider router, job system, experiment registry, result normalisation and cost-awareness layer."],
  [70, "Embodied Simulation Platform", "A roadmap connecting simulation, perception-memory-action loops, planning, control and explicit safety constraints."],
  [71, "Safety, Observability & Evaluation Suite", "A cross-system plan for logs, metrics, traces, incident reports and a unified quality dashboard."],
  [72, "AI + Quantum + Robotics Capstone", "The final integration roadmap: developer portal, API documentation, evaluation evidence, safety report and product demo."]
].map(([number, title, summary]) => ({
  id: `roadmap-${number}`,
  title,
  category: "AI Engineering",
  family: "Final AI Quantum Robotics Platform",
  summary,
  technologies: [],
  signals: { files: 0, code: 0, tests: 0, notebooks: 0 },
  status: "Roadmap",
  url: "https://github.com/Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform",
  featured: false,
  accent: "orange",
  path: "Path-AI-Engineer/Final-AI-Quantum-Robotics-Platform/README.md"
}));

generated.push(...roadmapProjects);

generated.sort((a, b) => a.title.localeCompare(b.title));
const payload = [...curated, ...generated];
await writeFile(join(site, "projects-data.js"), `window.PORTFOLIO_PROJECTS = ${JSON.stringify(payload, null, 2)};\n`, "utf8");
console.log(`Generated ${payload.length} project records (${generated.length} from engineering paths).`);
