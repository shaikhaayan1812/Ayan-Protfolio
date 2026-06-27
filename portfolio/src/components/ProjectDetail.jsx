import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const relPath = `../${project?.folder}`;

  if (!project) {
    return (
      <div className="section" style={{ textAlign: 'center', paddingTop: '120px' }}>
        <h2>Project not found</h2>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    );
  }

  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <Link to="/" className="back-link">← Back to Projects</Link>

        <div style={{ marginTop: '24px' }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>{project.title}</h2>
          <p className="section-subtitle" style={{ textAlign: 'left' }}>{project.description}</p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px', marginBottom: '32px' }}>
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>

        <div style={{
          width: '100%',
          height: '80vh',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          overflow: 'hidden',
          background: '#fff',
        }}>
          <iframe
            src={relPath}
            title={project.title}
            style={{ width: '100%', height: '100%', border: 'none' }}
            loading="lazy"
          />
        </div>
      </div>

      <style>{`
        .back-link {
          color: var(--accent-2);
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.3s;
          display: inline-block;
        }
        .back-link:hover {
          opacity: 0.8;
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
    </section>
  );
}
