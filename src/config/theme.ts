// Design tokens for consistent theming across the application
export const colors = {
  // Brand colors
  cyan: {
    primary: '#00A5C7',
    bright: '#00D4FF',
    light: 'rgba(0, 165, 199, 0.08)',
  },
  
  // Neutrals
  background: {
    light: '#FAFAFC',
    white: '#FFFFFF',
    dark: '#0A0A0A',
    darker: '#0F0F0F',
  },
  
  // Text colors
  text: {
    primary: '#0E0E0E',
    secondary: '#606260',
    tertiary: '#949797',
    light: '#C0C8D0',
    lighter: '#D8DCE0',
    white: '#FAFAFC',
  },
  
  // Border colors
  border: {
    light: '#EBEBEF',
    cyan: 'rgba(0, 212, 255, 0.2)',
  },
};

export const spacing = {
  section: {
    py: 'py-16 md:py-24',
    px: 'px-8',
  },
};

export const typography = {
  eyebrow: {
    fontSize: '0.813rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    fontWeight: 500,
  },
  
  hero: {
    fontSize: 'clamp(3rem, 7vw, 5.5rem)',
    lineHeight: '1.1',
    letterSpacing: '-0.03em',
    fontWeight: 300,
  },
  
  h2: {
    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
    fontWeight: 300,
    lineHeight: '1.2',
  },
  
  h3: {
    fontSize: '1.25rem',
    fontWeight: 400,
  },
  
  body: {
    fontSize: '1rem',
    lineHeight: '1.7',
  },
  
  bodyLarge: {
    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    lineHeight: '1.5',
  },
};

export const effects = {
  glass: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(0, 212, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
  },
  
  glassLight: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid #00A5C7',
    backdropFilter: 'blur(10px)',
    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  },
  
  cardBorder: {
    backgroundColor: '#FAFAFC',
    borderTop: '2px solid #00A5C7',
    borderRight: '1px solid #EBEBEF',
    borderBottom: '1px solid #EBEBEF',
    borderLeft: '1px solid #EBEBEF',
  },
};