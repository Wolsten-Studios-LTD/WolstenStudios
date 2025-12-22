import { useEffect } from 'react';

export function StalworthCaseStudyPage() {
  // Ensure page starts at top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="case-study">
      <style>{`
        :root {
          --ink: #1a1a1a;
          --paper: #f8f6f3;
          --accent: #4A9BA5;
          --muted: #6b6b6b;
          --rule: #d4d0c8;
        }

        .case-study,
        .case-study * {
          box-sizing: border-box;
        }

        .case-study {
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
          background: var(--paper);
          color: var(--ink);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .case-study ::selection {
          background: var(--accent);
          color: var(--paper);
        }

        .case-study .container {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .case-study header {
          padding: 4rem 0 3rem;
          border-bottom: 1px solid var(--rule);
          margin-bottom: 4rem;
        }

        .case-study .meta {
          font-size: 0.75rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .case-study .meta::before {
          content: '';
          display: block;
          width: 2rem;
          height: 2px;
          background: var(--accent);
        }

        .case-study h1 {
          font-size: clamp(2.2rem, 5vw, 3rem);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .case-study .lede {
          font-size: 1.15rem;
          color: var(--muted);
          max-width: 580px;
          line-height: 1.6;
        }

        /* Main content */
        .case-study main {
          padding-bottom: 4rem;
        }

        .case-study section {
          margin-bottom: 3.5rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid rgba(212, 208, 200, 0.5);
        }

        .case-study section:last-of-type {
          border-bottom: none;
        }

        .case-study h2 {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
          padding-left: 1rem;
          border-left: 2px solid var(--accent);
        }

        .case-study p {
          margin-bottom: 1.25rem;
        }

        .case-study p:last-child {
          margin-bottom: 0;
        }

        /* Pull quote */
        .case-study .pull-quote {
          margin: 4rem 0;
          padding: 2rem 0;
          font-size: 1.35rem;
          font-weight: 300;
          font-style: italic;
          color: var(--accent);
          line-height: 1.4;
          text-align: center;
          border-top: 1px solid rgba(212, 208, 200, 0.5);
          border-bottom: 1px solid rgba(212, 208, 200, 0.5);
        }

        /* CTA */
        .case-study .cta {
          text-align: center;
          padding: 5rem 2rem;
          border-top: 1px solid var(--rule);
          margin-top: 0;
          background: var(--paper);
        }

        .case-study .cta .services {
          font-size: 0.7rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 1.5rem;
        }

        .case-study .cta h3 {
          font-size: 1.8rem;
          font-weight: 300;
          margin-bottom: 0.5rem;
        }

        .case-study .cta .subtitle {
          color: var(--muted);
          margin-bottom: 2.5rem;
          font-size: 1rem;
        }

        .case-study .cta-button {
          display: inline-block;
          background: var(--ink);
          color: var(--paper);
          padding: 1rem 2.5rem;
          text-decoration: none;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: background 0.25s ease, transform 0.25s ease;
          will-change: transform;
        }

        .case-study .cta-button:hover {
          background: var(--accent);
          transform: translateY(-1px);
        }

        .case-study .cta-button:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }

        /* Responsive */
        @media (max-width: 600px) {
          .case-study {
            font-size: 16px;
          }

          .case-study .container {
            padding: 0 1.25rem;
          }

          .case-study header {
            padding: 3rem 0 2rem;
            margin-bottom: 3rem;
          }

          .case-study .pull-quote {
            font-size: 1.15rem;
            margin: 3rem 0;
            padding: 1.5rem 0;
          }

          .case-study .cta {
            padding: 4rem 1.5rem;
          }
        }
      `}</style>

      <div className="container">
        <header>
          <div className="meta">Case Study · December 2025</div>
          <h1>Building Stalworth Pro</h1>
          <p className="lede">Trusted professionals—invisible online. We changed that.</p>
        </header>

        <main>
          <section>
            <h2>The Client</h2>
            <p>Stalworth Pro handles cross-border tax and accounting. The kind of work where precision matters and trust is everything.</p>
            <p>From the first call—considered, organised, no wasted time—it was clear we were dealing with professionals. People who knew what they were doing.</p>
            <p>Their website didn't say that.</p>
          </section>

          <section>
            <h2>The Gap</h2>
            <p>Outdated design. Unclear structure. A visual identity that didn't match the people behind it.</p>
            <p>This happens more than you'd think. A business sharpens, the reputation builds—but the website stays frozen. A snapshot of who they were, not who they've become.</p>
            <p>Stalworth had outgrown their own presence. They needed to catch up with themselves.</p>
          </section>

          <section>
            <h2>The Collaboration</h2>
            <p>This wasn't a standard client engagement.</p>
            <p>While I rebuilt their website and refined their brand, Stalworth helped me establish my tax affairs in Cyprus. Two businesses, both early in a new chapter, helping each other forward.</p>
            <p>That changes the dynamic. It stops being transactional. It becomes partnership. The relationship matters—it still does.</p>
          </section>

          <section>
            <h2>The Work</h2>
            <p>Full rebuild. WordPress and Elementor Pro—practical, scalable, and easy for them to manage without us.</p>
            <p>The brief was simple: make the website match the business. Clean. Confident. No unnecessary complexity.</p>
            <p>Every page now says what it needs to say. The structure guides without friction. The design feels like the people behind it—considered, precise, trustworthy.</p>
          </section>

          <section>
            <h2>The Outcome</h2>
            <p>The site is live. The foundation is set.</p>
            <p>Credibility restored. A digital presence that finally reflects two decades of expertise. And a working relationship that continues—this was a starting point, not a handoff.</p>
          </section>

          <div className="pull-quote">
            "A business sharpens, the reputation builds—but the website stays frozen. Stalworth had outgrown their own presence."
          </div>
        </main>
      </div>

      <footer className="cta">
        <div className="container">
          <div className="services">Brand · Web</div>
          <h3>Stalworth Pro is live</h3>
          <p className="subtitle">Cross-border tax. Now with cross-border credibility.</p>
          <a href="https://stalworthpro.com" className="cta-button" target="_blank" rel="noopener noreferrer">Visit Stalworth Pro →</a>
        </div>
      </footer>
    </div>
  );
}
