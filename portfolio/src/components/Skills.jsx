import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap 5'],
    color: '#6c63ff',
  },
  {
    title: '3D & Graphics',
    skills: ['Three.js', 'WebGL', 'OBJLoader', 'PBR Materials', '3D Animation'],
    color: '#00d4aa',
  },
  {
    title: 'Design',
    skills: ['UI/UX', 'Responsive Design', 'CSS Animation', 'Typography', 'Color Theory'],
    color: '#ff6b9d',
  },
  {
    title: 'Tools',
    skills: ['VS Code', 'Git', 'Vite', 'npm', 'Chrome DevTools'],
    color: '#ff9f43',
  },
];

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={ref} className="animate-on-scroll">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="skill-category animate-scale"
              style={{ transitionDelay: `${i * 0.15}s`, '--cat-color': cat.color }}
            >
              <h3 className="skill-cat-title">{cat.title}</h3>
              <div className="skill-items">
                {cat.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${85 + Math.random() * 15}%`,
                          background: `var(--cat-color, var(--accent-gradient))`,
                        }}
                      ></div>
                    </div>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .skill-category {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.4s ease;
        }

        .skill-category:hover {
          border-color: var(--cat-color, var(--accent-1));
          box-shadow: 0 12px 40px rgba(108, 99, 255, 0.1);
          transform: translateY(-4px);
        }

        .skill-cat-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--cat-color, var(--accent-1));
        }

        .skill-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .skill-bar-bg {
          flex: 1;
          height: 8px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-category.animate-scale.visible .skill-bar-fill {
          animation: skillFill 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes skillFill {
          from { width: 0 !important; }
        }

        .skill-name {
          font-size: 0.9rem;
          color: var(--text-secondary);
          min-width: 100px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
