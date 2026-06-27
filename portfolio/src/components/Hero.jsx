import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (titleRef.current) titleRef.current.style.opacity = '1';
      if (subtitleRef.current) subtitleRef.current.style.opacity = '1';
      if (ctaRef.current) ctaRef.current.style.opacity = '1';
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          HTML CSS JavaScript React Developer
        </div>

        <h1 ref={titleRef} className="hero-title">
          Hi, I'm{' '}
          <span className="gradient-text">Ayan Shaikh</span>
          <br />
          <span className="hero-title-sub">Web Developer &amp; Designer</span>
        </h1>

        <p ref={subtitleRef} className="hero-subtitle">
          I build interactive web experiences with HTML, CSS, JavaScript, React, and 3D technologies.
          Explore my journey through 18+ projects showcasing creativity and technical skills.
        </p>

        <div ref={ctaRef} className="hero-cta">
          <a href="#projects" className="btn-primary">
            View Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
        <span>Scroll</span>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 120px 24px 80px;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-gradient {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 50% 50%, rgba(108, 99, 255, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(0, 212, 170, 0.06) 0%, transparent 40%),
                      radial-gradient(circle at 20% 80%, rgba(255, 107, 157, 0.06) 0%, transparent 40%);
          animation: float 20s ease-in-out infinite;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(108, 99, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108, 99, 255, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(108, 99, 255, 0.1);
          border: 1px solid rgba(108, 99, 255, 0.2);
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--accent-2);
          margin-bottom: 32px;
          animation: fadeInUp 1s ease;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-2);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          opacity: 0;
          transition: opacity 1s ease;
        }

        .gradient-text {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-title-sub {
          display: block;
          font-size: clamp(1.2rem, 3vw, 2rem);
          font-weight: 400;
          color: var(--text-secondary);
          margin-top: 8px;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.8;
          opacity: 0;
          transition: opacity 1s ease 0.3s;
        }

        .hero-cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          transition: opacity 1s ease 0.6s;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: var(--accent-gradient);
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(108, 99, 255, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(108, 99, 255, 0.5);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: transparent;
          color: var(--text-primary);
          border: 2px solid var(--border-color);
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          border-color: var(--accent-1);
          background: rgba(108, 99, 255, 0.1);
          transform: translateY(-3px);
        }

        .hero-scroll {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation: float 3s ease-in-out infinite;
        }

        .scroll-mouse {
          width: 24px;
          height: 38px;
          border: 2px solid var(--text-secondary);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        .scroll-dot {
          width: 3px;
          height: 8px;
          background: var(--accent-2);
          border-radius: 2px;
          animation: scrollAnim 2s infinite;
        }

        @keyframes scrollAnim {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
