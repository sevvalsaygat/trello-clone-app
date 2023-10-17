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
        },
        blue: {
          150: "#0052cc",
        },
      },
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.1) 0px 0px 10px",
        "2xl": "rgba(0, 0, 0, 0.2) 1px 1px 5px 0px",
      },
      borderRadius: {
        3: "0.1875rem",
      },
      fontSize: {
        12: "0.75rem",
        16: "1rem",
        14: "0.875rem",
        11: "0.6875rem",
      },
      margin: {
        14: "0.875rem",
      },
      lineHeight: {
        28: "1.75rem",
        29: "1.8125rem",
      },
    },
  },
  plugins: [],
};
export default config;
