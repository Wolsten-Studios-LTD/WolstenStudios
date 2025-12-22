import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  variant?: 'fade' | 'slide' | 'scale' | 'stagger';
}

export function AnimatedSection({ children, delay = 0, variant = 'fade' }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Subtle parallax effect (disabled on mobile)
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const variants = {
    fade: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 }
    },
    slide: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 }
    },
    stagger: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    }
  };

  // On mobile or reduced motion, skip animations
  if (isMobile || shouldReduceMotion) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={variants[variant].initial}
      animate={isVisible ? variants[variant].animate : variants[variant].initial}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      style={{ y: variant === 'fade' ? y : 0 }}
    >
      {children}
    </motion.div>
  );
}