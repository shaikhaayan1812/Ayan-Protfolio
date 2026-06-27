import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const ref = useScrollAnimation();

  const categories = ['all', ...new Set(projects.map((p) => p.tech[0]))];
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <div ref={ref} className="animate-on-scroll">
          <h2 className="section-title"><span>My Projects</span></h2>
          <p className="section-subtitle">18+ projects in web development, 3D graphics, and interactive design</p>
        </div>

        <div className="project-filters">
          {categories.map((cat) => (
            <button key={cat} className={`filter-btn${filter === cat ? ' active' : ''}`} onClick={() => setFilter(cat)}>
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .project-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 36px;
        }
        .filter-btn {
          padding: 8px 20px;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }
        .filter-btn:hover {
          border-color: var(--accent-1);
          color: var(--text-primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(88, 166, 255, 0.1);
        }
        .filter-btn.active {
          background: linear-gradient(135deg, var(--accent-1), #4c96e8);
          border-color: transparent;
          color: white;
          box-shadow: 0 4px 16px rgba(88, 166, 255, 0.3);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useScrollAnimation();
  const relPath = `../${project.folder}`;

  return (
    <Link to={`/project/${project.id}`} className="card-link">
      <div ref={cardRef} className="project-card" style={{ transitionDelay: `${(index % 6) * 0.08}s` }}>
        <div className="p-card-top" style={{ '--card-clr': project.color }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="1.5">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
          <a href={relPath} target="_blank" className="p-ext-link" onClick={(e) => e.stopPropagation()} title="Open project">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
        <h3 className="p-title">{project.title}</h3>
        <p className="p-desc">{project.description}</p>
        <div className="p-tech">
          {project.tech.map((t) => <span key={t} className="p-tag">{t}</span>)}
        </div>
      </div>

      <style>{`
        .card-link { text-decoration: none; display: block; }
        .project-card {
          background: var(--glass-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          padding: 24px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--card-clr, var(--accent-1)), transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(var(--card-clr, 88, 166, 255), 0.3);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
        .project-card:hover::before { opacity: 1; }
        .p-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .p-ext-link {
          color: var(--text-secondary);
          transition: all 0.3s;
          padding: 4px;
          border-radius: 6px;
        }
        .p-ext-link:hover {
          color: var(--card-clr, var(--accent-1));
          background: rgba(255,255,255,0.03);
        }
        .p-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--text-primary);
        }
        .p-desc {
          color: var(--text-secondary);
          font-size: 0.85rem;
          line-height: 1.6;
          flex-grow: 1;
          margin-bottom: 16px;
        }
        .p-tech { display: flex; flex-wrap: wrap; gap: 6px; }
        .p-tag {
          padding: 3px 10px;
          background: rgba(88, 166, 255, 0.08);
          border: 1px solid rgba(88, 166, 255, 0.12);
          border-radius: 4px;
          font-size: 0.7rem;
          color: var(--accent-1);
          transition: all 0.3s;
        }
        .p-tag:hover {
          background: rgba(88, 166, 255, 0.15);
          transform: translateY(-1px);
        }
      `}</style>
    </Link>
  );
}
