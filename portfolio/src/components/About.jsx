import { useScrollAnimation } from '../hooks/useScrollAnimation';
import orahLogo from '../assets/orah.png';
import patelLogo from '../assets/patel-logo.png';
import topLogo from '../assets/topdownload.png';
import collegLogo from '../assets/colleg.png';

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="animate-on-scroll">
          <h2 className="section-title"><span>About Me</span></h2>
          <p className="section-subtitle">BCA Student | Full Stack Developer | Business Development Executive</p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <div className="about-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-1)" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h3>Who I Am</h3>
            <p>I'm Ayan Shaikh, a BCA student at Lokmanya Commerce College and a Full Stack Developer course student at Top Technologies (ongoing). I work as a Business Development Executive at Orah Consultancy Services and have completed an internship at Patel Solutions.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-2)" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <h3>What I Do</h3>
            <p>I build modern web applications using Python Django, React, HTML/CSS, and JavaScript. I'm also skilled in communication and negotiation through my current role at Orah Consultancy Services.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-3)" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </div>
            <h3>My Journey</h3>
            <p>Started with HTML & CSS, then progressed to JavaScript, Python Django, React, and Three.js. With 18+ completed projects and professional experience in both development and business development, I bring a unique blend of technical and soft skills.</p>
          </div>
        </div>

        <div className="timeline-section">
          <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', marginBottom: '32px', textAlign: 'center', color: 'var(--text-primary)' }}>Experience & Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="tl-dot" style={{ background: 'var(--accent-1)' }}></div>
              <div className="tl-content">
                <div className="tl-top">
                  <h4>Business Development Executive</h4>
                  <span className="tl-date">Nov 2025 - Present</span>
                </div>
                <p className="tl-company">Orah Consultancy Services · Full-time · On-site</p>
                <p className="tl-desc">Communication and Negotiation</p>
                <img src={orahLogo} alt="Orah" className="tl-logo" />
              </div>
            </div>
            <div className="timeline-item">
              <div className="tl-dot" style={{ background: 'var(--accent-2)' }}></div>
              <div className="tl-content">
                <div className="tl-top">
                  <h4>Python Django Intern</h4>
                  <span className="tl-date">Dec 2025 - Jan 2026</span>
                </div>
                <p className="tl-company">Patel Solutions - The Perfect Web Solutions · Internship · On-site</p>
                <p className="tl-desc">Python with Django, CSS, and related technologies</p>
                <img src={patelLogo} alt="Patel Solutions" className="tl-logo" />
              </div>
            </div>
            <div className="timeline-item">
              <div className="tl-dot" style={{ background: 'var(--accent-3)' }}></div>
              <div className="tl-content">
                <div className="tl-top">
                  <h4>Full Stack Course (Ongoing)</h4>
                  <span className="tl-date">2026 - Present</span>
                </div>
                <p className="tl-company">Top Technologies</p>
                <p className="tl-desc">Currently learning current top technologies in full stack development</p>
                <img src={topLogo} alt="Top Technologies" className="tl-logo" />
              </div>
            </div>
            <div className="timeline-item">
              <div className="tl-dot" style={{ background: 'var(--accent-4)' }}></div>
              <div className="tl-content">
                <div className="tl-top">
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <span className="tl-date">Jul 2023 - Feb 2026</span>
                </div>
                <p className="tl-company">Lokmanya Commerce College</p>
                <p className="tl-desc">Grade: B</p>
                <img src={collegLogo} alt="Lokmanya Commerce College" className="tl-logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-item"><span className="stat-num">1</span><span className="stat-lbl">Year Experience</span></div>
          <div className="stat-item"><span className="stat-num">18+</span><span className="stat-lbl">Projects</span></div>
          <div className="stat-item"><span className="stat-num">10+</span><span className="stat-lbl">Technologies</span></div>
          <div className="stat-item"><span className="stat-num">2</span><span className="stat-lbl">Work Experiences</span></div>
          <div className="stat-item"><span className="stat-num">100%</span><span className="stat-lbl">Passion</span></div>
        </div>
      </div>

      <style>{`
        .about-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 60px;
        }
        .about-card {
          background: var(--glass-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          padding: 32px 28px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .about-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-1), transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .about-card:hover {
          border-color: rgba(88, 166, 255, 0.3);
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(88, 166, 255, 0.1);
        }
        .about-card:hover::before { opacity: 1; }
        .about-card:nth-child(2)::before { background: linear-gradient(90deg, transparent, var(--accent-2), transparent); }
        .about-card:nth-child(3)::before { background: linear-gradient(90deg, transparent, var(--accent-3), transparent); }
        .about-icon { margin-bottom: 14px; transition: transform 0.3s; }
        .about-card:hover .about-icon { transform: scale(1.1); }
        .about-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: var(--text-primary);
        }
        .about-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.9rem;
        }
        .timeline-section { margin-bottom: 60px; }
        .timeline {
          position: relative;
          max-width: 650px;
          margin: 0 auto;
          padding-left: 28px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 6px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-4));
          border-radius: 1px;
        }
        .timeline-item { position: relative; margin-bottom: 24px; }
        .tl-dot {
          position: absolute;
          left: -22px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid var(--bg-primary);
          z-index: 1;
          box-shadow: 0 0 8px var(--accent-1);
          transition: all 0.3s;
        }
        .timeline-item:hover .tl-dot { transform: scale(1.3); }
        .tl-content {
          background: var(--glass-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 18px 22px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .tl-content:hover {
          border-color: rgba(88, 166, 255, 0.3);
          transform: translateX(8px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }
        .tl-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 4px;
        }
        .tl-top h4 { font-family: 'Space Grotesk', sans-serif; font-size: 1rem; color: var(--text-primary); }
        .tl-date {
          font-size: 0.75rem;
          color: var(--accent-1);
          background: rgba(88, 166, 255, 0.1);
          padding: 2px 10px;
          border-radius: 4px;
          white-space: nowrap;
          backdrop-filter: blur(4px);
        }
        .tl-company { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px; }
        .tl-desc { font-size: 0.8rem; color: var(--text-secondary); opacity: 0.8; }
        .tl-logo {
          height: 28px;
          margin-top: 10px;
          opacity: 0.7;
          object-fit: contain;
          transition: all 0.3s;
          filter: grayscale(0.5);
        }
        .tl-content:hover .tl-logo {
          opacity: 1;
          filter: grayscale(0);
          transform: scale(1.05);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .stat-item {
          background: var(--glass-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 28px 16px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .stat-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(88, 166, 255, 0.06), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .stat-item:hover {
          border-color: rgba(88, 166, 255, 0.3);
          transform: translateY(-6px);
          box-shadow: 0 8px 30px rgba(88, 166, 255, 0.1);
        }
        .stat-item:hover::before { opacity: 1; }
        .stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          display: block;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          z-index: 1;
        }
        .stat-lbl {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-top: 4px;
          display: block;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 968px) {
          .about-cards { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .tl-top { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
