import { motion } from 'motion/react';
import logoImage from 'figma:asset/a5311816e964141c6c5c555979c2eb1351d0fe85.png';

export function Hero() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0E0E0E' }}>
      {/* Navigation */}
      <nav className="px-8 py-6 flex items-center justify-between border-b" style={{ borderColor: '#2C2D2D' }}>
        <a href="#/">
          <img 
            src={logoImage} 
            alt="Wolsten Studios logo" 
            className="w-auto"
            style={{ height: '32px', display: 'block' }}
          />
        </a>
        <div className="flex gap-12 text-sm" style={{ color: '#949797' }}>
          <a 
            onClick={scrollToWork}
            className="hover:opacity-100 transition-opacity cursor-pointer" 
            style={{ color: '#FAFAFC' }}
          >
            Work
          </a>
          <a 
            href="#/application" 
            className="hover:opacity-100 transition-opacity" 
            style={{ color: '#949797' }}
          >
            SprintOS™
          </a>
          <a 
            href="#/about" 
            className="hover:opacity-100 transition-opacity" 
            style={{ color: '#949797' }}
          >
            About
          </a>
          <a 
            href="#/contact" 
            className="hover:opacity-100 transition-opacity" 
            style={{ color: '#949797' }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-5xl w-full">
          <div className="flex flex-col items-center text-center">
            {/* Main Heading */}
            <motion.h1 
              className="mb-8 max-w-4xl"
              style={{ 
                color: '#FAFAFC',
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                fontWeight: 300,
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Design systems that help you{' '}
              <span style={{ color: '#2E584E', fontWeight: 400 }}>scale</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              className="mb-12 max-w-2xl"
              style={{ 
                color: '#949797',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.6',
                letterSpacing: '0.01em',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            >
              We build brand identities, websites, and digital systems for companies ready to operate better, look better, and scale faster.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
            >
              <motion.button 
                onClick={scrollToWork}
                className="px-8 py-4 rounded transition-all"
                style={{ 
                  backgroundColor: '#2E584E',
                  color: '#FAFAFC',
                  fontSize: '0.95rem',
                  letterSpacing: '0.02em',
                }}
                whileHover={{ scale: 1.05, backgroundColor: '#3a6d5e' }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Work
              </motion.button>
              <motion.a
                href="#/application"
                className="px-8 py-4 rounded border transition-all inline-block"
                style={{ 
                  borderColor: '#2C2D2D',
                  color: '#FAFAFC',
                  fontSize: '0.95rem',
                  letterSpacing: '0.02em',
                }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        className="pb-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToWork}
          whileHover={{ y: 5 }}
          transition={{ duration: 0.3 }}
        >
          <span style={{ color: '#606260', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <div className="w-px h-12 opacity-30" style={{ backgroundColor: '#949797' }} />
        </motion.div>
      </motion.div>
    </div>
  );
}