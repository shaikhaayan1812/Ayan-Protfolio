import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactLinks = [
  { label: 'LinkedIn', detail: 'Professional updates', href: 'https://linkedin.com/in/shaikh-ayan-737302385' },
  { label: 'Instagram', detail: 'Behind the scenes', href: 'https://www.instagram.com/ayan_shaikh_027/' },
  { label: 'WhatsApp', detail: 'Quick conversation', href: 'https://wa.me/919313866346' },
  { label: 'Email', detail: 'Project enquiries', href: 'mailto:shaikhaayan1812@gmail.com' },
];

export default function Contact() {
  const ref = useScrollAnimation();
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="contact-section section-shell">
      <div className="contact-marquee" aria-hidden="true">
        <div>
          LET&apos;S MAKE IT REAL <span>✦</span> LET&apos;S MAKE IT REAL <span>✦</span>
          LET&apos;S MAKE IT REAL <span>✦</span> LET&apos;S MAKE IT REAL <span>✦</span>
        </div>
      </div>

      <div ref={ref} className="container contact-stage animate-on-scroll">
        <div className="contact-pitch">
          <p className="contact-index">04 / Contact</p>
          <h2>Have an idea?<br /><span>Let&apos;s make noise.</span></h2>
          <p className="contact-copy">
            I&apos;m open to junior developer roles, collaborations, and ambitious web projects.
            Tell me what you want to build.
          </p>
          <a href="mailto:shaikhaayan1812@gmail.com" className="contact-email">
            <span>Start a conversation</span>
            <strong>shaikhaayan1812<br className="email-break" />@gmail.com</strong>
            <span className="contact-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-links">
          <p className="contact-link-heading">Find me online</p>
          {contactLinks.map((link, index) => {
            const external = link.href.startsWith('http');
            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="contact-link"
              >
                <span className="contact-link-number">0{index + 1}</span>
                <span className="contact-link-name">{link.label}</span>
                <span className="contact-link-detail">{link.detail}</span>
                <span className="contact-link-arrow" aria-hidden="true">↗</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="container resume-bar">
        <div>
          <span className="resume-kicker">The complete story</span>
          <strong>Experience, education & technical profile</strong>
        </div>
        <a href="./Ayan_Shaikh_Resume.pdf" download className="resume-download">
          Download résumé <span aria-hidden="true">↓</span>
        </a>
      </div>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand"><span>AS</span> / Developer portfolio</div>
          <p>© {currentYear} Ayan Shaikh. Built with intent.</p>
          <a href="#hero">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>

      <style>{`
        .contact-section {
          position: relative;
          overflow: hidden;
          color: var(--ink);
          background: var(--acid);
        }

        .contact-section :where(a, button):focus-visible { outline-color: var(--ink); }

        .contact-section::before {
          content: '';
          position: absolute;
          width: 620px;
          aspect-ratio: 1;
          left: -300px;
          top: 18%;
          border: 1px solid rgba(6, 9, 20, 0.2);
          border-radius: 50%;
          box-shadow: 0 0 0 80px rgba(6, 9, 20, 0.035), 0 0 0 160px rgba(6, 9, 20, 0.025);
          pointer-events: none;
        }

        .contact-marquee {
          width: 100%;
          overflow: hidden;
          border-bottom: 1px solid rgba(6, 9, 20, 0.25);
          background: var(--ink);
          color: var(--paper);
        }

        .contact-marquee div {
          width: max-content;
          padding-block: 17px;
          font-family: var(--display);
          font-size: clamp(1rem, 2vw, 1.45rem);
          font-weight: 800;
          letter-spacing: 0.08em;
          animation: contactMarquee 22s linear infinite;
        }

        .contact-marquee span { margin-inline: 26px; color: var(--acid); }

        @keyframes contactMarquee { to { transform: translateX(-50%); } }

        .contact-stage {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) minmax(380px, 0.88fr);
          gap: clamp(60px, 10vw, 150px);
          padding-block: clamp(90px, 12vw, 150px);
        }

        .contact-index {
          margin-bottom: 38px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .contact-pitch h2 {
          max-width: 800px;
          font-family: var(--display);
          font-size: clamp(3.2rem, 7vw, 7.4rem);
          font-weight: 800;
          line-height: 0.86;
          letter-spacing: -0.075em;
        }

        .contact-pitch h2 span {
          color: transparent;
          -webkit-text-stroke: 1.5px var(--ink);
          text-stroke: 1.5px var(--ink);
        }

        .contact-copy { max-width: 610px; margin: 38px 0 48px; font-size: 0.98rem; font-weight: 600; line-height: 1.8; }

        .contact-email {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          min-width: min(100%, 520px);
          padding: 22px 70px 22px 0;
          border-block: 2px solid var(--ink);
          transition: padding 0.3s ease, background 0.3s ease;
        }

        .contact-email:hover { padding-left: 18px; background: rgba(6, 9, 20, 0.06); }

        .contact-email > span:first-child {
          margin-bottom: 7px;
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .contact-email strong { font-family: var(--display); font-size: clamp(1rem, 2.2vw, 1.55rem); line-height: 1.15; }
        .email-break { display: none; }
        .contact-arrow { position: absolute; right: 16px; top: 50%; font-size: 2rem; transform: translateY(-50%); }

        .contact-link-heading {
          padding-bottom: 18px;
          border-bottom: 2px solid var(--ink);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .contact-link {
          display: grid;
          grid-template-columns: 40px 1fr auto 24px;
          gap: 14px;
          align-items: center;
          min-height: 98px;
          border-bottom: 1px solid rgba(6, 9, 20, 0.35);
          transition: padding 0.3s ease, background 0.3s ease;
        }

        .contact-link:hover { padding-inline: 14px; background: var(--ink); color: var(--acid); }
        .contact-link-number { font-size: 0.68rem; font-weight: 800; }
        .contact-link-name { font-family: var(--display); font-size: clamp(1.4rem, 2.5vw, 2.2rem); font-weight: 750; letter-spacing: -0.045em; }
        .contact-link-detail { font-size: 0.7rem; font-weight: 700; }
        .contact-link-arrow { font-size: 1.25rem; transition: transform 0.25s ease; }
        .contact-link:hover .contact-link-arrow { transform: translate(3px, -3px); }

        .resume-bar {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding-block: 30px;
          border-top: 1px solid rgba(6, 9, 20, 0.35);
        }

        .resume-bar > div { display: flex; flex-direction: column; }
        .resume-kicker { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; }
        .resume-bar strong { font-family: var(--display); font-size: clamp(1rem, 2vw, 1.35rem); }

        .resume-download {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 16px;
          min-height: 54px;
          padding: 0 24px;
          color: var(--paper);
          background: var(--ink);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .resume-download:hover { transform: translate(-4px, -4px); box-shadow: 8px 8px 0 rgba(6, 9, 20, 0.2); }

        .site-footer { color: var(--muted); background: var(--ink); }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; gap: 24px; min-height: 108px; font-size: 0.7rem; }
        .footer-brand { color: var(--paper); font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
        .footer-brand span { display: inline-grid; place-items: center; width: 32px; height: 32px; margin-right: 10px; color: var(--ink); background: var(--acid); }
        .footer-inner a { color: var(--paper); font-weight: 800; text-transform: uppercase; }

        @media (max-width: 900px) {
          .contact-stage { grid-template-columns: 1fr; }
          .contact-links { max-width: 720px; }
        }

        @media (max-width: 620px) {
          .contact-pitch h2 { font-size: clamp(3.15rem, 15vw, 5.5rem); }
          .contact-email { min-width: 100%; }
          .email-break { display: block; }
          .contact-link { grid-template-columns: 32px 1fr 24px; }
          .contact-link-detail { display: none; }
          .resume-bar { align-items: stretch; flex-direction: column; }
          .resume-download { width: 100%; justify-content: space-between; }
          .footer-inner { align-items: flex-start; flex-direction: column; padding-block: 30px; }
        }
      `}</style>
    </section>
  );
}
