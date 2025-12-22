import { motion } from 'motion/react';
import { colors, typography } from '../../config/theme';
import { fadeInUp, durations, easings } from '../../config/animations';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  maxWidth?: string;
}

export function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  align = 'left',
  light = false,
  maxWidth = '700px'
}: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : '';
  const marginAuto = align === 'center' ? 'mx-auto' : '';
  
  return (
    <motion.div 
      className={`mb-16 ${textAlign}`}
      {...fadeInUp}
      transition={{ duration: durations.medium, ease: easings.smooth }}
    >
      <p 
        className="mb-4"
        style={{ 
          color: light ? colors.cyan.primary : colors.text.secondary,
          ...typography.eyebrow,
        }}
      >
        {eyebrow}
      </p>
      <h2 
        className={marginAuto}
        style={{ 
          color: light ? colors.text.white : colors.text.primary,
          ...typography.h2,
          maxWidth: maxWidth,
        }}
      >
        {title}
      </h2>
      {description && (
        <p 
          className={`mt-6 ${marginAuto}`}
          style={{ 
            color: light ? colors.text.light : colors.text.secondary,
            fontSize: '1.125rem',
            lineHeight: '1.7',
            maxWidth: '600px',
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
