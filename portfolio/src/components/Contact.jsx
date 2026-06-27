import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref} className="animate-on-scroll">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's build something amazing together
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info animate-on-scroll-left">
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:ayan.shaikh@example.com">ayan.shaikh@example.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/ayan-shaikh" target="_blank">github.com/ayan-shaikh</a>
              </div>
            </div>
          </div>

          <form className="contact-form animate-on-scroll-right" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Your Name" className="form-input" required />
              <input type="email" placeholder="Your Email" className="form-input" required />
            </div>
            <input type="text" placeholder="Subject" className="form-input" required />
            <textarea placeholder="Your Message" className="form-textarea" rows="5" required></textarea>
            <button type="submit" className="btn-primary form-btn">
              Send Message
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 Ayan Shaikh. Built with React &amp; ❤️</p>
            <div className="footer-links">
              <a href="#hero">Home</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 48px;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s;
        }

        .contact-card:hover {
          border-color: var(--accent-1);
          transform: translateX(8px);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(108, 99, 255, 0.1);
          border-radius: 12px;
          color: var(--accent-1);
          flex-shrink: 0;
        }

        .contact-card h4 {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .contact-card a,
        .contact-card p {
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .contact-card a:hover {
          color: var(--accent-1);
        }

        .contact-form {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-primary);
          font-size: 0.95rem;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.3s;
          outline: none;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--accent-1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--text-secondary);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-btn {
          align-self: flex-start;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
        }

        .footer {
          margin-top: 100px;
          padding: 32px 0;
          border-top: 1px solid var(--border-color);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-content p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: var(--accent-1);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .footer-content {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
