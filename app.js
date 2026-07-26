(() => {
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS)
    ? window.PORTFOLIO_PROJECTS
    : [];

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobileNavigation = window.matchMedia("(max-width: 860px)");

  const categoryDefinitions = [
    {
      category: "Internships",
      rootId: "internship-projects",
      sectionId: "internships",
      label: "Internship",
      previewCount: 3,
      groupName: project => project.organization || "Internship",
      groupOrder: new Map([["DecodeLabs", 1], ["SpotterAI", 2]])
    },
    {
      category: "University",
      rootId: "university-projects",
      sectionId: "university",
      label: "Collection",
      previewCount: 3,
      groupName: project => {
        const portfolioFamilies = new Set([
          "Mobility systems",
          "Resource monitoring",
          "Energy systems"
        ]);
        return portfolioFamilies.has(project.family)
          ? "Portfolio Systems"
          : project.family || "University Projects";
      },
      groupOrder: new Map([
        ["Portfolio Systems", 1],
        ["Computer Science Coursework", 2],
        ["Academic Capstones", 3],
        ["Technical Education", 4]
      ])
    },
    {
      category: "AI Engineering",
      rootId: "ai-projects",
      sectionId: "ai-path",
      label: "Roadmap",
      previewCount: 6,
      groupName: project => project.family || "AI Engineering Roadmap"
    },
    {
      category: "Software Engineering",
      rootId: "software-projects",
      sectionId: "software-path",
      label: "Roadmap",
      previewCount: 4,
      groupName: project => project.family || "Software Engineering Roadmap"
    },
    {
      category: "Leisure",
      rootId: "independent-projects",
      sectionId: "independent",
      label: "Collection",
      previewCount: 3,
      groupName: project => project.family || "Independent Projects",
      groupOrder: new Map([
        ["Programming Foundations", 1],
        ["Independent Laboratories", 2]
      ])
    }
  ];

  const categoryTokens = {
    Internships: {
      key: "internship",
      accent: "#ff4f2e",
      text: "#c9361e",
      short: "Professional"
    },
    University: {
      key: "university",
      accent: "#1877f2",
      text: "#0b5fcc",
      short: "University"
    },
    "AI Engineering": {
      key: "ai",
      accent: "#8b5cf6",
      text: "#6d42d8",
      short: "AI"
    },
    "Software Engineering": {
      key: "software",
      accent: "#ffb000",
      text: "#8a5a00",
      short: "Software"
    },
    Leisure: {
      key: "independent",
      accent: "#25a36f",
      text: "#147a4f",
      short: "Independent"
    }
  };

  const flagshipIds = ["smartlocation", "lowcortisol", "electrocorp"];
  const flagshipVisuals = {
    smartlocation: { kind: "map", label: "Mobility routing model" },
    lowcortisol: {
      kind: "image",
      source: "assets/lowcortisol-reports.png",
      label: "LowCortisol operational reports"
    },
    electrocorp: {
      kind: "image",
      source: "assets/electrocorp-home.jpg",
      label: "ElectroCorp energy platform"
    }
  };

  const portfolioMedia = path =>
    `https://cdn.jsdelivr.net/gh/JeanLoa/JeanLoa@main/${path}`;

  const projectFilms = new Map([
    ["smartlocation", {
      brand: "SmartLocation",
      title: "Routes, made explainable.",
      description: "A walkthrough of geocoded Lima destinations, graph route calculation and side-by-side Dijkstra, A* and BFS evidence inside an interactive map.",
      stack: "Angular / TypeScript / Python / MapLibre / OpenStreetMap",
      footnote: "Distance, travel time, explored nodes and algorithm tradeoffs stay visible.",
      clips: [{
        label: "Route intelligence demo",
        source: portfolioMedia("assets/videos/university/smartlocation/lima-route-optimization-demo.mp4"),
        type: "video/mp4",
        duration: "00:28"
      }]
    }],
    ["electrocorp", {
      brand: "ElectroCorp",
      title: "Energy, orchestrated.",
      description: "A visual walkthrough of spaces, connected devices, energy intelligence and decision-ready reports.",
      stack: "Angular / Spring Boot / PostgreSQL",
      footnote: "From domain workflows to visible operational evidence.",
      clips: [{
        label: "Product film",
        source: portfolioMedia("assets/videos/university/electrocorp/film.webm"),
        type: "video/webm",
        poster: portfolioMedia("assets/videos/university/electrocorp/poster.webp"),
        duration: "00:25"
      }]
    }],
    ["lowcortisol", {
      brand: "LowCortisol",
      title: "Wellbeing, made operational.",
      description: "A visual walkthrough of workplaces, resource monitoring, smart valves and operational control.",
      stack: "Vue / ASP.NET Core / PostgreSQL",
      footnote: "From physical resources to calm, actionable decisions.",
      clips: [{
        label: "Product film",
        source: portfolioMedia("assets/videos/university/lowcortisol/film.webm"),
        type: "video/webm",
        poster: portfolioMedia("assets/videos/university/lowcortisol/poster.webp"),
        duration: "00:23"
      }]
    }],
    ["decodelabs-decodebot", {
      brand: "DecodeLabs / Project 01",
      title: "Intent routing, made inspectable.",
      description: "A bilingual deterministic assistant with normalized phrase matching, persistent conversations and a visible decision trace.",
      stack: "Python / Streamlit / SQLite",
      footnote: "Constant-time intent lookup without presenting deterministic rules as an LLM.",
      clips: [{
        label: "Technical demo",
        source: portfolioMedia("assets/videos/internships/decodelabs/01-decodebot-assistant/deterministic-intent-routing-demo.mp4"),
        type: "video/mp4",
        duration: "00:42"
      }]
    }],
    ["decodelabs-decodeclassify", {
      brand: "DecodeLabs / Project 02",
      title: "Classification, without leakage.",
      description: "An inspectable Iris classification workflow covering validated ETL, stratified splitting, training-only scaling, KNN tuning and multiclass evidence.",
      stack: "Python / Streamlit / scikit-learn / Pandas",
      footnote: "The held-out test set remains outside preprocessing and model-selection decisions.",
      clips: [{
        label: "Technical demo",
        source: portfolioMedia("assets/videos/internships/decodelabs/02-decode-classify/leakage-safe-knn-classification-demo.mp4"),
        type: "video/mp4",
        duration: "00:32"
      }]
    }],
    ["decodelabs-recommendation-logic", {
      brand: "DecodeLabs / Project 03",
      title: "Career paths, ranked transparently.",
      description: "A content-based tech-stack recommender that converts skills and goals into TF-IDF vectors, ranks career paths with cosine similarity and explains every result.",
      stack: "Python / Streamlit / scikit-learn / SQLite",
      footnote: "Top-three recommendations expose matched skills, gaps, tools and learning steps.",
      clips: [{
        label: "Technical demo",
        source: portfolioMedia("assets/videos/internships/decodelabs/03-decodepath-recommender/tfidf-cosine-career-recommender-demo.mp4"),
        type: "video/mp4",
        duration: "01:04"
      }]
    }],
    ["decodelabs-optic-nerve", {
      brand: "DecodeLabs / Project 04",
      title: "Document vision, made inspectable.",
      description: "An OCR workspace that exposes every step from deterministic OpenCV preprocessing to Tesseract recognition, confidence filtering and word-level bounding boxes.",
      stack: "Python / Streamlit / OpenCV / Tesseract",
      footnote: "Accepted and rejected text remain traceable through confidence-aware visual evidence.",
      clips: [{
        label: "Technical demo",
        source: portfolioMedia("assets/videos/internships/decodelabs/04-decodevision-ocr/opencv-tesseract-ocr-pipeline-demo.mp4"),
        type: "video/mp4",
        duration: "00:35"
      }]
    }],
    ["path-ai-engineer-machine-learning-engineering-software-foundations-01-retail-demand-prediction-api", {
      brand: "AI Engineer / Project 01",
      title: "Demand, made measurable.",
      description: "A concise walkthrough from retail data and temporal features to prediction evidence exposed through an API.",
      stack: "Python / FastAPI / Pandas / scikit-learn",
      footnote: "A reproducible baseline for demand-oriented machine learning systems.",
      clips: [{
        label: "Project demo",
        source: portfolioMedia("assets/videos/ai-engineer/01-retail-demand-prediction-api/demo.mp4"),
        type: "video/mp4",
        duration: "00:22"
      }]
    }],
    ["path-ai-engineer-machine-learning-engineering-software-foundations-02-sales-forecasting-dashboard-api", {
      brand: "AI Engineer / Project 02",
      title: "Forecasts, made visible.",
      description: "An interface-led view of the forecasting workflow, connecting model output, dashboard exploration and API-ready delivery.",
      stack: "Python / FastAPI / Streamlit / Docker",
      footnote: "Forecasting evidence translated into an inspectable product surface.",
      clips: [{
        label: "Project demo",
        source: portfolioMedia("assets/videos/ai-engineer/02-sales-forecasting-dashboard-api/demo.mp4"),
        type: "video/mp4",
        duration: "00:23"
      }]
    }],
    ["path-ai-engineer-machine-learning-engineering-software-foundations-03-classical-model-comparison-suite", {
      brand: "AI Engineer / Project 03",
      title: "Models, compared fairly.",
      description: "A product film for the reproducible comparison suite, showing shared folds, model evidence, rankings and persisted experiment reports.",
      stack: "Python / scikit-learn / Pandas / SciPy",
      footnote: "The protocol and its evidence matter as much as the winning score.",
      clips: [{
        label: "Project demo",
        source: portfolioMedia("assets/videos/ai-engineer/03-classical-model-comparison-suite/demo.mp4"),
        type: "video/mp4",
        duration: "00:19"
      }]
    }],
    ["path-ai-engineer-machine-learning-engineering-software-foundations-04-customer-segmentation-and-churn-api", {
      brand: "AI Engineer / Project 04",
      title: "Segments, without stereotypes.",
      description: "A walkthrough of two deliberately separate customer views: descriptive segment discovery and evidence-based churn review priority.",
      stack: "Python / FastAPI / Streamlit / PostgreSQL",
      footnote: "Patterns and probabilities remain decision support, never demographic truth or certainty.",
      clips: [{
        label: "Project demo",
        source: portfolioMedia("assets/videos/ai-engineer/04-customer-segmentation-and-churn-api/demo.mp4"),
        type: "video/mp4",
        duration: "00:26"
      }]
    }],
    ["path-ai-engineer-machine-learning-engineering-software-foundations-05-inventory-optimization-ml-service", {
      brand: "AI Engineer / Project 05",
      title: "Inventory, decided with evidence.",
      description: "A product film connecting calibrated demand forecasts, lead-time uncertainty and constrained replenishment recommendations.",
      stack: "Python / FastAPI / Streamlit / scikit-learn",
      footnote: "Forecasting and inventory policy stay explicit, replayable and open to human review.",
      clips: [{
        label: "Project demo",
        source: portfolioMedia("assets/videos/ai-engineer/05-inventory-optimization-ml-service/demo.mp4"),
        type: "video/mp4",
        duration: "00:25"
      }]
    }],
    ["path-ai-engineer-machine-learning-engineering-software-foundations-06-ai-software-foundations-platform", {
      brand: "AI Engineer / Project 06",
      title: "Foundations, made operational.",
      description: "A React operator console, durable FastAPI workflows, trusted model artifacts and operational evidence.",
      stack: "React / TypeScript / FastAPI / PostgreSQL / GCP",
      footnote: "Recommendations are traceable and operable while final ordering decisions remain human-controlled.",
      clips: [{
        label: "Final project demo",
        source: portfolioMedia("assets/videos/ai-engineer/06-ai-software-foundations-platform/demo.mp4"),
        type: "video/mp4",
        duration: "00:48"
      }]
    }],
    ["path-software-engineer-applied-ai-software-platform-01-retail-intelligence-platform", {
      brand: "Software Engineer / Project 01",
      title: "Intelligence, delivered in sprints.",
      description: "Three chapters trace the Retail Intelligence Platform from its first usable product slice to a broader decision-support experience.",
      stack: "React / FastAPI / Python / Docker",
      footnote: "A software platform shaped incrementally around visible product evidence.",
      clips: [
        {
          label: "Sprint 01",
          source: portfolioMedia("assets/videos/software-engineer/01-retail-intelligence-platform/sprint-01.mp4"),
          type: "video/mp4",
          duration: "00:22"
        },
        {
          label: "Sprint 02",
          source: portfolioMedia("assets/videos/software-engineer/01-retail-intelligence-platform/sprint-02.mp4"),
          type: "video/mp4",
          duration: "00:17"
        },
        {
          label: "Sprint 03",
          source: portfolioMedia("assets/videos/software-engineer/01-retail-intelligence-platform/sprint-03.mp4"),
          type: "video/mp4",
          duration: "00:26"
        }
      ]
    }]
  ]);

  const universityProjectOrder = new Map([
    ["SmartLocation", 1],
    ["LowCortisol", 2],
    ["ElectroCorp", 3]
  ]);

  const escapeHtml = value => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const rawProjectStatus = project => {
    if (project.status) return project.status;
    if (project.category === "University") return "Built system";
    return (project.signals?.code || 0) >= 4 ? "Implementation" : "Blueprint";
  };

  const omitsStatus = project =>
    /coursework|published course|practice collection|lab collection|exploration/i
      .test(rawProjectStatus(project));

  const projectStatus = project => {
    if (omitsStatus(project)) return null;
    return /pending|blueprint|roadmap|development/i.test(rawProjectStatus(project))
      ? "Pending"
      : "Completed";
  };

  const isFeaturedProject = project => flagshipIds.includes(project.id);

  function projectSequence(project) {
    if (project.category === "Internships" && project.sequence) {
      return Number(project.sequence);
    }
    if (universityProjectOrder.has(project.title)) {
      return universityProjectOrder.get(project.title);
    }
    const pathValue = String(project.path || project.url || "");
    const semester = pathValue.match(/semester-(\d{2})/i);
    if (semester) return Number(semester[1]);
    const numberedSegment = pathValue
      .split("/")
      .reverse()
      .find(segment => /^\d{2}-/.test(segment));
    if (numberedSegment) return Number(numberedSegment.slice(0, 2));
    const roadmap = String(project.id || "").match(/(?:roadmap-|project-)(\d+)/i);
    return roadmap ? Number(roadmap[1]) : Number.MAX_SAFE_INTEGER;
  }

  function sortedProjects(category) {
    return projects
      .filter(project => project.category === category)
      .sort((first, second) =>
        projectSequence(first) - projectSequence(second)
        || first.title.localeCompare(second.title));
  }

  function groupProjects(definition, selectedProjects) {
    const groups = new Map();
    selectedProjects.forEach(project => {
      const name = definition.groupName(project);
      if (!groups.has(name)) groups.set(name, []);
      groups.get(name).push(project);
    });

    return Array.from(groups.entries())
      .map(([name, items]) => ({
        name,
        order: definition.groupOrder?.get(name)
          ?? Math.min(...items.map(projectSequence)),
        projects: items
      }))
      .sort((first, second) =>
        first.order - second.order || first.name.localeCompare(second.name));
  }

  function statusMarkup(project) {
    const status = projectStatus(project);
    if (!status) return '<span class="project-card__no-status">Documented collection</span>';
    return `
      <span class="status-pill status-pill--${status.toLowerCase()}">
        <i aria-hidden="true"></i>${escapeHtml(status)}
      </span>
    `;
  }

  function technologyMarkup(project, limit = 3) {
    return (project.technologies || [])
      .slice(0, limit)
      .map(technology => `<span>${escapeHtml(technology)}</span>`)
      .join("");
  }

  function projectCardMarkup(project, groupName, index) {
    const film = projectFilms.get(project.id);
    const descriptor = project.eyebrow
      || (project.technologies || []).slice(0, 3).join(" · ")
      || project.family;
    const token = categoryTokens[project.category] || categoryTokens.Leisure;

    return `
      <article class="project-card${film ? " has-film" : ""}" data-accent="${token.key}">
        <div class="project-card__meta">
          <span>${escapeHtml(groupName)}</span>
          <span>${String(index + 1).padStart(2, "0")}</span>
        </div>
        <div class="project-card__content">
          <p class="project-card__eyebrow">${escapeHtml(descriptor)}</p>
          <h4>${escapeHtml(project.title)}</h4>
          <p class="project-card__summary">${escapeHtml(project.summary)}</p>
        </div>
        <div class="project-card__tags">${technologyMarkup(project)}</div>
        <div class="project-card__footer">
          ${statusMarkup(project)}
          <button
            class="project-card__open"
            type="button"
            data-project-id="${escapeHtml(project.id)}"
            aria-label="View ${escapeHtml(project.title)} case study"
          >
            ${film ? "View case + film" : "View case study"}
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </article>
    `;
  }

  function projectGroupMarkup(definition, group, groupIndex) {
    const count = group.projects.length;
    return `
      <section class="project-group" data-group-name="${escapeHtml(group.name)}">
        <header class="project-group__header">
          <div>
            <span>${definition.label} / ${String(groupIndex + 1).padStart(2, "0")}</span>
            <h3>${escapeHtml(group.name)}</h3>
          </div>
          <p>${String(count).padStart(2, "0")} ${count === 1 ? "project" : "projects"}</p>
        </header>
        <div class="project-group__grid">
          ${group.projects
            .map((project, index) => projectCardMarkup(project, group.name, index))
            .join("")}
        </div>
      </section>
    `;
  }

  function disclosureSnapshot(root) {
    return {
      groups: new Set(
        Array.from(root.querySelectorAll("[data-group-name]"), group => group.dataset.groupName)
      ),
      projects: new Set(
        Array.from(root.querySelectorAll("[data-project-id]"), trigger => trigger.dataset.projectId)
      )
    };
  }

  function animateDisclosureContent(root, snapshot, expanded) {
    if (reducedMotion.matches || !snapshot) return;

    root.classList.remove("is-expanding", "is-condensing");
    root.querySelectorAll(".is-new-group, .is-new-card").forEach(node => {
      node.classList.remove("is-new-group", "is-new-card");
      node.style.removeProperty("--archive-delay");
    });

    if (!expanded) {
      root.classList.add("is-condensing");
      root.setAttribute("aria-busy", "true");
      window.setTimeout(() => {
        root.classList.remove("is-condensing");
        root.removeAttribute("aria-busy");
      }, 320);
      return;
    }

    let groupIndex = 0;
    let cardIndex = 0;
    root.querySelectorAll("[data-group-name]").forEach(group => {
      const isNewGroup = !snapshot.groups.has(group.dataset.groupName);
      if (isNewGroup) {
        group.classList.add("is-new-group");
        group.style.setProperty("--archive-delay", `${Math.min(groupIndex, 8) * 42}ms`);
        groupIndex += 1;
        return;
      }

      group.querySelectorAll(".project-card").forEach(card => {
        const projectId = card.querySelector("[data-project-id]")?.dataset.projectId;
        if (!projectId || snapshot.projects.has(projectId)) return;
        card.classList.add("is-new-card");
        card.style.setProperty("--archive-delay", `${Math.min(cardIndex, 6) * 38}ms`);
        cardIndex += 1;
      });
    });

    root.classList.add("is-expanding");
    root.setAttribute("aria-busy", "true");
    window.setTimeout(() => {
      root.classList.remove("is-expanding");
      root.removeAttribute("aria-busy");
      root.querySelectorAll(".is-new-group, .is-new-card").forEach(node => {
        node.classList.remove("is-new-group", "is-new-card");
        node.style.removeProperty("--archive-delay");
      });
    }, 760);
  }

  function renderCategorySection(definition, expanded = false, transitionSnapshot = null) {
    const root = document.getElementById(definition.rootId);
    if (!root) return;

    const allProjects = sortedProjects(definition.category);
    const selectedProjects = expanded
      ? allProjects
      : allProjects.slice(0, definition.previewCount);
    const groups = groupProjects(definition, selectedProjects);

    root.innerHTML = groups
      .map((group, index) => projectGroupMarkup(definition, group, index))
      .join("");
    root.dataset.expanded = String(expanded);
    animateDisclosureContent(root, transitionSnapshot, expanded);

    const button = document.querySelector(`[data-section-toggle="${definition.category}"]`);
    if (button) {
      const hiddenProjectCount = Math.max(allProjects.length - definition.previewCount, 0);
      const collapsedLabel = button.dataset.expandLabel
        || button.querySelector("[data-toggle-label]")?.textContent
        || "View complete archive";
      button.dataset.expandLabel = collapsedLabel;
      button.setAttribute("aria-expanded", String(expanded));
      button.querySelector("[data-toggle-label]").textContent = expanded
        ? "Show concise view"
        : collapsedLabel;
      button.querySelector("[data-toggle-count]").textContent = expanded
        ? String(allProjects.length).padStart(2, "0")
        : `+${String(hiddenProjectCount).padStart(2, "0")}`;
      button.querySelector("[data-toggle-count-label]").textContent = expanded
        ? "visible"
        : "projects";
    }

    document
      .querySelectorAll(`[data-category-count="${definition.category}"]`)
      .forEach(node => {
        node.textContent = String(allProjects.length).padStart(2, "0");
      });
    document
      .querySelectorAll(`[data-group-count="${definition.category}"]`)
      .forEach(node => {
        node.textContent = String(groupProjects(definition, allProjects).length).padStart(2, "0");
      });
  }

  function flagshipVisualMarkup(project) {
    const visual = flagshipVisuals[project.id] || { kind: "map", label: project.title };
    if (visual.kind === "image") {
      return `
        <div class="flagship-card__visual">
          <img src="${escapeHtml(visual.source)}" alt="${escapeHtml(visual.label)}" loading="lazy" />
          <div class="flagship-card__visual-grid" aria-hidden="true"></div>
        </div>
      `;
    }
    return `
      <div class="flagship-card__visual flagship-card__visual--map" role="img" aria-label="${escapeHtml(visual.label)}">
        <span class="map-route map-route--one" aria-hidden="true"></span>
        <span class="map-route map-route--two" aria-hidden="true"></span>
        <span class="map-node map-node--one" aria-hidden="true"></span>
        <span class="map-node map-node--two" aria-hidden="true"></span>
        <span class="map-node map-node--three" aria-hidden="true"></span>
        <span class="map-coordinate" aria-hidden="true">12.0464° S / 77.0428° W</span>
      </div>
    `;
  }

  function renderFlagships() {
    const root = document.querySelector("#flagship-projects");
    if (!root) return;
    const flagships = flagshipIds
      .map(id => projects.find(project => project.id === id))
      .filter(Boolean);

    root.innerHTML = flagships.map((project, index) => {
      const token = categoryTokens[project.category] || categoryTokens.University;
      return `
        <article class="flagship-card flagship-card--${index + 1}" data-accent="${token.key}">
          ${flagshipVisualMarkup(project)}
          <div class="flagship-card__body">
            <div class="flagship-card__index">
              <span>Case ${String(index + 1).padStart(2, "0")}</span>
              <span>${escapeHtml(project.family)}</span>
            </div>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.summary)}</p>
            <div class="flagship-card__footer">
              <div class="flagship-card__tags">${technologyMarkup(project, 4)}</div>
              <button
                class="flagship-card__open"
                type="button"
                data-project-id="${escapeHtml(project.id)}"
                aria-label="View ${escapeHtml(project.title)} case study"
              >
                View case study <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderCategoryAtlas() {
    const root = document.querySelector("#category-atlas");
    if (!root) return;
    const total = Math.max(projects.length, 1);

    root.innerHTML = categoryDefinitions.map((definition, index) => {
      const items = projects.filter(project => project.category === definition.category);
      const completed = items.filter(project => projectStatus(project) === "Completed").length;
      const pending = items.filter(project => projectStatus(project) === "Pending").length;
      const collections = groupProjects(definition, sortedProjects(definition.category)).length;
      const token = categoryTokens[definition.category];
      const share = (items.length / total) * 100;
      return `
        <a class="atlas-row" href="#${definition.sectionId}" data-accent="${token.key}">
          <span class="atlas-row__index">${String(index + 1).padStart(2, "0")}</span>
          <span class="atlas-row__name">${escapeHtml(token.short)}</span>
          <span class="atlas-row__counts">
            <strong>${String(items.length).padStart(2, "0")}</strong> projects
            <small>${String(collections).padStart(2, "0")} collections</small>
          </span>
          <span class="atlas-row__states">
            <span>${String(completed).padStart(2, "0")} completed</span>
            <span>${String(pending).padStart(2, "0")} pending</span>
          </span>
          <span class="atlas-row__bar" aria-hidden="true">
            <i style="width:${share.toFixed(2)}%"></i>
          </span>
          <span class="atlas-row__arrow" aria-hidden="true">↓</span>
        </a>
      `;
    }).join("");
  }

  function genericArchitecture(project) {
    const technology = project.technologies?.length
      ? project.technologies.join(" · ")
      : "Technology choices documented in the project brief";
    return [
      `${project.family} research area`,
      "Problem framing and module map",
      technology,
      "Evaluation and limitation notes"
    ];
  }

  function filmMarkup(project) {
    const film = projectFilms.get(project.id);
    const clips = Array.isArray(film?.clips) ? film.clips : [];
    const clip = clips[0];
    if (!film || !clip) return "";
    const runningTime = clips.length > 1
      ? `${clips.length} chapters`
      : clip.duration;

    return `
      <section class="dialog-film" aria-labelledby="dialog-film-title">
        <div class="dialog-film__intro">
          <div>
            <p>Product film / ${escapeHtml(runningTime)}</p>
            <h3 id="dialog-film-title">${escapeHtml(film.title)}</h3>
          </div>
          <p id="dialog-film-description">${escapeHtml(film.description)}</p>
        </div>
        ${clips.length > 1 ? `
          <div class="dialog-film__playlist" aria-label="${escapeHtml(film.brand)} film chapters">
            ${clips.map((item, index) => `
              <button
                class="dialog-film__chapter${index === 0 ? " is-active" : ""}"
                type="button"
                data-film-clip
                data-film-source="${escapeHtml(item.source)}"
                data-film-type="${escapeHtml(item.type)}"
                data-film-poster="${escapeHtml(item.poster || "")}"
                data-film-label="${escapeHtml(item.label)}"
                aria-pressed="${index === 0 ? "true" : "false"}"
              >
                <span>${String(index + 1).padStart(2, "0")}</span>
                <strong>${escapeHtml(item.label)}</strong>
                <small>${escapeHtml(item.duration)}</small>
              </button>
            `).join("")}
          </div>
        ` : ""}
        <div class="dialog-film__frame">
          <video
            data-project-film
            controls
            playsinline
            preload="metadata"
            ${clip.poster ? `poster="${escapeHtml(clip.poster)}"` : ""}
            aria-label="${escapeHtml(`${film.brand} ${clip.label}`)}"
            aria-describedby="dialog-film-description"
          >
            <source data-film-source-element src="${escapeHtml(clip.source)}" type="${escapeHtml(clip.type)}" />
          </video>
        </div>
        <div class="dialog-film__footer">
          <span>${escapeHtml(film.stack)}</span>
          <p>${escapeHtml(film.footnote)}</p>
        </div>
      </section>
    `;
  }

  const dialog = document.querySelector("#project-dialog");
  const dialogContent = document.querySelector("#dialog-content");
  const backgroundAudio = document.querySelector("[data-background-audio]");
  const soundToggle = document.querySelector("[data-sound-toggle]");
  const soundLabel = document.querySelector("[data-sound-label]");
  const soundStatus = document.querySelector("[data-sound-status]");
  const backgroundVolume = 0.28;
  let lastDialogTrigger = null;
  let resumeBackgroundAfterFilm = false;

  function syncBackgroundAudioUi(message = "") {
    if (!backgroundAudio || !soundToggle || !soundLabel) return;
    const playing = !backgroundAudio.paused;
    soundToggle.classList.toggle("is-playing", playing);
    soundToggle.setAttribute("aria-pressed", String(playing));
    soundToggle.setAttribute(
      "aria-label",
      playing ? "Pause background music" : "Play background music"
    );
    soundLabel.textContent = playing ? "Music on" : "Music off";
    if (soundStatus && message) soundStatus.textContent = message;
  }

  async function playBackgroundAudio() {
    if (!backgroundAudio) return false;
    backgroundAudio.volume = backgroundVolume;
    try {
      await backgroundAudio.play();
      syncBackgroundAudioUi("Background music playing at moderate volume.");
      return true;
    } catch {
      syncBackgroundAudioUi("Use the music control to start background audio.");
      return false;
    }
  }

  function initializeBackgroundAudio() {
    if (!backgroundAudio || !soundToggle) return;
    backgroundAudio.volume = backgroundVolume;
    let intentListenersActive = true;

    const removeIntentListeners = () => {
      if (!intentListenersActive) return;
      intentListenersActive = false;
      document.removeEventListener("pointerdown", startFromIntent);
      document.removeEventListener("keydown", startFromIntent);
    };

    const startFromIntent = event => {
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest("[data-sound-toggle], video")) return;
      if (event.type === "keydown" && !["Enter", " "].includes(event.key)) return;
      void playBackgroundAudio().then(started => {
        if (started) removeIntentListeners();
      });
    };

    soundToggle.addEventListener("click", () => {
      removeIntentListeners();
      if (backgroundAudio.paused) {
        void playBackgroundAudio();
      } else {
        backgroundAudio.pause();
        syncBackgroundAudioUi("Background music paused.");
      }
    });
    backgroundAudio.addEventListener("play", () => syncBackgroundAudioUi());
    backgroundAudio.addEventListener("pause", () => syncBackgroundAudioUi());
    backgroundAudio.addEventListener("error", () => {
      syncBackgroundAudioUi("Background music could not be loaded.");
    });
    document.addEventListener("pointerdown", startFromIntent);
    document.addEventListener("keydown", startFromIntent);
    syncBackgroundAudioUi();
  }

  function initializeProjectFilm() {
    const video = dialog?.querySelector("[data-project-film]");
    const source = dialog?.querySelector("[data-film-source-element]");
    const chapterButtons = Array.from(dialog?.querySelectorAll("[data-film-clip]") || []);
    if (!video || !source) return;
    let switchingClip = false;

    const resumeBackground = () => {
      if (switchingClip || !resumeBackgroundAfterFilm) return;
      resumeBackgroundAfterFilm = false;
      void playBackgroundAudio();
    };

    video.addEventListener("play", () => {
      resumeBackgroundAfterFilm = Boolean(backgroundAudio && !backgroundAudio.paused);
      if (resumeBackgroundAfterFilm) {
        backgroundAudio.pause();
        syncBackgroundAudioUi("Background music paused while the project film plays.");
      }
    });
    video.addEventListener("pause", resumeBackground);
    video.addEventListener("ended", resumeBackground);

    chapterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const shouldContinue = !video.paused;
        switchingClip = true;
        video.pause();
        source.src = button.dataset.filmSource || "";
        source.type = button.dataset.filmType || "video/mp4";
        const poster = button.dataset.filmPoster || "";
        if (poster) video.poster = poster;
        else video.removeAttribute("poster");
        video.setAttribute(
          "aria-label",
          `${button.dataset.filmLabel || "Project"} product film`
        );
        chapterButtons.forEach(item => {
          const selected = item === button;
          item.classList.toggle("is-active", selected);
          item.setAttribute("aria-pressed", String(selected));
        });
        video.load();
        switchingClip = false;
        if (shouldContinue) video.play().catch(() => {});
      });
    });
  }

  function openProject(projectId, trigger) {
    const project = projects.find(item => item.id === projectId);
    if (!project || !dialog || !dialogContent) return;

    lastDialogTrigger = trigger || document.activeElement;
    const status = projectStatus(project);
    const sourceStatus = rawProjectStatus(project);
    const isBlueprint = /blueprint|roadmap|pending|development/i.test(sourceStatus);
    const architecture = project.architecture || genericArchitecture(project);
    const capabilities = project.capabilities || [
      "Documented objective and scope",
      "Planned modules and interfaces",
      "Evaluation signals and expected evidence",
      "Constraints, risks and next implementation step"
    ];
    const signals = project.signals || {};
    const challenge = project.challenge || project.summary;
    const solution = project.solution || (isBlueprint
      ? "This entry defines intended modules, workflow, evaluation and limitations without claiming an implemented product."
      : "This implementation connects data, code and documented evidence inside a focused engineering workflow.");
    const token = categoryTokens[project.category] || categoryTokens.Leisure;

    dialogContent.innerHTML = `
      <article class="dialog-case" data-accent="${token.key}">
        <header class="dialog-hero">
          <div>
            <p class="dialog-kicker">${escapeHtml(project.eyebrow || `${project.category} / ${project.family}`)}</p>
            ${isFeaturedProject(project) ? '<span class="featured-label"><i aria-hidden="true"></i>Selected system</span>' : ""}
            <h2 id="dialog-title">${escapeHtml(project.title)}</h2>
          </div>
          <div>
            <p class="dialog-summary">${escapeHtml(project.summary)}</p>
            ${status ? `
              <span class="status-pill status-pill--${status.toLowerCase()}">
                <i aria-hidden="true"></i>${escapeHtml(status)}
              </span>
            ` : ""}
          </div>
        </header>
        ${filmMarkup(project)}
        <div class="dialog-body">
          <aside class="dialog-index" aria-label="Case study contents">
            <span>01 / Problem</span>
            <span>02 / Response</span>
            <span>03 / Architecture</span>
            <span>04 / Evidence</span>
          </aside>
          <div class="dialog-sections">
            <section class="dialog-section">
              <p class="dialog-section__label">01 · The problem</p>
              <h3>Why this work exists.</h3>
              <p>${escapeHtml(challenge)}</p>
            </section>
            <section class="dialog-section">
              <p class="dialog-section__label">02 · The response</p>
              <h3>${isBlueprint ? "A rigorous implementation map." : "A connected product system."}</h3>
              <p>${escapeHtml(solution)}</p>
            </section>
            <section class="dialog-section">
              <p class="dialog-section__label">03 · Architecture and capabilities</p>
              <h3>How the system is shaped.</h3>
              <div class="detail-list">
                ${architecture.map(item => `<span>${escapeHtml(item)}</span>`).join("")}
              </div>
              <div class="detail-list detail-list--secondary">
                ${capabilities.map(item => `<span>${escapeHtml(item)}</span>`).join("")}
              </div>
            </section>
            <section class="dialog-section">
              <p class="dialog-section__label">04 · Evidence surface</p>
              <h3>What can be inspected.</h3>
              <div class="evidence-grid">
                <div><strong>${escapeHtml(signals.files ?? "—")}</strong><span>files mapped</span></div>
                <div><strong>${escapeHtml(signals.code ?? "—")}</strong><span>code files</span></div>
                <div><strong>${escapeHtml(signals.tests ?? "—")}</strong><span>test signals</span></div>
                <div><strong>${escapeHtml(signals.notebooks ?? "—")}</strong><span>notebooks</span></div>
              </div>
              <div class="dialog-tags">${technologyMarkup(project, 8)}</div>
              <a class="dialog-link" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer">
                <strong>Inspect the project on GitHub</strong><span aria-hidden="true">↗</span>
              </a>
            </section>
          </div>
        </div>
      </article>
    `;

    dialog.showModal();
    document.body.classList.add("dialog-open");
    initializeProjectFilm();
    dialog.querySelector(".dialog-close")?.focus();
  }

  function closeDialog() {
    dialog?.querySelector("video")?.pause();
    dialog?.close();
  }

  function initializeDisclosures() {
    categoryDefinitions.forEach(definition => {
      const button = document.querySelector(`[data-section-toggle="${definition.category}"]`);
      if (!button) return;
      button.dataset.expandLabel = button.querySelector("[data-toggle-label]")?.textContent || "View complete archive";
      button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        const root = document.getElementById(definition.rootId);
        const snapshot = root ? disclosureSnapshot(root) : null;
        renderCategorySection(definition, !expanded, snapshot);
        const status = document.querySelector(`[data-section-status="${definition.category}"]`);
        if (status) {
          const count = sortedProjects(definition.category).length;
          status.textContent = expanded
            ? `${definition.category} reduced to a concise preview.`
            : `All ${count} ${definition.category} projects are now visible.`;
        }
        if (expanded) {
          document.getElementById(definition.sectionId)?.scrollIntoView({
            behavior: reducedMotion.matches ? "auto" : "smooth",
            block: "start"
          });
        }
      });
    });
  }

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");
  const navScrim = document.querySelector("[data-nav-dismiss]");

  function setNavigation(open, returnFocus = false) {
    if (!menuButton || !navigation || !navScrim) return;
    const mobile = mobileNavigation.matches;
    const nextOpen = mobile && open;
    navigation.classList.toggle("is-open", nextOpen);
    menuButton.setAttribute("aria-expanded", String(nextOpen));
    menuButton.querySelector(".sr-only").textContent = nextOpen
      ? "Close navigation"
      : "Open navigation";
    navScrim.hidden = !nextOpen;
    document.body.classList.toggle("nav-open", nextOpen);

    if (mobile) {
      navigation.toggleAttribute("inert", !nextOpen);
      navigation.setAttribute("aria-hidden", String(!nextOpen));
    } else {
      navigation.removeAttribute("inert");
      navigation.removeAttribute("aria-hidden");
    }

    if (nextOpen) navigation.querySelector("a")?.focus();
    if (!nextOpen && returnFocus) menuButton.focus();
  }

  function initializeNavigation() {
    menuButton?.addEventListener("click", () => {
      setNavigation(menuButton.getAttribute("aria-expanded") !== "true");
    });
    navScrim?.addEventListener("click", () => setNavigation(false, true));
    navigation?.addEventListener("click", event => {
      if (event.target.closest("a")) setNavigation(false);
    });
    mobileNavigation.addEventListener("change", () => setNavigation(false));
    setNavigation(false);

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
        event.preventDefault();
        setNavigation(false, true);
      }
      if (
        event.key === "Tab"
        && mobileNavigation.matches
        && menuButton?.getAttribute("aria-expanded") === "true"
      ) {
        const focusable = [menuButton, ...navigation.querySelectorAll("a")];
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  function initializeActiveNavigation() {
    if (!("IntersectionObserver" in window)) return;
    const links = Array.from(document.querySelectorAll(".primary-nav a[href^='#']"));
    const archiveSections = new Set([
      "internships",
      "university",
      "ai-path",
      "software-path",
      "independent"
    ]);
    const sections = [
      document.querySelector("#selected"),
      document.querySelector("#categories"),
      ...Array.from(archiveSections, id => document.getElementById(id)),
      document.querySelector("#about")
    ].filter(Boolean);

    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
      if (!visible) return;
      const target = archiveSections.has(visible.target.id)
        ? "#archive"
        : `#${visible.target.id}`;
      links.forEach(link => {
        if (link.getAttribute("href") === target) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-20% 0px -65%", threshold: [0, 0.15, 0.5] });

    sections.forEach(section => observer.observe(section));
  }

  function initializeReveal() {
    const nodes = document.querySelectorAll(".reveal");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      nodes.forEach(node => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5%" });
    nodes.forEach(node => observer.observe(node));
  }

  function initializeScrollUi() {
    const header = document.querySelector("[data-header]");
    const progress = document.querySelector(".scroll-progress span");
    const update = () => {
      const top = window.scrollY;
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      header?.classList.toggle("is-scrolled", top > 24);
      if (progress) {
        progress.style.width = `${maximum > 0 ? (top / maximum) * 100 : 0}%`;
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initializeHeroMotion() {
    const hero = document.querySelector(".hero");
    const core = document.querySelector(".hero-core");
    if (!hero || !core || reducedMotion.matches) return;
    hero.addEventListener("pointermove", event => {
      const rectangle = hero.getBoundingClientRect();
      const x = (event.clientX - rectangle.left) / rectangle.width - 0.5;
      const y = (event.clientY - rectangle.top) / rectangle.height - 0.5;
      core.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
    });
  }

  renderFlagships();
  renderCategoryAtlas();
  categoryDefinitions.forEach(definition => renderCategorySection(definition));
  initializeDisclosures();
  initializeNavigation();
  initializeActiveNavigation();
  initializeBackgroundAudio();
  initializeReveal();
  initializeScrollUi();
  initializeHeroMotion();

  document.querySelectorAll("[data-total-projects]").forEach(node => {
    node.textContent = String(projects.length).padStart(3, "0");
  });

  const internships = projects.filter(project => project.category === "Internships");
  document.querySelectorAll("[data-internship-completed]").forEach(node => {
    node.textContent = String(
      internships.filter(project => projectStatus(project) === "Completed").length
    ).padStart(2, "0");
  });
  document.querySelectorAll("[data-internship-pending]").forEach(node => {
    node.textContent = String(
      internships.filter(project => projectStatus(project) === "Pending").length
    ).padStart(2, "0");
  });

  document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-project-id]");
    if (trigger) openProject(trigger.dataset.projectId, trigger);
  });

  dialog?.querySelector(".dialog-close")?.addEventListener("click", closeDialog);
  dialog?.addEventListener("click", event => {
    if (event.target === dialog) closeDialog();
  });
  dialog?.addEventListener("close", () => {
    dialog.querySelector("video")?.pause();
    document.body.classList.remove("dialog-open");
    if (lastDialogTrigger instanceof HTMLElement) lastDialogTrigger.focus();
    lastDialogTrigger = null;
  });
})();
