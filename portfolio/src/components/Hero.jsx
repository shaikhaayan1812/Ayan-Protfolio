import { useEffect, useRef } from 'react';
import heroImg from '../assets/ayan.png';

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
          position: relative;
          overflow: hidden;
        }
        .hero-section::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(88, 166, 255, 0.06), transparent 70%);
          top: -100px;
          right: -100px;
          animation: float 6s ease-in-out infinite;
        }
        .hero-section::after {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(63, 185, 80, 0.04), transparent 70%);
          bottom: -50px;
          left: -80px;
          animation: float 8s ease-in-out infinite reverse;
        }
        .hero-content {
          text-align: center;
          max-width: 700px;
          position: relative;
          z-index: 1;
        }
        .hero-profile {
          margin-bottom: 28px;
          animation: float 4s ease-in-out infinite;
        }
        .hero-image {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--accent-1);
          padding: 3px;
          transition: all 0.4s;
          box-shadow: 0 0 20px rgba(88, 166, 255, 0.2);
        }
        .hero-image:hover {
          transform: scale(1.05);
          box-shadow: 0 0 40px rgba(88, 166, 255, 0.4);
          border-color: var(--accent-2);
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
          animation: glow 3s infinite;
          -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
        }
        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 16px;
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 550px;
          margin: 0 auto 32px;
          line-height: 1.7;
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }
        .hero-cta {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;
        }
      `}</style>
    </section>
  );
}
