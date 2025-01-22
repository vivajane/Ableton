/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgimg: "url('https://ableton-production.imgix.net/uploads/homepage-teasers/move-hero_A3T6xpm_ibzfjUU.jpg?auto=format&dpr=1.5&fit=crop&fm=jpg&h=488&ixjsv=1.1.3&q=66&w=732')"
      },
    },
  },
  plugins: [],
};
