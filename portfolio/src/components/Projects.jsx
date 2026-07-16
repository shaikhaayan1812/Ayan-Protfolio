import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { getProjectCategory, getProjectPath } from '../data/projectMeta';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const filters = ['All', 'Immersive', 'Media', 'Product', 'Web'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const headingRef = useScrollAnimation();
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((project) => getProjectCategory(project) === filter);
  const featuredProjects = filteredProjects.slice(0, 3);
  const archiveProjects = filteredProjects.slice(3);

  return (
    <section id="projects" className="section section-shell projects-section">
      <div className="container">
        <header ref={headingRef} className="section-heading animate-on-scroll">
          <p className="section-index">02 / Work</p>
          <h2 className="display-title">Built to be <span className="cyan-text">used.</span></h2>
          <p className="section-copy">
            A growing archive of interactive 3D experiments, focused web experiences,
            and practical digital products.
          </p>
        </header>

        <div className="project-filter-bar" aria-label="Filter projects by category">
          <span className="filter-label">Explore by</span>
          <div className="project-filters">
            {filters.map((category) => (
              <button
                key={category}
                type="button"
                className={`project-filter${filter === category ? ' is-active' : ''}`}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <span className="project-count">{String(filteredProjects.length).padStart(2, '0')} projects</span>
        </div>

        <div className={`featured-work${featuredProjects.length === 1 ? ' is-single' : ''}`}>
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {archiveProjects.length > 0 && (
          <div className="project-archive">
            <div className="archive-heading">
              <span>More from the lab</span>
              <span>Click a project to explore</span>
            </div>
            {archiveProjects.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        .projects-section { overflow: hidden; }

        .project-filter-bar {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 24px;
          align-items: center;
          margin-bottom: 32px;
          padding-block: 16px;
          border-block: 1px solid var(--line);
        }

        .filter-label,
        .project-count {
          color: var(--muted);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .project-filters { display: flex; flex-wrap: wrap; gap: 8px; }

        .project-filter {
          padding: 7px 14px;
          border: 1px solid transparent;
          border-radius: 99px;
          color: var(--muted);
          background: transparent;
          font-size: 0.74rem;
          font-weight: 700;
          cursor: pointer;
          transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .project-filter:hover { color: var(--paper); border-color: var(--line-strong); }
        .project-filter.is-active { color: var(--ink); background: var(--acid); }

        .featured-work {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.65fr);
          grid-template-rows: repeat(2, minmax(280px, 1fr));
          gap: 16px;
        }

        .featured-work.is-single { grid-template-columns: 1fr; grid-template-rows: minmax(440px, 1fr); }

        .featured-project {
          position: relative;
          min-height: 280px;
          overflow: hidden;
          isolation: isolate;
          border: 1px solid color-mix(in srgb, var(--project-color) 45%, var(--line));
          background: var(--panel);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease;
        }

        .featured-project:first-child { grid-row: 1 / 3; min-height: 576px; }
        .featured-work.is-single .featured-project:first-child { min-height: 440px; }

        .featured-project::before {
          content: '';
          position: absolute;
          width: 420px;
          aspect-ratio: 1;
          right: -130px;
          bottom: -200px;
          z-index: -2;
          border-radius: 50%;
          background: var(--project-color);
          opacity: 0.2;
          filter: blur(20px);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
        }

        .featured-project::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            repeating-linear-gradient(120deg, transparent 0 28px, rgba(255,255,255,0.025) 28px 29px),
            linear-gradient(145deg, color-mix(in srgb, var(--project-color) 10%, transparent), transparent 58%);
        }

        .featured-project:hover { transform: translateY(-6px); border-color: var(--project-color); }
        .featured-project:hover::before { transform: scale(1.16) translate(-24px, -18px); opacity: 0.32; }

        .featured-project-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: clamp(24px, 4vw, 48px);
        }

        .featured-meta {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          color: var(--muted);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .featured-number {
          position: absolute;
          right: 18px;
          bottom: -0.23em;
          z-index: -1;
          color: color-mix(in srgb, var(--project-color) 18%, transparent);
          font-family: var(--display);
          font-size: clamp(9rem, 20vw, 19rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.12em;
          pointer-events: none;
        }

        .featured-content { max-width: 650px; margin-top: auto; }

        .featured-title {
          max-width: 670px;
          margin-bottom: 16px;
          font-family: var(--display);
          font-size: clamp(2rem, 4vw, 4.5rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .featured-project:not(:first-child) .featured-title { font-size: clamp(1.75rem, 3vw, 2.7rem); }

        .featured-description {
          max-width: 590px;
          margin-bottom: 26px;
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.75;
        }

        .featured-project:not(:first-child) .featured-description {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        .project-actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }

        .project-text-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding-block: 10px;
          color: var(--paper);
          border-bottom: 1px solid var(--project-color);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .project-demo {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          color: var(--ink);
          background: var(--project-color);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .project-archive { margin-top: clamp(72px, 10vw, 120px); border-top: 1px solid var(--line-strong); }

        .archive-heading {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 0 26px;
          color: var(--muted);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .project-row {
          display: grid;
          grid-template-columns: 70px minmax(220px, 0.8fr) minmax(260px, 1.2fr) auto;
          gap: 24px;
          align-items: center;
          min-height: 132px;
          padding-block: 24px;
          border-top: 1px solid var(--line);
          transition: padding 0.3s ease, background 0.3s ease;
        }

        .project-row:hover {
          padding-inline: 18px;
          background: linear-gradient(90deg, color-mix(in srgb, var(--project-color) 9%, transparent), transparent 74%);
        }

        .row-number { color: var(--project-color); font-family: var(--display); font-size: 0.86rem; font-weight: 800; }

        .row-title {
          font-family: var(--display);
          font-size: clamp(1.25rem, 2vw, 1.85rem);
          line-height: 1.08;
          letter-spacing: -0.035em;
          transition: color 0.25s ease;
        }

        .row-title:hover { color: var(--project-color); }
        .row-description { color: var(--muted); font-size: 0.82rem; line-height: 1.65; }
        .row-side { display: flex; align-items: center; gap: 22px; }
        .row-category { color: var(--muted); font-size: 0.65rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; }
        .row-demo { color: var(--paper); font-size: 1.2rem; transition: color 0.25s ease, transform 0.25s ease; }
        .row-demo:hover { color: var(--project-color); transform: translate(3px, -3px); }

        @media (max-width: 900px) {
          .featured-work { grid-template-columns: 1fr 1fr; grid-template-rows: minmax(420px, auto) minmax(300px, auto); }
          .featured-project:first-child { grid-column: 1 / 3; grid-row: auto; min-height: 420px; }
          .project-row { grid-template-columns: 52px minmax(180px, 0.8fr) minmax(220px, 1.2fr) auto; gap: 16px; }
          .row-side { gap: 12px; }
        }

        @media (max-width: 700px) {
          .project-filter-bar { grid-template-columns: 1fr auto; }
          .filter-label { display: none; }
          .project-filters { gap: 4px; }
          .project-filter { padding-inline: 10px; }
          .featured-work, .featured-work.is-single { display: flex; flex-direction: column; }
          .featured-project, .featured-project:first-child, .featured-work.is-single .featured-project:first-child { min-height: 390px; }
          .featured-number { font-size: 10rem; }
          .archive-heading span:last-child { display: none; }
          .project-row { grid-template-columns: 36px 1fr auto; min-height: 110px; }
          .row-description { display: none; }
          .row-category { display: none; }
        }

        @media (max-width: 460px) {
          .project-filter-bar { grid-template-columns: 1fr; }
          .project-count { order: -1; }
          .featured-project, .featured-project:first-child, .featured-work.is-single .featured-project:first-child { min-height: 430px; }
          .featured-description { font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
}

function FeaturedProject({ project, index }) {
  const ref = useScrollAnimation();
  const path = getProjectPath(project);

  return (
    <article
      ref={ref}
      className="featured-project animate-on-scroll"
      style={{ '--project-color': project.color, transitionDelay: `${index * 0.08}s` }}
    >
      <span className="featured-number" aria-hidden="true">{String(project.id).padStart(2, '0')}</span>
      <div className="featured-project-inner">
        <div className="featured-meta">
          <span>{getProjectCategory(project)}</span>
          <span>{project.tech.slice(0, 2).join(' · ')}</span>
        </div>
        <div className="featured-content">
          <h3 className="featured-title">{project.title}</h3>
          <p className="featured-description">{project.description}</p>
          <div className="project-actions">
            <Link to={`/project/${project.id}`} className="project-text-link">
              Case view <span aria-hidden="true">→</span>
            </Link>
            <a href={path} target="_blank" rel="noopener noreferrer" className="project-demo">
              Live demo <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectRow({ project, index }) {
  const ref = useScrollAnimation();
  const path = getProjectPath(project);

  return (
    <article
      ref={ref}
      className="project-row animate-on-scroll"
      style={{ '--project-color': project.color, transitionDelay: `${Math.min(index, 5) * 0.04}s` }}
    >
      <span className="row-number">{String(project.id).padStart(2, '0')}</span>
      <h3 className="row-title"><Link to={`/project/${project.id}`}>{project.title}</Link></h3>
      <p className="row-description">{project.description}</p>
      <div className="row-side">
        <span className="row-category">{getProjectCategory(project)}</span>
        <a href={path} target="_blank" rel="noopener noreferrer" className="row-demo" aria-label={`Open ${project.title} live demo`}>
          ↗
        </a>
      </div>
    </article>
  );
}
