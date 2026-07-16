import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Backend systems',
    label: 'Logic & data',
    skills: ['Python', 'Django', 'REST APIs', 'SQL'],
    color: 'var(--cyan)',
    symbol: '{ }',
  },
  {
    title: 'Frontend craft',
    label: 'Interface & motion',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap 5'],
    color: 'var(--acid)',
    symbol: '</>',
  },
  {
    title: '3D experiences',
    label: 'Depth & interaction',
    skills: ['Three.js', 'WebGL', 'OBJLoader', 'PBR Materials', '3D Animation'],
    color: 'var(--coral)',
    symbol: '◇',
  },
  {
    title: 'Workflow & people',
    label: 'Tools & collaboration',
    skills: ['VS Code', 'Git', 'Vite', 'Communication', 'Negotiation'],
    color: 'var(--violet)',
    symbol: '→',
  },
];

export default function Skills() {
  const introRef = useScrollAnimation();

  return (
    <section id="skills" className="section section-shell skills-section">
      <div className="container skills-layout">
        <div ref={introRef} className="skills-intro animate-on-scroll">
          <p className="section-index">03 / Stack</p>
          <h2 className="skills-title">My digital<br /><span>toolbox.</span></h2>
          <p className="skills-copy">
            From clean interface code to real-time 3D scenes—I choose the right tool,
            then push it far enough to make the result feel alive.
          </p>
          <div className="skills-signal" aria-label="Always learning">
            <span className="signal-dot" aria-hidden="true" />
            Always learning / always shipping
          </div>
        </div>

        <div className="skill-lanes">
          {skillCategories.map((category, index) => (
            <SkillLane key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background:
            linear-gradient(90deg, transparent 49.95%, var(--line) 50%, transparent 50.05%),
            radial-gradient(circle at 16% 40%, rgba(155, 124, 255, 0.08), transparent 25%);
        }

        .skills-layout {
          display: grid;
          grid-template-columns: minmax(320px, 0.78fr) minmax(440px, 1.22fr);
          gap: clamp(60px, 9vw, 130px);
          align-items: start;
        }

        .skills-intro { position: sticky; top: 135px; }

        .skills-title {
          margin: 34px 0 30px;
          font-family: var(--display);
          font-size: clamp(3.5rem, 7.5vw, 7.8rem);
          font-weight: 800;
          line-height: 0.78;
          letter-spacing: -0.085em;
          text-transform: uppercase;
        }

        .skills-title span {
          color: transparent;
          -webkit-text-stroke: 1px var(--cyan);
          text-stroke: 1px var(--cyan);
        }

        .skills-copy { max-width: 440px; color: var(--muted); font-size: 0.94rem; line-height: 1.85; }

        .skills-signal {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 40px;
          color: var(--paper);
          font-size: 0.67rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .signal-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--acid);
          box-shadow: 0 0 0 6px rgba(199, 255, 61, 0.1);
          animation: blink 1.8s ease infinite;
        }

        .skill-lanes { border-top: 1px solid var(--line-strong); }

        .skill-lane {
          position: relative;
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr) auto;
          gap: 22px;
          min-height: 220px;
          padding-block: 38px;
          overflow: hidden;
          border-bottom: 1px solid var(--line-strong);
          transition: padding 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.35s ease;
        }

        .skill-lane::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(105deg, color-mix(in srgb, var(--lane-color) 11%, transparent), transparent 64%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .skill-lane:hover { padding-inline: 24px; }
        .skill-lane:hover::before { opacity: 1; }

        .skill-number {
          color: var(--lane-color);
          font-family: var(--display);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .skill-label {
          margin-bottom: 12px;
          color: var(--muted);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .skill-name {
          font-family: var(--display);
          font-size: clamp(1.9rem, 3.5vw, 3.5rem);
          line-height: 1;
          letter-spacing: -0.055em;
        }

        .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }

        .skill-tag {
          padding: 6px 11px;
          border: 1px solid var(--line);
          border-radius: 99px;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.018);
          font-size: 0.68rem;
          font-weight: 700;
          transition: color 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }

        .skill-tag:hover { color: var(--paper); border-color: var(--lane-color); transform: translateY(-2px); }

        .skill-symbol {
          align-self: center;
          color: var(--lane-color);
          font-family: var(--display);
          font-size: clamp(2rem, 4vw, 4rem);
          font-weight: 800;
          opacity: 0.55;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        .skill-lane:hover .skill-symbol { transform: rotate(-8deg) scale(1.12); opacity: 1; }

        @media (max-width: 980px) {
          .skills-section { background: radial-gradient(circle at 16% 25%, rgba(155, 124, 255, 0.08), transparent 25%); }
          .skills-layout { grid-template-columns: 1fr; gap: 72px; }
          .skills-intro { position: static; }
          .skills-title { font-size: clamp(4.2rem, 14vw, 8rem); }
        }

        @media (max-width: 560px) {
          .skill-lane { grid-template-columns: 34px 1fr; min-height: 200px; gap: 12px; }
          .skill-symbol { display: none; }
          .skill-tags { grid-column: 2; }
          .skill-lane:hover { padding-inline: 10px; }
        }
      `}</style>
    </section>
  );
}

function SkillLane({ category, index }) {
  const ref = useScrollAnimation();

  return (
    <article
      ref={ref}
      className="skill-lane animate-on-scroll"
      style={{ '--lane-color': category.color, transitionDelay: `${index * 0.08}s` }}
    >
      <span className="skill-number">0{index + 1}</span>
      <div>
        <p className="skill-label">{category.label}</p>
        <h3 className="skill-name">{category.title}</h3>
        <div className="skill-tags">
          {category.skills.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}
        </div>
      </div>
      <span className="skill-symbol" aria-hidden="true">{category.symbol}</span>
    </article>
  );
}
