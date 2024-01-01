import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "xs-phone": "320px",
        "sm-phone": "360px",
        "base-phone": "400px",
        "lg-phone": "440px",
        "xl-phone": "480px",
      },
      colors: {
        primary: {
          "50": "rgb(var(--theme-50))",
          "100": "rgb(var(--theme-100))",
          "200": "rgb(var(--theme-200))",
          "300": "rgb(var(--theme-300))",
          "400": "rgb(var(--theme-400))",
          "500": "rgb(var(--theme-500))",
          "600": "rgb(var(--theme-600))",
          "700": "rgb(var(--theme-700))",
          "800": "rgb(var(--theme-800))",
          "900": "rgb(var(--theme-900))",
          "950": "rgb(var(--theme-950))",
        },
      },
    },
  },
};
export default config;
