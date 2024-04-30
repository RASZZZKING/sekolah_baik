import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5055C0",

          secondary: "#3D43C8",

          dark: "#1E1E1E",

          accent: "#FF9800",

          neutral: "#5A5FCD",

          "base-100" : "#FDFDFD",

          info: "#1E1E1E",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
