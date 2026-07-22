/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A1440',
          deep: '#060B24',
          light: '#10205F',
        },
        paper: {
          DEFAULT: '#F7F8FA',
          alt: '#ECEEF5',
        },
        slate: {
          DEFAULT: '#4B5372',
          muted: '#6B7280',
        },
        brand: {
          blue: '#2149F0',
          cyan: '#3FA9F5',
          purple: '#7C2CEC',
          'purple-deep': '#3B12A6',
          'purple-soft': '#B26CF0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        logo: ['Syne', 'Orbitron', 'Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
}
