const skills = {
  "Frontend & UI": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "Bootstrap",
    "Tailwind CSS · Project Exposure",
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
    "Three.js & WebGL",
    "Next.js & TypeScript · Project Exposure",
    "Git & GitHub",
    "VS Code",
    "AI-assisted Development",
  ],
};

const featuredProjects = [
  {
    number: "01",
    title: "MovieVerse",
    eyebrow: "AI-assisted full-stack movie platform · Private repository",
    summary:
      "A full-stack movie discovery prototype with search and filters, JWT authentication, watchlists, ratings and reviews, actor profiles, an admin dashboard and Razorpay test payments.",
    tags: ["Next.js", "React", "TypeScript", "Django REST", "MySQL", "Razorpay"],
    status: "Full Stack",
    metric: "AI-assisted",
    sourceUrl: "https://github.com/shaikhaayan1812/MovieVerse",
    sourceLabel: "Private repository",
  },
  {
    number: "02",
    title: "New Lucky Embroidery",
    eyebrow: "Business website · Ahmedabad",
    summary:
      "A responsive product showcase for a local embroidery business, designed around clear categories and direct WhatsApp enquiries on desktop and mobile.",
    tags: ["Business Website", "Responsive UI", "Product Catalog", "WhatsApp CTA"],
    status: "Live Website",
    metric: "Mobile-first",
    liveUrl: "https://new-lucky-store.ayan-shaikh-018.chatgpt.site",
    sourceUrl: "https://github.com/shaikhaayan1812/luckycollection",
    sourceLabel: "Private repository",
  },
  {
    number: "03",
    title: "STRUTHERS Storefront",
    eyebrow: "AI-assisted e-commerce prototype · Local build",
    summary:
      "A locally developed e-commerce prototype where I worked through requirement planning, setup, UI customization, product discovery flows and functional testing.",
    tags: ["E-commerce", "UI Customization", "Local Setup", "Testing"],
    status: "Prototype",
    metric: "Local build",
  },
  {
    number: "04",
    title: "Personal Expense Tracker Database",
    eyebrow: "SQL mini-project · TOPS Technologies",
    summary:
      "A MySQL database project with normalized user, category and transaction tables, CRUD operations, joins and a stored procedure for monthly and category summaries.",
    tags: ["MySQL", "SQL", "CRUD", "Joins", "Stored Procedures"],
    status: "Database",
    metric: "SQL project",
    sourceUrl: "https://github.com/shaikhaayan1812/Tops_Work/blob/main/SE%20-%20Database%20Management%20SQL/Mini%20Project%203%20-%20Expense%20Tracker%20DB/Expense_Tracker_Project.sql",
    sourceLabel: "View source",
  },
  {
    number: "05",
    title: "Music Listening Logger",
    eyebrow: "C mini-project · File handling",
    summary:
      "A menu-driven C application that logs seven days of listening time to a file, calculates weekly totals, averages and highest usage, and supports data reset.",
    tags: ["C", "File I/O", "Arrays", "Menu-driven Program"],
    status: "C Project",
    metric: "File handling",
    sourceUrl: "https://github.com/shaikhaayan1812/Tops_Work/blob/main/assesment/Introduction_to_oops/Introduction%20to%20Programming/Practical/Session-Mini-Project/Task-1.c",
    sourceLabel: "View source",
  },
  {
    number: "06",
    title: "Music Profiles Form",
    eyebrow: "HTML & CSS mini-project · TOPS Technologies",
    summary:
      "A responsive form interface for collecting Spotify, YouTube Music and Apple Music profile links, paired with branded preview cards and clear validation-ready fields.",
    tags: ["HTML", "CSS", "Responsive Form", "UI Cards"],
    status: "Frontend",
    metric: "Mini-project",
    sourceUrl: "https://github.com/shaikhaayan1812/Tops_Work/blob/main/SE-%20Introduction%20to%20Web%20Technologies%20-%20HTML%20and%20CSS%20-%20Copy/MiniPorject-HTML-CSS/index.html",
    sourceLabel: "View source",
  },
];

const archiveProjects = [
  {
    number: "07",
    title: "3D Model Viewer — Skull",
    category: "Creative Development",
    summary: "Interactive Three.js skull viewer with orbit controls, auto-rotation, texture mapping and layered atmospheric lighting.",
    tags: ["Three.js", "OBJLoader", "WebGL", "3D"],
    folder: "3D/1",
  },
  {
    number: "08",
    title: "3D Model Viewer — PBR",
    category: "Creative Development",
    summary: "Physically based 3D viewer with shadows, clearcoat, environment mapping and inertial drag rotation.",
    tags: ["Three.js", "PBR", "WebGL", "Shadows"],
    folder: "3D/2",
  },
  {
    number: "09",
    title: "3D Flying Game",
    category: "Browser Game",
    summary: "Three.js flying game with coin collection, obstacles, particles, shadow-mapped lighting and a live height HUD.",
    tags: ["Three.js", "Game Dev", "Particles", "3D Physics"],
    folder: "Game",
  },
  {
    number: "10",
    title: "Tandoori Nights",
    category: "Restaurant Website",
    summary: "Multi-page restaurant site with a video hero, cuisine categories, specials menu, table booking and a dark orange-gold theme.",
    tags: ["HTML", "CSS", "Video", "Multi-page"],
    folder: "Task_1",
  },
  {
    number: "11",
    title: "Top College Admission Portal",
    category: "Education Website",
    summary: "Admission portal with courses, fees, scholarships, testimonials and an application form with document upload fields.",
    tags: ["HTML", "CSS", "Forms", "Tables"],
    folder: "Task_2",
  },
  {
    number: "12",
    title: "Iron Forge Gym",
    category: "Fitness Website",
    summary: "Bootstrap gym website with preloader, membership plans, trainers, BMI calculator, testimonials and map integration.",
    tags: ["Bootstrap 5", "HTML", "CSS", "JavaScript"],
    folder: "Task_3",
  },
  {
    number: "13",
    title: "CityCare Hospital",
    category: "Healthcare Website",
    summary: "Hospital site with patient registration, doctor selection, appointment scheduling, guidelines and senior-citizen support.",
    tags: ["HTML", "CSS", "Forms", "Tables"],
    folder: "Task_4",
  },
  {
    number: "14",
    title: "VoyageVista",
    category: "Travel Website",
    summary: "Luxury travel experience with destination packages, CSS target modals, itineraries, pricing and trip highlights.",
    tags: ["HTML", "CSS", "CSS Modals", "Responsive"],
    folder: "Task_5",
  },
  {
    number: "15",
    title: "Music Library",
    category: "Media Website",
    summary: "Music browsing site with genre categories, audio players, a Top 10 chart, embedded videos and a contact form.",
    tags: ["HTML", "CSS", "Audio", "Media"],
    folder: "Task_6",
  },
  {
    number: "16",
    title: "Interstellar Movie Portal",
    category: "Entertainment Website",
    summary: "Movie information portal with cast, ratings, trailer media, upcoming titles and audience reviews.",
    tags: ["HTML", "CSS", "Media", "Gallery"],
    folder: "Task_7",
  },
  {
    number: "17",
    title: "Student Dashboard",
    category: "Dashboard UI",
    summary: "Student dashboard with profile, attendance, assignments and more than 80 filterable notices across academic categories.",
    tags: ["HTML", "CSS", "Tables", "Filters"],
    folder: "Task_8",
  },
  {
    number: "18",
    title: "Product Comparison",
    category: "Commerce UI",
    summary: "Laptop comparison experience with three product tiers, feature checklists, full-spec modals and order confirmation.",
    tags: ["HTML", "CSS", "Modals", "Comparison"],
    folder: "Task_9",
  },
  {
    number: "19",
    title: "TechFest 2026",
    category: "Event Website",
    summary: "Four-day technology festival website with ticket registration, event schedule, sponsors, VIP content and 3D-style cards.",
    tags: ["HTML", "CSS", "Forms", "3D Cards"],
    folder: "Task_10",
  },
  {
    number: "20",
    title: "Nirav Sir Ki School",
    category: "Education Website",
    summary: "School website with video hero, facilities, timetable, admission form, parent feedback, activities and map integration.",
    tags: ["HTML", "CSS", "Video", "Forms"],
    folder: "Task_11",
  },
  {
    number: "21",
    title: "FAQ Portal",
    category: "Support UI",
    summary: "Categorized help centre using accessible details and summary controls, support stats and contact cards.",
    tags: ["HTML", "CSS", "Details/Summary", "Accessibility"],
    folder: "Task_12",
  },
  {
    number: "22",
    title: "Daily News Portal",
    category: "News Website",
    summary: "News portal with breaking ticker, categories, featured stories, live comments, newsletter modal, weather and search.",
    tags: ["HTML", "CSS", "JavaScript", "Dynamic UI"],
    folder: "Task_13",
  },
  {
    number: "23",
    title: "FoodieHub",
    category: "Food Ordering UI",
    summary: "Food-ordering site with categories, twelve menu items, combo offers, size pricing, order form and customer reviews.",
    tags: ["HTML", "CSS", "Menu", "Pricing"],
    folder: "Task_14",
  },
  {
    number: "24",
    title: "SkillUp Institute",
    category: "Education Website",
    summary: "Institute website with mission, courses, faculty, placement statistics, testimonials and registration form.",
    tags: ["HTML", "CSS", "Forms", "Cards"],
    folder: "Task_15",
  },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className="nav-link" href={href}>
    {children}
  </a>
);

export default function Home() {
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
            <a className="button" href="mailto:shaikhaayan1812@gmail.com">
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
          <div><strong>24<span>+</span></strong><small>Verified Builds</small></div>
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
          <h2>Featured Builds</h2>
          <p>Real business work, full-stack prototypes and assessed mini-projects—presented honestly at their current stage.</p>
        </div>
        <div className="project-list">
          {featuredProjects.map((project) => (
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
                  {(project.liveUrl || project.sourceUrl) && (
                    <div className="project-link-row">
                      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live website ↗</a>}
                      {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer">{project.sourceLabel} ↗</a>}
                    </div>
                  )}
                </div>
              </div>
            </details>
          ))}
        </div>
        <div className="archive-heading">
          <div>
            <p className="archive-overline">18 standalone projects · live previews</p>
            <h3>Web &amp; 3D Project Archive</h3>
          </div>
          <p>Open any project directly in your browser, or inspect its source code on GitHub. These builds document my hands-on progress across responsive layouts, forms, media, dashboards, Three.js and browser interaction.</p>
        </div>
        <div className="archive-grid">
          {archiveProjects.map((project) => (
            <article className="archive-card" key={project.number}>
              <div className="archive-card-head">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tag-row">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="archive-actions">
                <a
                  className="archive-link archive-link-live"
                  href={`https://shaikhaayan1812.github.io/Ayan-Protfolio/${project.folder}/`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open live preview of ${project.title}`}
                >
                  Live Preview ↗
                </a>
                <a
                  className="archive-link"
                  href={`https://github.com/shaikhaayan1812/Ayan-Protfolio/tree/master/${project.folder}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View source code for ${project.title}`}
                >
                  View Code ↗
                </a>
              </div>
            </article>
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
        <a className="contact-email" href="mailto:shaikhaayan1812@gmail.com">
          shaikhaayan1812@gmail.com ↗
        </a>
        <a className="contact-phone" href="tel:+919313866346">+91 93138 66346</a>
        <div className="contact-links">
          <a href="#projects">View Projects</a>
          <a href="https://github.com/shaikhaayan1812/Ayan-Protfolio" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/shaikh-ayan-737302385" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:shaikhaayan1812@gmail.com?subject=Resume%20Request%20for%20Ayan%20Shaikh">Request Resume</a>
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
