import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#222831",
        teal: "#00ADB5",
        white: "#F8F9FD",
        "light-black": "#393E46",
      },
    },
  },
  plugins: [],
};
export default config;
