import { useEffect, useRef } from 'react';
import heroImg from '../assets/hero.png';

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
      <div className="hero-content">
        <div className="hero-profile">
          <img src={heroImg} alt="Ayan Shaikh" className="hero-image" />
        </div>
        <div className="hero-badge">BCA Student | Full Stack Developer | Business Development Executive</div>
        <h1 ref={titleRef} className="hero-title">
          Hi, I'm <span style={{ color: 'var(--accent-1)' }}>Ayan Shaikh</span>
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          Building modern web apps with Python Django, React, and more. 
          Currently working as Business Development Executive at Orah Consultancy Services.
        </p>
        <div ref={ctaRef} className="hero-cta">
          <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>View Projects</a>
          <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact Me</a>
          <a href="../Ayan_Shaikh_Resume.pdf" download className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Resume
          </a>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 24px 60px;
        }
        .hero-content {
          text-align: center;
          max-width: 700px;
        }
        .hero-profile { margin-bottom: 28px; }
        .hero-image {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--accent-1);
          padding: 3px;
        }
        .hero-badge {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(88, 166, 255, 0.1);
          border: 1px solid rgba(88, 166, 255, 0.2);
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--accent-1);
          margin-bottom: 24px;
        }
        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 16px;
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        .hero-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 550px;
          margin: 0 auto 32px;
          line-height: 1.7;
          opacity: 0;
          transition: opacity 0.8s ease 0.3s;
        }
        .hero-cta {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          transition: opacity 0.8s ease 0.5s;
        }
      `}</style>
    </section>
  );
}
