/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--poppins)'],
        lobsterTwo: ['var(--lobsterTwo)'],
      },
      backgroundImage: {
        hero: "url('/img/bebek-goreng.jpg')",
        grabfoodLogo: "url('/img/grabfood-logo.png')",
        shopeefoodLogo: "url('/img/shopeefood-logo.png')",
        gofoodLogo: "url('/img/gofood-logo.png')",
      },
    },
  },
  plugins: [],
}
