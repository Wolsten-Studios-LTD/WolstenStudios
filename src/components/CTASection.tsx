import { motion } from 'motion/react';

export function CTASection() {
  return (
    <section className="py-32 px-8" style={{ backgroundColor: '#0E0E0E' }}>
      <div className="max-w-7xl mx-auto">
        <div 
          className="rounded-lg p-20 text-center"
          style={{ 
            backgroundColor: '#2E584E',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <h2 
            className="mb-6 max-w-3xl mx-auto"
            style={{ 
              color: '#FAFAFC',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
            }}
          >
            Ready to build something exceptional?
          </h2>
          <p 
            className="mb-10 max-w-2xl mx-auto"
            style={{ 
              color: 'rgba(250, 250, 252, 0.7)',
              fontSize: '1.125rem',
              lineHeight: '1.7',
            }}
          >
            Let&apos;s discuss how we can help you operate better, look better, and scale faster.
          </p>
          <div className="flex gap-4 justify-center">
            <motion.a
              href="/application"
              className="px-10 py-5 rounded transition-all inline-block"
              style={{ 
                backgroundColor: '#FAFAFC',
                color: '#0E0E0E',
                fontSize: '1rem',
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
            </motion.a>
            <motion.a
              href="/application"
              className="px-10 py-5 rounded transition-all inline-block"
              style={{ 
                backgroundColor: '#FAFAFC',
                color: '#0E0E0E',
                fontSize: '1rem',
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Call
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}