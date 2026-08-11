const skills = {
  "Frontend & UI": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "Bootstrap",
    "React Foundations · Learning",
  ],
  "Backend & Programming": [
    "Python",
    "Django",
    "C",
    "C++",
    "OOP",
    "REST Concepts",
  ],
  "Data & Tools": [
    "MySQL",
    "SQL & PL/SQL",
    "Git & GitHub",
    "VS Code",
    "MS Office",
    "AI-assisted Development",
  ],
};

const projects = [
  {
    number: "01",
    title: "New Lucky Embroidery",
    eyebrow: "Business website · Ahmedabad",
    summary:
      "A responsive product showcase for a local embroidery business, designed to turn product browsing into direct WhatsApp enquiries.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    status: "Business Web",
    metric: "Mobile-first",
  },
  {
    number: "02",
    title: "MovieVerse",
    eyebrow: "Entertainment web app · Personal build",
    summary:
      "A visual movie-platform prototype with a structured browsing experience, modern cards, responsive layouts and deployment-ready workflows.",
    tags: ["JavaScript", "UI Design", "Web App", "Deployment"],
    status: "Web App",
    metric: "Responsive",
  },
  {
    number: "03",
    title: "E-commerce Storefront",
    eyebrow: "Shopping experience · Local prototype",
    summary:
      "A storefront concept focused on clean product discovery, clear calls to action and an easy path from product interest to purchase intent.",
    tags: ["HTML", "CSS", "JavaScript", "UX Flow"],
    status: "Commerce",
    metric: "Catalog UI",
  },
  {
    number: "04",
    title: "3D Web Experience",
    eyebrow: "Interactive experiment · Creative development",
    summary:
      "An experimental interface exploring depth, motion and 3D-inspired visuals while keeping the experience responsive across screen sizes.",
    tags: ["Creative Code", "Interaction", "CSS 3D", "Responsive"],
    status: "Experiment",
    metric: "Interactive",
  },
  {
    number: "05",
    title: "AI Chatbot Concept",
    eyebrow: "Conversational product · Ongoing exploration",
    summary:
      "A chatbot interface concept built to understand conversational UX, prompt-led workflows and how AI can make everyday web products more useful.",
    tags: ["AI Exploration", "Chat UI", "Prompt Design", "Prototype"],
    status: "AI Build",
    metric: "In progress",
  },
];

const NavLink = ({ href, children }) => (
  <a className="nav-link" href={href}>
    {children}
  </a>
);

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Ayan Shaikh home">
          AYAN <span>·</span> SHAIKH
        </a>
        <nav aria-label="Main navigation">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-art" aria-label="Reserved space for Ayan's portrait">
          <div className="portrait-monogram">AS</div>
          <div className="image-slot-label">01 / PORTRAIT IMAGE SLOT</div>
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="location-line">Ahmedabad, India — Open to opportunities</p>
          <h1>
            <span>AYAN</span>
            <span className="outline-text">SHAIKH</span>
          </h1>
          <p className="hero-intro">
            BCA graduate, <strong>software developer</strong> and full-stack learner —
            building practical web experiences with Python, Django, JavaScript and SQL.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button" href="mailto:ayan.shaikh@orahconsultancy.com">
              Get in Touch
            </a>
            <a className="button" href="#about">
              My Story ↘
            </a>
            <a
              className="button"
              href="https://github.com/shaikhaayan1812/Ayan-Protfolio"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
          <div className="section-jumps" aria-label="Jump to portfolio section">
            <a href="#about">01 — About</a>
            <a href="#skills">02 — Skills</a>
            <a href="#experience">03 — Work</a>
            <a href="#projects">04 — Projects</a>
            <a href="#education">05 — Education</a>
            <a href="#contact">06 — Contact</a>
          </div>
        </div>
        <div className="hero-stats" aria-label="Portfolio highlights">
          <div><strong>5<span>+</span></strong><small>Project Builds</small></div>
          <div><strong>120<span>H</span></strong><small>Python Internship</small></div>
          <div><strong>BCA</strong><small>Graduate</small></div>
          <div><strong>2026</strong><small>Full-Stack Track</small></div>
        </div>
      </section>

      <section className="content-section about-section" id="about">
        <div className="section-kicker">01 — About</div>
        <div className="section-grid">
          <h2>Learning by building.<br />Growing with every project.</h2>
          <div className="about-copy">
            <p>
              I&apos;m <strong>Ayan Shaikh</strong>, a BCA graduate from Ahmedabad who
              enjoys turning ideas into useful, clear and responsive websites.
            </p>
            <p>
              My foundation includes <strong>Python, Django, SQL, HTML, CSS and
              JavaScript</strong>. I&apos;m currently strengthening my modern full-stack
              skills through structured training and hands-on projects.
            </p>
            <p>
              Alongside development, my work in career outreach has sharpened my
              communication, research and business understanding — so I think about
              both the code and the person using it.
            </p>
          </div>
        </div>
        <div className="principles-grid">
          <article><span>01</span><h3>Builder&apos;s Mindset</h3><p>I learn fastest by shipping real interfaces, testing them and improving the details.</p></article>
          <article><span>02</span><h3>Practical First</h3><p>I focus on understandable layouts, responsive behavior and useful customer actions.</p></article>
          <article><span>03</span><h3>Always Exploring</h3><p>I&apos;m actively expanding into React, stronger backend patterns and AI-enabled products.</p></article>
          <article><span>04</span><h3>People Aware</h3><p>Recruiting outreach experience helps me communicate clearly and understand real needs.</p></article>
        </div>
      </section>

      <section className="content-section" id="skills">
        <div className="section-kicker">02 — Skills</div>
        <div className="section-title-row">
          <h2>Tools &amp; Tech</h2>
          <p>A growing toolkit backed by coursework, practical training and project work.</p>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items], groupIndex) => (
            <article className="skill-group" key={group}>
              <div className="skill-group-head"><span>0{groupIndex + 1}</span><h3>{group}</h3></div>
              <div className="skill-tags">
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="experience">
        <div className="section-kicker">03 — Experience</div>
        <div className="section-title-row">
          <h2>Work History</h2>
          <p>Technical learning strengthened by communication, research and client-facing work.</p>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">2026 — Present</div>
            <div>
              <p className="timeline-type">Professional Experience</p>
              <h3>Lead Generation &amp; Career Outreach</h3>
              <p className="company">Orah Consultancy Services</p>
              <ul>
                <li>Research professional backgrounds and connect candidates with relevant career opportunities.</li>
                <li>Manage LinkedIn outreach, candidate conversations and follow-up coordination.</li>
                <li>Translate role requirements into clear, concise communication for different audiences.</li>
              </ul>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">120 Hours</div>
            <div>
              <p className="timeline-type">Technical Training</p>
              <h3>Python &amp; Django Internship</h3>
              <p className="company">Practical Web Development Training</p>
              <ul>
                <li>Practiced Python fundamentals, backend logic and Django project structure.</li>
                <li>Worked with database concepts, forms and web-development workflows.</li>
                <li>Strengthened debugging, problem solving and project organization.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-kicker">04 — Projects</div>
        <div className="section-title-row">
          <h2>Selected Builds</h2>
          <p>Each project represents a different stage of learning, exploration and practical execution.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <details className="project-card" key={project.number}>
              <summary>
                <div className="project-number">Project — {project.number}</div>
                <div className="project-main">
                  <p>{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-meta">
                  <span>{project.status}</span>
                  <strong>{project.metric}</strong>
                </div>
                <span className="project-toggle" aria-hidden="true">+</span>
              </summary>
              <div className="project-detail">
                <div className="project-placeholder">
                  <span>PROJECT SCREENSHOT</span>
                  <strong>{project.number}</strong>
                </div>
                <div>
                  <p>{project.summary}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="content-section" id="education">
        <div className="section-kicker">05 — Education</div>
        <div className="section-title-row">
          <h2>Academic Background</h2>
          <p>Formal education plus continuous, hands-on technical development.</p>
        </div>
        <div className="education-list">
          <article>
            <span>Completed</span>
            <div><h3>Bachelor of Computer Applications</h3><p>BCA · Computer Applications &amp; Software Foundations</p></div>
          </article>
          <article>
            <span>May 2026 — Present</span>
            <div><h3>Full-Stack Development Program</h3><p>TOPS Technologies · Ahmedabad, India</p></div>
          </article>
          <article>
            <span>Practical Training</span>
            <div><h3>Python with Django</h3><p>120-hour internship-focused development program</p></div>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-kicker">06 — Contact</div>
        <p className="contact-overline">Have a junior developer role, internship or project in mind?</p>
        <h2>Let&apos;s build something<br /><span>useful together.</span></h2>
        <a className="contact-email" href="mailto:ayan.shaikh@orahconsultancy.com">
          ayan.shaikh@orahconsultancy.com ↗
        </a>
        <div className="contact-links">
          <a href="#projects">View Projects</a>
          <a href="https://github.com/shaikhaayan1812/Ayan-Protfolio" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="mailto:ayan.shaikh@orahconsultancy.com?subject=Resume%20Request%20for%20Ayan%20Shaikh">Request Resume</a>
          <a href="#home">Back to Top ↑</a>
        </div>
      </section>

      <footer>
        <span>© 2026 Ayan Shaikh · Ahmedabad, India</span>
        <span>Designed with intent · Built while learning</span>
      </footer>
    </main>
  );
}
