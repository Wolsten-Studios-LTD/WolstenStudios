import { Navigation } from '../components/Navigation';
import { ArrowRight, Layers, Globe, Settings, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/home/SectionHeader';
import { CapabilityCard } from '../components/home/CapabilityCard';
import { TransformationRow } from '../components/home/TransformationRow';
import { TickListItem } from '../components/home/TickListItem';
import { GlassCard } from '../components/home/GlassCard';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { colors, spacing, typography } from '../config/theme';
import { useRouter } from '../components/Router';

export function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const { navigate } = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const capabilities = [
    {
      icon: Layers,
      title: 'Brand Architecture',
      description: 'Positioning, messaging, identity, and visual systems engineered for clarity and differentiation.',
    },
    {
      icon: Globe,
      title: 'Digital Experience',
      description: 'Modern website design and build (React + Vite + Tailwind CSS) with Apple-level interactions, lightning-fast performance, and conversion-focused architecture.',
    },
    {
      icon: Settings,
      title: 'Growth Launch',
      description: 'Google & Meta Ads setup, three launch campaigns, and essential brand assets to generate momentum from day one.',
    },
  ];

  const transformationResults = [
    {
      company: 'National Energy Provider',
      industry: 'Home Efficiency & Renewable Services',
      result: 'Brand and website modernisation. Strengthened trust at scale, improved lead quality, and streamlined the customer journey.',
    },
    {
      company: 'Professional Services Firm',
      industry: 'Accounting & Advisory',
      result: 'Identity refresh and repositioning. Elevated credibility and increased digital conversions by 3×.',
    },
    {
      company: 'B2B Technology Provider',
      industry: 'Ecosystem & Compliance Platform',
      result: 'Operational and digital overhaul. Redesigned onboarding, workflows, and partner experience with major engagement improvements.',
    },
  ];

  const whyWolsten = [
    'Clear strategic thinking without unnecessary complexity',
    'Modern identity systems built for established companies',
    'Strategy and execution combined in one unified process',
    'Fast, structured transformation cycles (7-14 days)',
    'A complete reset of how the business presents and generates demand',
    'Direct partnership with leadership from discovery through to handover',
  ];

  const sprintOSDeliverables = [
    'Complete brand architecture and messaging',
    'Website design and build (React + Vite + Tailwind CSS)',
    'Growth setup including Google & Meta Ads + 3 launch campaigns',
    'Essential branded assets (business cards, email signatures, letterheads)',
    'Documentation and handover',
  ];

  const sprintOSStages = [
    { number: '01', name: 'Discovery', desc: 'Clarify objectives, challenges, and direction' },
    { number: '02', name: 'Strategy', desc: 'Positioning, messaging, and brand architecture' },
    { number: '03', name: 'Execution', desc: 'Identity development and website rebuild' },
    { number: '04', name: 'Growth Setup', desc: 'Ad systems, campaigns, and launch assets' },
    { number: '05', name: 'Handover', desc: 'Training, documentation, and implementation support' },
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
          className={`${spacing.section.px} pt-32 pb-40 relative overflow-hidden`}
          style={{ backgroundColor: colors.background.light }}
        >
          {/* Static background orb */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '20%',
              right: '10%',
              width: '400px',
              height: '400px',
              background: 'rgba(0, 165, 199, 0.06)',
              filter: 'blur(60px)',
              borderRadius: '50%',
            }}
          />
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div>
              <h1 style={{ color: colors.text.primary, ...typography.hero, marginBottom: '3rem' }}>
                Wolsten Studios
              </h1>
              <p style={{ 
                color: colors.text.secondary, 
                ...typography.bodyLarge,
                maxWidth: '800px',
                marginBottom: '4.5rem',
              }}>
                Premium transformation for established businesses—brand architecture, digital experience, and growth strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => navigate('/application')}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border-0 cursor-pointer"
                  style={{ 
                    backgroundColor: colors.cyan.primary,
                    color: colors.text.white,
                    fontSize: '0.938rem',
                    letterSpacing: '0.02em',
                    fontWeight: 600,
                    boxShadow: '0 4px 16px rgba(0, 165, 199, 0.25)',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  whileHover={{
                    y: -2,
                    backgroundColor: '#008FA3',
                  }}
                  transition={{
                    duration: 0.15,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  aria-label="Start your transformation - contact form"
                >
                  Start Your Transformation
                  <ArrowRight size={18} />
                </motion.button>
                <motion.button
                  onClick={() => navigate('/sprintos')}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 cursor-pointer"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: colors.text.primary,
                    fontSize: '0.938rem',
                    letterSpacing: '0.01em',
                    border: `1.5px solid rgba(0, 165, 199, 0.4)`,
                    boxShadow: '0 2px 12px rgba(0, 165, 199, 0.1)',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  whileHover={{
                    y: -2,
                    borderColor: 'rgba(0, 165, 199, 0.8)',
                    backgroundColor: 'rgba(0, 165, 199, 0.12)',
                  }}
                  transition={{
                    duration: 0.15,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  aria-label="Explore SprintOS product page"
                >
                  Explore SprintOS™
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Overview */}
        <section 
          className={`${spacing.section.px} ${spacing.section.py} relative overflow-hidden`} 
          style={{ backgroundColor: colors.background.white }}
        >
          {/* Static background orb */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '15%',
              left: '5%',
              width: '350px',
              height: '350px',
              background: 'rgba(0, 165, 199, 0.04)',
              filter: 'blur(50px)',
              borderRadius: '50%',
            }}
          />
          
          <div className="max-w-5xl mx-auto relative z-10">
            <SectionHeader
              eyebrow="Our Capabilities"
              title="Three core areas of transformation"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <CapabilityCard
                  key={index}
                  icon={capability.icon}
                  title={capability.title}
                  description={capability.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Product — SprintOS™ */}
        <section 
          id="sprintos" 
          className={`${spacing.section.px} ${spacing.section.py} relative overflow-hidden`}
          style={{ background: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)' }}
        >
          {/* Static background orbs */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '10%',
              left: '15%',
              width: '300px',
              height: '300px',
              background: 'rgba(0, 165, 199, 0.08)',
              filter: 'blur(40px)',
              borderRadius: '50%',
            }}
          />
          
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: '15%',
              right: '20%',
              width: '250px',
              height: '250px',
              background: 'rgba(0, 212, 255, 0.06)',
              filter: 'blur(50px)',
              borderRadius: '50%',
            }}
          />
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                <p className="mb-4" style={{ 
                  color: colors.cyan.primary,
                  ...typography.eyebrow,
                  letterSpacing: '0.2em',
                }}>
                  Featured Product
                </p>
                <h2 className="mb-6" style={{ 
                  color: colors.text.white,
                  fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                  fontWeight: 400,
                  lineHeight: '1.15',
                  letterSpacing: '-0.01em',
                }}>
                  SprintOS™
                </h2>
                <p className="mb-8" style={{ 
                  color: colors.text.light,
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                }}>
                  A 7-14 day transformation sprint combining strategy, brand identity, website rebuild, and growth activation for established businesses.
                </p>
                <div className="mb-8">
                  <p className="mb-4" style={{ 
                    color: colors.text.white,
                    fontSize: '0.938rem',
                    fontWeight: 500,
                  }}>
                    Delivered in Your Sprint
                  </p>
                  <ul className="space-y-2">
                    {sprintOSDeliverables.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 size={18} color={colors.cyan.primary} style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ color: colors.text.lighter, fontSize: '0.938rem' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <p style={{ 
                    color: colors.text.white, 
                    fontSize: '2rem', 
                    fontWeight: 300,
                  }}>
                    €15k-€35k
                  </p>
                  <p style={{ color: colors.text.light, fontSize: '0.938rem' }}>per sprint</p>
                </div>
                <p className="mb-8" style={{ 
                  color: colors.text.light,
                  fontSize: '0.875rem',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                }}>
                  Fixed pricing. Limited to 3 sprints per quarter. Leadership involvement required.
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
                    boxShadow: '0 4px 20px rgba(0, 212, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(40px) saturate(200%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(200%)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.95) 0%, rgba(0, 190, 230, 0.95) 100%)',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  whileHover={{
                    y: -2,
                    backgroundColor: '#008FA3',
                  }}
                  transition={{
                    duration: 0.15,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  aria-label="Apply for SprintOS - contact form"
                >
                  Apply for SprintOS™
                  <ArrowRight size={18} />
                </motion.button>
              </div>

              {/* Right: 5-Stage Process Visual */}
              <GlassCard withCornerOrb>
                <p className="mb-3 text-center relative z-10" style={{ 
                  color: colors.cyan.bright,
                  ...typography.eyebrow,
                }}>
                  Proven Operating System
                </p>
                <p className="mb-10 text-center relative z-10" style={{ 
                  color: colors.text.lighter,
                  fontSize: '0.938rem',
                  lineHeight: '1.6',
                }}>
                  Five systematic stages for business transformation
                </p>
                <div className="space-y-3 relative z-10">
                  {sprintOSStages.map((stage, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-4">
                        <div 
                          className="flex items-center justify-center flex-shrink-0 relative"
                          style={{ 
                            width: '44px',
                            height: '44px',
                            backgroundColor: colors.cyan.bright,
                            color: '#0A0A0A',
                            fontSize: '0.813rem',
                            fontWeight: 600,
                          }}
                        >
                          {stage.number}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p style={{ color: colors.text.white, fontSize: '1.063rem', fontWeight: 400, marginBottom: '0.125rem' }}>
                            {stage.name}
                          </p>
                          <p style={{ color: colors.text.light, fontSize: '0.813rem', lineHeight: '1.4' }}>
                            {stage.desc}
                          </p>
                        </div>
                      </div>
                      {index < 4 && (
                        <div 
                          className="ml-5"
                          style={{ 
                            width: '2px',
                            height: '16px',
                            background: 'linear-gradient(180deg, #00D4FF 0%, rgba(0, 212, 255, 0.2) 100%)',
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 relative z-10" style={{ borderTop: '1px solid rgba(0, 212, 255, 0.15)' }}>
                  <button
                    onClick={() => navigate('/sprintos')}
                    className="flex items-center justify-center gap-2 text-center transition-all hover:gap-3 border-0 bg-transparent cursor-pointer w-full"
                    style={{ 
                      color: colors.cyan.bright,
                      fontSize: '0.875rem',
                      fontWeight: 500,
                    }}
                    aria-label="View full SprintOS framework"
                  >
                    View Full Framework
                    <ArrowRight size={16} />
                  </button>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Recent Transformations */}
        <section className={`${spacing.section.px} ${spacing.section.py} relative overflow-hidden`} style={{ backgroundColor: colors.background.white }}>
          {/* Static background orb */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: '10%',
              right: '8%',
              width: '320px',
              height: '320px',
              background: 'rgba(0, 165, 199, 0.05)',
              filter: 'blur(55px)',
              borderRadius: '50%',
            }}
          />
          
          <div className="max-w-5xl mx-auto relative z-10">
            <SectionHeader
              eyebrow="Recent Transformations"
              title="Client results across industries"
            />

            <div className="space-y-1">
              {transformationResults.map((item, index) => (
                <TransformationRow
                  key={index}
                  company={item.company}
                  industry={item.industry}
                  result={item.result}
                  index={index}
                  isMobile={isMobile}
                  shouldReduceMotion={false}
                />
              ))}
              <div style={{ borderBottom: `1px solid ${colors.border.light}` }} />
            </div>
          </div>
        </section>

        {/* Why Founders Choose Wolsten Studios */}
        <section className={`${spacing.section.px} ${spacing.section.py} relative overflow-hidden`} style={{ backgroundColor: colors.background.white }}>
          {/* Static background orb */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '20%',
              right: '10%',
              width: '280px',
              height: '280px',
              background: 'rgba(0, 165, 199, 0.05)',
              filter: 'blur(45px)',
              borderRadius: '50%',
            }}
          />
          
          <div className="max-w-5xl mx-auto relative z-10">
            <SectionHeader
              eyebrow="Why Wolsten"
              title="Why businesses choose Wolsten Studios"
              description="We partner with business owners, directors, and leadership teams to rebuild the brand, website, and growth foundation their next stage requires."
              align="center"
              maxWidth="700px"
            />

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyWolsten.map((item, index) => (
                <TickListItem key={index} delay={index * 0.08}>
                  {item}
                </TickListItem>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section 
          id="contact" 
          className={`${spacing.section.px} py-32 relative overflow-hidden`}
          style={{ backgroundColor: colors.background.dark }}
        >
          {/* Static background orbs */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '15%',
              left: '10%',
              width: '350px',
              height: '350px',
              background: 'rgba(0, 165, 199, 0.08)',
              filter: 'blur(50px)',
              borderRadius: '50%',
            }}
          />
          
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: '20%',
              right: '15%',
              width: '280px',
              height: '280px',
              background: 'rgba(0, 212, 255, 0.06)',
              filter: 'blur(55px)',
              borderRadius: '50%',
            }}
          />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="mb-6" style={{ 
              color: colors.text.white,
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: '1.2',
            }}>
              Start Your Transformation
            </h2>
            <p className="mb-8" style={{ 
              color: colors.text.light,
              fontSize: '1.125rem',
              lineHeight: '1.7',
              maxWidth: '600px',
              margin: '0 auto 3rem',
            }}>
              Tell us about your business, challenges, and goals. We respond to all qualified inquiries within 48 hours.
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
                boxShadow: '0 4px 20px rgba(0, 212, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(40px) saturate(200%)',
                WebkitBackdropFilter: 'blur(40px) saturate(200%)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.95) 0%, rgba(0, 190, 230, 0.95) 100%)',
                WebkitTapHighlightColor: 'transparent',
              }}
              whileHover={{
                y: -2,
                backgroundColor: '#008FA3',
              }}
              transition={{
                duration: 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
              aria-label="Apply for SprintOS - contact form"
            >
              Apply for SprintOS™
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </section>
      </motion.main>
    </div>
  );
}