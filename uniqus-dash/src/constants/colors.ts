// App Color System - Centralized color definitions
export const APP_COLORS = {
  // Primary Colors
  primary: '#5E81F4',
  primaryDark: '#1C1D21',
  primaryGrey: '#8181A5',
  
  // Secondary Colors
  secondaryYellow: '#F4BE5E',
  secondaryGreen: '#7CE7AC',
  secondaryRed: '#FF808B',
  secondaryPurple: '#9698D6',
  secondaryCyan: '#40E1FA',
  
  // Background Colors
  backgroundLight: '#F5F5FA',
  backgroundWhite: '#FFFFFF',
  backgroundGrey: '#F6F6F6',
  
  // Outline Colors
  outline: '#F0F0F3',
  outlinePrimary: '#5E81F4',
  outlineWhite: '#FFFFFF',
  outlineResting: '#ECECF2',
  
  // Button States
  buttonHover: 'rgba(28, 29, 33, 0.1)', // primaryDark with 10% opacity
} as const

// Tailwind class mappings for easy use
export const TAILWIND_COLORS = {
  // Primary
  'text-app-primary': 'text-app-primary',
  'bg-app-primary': 'bg-app-primary',
  'border-app-primary': 'border-app-primary',
  
  // Primary Dark
  'text-app-primary-dark': 'text-app-primary-dark',
  'bg-app-primary-dark': 'bg-app-primary-dark',
  'border-app-primary-dark': 'border-app-primary-dark',
  
  // Primary Grey
  'text-app-primary-grey': 'text-app-primary-grey',
  'bg-app-primary-grey': 'bg-app-primary-grey',
  'border-app-primary-grey': 'border-app-primary-grey',
  
  // Secondary Colors
  'text-app-secondary-yellow': 'text-app-secondary-yellow',
  'bg-app-secondary-yellow': 'bg-app-secondary-yellow',
  'border-app-secondary-yellow': 'border-app-secondary-yellow',
  
  'text-app-secondary-green': 'text-app-secondary-green',
  'bg-app-secondary-green': 'bg-app-secondary-green',
  'border-app-secondary-green': 'border-app-secondary-green',
  
  'text-app-secondary-red': 'text-app-secondary-red',
  'bg-app-secondary-red': 'bg-app-secondary-red',
  'border-app-secondary-red': 'border-app-secondary-red',
  
  'text-app-secondary-purple': 'text-app-secondary-purple',
  'bg-app-secondary-purple': 'bg-app-secondary-purple',
  'border-app-secondary-purple': 'border-app-secondary-purple',
  
  'text-app-secondary-cyan': 'text-app-secondary-cyan',
  'bg-app-secondary-cyan': 'bg-app-secondary-cyan',
  'border-app-secondary-cyan': 'border-app-secondary-cyan',
  
  // Backgrounds
  'bg-light': 'bg-bg-light',
  'bg-white': 'bg-bg-white',
  'bg-grey': 'bg-bg-grey',
  
  // Outlines
  'border-outline': 'border-outline-default',
  'border-outline-primary': 'border-outline-primary',
  'border-outline-white': 'border-outline-white',
  'border-outline-resting': 'border-outline-resting',
  
  // Button States
  'hover:bg-button-hover': 'hover:bg-button-hover',
} as const

// Color usage examples and documentation
export const COLOR_USAGE = {
  primary: {
    description: 'Main brand color for primary actions, links, and highlights',
    examples: ['Primary buttons', 'Active navigation items', 'Links', 'Focus states'],
  },
  primaryDark: {
    description: 'Dark text color for headings and important content',
    examples: ['Headings', 'Important text', 'Icons'],
  },
  primaryGrey: {
    description: 'Secondary text color for less important content',
    examples: ['Secondary text', 'Placeholders', 'Disabled states'],
  },
  secondaryYellow: {
    description: 'Warning states, highlights, and accent elements',
    examples: ['Warning messages', 'Highlights', 'Status indicators'],
  },
  secondaryGreen: {
    description: 'Success states and positive actions',
    examples: ['Success messages', 'Completed states', 'Positive indicators'],
  },
  secondaryRed: {
    description: 'Error states and destructive actions',
    examples: ['Error messages', 'Delete buttons', 'Validation errors'],
  },
  secondaryPurple: {
    description: 'Information states and neutral highlights',
    examples: ['Info messages', 'Neutral badges', 'Secondary highlights'],
  },
  secondaryCyan: {
    description: 'Special highlights and accent elements',
    examples: ['Special features', 'New items', 'Accent elements'],
  },
} as const