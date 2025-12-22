import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ScrollParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export function ScrollParallax({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = ''
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, multiplier * 100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
