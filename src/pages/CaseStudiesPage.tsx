import { Navigation } from '../components/Navigation';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { colors, spacing, typography } from '../config/theme';
import { SectionHeader } from '../components/home/SectionHeader';

interface CaseStudy {
  company: string;
  industry: string;
  revenueRange?: string;
  problem: string;
  outcome: string;
  slug?: string;
  inPublication?: boolean;
}

export function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = [
    {
      company: 'Stalworth Pro',
      industry: 'Professional Services',
      problem: 'Fragmented brand architecture limiting ability to communicate strategic capability to higher-value clients',
      outcome: 'Full brand and website rebuild delivering credibility that matches two decades of expertise',
      slug: 'stalworth',
      inPublication: false,
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background.light }}>
      <Navigation />

      <motion.main
        style={{ paddingTop: '80px' }}
        id="main-content"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Hero Section */}
        <section 
          className={`${spacing.section.px} pt-32 pb-20`}
          style={{ backgroundColor: colors.background.light }}
        >
          <div className="max-w-4xl mx-auto">
            <p 
              className="mb-4"
              style={{ 
                color: colors.text.secondary,
                ...typography.eyebrow,
              }}
            >
              CASE STUDIES
            </p>
            <div style={{ width: '32px', height: '2px', backgroundColor: colors.cyan.primary, marginBottom: '1rem' }} />
            <h1 style={{ 
              color: colors.text.primary, 
              ...typography.hero, 
              marginBottom: '2rem' 
            }}>
              Business transformations delivered
            </h1>
            <p style={{ 
              color: colors.text.secondary, 
              fontSize: '1.125rem',
              lineHeight: '1.7',
              maxWidth: '700px',
            }}>
              Real projects. Real constraints. Real outcomes.
            </p>
          </div>
        </section>

        {/* Intro Context */}
        <section 
          className={`${spacing.section.px} py-20`} 
          style={{ backgroundColor: colors.background.white }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 style={{ 
                  color: colors.text.primary,
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  fontWeight: 300,
                }}>
                  Most businesses we work with have outgrown their infrastructure.
                </h2>
              </div>
              <div>
                <p className="mb-6" style={{ 
                  color: colors.text.secondary,
                  fontSize: '1.063rem',
                  lineHeight: '1.7',
                }}>
                  The brand no longer reflects what the business does. The website undermines credibility. Growth systems are fragmented or missing entirely.
                </p>
                <p style={{ 
                  color: colors.text.primary,
                  fontSize: '1.063rem',
                  lineHeight: '1.7',
                  fontWeight: 400,
                }}>
                  These case studies show how we rebuild that infrastructure—brand architecture, digital systems, and growth strategy—so businesses can scale with clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Index */}
        <section 
          className={`${spacing.section.px} py-20`}
          style={{ backgroundColor: colors.background.light }}
        >
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              eyebrow="COMPLETED WORK"
              title="Case study index"
            />

            <div className="space-y-1">
              {caseStudies.map((study, index) => {
                const isInPublication = study.inPublication;
                const Component = isInPublication ? 'div' : motion.a;
                
                return (
                  <Component
                    key={index}
                    {...(!isInPublication && {
                      href: `/case-studies/${study.slug}`,
                      whileHover: { y: -2 },
                    })}
                    initial={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="block p-8 transition-all relative group"
                    style={{ 
                      backgroundColor: colors.background.white,
                      borderTop: `1px solid ${colors.border.light}`,
                      borderLeft: `2px solid ${colors.cyan.primary}`,
                      textDecoration: 'none',
                      cursor: isInPublication ? 'default' : 'pointer',
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-4 mb-2">
                          <h3 style={{ 
                            color: colors.text.primary,
                            ...typography.h3,
                          }}>
                            {study.company}
                          </h3>
                          <span style={{ 
                            color: colors.text.tertiary,
                            fontSize: '0.875rem',
                            letterSpacing: '0.05em',
                          }}>
                            {study.industry}
                          </span>
                          {isInPublication && (
                            <span style={{ 
                              color: colors.cyan.primary,
                              fontSize: '0.75rem',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              border: `1px solid ${colors.cyan.primary}`,
                              padding: '2px 8px',
                              borderRadius: '3px',
                            }}>
                              Documentation in progress
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-3 mt-4">
                          <div>
                            <p style={{ 
                              color: colors.text.tertiary,
                              fontSize: '0.875rem',
                              letterSpacing: '0.05em',
                              marginBottom: '0.5rem',
                            }}>
                              Problem
                            </p>
                            <p style={{ 
                              color: colors.text.secondary,
                              fontSize: '1rem',
                              lineHeight: '1.6',
                            }}>
                              {study.problem}
                            </p>
                          </div>
                          
                          <div>
                            <p style={{ 
                              color: colors.text.tertiary,
                              fontSize: '0.875rem',
                              letterSpacing: '0.05em',
                              marginBottom: '0.5rem',
                            }}>
                              Outcome
                            </p>
                            <p style={{ 
                              color: colors.cyan.primary,
                              fontSize: '1rem',
                              lineHeight: '1.6',
                              fontWeight: 400,
                            }}>
                              {study.outcome}
                            </p>
                          </div>
                        </div>
                      </div>

                      {!isInPublication && (
                        <motion.div
                          className="flex items-center gap-2 md:mt-1"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span style={{ 
                            color: colors.cyan.primary,
                            fontSize: '0.938rem',
                            fontWeight: 500,
                          }}>
                            View case study
                          </span>
                          <ArrowRight size={16} color={colors.cyan.primary} />
                        </motion.div>
                      )}
                    </div>
                  </Component>
                );
              })}
              <div style={{ borderBottom: `1px solid ${colors.border.light}` }} />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section 
          className={`${spacing.section.px} py-20`}
          style={{ backgroundColor: colors.background.white }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 style={{ 
                  color: colors.text.primary,
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  fontWeight: 300,
                }}>
                  Why systems matter more than visuals
                </h2>
              </div>
              <div className="space-y-6">
                <p style={{ 
                  color: colors.text.secondary,
                  fontSize: '1.063rem',
                  lineHeight: '1.7',
                }}>
                  Most businesses don't need a "rebrand." They need clarity. They need structure. They need a brand architecture that can hold the weight of what they're building.
                </p>
                <p style={{ 
                  color: colors.text.secondary,
                  fontSize: '1.063rem',
                  lineHeight: '1.7',
                }}>
                  Wolsten Studios focuses on execution—not endless discovery. We limit volume deliberately to maintain quality and deliver transformations that unlock growth, not just refresh aesthetics.
                </p>
                <p style={{ 
                  color: colors.text.primary,
                  fontSize: '1.063rem',
                  lineHeight: '1.7',
                  fontWeight: 400,
                }}>
                  These case studies reflect that philosophy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Note */}
        <section 
          className={`${spacing.section.px} py-20`}
          style={{ backgroundColor: colors.background.light }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p style={{ 
              color: colors.text.secondary,
              fontSize: '1.063rem',
              lineHeight: '1.7',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Future case studies are added deliberately once transformations are completed, verified, and documented.
            </p>
          </div>
        </section>
      </motion.main>
    </div>
  );
}