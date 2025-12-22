import { motion } from 'motion/react';
import { useState } from 'react';

interface AnimatedTickProps {
  size?: number;
  color?: string;
  delay?: number;
  variant?: 'draw' | 'scale' | 'bounce';
}

export function AnimatedTick({ 
  size = 20, 
  color = '#00A5C7',
  delay = 0,
  variant = 'draw'
}: AnimatedTickProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Draw variant - checkmark draws itself in
  if (variant === 'draw') {
    return (
      <motion.div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size, flexShrink: 0 }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{
          duration: 0.3,
          delay: delay,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Outer circle with pulse */}
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={isHovered ? {
            rotate: [0, -5, 5, 0],
            scale: [1, 1.1, 1]
          } : {
            scale: [1, 1.02, 1]
          }}
          transition={isHovered ? {
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1]
          } : {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {/* Circle background */}
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke={color}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              pathLength: { duration: 0.5, delay: delay, ease: "easeInOut" },
              opacity: { duration: 0.3, delay: delay }
            }}
          />
          
          {/* Checkmark path */}
          <motion.path
            d="M7 12L10.5 15.5L17 9"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              pathLength: { duration: 0.4, delay: delay + 0.2, ease: [0.34, 1.56, 0.64, 1] },
              opacity: { duration: 0.2, delay: delay + 0.2 }
            }}
          />
        </motion.svg>

        {/* Hover glow effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: color,
              opacity: 0.1,
              filter: 'blur(8px)'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 0.15 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    );
  }

  // Scale variant - pops in with bounce
  if (variant === 'scale') {
    return (
      <motion.div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size, flexShrink: 0 }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{
          duration: 0.5,
          delay: delay,
          ease: [0.34, 1.56, 0.64, 1],
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 200,
            restDelta: 0.001
          }
        }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={color}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M7 12L10.5 15.5L17 9"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: color,
              opacity: 0.1,
              filter: 'blur(8px)'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 0.15 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    );
  }

  // Bounce variant - bounces in energetically
  if (variant === 'bounce') {
    return (
      <motion.div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size, flexShrink: 0 }}
        initial={{ opacity: 0, y: -20, rotate: -180 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: [0.34, 1.56, 0.64, 1]
        }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            y: [0, -2, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={color}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M7 12L10.5 15.5L17 9"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.svg>

        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: color,
              opacity: 0.1,
              filter: 'blur(8px)'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 0.15 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    );
  }

  return null;
}