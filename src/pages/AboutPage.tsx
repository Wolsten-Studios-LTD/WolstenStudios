import { Navigation } from '../components/Navigation';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from '../components/home/GlassCard';
import { colors, spacing, typography } from '../config/theme';
import { springs } from '../config/animations';
import { useRouter } from '../components/Router';

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.4 17.6c0-2.4 1.9-4.3 4.3-4.3 2.4 0 4.3 1.9 4.3 4.3 0 2.4-1.9 4.3-4.3 4.3-2.4 0-4.3-1.9-4.3-4.3zM16.9 26.5h7.2v23h-7.2v-23zM28.7 26.5h6.9v3.1h.1c1-1.8 3.3-3.7 6.9-3.7 7.4 0 8.7 4.9 8.7 11.2v12.9h-7.2v-11.4c0-2.7 0-6.2-3.8-6.2-3.8 0-4.4 3-4.4 6v11.6h-7.2v-23z" fill="currentColor"/>
  </svg>
);

export function AboutPage() {
  const { navigate } = useRouter();
  const approachPrinciples = [
    { number: '01', name: 'Strategy', desc: 'Position before you build.' },
    { number: '02', name: 'Architecture', desc: 'Brand, digital, and operations as one system.' },
    { number: '03', name: 'Execution', desc: 'Fast. Focused. Final.' },
    { number: '04', name: 'Scale', desc: 'Built for the business you\'re becoming.' },
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
          className={`${spacing.section.px} pt-32 pb-40`}
          style={{ backgroundColor: colors.background.light }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 style={{ color: colors.text.primary, ...typography.hero, marginBottom: '2rem' }}>
              About Wolsten Studios
            </h1>
            <p style={{ 
              color: colors.text.secondary, 
              fontSize: '1.25rem',
              lineHeight: '1.6',
              maxWidth: '700px',
            }}>
              Infrastructure for businesses ready to scale.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className={`${spacing.section.px} py-24`} style={{ backgroundColor: colors.background.white }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 style={{ 
                  color: colors.text.primary,
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  fontWeight: 300,
                }}>
                  Most businesses outgrow their infrastructure.
                </h2>
              </div>
              <div>
                <p className="mb-6" style={{ 
                  color: colors.text.secondary,
                  fontSize: '1.063rem',
                  lineHeight: '1.7',
                }}>
                  The brand no longer reflects capability. The website undermines credibility. Growth systems are fragmented or non-existent.
                </p>
                <p style={{ 
                  color: colors.text.primary,
                  fontSize: '1.063rem',
                  lineHeight: '1.7',
                  fontWeight: 400,
                }}>
                  Wolsten Studios rebuilds this infrastructure—brand, digital, and growth—so the business can operate at the level it's already thinking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Approach */}
        <section 
          className={`${spacing.section.px} py-24`}
          style={{ background: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)' }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Left: Content */}
              <div>
                <p className="mb-3" style={{ 
                  color: colors.cyan.primary,
                  fontSize: '0.813rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                }}>
                  Methodology
                </p>
                <h2 className="mb-8" style={{ 
                  color: colors.text.white,
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 300,
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                }}>
                  SprintOS™
                </h2>
                <p className="mb-6" style={{ 
                  color: colors.text.light,
                  fontSize: '1.063rem',
                  lineHeight: '1.7',
                }}>
                  A 7–14 day framework for rebuilding brand, website, and growth foundations.
                </p>
                <p style={{ 
                  color: colors.text.light,
                  fontSize: '1.063rem',
                  lineHeight: '1.7',
                }}>
                  No long timelines. No fragmented vendors. No drift.
                </p>
              </div>

              {/* Right: Principles */}
              <GlassCard>
                <div className="space-y-3 relative z-10">
                  {approachPrinciples.map((principle, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-4">
                        <div 
                          className="flex items-center justify-center flex-shrink-0"
                          style={{ 
                            width: '40px',
                            height: '40px',
                            backgroundColor: colors.cyan.bright,
                            color: '#0A0A0A',
                            fontSize: '0.813rem',
                            fontWeight: 600,
                          }}
                        >
                          {principle.number}
                        </div>
                        <div className="flex-1 min-w-0 pt-1">
                          <p style={{ color: colors.text.white, fontSize: '1rem', fontWeight: 400, marginBottom: '0.25rem' }}>
                            {principle.name}
                          </p>
                          <p style={{ color: colors.text.light, fontSize: '0.875rem', lineHeight: '1.5' }}>
                            {principle.desc}
                          </p>
                        </div>
                      </div>
                      {index < 3 && (
                        <div 
                          className="ml-5"
                          style={{ 
                            width: '2px',
                            height: '12px',
                            background: 'linear-gradient(180deg, #00D4FF 0%, rgba(0, 212, 255, 0.2) 100%)',
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* The Founder */}
        <section className={`${spacing.section.px} py-24`} style={{ backgroundColor: colors.background.white }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Left: Background */}
              <div>
                <p className="mb-3" style={{ 
                  color: colors.cyan.primary,
                  fontSize: '0.813rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                }}>
                  Origin
                </p>
                <h2 className="mb-8" style={{ 
                  color: colors.text.primary,
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 300,
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                }}>
                  Built from operational experience.
                </h2>
                <p className="mb-6" style={{ 
                  color: colors.text.secondary,
                  fontSize: '1.063rem',
                  lineHeight: '1.7',
                }}>
                  Before Wolsten Studios, I scaled businesses across marine services, financial advisory, and multi-million-pound energy operations.
                </p>
                <p style={{ 
                  color: colors.text.primary,
                  fontSize: '1.063rem',
                  lineHeight: '1.7',
                  fontWeight: 400,
                }}>
                  The pattern was clear: founders don't lack ambition. They lack infrastructure that scales with them.
                </p>
              </div>

              {/* Right: Solution */}
              <div>
                <GlassCard>
                  <div className="relative z-10">
                    <p className="mb-8" style={{ 
                      color: colors.text.secondary,
                      fontSize: '1.063rem',
                      lineHeight: '1.7',
                    }}>
                      SprintOS™ is the result—a systematic framework for rebuilding brand, digital, and growth infrastructure in days, not months.
                    </p>
                    <p className="mb-10" style={{ 
                      color: colors.text.primary,
                      fontSize: '1.063rem',
                      lineHeight: '1.7',
                      fontWeight: 400,
                    }}>
                      Built for businesses ready to operate at the next level.
                    </p>
                    <motion.a
                      href="https://www.linkedin.com/company/110592070/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3"
                      style={{ 
                        backgroundColor: colors.text.primary,
                        color: colors.text.white,
                        fontSize: '0.875rem',
                        letterSpacing: '0.01em',
                        fontWeight: 500,
                      }}
                      whileHover={{
                        backgroundColor: '#1A1A1A',
                        y: -1,
                      }}
                      transition={{
                        duration: 0.15,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                    >
                      <LinkedInIcon />
                      Wolsten Studios
                    </motion.a>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section 
          className={`${spacing.section.px} py-32`}
          style={{ backgroundColor: colors.background.dark }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6" style={{ 
              color: colors.text.white,
              fontSize: 'clamp(2.5rem, 5vw, 3rem)',
              fontWeight: 300,
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}>
              Ready to rebuild?
            </h2>
            <p className="mb-10" style={{ 
              color: colors.text.light,
              fontSize: '1.063rem',
              lineHeight: '1.6',
              maxWidth: '500px',
              margin: '0 auto 3rem',
            }}>
              Submit an inquiry. We respond to qualified applications within 48 hours.
            </p>
            <motion.button
              onClick={() => navigate('/application')}
              className="inline-flex items-center gap-3 px-8 py-4 border-0 cursor-pointer"
              style={{ 
                backgroundColor: colors.cyan.bright,
                color: '#0A0A0A',
                fontSize: '0.938rem',
                letterSpacing: '0.02em',
                fontWeight: 600,
                boxShadow: '0 4px 20px rgba(0, 212, 255, 0.3)',
              }}
              whileHover={{
                y: -2,
                boxShadow: '0 6px 24px rgba(0, 212, 255, 0.4)',
              }}
              transition={{
                duration: 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
              aria-label="Submit inquiry - application form"
            >
              Submit Inquiry
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </section>
      </motion.main>
    </div>
  );
}