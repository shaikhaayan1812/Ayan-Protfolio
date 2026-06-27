import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-bracket">&lsaquo;</span>
          <span className="logo-text">AYAN</span>
          <span className="logo-bracket">&rsaquo;</span>
        </Link>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navItems.map((item) =>
            isHome ? (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to="/"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
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
          padding: 20px 0;
          transition: all 0.4s ease;
        }

        .navbar.scrolled {
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(20px);
          padding: 12px 0;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
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
          gap: 2px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: 2px;
        }

        .logo-bracket {
          color: var(--accent-2);
          font-weight: 300;
          font-size: 1.8rem;
          opacity: 0.8;
          transition: opacity 0.3s;
        }

        .nav-logo:hover .logo-bracket {
          opacity: 1;
        }

        .logo-text {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
        }

        .logo-text::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent-gradient);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s ease;
        }

        .nav-logo:hover .logo-text::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-link {
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-gradient);
          transition: width 0.3s;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link:hover::after {
          width: 100%;
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
          width: 24px;
          height: 2px;
          background: var(--text-primary);
          transition: all 0.3s;
          border-radius: 2px;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .nav-overlay {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: var(--bg-secondary);
            flex-direction: column;
            padding: 100px 40px 40px;
            gap: 24px;
            transition: right 0.4s ease;
            z-index: 999;
            box-shadow: -10px 0 40px rgba(0, 0, 0, 0.5);
          }

          .nav-links.open {
            right: 0;
          }

          .hamburger {
            display: flex;
          }

          .nav-link {
            font-size: 1.1rem;
          }

          .nav-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 998;
          }
        }
      `}</style>
    </nav>
  );
}
