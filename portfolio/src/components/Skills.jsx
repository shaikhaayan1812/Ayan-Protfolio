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
          background: var(--glass-bg);
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          padding: 28px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .skill-cat::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--cat-clr, var(--accent-1)), transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .skill-cat:hover {
          border-color: rgba(255,255,255,0.08);
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
        .skill-cat:hover::before { opacity: 1; }
        .sc-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--cat-clr, var(--accent-1));
          position: relative;
          z-index: 1;
        }
        .sc-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          position: relative;
          z-index: 1;
        }
        .sc-tag {
          padding: 7px 18px;
          background: rgba(88, 166, 255, 0.06);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: all 0.3s;
          cursor: default;
        }
        .sc-tag:hover {
          border-color: var(--cat-clr, var(--accent-1));
          color: var(--text-primary);
          background: rgba(88, 166, 255, 0.1);
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
