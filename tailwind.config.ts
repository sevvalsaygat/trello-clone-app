import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          50: "#fafbfc",
          100: "#97a0af",
          150: "#505f79",
          200: "#f9fafc",
          250: "#5e6c84",
          300: "#cccccc",
          350: "#f7f8f9",
          400: "#282e33",
          450: "#d9dde2",
          500: "#a9b0bd",
          550: "#f0f1f4",
        },
        blue: {
          50: "#dfe1e6",
          100: "#4d4d4d",
          150: "#f4f5f7",
          200: "#4c9aff",
          250: "#0052cc",
          300: "#172b4d",
          350: "#3762d7",
          400: "#0c66e4",
          450: "#0055cc",
          500: "#dcdfe4",
          550: "#1066e3",
          600: "#e9f2ff",
          650: "#cce0ff",
        },
        green: {
          100: "#61bd4f",
          150: "#1f845a",
          200: "#5AAC44",
        },
        slate: {
          100: "#44546f",
          400: "#445471",
          450: "#acb3bf",
          500: "#626f86",
        },
        purple: {
          100: "#6d5dc6",
          150: "#4f60cf",
        },
        yellow: {
          100: "#e4ba20",
        },
      },
      boxShadow: {
        "2xl": "rgba(0, 0, 0, 0.2) 1px 1px 5px 0px",
        "3xl": "rgba(0, 0, 0, 0.1) 0px 0px 10px",
        "4xl":
          "var(--ds-shadow-overlay, 0px 8px 12px #091e4226, 0px 0px 1px #091e424f)",
        "5xl":
          "var(--ds-shadow-overlay, 0px 8px 12px #091e4226, 0px 0px 1px #091e424f)",
      },
      borderRadius: {
        //8px kaç rem
        8: "0.5rem",
        "4": "0.25rem",
        5: "0.3125rem",
        3: "0.1875rem",
      },
      fontSize: {
        20: "1.25rem",
        11: "0.6875rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
      },
      margin: {
        6: "0.375rem",
        0.4: "0.025rem",
        7: "0.4375rem",
        14: "0.875rem",
        28: "1.75rem",
        30: "1.875rem",
      },
      lineHeight: {
        28: "1.75rem",
        29: "1.8125rem",
      },
      width: {
        45: "2.8125rem",
        304: "19rem",
        150: "9.375rem",
        400: "25rem",
      },
      maxWidth: {
        336: "21rem",
        200: "12.5rem",
      },
      height: {
        378: "23.625rem",
      },
      maxHeight: {
        887: "55.4375rem",
      },
      padding: {
        24: "1.5rem",
        6: "0.375rem",
        7: "0.4375rem",
        35: "2.1875rem",
      },
    },
  },
  plugins: [],
};
export default config;
