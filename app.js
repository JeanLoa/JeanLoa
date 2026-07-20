(() => {
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const state = { filter: "All", query: "", visible: 18 };
  const accentMap = { internship: "#ff4f2e", university: "#1877f2", software: "#ffb000", ai: "#8b5cf6", independent: "#25a36f" };
  const categoryAccentMap = {
    Internships: accentMap.internship,
    University: accentMap.university,
    "Software Engineering": accentMap.software,
    "AI Engineering": accentMap.ai,
    Leisure: accentMap.independent
  };

  const internshipRoot = document.querySelector("#internship-projects");
  const featuredRoot = document.querySelector("#featured-projects");
  const grid = document.querySelector("#project-grid");
  const dialog = document.querySelector("#project-dialog");
  const dialogContent = document.querySelector("#dialog-content");
  const search = document.querySelector("#project-search");
  const loadMore = document.querySelector("#load-more");
  const visibleCount = document.querySelector("#visible-count");
  const atlasStatus = document.querySelector("#atlas-status");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let atlasSwapTimer = 0;
  let atlasEntranceTimer = 0;

  const escapeHtml = value => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const projectStatus = project => {
    if (project.status) return project.status;
    if (project.category === "University") return "Built system";
    if ((project.signals?.code || 0) >= 4) return "Implementation";
    if (project.category === "Roadmap") return "Roadmap";
    return "Blueprint";
  };

  const statusClass = status => {
    if (/completed|built|implementation|functional|coursework|published|lab|practice|exploration|capstone|archived/i.test(status)) return "built";
    if (/pending/i.test(status)) return "pending";
    if (/roadmap|development/i.test(status)) return "roadmap";
    return "blueprint";
  };

  const categoryClass = category => String(category || "other").toLowerCase().replaceAll(/[^a-z0-9]+/g, "-");
  const projectAccent = project => categoryAccentMap[project.category] || accentMap.independent;

  const techMarkup = technologies => (technologies || []).slice(0, 6)
    .map(tech => `<span>${escapeHtml(tech)}</span>`).join("");

  function visualMarkup(project) {
    if (project.image) {
      return `<div class="feature-frame"><span class="feature-frame__label">Product evidence</span><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} interface evidence" loading="lazy" /></div>`;
    }
    if (project.visual === "map") {
      return `<div class="feature-frame"><span class="feature-frame__label">Route graph / Lima</span><div class="visual-map"><i class="map-node"></i><i class="map-node"></i><i class="map-node"></i><i class="map-node"></i></div></div>`;
    }
    const cells = Array.from({ length: 70 }, (_, index) => `<span style="--i:${(index % 9) + 1}"></span>`).join("");
    return `<div class="feature-frame"><span class="feature-frame__label">Model surface</span><div class="visual-matrix">${cells}</div></div>`;
  }

  function renderFeatured() {
    const featured = projects.filter(project => project.featured).slice(0, 4);
    featuredRoot.innerHTML = featured.map((project, index) => `
      <article class="feature-project" data-accent="${escapeHtml(project.accent || "lime")}">
        <div class="feature-copy">
          <div class="feature-number"><span>System / ${String(index + 1).padStart(2, "0")}</span><span>${escapeHtml(project.family)}</span></div>
          <div class="feature-main reveal">
            <p class="feature-eyebrow">${escapeHtml(project.eyebrow || project.category)}</p>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.summary)}</p>
          </div>
          <div class="feature-footer reveal">
            <div class="tech-list">${techMarkup(project.technologies)}</div>
            <button class="open-project" type="button" data-open-project="${escapeHtml(project.id)}">Inside the build <span aria-hidden="true">↗</span></button>
          </div>
        </div>
        <div class="feature-visual reveal">${visualMarkup(project)}</div>
      </article>
    `).join("");
  }

  function renderInternships() {
    const internships = projects.filter(project => project.internship);
    internshipRoot.innerHTML = internships.map(project => {
      const status = projectStatus(project);
      return `
        <article class="internship-card" data-project-id="${escapeHtml(project.id)}" tabindex="0" role="button" aria-label="Open ${escapeHtml(project.title)} details">
          <div class="internship-card__meta">
            <span>${escapeHtml(project.organization)}</span>
            <span>Project ${escapeHtml(project.sequence)}</span>
          </div>
          <div class="internship-card__body">
            <p>${escapeHtml(project.family)}</p>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.summary)}</p>
          </div>
          <div class="internship-card__footer">
            <span class="status-pill status-pill--${statusClass(status)}">${escapeHtml(status)}</span>
            <span aria-hidden="true">↗</span>
          </div>
        </article>
      `;
    }).join("");
  }

  const searchableText = project => [project.title, project.summary, project.category, project.organization, project.family, ...(project.technologies || [])].join(" ").toLowerCase();
  const filteredProjects = () => projects.filter(project => {
    const matchesFilter = state.filter === "All" || project.category === state.filter;
    const matchesQuery = !state.query || searchableText(project).includes(state.query);
    return matchesFilter && matchesQuery;
  });

  function cardMarkup(project, index = 0) {
    const status = projectStatus(project);
    const signals = project.signals || {};
    const evidence = signals.code > 0 ? `${signals.code} code files` : signals.files ? `${signals.files} documented files` : "documented scope";
    return `
      <article class="project-card" tabindex="0" role="button" aria-label="Open ${escapeHtml(project.title)} details" data-project-id="${escapeHtml(project.id)}" data-category="${categoryClass(project.category)}" style="--card-delay:${Math.min(index, 11) * 32}ms">
        <div class="project-card__top">
          <span class="project-card__category">${escapeHtml(project.category)}</span>
          <span class="status-pill status-pill--${statusClass(status)}">${escapeHtml(status)}</span>
        </div>
        <div class="project-card__main">
          <h3>${escapeHtml(project.title)}</h3>
          <p class="project-card__family">${escapeHtml(project.family)}</p>
          <p class="project-card__summary">${escapeHtml(project.summary)}</p>
        </div>
        <div class="project-card__footer"><span>${escapeHtml(evidence)}</span><b aria-hidden="true">↗</b></div>
      </article>
    `;
  }

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

  function groupedRoadmaps(projectsToRender) {
    const groups = new Map();
    projectsToRender.forEach(project => {
      const family = project.family || "Engineering roadmap";
      if (!groups.has(family)) groups.set(family, []);
      groups.get(family).push(project);
    });

    return Array.from(groups.entries())
      .map(([family, roadmapProjects]) => ({
        family,
        sequence: Math.min(...roadmapProjects.map(projectSequence)),
        projects: roadmapProjects.sort((first, second) =>
          projectSequence(first) - projectSequence(second) || first.title.localeCompare(second.title))
      }))
      .sort((first, second) =>
        first.sequence - second.sequence || first.family.localeCompare(second.family));
  }

  function roadmapMarkup(projectsToRender) {
    let cardIndex = 0;
    return groupedRoadmaps(projectsToRender).map(({ family, projects: roadmapProjects }, roadmapIndex) => {
      const category = roadmapProjects[0]?.category || state.filter;
      const singleProject = roadmapProjects.length === 1;
      const projectLabel = `${roadmapProjects.length} ${singleProject ? "project" : "projects"}`;
      const cards = roadmapProjects.map(project => cardMarkup(project, cardIndex++)).join("");
      return `
        <section class="roadmap-group" data-category="${categoryClass(category)}" data-layout="${singleProject ? "single" : "grid"}">
          <header class="roadmap-header" style="--card-delay:${Math.min(roadmapIndex, 8) * 55}ms">
            <div>
              <span>Roadmap / ${String(roadmapIndex + 1).padStart(2, "0")}</span>
              <h3>${escapeHtml(family)}</h3>
            </div>
            <p>${projectLabel}</p>
          </header>
          <div class="roadmap-projects">${cards}</div>
        </section>
      `;
    }).join("");
  }

  function completeRoadmapsInView(projectsToRender, limit) {
    const visibleProjects = [];
    for (const { projects: roadmapProjects } of groupedRoadmaps(projectsToRender)) {
      if (visibleProjects.length >= limit) break;
      visibleProjects.push(...roadmapProjects);
    }
    return visibleProjects;
  }

  function renderAtlas({ animate = false } = {}) {
    const results = filteredProjects();
    const hasRoadmapGroups = state.filter === "AI Engineering" || state.filter === "Software Engineering";
    const visible = hasRoadmapGroups
      ? completeRoadmapsInView(results, state.visible)
      : results.slice(0, state.visible);
    const markup = visible.length
      ? hasRoadmapGroups ? roadmapMarkup(visible) : visible.map(cardMarkup).join("")
      : `<div class="empty-projects"><h3>No projects match this view.</h3><p>Try another technology, system or path.</p></div>`;
    visibleCount.textContent = String(results.length);
    atlasStatus.textContent = state.filter === "All" ? "Showing the complete engineering map" : `Focused on ${state.filter}`;
    loadMore.hidden = visible.length >= results.length;

    window.clearTimeout(atlasSwapTimer);
    window.clearTimeout(atlasEntranceTimer);
    grid.classList.remove("is-entering");

    if (!animate || reducedMotion || !grid.childElementCount) {
      grid.classList.remove("is-leaving");
      grid.classList.toggle("has-roadmaps", hasRoadmapGroups);
      grid.innerHTML = markup;
      return;
    }

    grid.classList.add("is-leaving");
    atlasSwapTimer = window.setTimeout(() => {
      grid.classList.toggle("has-roadmaps", hasRoadmapGroups);
      grid.innerHTML = markup;
      grid.classList.remove("is-leaving");
      grid.classList.add("is-entering");
      atlasEntranceTimer = window.setTimeout(() => {
        grid.classList.remove("is-entering");
      }, 1120);
    }, 330);
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

  function openProject(projectId) {
    const project = projects.find(item => item.id === projectId);
    if (!project) return;
    const status = projectStatus(project);
    const isBlueprint = /blueprint|roadmap/i.test(status);
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
            <h2 id="dialog-title">${escapeHtml(project.title)}</h2>
          </div>
          <div>
            <p class="dialog-summary">${escapeHtml(project.summary)}</p>
            <span class="dialog-status">${escapeHtml(status)}</span>
          </div>
        </header>
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
    dialog.querySelector(".dialog-close").focus();
  }

  renderInternships();
  renderFeatured();
  renderAtlas();

  document.querySelectorAll("[data-total-projects]").forEach(node => { node.textContent = String(projects.length).padStart(2, "0"); });
  const internships = projects.filter(project => project.internship);
  document.querySelectorAll("[data-internship-count]").forEach(node => { node.textContent = String(internships.length).padStart(2, "0"); });
  document.querySelectorAll("[data-internship-completed]").forEach(node => { node.textContent = String(internships.filter(project => statusClass(projectStatus(project)) === "built").length).padStart(2, "0"); });
  document.querySelectorAll("[data-internship-pending]").forEach(node => { node.textContent = String(internships.filter(project => statusClass(projectStatus(project)) === "pending").length).padStart(2, "0"); });
  document.querySelectorAll("[data-ai-count]").forEach(node => { node.textContent = `${projects.filter(p => p.category === "AI Engineering").length} records`; });
  document.querySelectorAll("[data-software-count]").forEach(node => { node.textContent = `${projects.filter(p => p.category === "Software Engineering").length} records`; });

  document.addEventListener("click", event => {
    const openButton = event.target.closest("[data-open-project]");
    const card = event.target.closest("[data-project-id]");
    if (openButton) openProject(openButton.dataset.openProject);
    else if (card) openProject(card.dataset.projectId);
  });

  document.addEventListener("keydown", event => {
    const card = event.target.closest?.("[data-project-id]");
    if (card && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openProject(card.dataset.projectId);
    }
  });

  document.querySelectorAll(".filter-chip").forEach(button => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      state.visible = 18;
      document.querySelectorAll(".filter-chip").forEach(chip => {
        const active = chip === button;
        chip.classList.toggle("is-active", active);
        chip.setAttribute("aria-pressed", String(active));
      });
      renderAtlas({ animate: true });
    });
  });

  document.querySelectorAll("[data-filter-jump]").forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filterJump;
      const chip = document.querySelector(`.filter-chip[data-filter="${filter}"]`);
      chip?.click();
      document.querySelector("#atlas")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  search.addEventListener("input", () => {
    state.query = search.value.trim().toLowerCase();
    state.visible = 18;
    renderAtlas({ animate: true });
  });
  loadMore.addEventListener("click", () => { state.visible += 18; renderAtlas({ animate: true }); });

  document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

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
