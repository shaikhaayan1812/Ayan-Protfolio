import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  { title: 'Backend', skills: ['Python', 'Django', 'REST APIs', 'SQL'], color: '#58a6ff' },
  { title: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap 5'], color: '#3fb950' },
  { title: '3D & Graphics', skills: ['Three.js', 'WebGL', 'OBJLoader', 'PBR Materials', '3D Animation'], color: '#f0883e' },
  { title: 'Tools & Skills', skills: ['VS Code', 'Git', 'Vite', 'Communication', 'Negotiation'], color: '#bc8cff' },
];

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={ref} className="animate-on-scroll">
          <h2 className="section-title"><span>Skills & Technologies</span></h2>
          <p className="section-subtitle">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={cat.title} className="skill-cat" style={{ transitionDelay: `${i * 0.1}s`, '--cat-clr': cat.color }}>
              <h3 className="sc-title">{cat.title}</h3>
              <div className="sc-skills">
                {cat.skills.map((skill) => (
                  <span key={skill} className="sc-tag">{skill}</span>
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
          gap: 20px;
        }
        .skill-cat {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 28px;
          transition: all 0.3s;
        }
        .skill-cat:hover {
          border-color: var(--cat-clr, var(--accent-1));
          transform: translateY(-4px);
        }
        .sc-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--cat-clr, var(--accent-1));
        }
        .sc-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .sc-tag {
          padding: 6px 16px;
          background: rgba(88, 166, 255, 0.06);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: all 0.3s;
        }
        .sc-tag:hover {
          border-color: var(--cat-clr, var(--accent-1));
          color: var(--text-primary);
        }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
