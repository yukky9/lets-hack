/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'blue': 'var(--blue)',
        'light-blue': 'var(--light-blue)',
        'viol-blue': 'var(--viol-blue)',
        'white-blue': 'var(--white-blue)',
        'light-grey': 'var(--light-grey)',
        'grey-blue': 'var(--grey-blue)',
        'dark-blue': 'var(--dark-blue)',
        'grey-white': 'var(--grey-white)'
      }
    },
  },
  plugins: [],
}

