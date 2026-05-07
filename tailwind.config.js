/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["Inter", "sans-serif"],
        display: ["Satoshi", "Inter", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#0F4C81",
          dark:    "#0a3a63",
          light:   "#1a6aad",
          50:      "#f0f7ff",
          100:     "#dbeeff",
        },
        accent: {
          DEFAULT: "#7DBA3A",
          dark:    "#5f9a28",
          light:   "#96d44f",
          50:      "#f4fbec",
        },
        surface:         "#F8FAFC",
        card:            "#FFFFFF",
        ink:             "#0F172A",
        muted:           "#64748B",
        border:          "#E2E8F0",
        "border-strong": "#CBD5E1",
      },
      boxShadow: {
        card:        "0 1px 4px 0 rgba(15,23,42,0.07), 0 1px 2px -1px rgba(15,23,42,0.04)",
        "card-hover":"0 16px 48px -12px rgba(15,76,129,0.18), 0 6px 20px -6px rgba(15,23,42,0.1)",
      },
      backgroundImage: {
        "accent-line": "linear-gradient(90deg, #0F4C81, #7DBA3A)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter:  "-0.03em",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.4s infinite",
      },
    },
  },
  plugins: [],
};
