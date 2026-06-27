import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const ref = useScrollAnimation();

  const categories = [
    'all',
    ...new Set(projects.map((p) => p.tech[0])),
  ];

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <div ref={ref} className="animate-on-scroll">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A collection of 18 projects showcasing my skills in web development, 3D graphics, and interactive design
          </p>
        </div>

        <div className="project-filters animate-on-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${filter === cat ? ' active' : ''}`}
              onClick={() => setFilter(cat)}
            >
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
          gap: 12px;
          justify-content: center;
          margin-bottom: 48px;
        }

        .filter-btn {
          padding: 10px 24px;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 50px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }

        .filter-btn:hover {
          border-color: var(--accent-1);
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: var(--accent-gradient);
          border-color: transparent;
          color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useScrollAnimation();
  const relPath = `../${project.folder}`;

  return (
    <Link to={`/project/${project.id}`} className="project-card-link">
      <div ref={cardRef} className="project-card animate-scale" style={{ transitionDelay: `${(index % 6) * 0.1}s` }}>
        <div className="project-card-top" style={{ '--card-color': project.color }}>
          <div className="project-folder-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div className="project-links" onClick={(e) => e.stopPropagation()}>
            <a href={relPath} target="_blank" className="project-link" title="Open project">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>

      <style>{`
        .project-card-link {
          text-decoration: none;
          display: block;
        }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--card-color, var(--accent-1));
          box-shadow: 0 12px 40px rgba(108, 99, 255, 0.12);
        }

        .project-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .project-folder-icon {
          color: var(--card-color, var(--accent-1));
        }

        .project-links {
          display: flex;
          gap: 12px;
        }

        .project-link {
          color: var(--text-secondary);
          transition: color 0.3s, transform 0.3s;
        }

        .project-link:hover {
          color: var(--card-color, var(--accent-1));
          transform: translateY(-2px);
        }

        .project-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.7;
          flex-grow: 1;
          margin-bottom: 20px;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          padding: 4px 12px;
          background: rgba(108, 99, 255, 0.1);
          border: 1px solid rgba(108, 99, 255, 0.15);
          border-radius: 50px;
          font-size: 0.75rem;
          color: var(--accent-2);
          font-weight: 500;
        }
      `}</style>
    </Link>
  );
}
