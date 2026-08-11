(() => {
  const script = document.currentScript;
  if (!script || document.querySelector('.ayan-showcase')) return;

  const projects = [
    { id: 'p01', folder: '3D/1', path: '3D/1/', title: 'Skull Lab', type: '3D / WebGL', accent: '#c7ff3d', accent2: '#59e7ff' },
    { id: 'p02', folder: '3D/2', path: '3D/2/', title: 'PBR Studio', type: '3D / Materials', accent: '#4fffd2', accent2: '#ffcf5a' },
    { id: 'p03', folder: 'Game', path: 'Game/', title: 'Flight Protocol', type: 'Interactive game', accent: '#ff5c7a', accent2: '#63e6ff' },
    { id: 'p04', folder: 'Task_1', path: 'Task_1/', title: 'Tandoori Nights', type: 'Restaurant', accent: '#ff7a3d', accent2: '#ffd166' },
    { id: 'p05', folder: 'Task_2', path: 'Task_2/', title: 'Top College', type: 'Education', accent: '#4da3ff', accent2: '#7bf1a8' },
    { id: 'p06', folder: 'Task_3', path: 'Task_3/', title: 'Iron Forge', type: 'Fitness', accent: '#ff3b30', accent2: '#ffbe0b' },
    { id: 'p07', folder: 'Task_4', path: 'Task_4/', title: 'CityCare', type: 'Healthcare', accent: '#18c7a7', accent2: '#68e0ff' },
    { id: 'p08', folder: 'Task_5', path: 'Task_5/', title: 'VoyageVista', type: 'Travel', accent: '#ffbd59', accent2: '#63e6ff' },
    { id: 'p09', folder: 'Task_6', path: 'Task_6/', title: 'Music Library', type: 'Audio / Media', accent: '#c86bfa', accent2: '#ff4d8d' },
    { id: 'p10', folder: 'Task_7', path: 'Task_7/', title: 'Interstellar', type: 'Cinema portal', accent: '#6c7cff', accent2: '#ffbf69' },
    { id: 'p11', folder: 'Task_8', path: 'Task_8/', title: 'Student OS', type: 'Dashboard', accent: '#45c4ff', accent2: '#8dff70' },
    { id: 'p12', folder: 'Task_9', path: 'Task_9/', title: 'Compare Lab', type: 'Product tool', accent: '#ff6b35', accent2: '#ffd166' },
    { id: 'p13', folder: 'Task_10', path: 'Task_10/', title: 'TechFest 2026', type: 'Event', accent: '#7c5cff', accent2: '#41ead4' },
    { id: 'p14', folder: 'Task_11', path: 'Task_11/', title: 'Nirav School', type: 'Education', accent: '#ffd43b', accent2: '#5eead4' },
    { id: 'p15', folder: 'Task_12', path: 'Task_12/', title: 'Answer Deck', type: 'Help center', accent: '#ff4d6d', accent2: '#5aa9ff' },
    { id: 'p16', folder: 'Task_13', path: 'Task_13/', title: 'Daily Signal', type: 'Newsroom', accent: '#ff8a3d', accent2: '#ffe66d' },
    { id: 'p17', folder: 'Task_14', path: 'Task_14/', title: 'FoodieHub', type: 'Food ordering', accent: '#ff584d', accent2: '#ffbd59' },
    { id: 'p18', folder: 'Task_15', path: 'Task_15/', title: 'SkillUp', type: 'Learning', accent: '#6d5dfc', accent2: '#6ef3c5' },
  ];

  const scriptUrl = new URL(script.src);
  const repoRoot = new URL('../', scriptUrl);
  const currentPath = decodeURIComponent(window.location.pathname).replace(/\\/g, '/');
  const currentIndex = projects.findIndex((project) => currentPath.includes(`/${project.folder}/`));
  const index = currentIndex >= 0 ? currentIndex : 0;
  const current = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const resolve = (path) => new URL(path, repoRoot).href;
  const pad = (number) => String(number).padStart(2, '0');

  document.body.dataset.ayanProject = current.id;
  document.documentElement.style.setProperty('--ayan-accent', current.accent);
  document.documentElement.style.setProperty('--ayan-accent-2', current.accent2);
  if (!document.title.includes('Ayan Lab')) document.title = `${document.title} — Ayan Lab`;

  let themeColor = document.querySelector('meta[name="theme-color"]');
  if (!themeColor) {
    themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    document.head.appendChild(themeColor);
  }
  themeColor.content = '#060914';

  const projectLinks = projects.map((project, projectIndex) => `
    <a class="ayan-drawer-card${projectIndex === index ? ' is-current' : ''}" href="${resolve(project.path)}" style="--card-accent:${project.accent}">
      <span>${pad(projectIndex + 1)}</span>
      <strong>${project.title}</strong>
      <small>${project.type}</small>
      <i aria-hidden="true">↗</i>
    </a>
  `).join('');

  document.body.insertAdjacentHTML('beforeend', `
    <div class="ayan-scroll-progress" aria-hidden="true"><span></span></div>
    <div class="ayan-pointer-glow" aria-hidden="true"></div>
    <div class="ayan-noise" aria-hidden="true"></div>

    <aside class="ayan-showcase" aria-label="Portfolio project navigation">
      <a class="ayan-showcase-home" href="https://ayan-shaikh-portfolio.ayan-shaikh-018.chatgpt.site" target="_top" aria-label="Return to Ayan Shaikh portfolio">
        <b>AS</b><span>Portfolio</span>
      </a>
      <button class="ayan-project-index" type="button" aria-expanded="false" aria-controls="ayan-project-drawer">
        <span>${pad(index + 1)} / ${pad(projects.length)}</span>
        <strong>${current.title}</strong>
        <i aria-hidden="true">⌘</i>
      </button>
      <div class="ayan-project-arrows">
        <a href="${resolve(previous.path)}" aria-label="Previous project: ${previous.title}">←</a>
        <a href="${resolve(next.path)}" aria-label="Next project: ${next.title}">→</a>
      </div>
    </aside>

    <div class="ayan-project-drawer" id="ayan-project-drawer" aria-hidden="true">
      <div class="ayan-drawer-backdrop" data-close-drawer></div>
      <div class="ayan-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="ayan-drawer-title">
        <div class="ayan-drawer-head">
          <div>
            <span>Project universe</span>
            <h2 id="ayan-drawer-title">Explore all builds.</h2>
          </div>
          <button type="button" data-close-drawer aria-label="Close project navigation">×</button>
        </div>
        <div class="ayan-drawer-grid">${projectLinks}</div>
        <div class="ayan-drawer-foot">
          <span>18 experiments / one growing portfolio</span>
          <a href="https://ayan-shaikh-portfolio.ayan-shaikh-018.chatgpt.site" target="_top" aria-label="Return to portfolio">Main portfolio ↗</a>
        </div>
      </div>
    </div>
  `);

  const drawer = document.querySelector('.ayan-project-drawer');
  const indexButton = document.querySelector('.ayan-project-index');
  const closeButtons = drawer.querySelectorAll('[data-close-drawer]');
  const pointerGlow = document.querySelector('.ayan-pointer-glow');
  const progress = document.querySelector('.ayan-scroll-progress span');
  let previousOverflow = '';

  const setDrawer = (open) => {
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    indexButton.setAttribute('aria-expanded', String(open));
    if (open) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      drawer.querySelector('[data-close-drawer]:not(.ayan-drawer-backdrop)')?.focus();
    } else {
      document.body.style.overflow = previousOverflow;
      indexButton.focus();
    }
  };

  indexButton.addEventListener('click', () => setDrawer(!drawer.classList.contains('is-open')));
  closeButtons.forEach((button) => button.addEventListener('click', () => setDrawer(false)));

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer.classList.contains('is-open')) setDrawer(false);
    if (event.altKey && event.key === 'ArrowLeft') window.location.href = resolve(previous.path);
    if (event.altKey && event.key === 'ArrowRight') window.location.href = resolve(next.path);
  });

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 100;
    progress.style.transform = `scaleX(${percent / 100})`;
  };

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', (event) => {
      pointerGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    }, { passive: true });
  }
})();
