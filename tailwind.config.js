export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B4513",
        secondary: "#654321",
        gold: "#D4AF37",
        sand: "#F4E4BC",
        desert: {
          light: "#F2E6D8",
          DEFAULT: "#E6CCB2",
          dark: "#BFA088"
        }
      },
      fontFamily: {
        arabic: ['Noto Sans Arabic', 'sans-serif'],
      },
      backgroundImage: {
        'geometric-pattern': "url('https://www.transparenttextures.com/patterns/arabesque.png')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
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
    },
  },
  plugins: [],
}