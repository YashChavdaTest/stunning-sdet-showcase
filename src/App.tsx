import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";

const chapters = [
  { id: "intro", label: "Introduction" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Specialties" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" },
];

const experience = [
  {
    index: "01",
    eyebrow: "AUTOMATION AT SCALE",
    title: "Building automation that lasts",
    text: "Led a six-person QA team working with a Selenium C# and xUnit BDD suite of more than 4,000 automated tests, with Jenkins execution and ongoing reliability work.",
    tech: "Selenium · C# · xUnit BDD · Jenkins",
  },
  {
    index: "02",
    eyebrow: "AI-NATIVE QUALITY ENGINEERING",
    title: "Turning requirements into evidence",
    text: "Built agent-assisted workflows connecting tickets, generated test cases, Playwright execution, and traceability through MCP, Jira/Xray and Azure Test Plans.",
    tech: "Python · Playwright · MCP · Azure DevOps",
  },
  {
    index: "03",
    eyebrow: "PERFORMANCE & DELIVERY",
    title: "Making performance part of CI",
    text: "Created a k6 performance-testing framework integrated with Azure DevOps and Grafana, including visibility into Azure resource utilization.",
    tech: "k6 · Grafana · Azure Pipelines",
  },
];

const specialties = [
  {
    no: "01",
    title: "Test architecture",
    description: "Designing reusable frameworks, reducing flaky tests and making automated results trustworthy.",
    tags: ["Playwright", "PyTest", "Selenium", "Appium"],
  },
  {
    no: "02",
    title: "Agentic & AI testing",
    description: "Applying agents, MCP and evaluation techniques to real test-development and RAG workflows.",
    tags: ["Python", "MCP", "RAG", "AI evaluation"],
  },
  {
    no: "03",
    title: "CI/CD & observability",
    description: "Embedding automation and performance feedback into the engineering delivery cycle.",
    tags: ["Azure DevOps", "Jenkins", "k6", "Grafana"],
  },
  {
    no: "04",
    title: "Engineering leadership",
    description: "Leading teams, reviewing automation code, mentoring engineers and improving delivery practices.",
    tags: ["Architecture", "Code reviews", "Mentoring"],
  },
];

const personalProjects = [
  {
    no: "01",
    monogram: "PP",
    title: "ProjectPocket",
    category: "NATIVE iOS APP",
    description: "A local-first personal project manager for tasks, budgets, expenses, photos and focus time — built with SwiftUI and SwiftData.",
    stack: "SwiftUI / SwiftData / iOS",
    status: "Personal build",
  },
  {
    no: "02",
    monogram: "TB",
    title: "TestBrain",
    category: "QA PRODUCT EXPERIMENT",
    description: "An exploration of modular, AI-assisted software testing with a web application and supporting engineering components.",
    stack: "React / Testing / AI",
    status: "Experiment",
  },
  {
    no: "03",
    monogram: "WA",
    title: "WinOverATS",
    category: "CAREER SOFTWARE",
    description: "A resume-tailoring workspace focused on verified experience, job-specific versions and reviewable AI suggestions.",
    stack: "Next.js / TypeScript / Supabase",
    status: "In development",
  },
];

function App() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    if (!("IntersectionObserver" in window)) return;
    const ratios = new Map<Element, number>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        ratios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
      let best = 0;
      let maxRatio = 0;
      elements.forEach((element, index) => {
        const ratio = ratios.get(element) ?? 0;
        if (ratio > maxRatio) { maxRatio = ratio; best = index; }
      });
      if (maxRatio > 0) setActive(best);
    }, { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.8] });
    elements.forEach((element) => observer.observe(element));
    document.documentElement.classList.add("motion-ready");
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  const navigate = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="site-header">
        <a href="#intro" className="wordmark" onClick={navigate} aria-label="Yash Chavda — back to introduction">
          Yash Chavda<span className="wordmark-dot">.</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {chapters.map((chapter, index) => (
            <a key={chapter.id} href={`#${chapter.id}`} onClick={navigate} className={active === index ? "nav-link is-active" : "nav-link"} aria-current={active === index ? "location" : undefined}>
              {chapter.label}
            </a>
          ))}
        </nav>
        <div className="header-end">
          <span className="header-counter" aria-label={`Section ${active + 1} of 5`}>0{active + 1} <span>/</span> 05</span>
          <button className="mobile-menu" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <nav className="chapter-rail" aria-label="Chapter navigation">
        {chapters.map((chapter, index) => (
          <a href={`#${chapter.id}`} key={chapter.id} className={active === index ? "rail-link is-active" : "rail-link"} aria-label={`Go to ${chapter.label}`} aria-current={active === index ? "location" : undefined}>
            <span />
          </a>
        ))}
      </nav>

      <main>
        <section id="intro" data-chapter="0" className="chapter chapter-intro">
          <div className="shell chapter-inner intro-layout">
            <div className="intro-main">
              <p className="overline"><span className="overline-mark" /> LEAD QA · TEST AUTOMATION ARCHITECT</p>
              <h1>I'm Yash.<br />I engineer <span>confidence.</span></h1>
              <p className="intro-description">I design automation systems, build reliable delivery pipelines and apply AI to make software quality more effective. Almost a decade of hands-on engineering — from writing tests to leading the systems behind them.</p>
              <div className="intro-actions">
                <a href="#experience" className="primary-action">Explore my work <ArrowRight size={18} /></a>
                <a href="#connect" className="quiet-action">Get in touch <ArrowUpRight size={17} /></a>
              </div>
            </div>
            <div className="intro-aside">
              <div className="aside-top">AN ENGINEERING MINDSET</div>
              <p>Quality isn't the number of tests you run. It's how clearly you understand the risk before you ship.</p>
              <div className="aside-bottom"><span>ARCHITECTURE</span><span>·</span><span>AUTOMATION</span><span>·</span><span>AI</span></div>
            </div>
            <a href="#experience" className="next-hint">SCROLL TO EXPLORE <ArrowDown size={16} /></a>
          </div>
        </section>

        <section id="experience" data-chapter="1" className="chapter chapter-experience">
          <div className="shell chapter-inner split-layout">
            <div className="chapter-lead">
              <p className="section-number">01 / PROFESSIONAL WORK</p>
              <h2>What I've<br /><em>worked on.</em></h2>
              <p>My experience is built around solving engineering problems, not collecting tools. These are three areas where I've spent real time building and leading.</p>
              <span className="subtle-rule" />
              <p className="aside-caption">ALSO: CYPRESS → PLAYWRIGHT MODERNIZATION · RAG TESTING · MOBILE AUTOMATION</p>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article key={item.index} className="experience-item">
                  <span className="item-count">{item.index}</span>
                  <div>
                    <span className="item-category">{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="item-tech">{item.tech}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" data-chapter="2" className="chapter chapter-expertise">
          <div className="shell chapter-inner">
            <div className="chapter-heading">
              <div>
                <p className="section-number">02 / SPECIAL SKILLS</p>
                <h2>How I bring<br /><em>value to a team.</em></h2>
              </div>
              <p>Deep engineering knowledge, practical automation and the judgment to know where it matters.</p>
            </div>
            <div className="specialty-grid">
              {specialties.map((skill) => (
                <article key={skill.no} className="specialty">
                  <span className="item-count">{skill.no}</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className="tag-list">{skill.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" data-chapter="3" className="chapter chapter-projects">
          <div className="shell chapter-inner">
            <div className="chapter-heading">
              <div>
                <p className="section-number">03 / PERSONAL PROJECTS</p>
                <h2>What I build<br /><em>for myself.</em></h2>
              </div>
              <p>Outside client delivery, I explore ideas by making products. A few projects from my own repositories.</p>
            </div>
            <div className="projects-grid">
              {personalProjects.map((project) => (
                <article key={project.no} className="project-card">
                  <div className="project-top"><span className="project-monogram">{project.monogram}</span><span className="project-number">{project.no} / 03</span></div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta"><span>{project.stack}</span><span>{project.status}</span></div>
                </article>
              ))}
            </div>
            <p className="projects-footnote">These projects are currently in private repositories; the summaries describe the work without pretending they are public demos.</p>
          </div>
        </section>

        <section id="connect" data-chapter="4" className="chapter chapter-connect">
          <div className="shell chapter-inner contact-layout">
            <div className="contact-content">
              <p className="section-number">04 / LET'S CONNECT</p>
              <h2>Good engineering<br />starts with a <em>conversation.</em></h2>
              <p>If you're building a testing platform, modernizing automation, evaluating AI systems or growing an engineering team, I'd enjoy talking.</p>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/yashkumar-chavda/" target="_blank" rel="noopener noreferrer">LinkedIn <Linkedin size={18} /><ArrowUpRight size={18} /></a>
                <a href="https://github.com/YashChavdaTest" target="_blank" rel="noopener noreferrer">GitHub <Github size={18} /><ArrowUpRight size={18} /></a>
              </div>
            </div>
            <footer className="site-footer">
              <span>© {new Date().getFullYear()} Yash Chavda</span>
              <span>Made to be read, not just scrolled.</span>
              <a href="#intro">Back to the beginning ↑</a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
