import { motion } from 'motion/react';
import { colors, typography } from '../../config/theme';
import { easings, durations } from '../../config/animations';

interface TransformationRowProps {
  company: string;
  industry: string;
  result: string;
  index: number;
  isMobile: boolean;
  shouldReduceMotion: boolean;
}

export function TransformationRow({ 
  company, 
  industry, 
  result, 
  index,
  isMobile,
  shouldReduceMotion 
}: TransformationRowProps) {
  return (
    <motion.div
      initial={{ opacity: 1, x: 0 }}
      whileInView={!isMobile && !shouldReduceMotion ? { opacity: 1, x: 0 } : {}}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        !isMobile && !shouldReduceMotion
          ? {
              duration: durations.medium,
              delay: index * 0.1,
              ease: easings.smooth,
            }
          : { duration: 0 }
      }
      whileHover={
        !isMobile && !shouldReduceMotion
          ? { 
              x: 8,
              borderTopColor: 'rgba(0, 212, 255, 0.4)',
              boxShadow: '0 4px 16px rgba(0, 165, 199, 0.06)',
              transition: { 
                duration: durations.fast,
                ease: easings.easeOut,
              }
            }
          : {}
      }
      className="p-8 transition-all hover:bg-white relative group"
      style={{ 
        backgroundColor: 'transparent',
        borderTop: `1px solid ${colors.border.light}`,
      }}
    >
      {/* Cyan accent dot */}
      <div
        className="absolute w-1.5 h-1.5 rounded-full"
        style={{ 
          backgroundColor: colors.cyan.primary, 
          left: isMobile ? '8px' : '12px', 
          top: isMobile ? '36px' : '42px' 
        }}
      />
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="md:w-1/3">
          <h3 
            className="mb-2"
            style={{ 
              color: colors.text.primary,
              ...typography.h3,
            }}
          >
            {company}
          </h3>
          <p 
            style={{ 
              color: colors.text.tertiary,
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
            }}
          >
            {industry}
          </p>
        </div>
        <div className="md:w-2/3">
          <p 
            style={{ 
              color: colors.text.secondary,
              ...typography.body,
            }}
          >
            {result}
          </p>
        </div>
      </div>
    </motion.div>
  );
}