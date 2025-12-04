/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Book cover inspired color palette
        dark: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#1a1d20',
          950: '#0f1114',
        },
        gold: {
          50: '#fffef0',
          100: '#fffbd6',
          200: '#fff7ad',
          300: '#fff384',
          400: '#ffee5b',
          500: '#FFEA00',  // Main bright yellow
          600: '#d9c700',
          700: '#b3a400',
          800: '#8c8100',
          900: '#665e00',
          950: '#403b00',
        },
        charcoal: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#2d2d2d',
          950: '#1a1a1a',
        },
        parchment: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf2e6',
          300: '#f6e8d1',
          400: '#f0d9b5',
          500: '#e8c896',
          600: '#deb574',
          700: '#d19e4f',
          800: '#b8853a',
          900: '#9a6d2f',
          950: '#5c3f1c',
        }
      },
      fontFamily: {
        'crimson': ['var(--font-crimson)', 'serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'serif': ['Crimson Text', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'spiritual-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'peace-gradient': 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        'divine-gradient': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
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
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'spiritual': '0 4px 20px rgba(102, 126, 234, 0.15)',
        'divine': '0 8px 32px rgba(14, 165, 233, 0.15)',
        'peace': '0 4px 20px rgba(34, 197, 94, 0.15)',
        'grace': '0 4px 20px rgba(217, 70, 239, 0.15)',
      },
    },
  },
  plugins: [],
}
