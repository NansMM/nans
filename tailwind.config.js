/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat Variable", "sans-serif"],
      },
      backgroundImage: {
        'wave-pattern': "url('/assets/wave-pattern.svg')",
      },
      colors: {
        github: "#333",
        linkedin: "#0e76a8",
      }
    },
  },
  plugins: [],
};
