/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f1",
        surface: "#ffffff",
        primary: "#2f2a26",
        accent: "#8c3123",
        muted: "#7a7067",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.16em",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.08)",
        card: "0 12px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
