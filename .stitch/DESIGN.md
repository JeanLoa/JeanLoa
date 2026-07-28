---
name: JeanLoa Portfolio
colors:
  canvas: '#f7f7f4'
  paper: '#ffffff'
  ink: '#0b0c0b'
  ink-soft: '#242624'
  muted: '#5b5e59'
  line: '#d8d9d4'
  line-strong: '#a8aaa4'
  inverse-line: '#30322f'
  focus: '#0b5fcc'
  internship: '#ff4f2e'
  internship-text: '#c9361e'
  university: '#1877f2'
  university-text: '#0b5fcc'
  ai: '#8b5cf6'
  ai-text: '#6d42d8'
  software: '#ffb000'
  software-text: '#8a5a00'
  independent: '#25a36f'
  independent-text: '#147a4f'
typography:
  display:
    fontFamily: Archivo
    fontWeight: '600'
    lineHeight: '0.90-1.00'
    letterSpacing: '-0.055em'
  editorial-accent:
    fontFamily: Instrument Serif
    fontWeight: '400'
    fontStyle: italic
    lineHeight: '0.95'
    letterSpacing: '-0.035em'
  body:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: '0'
  technical-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500-600'
    lineHeight: '1.35'
    letterSpacing: '0.06em'
rounded:
  none: 0
  circle: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 'clamp(4rem, 8vw, 7.5rem)'
  gutter: 'clamp(1.5rem, 4.5vw, 4.5rem)'
  maxWidth: 100rem
---

# Design System: JeanLoa Portfolio

## 1. Visual Theme & Atmosphere

JeanLoa Portfolio is a monochromatic, editorial and technically rigorous system
for presenting an engineering career as a structured body of work. It should
feel closer to an architecture journal, technical index or curated engineering
archive than to a SaaS landing page. Large typography creates confidence;
hairline borders, numbered labels and compact monospaced metadata make the work
inspectable. White and near-black establish the identity. Color has a narrow,
semantic purpose: it identifies a trajectory or category.

The experience must communicate that Jean builds complete systems across
software and AI engineering. Projects, internships, university work,
independent practice, courses and academic records remain explicitly grouped.
The interface must never collapse them into an undifferentiated masonry gallery.
Ambition is presented through hierarchy and evidence, not decorative spectacle.

### Visual restrictions

- Preserve the black, white and warm off-white foundation.
- Reserve category colors for rules, labels, active controls and restrained
  interaction feedback.
- Avoid glassmorphism, translucent card stacks, decorative gradients, strong
  glow, 3D effects, emoji iconography and perpetual animation.
- Avoid generic SaaS patterns: pricing cards, testimonial strips, dashboard
  chrome, floating pill navigation and conversion-first hero copy.
- Do not add a dependency or component library solely to reproduce a visual
  reference.
- Never invent experience, technologies, metrics, deployments or project state.

## 2. Color Palette & Roles

### Primary Foundation

- **Editorial Canvas — `#f7f7f4`:** default page background; slightly warm to
  keep long archives comfortable to read.
- **Paper — `#ffffff`:** project cards and high-clarity content surfaces.
- **Engineering Ink — `#0b0c0b`:** primary typography, dark sections and strong
  controls.
- **Soft Ink — `#242624`:** dark hover and expanded-control surface.
- **Inverse Line — `#30322f`:** dividers on dark surfaces.

### Accent & Interactive

- **Internship Signal — `#ff4f2e`:** DecodeLabs, SpotterAI and professional work.
- **University Signal — `#1877f2`:** university products, coursework and
  academic work.
- **AI Engineering Signal — `#8b5cf6`:** AI roadmaps, models, agents and related
  technical work.
- **Software Engineering Signal — `#ffb000`:** software platforms and product
  delivery roadmaps.
- **Independent Signal — `#25a36f`:** independent laboratories and foundations.
- **Keyboard Focus — `#0b5fcc`:** universal high-contrast focus outline; never
  replaced by a category color.

Category color is never the only carrier of meaning. Every colored state must
also include a category name, state label, icon shape or other text.

### Typography & Text Hierarchy

- **Primary text — `#0b0c0b`:** headings and essential information.
- **Secondary text — `#242624`:** dense supporting copy when stronger contrast
  is needed.
- **Muted text — `#5b5e59`:** summaries and metadata on light backgrounds.
- **Dark-surface primary — `#ffffff`:** headings and controls.
- **Dark-surface secondary — white at 68–74%:** supporting copy only; do not use
  below accessible contrast.
- **Structural line — `#d8d9d4`:** card and section borders.
- **Strong line — `#a8aaa4`:** headers and important separations.

### Functional States

- Visible project states are only **COMPLETED** and **PENDING**.
- Completed uses a filled category-colored marker plus explicit text.
- Pending uses an outlined marker plus explicit text.
- Coursework, published courses, academic records, lab collections and
  independent explorations do not receive project-state pills. They use a
  neutral record-type descriptor.
- Featured work uses a restrained gold/editorial label and text, never an
  animated star or glow.

## 3. Typography Rules

### Font Roles

- **Archivo:** display and section headings. Its compressed, assertive
  construction gives the portfolio an engineering-editorial voice.
- **Space Grotesk:** paragraphs, navigation and readable interface copy.
- **JetBrains Mono:** numbers, statuses, metadata, category labels, durations
  and evidence signals.
- **Instrument Serif Italic:** a limited editorial accent inside major display
  headings. Use once per major viewport at most.

### Hierarchy & Weights

- Hero display: `clamp(4rem, 10.6vw, 10.5rem)`, weight 600, line-height 0.9.
- Section title: `clamp(2.8rem, 6vw, 6.5rem)`, weight 600, line-height 0.96.
- Project-group title: `clamp(1.6rem, 2.6vw, 2.75rem)`, weight 600.
- Project-card title: `clamp(1.8rem, 2.9vw, 3rem)`, weight 600.
- Body: 16–20px according to prominence, line-height 1.5–1.6.
- Technical labels: 10–12px, uppercase, monospaced and letter-spaced.

Heading levels must follow document order: one `h1`, section `h2`, group `h3`,
project `h4`. Font sizing never substitutes for semantic hierarchy.

### Spacing Principles

Use a 4px base rhythm with most visible spacing landing on 8, 16, 24 or 32px.
Major section spacing remains fluid between 64 and 120px. Body paragraphs stay
within 32–48rem for readability. Large headings intentionally use short line
lengths of 10–17 characters.

## 4. Component Stylings

### Header & Navigation

- Fixed editorial header with a square `JL` mark.
- Desktop navigation exposes the major trajectories instead of hiding them
  behind a generic archive label.
- Mobile navigation is a full-height, high-contrast drawer with a scrim, focus
  containment, Escape support and 44px minimum targets.
- Active location uses a line or compact marker plus `aria-current`; color is
  supplementary.
- The header must not obscure anchored sections.

### Hero

- The first viewport states Jean's end-to-end product-engineering identity and
  names Software Engineering and AI Engineering explicitly.
- Background geometry may suggest connected domains and system boundaries, but
  must remain monochromatic linework with restrained category signals.
- Provide direct links into the two engineering paths and selected systems.
- Avoid unverified metrics, client logos or employment claims.

### Buttons & Links

- Rectangular, square-corner controls with 1–2px borders.
- Minimum interactive size: 44×44px.
- Primary controls invert black and white; category color appears on hover,
  focus-adjacent feedback or a narrow accent edge.
- Hover transitions last 150–240ms and do not create layout shift.
- Active feedback is shallow translation or shadow compression, not scale.
- Every icon-only control has an accessible label; decorative arrows are hidden
  from assistive technology.

### Project Cards

- Archive projects use full-width editorial rows on wide screens, with a white
  surface, 1px structural rules and a 3px category edge.
- Content order: category/group metadata, title, concise summary, technologies,
  evidence/media signals, status or neutral record type, then case-study action.
- Rows may invert to black on hover/focus-within, but important information and
  actions must remain visible without hover.
- Film availability, evidence and status use explicit text.
- The desktop archive behaves as an indexed technical list rather than a
  generic gallery. Below 1200px metadata recomposes into two row bands; below
  860px each entry becomes a single-column bordered block.

### Category Atlas

- A vertical editorial index, not a card grid.
- Each row names the trajectory, count, collection count and valid project-state
  totals.
- Rows link directly to explicit section anchors.
- On small screens, retain the category name and project count; never rely only
  on the accent color.

### Section Disclosures

- Dark rectangular archive controls with a narrow category edge.
- Expanded state is communicated through `aria-expanded`, copy and icon state.
- Content transitions are short and staged only for newly revealed groups.
- Reduced-motion users receive immediate state changes.

### Statuses & Record Types

- Project pills show only `COMPLETED` or `PENDING`.
- Courses and non-project records use plain neutral labels such as “Coursework
  record”, “Published course”, “Documented collection” or “Independent study”.
- These descriptors must not visually imitate project-state pills.

### Project Dialog & Videos

- Full-screen editorial case study retaining the active category accent.
- Focus moves to Close on open and returns to the triggering control on close.
- Video is 16:9, `controls`, `playsinline` and `preload="metadata"`.
- Project films never autoplay.
- Show a concise loading label until metadata is ready and a persistent,
  actionable fallback when media cannot load.
- Multi-clip projects use accessible chapter buttons with `aria-pressed`.
- Background audio pauses for project films and starts only through its explicit
  control.

## 5. Layout Principles

### Grid & Structure

- Maximum content width: 100rem.
- Fluid page gutter: `clamp(1.5rem, 4.5vw, 4.5rem)`.
- Major headings use asymmetric two-column layouts on desktop.
- Project sections remain independent document regions with their own headings,
  totals, disclosure and grouped cards.
- The page order expresses trajectory: identity, selected systems, category
  map, professional work, university work, AI path, software path, independent
  work, engineering style.

### Whitespace Strategy

Whitespace separates domains and prevents the 100+ record archive from feeling
like a dense catalog. Use borders to establish hierarchy before adding
background surfaces or shadows. Internal card padding is 24–32px.

### Alignment & Visual Balance

Headings and copy are predominantly left aligned. Large headings supply visual
weight; metadata aligns to edges and grid lines. Images and films remain
evidence surfaces rather than decorative backgrounds.

### Responsive Behavior & Touch

- Wide: 1440px reference, complete navigation and three-column project grids.
- Tablet: 768px reference, mobile navigation, one-column sections and cards,
  two-column evidence metrics.
- Mobile: 390px reference, one-column flow, full-width actions, 44px targets,
  no horizontal overflow and compact media metadata.
- Breakpoints currently center on 1200px, 860px and 560px.
- Use `100svh` where full-height mobile regions are required.

### Accessibility

- Preserve the skip link, semantic landmarks and sequential headings.
- All interaction must work by keyboard and touch.
- Use `:focus-visible` with a 2px focus outline and 4px offset.
- Preserve focus containment in the mobile menu and native dialog behavior.
- Respect `prefers-reduced-motion`; disable smooth scrolling, reveal motion and
  decorative pointer movement.
- Maintain WCAG AA contrast for body text and controls.
- Provide alt text for evidence images and an accessible name for every film.

## 6. Design System Notes for Stitch Generation

### Language to Use

Use: editorial engineering archive, monochromatic technical portfolio,
high-contrast publication grid, numbered system index, restrained category
signals, evidence-first case studies, square geometry, precise monospaced
metadata, generous negative space.

Avoid: SaaS landing page, startup dashboard, glass cards, neon AI gradient,
floating pills, 3D illustration, bento gallery, playful emoji, endless carousel,
animated background noise.

### Color References

Build the page in Editorial Canvas, Paper and Engineering Ink. Apply one
category signal at a time: orange for internships, blue for university, violet
for AI engineering, amber for software engineering and green for independent
practice.

### Component Prompts

1. “Create an editorial engineering-path index with five full-width rows,
   square corners, hairline rules, oversized category names, monospaced counts
   and one restrained semantic accent per row.”
2. “Create a technical project card with a three-pixel category rule, concise
   evidence-first summary, technology tags, explicit COMPLETED or PENDING state,
   film availability and a rectangular case-study action.”
3. “Create a full-screen project case study with a large Archivo title,
   JetBrains Mono section index, a 16:9 controlled product film, architecture
   evidence and a prominent rectangular GitHub link.”

### Incremental Iteration

Refine hierarchy and accessibility before introducing motion. Reuse the current
HTML, CSS layers and JavaScript render functions. Do not convert the project to
React, Tailwind or a component library. Do not upload the portfolio to Stitch
unless the user explicitly requests it.
