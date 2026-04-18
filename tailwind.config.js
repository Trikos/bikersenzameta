/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  safelist: [
    'text-racing-500', 'bg-racing-500', 'border-racing-500', 'hover:border-racing-500', 'hover:text-racing-500',
    'text-trail-500', 'bg-trail-500', 'border-trail-500', 'hover:border-trail-500', 'hover:text-trail-500',
    'text-zinc-300', 'border-zinc-300', 'hover:border-zinc-300', 'hover:text-zinc-300'
  ],
  theme: {
    extend: {
      colors: {
        asphalt: {
          950: '#0a0a0b',
          900: '#121214',
          800: '#1a1a1d',
          700: '#26262b'
        },
        racing: {
          500: '#ff5a1f',
          600: '#e64a0f'
        },
        trail: {
          500: '#84cc16',
          600: '#65a30d'
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at 50% 50%, rgba(255,90,31,0.15), transparent 60%)'
      },
      animation: {
        'slow-pan': 'slowPan 20s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite'
      },
      keyframes: {
        slowPan: {
          '0%, 100%': { transform: 'scale(1.05) translateX(0)' },
          '50%': { transform: 'scale(1.1) translateX(-2%)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
