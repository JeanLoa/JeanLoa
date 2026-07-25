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

  const projectFilms = new Map([
    ["electrocorp", {
      brand: "ElectroCorp",
      title: "Energy, orchestrated.",
      description: "A visual walkthrough of spaces, connected devices, energy intelligence and decision-ready reports.",
      stack: "Angular / Spring Boot / PostgreSQL",
      footnote: "From domain workflows to visible operational evidence.",
      clips: [{
        label: "Product film",
        source: "https://cdn.jsdelivr.net/gh/JeanLoa/JeanLoa@main/assets/videos/university/electrocorp/film.webm",
        type: "video/webm",
        poster: "https://cdn.jsdelivr.net/gh/JeanLoa/JeanLoa@main/assets/videos/university/electrocorp/poster.webp",
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
        source: "https://cdn.jsdelivr.net/gh/JeanLoa/JeanLoa@main/assets/videos/university/lowcortisol/film.webm",
        type: "video/webm",
        poster: "https://cdn.jsdelivr.net/gh/JeanLoa/JeanLoa@main/assets/videos/university/lowcortisol/poster.webp",
        duration: "00:23"
      }]
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
      <section class="project-group">
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

  function renderCategorySection(definition, expanded = false) {
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

    const button = document.querySelector(`[data-section-toggle="${definition.category}"]`);
    if (button) {
      button.setAttribute("aria-expanded", String(expanded));
      button.querySelector("[data-toggle-label]").textContent = expanded
        ? "Show concise view"
        : button.dataset.expandLabel;
      button.querySelector("[data-toggle-icon]").textContent = expanded ? "−" : "+";
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
    const clip = film?.clips?.[0];
    if (!film || !clip) return "";

    return `
      <section class="dialog-film" aria-labelledby="dialog-film-title">
        <div class="dialog-film__intro">
          <div>
            <p>Product film / ${escapeHtml(clip.duration)}</p>
            <h3 id="dialog-film-title">${escapeHtml(film.title)}</h3>
          </div>
          <p id="dialog-film-description">${escapeHtml(film.description)}</p>
        </div>
        <div class="dialog-film__frame">
          <video
            controls
            playsinline
            preload="metadata"
            ${clip.poster ? `poster="${escapeHtml(clip.poster)}"` : ""}
            aria-describedby="dialog-film-description"
          >
            <source src="${escapeHtml(clip.source)}" type="${escapeHtml(clip.type)}" />
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
  let lastDialogTrigger = null;

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
        renderCategorySection(definition, !expanded);
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
