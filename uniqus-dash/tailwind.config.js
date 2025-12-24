/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      fontSize: {
        // Custom typography sizes
        'h1': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'h4': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'h5': ['20px', { lineHeight: '28px', fontWeight: '700' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '900' }],
        'button-lg': ['14px', { lineHeight: '20px', fontWeight: '700' }],
        'button-sm': ['12px', { lineHeight: '16px', fontWeight: '700' }],
        'body': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'body-bold': ['14px', { lineHeight: '20px', fontWeight: '700' }],
      },
      width: {
        '21': '85px',
        '5.5': '22px',
        '7.5': '30px',
        '96.75': '387px',
      },
      height: {
        '5.5': '22px',
        '7.5': '30px',
        '30': '120px',
        '32': '128px',
      },
      spacing: {
        '0.5': '2px',
        '3.5': '14px',
        '5.5': '22px',
        '13': '52px',
      },
      colors: {
        // Legacy colors (keeping for backward compatibility)
        'craft-dark': '#1C1D21',
        'craft-gray': '#8181A5',
        'craft-light': 'rgba(245, 245, 250, 0.4)',
        
        // App Color System
        'app': {
          'primary': '#5E81F4',
          'primary-dark': '#1C1D21',
          'primary-grey': '#8181A5',
          'secondary-yellow': '#F4BE5E',
          'secondary-green': '#7CE7AC',
          'secondary-red': '#FF808B',
          'secondary-purple': '#9698D6',
          'secondary-cyan': '#40E1FA',
        },
        
        // Background Colors
        'bg': {
          'light': '#F5F5FA',
          'white': '#FFFFFF',
          'grey': '#F6F6F6',
        },
        
        // Outline Colors
        'outline': {
          'default': '#F0F0F3',
          'primary': '#5E81F4',
          'white': '#FFFFFF',
          'resting': '#ECECF2',
        },
        
        // Button States
        'button': {
          'hover': 'rgba(28, 29, 33, 0.1)', // #1C1D21 with 10% opacity
        },
      },
      borderRadius: {
        '3xl': '24px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}