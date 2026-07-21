(() => {
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const accentMap = { internship: "#ff4f2e", university: "#1877f2", software: "#ffb000", ai: "#8b5cf6", independent: "#25a36f" };
  const categoryAccentMap = {
    Internships: accentMap.internship,
    University: accentMap.university,
    "Software Engineering": accentMap.software,
    "AI Engineering": accentMap.ai,
    Leisure: accentMap.independent
  };
  const featuredUniversityProjectIds = new Set([
    "lowcortisol",
    "electrocorp"
  ]);
  const projectFilms = new Map([
    ["electrocorp", {
      brand: "ElectroCorp",
      source: "electrocorp-trailer.webm",
      type: "video/webm",
      poster: "electrocorp-trailer-poster.webp",
      duration: "00:25",
      title: "Energy, orchestrated.",
      description: "A product journey through spaces, connected devices, energy intelligence and decision-ready reports.",
      stack: "Angular / Spring Boot / PostgreSQL",
      footnote: "From domain workflows to visible operational evidence."
    }],
    ["lowcortisol", {
      brand: "LowCortisol",
      source: "lowcortisol-trailer.webm",
      type: "video/webm",
      poster: "lowcortisol-trailer-poster.webp",
      duration: "00:23",
      title: "Wellbeing, made operational.",
      description: "A connected journey through workplaces, resource monitoring, smart valves and real-time operational control.",
      stack: "Vue / ASP.NET Core / PostgreSQL",
      footnote: "From physical resources to calm, actionable decisions."
    }]
  ]);

  const dialog = document.querySelector("#project-dialog");
  const dialogContent = document.querySelector("#dialog-content");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeFilmObserver = null;

  const escapeHtml = value => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const rawProjectStatus = project => {
    if (project.status) return project.status;
    if (project.category === "University") return "Built system";
    if ((project.signals?.code || 0) >= 4) return "Implementation";
    return "Blueprint";
  };

  const omitsStatusAnnotation = project =>
    /coursework|published course|practice collection|lab collection|exploration/i.test(rawProjectStatus(project));

  const projectStatus = project => {
    if (omitsStatusAnnotation(project)) return null;
    return /pending|blueprint|roadmap|development/i.test(rawProjectStatus(project))
      ? "Pending"
      : "Completed";
  };

  const statusClass = status => String(status || "").toLowerCase();

  function isFeaturedProject(project) {
    if (featuredUniversityProjectIds.has(project.id)) return true;
    if (project.category === "Software Engineering") return true;
    if (project.category !== "AI Engineering") return false;

    const roadmapProjects = projects
      .filter(candidate =>
        candidate.category === "AI Engineering" && candidate.family === project.family)
      .sort((first, second) =>
        sectionProjectSequence(first) - sectionProjectSequence(second)
        || first.title.localeCompare(second.title));
    return roadmapProjects.at(-1)?.id === project.id;
  }

  const projectAccent = project => categoryAccentMap[project.category] || accentMap.independent;

  const techMarkup = technologies => (technologies || []).slice(0, 6)
    .map(tech => `<span>${escapeHtml(tech)}</span>`).join("");

  function projectSequence(project) {
    const numberedSegment = [project.path, project.url]
      .filter(Boolean)
      .flatMap(value => String(value).split("/"))
      .reverse()
      .find(segment => /^\d{2}-/.test(segment));
    if (numberedSegment) return Number(numberedSegment.slice(0, 2));

    const roadmapNumber = String(project.id || "").match(/^roadmap-(\d+)$/);
    return roadmapNumber ? Number(roadmapNumber[1]) : Number.MAX_SAFE_INTEGER;
  }

  const universityGroupNames = new Map([
    ["Mobility systems", "Portfolio Systems"],
    ["Resource monitoring", "Portfolio Systems"],
    ["Energy systems", "Portfolio Systems"]
  ]);
  const universityGroupOrder = new Map([
    ["Portfolio Systems", 1],
    ["Computer Science Coursework", 2],
    ["Academic Capstones", 3],
    ["Technical Education", 4]
  ]);
  const internshipGroupOrder = new Map([["DecodeLabs", 1], ["SpotterAI", 2]]);
  const independentGroupOrder = new Map([["Programming Foundations", 1], ["Independent Laboratories", 2]]);
  const universityProjectOrder = new Map([["SmartLocation", 1], ["LowCortisol", 2], ["ElectroCorp", 3]]);

  const projectSections = [
    {
      category: "Internships",
      rootId: "internship-projects",
      groupLabel: "Internship",
      groupName: project => project.organization || "Internship",
      groupOrder: internshipGroupOrder
    },
    {
      category: "University",
      rootId: "university-projects",
      groupLabel: "Collection",
      groupName: project => universityGroupNames.get(project.family) || project.family || "University Projects",
      groupOrder: universityGroupOrder
    },
    {
      category: "AI Engineering",
      rootId: "ai-projects",
      groupLabel: "Roadmap",
      groupName: project => project.family || "AI Engineering Roadmap"
    },
    {
      category: "Software Engineering",
      rootId: "software-projects",
      groupLabel: "Roadmap",
      groupName: project => project.family || "Software Engineering Roadmap"
    },
    {
      category: "Leisure",
      rootId: "independent-projects",
      groupLabel: "Collection",
      groupName: project => project.family || "Independent Projects",
      groupOrder: independentGroupOrder
    }
  ];

  function sectionProjectSequence(project) {
    if (project.category === "Internships" && project.sequence) return Number(project.sequence);
    if (universityProjectOrder.has(project.title)) return universityProjectOrder.get(project.title);
    const semesterNumber = String(project.path || project.url || "").match(/semester-(\d{2})/i);
    if (semesterNumber) return Number(semesterNumber[1]);
    return projectSequence(project);
  }

  function groupedSectionProjects(definition, projectsToRender) {
    const groups = new Map();
    projectsToRender.forEach(project => {
      const name = definition.groupName(project);
      if (!groups.has(name)) groups.set(name, []);
      groups.get(name).push(project);
    });

    return Array.from(groups.entries())
      .map(([name, groupProjects]) => ({
        name,
        sequence: definition.groupOrder?.get(name)
          ?? Math.min(...groupProjects.map(sectionProjectSequence)),
        projects: groupProjects.sort((first, second) =>
          sectionProjectSequence(first) - sectionProjectSequence(second)
          || first.title.localeCompare(second.title))
      }))
      .sort((first, second) =>
        first.sequence - second.sequence || first.name.localeCompare(second.name));
  }

  function sectionCardMarkup(project, groupName, projectIndex) {
    const status = projectStatus(project);
    const featured = isFeaturedProject(project);
    const film = projectFilms.get(project.id);
    const descriptor = project.eyebrow
      || (project.technologies || []).slice(0, 3).join(" · ")
      || project.family;
    return `
      <article class="section-project-card${featured ? " is-featured" : ""}${film ? " has-film" : ""}" data-project-id="${escapeHtml(project.id)}" tabindex="0" role="button" aria-label="Open ${escapeHtml(project.title)} details${film ? " and product film" : ""}">
        <div class="section-project-card__meta">
          <span>${escapeHtml(groupName)}</span>
          <span>Project ${String(projectIndex + 1).padStart(2, "0")}</span>
        </div>
        ${featured ? '<div class="featured-label"><span aria-hidden="true">★</span> Featured</div>' : ""}
        <div class="section-project-card__body">
          <p>${escapeHtml(descriptor)}</p>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.summary)}</p>
        </div>
        <div class="section-project-card__footer">
          ${status
            ? `<span class="status-pill status-pill--${statusClass(status)}">${escapeHtml(status)}</span>`
            : '<span aria-hidden="true"></span>'}
          ${film
            ? `<span class="project-film-indicator"><i aria-hidden="true"></i> Film ${escapeHtml(film.duration)}</span>`
            : '<span aria-hidden="true">↗</span>'}
        </div>
      </article>
    `;
  }

  function projectGroupMarkup(definition, group, groupIndex) {
    const singleProject = group.projects.length === 1;
    const projectLabel = `${group.projects.length} ${singleProject ? "project" : "projects"}`;
    return `
      <section class="project-group" data-layout="${singleProject ? "single" : "grid"}">
        <header class="project-group__header reveal" style="--group-delay:${Math.min(groupIndex, 10) * 45}ms">
          <div>
            <span>${definition.groupLabel} / ${String(groupIndex + 1).padStart(2, "0")}</span>
            <h3>${escapeHtml(group.name)}</h3>
          </div>
          <p>${projectLabel}</p>
        </header>
        <div class="project-group__projects">
          ${group.projects.map((project, projectIndex) =>
            sectionCardMarkup(project, group.name, projectIndex)).join("")}
        </div>
      </section>
    `;
  }

  function renderProjectSections() {
    projectSections.forEach(definition => {
      const root = document.getElementById(definition.rootId);
      if (!root) return;
      const categoryProjects = projects.filter(project => project.category === definition.category);
      const groups = groupedSectionProjects(definition, categoryProjects);
      root.innerHTML = groups.map((group, index) => projectGroupMarkup(definition, group, index)).join("");

      document.querySelectorAll("[data-category-count]").forEach(node => {
        if (node.dataset.categoryCount === definition.category) {
          node.textContent = String(categoryProjects.length).padStart(2, "0");
        }
      });
      document.querySelectorAll("[data-group-count]").forEach(node => {
        if (node.dataset.groupCount === definition.category) {
          node.textContent = String(groups.length).padStart(2, "0");
        }
      });
    });
  }

  function genericArchitecture(project) {
    const technology = project.technologies?.length ? `${project.technologies.join(" · ")}` : "Technology choices documented in the project brief";
    return [
      `${project.family} research area`,
      "Problem framing and module map",
      technology,
      "Evaluation and limitation notes"
    ];
  }

  function projectFilmMarkup(project) {
    const film = projectFilms.get(project.id);
    if (!film) return "";

    return `
      <section class="dialog-film" aria-labelledby="dialog-film-title">
        <div class="dialog-film__intro">
          <div>
            <p class="dialog-film__eyebrow"><span>Product film</span> / ${escapeHtml(film.duration)}</p>
            <h3 id="dialog-film-title">${escapeHtml(film.title)}</h3>
          </div>
          <p>${escapeHtml(film.description)}</p>
        </div>
        <div class="dialog-film__frame" data-film-frame style="--film-progress:0%">
          <video
            class="dialog-film__video"
            data-project-film
            muted
            loop
            playsinline
            preload="metadata"
            poster="${escapeHtml(film.poster)}"
            aria-label="${escapeHtml(film.brand)} product walkthrough"
          >
            <source src="${escapeHtml(film.source)}" type="${escapeHtml(film.type)}" />
          </video>
          <div class="dialog-film__shade" aria-hidden="true"></div>
          <div class="dialog-film__topline" aria-hidden="true">
            <span><i></i> ${escapeHtml(film.brand)} / Product film</span>
            <span>${escapeHtml(film.duration)}</span>
          </div>
          <div class="dialog-film__controls">
            <span class="dialog-film__signal" aria-hidden="true">Live product surface</span>
            <button class="dialog-film__toggle" type="button" data-film-toggle aria-label="Play ${escapeHtml(film.brand)} product film">
              <span class="dialog-film__toggle-icon" aria-hidden="true"></span>
              <span data-film-toggle-label>Play film</span>
            </button>
          </div>
          <div class="dialog-film__progress" aria-hidden="true"><span></span></div>
        </div>
        <div class="dialog-film__footer">
          <span>${escapeHtml(film.stack)}</span>
          <p>${escapeHtml(film.footnote)}</p>
        </div>
      </section>
    `;
  }

  function initializeProjectFilm() {
    activeFilmObserver?.disconnect();
    activeFilmObserver = null;

    const video = dialog.querySelector("[data-project-film]");
    const frame = dialog.querySelector("[data-film-frame]");
    const toggle = dialog.querySelector("[data-film-toggle]");
    const toggleLabel = dialog.querySelector("[data-film-toggle-label]");
    if (!video || !frame || !toggle || !toggleLabel) return;
    const filmLabel = video.getAttribute("aria-label") || "product film";

    video.muted = true;
    video.defaultMuted = true;
    video.dataset.userPaused = String(reducedMotion);

    const syncPlaybackUi = () => {
      const playing = !video.paused;
      toggle.classList.toggle("is-playing", playing);
      toggleLabel.textContent = playing ? "Pause film" : "Play film";
      toggle.setAttribute("aria-label", `${playing ? "Pause" : "Play"} ${filmLabel}`);
      frame.classList.toggle("is-playing", playing);
    };

    const updateProgress = () => {
      const progress = video.duration ? (video.currentTime / video.duration) * 100 : 0;
      frame.style.setProperty("--film-progress", `${progress}%`);
    };

    toggle.addEventListener("click", () => {
      if (video.paused) {
        video.dataset.userPaused = "false";
        video.play().catch(syncPlaybackUi);
      } else {
        video.dataset.userPaused = "true";
        video.pause();
      }
    });
    video.addEventListener("play", syncPlaybackUi);
    video.addEventListener("pause", syncPlaybackUi);
    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", updateProgress);
    syncPlaybackUi();

    if ("IntersectionObserver" in window) {
      activeFilmObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !reducedMotion && video.dataset.userPaused !== "true") {
            video.play().catch(syncPlaybackUi);
          } else if (!entry.isIntersecting) {
            video.pause();
          }
        });
      }, { root: dialog, threshold: 0.42 });
      activeFilmObserver.observe(frame);
    } else if (!reducedMotion) {
      video.play().catch(syncPlaybackUi);
    }
  }

  function openProject(projectId) {
    const project = projects.find(item => item.id === projectId);
    if (!project) return;
    const status = projectStatus(project);
    const sourceStatus = rawProjectStatus(project);
    const isBlueprint = /blueprint|roadmap|pending|development/i.test(sourceStatus);
    const featured = isFeaturedProject(project);
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
      ? "This entry is a technical blueprint: it defines the intended modules, workflow, evaluation and limitations, but does not claim an implemented product."
      : "This implementation connects data, code and documented evidence inside a focused engineering workflow.");
    const accent = projectAccent(project);

    dialogContent.innerHTML = `
      <article style="--dialog-accent:${accent}">
        <header class="dialog-hero">
          <div>
            <p class="dialog-kicker">${escapeHtml(project.eyebrow || `${project.category} / ${project.family}`)}</p>
            ${featured ? '<div class="featured-label featured-label--dialog"><span aria-hidden="true">★</span> Featured</div>' : ""}
            <h2 id="dialog-title">${escapeHtml(project.title)}</h2>
          </div>
          <div>
            <p class="dialog-summary">${escapeHtml(project.summary)}</p>
            ${status ? `<span class="dialog-status dialog-status--${statusClass(status)}">${escapeHtml(status)}</span>` : ""}
          </div>
        </header>
        ${projectFilmMarkup(project)}
        <div class="dialog-body">
          <aside class="dialog-index" aria-label="Case study contents">
            <span>01 / Problem</span><span>02 / Response</span><span>03 / Architecture</span><span>04 / Evidence</span>
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
              <p class="dialog-section__label">03 · Architecture & capabilities</p>
              <h3>How the system is shaped.</h3>
              <div class="detail-list">${architecture.map(item => `<span>${escapeHtml(item)}</span>`).join("")}</div>
              <div class="detail-list">${capabilities.map(item => `<span>${escapeHtml(item)}</span>`).join("")}</div>
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
              <div class="dialog-tags">${techMarkup(project.technologies || [])}</div>
              <a class="dialog-link" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer"><strong>Inspect the project on GitHub</strong><span aria-hidden="true">↗</span></a>
            </section>
          </div>
        </div>
      </article>
    `;
    dialog.showModal();
    document.body.classList.add("dialog-open");
    initializeProjectFilm();
    dialog.querySelector(".dialog-close").focus();
  }

  renderProjectSections();

  document.querySelectorAll("[data-total-projects]").forEach(node => { node.textContent = String(projects.length).padStart(2, "0"); });
  const internships = projects.filter(project => project.internship);
  document.querySelectorAll("[data-internship-count]").forEach(node => { node.textContent = String(internships.length).padStart(2, "0"); });
  document.querySelectorAll("[data-internship-completed]").forEach(node => { node.textContent = String(internships.filter(project => projectStatus(project) === "Completed").length).padStart(2, "0"); });
  document.querySelectorAll("[data-internship-pending]").forEach(node => { node.textContent = String(internships.filter(project => projectStatus(project) === "Pending").length).padStart(2, "0"); });

  document.addEventListener("click", event => {
    const card = event.target.closest("[data-project-id]");
    if (card) openProject(card.dataset.projectId);
  });

  document.addEventListener("keydown", event => {
    const card = event.target.closest?.("[data-project-id]");
    if (card && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openProject(card.dataset.projectId);
    }
  });

  document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => {
    activeFilmObserver?.disconnect();
    activeFilmObserver = null;
    dialog.querySelector("[data-project-film]")?.pause();
    document.body.classList.remove("dialog-open");
  });

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  menuButton.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", event => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

  if (reducedMotion) {
    document.querySelectorAll(".reveal").forEach(node => node.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13, rootMargin: "0px 0px -6%" });
    document.querySelectorAll(".reveal").forEach(node => observer.observe(node));
  }

  const header = document.querySelector("[data-header]");
  const progress = document.querySelector(".scroll-progress span");
  const updateScroll = () => {
    const top = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle("is-scrolled", top > 24);
    progress.style.width = `${max > 0 ? (top / max) * 100 : 0}%`;
  };
  updateScroll();
  window.addEventListener("scroll", updateScroll, { passive: true });

  if (!reducedMotion) {
    const core = document.querySelector(".hero-core");
    document.querySelector(".hero").addEventListener("pointermove", event => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      core.style.transform = `translate(${x * 26}px, ${y * 26}px)`;
    });
  }
})();
