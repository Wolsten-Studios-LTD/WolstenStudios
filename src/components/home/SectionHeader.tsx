import { motion } from 'motion/react';
import { fadeInUp, durations, easings } from '../../config/animations';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  align = 'left',
  light = false,
}: SectionHeaderProps) {
  const centered = align === 'center';
  
  return (
    <motion.div 
      className={`mb-16 ${centered ? 'text-center' : ''}`}
      {...fadeInUp}
      transition={{ duration: durations.medium, ease: easings.smooth }}
    >
      <p className={`mb-4 text-xs font-semibold tracking-[0.15em] uppercase ${light ? 'text-cyan-400' : 'text-slate-500'}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight max-w-[700px] ${centered ? 'mx-auto' : ''} ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-lg leading-relaxed max-w-[600px] ${centered ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
