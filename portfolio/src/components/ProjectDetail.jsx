import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { getProjectCategory, getProjectPath } from '../data/projectMeta';

function scrollToProjects() {
  window.setTimeout(() => {
    const projectSection = document.getElementById('projects');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    projectSection?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  }, 0);
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  }, [id]);

  if (!project) {
    return (
      <section className="missing-project">
        <p>404 / Project not found</p>
        <h1>This experiment escaped the lab.</h1>
        <Link to="/" onClick={scrollToProjects} className="button-primary">Return to projects <span aria-hidden="true">→</span></Link>
      </section>
    );
  }

  const path = getProjectPath(project);
  const projectNumber = String(project.id).padStart(2, '0');

  return (
    <section className="project-detail" style={{ '--project-color': project.color }}>
      <div className="project-detail-glow" aria-hidden="true" />
      <div className="container detail-shell">
        <Link to="/" onClick={scrollToProjects} className="detail-back"><span aria-hidden="true">←</span> Project index</Link>

        <header className="detail-hero">
          <div className="detail-title-wrap">
            <div className="detail-meta">
              <span>{projectNumber} / {getProjectCategory(project)}</span>
              <span>Interactive build</span>
            </div>
            <h1>{project.title}</h1>
          </div>

          <aside className="detail-summary">
            <p>{project.description}</p>
            <div className="detail-tech" aria-label="Technologies used">
              {project.tech.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            <a href={path} target="_blank" rel="noopener noreferrer" className="button-primary">
              Open live project <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </header>

        <div className="browser-frame">
          <div className="browser-toolbar">
            <div className="browser-dots" aria-hidden="true"><span /><span /><span /></div>
            <div className="browser-address"><span aria-hidden="true">◉</span> ayan.dev/lab/{project.folder.toLowerCase().replace('/', '-')}</div>
            <a href={path} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} in a new tab`}>↗</a>
          </div>
          <div className="browser-canvas">
            <iframe
              src={path}
              title={`${project.title} live preview`}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        <div className="detail-footer">
          <span>Built by Ayan Shaikh</span>
          <Link to="/" onClick={scrollToProjects}>Explore all {projects.length} projects <span aria-hidden="true">→</span></Link>
        </div>
      </div>

      <style>{`
        .project-detail {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 148px 0 80px;
        }

        .project-detail-glow {
          position: absolute;
          width: min(70vw, 900px);
          aspect-ratio: 1;
          right: -28vw;
          top: -26vw;
          z-index: -1;
          border-radius: 50%;
          background: var(--project-color);
          opacity: 0.12;
          filter: blur(90px);
        }

        .detail-back {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--muted);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.25s ease, gap 0.25s ease;
        }

        .detail-back:hover { gap: 17px; color: var(--project-color); }

        .detail-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(320px, 0.55fr);
          gap: clamp(48px, 9vw, 130px);
          align-items: end;
          padding: clamp(58px, 8vw, 100px) 0 clamp(66px, 9vw, 110px);
        }

        .detail-meta {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--line-strong);
          color: var(--project-color);
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .detail-title-wrap h1 {
          max-width: 900px;
          margin-top: 30px;
          font-family: var(--display);
          font-size: clamp(3.5rem, 8vw, 8.7rem);
          font-weight: 800;
          line-height: 0.85;
          letter-spacing: -0.08em;
        }

        .detail-summary { padding-left: 28px; border-left: 2px solid var(--project-color); }
        .detail-summary > p { color: var(--muted); font-size: 0.9rem; line-height: 1.85; }
        .detail-tech { display: flex; flex-wrap: wrap; gap: 7px; margin: 28px 0 34px; }

        .detail-tech span {
          padding: 5px 10px;
          border: 1px solid var(--line);
          border-radius: 99px;
          color: var(--paper);
          font-size: 0.65rem;
          font-weight: 700;
        }

        .detail-summary .button-primary { background: var(--project-color); box-shadow: 7px 7px 0 color-mix(in srgb, var(--project-color) 30%, transparent); }

        .browser-frame {
          overflow: hidden;
          border: 1px solid var(--line-strong);
          background: #090d18;
          box-shadow: 24px 26px 0 color-mix(in srgb, var(--project-color) 12%, transparent);
        }

        .browser-toolbar {
          display: grid;
          grid-template-columns: 100px minmax(0, 1fr) 100px;
          align-items: center;
          min-height: 58px;
          padding: 0 20px;
          border-bottom: 1px solid var(--line);
        }

        .browser-dots { display: flex; gap: 7px; }
        .browser-dots span { width: 10px; height: 10px; border-radius: 50%; background: var(--coral); }
        .browser-dots span:nth-child(2) { background: #ffc857; }
        .browser-dots span:nth-child(3) { background: var(--acid); }

        .browser-address {
          justify-self: center;
          width: min(100%, 520px);
          overflow: hidden;
          padding: 8px 16px;
          border: 1px solid var(--line);
          color: var(--muted);
          background: rgba(255, 255, 255, 0.025);
          font-size: 0.66rem;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .browser-address span { margin-right: 7px; color: var(--project-color); }
        .browser-toolbar > a { justify-self: end; color: var(--muted); font-size: 1.2rem; transition: color 0.25s ease; }
        .browser-toolbar > a:hover { color: var(--project-color); }

        .browser-canvas { height: min(78vh, 840px); min-height: 560px; background: white; }
        .browser-canvas iframe { display: block; width: 100%; height: 100%; border: 0; background: white; }

        .detail-footer {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          padding-top: 44px;
          color: var(--muted);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .detail-footer a { color: var(--paper); }
        .detail-footer a:hover { color: var(--project-color); }

        .missing-project {
          display: grid;
          place-content: center;
          justify-items: start;
          min-height: 100vh;
          width: min(900px, calc(100% - 40px));
          margin: auto;
        }

        .missing-project p { color: var(--acid); font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; }
        .missing-project h1 { max-width: 820px; margin: 24px 0 42px; font-family: var(--display); font-size: clamp(3rem, 8vw, 7rem); line-height: 0.9; letter-spacing: -0.07em; }

        @media (max-width: 940px) {
          .detail-hero { grid-template-columns: 1fr; }
          .detail-summary { max-width: 650px; }
          .browser-canvas { min-height: 520px; }
        }

        @media (max-width: 620px) {
          .project-detail { padding-top: 118px; }
          .detail-meta span:last-child { display: none; }
          .detail-title-wrap h1 { font-size: clamp(3.15rem, 15vw, 5.7rem); }
          .detail-summary { padding-left: 18px; }
          .browser-frame { margin-inline: -16px; box-shadow: none; }
          .browser-toolbar { grid-template-columns: 62px 1fr 32px; padding-inline: 12px; }
          .browser-canvas { min-height: 540px; height: 75vh; }
          .detail-footer { align-items: flex-start; flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
