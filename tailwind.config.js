/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        p_blue: "#87CEFA",
        p_yellow: "#FFE066",
        p_green: "#B8E986",
        p_red: "#FF6F61",
        dark_text: "#333333",
        light_text: "#666666",
        p_white: "#FAF9F6",
        gray: "#4A5568",
        cardBg: "#EDF2F7",
      },
    },
  },
  plugins: [],
};
