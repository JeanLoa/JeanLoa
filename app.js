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

  const dialog = document.querySelector("#project-dialog");
  const dialogContent = document.querySelector("#dialog-content");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    const descriptor = project.eyebrow
      || (project.technologies || []).slice(0, 3).join(" · ")
      || project.family;
    return `
      <article class="section-project-card" data-project-id="${escapeHtml(project.id)}" tabindex="0" role="button" aria-label="Open ${escapeHtml(project.title)} details">
        <div class="section-project-card__meta">
          <span>${escapeHtml(groupName)}</span>
          <span>Project ${String(projectIndex + 1).padStart(2, "0")}</span>
        </div>
        <div class="section-project-card__body">
          <p>${escapeHtml(descriptor)}</p>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.summary)}</p>
        </div>
        <div class="section-project-card__footer">
          <span class="status-pill status-pill--${statusClass(status)}">${escapeHtml(status)}</span>
          <span aria-hidden="true">↗</span>
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

  renderProjectSections();

  document.querySelectorAll("[data-total-projects]").forEach(node => { node.textContent = String(projects.length).padStart(2, "0"); });
  const internships = projects.filter(project => project.internship);
  document.querySelectorAll("[data-internship-count]").forEach(node => { node.textContent = String(internships.length).padStart(2, "0"); });
  document.querySelectorAll("[data-internship-completed]").forEach(node => { node.textContent = String(internships.filter(project => statusClass(projectStatus(project)) === "built").length).padStart(2, "0"); });
  document.querySelectorAll("[data-internship-pending]").forEach(node => { node.textContent = String(internships.filter(project => statusClass(projectStatus(project)) === "pending").length).padStart(2, "0"); });

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
