import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { colors, effects, typography } from '../../config/theme';
import { fadeInUp, springs } from '../../config/animations';

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function CapabilityCard({ icon: Icon, title, description, delay = 0 }: CapabilityCardProps) {
  return (
    <motion.div
      className="p-8 relative overflow-hidden"
      style={effects.cardBorder}
      {...fadeInUp}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        ...springs.smooth,
        delay,
      }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 8px 24px rgba(0, 165, 199, 0.08)',
        scale: 1.01,
        transition: springs.bouncy,
      }}
    >
      <Icon size={32} style={{ color: colors.cyan.primary, marginBottom: '1.5rem' }} />
      <h3 
        className="mb-4"
        style={{ 
          color: colors.text.primary,
          ...typography.h3,
        }}
      >
        {title}
      </h3>
      <p 
        style={{ 
          color: colors.text.secondary,
          fontSize: '0.938rem',
          lineHeight: '1.7',
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}
