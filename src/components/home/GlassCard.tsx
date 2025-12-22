import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { effects } from '../../config/theme';
import { scaleIn, springs } from '../../config/animations';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  withCornerOrb?: boolean;
  hoverable?: boolean;
}

export function GlassCard({ children, className = '', withCornerOrb = false, hoverable = true }: GlassCardProps) {
  return (
    <motion.div 
      className={`p-10 relative overflow-hidden ${className}`}
      style={effects.glass}
      {...scaleIn}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.34, 1.56, 0.64, 1],
        ...springs.smooth,
      }}
      whileHover={hoverable ? {
        scale: 1.02,
        y: -5,
        transition: springs.bouncy,
      } : {}}
    >
      {withCornerOrb && (
        <motion.div 
          className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 blur-xl"
          style={{
            background: 'radial-gradient(circle, #00D4FF, transparent)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      {children}
    </motion.div>
  );
}
