import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-dev">&lt;</span>
          <span className="logo-text">Ayan Shaikh</span>
          <span className="logo-dev">/&gt;</span>
        </Link>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}>
              {item.label}
            </a>
          ))}
          <a href="../Ayan_Shaikh_Resume.pdf" download className="nav-resume-btn">Resume</a>
        </div>

        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 14px 0;
          transition: all 0.4s ease;
        }
        .navbar.scrolled {
          background: rgba(13, 17, 23, 0.8);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 1px 0 var(--border-color);
          padding: 10px 0;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          transition: all 0.3s;
        }
        .nav-logo:hover { transform: scale(1.02); }
        .logo-dev {
          color: var(--accent-1);
          font-weight: 300;
          animation: pulse 2s infinite;
        }
        .nav-links {
          display: flex;
          gap: 24px;
          align-items: center;
        }
        .nav-link {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s;
          position: relative;
          padding: 4px 0;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-gradient);
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 1px;
        }
        .nav-link:hover {
          color: var(--text-primary);
          transform: translateY(-1px);
        }
        .nav-link:hover::after { width: 100%; }
        .nav-resume-btn {
          padding: 8px 20px;
          background: linear-gradient(135deg, var(--accent-1), #4c96e8);
          color: white;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .nav-resume-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(88, 166, 255, 0.35);
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 1001;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text-primary);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 2px;
        }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: translateX(-10px); }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: rgba(22, 27, 34, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 80px 32px 32px;
            gap: 20px;
            transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 999;
          }
          .nav-links.open { right: 0; }
          .hamburger { display: flex; }
          .nav-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 998;
            animation: fadeIn 0.3s ease;
          }
        }
      `}</style>
    </nav>
  );
}
