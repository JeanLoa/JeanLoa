(() => {
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS)
    ? window.PORTFOLIO_PROJECTS
    : [];

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const categoryDefinitions = [
    {
      category: "Internships",
      rootId: "internship-projects",
      sectionId: "internships",
      label: "Organization",
      groupName: project => project.organization || "Internship",
      groupOrder: new Map([["DecodeLabs", 1], ["SpotterAI", 2]])
    },
    {
      category: "University",
      rootId: "university-projects",
      sectionId: "university",
      label: "Collection",
      groupLabel: group => group.name === "Portfolio Systems" ? "Portfolio" : "Collection",
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
      groupName: project => project.family || "AI Engineering Roadmap"
    },
    {
      category: "Software Engineering",
      rootId: "software-projects",
      sectionId: "software-path",
      label: "Roadmap",
      groupName: project => project.family || "Software Engineering Roadmap"
    },
    {
      category: "Leisure",
      rootId: "independent-projects",
      sectionId: "independent",
      label: "Collection",
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
      short: "Internships"
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
      short: "AI Engineering"
    },
    "Software Engineering": {
      key: "software",
      accent: "#ffb000",
      text: "#8a5a00",
      short: "Software Engineering"
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

  const projectGallery = project => {
    const configured = Array.isArray(project.gallery)
      ? project.gallery
          .filter(item => item && typeof item.src === "string" && item.src.trim())
          .map((item, index) => ({
            src: item.src,
            alt: item.alt || `${project.title} project view ${index + 1}`,
            label: item.label || `View ${String(index + 1).padStart(2, "0")}`,
            caption: item.caption || "Verified project evidence."
          }))
      : [];

    if (configured.length) return configured;
    if (!project.image) return [];
    return [{
      src: project.image,
      alt: `${project.title} project interface`,
      label: "Project view",
      caption: "Verified project evidence."
    }];
  };

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
      .map(([name, items]) => {
        const roadmapNumbers = items
          .map(project => Number(project.roadmapNumber))
          .filter(Number.isFinite);
        const roadmapNumber = roadmapNumbers.length
          ? Math.min(...roadmapNumbers)
          : null;
        const cloudFocuses = Array.from(new Set(
          items.map(project => project.cloudFocus).filter(Boolean)
        ));

        return {
          name,
          order: definition.groupOrder?.get(name)
            ?? roadmapNumber
            ?? Math.min(...items.map(projectSequence)),
          roadmapNumber,
          cloudFocus: cloudFocuses.length === 1 ? cloudFocuses[0] : null,
          projects: items
        };
      })
      .sort((first, second) =>
        first.order - second.order || first.name.localeCompare(second.name));
  }

  function statusMarkup(project) {
    const status = projectStatus(project);
    if (!status) {
      const source = rawProjectStatus(project);
      const recordType = /coursework/i.test(source)
        ? "Coursework record"
        : /published course/i.test(source)
          ? "Published course"
          : /exploration/i.test(source)
            ? "Independent study"
            : "Documented collection";
      return `<span class="project-card__no-status">${escapeHtml(recordType)}</span>`;
    }
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

  function projectSignalsMarkup(project) {
    const signals = project.signals || {};
    const gallery = projectGallery(project);
    const items = [];

    if (gallery.length) {
      items.push(`
        <span>
          <small>Views</small>
          <strong>${gallery.length} verified ${gallery.length === 1 ? "capture" : "captures"}</strong>
        </span>
      `);
    }

    if ((signals.code || 0) > 0 || (signals.tests || 0) > 0) {
      items.push(`
        <span>
          <small>Evidence</small>
          <strong>${escapeHtml(signals.code || 0)} code · ${escapeHtml(signals.tests || 0)} tests</strong>
        </span>
      `);
    }

    return items.length
      ? `<div class="project-card__signals">${items.join("")}</div>`
      : "";
  }

  function projectCardMarkup(project, groupName, index) {
    const gallery = projectGallery(project);
    const cover = gallery[0];
    const sequence = project.cloudFocus ? projectSequence(project) : index + 1;
    const descriptor = project.eyebrow
      || (project.technologies || []).slice(0, 3).join(" · ")
      || project.family;
    const token = categoryTokens[project.category] || categoryTokens.Leisure;

    return `
      <article class="project-card${cover ? " has-gallery" : ""}" data-accent="${token.key}">
        ${cover ? `
          <figure class="project-card__cover">
            <img
              src="${escapeHtml(cover.src)}"
              alt="${escapeHtml(cover.alt)}"
              width="1600"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <figcaption>${escapeHtml(cover.label)}</figcaption>
          </figure>
        ` : ""}
        <div class="project-card__body">
          <div class="project-card__meta">
            <span>${escapeHtml(project.cloudFocus ? `${project.cloudFocus} cloud focus` : groupName)}</span>
            <span>${String(sequence).padStart(2, "0")}</span>
          </div>
          <div class="project-card__content">
            <p class="project-card__eyebrow">${escapeHtml(descriptor)}</p>
            <h4>${escapeHtml(project.title)}</h4>
            <p class="project-card__summary">${escapeHtml(project.summary)}</p>
          </div>
          <div class="project-card__tags">${technologyMarkup(project)}</div>
          ${projectSignalsMarkup(project)}
          <div class="project-card__footer">
            ${statusMarkup(project)}
            <button
              class="project-card__open"
              type="button"
              data-project-id="${escapeHtml(project.id)}"
              aria-label="View ${escapeHtml(project.title)} case study"
            >
              ${gallery.length ? "View case + captures" : "View case study"}
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function projectGroupMarkup(definition, group, groupIndex) {
    const count = group.projects.length;
    const groupNumber = group.roadmapNumber ?? groupIndex + 1;
    const groupLabel = typeof definition.groupLabel === "function"
      ? definition.groupLabel(group)
      : definition.label;
    return `
      <section class="project-group" data-group-name="${escapeHtml(group.name)}">
        <header class="project-group__header">
          <div>
            <span>${escapeHtml(groupLabel)} / ${String(groupNumber).padStart(2, "0")}</span>
            <h3>${escapeHtml(group.name)}</h3>
          </div>
          <div class="project-group__summary">
            ${group.cloudFocus ? `<span class="project-group__cloud">Cloud focus / ${escapeHtml(group.cloudFocus)}</span>` : ""}
            <p>${String(count).padStart(2, "0")} ${count === 1 ? "project" : "projects"}</p>
          </div>
        </header>
        <div class="project-group__grid">
          ${group.projects
            .map((project, index) => projectCardMarkup(project, group.name, index))
            .join("")}
        </div>
      </section>
    `;
  }

  function renderCategorySection(definition) {
    const root = document.getElementById(definition.rootId);
    if (!root) return;

    const allProjects = sortedProjects(definition.category);
    const groups = groupProjects(definition, allProjects);

    root.innerHTML = groups
      .map((group, index) => projectGroupMarkup(definition, group, index))
      .join("");
    root.dataset.rendered = "true";
    root.dataset.projectCount = String(allProjects.length);
    root.dataset.groupCount = String(groups.length);

    document
      .querySelectorAll(`[data-category-count="${definition.category}"]`)
      .forEach(node => {
        node.textContent = String(allProjects.length).padStart(2, "0");
      });
    document
      .querySelectorAll(`[data-group-count="${definition.category}"]`)
      .forEach(node => {
        node.textContent = String(groups.length).padStart(2, "0");
      });
  }

  function flagshipVisualMarkup(project) {
    const visual = flagshipVisuals[project.id] || { kind: "map", label: project.title };
    if (visual.kind === "image") {
      return `
        <div class="flagship-card__visual">
          <img
            src="${escapeHtml(visual.source)}"
            alt="${escapeHtml(visual.label)}"
            loading="lazy"
            data-evidence-image
          />
          <p class="flagship-card__visual-fallback" data-evidence-fallback hidden>
            Visual evidence is temporarily unavailable.
          </p>
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

  function initializeEvidenceImages() {
    document.querySelectorAll("[data-evidence-image]").forEach(image => {
      const fallback = image.parentElement?.querySelector("[data-evidence-fallback]");
      const showFallback = () => {
        image.hidden = true;
        if (fallback) fallback.hidden = false;
      };
      image.addEventListener("error", showFallback);
      if (image.complete && image.naturalWidth === 0) showFallback();
    });
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
          <span class="atlas-row__arrow" aria-hidden="true">→</span>
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

  function galleryMarkup(project) {
    const gallery = projectGallery(project);
    const first = gallery[0];
    if (!first) return "";

    return `
      <section class="dialog-gallery" aria-labelledby="dialog-gallery-title">
        <div class="dialog-gallery__intro">
          <div>
            <p>Project evidence / ${String(gallery.length).padStart(2, "0")} ${gallery.length === 1 ? "capture" : "captures"}</p>
            <h3 id="dialog-gallery-title">The product,<br />seen in context.</h3>
          </div>
          <p>Curated interface views and persisted evidence from the implemented project.</p>
        </div>
        <figure class="dialog-gallery__stage" data-gallery-stage>
          <img
            src="${escapeHtml(first.src)}"
            alt="${escapeHtml(first.alt)}"
            width="1600"
            height="900"
            decoding="async"
            data-gallery-image
          />
          <a
            class="dialog-gallery__full"
            href="${escapeHtml(first.src)}"
            target="_blank"
            rel="noreferrer"
            data-gallery-full
          >
            Full resolution <span aria-hidden="true">↗</span>
          </a>
          <p class="dialog-gallery__fallback" data-gallery-fallback hidden>
            This verified capture is temporarily unavailable.
          </p>
          <figcaption aria-live="polite" data-gallery-caption>${escapeHtml(first.caption)}</figcaption>
        </figure>
        <div class="dialog-gallery__rail" aria-label="${escapeHtml(project.title)} gallery views">
          ${gallery.map((item, index) => `
            <button
              class="dialog-gallery__item${index === 0 ? " is-active" : ""}"
              type="button"
              data-gallery-item
              data-gallery-source="${escapeHtml(item.src)}"
              data-gallery-alt="${escapeHtml(item.alt)}"
              data-gallery-caption="${escapeHtml(item.caption)}"
              aria-label="Show ${escapeHtml(item.label)}"
              aria-pressed="${index === 0 ? "true" : "false"}"
            >
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${escapeHtml(item.label)}</strong>
            </button>
          `).join("")}
        </div>
      </section>
    `;
  }

  const dialog = document.querySelector("#project-dialog");
  const dialogContent = document.querySelector("#dialog-content");
  const backgroundAudio = document.querySelector("[data-background-audio]");
  const soundDock = document.querySelector("[data-sound-dock]");
  const soundToggle = document.querySelector("[data-sound-toggle]");
  const soundTracks = Array.from(document.querySelectorAll("[data-audio-track]"));
  const soundStatus = document.querySelector("[data-sound-status]");
  const backgroundVolume = 0.28;
  const dialogMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const dialogExitDuration = 210;
  let lastDialogTrigger = null;
  let dialogCloseTimer = 0;
  let dialogCloseTransitionEnd = null;

  let selectedSoundTrack = null;
  let soundMenuPinned = false;
  let soundMenuClosing = false;

  function setSoundMenuOpen(open, pinned = soundMenuPinned) {
    if (!soundDock || !soundToggle) return;
    soundMenuPinned = open && pinned;
    soundDock.classList.toggle("is-open", open);
    soundToggle.setAttribute("aria-expanded", String(open));
    soundToggle.setAttribute("aria-label", open ? "Close music selector" : "Open music selector");
  }

  function syncBackgroundAudioUi(message = "") {
    if (!backgroundAudio || !soundToggle) return;
    const playing = !backgroundAudio.paused;
    soundDock?.classList.toggle("is-playing", playing);
    soundToggle.classList.toggle("is-playing", playing);
    soundTracks.forEach(track => {
      const selected = track === selectedSoundTrack;
      track.classList.toggle("is-selected", selected);
      track.classList.toggle("is-playing", selected && playing);
      track.setAttribute("aria-pressed", String(selected && playing));
    });
    if (soundStatus && message) soundStatus.textContent = message;
  }

  async function playBackgroundAudio(track = selectedSoundTrack) {
    if (!backgroundAudio || !(track instanceof HTMLButtonElement)) return false;
    const source = track.dataset.audioSource;
    if (!source) return false;
    if (track !== selectedSoundTrack) {
      selectedSoundTrack = track;
      backgroundAudio.src = source;
      backgroundAudio.load();
    }
    backgroundAudio.volume = backgroundVolume;
    const trackLabel = track.querySelector("strong")?.textContent?.trim() || "Selected music";
    try {
      await backgroundAudio.play();
      syncBackgroundAudioUi(`${trackLabel} playing at moderate volume.`);
      return true;
    } catch {
      syncBackgroundAudioUi("The selected track could not be started.");
      return false;
    }
  }

  function initializeBackgroundAudio() {
    if (!backgroundAudio || !soundDock || !soundToggle || !soundTracks.length) return;
    backgroundAudio.volume = backgroundVolume;

    soundToggle.addEventListener("click", () => {
      const shouldOpen = !soundDock.classList.contains("is-open") || !soundMenuPinned;
      setSoundMenuOpen(shouldOpen, shouldOpen);
      if (shouldOpen) soundTracks[0]?.focus({ preventScroll: true });
    });
    soundDock.addEventListener("pointerenter", () => setSoundMenuOpen(true, soundMenuPinned));
    soundDock.addEventListener("pointerleave", () => {
      if (!soundMenuPinned && !soundDock.contains(document.activeElement)) setSoundMenuOpen(false, false);
    });
    soundDock.addEventListener("focusin", () => {
      if (!soundMenuClosing) setSoundMenuOpen(true, soundMenuPinned);
    });
    soundDock.addEventListener("focusout", () => {
      window.requestAnimationFrame(() => {
        if (!soundMenuPinned && !soundDock.contains(document.activeElement)) setSoundMenuOpen(false, false);
      });
    });
    soundTracks.forEach(track => {
      track.addEventListener("click", () => {
        if (track === selectedSoundTrack && !backgroundAudio.paused) {
          backgroundAudio.pause();
          const trackLabel = track.querySelector("strong")?.textContent?.trim() || "Selected music";
          syncBackgroundAudioUi(`${trackLabel} paused.`);
          return;
        }
        void playBackgroundAudio(track);
      });
    });
    backgroundAudio.addEventListener("play", () => syncBackgroundAudioUi());
    backgroundAudio.addEventListener("pause", () => syncBackgroundAudioUi());
    backgroundAudio.addEventListener("error", () => {
      syncBackgroundAudioUi("The selected music file could not be loaded.");
    });
    document.addEventListener("click", event => {
      if (!soundDock.contains(event.target)) setSoundMenuOpen(false, false);
    });
    soundDock.addEventListener("keydown", event => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      soundMenuClosing = true;
      setSoundMenuOpen(false, false);
      soundToggle.focus({ preventScroll: true });
      window.requestAnimationFrame(() => { soundMenuClosing = false; });
    });
    syncBackgroundAudioUi();
  }

  function initializeProjectSearch() {
    const discovery = document.querySelector("[data-hero-discovery]");
    const form = document.querySelector("[data-project-search-form]");
    const input = document.querySelector("[data-project-search]");
    const toggle = document.querySelector("[data-project-search-toggle]");
    const results = document.querySelector("[data-project-search-results]");
    const count = document.querySelector("[data-project-search-count]");
    const status = document.querySelector("[data-project-search-status]");
    if (!discovery || !form || !input || !toggle || !results) return;

    const normalize = value => String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/c\s*\+\+/g, " cpp ")
      .replace(/c\s*(?:#|sharp)/g, " csharp ")
      .replace(/asp\s*\.?\s*net/g, " aspnet ")
      .replace(/\.net/g, " dotnet ")
      .replace(/next\s*\.?\s*js/g, " nextjs ")
      .replace(/nest\s*\.?\s*js/g, " nestjs ")
      .replace(/node\s*\.?\s*js/g, " nodejs ")
      .replace(/scikit[\s-]*learn/g, " scikitlearn ")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
    const exactKeywordTerms = new Set([
      "java", "javascript", "js", "typescript", "ts", "csharp", "cpp",
      "nextjs", "nestjs", "nodejs", "dotnet", "aspnet"
    ]);
    const aliasesFor = technologies => {
      const technologyText = normalize((technologies || []).join(" "));
      const aliases = [];
      if (technologyText.includes("aspnet")) aliases.push("csharp", "dotnet", "net");
      if (technologyText.includes("spring boot")) aliases.push("java");
      if (technologyText.includes("nextjs")) aliases.push("nextjs", "react", "typescript", "ts");
      if (technologyText.includes("nestjs")) aliases.push("nestjs", "nodejs", "typescript", "ts");
      if (technologyText.includes("javascript")) aliases.push("js");
      if (technologyText.includes("typescript")) aliases.push("ts");
      if (technologyText.includes("postgresql")) aliases.push("postgres", "sql");
      if (technologyText.includes("scikitlearn")) aliases.push("sklearn");
      return aliases;
    };
    const searchableProjects = projects.map(project => {
      const text = normalize([
        project.title,
        project.category,
        project.family,
        project.summary,
        project.status,
        ...(project.technologies || []),
        ...(project.capabilities || []),
        ...aliasesFor(project.technologies)
      ].join(" "));
      return {
        project,
        text,
        tokens: new Set(text.split(/\s+/).filter(Boolean))
      };
    });
    let searchPinned = false;

    const setSearchOpen = (open, pinned = searchPinned) => {
      searchPinned = open && pinned;
      discovery.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    const renderResults = () => {
      const query = normalize(input.value.trim());
      if (!query) {
        results.hidden = true;
        results.innerHTML = "";
        if (status) status.textContent = "";
        return;
      }
      const terms = query.split(/\s+/).filter(Boolean);
      const allMatches = searchableProjects
        .filter(item => terms.every(term => exactKeywordTerms.has(term)
          ? item.tokens.has(term)
          : item.text.includes(term)));
      const matches = allMatches.slice(0, 5);
      if (count) count.textContent = String(allMatches.length).padStart(2, "0");
      results.hidden = false;
      results.innerHTML = matches.length
        ? `<ul>${matches.map(({ project }, index) => `
            <li>
              <button type="button" data-project-id="${escapeHtml(project.id)}">
                <span>${String(index + 1).padStart(2, "0")} / ${escapeHtml(project.category)}</span>
                <strong>${escapeHtml(project.title)}</strong>
                <small>${escapeHtml(project.family || "Project archive")}</small>
              </button>
            </li>
          `).join("")}</ul>`
        : `<p class="hero-search__empty"><strong>No exact match.</strong><span>Try a broader term such as AI, API, Python or Vue.</span></p>`;
      if (status) status.textContent = matches.length
        ? `${allMatches.length} matching projects. The first five are shown.`
        : "No projects match this search.";
    };

    toggle.addEventListener("click", () => {
      const shouldOpen = !discovery.classList.contains("is-open") || !searchPinned;
      setSearchOpen(shouldOpen, shouldOpen);
      if (shouldOpen) input.focus({ preventScroll: true });
    });
    discovery.addEventListener("pointerenter", () => setSearchOpen(true, searchPinned));
    discovery.addEventListener("pointerleave", () => {
      if (!searchPinned && !discovery.contains(document.activeElement) && !input.value) setSearchOpen(false, false);
    });
    input.addEventListener("focus", () => setSearchOpen(true, searchPinned));
    input.addEventListener("input", renderResults);
    form.addEventListener("submit", event => {
      event.preventDefault();
      results.querySelector("[data-project-id]")?.click();
    });
    form.addEventListener("keydown", event => {
      if (event.key === "ArrowDown") {
        const firstResult = results.querySelector("[data-project-id]");
        if (firstResult) {
          event.preventDefault();
          firstResult.focus();
        }
      }
      if (event.key === "Escape") {
        event.preventDefault();
        input.value = "";
        if (count) count.textContent = String(projects.length).padStart(3, "0");
        renderResults();
        setSearchOpen(false, false);
        toggle.focus({ preventScroll: true });
      }
    });
    results.addEventListener("click", event => {
      if (!event.target.closest("[data-project-id]")) return;
      searchPinned = false;
      window.requestAnimationFrame(() => setSearchOpen(false, false));
    });
  }

  function initializeProjectGallery() {
    const image = dialog?.querySelector("[data-gallery-image]");
    const caption = dialog?.querySelector("[data-gallery-caption]");
    const stage = dialog?.querySelector("[data-gallery-stage]");
    const fallback = dialog?.querySelector("[data-gallery-fallback]");
    const fullResolution = dialog?.querySelector("[data-gallery-full]");
    const items = Array.from(dialog?.querySelectorAll("[data-gallery-item]") || []);
    if (!image || !stage || items.length === 0) return;
    let requestToken = 0;
    const syncStageOrientation = () => {
      stage.classList.toggle(
        "is-portrait",
        image.naturalHeight > image.naturalWidth * 1.12
      );
    };

    const showImage = item => {
      if (!(item instanceof HTMLButtonElement)) return;
      const token = ++requestToken;
      items.forEach(button => {
        const selected = button === item;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-pressed", String(selected));
      });

      stage.classList.add("is-switching");
      stage.classList.remove("has-error");
      stage.classList.remove("is-portrait");
      if (fallback) fallback.hidden = true;
      if (caption) caption.hidden = false;
      if (fullResolution instanceof HTMLAnchorElement) fullResolution.hidden = false;
      image.hidden = false;
      image.alt = item.dataset.galleryAlt || "Project evidence";
      if (caption) caption.textContent = item.dataset.galleryCaption || "Verified project evidence.";
      if (fullResolution instanceof HTMLAnchorElement) {
        fullResolution.href = item.dataset.gallerySource || image.src;
      }

      const settle = () => {
        if (token !== requestToken) return;
        syncStageOrientation();
        stage.classList.remove("is-switching");
      };
      image.addEventListener("load", settle, { once: true });
      image.addEventListener("error", () => {
        if (token !== requestToken) return;
        stage.classList.remove("is-switching");
        stage.classList.add("has-error");
        image.hidden = true;
        if (fallback) fallback.hidden = false;
        if (caption) caption.hidden = true;
        if (fullResolution instanceof HTMLAnchorElement) fullResolution.hidden = true;
      }, { once: true });
      image.src = item.dataset.gallerySource || "";
      if (image.complete && image.naturalWidth > 0) {
        window.requestAnimationFrame(settle);
      }
    };

    items.forEach((item, index) => {
      item.addEventListener("click", () => showImage(item));
      item.addEventListener("keydown", event => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const targetIndex = event.key === "Home"
          ? 0
          : event.key === "End"
            ? items.length - 1
            : (index + (event.key === "ArrowRight" ? 1 : -1) + items.length) % items.length;
        const target = items[targetIndex];
        target.focus();
        showImage(target);
      });
    });

    if (image.complete && image.naturalWidth > 0) {
      syncStageOrientation();
    } else {
      image.addEventListener("load", syncStageOrientation, { once: true });
    }

    const initialRequestToken = requestToken;
    image.addEventListener("error", () => {
      if (initialRequestToken !== requestToken) return;
      stage.classList.add("has-error");
      image.hidden = true;
      if (fallback) fallback.hidden = false;
      if (caption) caption.hidden = true;
      if (fullResolution instanceof HTMLAnchorElement) fullResolution.hidden = true;
    }, { once: true });
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
    const projectContext = project.eyebrow || `${project.category} / ${project.family}`;
    const dialogKicker = project.cloudFocus
      ? `${projectContext} / ${project.cloudFocus} cloud focus`
      : projectContext;
    const projectLinks = [
      project.liveUrl && {
        url: project.liveUrl,
        label: "Open the live product",
        modifier: "dialog-link--live"
      },
      project.apiUrl && {
        url: project.apiUrl,
        label: "Explore the live API",
        modifier: "dialog-link--api"
      },
      {
        url: project.url,
        label: "Inspect the source on GitHub",
        modifier: "dialog-link--source"
      }
    ].filter(Boolean);

    dialogContent.innerHTML = `
      <article class="dialog-case" data-accent="${token.key}">
        <header class="dialog-hero">
          <div>
            <p class="dialog-kicker">${escapeHtml(dialogKicker)}</p>
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
        ${galleryMarkup(project)}
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
              </div>
              <div class="dialog-tags">${technologyMarkup(project, 8)}</div>
              <nav class="dialog-links" aria-label="Project links">
                ${projectLinks.map(link => `
                  <a class="dialog-link ${link.modifier}" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">
                    <strong>${escapeHtml(link.label)}</strong><span aria-hidden="true">↗</span>
                  </a>
                `).join("")}
              </nav>
            </section>
          </div>
        </div>
      </article>
    `;

    clearDialogCloseTransition();
    dialog.classList.remove("is-visible", "is-closing");
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add("dialog-open");
    initializeProjectGallery();
    window.requestAnimationFrame(() => {
      if (!dialog.open || dialog.classList.contains("is-closing")) return;
      dialog.classList.add("is-visible");
      dialog.querySelector(".dialog-close")?.focus({ preventScroll: true });
    });
  }

  function clearDialogCloseTransition() {
    if (dialogCloseTimer) {
      window.clearTimeout(dialogCloseTimer);
      dialogCloseTimer = 0;
    }
    if (dialog && dialogCloseTransitionEnd) {
      dialog.removeEventListener("transitionend", dialogCloseTransitionEnd);
      dialogCloseTransitionEnd = null;
    }
  }

  function completeDialogClose() {
    clearDialogCloseTransition();
    if (!dialog?.open) return;
    dialog.classList.remove("is-visible", "is-closing");
    dialog.close();
  }

  function closeDialog() {
    if (!dialog?.open || dialog.classList.contains("is-closing")) return;
    if (dialogMotionQuery.matches) {
      completeDialogClose();
      return;
    }

    dialog.classList.remove("is-visible");
    dialog.classList.add("is-closing");
    dialogCloseTransitionEnd = event => {
      if (event.target === dialog && event.propertyName === "opacity") {
        completeDialogClose();
      }
    };
    dialog.addEventListener("transitionend", dialogCloseTransitionEnd);
    dialogCloseTimer = window.setTimeout(
      completeDialogClose,
      dialogExitDuration + 80
    );
  }

  const screens = Array.from(document.querySelectorAll("[data-screen]"));
  const screenNavigation = document.querySelector(".screen-navigation");
  const screenLinks = Array.from(document.querySelectorAll("[data-screen-link]"));
  const screenStatus = document.querySelector("[data-screen-status]");
  const activeScreenLabel = document.querySelector("[data-active-screen-label]");
  const baseDocumentTitle = document.title;
  let activeScreen = null;
  let pendingHistoryFocus = null;
  let updateScreenUi = () => {};

  function targetFromHash(rawHash) {
    let identifier = String(rawHash || "").replace(/^#/, "");
    if (!identifier) identifier = "top";
    try {
      identifier = decodeURIComponent(identifier);
    } catch {
      return null;
    }
    return document.getElementById(identifier);
  }

  function screenFromHash(rawHash) {
    const target = targetFromHash(rawHash);
    if (!target) return null;
    return target.matches("[data-screen]") ? target : target.closest("[data-screen]");
  }

  function activateScreen(targetScreen, options = {}) {
    const {
      historyMode = "none",
      historyHash = "",
      focus = false,
      announce = true
    } = options;
    const target = typeof targetScreen === "string"
      ? screenFromHash(targetScreen.startsWith("#") ? targetScreen : `#${targetScreen}`)
      : targetScreen;
    if (!(target instanceof HTMLElement) || !screens.includes(target)) return false;

    target.classList.add("is-active");
    target.inert = false;
    target.removeAttribute("aria-hidden");

    if (focus) target.focus({ preventScroll: true });

    screens.forEach(screen => {
      if (screen === target) return;
      screen.classList.remove("is-active");
      screen.inert = true;
      screen.setAttribute("aria-hidden", "true");
    });

    activeScreen = target;
    const label = target.dataset.screenLabel || target.id;
    const navigationOwner = document.getElementById(target.dataset.navigationOwner || target.id) || target;
    document.body.dataset.activeScreen = navigationOwner.id;
    if (activeScreenLabel) activeScreenLabel.textContent = label;
    document.title = target.id === "top" ? baseDocumentTitle : `${label} — Jean Loa`;

    screenLinks.forEach(link => {
      const linkedScreen = screenFromHash(link.getAttribute("href"));
      if (linkedScreen === navigationOwner) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    const activeLink = screenLinks.find(link => screenFromHash(link.getAttribute("href")) === navigationOwner);
    activeLink?.scrollIntoView({
      behavior: reducedMotion.matches || !focus ? "auto" : "smooth",
      block: "nearest",
      inline: "center"
    });

    const nextHash = historyHash && screenFromHash(historyHash) === target
      ? historyHash
      : `#${target.id}`;
    if (historyMode === "push" && window.location.hash !== nextHash) {
      window.history.pushState({ screen: target.id }, "", nextHash);
    } else if (historyMode === "replace" && window.location.hash !== nextHash) {
      window.history.replaceState({ screen: target.id }, "", nextHash);
    }

    const requestedAnchor = targetFromHash(nextHash);
    if (requestedAnchor && requestedAnchor !== target && target.contains(requestedAnchor)) {
      window.requestAnimationFrame(() => {
        requestedAnchor.scrollIntoView({
          behavior: reducedMotion.matches || historyMode !== "push" ? "auto" : "smooth",
          block: "start"
        });
      });
    }

    if (screenStatus) {
      screenStatus.textContent = announce && !focus ? `${label} screen opened.` : "";
    }
    updateScreenUi();
    window.dispatchEvent(new CustomEvent("portfolio:screenchange", {
      detail: { id: target.id, label, navigationOwner: navigationOwner.id }
    }));
    return true;
  }

  function initializeScreenNavigation() {
    if (!screens.length || !screenNavigation) return;
    document.documentElement.classList.add("has-screen-navigation");
    window.scrollTo(0, 0);

    const requestedHash = window.location.hash || "#top";
    const initialScreen = screenFromHash(requestedHash);
    activateScreen(initialScreen || screens[0], {
      historyMode: window.location.hash && initialScreen ? "none" : "replace",
      historyHash: initialScreen ? requestedHash : "#top",
      announce: false
    });

    document.querySelector("[data-skip-current]")?.addEventListener("click", event => {
      event.preventDefault();
      activeScreen?.focus({ preventScroll: true });
    });

    document.addEventListener("click", event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest("a[href^='#']");
      if (!link || link.hasAttribute("download") || link.target === "_blank") return;
      const hash = link.getAttribute("href");
      const target = screenFromHash(hash);
      if (!target) return;
      event.preventDefault();
      const fromScreenNavigation = link.matches("[data-screen-link]");
      const keyboardActivation = fromScreenNavigation && event.detail === 0;
      const opensArchive = link.matches("[data-archive-link]");
      const closesArchive = link.matches("[data-archive-back]");
      if (opensArchive && activeScreen) target.dataset.returnScreen = activeScreen.id;
      const returnTrigger = link.matches("[data-archive-back]") && activeScreen
        ? target.querySelector(`[data-archive-link][href="#${activeScreen.id}"]`)
        : null;
      const canPopArchiveHistory = closesArchive
        && activeScreen?.dataset.returnScreen === target.id
        && window.history.state?.screen === activeScreen.id;
      if (canPopArchiveHistory) {
        pendingHistoryFocus = returnTrigger instanceof HTMLElement ? returnTrigger : null;
        window.history.back();
        return;
      }
      activateScreen(target, {
        historyMode: closesArchive ? "replace" : "push",
        historyHash: hash,
        focus: (!fromScreenNavigation || keyboardActivation) && !returnTrigger
      });
      if (returnTrigger instanceof HTMLElement) {
        window.requestAnimationFrame(() => returnTrigger.focus({ preventScroll: true }));
      }
    });

    const restoreFromHistory = () => {
      const target = screenFromHash(window.location.hash) || screens[0];
      if (dialog?.open) {
        lastDialogTrigger = null;
        closeDialog();
      }
      activateScreen(target, { focus: true });
      if (pendingHistoryFocus instanceof HTMLElement && !pendingHistoryFocus.closest("[inert]")) {
        const focusTarget = pendingHistoryFocus;
        pendingHistoryFocus = null;
        window.requestAnimationFrame(() => focusTarget.focus({ preventScroll: true }));
      } else {
        pendingHistoryFocus = null;
      }
    };
    window.addEventListener("hashchange", restoreFromHistory);
    window.addEventListener("beforeprint", () => {
      screens.forEach(screen => {
        screen.inert = false;
        screen.removeAttribute("aria-hidden");
      });
    });
    window.addEventListener("afterprint", () => {
      screens.forEach(screen => {
        const isCurrent = screen === activeScreen;
        screen.inert = !isCurrent;
        if (isCurrent) screen.removeAttribute("aria-hidden");
        else screen.setAttribute("aria-hidden", "true");
      });
    });

    screenNavigation.addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      const currentIndex = Math.max(0, screenLinks.indexOf(document.activeElement));
      let nextIndex = currentIndex;
      if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + screenLinks.length) % screenLinks.length;
      if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % screenLinks.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = screenLinks.length - 1;
      event.preventDefault();
      screenLinks[nextIndex]?.focus();
      screenLinks[nextIndex]?.click();
    });
  }

  function initializeReveal() {
    const nodes = document.querySelectorAll(".reveal");
    if (
      document.documentElement.classList.contains("has-screen-navigation")
      || reducedMotion.matches
      || !("IntersectionObserver" in window)
    ) {
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
    updateScreenUi = () => {
      const current = activeScreen || document.querySelector("[data-screen].is-active");
      const screenMode = document.documentElement.classList.contains("has-screen-navigation");
      const top = screenMode && current ? current.scrollTop : window.scrollY;
      const maximum = screenMode && current
        ? current.scrollHeight - current.clientHeight
        : document.documentElement.scrollHeight - window.innerHeight;
      header?.classList.toggle("is-scrolled", current?.id !== "top" || top > 24);
      if (progress) {
        const completion = maximum > 0 ? Math.min(100, Math.max(0, (top / maximum) * 100)) : 0;
        progress.style.width = `${completion}%`;
      }
    };
    screens.forEach(screen => screen.addEventListener("scroll", updateScreenUi, { passive: true }));
    window.addEventListener("scroll", updateScreenUi, { passive: true });
    window.addEventListener("resize", updateScreenUi, { passive: true });
    updateScreenUi();
  }

  function initializeHeroMotion() {
    const hero = document.querySelector(".hero");
    const eyes = Array.from(document.querySelectorAll(".hero-eye"));
    if (!hero || !eyes.length || reducedMotion.matches) return;
    const setEyePosition = (x, y) => {
      eyes.forEach(eye => {
        const isExpansiveEye = eye.classList.contains("hero-eye--right");
        const xTravel = isExpansiveEye ? x * -11 : x * 22;
        const yTravel = isExpansiveEye ? y * 8 : y * 17;
        eye.style.setProperty("--eye-x", `${xTravel}px`);
        eye.style.setProperty("--eye-y", `${yTravel}px`);
      });
    };
    hero.addEventListener("pointermove", event => {
      const rectangle = hero.getBoundingClientRect();
      const x = (event.clientX - rectangle.left) / rectangle.width - 0.5;
      const y = (event.clientY - rectangle.top) / rectangle.height - 0.5;
      setEyePosition(x, y);
    });
    hero.addEventListener("pointerleave", () => setEyePosition(0, 0));
  }

  renderFlagships();
  initializeEvidenceImages();
  renderCategoryAtlas();
  categoryDefinitions.forEach(definition => renderCategorySection(definition));
  initializeScreenNavigation();
  initializeBackgroundAudio();
  initializeProjectSearch();
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
  dialog?.addEventListener("cancel", event => {
    event.preventDefault();
    closeDialog();
  });
  dialog?.addEventListener("click", event => {
    if (event.target === dialog) closeDialog();
  });
  dialog?.addEventListener("close", () => {
    clearDialogCloseTransition();
    dialog.classList.remove("is-visible", "is-closing");
    document.body.classList.remove("dialog-open");
    const returnTarget = lastDialogTrigger instanceof HTMLElement
      && lastDialogTrigger.isConnected
      && !lastDialogTrigger.closest("[inert]")
      ? lastDialogTrigger
      : activeScreen;
    lastDialogTrigger = null;
    window.requestAnimationFrame(() => {
      returnTarget?.focus({ preventScroll: true });
    });
  });
})();
