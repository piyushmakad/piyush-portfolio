import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredWork, findWork } from "@/data/portfolio";

export const dynamicParams = false;
export function generateStaticParams() { return featuredWork.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const item = findWork((await params).slug);
  return item ? { title: item.title, description: item.summary } : {};
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const item = findWork((await params).slug);
  if (!item) notFound();
  return (
    <main className="case-study">
      <header className="site-header shell">
        <Link href="/" className="wordmark" aria-label="Piyush Makad — home">PM<span className="wordmark-dot">.</span></Link>
        <Link href="/#work" className="back-link">← All work</Link>
      </header>
      <section className="case-hero shell">
        <p className="eyebrow">{item.type}</p><h1>{item.title}</h1><p className="case-summary">{item.summary}</p>
        <div className="case-metric"><span>{item.metricLabel}</span><strong>{item.metric}</strong></div>
      </section>
      <div className="case-body shell">
        <aside>
          <p className="eyebrow">Toolkit</p><ul className="case-tools">{item.technologies.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          {(item.github || item.demo) && <div className="case-links">{item.demo && <a href={item.demo} target="_blank" rel="noreferrer">Live product ↗</a>}{item.github && <a href={item.github} target="_blank" rel="noreferrer">Source code ↗</a>}</div>}
        </aside>
        <article>
          <section><p className="eyebrow">01 · Context</p><h2>What needed to change</h2><p>{item.context}</p></section>
          <section><p className="eyebrow">02 · Challenge</p><h2>The hard part</h2><p>{item.challenge}</p></section>
          <section><p className="eyebrow">03 · Approach</p><h2>How I approached it</h2><ol>{item.approach.map((step) => <li key={step}>{step}</li>)}</ol></section>
          <section className="outcome"><p className="eyebrow">04 · Outcome</p><h2>What shipped</h2><p>{item.outcome}</p></section>
        </article>
      </div>
      <footer className="site-footer shell"><span>© {new Date().getFullYear()} Piyush Makad</span><Link href="/#contact">Start a conversation ↗</Link></footer>
    </main>
  );
}
