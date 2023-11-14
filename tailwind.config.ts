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
        zinc: {
          200: "#fafbfc",
          300: "#f0f1f4",
          400: "#d9dde2",
          500: "#cccccc",
          600: "#9d9e9e",
          900: "#4d4d4d",
        },
        slate: {
          800: "#5e6c84",
          850: "#626f86",
          900: "#44546f",
          950: "#172b4d",
        },
        stone: {
          300: "#f4f5f7",
          950: "#282e33",
        },
        gray: {
          200: "#f9fafc",
          350: "#dcdfe4",
          400: "#dfe1e6",
          800: "#505f79",
          850: "#445471",
        },
        blue: {
          200: "#e9f2ff",
          300: "#cce0ff",
          500: "#4c9aff",
          750: "#1066e3",
          800: "#0c66e4",
          850: "#0052cc",
          900: "#0055cc",
        },
        green: {
          600: "#61bd4f",
        },
        emerald: {
          900: "#1f845a",
        },
        lime: {
          700: "#5AAC44",
        },
        violet: {
          800: "#6e5dc6",
          900: "#6d5dc6",
        },
        indigo: {
          900: "#4f60cf",
        },
        yellow: {
          600: "#e4ba20",
        },
        neutral: {
          500: "#00000033",
        },
      },
      borderRadius: {
        3: "0.1875rem",
      },
      margin: {
        0.4: "0.025rem",
        30: "1.875rem",
      },
      width: {
        60: "3.75rem",
        150: "9.375rem",
        304: "19rem",
        400: "25rem",
      },
      maxWidth: {
        200: "12.5rem",
        336: "21rem",
      },
      height: {
        60: "3.75rem",
        378: "23.625rem",
      },
      maxHeight: {
        887: "55.4375rem",
      },
      padding: {
        7: "0.4375rem",
        35: "2.1875rem",
      },
    },
  },
  plugins: [],
};
export default config;
