/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9538E2',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}
