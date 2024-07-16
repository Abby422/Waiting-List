/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", // mobile
        md: "768px", // tablet
        lg: "1024px", // laptop
        xl: "1280px", // desktop
      },
      colors: {
        primary: "#E56717",
        secondary: "#000000",
        tertiary: "#1A120E",
        purple: "#E41818",
        red: "#FF0000",
      },
    },
  },
  plugins: [],
};
