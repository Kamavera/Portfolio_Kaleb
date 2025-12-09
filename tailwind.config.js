/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Mint Green - Primary Accent
        primary: {
          50: '#f0fdf7',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#9ddfba',
          400: '#87ddb5',
          500: '#6fd9a8',
          600: '#4ade80',
          700: '#22c55e',
          800: '#16a34a',
          900: '#15803d',
          950: '#14532d',
        },
        // Earthy Dark Backgrounds
        earth: {
          50: '#faf8f3',
          100: '#f5f1e8',
          200: '#c7bfb0',
          300: '#a69b8a',
          400: '#8a7f70',
          500: '#6f6459',
          600: '#5a5450',
          700: '#4a4643',
          800: '#3f3b37',
          900: '#3a3632',
          950: '#2d2a26',
        },
        // Sage Green - Secondary Accent
        sage: {
          50: '#f6f7f6',
          100: '#e8ebe8',
          200: '#d1d8d1',
          300: '#b0bcb0',
          400: '#9eb89d',
          500: '#8b9f88',
          600: '#6f826d',
          700: '#5a6858',
          800: '#4a554a',
          900: '#3d473d',
          950: '#2a2f2a',
        },
        // Terracotta - Tertiary Accent (for CTAs and highlights)
        terracotta: {
          50: '#fef6f3',
          100: '#fdeae3',
          200: '#fbd4c6',
          300: '#f7b49d',
          400: '#e89271',
          500: '#d97757',
          600: '#c77957',
          700: '#a85d43',
          800: '#8b4e39',
          900: '#734232',
          950: '#3e2219',
        },
        // Cream/Warm Text Colors
        cream: {
          50: '#fefdfb',
          100: '#faf8f3',
          200: '#f5f1e8',
          300: '#ede7d9',
          400: '#dfd5c0',
          500: '#c7bfb0',
          600: '#a69b8a',
          700: '#8a7f70',
          800: '#6f6459',
          900: '#5a5450',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '1.8',
      },
      letterSpacing: {
        'wide': '0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
