import { Navigation } from '../components/Navigation';
import { ArrowRight, Layers, Globe, Settings, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/home/SectionHeader';
import { TransformationRow } from '../components/home/TransformationRow';
import { TickListItem } from '../components/home/TickListItem';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useRouter } from '../components/Router';

// =============================================================================
// Data
// =============================================================================

const services = [
  {
    icon: Layers,
    title: 'Brand Strategy',
    description: 'Positioning, messaging, and visual identity. Clear foundations that differentiate your business.',
    price: 'From €2,500',
  },
  {
    icon: Globe,
    title: 'Website Build',
    description: 'Modern React sites with Tailwind CSS. Fast, responsive, conversion-focused. No WordPress.',
    price: 'From €3,500',
  },
  {
    icon: Settings,
    title: 'Growth Setup',
    description: 'Google & Meta Ads platform setup, campaign structure, and launch-ready assets.',
    price: 'From €1,500',
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
  'Strategy and execution combined — no handoff delays',
  'Fast turnaround without sacrificing quality',
  'You own everything — code, assets, accounts',
  'Direct partnership with senior expertise, not juniors',
];

const hatchItFeatures = [
  'Custom landing page built to your brief',
  'Production-ready React + Tailwind code',
  'You own the code — push to GitHub, deploy anywhere',
  'Hosting included',
  'Ongoing updates and management',
];

// =============================================================================
// Reusable Components
// =============================================================================

const BackgroundOrb = ({
  className = '',
  size = 'md',
  color = 'cyan',
  blur = 'md',
}: {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'cyan' | 'bright';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
}) => {
  const sizes = { sm: 'w-40 h-40', md: 'w-72 h-72', lg: 'w-80 h-80', xl: 'w-96 h-96' };
  const colors = {
    cyan: 'bg-[#00A5C7]/[0.06]',
    bright: 'bg-[#00D4FF]/[0.06]',
  };
  const blurs = { sm: 'blur-[40px]', md: 'blur-[50px]', lg: 'blur-[60px]', xl: 'blur-[80px]' };

  return (
    <div
      className={`absolute pointer-events-none rounded-full ${sizes[size]} ${colors[color]} ${blurs[blur]} ${className}`}
    />
  );
};

const PrimaryButton = ({
  children,
  onClick,
  variant = 'light',
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'light' | 'dark';
}) => (
  <motion.button
    onClick={onClick}
    className={`
      inline-flex items-center justify-center gap-3 px-8 py-4 border-0 cursor-pointer
      text-[0.938rem] tracking-wide font-semibold transition-colors
      ${variant === 'light'
        ? 'bg-[#00A5C7] text-white shadow-[0_4px_16px_rgba(0,165,199,0.25)] hover:bg-[#008FA3]'
        : 'bg-gradient-to-br from-[#00D4FF]/95 to-[#00BEE6]/95 text-[#0A0A0A] border border-white/30 shadow-[0_4px_20px_rgba(0,212,255,0.3),inset_0_1px_0_rgba(255,255,255,0.4)]'
      }
    `}
    whileHover={{ y: -2 }}
    transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
  >
    {children}
  </motion.button>
);

const SecondaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <motion.button
    onClick={onClick}
    className="
      inline-flex items-center justify-center gap-3 px-8 py-4 cursor-pointer
      text-[0.938rem] tracking-tight text-[#0E0E0E]
      bg-white/[0.08] border-[1.5px] border-[#00A5C7]/40
      shadow-[0_2px_12px_rgba(0,165,199,0.1)]
      hover:border-[#00A5C7]/80 hover:bg-[#00A5C7]/[0.12]
      transition-colors
    "
    whileHover={{ y: -2 }}
    transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
  >
    {children}
  </motion.button>
);

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  price,
  index,
}: {
  icon: typeof Layers;
  title: string;
  description: string;
  price: string;
  index: number;
}) => (
  <motion.div
    className="p-6 bg-white border border-[#EBEBEF] hover:shadow-lg transition-shadow"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    whileHover={{ y: -4 }}
  >
    <Icon size={28} className="text-[#00A5C7] mb-4" />
    <h3 className="text-[#0E0E0E] text-xl font-medium mb-3">{title}</h3>
    <p className="text-[#606260] text-[0.938rem] leading-relaxed mb-4">{description}</p>
    <p className="text-[#00A5C7] text-sm font-medium">{price}</p>
  </motion.div>
);

// =============================================================================
// Page Component
// =============================================================================

export function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const { navigate } = useRouter();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC]">
      <Navigation />

      <motion.main
        id="main-content"
        className="pt-20"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* ===== Hero ===== */}
        <section className="px-8 pt-32 pb-40 relative overflow-hidden bg-[#FAFAFC]">
          <BackgroundOrb className="top-[20%] right-[10%]" size="xl" blur="lg" />

          <div className="max-w-5xl mx-auto relative z-10">
            <h1 className="text-[#0E0E0E] text-[clamp(3rem,7vw,5.5rem)] leading-[1.1] tracking-tight font-light mb-12">
              Wolsten Studios
            </h1>
            <p className="text-[#606260] text-[clamp(1.25rem,2.5vw,1.75rem)] leading-relaxed max-w-3xl mb-16">
              Brand strategy, websites, and growth systems for established businesses. Clear thinking. Modern execution. You own everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton onClick={() => navigate('/contact')}>
                Get in Touch
                <ArrowRight size={18} />
              </PrimaryButton>
              <SecondaryButton onClick={scrollToServices}>
                View Services
                <ArrowRight size={18} />
              </SecondaryButton>
            </div>
          </div>
        </section>

        {/* ===== Services ===== */}
        <section id="services" className="px-8 py-16 md:py-24 relative overflow-hidden bg-white">
          <BackgroundOrb className="top-[15%] left-[5%]" />

          <div className="max-w-5xl mx-auto relative z-10">
            <SectionHeader eyebrow="Services" title="What we do" />
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== Managed HatchIt ===== */}
        <section
          id="hatchit"
          className="px-8 py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A]"
        >
          <BackgroundOrb className="top-[20%] left-[10%]" size="xl" blur="xl" color="cyan" />
          <BackgroundOrb className="bottom-[10%] right-[15%]" size="lg" blur="lg" color="bright" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <p className="text-[#00A5C7] text-[0.813rem] uppercase tracking-[0.2em] font-medium mb-4">
                  Featured Product
                </p>
                <h2 className="text-white text-[clamp(2.25rem,4vw,3.25rem)] font-normal leading-tight tracking-tight mb-2">
                  Managed HatchIt
                </h2>
                <p className="text-[#C0C8D0] text-base leading-normal mb-6">
                  Describe it. Build it. Ship it.
                </p>
                <p className="text-[#C0C8D0] text-lg leading-relaxed mb-8">
                  Tell us what you want. We generate the code. You own it forever.
                </p>
                <ul className="space-y-3 mb-8">
                  {hatchItFeatures.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#00A5C7] mt-0.5 shrink-0" />
                      <span className="text-[#D8DCE0] text-[0.938rem]">{item}</span>
                    </li>
                  ))}
                </ul>
                <PrimaryButton onClick={() => navigate('/contact')} variant="dark">
                  Get Started
                  <ArrowRight size={18} />
                </PrimaryButton>
              </div>

              {/* Pricing Card */}
              <div className="p-8 relative rounded-2xl backdrop-blur-xl bg-[#18181B]/60 border border-[#00D4FF]/20">
                <div className="absolute -top-5 -right-5 w-36 h-36 rounded-full bg-[#00D4FF]/15 blur-[40px] pointer-events-none" />

                <div className="relative z-10">
                  <p className="text-[#00D4FF] text-[0.813rem] uppercase tracking-[0.15em] font-medium text-center mb-6">
                    Simple Pricing
                  </p>

                  {/* Build Price */}
                  <div className="text-center mb-8 pb-8 border-b border-[#00D4FF]/15">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-white text-5xl font-light">€999</span>
                      <span className="text-[#C0C8D0]">one-off</span>
                    </div>
                    <p className="text-[#C0C8D0] text-[0.938rem]">Landing page build</p>
                  </div>

                  {/* Management Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-white text-3xl font-light">€199</span>
                      <span className="text-[#C0C8D0]">/month</span>
                    </div>
                    <p className="text-[#C0C8D0] text-[0.938rem]">Ongoing management</p>
                    <p className="text-[#D8DCE0] text-[0.813rem] mt-2">Includes hosting</p>
                  </div>

                  <p className="text-[#C0C8D0] text-[0.813rem] text-center leading-normal">
                    Your code. Your repo. Your rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Recent Transformations ===== */}
        <section className="px-8 py-16 md:py-24 relative overflow-hidden bg-white">
          <BackgroundOrb className="bottom-[10%] right-[8%]" size="lg" />

          <div className="max-w-5xl mx-auto relative z-10">
            <SectionHeader eyebrow="Recent Transformations" title="Client results across industries" />
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
              <div className="border-b border-[#EBEBEF]" />
            </div>
          </div>
        </section>

        {/* ===== Why Wolsten ===== */}
        <section className="px-8 py-16 md:py-24 relative overflow-hidden bg-white">
          <BackgroundOrb className="top-[20%] right-[10%]" size="md" />

          <div className="max-w-5xl mx-auto relative z-10">
            <SectionHeader
              eyebrow="Why Wolsten"
              title="Why businesses choose Wolsten Studios"
              description="We partner with business owners, directors, and leadership teams to rebuild the brand, website, and growth foundation their next stage requires."
              align="center"
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

        {/* ===== Final CTA ===== */}
        <section className="px-8 py-32 relative overflow-hidden bg-[#0A0A0A]">
          <BackgroundOrb className="top-[15%] left-[10%]" size="lg" color="cyan" />
          <BackgroundOrb className="bottom-[20%] right-[15%]" size="md" color="bright" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-white text-[clamp(2.5rem,5vw,3.5rem)] font-light leading-tight mb-6">
              Let's Talk
            </h2>
            <p className="text-[#C0C8D0] text-lg leading-relaxed max-w-xl mx-auto mb-12">
              Tell us about your business and what you're looking to achieve. We'll get back to you within 48 hours.
            </p>
            <PrimaryButton onClick={() => navigate('/contact')} variant="dark">
              Get in Touch
              <ArrowRight size={18} />
            </PrimaryButton>
          </div>
        </section>
      </motion.main>
    </div>
  );
}
