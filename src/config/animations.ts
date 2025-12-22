// Consistent animation configurations across the application
export const easings = {
  smooth: [0.21, 0.47, 0.32, 0.98] as const,
  bounce: [0.34, 1.56, 0.64, 1] as const,
  easeOut: 'easeOut' as const,
  easeInOut: 'easeInOut' as const,
};

export const durations = {
  fast: 0.2,
  normal: 0.4,
  medium: 0.6,
  slow: 0.8,
};

export const springs = {
  snappy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 17,
  },
  
  bouncy: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  },
  
  smooth: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 15,
  },
  
  gentle: {
    type: 'spring' as const,
    stiffness: 90,
    damping: 15,
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};
