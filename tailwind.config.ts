import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bcd9ff",
          300: "#8abcff",
          400: "#5295ff",
          500: "#2b6fff",
          600: "#174cff",
          700: "#1037d7",
          800: "#1232ab",
          900: "#152f88"
        }
      }
    }
  },
  plugins: []
};

export default config;
