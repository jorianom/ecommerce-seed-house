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
        softprimary: "#DCFCE7",
        // primary: "#DCFCE7",
        primary: "#00B207",
        hardprimary: "#2C742F",
        warning: "#FF8A00",
        danger: "#EA4B48",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
  ],
};
export default config;
