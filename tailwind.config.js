/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    extend: {
      boxShadow: {
        'card': '0 2px 4px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
        'card-hover': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
      colors: {
        primary: {
          50: '#eef1f8',
          100: '#d4daea',
          200: '#b9c3dc',
          300: '#9eacce',
          400: '#8495c0',
          500: '#697eb2',
          600: '#5c7cb8',
          700: '#4b6498',
          800: '#3a488a', // Primary Deep Blue/Indigo
          900: '#2a346e'
        },
        secondary: {
          50: '#f0f7fd',
          100: '#d8eafa',
          200: '#c0def7',
          300: '#a8d1f4',
          400: '#90c4f1',
          500: '#78b8ee',
          600: '#60abeb',
          700: '#4d8bc0',
          800: '#396a95',
          900: '#26496a'
        },
        accent: {
          50: '#e0f7f9',
          100: '#b3ebef',
          200: '#87dfe6',
          300: '#60d9e1', // Accent Cyan/Aqua
          400: '#4bc4cc',
          500: '#37afb7',
          600: '#249aa2',
          700: '#1b737a',
          800: '#124c52',
          900: '#09252a'
        },
        star: {
          50: '#e6eef9',
          100: '#c0d3ef',
          200: '#9ab9e5',
          300: '#749edb',
          400: '#4e84d1',
          500: '#3e69a7',
          600: '#2e58a6', // Accent Star Blue
          700: '#254a8a',
          800: '#1c3c6e',
          900: '#132e52'
        },
        lavender: {
          50: '#f5f5fa',
          100: '#e5e4f1',
          200: '#d5d4e8',
          300: '#c5c4df',
          400: '#b5b3d6',
          500: '#a5a3cd',
          600: '#9593c4',
          700: '#8a88b7', // Lighter Lavender/Blue
          800: '#716fa3',
          900: '#58568f'
        },
        neutral: {
          50: '#f8f9fa', // Neutral Light
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529', // Neutral Dark
          900: '#141619'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'card': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 30px 0 rgba(0, 0, 0, 0.08)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
};