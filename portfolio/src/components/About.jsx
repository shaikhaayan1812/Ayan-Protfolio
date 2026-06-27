import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="animate-on-scroll">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about creating beautiful, functional web experiences
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card animate-on-scroll-left">
            <div className="about-icon">🎯</div>
            <h3>Who I Am</h3>
            <p>
              I'm Ayan Shaikh, a web development enthusiast with a passion for building 
              interactive and visually stunning websites. From simple HTML pages to complex 
              3D experiences, I love bringing ideas to life through code.
            </p>
          </div>

          <div className="about-card animate-scale" style={{ transitionDelay: '0.2s' }}>
            <div className="about-icon">💡</div>
            <h3>What I Do</h3>
            <p>
              I create projects ranging from restaurant websites and games to 3D model viewers 
              and interactive dashboards. Each project helps me learn new technologies and 
              improve my problem-solving skills.
            </p>
          </div>

          <div className="about-card animate-on-scroll-right">
            <div className="about-icon">🚀</div>
            <h3>My Journey</h3>
            <p>
              Starting with basic HTML, I've progressed through CSS, JavaScript, Bootstrap, 
              Three.js, and React. With 18+ completed projects, I'm constantly exploring new 
              ways to push the boundaries of web development.
            </p>
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
            <span className="stat-number">3D</span>
            <span className="stat-label">Web Experiences</span>
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
        }
      `}</style>
    </section>
  );
}
