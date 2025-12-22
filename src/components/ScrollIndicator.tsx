import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      onClick={() => window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' })}
    >
      <p style={{ color: '#949797', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Scroll
      </p>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <ChevronDown size={20} style={{ color: '#949797' }} />
      </motion.div>
    </motion.div>
  );
}
