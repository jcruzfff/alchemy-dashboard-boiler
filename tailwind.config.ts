import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors from Figma design system
        'neutral-50': '#fafafa',
        'neutral-100': '#f5f5f5',
        'neutral-200': '#e5e5e5',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-950': '#0a0a0a',
        'zinc-100': '#f4f4f5',
        'brand': '#363ff9',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '32': ['32px', { lineHeight: '1.24', fontWeight: '600' }],
        '14': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        '14-medium': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        '12': ['12px', { lineHeight: '18px', fontWeight: '500' }],
      },
      spacing: {
        '55': '220px', // Sidebar width
        '26': '104px', // Top offset for main content
      },
    },
  },
  plugins: [],
};

export default config;
