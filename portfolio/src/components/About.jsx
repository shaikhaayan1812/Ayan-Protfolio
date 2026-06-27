import { useScrollAnimation } from '../hooks/useScrollAnimation';
import topTechLogo from '../assets/topdownload.png';

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="animate-on-scroll">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            BCA Student | Full Stack Developer | Business Development Executive
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card animate-on-scroll-left">
            <div className="about-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c63ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3>Who I Am</h3>
            <p>
              I'm Ayan Shaikh, a BCA student at Lokmanya Commerce College and a Full Stack
              Developer course student at Top Technologies (ongoing). I work as a Business
              Development Executive at Orah Consultancy Services and have completed an
              internship at Patel Solutions.
            </p>
          </div>

          <div className="about-card animate-scale" style={{ transitionDelay: '0.2s' }}>
            <div className="about-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3>What I Do</h3>
            <p>
              I build modern web applications using Python Django, React, HTML/CSS, and
              JavaScript. I'm also skilled in communication and negotiation through my
              current role at Orah Consultancy Services.
            </p>
          </div>

          <div className="about-card animate-on-scroll-right">
            <div className="about-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff6b9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            <h3>My Journey</h3>
            <p>
              Started with HTML & CSS, then progressed to JavaScript, Python Django,
              React, and Three.js. With 18+ completed projects and professional experience
              in both development and business development, I bring a unique blend of
              technical and soft skills.
            </p>
          </div>
        </div>

        <div className="experience-section animate-on-scroll">
          <h3 className="section-subtitle" style={{ fontSize: '1.5rem', marginBottom: '32px', textAlign: 'center' }}>
            Experience & Education
          </h3>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" style={{ background: '#6c63ff' }}></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Business Development Executive</h4>
                  <span className="timeline-date">Nov 2025 - Present</span>
                </div>
                <p className="timeline-company">Orah Consultancy Services · Full-time · On-site</p>
                <p className="timeline-desc">Communication and Negotiation</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" style={{ background: '#00d4aa' }}></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Python Django Intern</h4>
                  <span className="timeline-date">Dec 2025 - Jan 2026</span>
                </div>
                <p className="timeline-company">Patel Solutions - The Perfect Web Solutions · Internship · On-site</p>
                <p className="timeline-desc">Python with Django, CSS, and related technologies</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" style={{ background: '#ff6b9d' }}></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Full Stack Course (Ongoing)</h4>
                  <span className="timeline-date">2026 - Present</span>
                </div>
                <p className="timeline-company">
                  <img src={topTechLogo} alt="Top Technologies" className="company-logo" />
                  Top Technologies
                </p>
                <p className="timeline-desc">Currently learning current top technologies in full stack development</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" style={{ background: '#ff9f43' }}></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <span className="timeline-date">Jul 2023 - Feb 2026</span>
                </div>
                <p className="timeline-company">Lokmanya Commerce College</p>
                <p className="timeline-desc">Grade: B</p>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-grid animate-on-scroll">
          <div className="stat-item">
            <span className="stat-number">18+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Work Experiences</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Passion</span>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 60px;
        }

        .about-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.4s ease;
        }

        .about-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-1);
          box-shadow: 0 12px 40px rgba(108, 99, 255, 0.15);
        }

        .about-icon {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }

        .about-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.3rem;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .about-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .experience-section {
          margin-bottom: 60px;
        }

        .timeline {
          position: relative;
          max-width: 700px;
          margin: 0 auto;
          padding-left: 32px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border-color);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 32px;
        }

        .timeline-dot {
          position: absolute;
          left: -24px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid var(--bg-primary);
          z-index: 1;
        }

        .timeline-content {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px 24px;
          transition: all 0.3s;
        }

        .timeline-content:hover {
          border-color: var(--accent-1);
          transform: translateX(8px);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 6px;
        }

        .timeline-header h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .timeline-date {
          font-size: 0.8rem;
          color: var(--accent-2);
          background: rgba(108, 99, 255, 0.1);
          padding: 3px 10px;
          border-radius: 50px;
          white-space: nowrap;
        }

        .timeline-company {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .company-logo {
          width: 20px;
          height: 20px;
          object-fit: contain;
          border-radius: 4px;
        }

        .timeline-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          opacity: 0.8;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          text-align: center;
        }

        .stat-item {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: all 0.4s ease;
        }

        .stat-item:hover {
          border-color: var(--accent-1);
          transform: scale(1.05);
        }

        .stat-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .timeline-header {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
