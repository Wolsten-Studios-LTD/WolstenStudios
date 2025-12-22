import { useEffect, useState } from 'react';

export function BunsAndGunsProposalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Ensure page starts at top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Password: BunsAndGuns2025
    if (password === 'BunsAndGuns2025') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  // Show password gate if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--paper)] flex items-center justify-center px-8">
        <style>{`
          :root {
            --paper: #fafafa;
            --ink: #151419;
            --rule: rgba(0, 0, 0, 0.12);
            --proposal-accent: #00A5C7;
            --proposal-muted: #5a5a5f;
          }

          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap');
          
          .password-gate {
            font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }
        `}</style>
        
        <div className="password-gate max-w-md w-full">
          <WolstenLogo className="w-[50px] h-auto mb-8 mx-auto" />
          
          <h1 className="text-[2rem] font-light leading-[1.15] tracking-[-0.02em] mb-4 text-center" style={{ color: 'var(--ink)' }}>
            Confidential Proposal
          </h1>
          
          <p className="text-center text-[var(--proposal-muted)] mb-8">
            This document is password protected. Please enter the password to continue.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-[var(--rule)] bg-white text-[var(--ink)] placeholder-[var(--proposal-muted)] focus:outline-none focus:border-[var(--proposal-accent)] transition-colors"
                style={{ fontSize: '1rem' }}
                autoFocus
              />
              {error && (
                <p className="text-red-600 text-sm mt-2">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-[var(--proposal-accent)] text-white font-medium hover:opacity-90 transition-opacity"
              style={{ fontSize: '1rem' }}
            >
              Access Proposal
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <style>{`
        :root {
          --paper: #fafafa;
          --ink: #151419;
          --rule: rgba(0, 0, 0, 0.12);
          --proposal-accent: #00A5C7;
          --proposal-muted: #5a5a5f;
        }

        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap');
        
        .proposal-page {
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.7;
        }
        
        .proposal-page ::selection {
          background: var(--proposal-accent);
          color: var(--paper);
        }

        @media print {
          body {
            background: white !important;
          }
          
          @page {
            margin: 1.5cm;
            size: A4;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          section {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          h2, h3 {
            page-break-after: avoid;
            break-after: avoid;
          }
          
          .option, .quote, .phase-box, .highlight-box {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          p, div {
            orphans: 3;
            widows: 3;
          }
          
          .no-print {
            display: none;
          }
        }
      `}</style>

      <div className="proposal-page max-w-[720px] mx-auto px-8">
        {/* Header */}
        <header className="pt-16 pb-12 border-b border-[var(--rule)] mb-16">
          <WolstenLogo className="w-[50px] h-auto mb-8" />

          <div className="text-xs text-[var(--proposal-muted)] uppercase tracking-[0.12em] mb-6">
            Growth Proposal · December 2025 · Confidential
          </div>

          <h1 className="text-[clamp(2.2rem,5vw,3rem)] font-light leading-[1.15] tracking-[-0.02em] mb-6">
            Buns & Guns
          </h1>

          <p className="text-[1.15rem] text-[var(--proposal-muted)] max-w-[580px] leading-[1.6]">
            Digital infrastructure and strategic growth
            partnership. A comprehensive plan to establish
            market dominance and prepare for franchise
            expansion.
          </p>
        </header>

        <main className="pb-16">
          {/* Executive Summary */}
          <section className="mb-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--proposal-accent)] mb-6 pb-3 border-b border-[var(--rule)]">
              Executive Summary
            </h2>
            <p className="mb-5">
              Buns & Guns has built something exceptional. The
              product is outstanding — Irish beef, homemade
              everything, 700 calories. The brand identity is
              strong. The physical space reflects a business
              that understands quality.
            </p>
            <p className="mb-5">
              What's missing is the digital infrastructure to
              match. Despite having one of the best burgers in
              Cyprus, customers searching online won't find you.
              Competitors with inferior products appear first.
            </p>
            <p className="mb-5">
              This proposal outlines a growth partnership
              designed to fix that — and position the brand for
              franchise expansion.
            </p>
            <div className="text-[1.1rem] italic text-[var(--proposal-muted)] text-center p-8 my-8 border-l-[3px] border-[var(--proposal-accent)] bg-white">
              "You've built an amazing product. Now let's build
              an amazing business."
            </div>
          </section>

          {/* The Gap */}
          <section className="mb-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--proposal-accent)] mb-6 pb-3 border-b border-[var(--rule)]">
              The Gap
            </h2>
            <p className="mb-6">
              Despite strong product and branding, Buns & Guns
              is invisible where it matters most:
            </p>

            <div className="my-6">
              {[
                {
                  label: "No website",
                  desc: "Customers searching for 'burgers Pyla' won't find you",
                },
                {
                  label: "No Google presence",
                  desc: "Not appearing in local search or Maps",
                },
                {
                  label: "No LinkedIn",
                  desc: "Zero visibility to investors or partners",
                },
                {
                  label: "Unstructured ads",
                  desc: "Boosted posts without strategy",
                },
                {
                  label: "No franchise base",
                  desc: "Nothing to support Limassol expansion",
                },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  className={`flex py-4 ${i !== arr.length - 1 ? "border-b border-[var(--rule)]" : ""}`}
                >
                  <div className="w-[140px] flex-shrink-0 font-medium text-[var(--proposal-accent)]">
                    {item.label}
                  </div>
                  <div className="flex-1 text-[var(--proposal-muted)]">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--proposal-accent)] mb-6 pb-3 border-b border-[var(--rule)]">
              The Solution
            </h2>
            <p className="mb-5">
              A complete digital transformation delivered in two
              phases:
            </p>

            <h3 className="text-[1.1rem] font-medium mt-8 mb-4 text-[var(--ink)]">
              Phase 1: Foundation — December
            </h3>
            <p className="mb-6">
              Immediate infrastructure build to establish
              digital presence.
            </p>
            <div className="bg-white p-6 px-8 my-6 border-l-[3px] border-[var(--proposal-accent)]">
              <p className="m-0 text-[var(--proposal-muted)] text-[0.95rem]">
                Premium website (React/Tailwind) · Domain +
                email · Google Business Profile · Google Ads
                setup · Meta Ads strategy · LinkedIn pages ·
                Brand assets · QR menu · Business cards · Email
                signatures · 2026 growth strategy
              </p>
            </div>

            <h3 className="text-[1.1rem] font-medium mt-8 mb-4 text-[var(--ink)]">
              Phase 2: Growth — January to March
            </h3>
            <p className="mb-6">
              Ongoing management and optimisation to build
              momentum.
            </p>
            <div className="bg-white p-6 px-8 my-6 border-l-[3px] border-[var(--proposal-accent)]">
              <p className="m-0 text-[var(--proposal-muted)] text-[0.95rem]">
                Google Ads management · Meta Ads management ·
                LinkedIn content (3-4 posts/week) · Weekly calls
                (if required) · Performance tracking · Investor
                introductions · Franchise positioning · Limassol
                expansion support
              </p>
            </div>

            <div className="bg-[var(--proposal-accent)] text-white p-6 px-8 my-8 font-medium text-center">
              The Goal: Top of Google for 'burgers Pyla' by end
              of Q1 2026
            </div>
          </section>

          {/* Investment Options */}
          <section className="mb-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--proposal-accent)] mb-6 pb-3 border-b border-[var(--rule)]">
              Investment Options
            </h2>
            <p className="mb-8">
              You've invested significantly in your physical
              presence — the fit-out, the equipment, the
              signage, the experience. Your digital presence
              needs to match. It needs to run through the
              building with the same quality and intent. This
              isn't an expense. It's infrastructure.
            </p>

            {/* Option 1 */}
            <div className="border border-[var(--rule)] p-8 my-8 bg-white">
              <div className="flex justify-between items-start mb-4">
                <div className="text-[1.1rem] font-medium">
                  Option 1: Digital Foundation
                </div>
              </div>
              <p className="text-[var(--proposal-muted)] mb-6 text-[0.95rem]">
                Complete digital infrastructure, built to the
                same standard as your physical space, then
                handed over for you to manage. Website, domain,
                email, Google Business, Google Ads setup,
                LinkedIn page, brand assets, QR menu, business
                cards, email signatures. You own it. You run it.
              </p>
              <div className="text-2xl font-light text-center pt-4 border-t border-[var(--rule)]">
                €3,500
              </div>
              <p className="text-[0.8rem] text-[var(--proposal-muted)] text-center mt-2">
                One-time investment · Self-managed from handover
              </p>
            </div>

            {/* Option 2 - Recommended */}
            <div className="border-2 border-[var(--proposal-accent)] p-8 my-8 bg-white">
              <div className="flex justify-between items-start mb-4">
                <div className="text-[1.1rem] font-medium">
                  Option 2: Growth Partnership
                </div>
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] bg-[var(--proposal-accent)] text-white py-1 px-3">
                  Recommended
                </div>
              </div>
              <p className="text-[var(--proposal-muted)] mb-6 text-[0.95rem]">
                Everything above, plus I run it for you. You
                focus on the kitchen and the customers. I focus
                on getting more of them through the door.
              </p>

              <div className="my-6">
                {[
                  {
                    label: "Ads management",
                    desc: "Google + Meta — strategy, budgets, optimisation. No more boosted posts.",
                  },
                  {
                    label: "LinkedIn content",
                    desc: "3-4 posts per week. I write, I post, I build the audience.",
                  },
                  {
                    label: "Weekly calls",
                    desc: "If required. We stay in sync. No surprises.",
                  },
                  {
                    label: "Performance tracking",
                    desc: "Reports, not guesswork. You see what's working.",
                  },
                  {
                    label: "Investor introductions",
                    desc: "When traction is proven, I open doors.",
                  },
                  {
                    label: "Franchise positioning",
                    desc: "Building toward Limassol and beyond.",
                  },
                ].map((item, i, arr) => (
                  <div
                    key={i}
                    className={`flex py-4 ${i !== arr.length - 1 ? "border-b border-[var(--rule)]" : ""}`}
                  >
                    <div className="w-[140px] flex-shrink-0 font-medium text-[var(--proposal-accent)]">
                      {item.label}
                    </div>
                    <div className="flex-1 text-[var(--proposal-muted)]">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-2xl font-light text-center pt-4 border-t border-[var(--rule)]">
                €5,500 setup + €1,500/month
              </div>
              <p className="text-[0.8rem] text-[var(--proposal-muted)] text-center mt-2">
                3-month minimum commitment
              </p>
            </div>

            <h3 className="text-[1.1rem] font-medium mt-8 mb-4 text-[var(--ink)]">
              Investment Breakdown
            </h3>
            <div className="my-8">
              {[
                {
                  label: "December: Setup + Strategy",
                  amount: "€5,500",
                },
                {
                  label: "January: Growth Management",
                  amount: "€1,500",
                },
                {
                  label: "February: Growth Management",
                  amount: "€1,500",
                },
                {
                  label: "March: Growth Management",
                  amount: "€1,500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between py-3 border-b border-[var(--rule)]"
                >
                  <span>{item.label}</span>
                  <span className="font-medium">
                    {item.amount}
                  </span>
                </div>
              ))}
              <div className="flex justify-between bg-[var(--proposal-accent)] text-white m-0 -mx-4 p-4 font-medium">
                <span>Total Commitment</span>
                <span>€10,000</span>
              </div>
            </div>
          </section>

          {/* Why Wolsten Studios */}
          <section className="mb-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--proposal-accent)] mb-6 pb-3 border-b border-[var(--rule)]">
              Why Wolsten Studios
            </h2>
            <p className="mb-6">
              We don't just advise, we build.
            </p>

            <div className="my-6">
              {[
                {
                  label: "Direct access",
                  desc: "You work with me directly. No juniors, no handoffs.",
                },
                {
                  label: "Speed",
                  desc: "December deliverables done before Christmas.",
                },
                {
                  label: "Quality",
                  desc: "Apple-grade design. Nothing less.",
                },
                {
                  label: "Network",
                  desc: "Access to investors and opportunities.",
                },
                {
                  label: "Skin in the game",
                  desc: "I succeed when you succeed.",
                },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  className={`flex py-3 ${i !== arr.length - 1 ? "border-b border-[var(--rule)]" : ""}`}
                >
                  <div className="w-[130px] flex-shrink-0 font-medium text-[var(--proposal-accent)]">
                    {item.label}
                  </div>
                  <div className="flex-1 text-[var(--proposal-muted)]">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[1.1rem] italic text-[var(--proposal-muted)] text-center p-8 my-8 border-l-[3px] border-[var(--proposal-accent)] bg-white">
              "I'm not here to build you a website and
              disappear. I'm offering a growth partnership. When
              the time is right, I'll put investors in front of
              you."
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--proposal-accent)] mb-6 pb-3 border-b border-[var(--rule)]">
              Next Steps
            </h2>

            <div className="my-6">
              {[
                "Choose your option",
                "Confirm via WhatsApp",
                "December invoice issued",
                "Work begins immediately",
                "LinkedIn first — we start telling your story",
                "Website + ads development",
                "Live before Christmas",
              ].map((step, i) => (
                <div key={i} className="flex py-2.5">
                  <div className="w-[30px] flex-shrink-0 font-medium text-[var(--proposal-accent)]">
                    {i + 1}.
                  </div>
                  <div className="flex-1">{step}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--rule)]">
              <p className="font-medium mb-1">Dan Wolsten</p>
              <p className="text-[var(--proposal-muted)] text-[0.9rem]">
                Founder, Wolsten Studios
              </p>
            </div>
          </section>

          {/* Appendix: Deliverables */}
          <section className="mb-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--proposal-accent)] mb-6 pb-3 border-b border-[var(--rule)]">
              Appendix: Deliverables
            </h2>

            <div className="my-6">
              {[
                {
                  label: "Website",
                  desc: "Premium one-page, React/Tailwind, mobile-first, SEO-optimised. QR menu built in.",
                },
                {
                  label: "Google Business",
                  desc: "Full optimisation for local search and Maps visibility.",
                },
                {
                  label: "Google Ads",
                  desc: "Structured campaigns targeting burger searches in Pyla/Larnaca.",
                },
                {
                  label: "Meta Ads",
                  desc: "Strategic Facebook/Instagram replacing boosted posts.",
                },
                {
                  label: "LinkedIn",
                  desc: "Personal + company pages. Content focused on growth story.",
                },
                {
                  label: "Brand Assets",
                  desc: "Logo files, vectors, colour codes, signage-ready formats.",
                },
                {
                  label: "Business Cards",
                  desc: "Premium design, print-ready files.",
                },
                {
                  label: "Email Signatures",
                  desc: "Professional HTML signatures for team.",
                },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  className={`flex py-4 ${i !== arr.length - 1 ? "border-b border-[var(--rule)]" : ""}`}
                >
                  <div className="w-[130px] flex-shrink-0 font-medium text-[var(--ink)]">
                    {item.label}
                  </div>
                  <div className="flex-1 text-[var(--proposal-muted)] text-[0.95rem]">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[var(--rule)] py-12 text-center">
          <WolstenLogo className="w-[35px] mx-auto mb-4" />
          <p className="text-xs text-[var(--proposal-muted)] my-1">
            <strong>Wolsten Studios</strong>
          </p>
          <p className="text-xs text-[var(--proposal-muted)] my-1">
            Transformation Consultancy{" "}
            <span className="text-[var(--proposal-accent)]">
              ·
            </span>{" "}
            Cyprus
          </p>
        </footer>
      </div>
    </div>
  );
}

function WolstenLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 275 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M102.765 11.7345C102.304 10.6241 102.943 9.3645 104.111 9.08047C104.217 9.05468 104.326 9.04165 104.435 9.04165H106.654H109.037C110.476 9.04165 111.771 9.91784 112.305 11.2542L135.366 68.8785C136.018 70.5075 138.302 70.5674 139.038 68.9747L165.772 11.1485C166.358 9.88105 167.668 9.10965 169.061 9.21233L171.376 9.38301L173.522 9.54124C173.634 9.54951 173.745 9.5712 173.852 9.60585C174.997 9.97694 175.56 11.2659 175.054 12.3582L143.202 81.1129C142.962 81.6305 142.955 82.2258 143.182 82.7492L184.671 178.434C185.37 180.045 187.655 180.039 188.345 178.425L263.389 2.88651C264.137 1.13567 265.858 0 267.762 0C271.183 0 273.485 3.50359 272.127 6.64367L192.466 190.877C191.674 192.708 189.871 193.893 187.876 193.893H185.166C183.17 193.893 181.365 192.706 180.575 190.873L139.2 94.9243C138.505 93.3135 136.222 93.3135 135.527 94.9243L94.1524 190.873C93.362 192.706 91.5572 193.893 89.5611 193.893H86.8547C84.8583 193.893 83.0532 192.705 82.263 190.872L2.78948 6.47232C1.47028 3.41144 3.71479 0 7.04784 0C8.90217 0 10.5782 1.10474 11.3093 2.80887L86.6467 178.421C87.3391 180.035 89.6265 180.037 90.3214 178.424L131.567 82.7034C131.781 82.2068 131.785 81.6447 131.577 81.1452L102.765 11.7345Z"
        fill="#151419"
      />
    </svg>
  );
}