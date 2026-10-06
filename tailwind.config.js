/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '980px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'cyber-bg': '#070913',
        'cyber-card': '#0e1526',
        'cyber-border': '#1e293b',
        'neon-cyan': '#00F0FF',
        'neon-purple': '#A855F7',
        'neon-blue': '#38BDF8',
        'neon-pink': '#EC4899',
        'primary-blue': '#00F0FF',
        'secondary-blue': '#818CF8',
        'accent-blue': '#38BDF8',
        'off-white': '#070913',
        'beige': '#0B1120',
        'cream': '#0F172A',
      },
      fontFamily: {
        exo: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #070913 0%, #0F172A 50%, #070913 100%)',
        'neon-gradient': 'linear-gradient(135deg, #00F0FF 0%, #A855F7 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(10, 15, 30, 0.8) 100%)',
      }
    },
  },
  plugins: [],
}
