// Design System - Centralized design tokens and utilities
export * from './colors'
export * from './typography'

// Combined design system utilities
import { APP_COLORS } from './colors'
import { TYPOGRAPHY, TYPOGRAPHY_CLASSES } from './typography'

export const DESIGN_SYSTEM = {
  colors: APP_COLORS,
  typography: TYPOGRAPHY,
  typographyClasses: TYPOGRAPHY_CLASSES,
} as const

// Common component style combinations
export const COMPONENT_STYLES = {
  // Primary button styles
  primaryButton: {
    base: `${TYPOGRAPHY_CLASSES['button-lg']} bg-app-primary text-white hover:bg-opacity-90 transition-colors`,
    small: `${TYPOGRAPHY_CLASSES['button-sm']} bg-app-primary text-white hover:bg-opacity-90 transition-colors`,
  },
  
  // Secondary button styles
  secondaryButton: {
    base: `${TYPOGRAPHY_CLASSES['button-lg']} bg-bg-grey text-app-primary-dark hover:bg-button-hover transition-colors`,
    small: `${TYPOGRAPHY_CLASSES['button-sm']} bg-bg-grey text-app-primary-dark hover:bg-button-hover transition-colors`,
  },
  
  // Card styles
  card: {
    base: 'bg-bg-white border border-outline-default rounded-xl shadow-sm',
    elevated: 'bg-bg-white border border-outline-default rounded-xl shadow-lg',
  },
  
  // Input styles
  input: {
    base: `${TYPOGRAPHY_CLASSES['body-regular']} bg-bg-white border border-outline-default rounded-lg px-3 py-2 focus:border-app-primary focus:outline-none`,
    error: `${TYPOGRAPHY_CLASSES['body-regular']} bg-bg-white border border-app-secondary-red rounded-lg px-3 py-2 focus:border-app-secondary-red focus:outline-none`,
  },
  
  // Text styles with colors
  text: {
    heading: `${TYPOGRAPHY_CLASSES.h3} text-app-primary-dark`,
    subheading: `${TYPOGRAPHY_CLASSES.h5} text-app-primary-dark`,
    body: `${TYPOGRAPHY_CLASSES['body-regular']} text-app-primary-dark`,
    caption: `${TYPOGRAPHY_CLASSES.caption} text-app-primary-grey`,
    muted: `${TYPOGRAPHY_CLASSES['body-regular']} text-app-primary-grey`,
  },
  
  // Status styles
  status: {
    success: `${TYPOGRAPHY_CLASSES.caption} text-app-secondary-green bg-app-secondary-green bg-opacity-10 px-2 py-1 rounded-md`,
    warning: `${TYPOGRAPHY_CLASSES.caption} text-app-secondary-yellow bg-app-secondary-yellow bg-opacity-10 px-2 py-1 rounded-md`,
    error: `${TYPOGRAPHY_CLASSES.caption} text-app-secondary-red bg-app-secondary-red bg-opacity-10 px-2 py-1 rounded-md`,
    info: `${TYPOGRAPHY_CLASSES.caption} text-app-secondary-purple bg-app-secondary-purple bg-opacity-10 px-2 py-1 rounded-md`,
  },
} as const

// Responsive typography utilities
export const RESPONSIVE_TYPOGRAPHY = {
  h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-h1 font-bold font-lato',
  h2: 'text-xl sm:text-2xl md:text-3xl lg:text-h2 font-bold font-lato',
  h3: 'text-lg sm:text-xl md:text-2xl lg:text-h3 font-bold font-lato',
  h4: 'text-base sm:text-lg md:text-xl lg:text-h4 font-bold font-lato',
  h5: 'text-sm sm:text-base md:text-lg lg:text-h5 font-bold font-lato',
} as const