import { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useReducedMotion } from 'motion/react';

interface MagneticIconProps {
  children: React.ReactNode;
  strength?: number; // 0-1, how strong the magnetic effect is (default 0.15)
  range?: number; // pixels from center where effect activates (default 80)
  className?: string;
  style?: React.CSSProperties;
}

export function MagneticIcon({ 
  children, 
  strength = 0.15, 
  range = 80,
  className,
  style 
}: MagneticIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for x and y position
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring configuration for restrained, premium feel
  const springConfig = {
    damping: 35,      // High damping = more resistance
    stiffness: 150,   // Lower stiffness = slower response
    mass: 1.2,        // Slight mass for inertia
  };
  
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Only activate within range
      if (distance < range) {
        // Calculate intensity based on distance (closer = stronger)
        const intensity = 1 - (distance / range);
        
        // Apply very subtle movement (max 3px at full intensity)
        const maxMovement = 3;
        const moveX = (deltaX / range) * maxMovement * strength * intensity;
        const moveY = (deltaY / range) * maxMovement * strength * intensity;
        
        x.set(moveX);
        y.set(moveY);
      } else if (!isHovered) {
        // Gently return to center when mouse is far away
        x.set(0);
        y.set(0);
      }
    };
    
    const handleMouseLeave = () => {
      setIsHovered(false);
      x.set(0);
      y.set(0);
    };
    
    if (ref.current) {
      const element = ref.current;
      element.addEventListener('mouseenter', () => setIsHovered(true));
      element.addEventListener('mouseleave', handleMouseLeave);
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', () => setIsHovered(true));
        ref.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [x, y, range, strength, isHovered, shouldReduceMotion]);
  
  // If reduced motion is preferred, render without animation
  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        x: springX,
        y: springY,
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
}
