import { Navigation } from '../components/Navigation';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Calendar, Zap } from 'lucide-react';
import { useEffect } from 'react';
import { colors, spacing } from '../config/theme';

export function ThankYouPage() {
  // Fire Google Ads conversion tracking
  useEffect(() => {
    // Removed redundant scroll logic - now handled by Router
    
    // Fire Google Ads conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17799960396/9S24CLS-hdQbEMyu16dC'
      });
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background.light }}>
      <Navigation />
      <main id="main-content">
        {/* Hero Section */}
        <section className={`${spacing.section.px} pt-40 pb-20`}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Success Icon */}
              <div className="mb-10 flex justify-center">
                <motion.div 
                  style={{ 
                    width: '96px', 
                    height: '96px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(0, 165, 199, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                >
                  <CheckCircle2 size={48} style={{ color: colors.cyan.primary }} />
                </motion.div>
              </div>

              {/* Heading */}
              <motion.h1 
                className="mb-6"
                style={{ 
                  color: colors.text.primary,
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: 300,
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                Application Received
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                className="mb-4"
                style={{ 
                  color: colors.text.secondary,
                  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                  lineHeight: '1.6',
                  maxWidth: '700px',
                  margin: '0 auto 1rem',
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                Thank you for getting in touch. We review all inquiries and will respond within 48 hours.
              </motion.p>

              {/* Additional context */}
              <motion.p 
                style={{ 
                  color: colors.text.tertiary,
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  fontStyle: 'italic',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
              >
                If aligned, we'll invite you to a short scoping call.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className={`${spacing.section.px} pb-20`}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 
                className="text-center mb-12"
                style={{ 
                  color: colors.text.primary,
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  letterSpacing: '-0.02em',
                  fontWeight: 400,
                }}
              >
                What Happens Next
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <motion.div
                  className="p-8 text-center"
                  style={{
                    backgroundColor: colors.background.white,
                    border: `1px solid ${colors.border.light}`,
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ y: -2 }}
                >
                  <div className="mb-6 flex justify-center">
                    <div 
                      style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(0, 165, 199, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span style={{ color: colors.cyan.primary, fontSize: '1.5rem', fontWeight: 500 }}>1</span>
                    </div>
                  </div>
                  <h3 
                    className="mb-3"
                    style={{ 
                      color: colors.text.primary,
                      fontSize: '1.125rem',
                      fontWeight: 500,
                    }}
                  >
                    Manual Review
                  </h3>
                  <p style={{ color: colors.text.secondary, fontSize: '0.938rem', lineHeight: '1.7' }}>
                    We personally review every application to ensure alignment with your goals and our expertise.
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  className="p-8 text-center"
                  style={{
                    backgroundColor: colors.background.white,
                    border: `1px solid ${colors.border.light}`,
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ y: -2 }}
                >
                  <div className="mb-6 flex justify-center">
                    <div 
                      style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(0, 165, 199, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Calendar size={24} style={{ color: colors.cyan.primary }} />
                    </div>
                  </div>
                  <h3 
                    className="mb-3"
                    style={{ 
                      color: colors.text.primary,
                      fontSize: '1.125rem',
                      fontWeight: 500,
                    }}
                  >
                    48-Hour Response
                  </h3>
                  <p style={{ color: colors.text.secondary, fontSize: '0.938rem', lineHeight: '1.7' }}>
                    If there's alignment, we'll reach out within 48 hours to schedule a short scoping call.
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  className="p-8 text-center"
                  style={{
                    backgroundColor: colors.background.white,
                    border: `1px solid ${colors.border.light}`,
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ y: -2 }}
                >
                  <div className="mb-6 flex justify-center">
                    <div 
                      style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(0, 165, 199, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Zap size={24} style={{ color: colors.cyan.primary }} />
                    </div>
                  </div>
                  <h3 
                    className="mb-3"
                    style={{ 
                      color: colors.text.primary,
                      fontSize: '1.125rem',
                      fontWeight: 500,
                    }}
                  >
                    Fast-Track Start
                  </h3>
                  <p style={{ color: colors.text.secondary, fontSize: '0.938rem', lineHeight: '1.7' }}>
                    After alignment, we can typically begin your transformation sprint within 7-14 days.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info Box */}
        <section className={`${spacing.section.px} pb-20`}>
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="p-10 text-center"
              style={{
                backgroundColor: 'rgba(0, 165, 199, 0.05)',
                border: '1px solid rgba(0, 165, 199, 0.2)',
                borderLeft: `4px solid ${colors.cyan.primary}`,
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <h3 
                className="mb-3"
                style={{ 
                  color: colors.text.primary,
                  fontSize: '1.125rem',
                  fontWeight: 500,
                }}
              >
                Questions in the Meantime?
              </h3>
              <p 
                className="mb-4"
                style={{ color: colors.text.secondary, fontSize: '0.938rem', lineHeight: '1.7' }}
              >
                Feel free to connect with us on LinkedIn if you have any questions while we review your application.
              </p>
              <motion.a
                href="https://www.linkedin.com/company/110592070/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: colors.cyan.primary,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  borderBottom: `1px solid ${colors.cyan.primary}`,
                  paddingBottom: '2px',
                  display: 'inline-block',
                }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                Wolsten Studios on LinkedIn
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className={`${spacing.section.px} pb-32`}>
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.55, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Primary CTA - Return Home */}
              <motion.a
                href="/"
                className="inline-flex items-center justify-center gap-3 px-10 py-5"
                style={{ 
                  backgroundColor: colors.background.dark,
                  color: colors.background.white,
                  fontSize: '1rem',
                  letterSpacing: '0.02em',
                  fontWeight: 500,
                  textDecoration: 'none',
                  border: 'none',
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                Return to Homepage
                <ArrowRight size={20} />
              </motion.a>

              {/* Secondary CTA - View Services */}
              <motion.a
                href="/#services"
                className="inline-flex items-center justify-center gap-3 px-10 py-5"
                style={{ 
                  backgroundColor: colors.background.white,
                  color: colors.text.primary,
                  fontSize: '1rem',
                  letterSpacing: '0.02em',
                  fontWeight: 500,
                  textDecoration: 'none',
                  border: `1px solid ${colors.border.default}`,
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                View Our Services
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}