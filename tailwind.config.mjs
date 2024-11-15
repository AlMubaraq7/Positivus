/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#B9FF66",
        dark: "#191A23",
        grey: "#292A32",
      },
      boxShadow: {
        card: "0 5px 0 0 #191A23",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
