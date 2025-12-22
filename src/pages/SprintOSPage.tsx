import { Navigation } from '../components/Navigation';
import { ArrowRight, CheckCircle2, Lock, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { colors, spacing } from '../config/theme';
import { useRouter } from '../components/Router';

export function SprintOSPage() {
  const { navigate } = useRouter();
  
  return (
    <div style={{ backgroundColor: colors.background.light, minHeight: '100vh' }}>
      <Navigation />
      
      <motion.main 
        id="main-content" 
        style={{ paddingTop: '80px' }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
      
      {/* Hero Section */}
      <section className={`${spacing.section.px} pt-40 pb-24 max-w-5xl mx-auto relative overflow-hidden`}>
        {/* Subtle floating orb - static */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '10%',
            right: '5%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 165, 199, 0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        <div className="relative z-10">
          <p className="mb-4" style={{ color: colors.text.secondary, fontSize: '0.813rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>
            WOLSTEN STUDIOS PRESENTS
          </p>
          <h1 style={{ color: colors.text.primary, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: 300, maxWidth: '900px', marginBottom: '1.5rem' }}>
            SprintOS™
          </h1>
          <p style={{ color: colors.text.secondary, fontSize: '1.375rem', lineHeight: '1.5', maxWidth: '800px', marginBottom: '2rem', fontWeight: 300 }}>
            A 7–14 day transformation sprint that rebuilds your brand, website, and marketing foundation — clearly, professionally, and without the noise that modern agencies hide behind.
          </p>
          <div style={{ borderLeft: `3px solid ${colors.cyan.primary}`, paddingLeft: '1.5rem', marginBottom: '3.5rem' }}>
            <p style={{ color: colors.text.secondary, fontSize: '1.125rem', lineHeight: '1.8', maxWidth: '800px', marginBottom: '0.5rem' }}>
              Not a service.
            </p>
            <p style={{ color: colors.text.secondary, fontSize: '1.125rem', lineHeight: '1.8', maxWidth: '800px', marginBottom: '0.5rem' }}>
              Not a long retainer.
            </p>
            <p style={{ color: colors.text.primary, fontSize: '1.125rem', lineHeight: '1.8', maxWidth: '800px', fontWeight: 500 }}>
              A complete business refresh delivered with speed and precision.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            className="p-8" 
            style={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border.light}` }}
            whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <h3 className="mb-4" style={{ color: colors.text.primary, fontSize: '1.125rem', fontWeight: 500 }}>The Traditional Agency Model</h3>
            <ul className="space-y-3" style={{ color: colors.text.secondary, fontSize: '1rem', lineHeight: '1.8' }}>
              <li>→ 3–6 months of delays</li>
              <li>→ Endless revisions and shifting scope</li>
              <li>→ €30k–€50k fees with little accountability</li>
              <li>→ Multiple vendors who never align</li>
              <li>→ Flashy visuals that don't reflect the real business</li>
            </ul>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: `1px solid ${colors.border.light}` }}>
              <p style={{ color: colors.text.primary, fontSize: '1rem', lineHeight: '1.8', fontWeight: 400 }}>
                Business leaders aren't looking for fireworks.
              </p>
              <p style={{ color: colors.text.secondary, fontSize: '1rem', lineHeight: '1.8' }}>
                They want clarity, substance, and execution.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8" 
            style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.cyan.primary}` }}
            whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0, 165, 199, 0.15)' }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <h3 className="mb-4" style={{ color: colors.cyan.primary, fontSize: '1.125rem', fontWeight: 500 }}>The Wolsten SprintOS™ Model</h3>
            <ul className="space-y-3" style={{ color: colors.text.primary, fontSize: '1rem', lineHeight: '1.8' }}>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} style={{ color: colors.cyan.primary, flexShrink: 0, marginTop: '2px' }} />
                <span>A fully integrated transformation in 7–14 days</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} style={{ color: colors.cyan.primary, flexShrink: 0, marginTop: '2px' }} />
                <span>A structured methodology, not guesswork</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} style={{ color: colors.cyan.primary, flexShrink: 0, marginTop: '2px' }} />
                <span>Brand, website, and marketing rebuilt together</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} style={{ color: colors.cyan.primary, flexShrink: 0, marginTop: '2px' }} />
                <span>Practical clarity, modern identity, and measurable launch systems</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} style={{ color: colors.cyan.primary, flexShrink: 0, marginTop: '2px' }} />
                <span>One framework → complete and consistent execution</span>
              </li>
            </ul>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #E8EDE8' }}>
              <p style={{ color: colors.cyan.primary, fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
                This is for businesses that want progress, not presentations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Framework */}
      <section className={`${spacing.section.px} py-24 max-w-5xl mx-auto relative overflow-hidden`} style={{ borderTop: `1px solid ${colors.border.light}`, backgroundColor: colors.background.white }}>
        {/* Floating orb for depth - static */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '20%',
            left: '-10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 165, 199, 0.08) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-start gap-4 mb-12">
            <div>
              <Lock size={32} style={{ color: colors.cyan.primary, marginTop: '4px' }} />
            </div>
            <div>
              <h2 
                className="mb-4" 
                style={{ color: colors.text.primary, fontSize: '2.5rem', letterSpacing: '-0.02em', fontWeight: 300 }}
              >
                Proven Operating System
              </h2>
              <p style={{ color: colors.text.secondary, fontSize: '1.125rem', lineHeight: '1.7' }}>
                The five-stage framework behind rapid, structured business transformation:
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              className="p-6 relative overflow-hidden"
              style={{ 
                backgroundColor: colors.background.white,
                border: `1px solid rgba(0, 165, 199, 0.2)`,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
              whileHover={{ y: -2, boxShadow: '0 6px 16px rgba(0, 165, 199, 0.12)' }}
              transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              <h3 style={{ color: colors.cyan.primary, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>
                01 — Discovery
              </h3>
              <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7', fontWeight: 400 }}>
                Understand objectives, challenges, and the direction the business is moving toward.
              </p>
            </motion.div>

            <motion.div
              className="p-6 relative overflow-hidden"
              style={{ 
                backgroundColor: colors.background.white,
                border: `1px solid rgba(0, 165, 199, 0.2)`,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
              whileHover={{ y: -2, boxShadow: '0 6px 16px rgba(0, 165, 199, 0.12)' }}
              transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              <h3 style={{ color: colors.cyan.primary, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>
                02 — Strategy
              </h3>
              <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7', fontWeight: 400 }}>
                Define positioning, messaging architecture, and structural logic. Strategy is resolved as a system—not a deck—so execution begins with clarity, not assumptions.
              </p>
            </motion.div>

            <motion.div
              className="p-6 relative overflow-hidden"
              style={{ 
                backgroundColor: colors.background.white,
                border: `1px solid rgba(0, 165, 199, 0.2)`,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
              whileHover={{ y: -2, boxShadow: '0 6px 16px rgba(0, 165, 199, 0.12)' }}
              transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              <h3 style={{ color: colors.cyan.primary, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>
                03 — Execution
              </h3>
              <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7', fontWeight: 400, marginBottom: '0.75rem' }}>
                Structure, flows, and constraints are resolved within a working system before front-end build begins. Everything connects in one source—strategy informs structure, structure defines execution. This eliminates rework and enables calm, predictable delivery.
              </p>
            </motion.div>

            <motion.div
              className="p-6 relative overflow-hidden"
              style={{ 
                backgroundColor: colors.background.white,
                border: `1px solid rgba(0, 165, 199, 0.2)`,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
              whileHover={{ y: -2, boxShadow: '0 6px 16px rgba(0, 165, 199, 0.12)' }}
              transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              <h3 style={{ color: colors.cyan.primary, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>
                04 — Growth Setup
              </h3>
              <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7', fontWeight: 400 }}>
                Prepare advertising platforms, campaigns, analytics, and launch assets — ready for activation.
              </p>
            </motion.div>

            <motion.div
              className="p-6 relative overflow-hidden"
              style={{ 
                backgroundColor: colors.background.white,
                border: `1px solid rgba(0, 165, 199, 0.2)`,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
              whileHover={{ y: -2, boxShadow: '0 6px 16px rgba(0, 165, 199, 0.12)' }}
              transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              <h3 style={{ color: colors.cyan.primary, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>
                05 — Deployment
              </h3>
              <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7', fontWeight: 400 }}>
                Handover, documentation, and guidance to help your team operate confidently post-sprint.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className={`${spacing.section.px} py-24 max-w-5xl mx-auto`} style={{ borderTop: `1px solid ${colors.border.light}` }}>
        <h2 className="mb-16" style={{ color: colors.text.primary, fontSize: '2.5rem', letterSpacing: '-0.02em', fontWeight: 300 }}>
          Delivered in Your Sprint
        </h2>
        
        <div className="space-y-8">
          <motion.div 
            className="p-8" 
            style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}` }}
            whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 size={24} style={{ color: colors.cyan.primary, flexShrink: 0, marginTop: '2px' }} />
              <h3 style={{ color: colors.text.primary, fontSize: '1.5rem', fontWeight: 400 }}>
                Brand Rebuild
              </h3>
            </div>
            <p style={{ color: colors.text.secondary, fontSize: '1rem', lineHeight: '1.8', paddingLeft: '36px' }}>
              Clear positioning, structured messaging, and a professional visual identity that reflects the real maturity of your business.
            </p>
          </motion.div>

          <motion.div 
            className="p-8" 
            style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}` }}
            whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 size={24} style={{ color: colors.cyan.primary, flexShrink: 0, marginTop: '2px' }} />
              <h3 style={{ color: colors.text.primary, fontSize: '1.5rem', fontWeight: 400 }}>
                Website Rebuild
              </h3>
            </div>
            <p style={{ color: colors.text.secondary, fontSize: '1rem', lineHeight: '1.8', paddingLeft: '36px' }}>
              A modern, conversion-ready website built with React + Vite + Tailwind CSS — lightning-fast performance, Apple-level animations, and fully production-ready code. Not WordPress. Not templates. Real engineering.
            </p>
          </motion.div>

          <motion.div 
            className="p-8" 
            style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}` }}
            whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 size={24} style={{ color: colors.cyan.primary, flexShrink: 0, marginTop: '2px' }} />
              <h3 style={{ color: colors.text.primary, fontSize: '1.5rem', fontWeight: 400 }}>
                Growth Launch Setup
              </h3>
            </div>
            <p style={{ color: colors.text.secondary, fontSize: '1rem', lineHeight: '1.8', paddingLeft: '36px' }}>
              Google Ads, Meta Ads, and three prepared campaigns to help you generate demand immediately and consistently.
            </p>
          </motion.div>

          <motion.div 
            className="p-8" 
            style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}` }}
            whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 size={24} style={{ color: colors.cyan.primary, flexShrink: 0, marginTop: '2px' }} />
              <h3 style={{ color: colors.text.primary, fontSize: '1.5rem', fontWeight: 400 }}>
                Brand Assets Pack
              </h3>
            </div>
            <p style={{ color: colors.text.secondary, fontSize: '1rem', lineHeight: '1.8', paddingLeft: '36px' }}>
              Business cards, email signatures, letterheads, presentation templates, and social launch graphics.
            </p>
          </motion.div>

          <motion.div 
            className="p-8" 
            style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}` }}
            whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 size={24} style={{ color: colors.cyan.primary, flexShrink: 0, marginTop: '2px' }} />
              <h3 style={{ color: colors.text.primary, fontSize: '1.5rem', fontWeight: 400 }}>
                Documentation &amp; Handover
              </h3>
            </div>
            <p style={{ color: colors.text.secondary, fontSize: '1rem', lineHeight: '1.8', paddingLeft: '36px' }}>
              Everything packaged clearly and delivered in a format your team can actually understand and use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SprintOS Lite™ - Entry Point */}
      <section className={`${spacing.section.px} py-24 max-w-5xl mx-auto`} style={{ borderTop: `1px solid ${colors.border.light}`, backgroundColor: colors.background.light }}>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p style={{ color: colors.text.secondary, fontSize: '0.813rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '0.75rem' }}>
              ALTERNATIVE ENTRY POINT
            </p>
            <h2 className="mb-4" style={{ color: colors.text.primary, fontSize: '2rem', letterSpacing: '-0.02em', fontWeight: 300 }}>
              SprintOS Lite™
            </h2>
            <p style={{ color: colors.text.secondary, fontSize: '1.125rem', lineHeight: '1.7', maxWidth: '700px' }}>
              A focused 6-day reset for founders who need positioning clarity and usable brand foundations without a full transformation.
            </p>
          </div>

          {/* What's Included */}
          <div
            className="p-8 mb-8"
            style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}` }}
          >
            <h3 className="mb-6" style={{ color: colors.text.primary, fontSize: '1.125rem', fontWeight: 500 }}>
              What's Delivered
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div style={{ marginTop: '6px', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: colors.text.secondary, flexShrink: 0 }} />
                <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7' }}>
                  Positioning framework and messaging architecture
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div style={{ marginTop: '6px', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: colors.text.secondary, flexShrink: 0 }} />
                <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7' }}>
                  Visual identity system (logo, colour, typography)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div style={{ marginTop: '6px', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: colors.text.secondary, flexShrink: 0 }} />
                <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7' }}>
                  Core brand assets (business cards, email signature, letterhead)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div style={{ marginTop: '6px', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: colors.text.secondary, flexShrink: 0 }} />
                <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7' }}>
                  Brand guidelines document
                </p>
              </div>
            </div>
          </div>

          {/* Timeline & Scope */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6" style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}` }}>
              <p style={{ color: colors.text.secondary, fontSize: '0.813rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Timeline
              </p>
              <p style={{ color: colors.text.primary, fontSize: '1.5rem', fontWeight: 300, letterSpacing: '-0.01em' }}>
                6 days
              </p>
            </div>
            <div className="p-6" style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}` }}>
              <p style={{ color: colors.text.secondary, fontSize: '0.813rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Scope
              </p>
              <p style={{ color: colors.text.primary, fontSize: '1.5rem', fontWeight: 300, letterSpacing: '-0.01em' }}>
                Brand foundations
              </p>
            </div>
          </div>

          {/* When to Consider */}
          <div
            className="p-8"
            style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}`, borderLeft: `3px solid ${colors.text.secondary}` }}
          >
            <h3 className="mb-4" style={{ color: colors.text.primary, fontSize: '1.125rem', fontWeight: 500 }}>
              When to Consider SprintOS Lite™
            </h3>
            <p style={{ color: colors.text.secondary, fontSize: '0.938rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              If you already have a functioning website and growth systems but need clarity on positioning, messaging, and visual consistency — SprintOS Lite™ delivers the strategic foundations without rebuilding infrastructure.
            </p>
            <p style={{ color: colors.text.secondary, fontSize: '0.938rem', lineHeight: '1.7' }}>
              If you need a complete rebuild — website, brand, and growth architecture — the full SprintOS™ transformation remains the recommended approach.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <motion.button
              onClick={() => navigate('/application')}
              aria-label="Inquire about SprintOS Lite transformation package"
              className="border-0 cursor-pointer"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                backgroundColor: colors.text.secondary,
                color: colors.background.white,
                fontSize: '0.938rem',
                letterSpacing: '0.02em',
                fontWeight: 500,
                textDecoration: 'none',
              }}
              whileHover={{ 
                y: -2,
                backgroundColor: colors.text.primary,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
              }}
              transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              Inquire About SprintOS Lite™
            </motion.button>
          </div>
        </div>
      </section>

      {/* Investment Structure */}
      <section className={`${spacing.section.px} py-24 max-w-5xl mx-auto relative overflow-hidden`} style={{ borderTop: `1px solid ${colors.border.light}`, backgroundColor: colors.background.white }}>
        {/* Subtle background orb - static */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%',
            right: '-5%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 165, 199, 0.04) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        
        <div className="max-w-3xl mx-auto relative z-10">
          {/* Top accent line */}
          <div 
            style={{ 
              height: '2px', 
              backgroundColor: colors.cyan.primary,
              marginBottom: '3rem',
              boxShadow: '0 0 8px rgba(0, 165, 199, 0.3)',
            }}
          />
          
          {/* Main Investment Card */}
          <div 
            className="p-12 relative overflow-hidden"
            style={{ 
              backgroundColor: colors.background.white,
              border: '1px solid rgba(0, 165, 199, 0.15)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Subtle gradient overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 165, 199, 0.01) 0%, transparent 50%, rgba(0, 165, 199, 0.01) 100%)',
                pointerEvents: 'none',
              }}
            />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8 pb-6" style={{ borderBottom: '1px solid rgba(0, 165, 199, 0.1)' }}>
                <p style={{ color: colors.text.secondary, fontSize: '0.813rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>
                  SPRINT INVESTMENT
                </p>
                <h2 className="mb-2" style={{ color: colors.text.primary, fontSize: '2.5rem', letterSpacing: '-0.02em', fontWeight: 300 }}>
                  Fixed-Price Structure
                </h2>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <p 
                  className="mb-2" 
                  style={{ 
                    color: colors.cyan.primary, 
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                    fontWeight: 300, 
                    letterSpacing: '-0.02em',
                    textShadow: '0 1px 6px rgba(0, 165, 199, 0.15)',
                  }}
                >
                  €15k–€35k
                </p>
                <p style={{ color: colors.text.secondary, fontSize: '0.938rem', letterSpacing: '0.02em', fontWeight: 500 }}>
                  Per Sprint
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4" style={{ backgroundColor: 'rgba(250, 250, 252, 0.5)', borderLeft: '2px solid rgba(0, 165, 199, 0.4)' }}>
                  <div style={{ marginTop: '2px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(0, 165, 199, 0.5)' }} />
                  </div>
                  <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7', fontWeight: 400 }}>
                    7–14 day delivery timeline
                  </p>
                </div>
                
                <div className="flex items-start gap-3 p-4" style={{ backgroundColor: 'rgba(250, 250, 252, 0.5)', borderLeft: '2px solid rgba(0, 165, 199, 0.4)' }}>
                  <div style={{ marginTop: '2px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(0, 165, 199, 0.5)' }} />
                  </div>
                  <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7', fontWeight: 400 }}>
                    Fixed scope — no hidden fees or scope creep
                  </p>
                </div>
                
                <div className="flex items-start gap-3 p-4" style={{ backgroundColor: 'rgba(250, 250, 252, 0.5)', borderLeft: '2px solid rgba(0, 165, 199, 0.4)' }}>
                  <div style={{ marginTop: '2px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(0, 165, 199, 0.5)' }} />
                  </div>
                  <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7', fontWeight: 400 }}>
                    Limited to 3 sprints per quarter for quality assurance
                  </p>
                </div>
              </div>

              {/* Footer note */}
              <div className="text-center pt-6" style={{ borderTop: '1px solid rgba(0, 165, 199, 0.1)' }}>
                <p style={{ color: colors.text.secondary, fontSize: '0.875rem', lineHeight: '1.7', fontStyle: 'italic' }}>
                  Payment structure and sprint availability confirmed during initial consultation
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div 
            style={{ 
              height: '2px', 
              backgroundColor: colors.cyan.primary,
              marginTop: '3rem',
              boxShadow: '0 0 8px rgba(0, 165, 199, 0.3)',
            }}
          />
        </div>
      </section>

      {/* Why This Works */}
      <section className={`${spacing.section.px} py-24 max-w-5xl mx-auto`} style={{ borderTop: `1px solid ${colors.border.light}` }}>
        <h2 className="mb-12" style={{ color: colors.text.primary, fontSize: '2.5rem', letterSpacing: '-0.02em', fontWeight: 300 }}>
          Why SprintOS™ Works
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="p-8"
            style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}` }}
            whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mb-4">
              <Award size={32} style={{ color: colors.cyan.primary }} />
            </div>
            <h3 className="mb-3" style={{ color: colors.text.primary, fontSize: '1.25rem', fontWeight: 500 }}>
              A practical methodology
            </h3>
            <p style={{ color: colors.text.secondary, fontSize: '0.938rem', lineHeight: '1.7' }}>
              Not theory or jargon — a structured process designed around the needs of established businesses.
            </p>
          </motion.div>

          <motion.div
            className="p-8"
            style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}` }}
            whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mb-4">
              <Users size={32} style={{ color: colors.cyan.primary }} />
            </div>
            <h3 className="mb-3" style={{ color: colors.text.primary, fontSize: '1.25rem', fontWeight: 500 }}>
              Clear, dependable execution
            </h3>
            <p style={{ color: colors.text.secondary, fontSize: '0.938rem', lineHeight: '1.7' }}>
              No bright colours, gimmicks, or unnecessary reinvention. Clarity and professionalism lead the process.
            </p>
          </motion.div>

          <motion.div
            className="p-8"
            style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}` }}
            whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mb-4">
              <BookOpen size={32} style={{ color: colors.cyan.primary }} />
            </div>
            <h3 className="mb-3" style={{ color: colors.text.primary, fontSize: '1.25rem', fontWeight: 500 }}>
              Fast, modern delivery
            </h3>
            <p style={{ color: colors.text.secondary, fontSize: '0.938rem', lineHeight: '1.7' }}>
              Using next-generation tools to deliver in days what the average agency spends months discussing.
            </p>
          </motion.div>

          <motion.div
            className="p-8"
            style={{ backgroundColor: colors.background.white, border: `1px solid ${colors.border.light}` }}
            whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mb-4">
              <Lock size={32} style={{ color: colors.cyan.primary }} />
            </div>
            <h3 className="mb-3" style={{ color: colors.text.primary, fontSize: '1.25rem', fontWeight: 500 }}>
              Complete documentation
            </h3>
            <p style={{ color: colors.text.secondary, fontSize: '0.938rem', lineHeight: '1.7' }}>
              Your team receives everything needed to operate independently — without ongoing retainers or dependency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Licensing & Certification Teaser */}
      <section className={`${spacing.section.px} py-24 max-w-5xl mx-auto`} style={{ borderTop: `1px solid ${colors.border.light}`, backgroundColor: colors.border.light }}>
        <div 
          className="max-w-3xl p-10"
          style={{ backgroundColor: colors.background.white, borderLeft: `4px solid ${colors.cyan.primary}` }}
        >
          <div className="flex items-start gap-3 mb-6">
            <Lock size={24} style={{ color: colors.cyan.primary }} />
            <h2 style={{ color: colors.text.primary, fontSize: '2rem', letterSpacing: '-0.02em', fontWeight: 300 }}>
              Wolsten SprintOS™ Certification
            </h2>
          </div>
          <p className="mb-6" style={{ color: colors.text.secondary, fontSize: '1.125rem', lineHeight: '1.8' }}>
            The SprintOS™ methodology will soon be available for licensing to agencies, consultants, and enterprises.
          </p>
          <p style={{ color: colors.text.tertiary, fontSize: '0.938rem', lineHeight: '1.7' }}>
            Certification opens in Q2 2026.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={`${spacing.section.px} py-32 max-w-5xl mx-auto relative overflow-hidden`} style={{ borderTop: `1px solid ${colors.border.light}`, backgroundColor: colors.background.white }}>
        {/* Ambient orbs for depth - static */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '20%',
            left: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 165, 199, 0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '10%',
            right: '5%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 165, 199, 0.04) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        
        <div className="text-center max-w-3xl mx-auto relative z-10">
          {/* Top accent line */}
          <div 
            className="mx-auto mb-12"
            style={{ 
              height: '1px', 
              width: '120px',
              background: `linear-gradient(90deg, transparent, ${colors.cyan.primary}, transparent)`,
            }}
          />
          
          <h2 
            className="mb-6" 
            style={{ 
              color: colors.text.primary, 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              letterSpacing: '-0.02em', 
              fontWeight: 300 
            }}
          >
            Ready to move forward?
          </h2>
          
          <p 
            className="mb-8" 
            style={{ color: colors.text.secondary, fontSize: '1.125rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 2rem' }}
          >
            If you're leading a business and know your brand, website, or marketing no longer reflects who you are — SprintOS™ is designed for you.
          </p>
          
          {/* Glass container with structured info */}
          <div
            className="p-8 mb-10 relative overflow-hidden"
            style={{
              backgroundColor: colors.background.white,
              border: '1px solid rgba(0, 165, 199, 0.2)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            }}
          >
            {/* Subtle gradient sweep */}
            <div 
              className="absolute inset-0 opacity-50"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 165, 199, 0.02) 0%, transparent 40%, rgba(0, 165, 199, 0.02) 100%)',
                pointerEvents: 'none',
              }}
            />
            
            <div className="relative z-10 grid grid-cols-3 gap-8">
              <div className="text-center">
                <p style={{ color: colors.cyan.primary, fontSize: '2rem', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                  7–14
                </p>
                <p style={{ color: colors.text.secondary, fontSize: '0.813rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Days
                </p>
              </div>
              
              <div className="text-center" style={{ borderLeft: '1px solid rgba(0, 165, 199, 0.15)', borderRight: '1px solid rgba(0, 165, 199, 0.15)' }}>
                <p style={{ color: colors.cyan.primary, fontSize: '2rem', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                  5
                </p>
                <p style={{ color: colors.text.secondary, fontSize: '0.813rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Deliverables
                </p>
              </div>
              
              <div className="text-center">
                <p style={{ color: colors.cyan.primary, fontSize: '2rem', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                  48h
                </p>
                <p style={{ color: colors.text.secondary, fontSize: '0.813rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Response
                </p>
              </div>
            </div>
          </div>
          
          {/* Premium CTA button */}
          <div>
            <motion.button
              onClick={() => navigate('/application')}
              aria-label="Submit inquiry for SprintOS transformation"
              className="inline-flex items-center gap-3 px-10 py-5 relative overflow-hidden border-0 cursor-pointer"
              style={{ 
                backgroundColor: colors.background.dark, 
                color: colors.background.white, 
                fontSize: '1rem', 
                letterSpacing: '0.02em',
                fontWeight: 500,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                textDecoration: 'none',
              }}
              whileHover={{
                y: -2,
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.2)',
              }}
              transition={{
                duration: 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <span>Submit Inquiry</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
          
          {/* Bottom subtle note */}
          <p 
            className="mt-8" 
            style={{ color: '#949797', fontSize: '0.875rem', lineHeight: '1.7', fontStyle: 'italic' }}
          >
            Limited availability — only 3 sprints per quarter
          </p>
          
          {/* Bottom accent line */}
          <div 
            className="mx-auto mt-12"
            style={{ 
              height: '1px', 
              width: '120px',
              background: `linear-gradient(90deg, transparent, ${colors.cyan.primary}, transparent)`,
            }}
          />
        </div>
      </section>
      </motion.main>
    </div>
  );
}