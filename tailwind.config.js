/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color_light: "#F9F3E2",
        color_primary: "#996651",
        color_primary_dark: "#723E28",
        color_secondary_light: "#374151",
        color_secondary: "#1a1e18",
        color_danger_dark: "#991b1b",
        color_danger: "#b91c1c",
        color_white: "#ffffff",
        color_gray: "#94a3b8",
      },
    },
  },
  plugins: [],
};
