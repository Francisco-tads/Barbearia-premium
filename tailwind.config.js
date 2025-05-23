/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f1f8',
          100: '#d9ddef',
          200: '#b3bade',
          300: '#8d98cd',
          400: '#6676bc',
          500: '#4054ab',
          600: '#344389',
          700: '#283267',
          800: '#1c2244',
          900: '#0e1122',
        },
        secondary: {
          50: '#faf4e8',
          100: '#f3e2c3',
          200: '#ebcf9e',
          300: '#e4bd79',
          400: '#dcaa54',
          500: '#d5982f',
          600: '#ab7a25',
          700: '#805b1c',
          800: '#563d12',
          900: '#2b1e09',
        },
        accent: {
          50: '#ffe8e8',
          100: '#ffbfbf',
          200: '#ff9696',
          300: '#ff6d6d',
          400: '#ff4444',
          500: '#ff1b1b',
          600: '#cc1616',
          700: '#991010',
          800: '#660b0b',
          900: '#330505',
        },
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      height: {
        '128': '32rem',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [],
};