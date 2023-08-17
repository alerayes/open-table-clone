/** @type {import('tailwindcss').Config} */

const { fontFamily } =  require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '400px',
      'md': '640px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1500px'    
    },
    extend: {
      fontSize: {
        "2xsm": "10px",
        xsm: "12px",
        sm: "13px",
        reg: "15px",
        lg: "18px",
        "2xl": "22px",
        "3xl": "25px",
        "4xl": "32px",
        "5xl": "40px",
        "6xl": "50px",
        "7xl": "70px",
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        league: ['var(--font-league-spartan)']

      }
    },
  },
  plugins: [],
}
