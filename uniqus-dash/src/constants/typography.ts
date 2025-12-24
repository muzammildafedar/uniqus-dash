// App Typography System - Centralized typography definitions
export const TYPOGRAPHY = {
  // Headings - All use Lato Bold
  h1: {
    fontSize: '48px',
    lineHeight: '56px',
    fontWeight: '700', // Bold
    fontFamily: 'Lato',
    tailwind: 'text-h1 font-bold font-lato',
  },
  h2: {
    fontSize: '40px',
    lineHeight: '48px',
    fontWeight: '700', // Bold
    fontFamily: 'Lato',
    tailwind: 'text-h2 font-bold font-lato',
  },
  h3: {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: '700', // Bold
    fontFamily: 'Lato',
    tailwind: 'text-h3 font-bold font-lato',
  },
  h4: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: '700', // Bold
    fontFamily: 'Lato',
    tailwind: 'text-h4 font-bold font-lato',
  },
  h5: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: '700', // Bold
    fontFamily: 'Lato',
    tailwind: 'text-h5 font-bold font-lato',
  },
  
  // Caption - Lato Black
  caption: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '900', // Black
    fontFamily: 'Lato',
    tailwind: 'text-caption font-black font-lato',
  },
  
  // Button Labels
  buttonLarge: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '700', // Bold
    fontFamily: 'Lato',
    tailwind: 'text-button-lg font-bold font-lato',
    variants: {
      left: 'text-button-lg font-bold font-lato text-left',
      center: 'text-button-lg font-bold font-lato text-center',
    },
  },
  buttonSmall: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '700', // Bold
    fontFamily: 'Lato',
    tailwind: 'text-button-sm font-bold font-lato',
    variants: {
      left: 'text-button-sm font-bold font-lato text-left',
      center: 'text-button-sm font-bold font-lato text-center',
    },
  },
  
  // Regular Text - 14px
  bodyBold: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '700', // Bold
    fontFamily: 'Lato',
    tailwind: 'text-body-bold font-bold font-lato',
    variants: {
      left: 'text-body-bold font-bold font-lato text-left',
      center: 'text-body-bold font-bold font-lato text-center',
      right: 'text-body-bold font-bold font-lato text-right',
    },
  },
  bodyRegular: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400', // Regular
    fontFamily: 'Lato',
    tailwind: 'text-body font-normal font-lato',
    variants: {
      left: 'text-body font-normal font-lato text-left',
      center: 'text-body font-normal font-lato text-center',
      right: 'text-body font-normal font-lato text-right',
    },
  },
} as const

// Tailwind utility classes for easy application
export const TYPOGRAPHY_CLASSES = {
  // Headings
  h1: 'text-h1 font-bold font-lato',
  h2: 'text-h2 font-bold font-lato',
  h3: 'text-h3 font-bold font-lato',
  h4: 'text-h4 font-bold font-lato',
  h5: 'text-h5 font-bold font-lato',
  
  // Caption
  caption: 'text-caption font-black font-lato',
  
  // Buttons
  'button-lg': 'text-button-lg font-bold font-lato',
  'button-lg-left': 'text-button-lg font-bold font-lato text-left',
  'button-lg-center': 'text-button-lg font-bold font-lato text-center',
  'button-sm': 'text-button-sm font-bold font-lato',
  'button-sm-left': 'text-button-sm font-bold font-lato text-left',
  'button-sm-center': 'text-button-sm font-bold font-lato text-center',
  
  // Body text
  'body-bold': 'text-body-bold font-bold font-lato',
  'body-bold-left': 'text-body-bold font-bold font-lato text-left',
  'body-bold-center': 'text-body-bold font-bold font-lato text-center',
  'body-bold-right': 'text-body-bold font-bold font-lato text-right',
  'body-regular': 'text-body font-normal font-lato',
  'body-regular-left': 'text-body font-normal font-lato text-left',
  'body-regular-center': 'text-body font-normal font-lato text-center',
  'body-regular-right': 'text-body font-normal font-lato text-right',
} as const

// Typography usage guidelines
export const TYPOGRAPHY_USAGE = {
  h1: {
    description: 'Main page titles and hero headings',
    examples: ['Page titles', 'Hero sections', 'Main headings'],
  },
  h2: {
    description: 'Section headings and major content divisions',
    examples: ['Section titles', 'Card headers', 'Major divisions'],
  },
  h3: {
    description: 'Subsection headings and content group titles',
    examples: ['Subsection titles', 'Widget headers', 'Content groups'],
  },
  h4: {
    description: 'Component headings and smaller section titles',
    examples: ['Component titles', 'Form sections', 'List headers'],
  },
  h5: {
    description: 'Small headings and emphasized text',
    examples: ['Small titles', 'Emphasized labels', 'Minor headings'],
  },
  caption: {
    description: 'Small labels, captions, and metadata',
    examples: ['Image captions', 'Timestamps', 'Small labels'],
  },
  buttonLarge: {
    description: 'Primary and secondary button text (14px)',
    examples: ['Primary buttons', 'Secondary buttons', 'Call-to-action buttons'],
  },
  buttonSmall: {
    description: 'Small button text and compact controls (12px)',
    examples: ['Small buttons', 'Compact controls', 'Icon buttons with text'],
  },
  bodyBold: {
    description: 'Emphasized body text and important content (14px bold)',
    examples: ['Important text', 'Emphasized content', 'Strong statements'],
  },
  bodyRegular: {
    description: 'Regular body text and general content (14px regular)',
    examples: ['Paragraphs', 'Descriptions', 'General content'],
  },
} as const

// Helper function to get typography styles
export const getTypographyStyle = (variant: keyof typeof TYPOGRAPHY) => {
  return TYPOGRAPHY[variant]
}

// Helper function to get typography class
export const getTypographyClass = (variant: keyof typeof TYPOGRAPHY_CLASSES) => {
  return TYPOGRAPHY_CLASSES[variant]
}