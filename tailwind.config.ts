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
        // Existing dashboard colors (preserved for current components)
        'neutral-50': '#fafafa',
        'neutral-100': '#f5f5f5',
        'neutral-200': '#e5e5e5',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-950': '#0a0a0a',
        'zinc-100': '#f4f4f5',
        'brand': '#363ff9',
        
        // New design system colors (for future components)
        // Base Colors
        white: '#ffffff',
        black: '#000000',
        
        // Gray Scale
        'gray-50': '#fafafa',
        'gray-100': '#f5f5f5',
        'gray-200': '#e5e5e5',
        'gray-300': '#d4d4d4',
        'gray-400': '#a3a3a3',
        'gray-500': '#737373',
        'gray-600': '#525252',
        'gray-700': '#404040',
        'gray-800': '#262626',
        'gray-900': '#171717',
        'gray-950': '#0a0a0a',
        
        // Brand Blue
        'blue-50': '#ecf3ff',
        'blue-100': '#dce9ff',
        'blue-200': '#c0d4ff',
        'blue-500': '#5167ff',
        'blue-600': '#363ff9',
        'blue-700': '#262cdc',
        
        // Status Colors
        'green-50': '#f0fdf4',
        'green-100': '#dcfce7',
        'green-600': '#16a34a',
        'green-700': '#15803d',
        
        'red-50': '#fef2f2',
        'red-100': '#fee2e2',
        'red-600': '#dc2626',
        'red-700': '#b91c1c',
        
        'orange-50': '#fff7ed',
        'orange-100': '#ffedd5',
        'orange-600': '#ea580c',
        'orange-700': '#c2410c',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Existing dashboard sizes (preserved)
        '32': ['32px', { lineHeight: '1.24', fontWeight: '600' }],
        '14': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        '14-medium': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        '12': ['12px', { lineHeight: '18px', fontWeight: '500' }],
        
        // New design system typography
        'h1': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'h2': ['1.5rem', { lineHeight: '1.25', fontWeight: '600' }],
        'h3': ['1.25rem', { lineHeight: '1.25', fontWeight: '600' }],
        'h4': ['1rem', { lineHeight: '1.25', fontWeight: '600' }],
        'body-lg': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
        'label': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        // Existing dashboard spacing (preserved)
        '55': '220px', // Sidebar width
        '26': '104px', // Top offset for main content
        
        // New design system spacing
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0px 1px 2px rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
        'md': '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)',
        'lg': '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
        'xl': '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
        'focus': '0px 0px 0px 3px rgba(54, 63, 249, 0.3)',
        'focus-success': '0px 0px 0px 3px rgba(22, 163, 74, 0.3)',
        'focus-warning': '0px 0px 0px 3px rgba(234, 88, 12, 0.3)',
        'focus-error': '0px 0px 0px 3px rgba(220, 38, 38, 0.3)',
      },
      animation: {
        'spin': 'spin 1s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.2s ease-in-out',
        'slide-up': 'slide-up 0.3s ease-out',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'slide-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
