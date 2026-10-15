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
    jobTitle: "Full Stack AI Engineer",
    email: "mailto:piyush.makad16@gmail.com",
    url: "https://portfolio-piyush-steel.vercel.app/",
    sameAs: [
      "https://github.com/piyushmakad",
      "https://www.linkedin.com/in/piyush-makad-758834244/",
      "https://www.upwork.com/freelancers/~0130e9a68c27cb6d66",
    ],
    knowsAbout: ["LLM applications", "MCP", "OpenAI Responses API", "React", "Node.js", "TypeScript", "Go", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Elasticsearch", "Distributed systems"],
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
            <p className="hero-name">Piyush Makad<span>Full Stack AI Engineer · India / Remote</span></p>
            <p className="focus-line">Production LLM products <i>·</i> React to backend <i>·</i> Distributed systems</p>
          </div>
        </div>
        <h1 id="hero-title">I ship AI products <em>end to end,</em> backed by systems built to scale.</h1>
        <div className="hero-bottom">
          <p className="hero-copy">At ChatDaddy, I built customer-facing LLM workflows, a 120-tool MCP platform, and AI-assisted support systems. I own the React experience, model and tool integration, backend architecture, and production reliability.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore selected work <Arrow /></a>
            <a className="text-link" href="/Piyush-Makad-Resume.pdf" target="_blank">Download résumé <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Selected engineering results">
        <div className="shell proof-grid">
          <div><strong>120</strong><span>MCP tools shipped</span></div>
          <div><strong>300+</strong><span>teams using paid Daily AI Reports</span></div>
          <div><strong>500K+</strong><span>messages processed daily</span></div>
          <div><strong>1 TB</strong><span>message collection partitioned</span></div>
          <div><strong>290K+</strong><span>API operations removed daily</span></div>
          <div><strong>&lt;150ms</strong><span>contact lookup latency</span></div>
          <div><strong>10K</strong><span>order-book ops/s, MVP estimate</span></div>
          <div><strong>&lt;1%</strong><span>decryption failures on WhatsApp retries</span></div>
        </div>
      </section>

      <section id="work" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Career & selected work</p>
          <h2>AI products shipped. Backend systems owned.</h2>
          <p>Production LLM features, tool orchestration, support automation, and the high-volume infrastructure behind them.</p>
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
            <h2>Full-stack product delivery with deep backend ownership.</h2>
          </div>
          <div className="timeline">
            <article>
              <div className="timeline-meta"><span>2025 — Present</span><span>Remote</span></div>
              <div><h3>Full-Stack Developer</h3><p className="company">ChatDaddy</p></div>
              <p>Shipped a 120-tool MCP platform, AI prompt-to-flow generation, paid Daily AI Reports, and WhatsApp Business insights. Built React interfaces and model-backed services while optimizing high-volume messaging, data access, and incident response.</p>
            </article>
            <article>
              <div className="timeline-meta"><span>2024 — 2025</span><span>India</span></div>
              <div><h3>Software Development Engineer I</h3><p className="company">CineStox</p></div>
              <p>Built a Kafka and Socket.IO order-book MVP, introduced Redis caching that reduced database load by 40%, and shipped payment and notification services.</p>
            </article>
            <article>
              <div className="timeline-meta"><span>2020 — 2024</span><span>Jaipur</span></div>
              <div><h3>B.Tech, Computer Science</h3><p className="company">SKIT Jaipur · 8.90 CGPA</p></div>
              <p>Built a foundation in software engineering, algorithms, databases, and system design.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell product-lab" aria-labelledby="lab-title">
        <div className="section-heading">
          <p className="eyebrow">Independent engineering</p>
          <h2 id="lab-title">Products and systems I build independently.</h2>
          <p>AI products with working interfaces, plus PulseFlow: a completed Go system for durable event ingestion and notification delivery.</p>
        </div>
        <div className="lab-grid">
          <a href="https://github.com/piyushmakad/Pulseflow" target="_blank" rel="noreferrer" className="lab-card lab-primary">
            <div><span className="lab-index">01</span><span className="live-pill">Completed</span></div>
            <h3>PulseFlow</h3>
            <p>Built a multi-tenant Go event and notification system with authenticated APIs, a PostgreSQL outbox, Kafka, idempotency, bounded workers, and durable retries.</p>
            <span className="lab-link">View repository <Arrow /></span>
          </a>
          <a href="https://ai-github-app.onrender.com/" target="_blank" rel="noreferrer" className="lab-card">
            <div><span className="lab-index">02</span><span className="live-pill">Live</span></div>
            <h3>AutoGit AI</h3>
            <p>Repository summaries, semantic code search and meeting transcription in one developer workspace.</p>
            <span className="lab-link">Open product <Arrow /></span>
          </a>
          <a href="https://prep-time.vercel.app/" target="_blank" rel="noreferrer" className="lab-card">
            <div><span className="lab-index">03</span><span className="live-pill">Live</span></div>
            <h3>PrepTime</h3>
            <p>Voice interview practice with role-aware conversations and structured feedback.</p>
            <span className="lab-link">Open product <Arrow /></span>
          </a>
        </div>
      </section>

      <GitHubActivity />

      <section id="services" className="section shell services-layout">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">How I can help</p>
          <h2>From AI idea to production product.</h2>
          <p>Model integration, React interfaces, backend services, and reliable operation after launch.</p>
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
            <h2 id="stack-title">The tools behind the systems.</h2>
          </div>
          <p>I build across React, TypeScript, LLM workflows, and MCP, with deep experience in Node.js, event-driven services, databases, and production debugging.</p>
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
            <p className="contact-copy">I&apos;m open to Full Stack AI Engineer roles where I can ship useful AI products and own the backend systems that make them dependable.</p>
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
        <span>Full Stack AI Engineer · India / Remote</span>
      </footer>
    </main>
  );
}
