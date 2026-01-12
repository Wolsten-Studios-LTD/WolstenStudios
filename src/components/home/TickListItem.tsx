import { motion } from 'motion/react';
import { AnimatedTick } from '../AnimatedTick';
import { fadeInUp, springs } from '../../config/animations';

interface TickListItemProps {
  children: React.ReactNode;
  delay?: number;
  color?: string;
  light?: boolean;
}

export function TickListItem({ children, delay = 0, color = '#00d4ff', light = false }: TickListItemProps) {
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
      <AnimatedTick size={20} color={color} delay={delay} variant="draw" />
      <p className={`text-base leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
        {children}
      </p>
    </motion.div>
  );
}
