/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        'brand-cyan': '#06B6D4',
        'brand-purple': '#512FEB',
        'dark-bg': '#0D0D0D',
        'card-bg': 'rgba(255, 255, 255, 0.06)',
        'border-color': 'rgba(255, 255, 255, 0.1)',
        'text-primary': '#FFFFFF',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0) 70%)',
        'radial-glow-purple': 'radial-gradient(circle, rgba(81,47,235,0.15) 0%, rgba(81,47,235,0) 70%)',
        'card-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px 10px rgba(6, 182, 212, 0.3)',
        'glow-purple': '0 0 40px 10px rgba(81, 47, 235, 0.3)',
      }
    },
  },
  plugins: [],
}
