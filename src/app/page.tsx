import Link from "next/link";
import Image from "next/image";
import GitHubActivity from "@/components/GitHubActivity";
import { featuredWork, services, skillGroups } from "@/data/portfolio";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Piyush Makad",
    jobTitle: "Backend & Full-Stack Engineer",
    email: "mailto:piyush.makad16@gmail.com",
    url: "https://portfolio-piyush-steel.vercel.app/",
    sameAs: [
      "https://github.com/piyushmakad",
      "https://www.linkedin.com/in/piyush-makad-758834244/",
      "https://www.upwork.com/freelancers/~0130e9a68c27cb6d66",
    ],
    knowsAbout: ["Node.js", "TypeScript", "Next.js", "PostgreSQL", "Redis", "Kafka", "Elasticsearch", "Distributed systems"],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
      <header className="site-header shell">
        <Link href="/" className="wordmark" aria-label="Piyush Makad — home">
          PM<span className="wordmark-dot">.</span>
        </Link>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="https://www.upwork.com/freelancers/~0130e9a68c27cb6d66" target="_blank" rel="noreferrer">Upwork</a>
          <a href="/Piyush-Makad-Resume.pdf" target="_blank">Résumé</a>
        </nav>
        <a className="availability" href="#contact">
          <span className="status-dot" /> Available for select work
        </a>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-intro">
          <Image
            className="hero-portrait"
            src="/piyush-makad-portrait.png"
            alt="Piyush Makad in his workspace"
            width={88}
            height={88}
            priority
          />
          <div className="hero-identity">
            <p className="hero-name">Piyush Makad<span>Backend &amp; Full-Stack Engineer · India</span></p>
            <p className="focus-line">Distributed systems <i>·</i> Real-time platforms <i>·</i> Applied AI</p>
          </div>
        </div>
        <h1 id="hero-title">I build backend systems that stay <em>fast, reliable</em> and understandable at production scale.</h1>
        <div className="hero-bottom">
          <p className="hero-copy">I take product ideas from rough requirements to working software—across distributed backends, real-time messaging, and practical AI products.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore selected work <Arrow /></a>
            <a className="text-link" href="/Piyush-Makad-Resume.pdf" target="_blank">Download résumé <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Selected engineering results">
        <div className="shell proof-grid">
          <div><strong>1 TB</strong><span>message collection partitioned</span></div>
          <div><strong>200K+</strong><span>messages processed daily</span></div>
          <div><strong>10K</strong><span>order-book operations / sec</span></div>
          <div><strong>&lt;1%</strong><span>message decryption failures</span></div>
          <div><strong>&lt;150ms</strong><span>contact lookup latency</span></div>
        </div>
      </section>

      <section id="work" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Career & selected work</p>
          <h2>Systems I helped ship—and what changed afterward.</h2>
          <p>Production work and independent products, presented through ownership, engineering decisions and outcomes.</p>
        </div>
        <div className="work-list">
          {featuredWork.map((item, index) => (
            <article className={`work-card tone-${index + 1}`} key={item.slug}>
              <div className="work-number">0{index + 1}</div>
              <div className="work-content">
                <p className="work-kicker">{item.type}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <ul className="tag-list" aria-label="Technologies used">
                  {item.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
              <div className="work-result">
                <span>{item.metricLabel}</span><strong>{item.metric}</strong>
                <Link href={`/work/${item.slug}`} className="card-link">Read case study <Arrow /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section section-ink">
        <div className="shell">
          <div className="section-heading light-heading">
            <p className="eyebrow">Experience</p>
            <h2>Building across the stack, with a bias toward production ownership.</h2>
          </div>
          <div className="timeline">
            <article>
              <div className="timeline-meta"><span>2025 — Present</span><span>Remote</span></div>
              <div><h3>Full-Stack Developer</h3><p className="company">ChatDaddy</p></div>
              <p>Building WhatsApp Business capabilities, AI analytics and workflow automation. Improved multi-channel reliability and designed hot/cold data access backed by Elasticsearch.</p>
            </article>
            <article>
              <div className="timeline-meta"><span>2024 — 2025</span><span>India</span></div>
              <div><h3>Software Development Engineer I</h3><p className="company">CineStox</p></div>
              <p>Built a real-time Node.js order-book service, introduced distributed Redis caching, and shipped event-driven payment reconciliation.</p>
            </article>
            <article>
              <div className="timeline-meta"><span>2020 — 2024</span><span>Jaipur</span></div>
              <div><h3>B.Tech, Computer Science</h3><p className="company">SKIT Jaipur · 8.90 CGPA</p></div>
              <p>Specialized in artificial intelligence while building a strong foundation in software engineering and competitive programming.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell product-lab" aria-labelledby="lab-title">
        <div className="section-heading">
          <p className="eyebrow">Building independently</p>
          <h2 id="lab-title">Products built to learn the whole system.</h2>
          <p>My independent work is where I explore AI interfaces, retrieval, voice agents and product delivery end to end.</p>
        </div>
        <div className="lab-grid">
          <a href="https://prep-time.vercel.app/" target="_blank" rel="noreferrer" className="lab-card lab-primary">
            <div><span className="lab-index">01</span><span className="live-pill">Live</span></div>
            <h3>PrepTime</h3>
            <p>Role-aware voice interviews with structured, criteria-based feedback.</p>
            <span className="lab-link">Open product <Arrow /></span>
          </a>
          <a href="https://ai-github-app.onrender.com/" target="_blank" rel="noreferrer" className="lab-card">
            <div><span className="lab-index">02</span><span className="live-pill">Live</span></div>
            <h3>AutoGit AI</h3>
            <p>Repository summaries, semantic code search and meeting transcription in one developer workspace.</p>
            <span className="lab-link">Open product <Arrow /></span>
          </a>
          <a href="https://github.com/piyushmakad/Pulseflow" target="_blank" rel="noreferrer" className="lab-card">
            <div><span className="lab-index">03</span><span className="wip-pill">Building</span></div>
            <h3>PulseFlow</h3>
            <p>A backend-first system written in Go, designed around explicit boundaries and durable infrastructure.</p>
            <span className="lab-link">View repository <Arrow /></span>
          </a>
        </div>
      </section>

      <GitHubActivity />

      <section id="services" className="section shell services-layout">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">How I can help</p>
          <h2>From fuzzy problem to production.</h2>
          <p>Focused engagements for product teams, founders, and engineering organizations.</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article key={service.title}><span>0{index + 1}</span><div><h3>{service.title}</h3><p>{service.description}</p></div></article>
          ))}
        </div>
      </section>

      <section className="stack-section shell" aria-labelledby="stack-title">
        <div className="skills-heading">
          <div>
            <p className="eyebrow">Technical toolkit</p>
            <h2 id="stack-title">A full-stack toolkit, organized by where it creates value.</h2>
          </div>
          <p>I go deepest in TypeScript, Node.js, databases, messaging and production backend systems. The wider toolkit helps me own features end to end.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-title"><span>0{index + 1}</span><h3>{group.title}</h3></div>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-grid">
          <p className="eyebrow">Let&apos;s build something</p>
          <div>
            <h2>Have a hard engineering problem?</h2>
            <p className="contact-copy">I&apos;m open to full-time backend or full-stack roles and selected freelance product engagements.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:piyush.makad16@gmail.com">Email me <Arrow /></a>
            <a href="https://www.upwork.com/freelancers/~0130e9a68c27cb6d66" target="_blank" rel="noreferrer">Hire me on Upwork <Arrow /></a>
            <a href="https://www.linkedin.com/in/piyush-makad-758834244/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="/Piyush-Makad-Resume.pdf" target="_blank">Download résumé <Arrow /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© {new Date().getFullYear()} Piyush Makad</span>
        <a href="mailto:piyush.makad16@gmail.com">piyush.makad16@gmail.com</a>
        <span>Full-stack engineer · India / Remote</span>
      </footer>
    </main>
  );
}
