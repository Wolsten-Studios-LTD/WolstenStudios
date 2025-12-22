import { motion } from 'motion/react';

interface FloatingOrbProps {
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size?: string;
  color?: string;
  opacity?: number;
  blur?: string;
  duration?: number;
  delay?: number;
  isMobile: boolean;
  shouldReduceMotion: boolean;
}

export function FloatingOrb({
  position,
  size = '300px',
  color = 'rgba(0, 165, 199, 0.06)',
  opacity = 1,
  blur = '50px',
  duration = 18,
  delay = 0,
  isMobile,
  shouldReduceMotion,
}: FloatingOrbProps) {
  if (isMobile || shouldReduceMotion) return null;
  
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        ...position,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur})`,
        opacity,
        willChange: 'transform',
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
