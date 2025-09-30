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
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-6px) scale(1.03)" },
        },
        pulseAccent: {
          "0%, 100%": { backgroundColor: "#2f2a26" },
          "50%": { backgroundColor: "#8c3123" },
        },
      },
      animation: {
        bob: "bob 1.8s ease-in-out infinite",
        "bob-color": "bob 1.8s ease-in-out infinite, pulseAccent 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
