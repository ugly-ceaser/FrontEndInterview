/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050508",
        surface: "#0d0d14",
        elevated: "#13131f",
        primary: "#7c5cfc",
        secondary: "#00f0c8",
        fire: "#ff6b35",
        "text-primary": "#f0eeff",
        "text-secondary": "#8b8aaa",
        "text-ghost": "#3d3d5c",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'glow-violet': '0 0 60px rgba(124, 92, 252, 0.3)',
        'glow-teal': '0 0 40px rgba(0, 240, 200, 0.2)',
      },
      borderOpacity: {
        'subtle': '0.15',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'shimmer': 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
}
