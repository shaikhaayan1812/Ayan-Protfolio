import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'About', id: 'about', number: '01' },
  { label: 'Work', id: 'projects', number: '02' },
  { label: 'Skills', id: 'skills', number: '03' },
  { label: 'Contact', id: 'contact', number: '04' },
];

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  element.scrollIntoView({ behavior });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const handleNav = (id) => {
    setMenuOpen(false);
    if (document.getElementById(id)) {
      scrollToSection(id);
      return;
    }
    navigate('/');
    window.setTimeout(() => scrollToSection(id), 0);
  };

  const handleHome = () => {
    setMenuOpen(false);
    window.setTimeout(() => {
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      window.scrollTo({ top: 0, behavior });
    }, 0);
  };

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-wrap">
        <Link to="/" className="brand" aria-label="Ayan Shaikh home" onClick={handleHome}>
          <span className="brand-mark">AS</span>
          <span className="brand-copy">
            <strong>Ayan Shaikh</strong>
            <small>Developer / Builder</small>
          </span>
        </Link>

        <nav className={`nav-panel${menuOpen ? ' is-open' : ''}`} id="main-navigation" aria-label="Primary navigation">
          <div className="nav-mobile-label">Explore</div>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-item"
              onClick={(event) => {
                event.preventDefault();
                handleNav(item.id);
              }}
            >
              <span>{item.number}</span>
              {item.label}
            </a>
          ))}
          <a href="./Ayan_Shaikh_Resume.pdf" download className="nav-resume">
            Resume <span aria-hidden="true">↘</span>
          </a>
        </nav>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .site-header {
          position: fixed;
          inset: 0 0 auto;
          z-index: 100;
          padding: 18px 24px;
          transition: padding 0.35s ease;
        }
        .site-header.is-scrolled { padding-top: 10px; }
        .nav-wrap {
          width: min(1320px, 100%);
          min-height: 66px;
          margin: 0 auto;
          padding: 8px 10px 8px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border: 1px solid var(--line);
          background: rgba(6, 9, 20, 0.72);
          -webkit-backdrop-filter: blur(22px);
          backdrop-filter: blur(22px);
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.22);
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .is-scrolled .nav-wrap {
          border-color: var(--line-strong);
          background: rgba(6, 9, 20, 0.92);
        }
        .brand { display: inline-flex; align-items: center; gap: 12px; }
        .brand-mark {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          color: var(--ink);
          background: var(--acid);
          font-family: var(--display);
          font-size: 0.86rem;
          font-weight: 800;
          box-shadow: 4px 4px 0 var(--cyan);
        }
        .brand-copy { display: flex; flex-direction: column; line-height: 1.15; }
        .brand-copy strong { font-family: var(--display); font-size: 0.88rem; letter-spacing: 0.02em; }
        .brand-copy small { margin-top: 4px; color: var(--muted); font-size: 0.58rem; letter-spacing: 0.12em; text-transform: uppercase; }
        .nav-panel { display: flex; align-items: center; gap: clamp(16px, 2.3vw, 34px); }
        .nav-mobile-label { display: none; }
        .nav-item {
          position: relative;
          color: var(--muted);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          transition: color 0.25s ease;
        }
        .nav-item span { margin-right: 6px; color: var(--acid); font-size: 0.55rem; }
        .nav-item::after {
          content: '';
          position: absolute;
          right: 0;
          bottom: -8px;
          left: 0;
          height: 1px;
          background: var(--acid);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        .nav-item:hover { color: var(--paper); }
        .nav-item:hover::after { transform: scaleX(1); transform-origin: left; }
        .nav-resume {
          padding: 12px 16px;
          color: var(--ink);
          background: var(--paper);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.3s ease, background 0.3s ease;
        }
        .nav-resume:hover { color: var(--ink); background: var(--acid); }
        .menu-toggle {
          display: none;
          width: 46px;
          height: 46px;
          padding: 0 12px;
          background: var(--acid);
          cursor: pointer;
        }
        .menu-toggle span {
          display: block;
          width: 100%;
          height: 2px;
          background: var(--ink);
          transition: transform 0.3s ease;
        }
        .menu-toggle span + span { margin-top: 7px; }
        .menu-toggle.is-open span:first-child { transform: translateY(4.5px) rotate(45deg); }
        .menu-toggle.is-open span:last-child { transform: translateY(-4.5px) rotate(-45deg); }

        @media (max-width: 850px) {
          .site-header { padding: 12px; }
          .brand-copy { display: none; }
          .menu-toggle { display: block; position: relative; z-index: 102; }
          .nav-panel {
            position: fixed;
            inset: 0;
            z-index: 101;
            padding: 112px 28px 36px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: center;
            gap: 0;
            background:
              radial-gradient(circle at 90% 10%, rgba(89, 231, 255, 0.14), transparent 28%),
              var(--ink);
            transform: translateY(-105%);
            visibility: hidden;
            transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.55s;
          }
          .nav-panel.is-open { transform: translateY(0); visibility: visible; }
          .nav-mobile-label {
            display: block;
            margin-bottom: 24px;
            color: var(--acid);
            font-size: 0.68rem;
            font-weight: 800;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }
          .nav-item {
            display: flex;
            align-items: baseline;
            padding: 16px 0;
            border-bottom: 1px solid var(--line);
            color: var(--paper);
            font-family: var(--display);
            font-size: clamp(2.2rem, 12vw, 4.4rem);
            font-weight: 700;
            line-height: 1;
          }
          .nav-item span { width: 36px; font-family: var(--body); font-size: 0.62rem; }
          .nav-item::after { display: none; }
          .nav-resume { margin-top: 26px; padding: 18px; text-align: center; }
        }
      `}</style>
    </header>
  );
}
