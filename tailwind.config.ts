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
          350: "EDEFF0",
        },
        blue: {
          50: "#dfe1e6",
          100: "#4d4d4d",
          150: "#f4f5f7",
          200: "#4c9aff",
          250: "#0052cc",
        },
        green: {
          100: "#61bd4f",
          200: "#5AAC44",
        },
      },
      boxShadow: {
        "2xl": "rgba(0, 0, 0, 0.2) 1px 1px 5px 0px",
        "3xl": "rgba(0, 0, 0, 0.1) 0px 0px 10px",
      },
      borderRadius: {
        3: "0.1875rem",
      },
      fontSize: {
        11: "0.6875rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
      },
      margin: {
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
        150: "9.375rem",
        400: "25rem",
      },
      height: {
        378: "23.625rem",
      },
      padding: {
        6: "0.375rem",
        7: "0.4375rem",
        35: "2.1875rem",
      },
    },
  },
  plugins: [],
};
export default config;
