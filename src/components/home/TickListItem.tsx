import { motion } from 'motion/react';
import { AnimatedTick } from '../AnimatedTick';
import { colors, typography } from '../../config/theme';
import { fadeInUp, springs } from '../../config/animations';

interface TickListItemProps {
  children: React.ReactNode;
  delay?: number;
  color?: string;
  light?: boolean;
}

export function TickListItem({ children, delay = 0, color, light = false }: TickListItemProps) {
  const tickColor = color || colors.cyan.primary;
  const textColor = light ? colors.text.lighter : colors.text.secondary;
  
  return (
    <motion.div 
      className="flex items-start gap-3"
      {...fadeInUp}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        ...springs.gentle,
        delay,
      }}
    >
      <AnimatedTick size={20} color={tickColor} delay={delay} variant="draw" />
      <p style={{ color: textColor, ...typography.body }}>
        {children}
      </p>
    </motion.div>
  );
}
