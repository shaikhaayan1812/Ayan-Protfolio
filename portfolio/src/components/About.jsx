import { useScrollAnimation } from '../hooks/useScrollAnimation';
import orahLogo from '../assets/orah.png';
import patelLogo from '../assets/patel-logo.png';
import topsLogo from '../assets/topdownload.png';
import collegeLogo from '../assets/colleg.png';

const journey = [
  {
    period: '2025 — NOW',
    title: 'Business Development Executive',
    place: 'Orah Consultancy Services',
    detail: 'Turning conversations into opportunity through communication, research, and negotiation.',
    logo: orahLogo,
    alt: 'Orah Consultancy Services logo',
    color: 'var(--acid)',
  },
  {
    period: '2025 — 2026',
    title: 'Python & Django Intern',
    place: 'Patel Solutions',
    detail: '120 hours of hands-on development across Python, Django, CSS, and practical web workflows.',
    logo: patelLogo,
    alt: 'Patel Solutions logo',
    color: 'var(--cyan)',
  },
  {
    period: '2026 — NOW',
    title: 'Full Stack Development',
    place: 'TOPS Technologies',
    detail: 'Deepening programming fundamentals and building production-minded full-stack projects.',
    logo: topsLogo,
    alt: 'TOPS Technologies logo',
    color: 'var(--coral)',
  },
  {
    period: '2023 — 2026',
    title: 'Bachelor of Computer Applications',
    place: 'Lokmanya Commerce College',
    detail: 'Built the academic foundation that connects software, systems, and business thinking.',
    logo: collegeLogo,
    alt: 'Lokmanya Commerce College logo',
    color: 'var(--violet)',
  },
];

const metrics = [
  ['18+', 'Projects'],
  ['10+', 'Technologies'],
  ['120', 'Internship hours'],
  ['02', 'Professional roles'],
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section section-shell about-section">
      <div className="container">
        <div className="section-heading animate-on-scroll" ref={ref}>
          <span className="section-index">01 / About</span>
          <h2 className="display-title">More than a <span className="accent-text">developer.</span></h2>
          <p className="section-copy">I combine code, design awareness, and business communication—so the work is not only functional, but also clear, engaging, and useful.</p>
        </div>

        <div className="about-manifesto">
          <div className="manifesto-mark" aria-hidden="true">“</div>
          <p className="manifesto-lead">
            The best digital work feels <em>obvious</em> after someone builds it.
          </p>
          <div className="manifesto-body">
            <p>I’m a BCA graduate and full-stack learner who enjoys moving between technical problem-solving and human conversation.</p>
            <p>From React interfaces and Django backends to Three.js experiments, every project is a chance to learn faster and make the next idea sharper.</p>
          </div>
        </div>

        <div className="metric-ribbon" aria-label="Key portfolio metrics">
          {metrics.map(([value, label], index) => (
            <div className="metric" key={label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{value}</strong>
              <small>{label}</small>
            </div>
          ))}
        </div>

        <div className="journey-layout">
          <div className="journey-intro">
            <p className="eyebrow">The journey so far</p>
            <h3>Learning in public. Building with intent.</h3>
            <p>Every step adds a different layer: technology, communication, real-world execution, and the discipline to keep improving.</p>
          </div>

          <div className="journey-list">
            {journey.map((item, index) => (
              <article className="journey-row" key={item.title} style={{ '--journey-color': item.color }}>
                <div className="journey-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="journey-logo">
                  <img src={item.logo} alt={item.alt} loading="lazy" decoding="async" />
                </div>
                <div className="journey-main">
                  <span>{item.period}</span>
                  <h4>{item.title}</h4>
                  <strong>{item.place}</strong>
                  <p>{item.detail}</p>
                </div>
                <span className="journey-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section { overflow: hidden; }
        .about-manifesto {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
          gap: clamp(40px, 8vw, 120px);
          padding: clamp(36px, 6vw, 72px);
          border: 1px solid var(--line);
          background:
            linear-gradient(135deg, rgba(89,231,255,0.07), transparent 35%),
            var(--ink-soft);
          overflow: hidden;
        }
        .about-manifesto::after {
          content: '';
          position: absolute;
          width: 220px;
          height: 220px;
          right: -110px;
          bottom: -110px;
          border: 1px solid var(--line-strong);
          border-radius: 50%;
          box-shadow: 0 0 0 30px rgba(199,255,61,0.025), 0 0 0 60px rgba(199,255,61,0.018);
        }
        .manifesto-mark {
          position: absolute;
          top: -40px;
          left: 12px;
          color: rgba(199,255,61,0.1);
          font-family: Georgia, serif;
          font-size: 13rem;
          line-height: 1;
        }
        .manifesto-lead {
          position: relative;
          z-index: 1;
          max-width: 690px;
          font-family: var(--display);
          font-size: clamp(2rem, 4.2vw, 4.2rem);
          font-weight: 650;
          line-height: 1.05;
          letter-spacing: -0.045em;
        }
        .manifesto-lead em { color: var(--acid); font-style: normal; }
        .manifesto-body { display: grid; align-content: end; gap: 18px; color: var(--muted); font-size: 0.94rem; line-height: 1.85; }
        .metric-ribbon {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-inline: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .metric {
          position: relative;
          min-height: 170px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-right: 1px solid var(--line);
          overflow: hidden;
          transition: color 0.35s ease, background 0.35s ease;
        }
        .metric:last-child { border-right: 0; }
        .metric > span { position: absolute; top: 18px; right: 18px; color: var(--muted); font-size: 0.6rem; }
        .metric strong { font-family: var(--display); font-size: clamp(2.4rem, 5vw, 4.8rem); line-height: 0.9; letter-spacing: -0.06em; }
        .metric small { margin-top: 10px; color: var(--muted); font-size: 0.63rem; font-weight: 700; letter-spacing: 0.11em; text-transform: uppercase; }
        .metric:hover { color: var(--ink); background: var(--acid); }
        .metric:hover span, .metric:hover small { color: rgba(6,9,20,0.62); }

        .journey-layout {
          display: grid;
          grid-template-columns: minmax(260px, 0.34fr) minmax(0, 0.66fr);
          gap: clamp(50px, 8vw, 120px);
          margin-top: clamp(90px, 12vw, 150px);
          align-items: start;
        }
        .journey-intro { position: sticky; top: 130px; }
        .journey-intro h3 {
          margin: 26px 0 24px;
          font-family: var(--display);
          font-size: clamp(2rem, 3.8vw, 3.6rem);
          line-height: 1.02;
          letter-spacing: -0.045em;
        }
        .journey-intro > p:last-child { color: var(--muted); font-size: 0.9rem; line-height: 1.85; }
        .journey-list { border-top: 1px solid var(--line); }
        .journey-row {
          position: relative;
          display: grid;
          grid-template-columns: 44px 66px minmax(0, 1fr) 24px;
          gap: 20px;
          align-items: start;
          padding: 32px 6px;
          border-bottom: 1px solid var(--line);
          transition: padding 0.35s ease, background 0.35s ease;
        }
        .journey-row::before {
          content: '';
          position: absolute;
          inset: 0 auto 0 0;
          width: 3px;
          background: var(--journey-color);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.35s ease;
        }
        .journey-row:hover { padding-inline: 20px 12px; background: rgba(255,255,255,0.025); }
        .journey-row:hover::before { transform: scaleY(1); transform-origin: top; }
        .journey-number { padding-top: 5px; color: var(--journey-color); font-size: 0.58rem; font-weight: 800; }
        .journey-logo {
          width: 58px;
          height: 58px;
          padding: 8px;
          display: grid;
          place-items: center;
          border: 1px solid var(--line);
          background: var(--paper);
        }
        .journey-logo img { width: 100%; max-height: 40px; object-fit: contain; }
        .journey-main > span { color: var(--journey-color); font-size: 0.6rem; font-weight: 800; letter-spacing: 0.12em; }
        .journey-main h4 { margin: 9px 0 2px; font-family: var(--display); font-size: clamp(1.25rem, 2.3vw, 1.85rem); line-height: 1.1; }
        .journey-main strong { color: var(--muted); font-size: 0.72rem; }
        .journey-main p { max-width: 610px; margin-top: 14px; color: var(--muted); font-size: 0.82rem; line-height: 1.75; }
        .journey-arrow { color: var(--journey-color); font-size: 1.2rem; transition: transform 0.3s ease; }
        .journey-row:hover .journey-arrow { transform: translate(3px, -3px); }

        @media (max-width: 900px) {
          .about-manifesto { grid-template-columns: 1fr; }
          .metric-ribbon { grid-template-columns: repeat(2, 1fr); }
          .metric:nth-child(2) { border-right: 0; }
          .metric:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
          .journey-layout { grid-template-columns: 1fr; }
          .journey-intro { position: static; max-width: 620px; }
        }
        @media (max-width: 560px) {
          .about-manifesto { padding: 32px 24px; }
          .metric { min-height: 138px; padding: 18px; }
          .journey-row { grid-template-columns: 34px 50px minmax(0, 1fr); gap: 12px; }
          .journey-logo { width: 46px; height: 46px; }
          .journey-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}
