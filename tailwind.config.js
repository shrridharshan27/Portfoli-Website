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
        void: '#000000',
        bone: '#efe7da',
        ash: '#8a847b',
        molten: '#ffb23f',
        ember: '#ff5a1e',
        iris: '#8c8cff',
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          950: '#083344',
        },
        dark: {
          950: '#03060c',
          900: '#070b14',
          850: '#0d1527',
          800: '#111c35',
        }
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
