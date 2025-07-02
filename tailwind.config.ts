
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(spinner|table|toast|checkbox|form|spacer).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
         "color-light": "var(---color-light)",
        "color-bg": "var(---color-bg)",
        "color-priamry": "var(---color-primary)",
      },
       backgroundColor: {
        "color-bg": "var(---color-bg)",
        "color-bg-variant": "var(---color-bg-varaint)",
      },
      fontFamily: {
        rocher: ['Rocher', 'sans-serif'],
      },
       gridTemplateColumns: {
        about: "35% 50%",
        about_sm: "1fr 1fr",
        fr1: "1fr 1fr",
        cantact: "30% 58%",
      },
      spacing: {
        'pt-60': '15rem', // 60px => 15rem (1rem = 4px)
        'pb-30': '7.5rem'
      },
      boxShadow: {
        card: "0 0 30px #00000048",
        propvist_b:"0px 19px 50px -31px rgba(0, 0, 0, 0.3)",
        propvist_t:"0px -16px 36px -6px rgba(0, 0, 0, 0.3)"
      },
       backgroundImage: {
        about:
          "linear-gradient(45deg,transparent,var(--color-primary),transparent)",
      },
    },
  },
  plugins: [],
} satisfies Config;
