import heroImg from '../assets/ayan.png';

const tickerItems = ['React', 'Python', 'Django', 'Three.js', 'WebGL', 'JavaScript', 'Business Strategy'];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-status">
            <span className="status-dot" />
            Available for ambitious digital work
          </div>

          <p className="hero-kicker">Full-stack developer × business thinker</p>
          <h1>
            I build digital
            <span>momentum.</span>
          </h1>
          <p className="hero-intro">
            I’m Ayan Shaikh—turning ideas into expressive, useful web experiences with code, curiosity, and a sharp eye for what makes people act.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore my work
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 19 19 5M9 5h10v10" /></svg>
            </a>
            <a href="./Ayan_Shaikh_Resume.pdf" download className="button-outline">
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-proof" aria-label="Portfolio highlights">
            <div><strong>18+</strong><span>Projects shipped</span></div>
            <div><strong>120</strong><span>Internship hours</span></div>
            <div><strong>10+</strong><span>Technologies</span></div>
          </div>
        </div>

        <div className="portrait-stage" aria-label="Ayan Shaikh profile portrait">
          <div className="portrait-orbit" aria-hidden="true">
            <span>CODE · CREATE · CONNECT ·</span>
          </div>
          <div className="portrait-frame">
            <div className="portrait-corner corner-a" />
            <div className="portrait-corner corner-b" />
            <img
              src={heroImg}
              alt="Portrait of Ayan Shaikh"
              width="800"
              height="800"
              decoding="async"
              fetchPriority="high"
            />
            <div className="portrait-scan" aria-hidden="true" />
          </div>
          <div className="floating-note note-role">
            <span>Currently</span>
            <strong>Business Development Executive</strong>
          </div>
          <div className="floating-note note-location">
            <span>Base</span>
            <strong>India · Remote ready</strong>
          </div>
          <span className="portrait-code" aria-hidden="true">AS/26</span>
        </div>
      </div>

      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<i>✦</i></span>
          ))}
        </div>
      </div>

      <a className="scroll-cue" href="#about">
        Scroll to discover <span aria-hidden="true">↓</span>
      </a>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          padding: clamp(130px, 15vh, 180px) 0 132px;
          display: grid;
          align-items: center;
          overflow: hidden;
        }
        .hero::before {
          content: 'AYAN';
          position: absolute;
          top: 8%;
          left: -1vw;
          z-index: -1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(241, 247, 255, 0.055);
          font-family: var(--display);
          font-size: clamp(8rem, 24vw, 24rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.08em;
          white-space: nowrap;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
          gap: clamp(48px, 7vw, 110px);
          align-items: center;
        }
        .hero-copy { position: relative; z-index: 2; }
        .hero-status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: clamp(28px, 5vw, 52px);
          padding: 9px 13px;
          border: 1px solid var(--line);
          color: var(--muted);
          background: rgba(255,255,255,0.02);
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--acid);
          box-shadow: 0 0 14px var(--acid);
          animation: blink 1.8s ease-in-out infinite;
        }
        .hero-kicker {
          margin-bottom: 18px;
          color: var(--cyan);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .hero h1 {
          max-width: 800px;
          font-family: var(--display);
          font-size: clamp(4rem, 8.2vw, 8.6rem);
          font-weight: 750;
          line-height: 0.84;
          letter-spacing: -0.075em;
        }
        .hero h1 span {
          display: block;
          color: var(--acid);
          transform: translateX(clamp(0px, 4vw, 60px));
        }
        .hero-intro {
          max-width: 620px;
          margin: clamp(30px, 5vw, 52px) 0 34px;
          color: var(--muted);
          font-size: clamp(1rem, 1.5vw, 1.16rem);
          line-height: 1.85;
        }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; }
        .hero-proof {
          display: flex;
          gap: clamp(22px, 4vw, 54px);
          margin-top: clamp(42px, 7vw, 74px);
          padding-top: 26px;
          border-top: 1px solid var(--line);
        }
        .hero-proof div { display: grid; gap: 3px; }
        .hero-proof strong { font-family: var(--display); font-size: clamp(1.35rem, 2.5vw, 2rem); line-height: 1; }
        .hero-proof span { color: var(--muted); font-size: 0.65rem; letter-spacing: 0.06em; text-transform: uppercase; }

        .portrait-stage {
          position: relative;
          width: min(100%, 470px);
          margin-inline: auto;
          aspect-ratio: 0.82;
          animation: drift 7s ease-in-out infinite;
        }
        .portrait-frame {
          position: absolute;
          inset: 8% 8% 5%;
          overflow: hidden;
          background: var(--panel);
          clip-path: polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%);
          filter: saturate(0.88) contrast(1.04);
        }
        .portrait-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, transparent 55%, rgba(6,9,20,0.8)),
            linear-gradient(130deg, rgba(89,231,255,0.08), transparent 46%, rgba(199,255,61,0.1));
          pointer-events: none;
        }
        .portrait-frame img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
        .portrait-corner { position: absolute; z-index: 2; width: 74px; height: 74px; border-color: var(--acid); }
        .corner-a { top: 0; left: 0; border-top: 3px solid; border-left: 3px solid; }
        .corner-b { right: 0; bottom: 0; border-right: 3px solid; border-bottom: 3px solid; }
        .portrait-scan {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: repeating-linear-gradient(180deg, transparent 0 5px, rgba(255,255,255,0.025) 6px);
          mix-blend-mode: overlay;
          pointer-events: none;
        }
        .portrait-orbit {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 4;
          width: 126px;
          height: 126px;
          border: 1px solid var(--line-strong);
          border-radius: 50%;
          background: rgba(6,9,20,0.7);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          animation: orbit 16s linear infinite;
        }
        .portrait-orbit::before { content: '✦'; position: absolute; inset: 0; display: grid; place-items: center; color: var(--acid); font-size: 1.5rem; }
        .portrait-orbit span { display: block; padding: 14px; color: var(--muted); font-size: 0.53rem; font-weight: 800; letter-spacing: 0.19em; text-align: center; }
        .floating-note {
          position: absolute;
          z-index: 5;
          display: grid;
          gap: 4px;
          padding: 14px 16px;
          border: 1px solid var(--line-strong);
          background: rgba(11, 16, 32, 0.82);
          -webkit-backdrop-filter: blur(16px);
          backdrop-filter: blur(16px);
          box-shadow: 14px 14px 40px rgba(0,0,0,0.28);
        }
        .floating-note span { color: var(--acid); font-size: 0.54rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; }
        .floating-note strong { max-width: 190px; font-size: 0.68rem; line-height: 1.4; }
        .note-role { bottom: 8%; left: -6%; }
        .note-location { right: -6%; bottom: 25%; }
        .portrait-code { position: absolute; right: 2%; bottom: 1%; z-index: 5; color: var(--cyan); font-family: var(--display); font-size: 0.64rem; letter-spacing: 0.18em; }

        .hero-ticker {
          position: absolute;
          right: 0;
          bottom: 42px;
          left: 0;
          overflow: hidden;
          border-block: 1px solid var(--line);
          background: rgba(6,9,20,0.76);
          transform: rotate(-1.2deg) scale(1.03);
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .ticker-track span {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 14px 24px;
          color: var(--muted);
          font-family: var(--display);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .ticker-track i { color: var(--acid); font-style: normal; }
        .scroll-cue {
          position: absolute;
          right: 22px;
          bottom: 112px;
          color: var(--muted);
          font-size: 0.59rem;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }
        .scroll-cue span { margin-top: 9px; color: var(--acid); }

        @media (max-width: 980px) {
          .hero { padding-top: 140px; }
          .hero-grid { grid-template-columns: 1fr; }
          .hero-copy { max-width: 760px; }
          .portrait-stage { width: min(82vw, 480px); margin-top: 28px; }
          .scroll-cue { display: none; }
        }
        @media (max-width: 600px) {
          .hero { padding-bottom: 110px; }
          .hero h1 { font-size: clamp(3.5rem, 19vw, 6rem); }
          .hero h1 span { transform: none; }
          .hero-actions { display: grid; }
          .hero-proof { justify-content: space-between; gap: 12px; }
          .hero-proof span { max-width: 78px; }
          .portrait-stage { width: 100%; }
          .portrait-orbit { width: 94px; height: 94px; }
          .note-role { left: 0; }
          .note-location { right: 0; }
          .floating-note strong { max-width: 150px; }
        }
      `}</style>
    </section>
  );
}
