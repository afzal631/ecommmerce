/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "280px", // Extra Small devices (e.g., phones)
      sm: "640px", // Small devices (e.g., tablets)
      md: "768px", // Medium devices (e.g., laptops)
      lg: "1024px", // Large devices (e.g., desktops)
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
