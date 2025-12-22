import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ScrollScaleProps {
  children: ReactNode;
  scaleRange?: [number, number];
  className?: string;
}

export function ScrollScale({ 
  children, 
  scaleRange = [0.8, 1],
  className = ''
}: ScrollScaleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], scaleRange[1], scaleRange[0]]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}
