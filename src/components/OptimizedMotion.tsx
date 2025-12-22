import { motion, MotionProps } from 'motion/react';
import { useEffect, useState } from 'react';

/**
 * OptimizedMotion component that reduces animation complexity on mobile devices
 * to prevent stuttering and improve performance
 */

export function OptimizedMotion({ 
  children, 
  initial, 
  whileInView, 
  whileHover,
  viewport, 
  transition,
  ...props 
}: MotionProps & { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is mobile/low-power
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // On mobile, simplify animations - only fade, no transforms
  const mobileInitial = isMobile && initial ? { opacity: 0 } : initial;
  const mobileWhileInView = isMobile && whileInView ? { opacity: 1 } : whileInView;
  const mobileWhileHover = isMobile ? undefined : whileHover; // Disable hover on mobile
  const mobileTransition = isMobile && transition 
    ? { duration: 0.3, ease: 'easeOut' } 
    : transition;

  return (
    <motion.div
      initial={mobileInitial}
      whileInView={mobileWhileInView}
      whileHover={mobileWhileHover}
      viewport={viewport}
      transition={mobileTransition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
