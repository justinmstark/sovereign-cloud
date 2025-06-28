// tailwind.config.ts
import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#490091',
          dark: '#1a1a1a',
          gray: '#4b5563',
          light: '#f9fafb',
          accent: '#00783e',
          accentDark: '#005a2c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'sans-serif']
      },
      boxShadow: {
        card: '0 2px 4px rgba(0, 0, 0, 0.05)',
        cardHover: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
};

export default config;

