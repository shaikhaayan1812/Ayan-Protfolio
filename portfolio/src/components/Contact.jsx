import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref} className="animate-on-scroll">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's connect! Reach out for collaborations, opportunities, or just a chat
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info animate-on-scroll-left">
            <a href="https://linkedin.com/in/shaikh-ayan-737302385" target="_blank" className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/shaikh-ayan-737302385</p>
              </div>
            </a>

            <a href="https://www.instagram.com/ayan_shaikh_027/" target="_blank" className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div>
                <h4>Instagram</h4>
                <p>@ayan_shaikh_027</p>
              </div>
            </a>

            <a href="https://wa.me/919313866346" target="_blank" className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h4>WhatsApp</h4>
                <p>+91 9313866346</p>
              </div>
            </a>

            <a href="../Ayan_Shaikh_Resume.pdf" download className="contact-card resume-card">
              <div className="contact-icon" style={{ background: 'rgba(0, 212, 170, 0.1)', color: '#00d4aa' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div>
                <h4>Download Resume</h4>
                <p className="resume-text">Click to download my resume (PDF)</p>
              </div>
            </a>
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
          text-decoration: none;
          cursor: pointer;
        }

        .contact-card:hover {
          border-color: var(--accent-1);
          transform: translateX(8px);
        }

        .resume-card:hover {
          border-color: #00d4aa;
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

        .resume-text {
          color: #00d4aa !important;
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
