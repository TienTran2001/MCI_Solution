import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-image': "url('/images/bg1-scaled.jpg')",
        'connect-banner': "url('/images/connect-banner.jpg')",
      },
      width: {
        container: '1320px',
      },
      maxWidth: {
        container: '1320px',
      },
      colors: {
        light: 'rgba(248, 249, 250, 1)',
        'black-light': '#212529',
        'red-light': '#CB2A27',
      },
      boxShadow: {
        custom:
          '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
        'custom-100': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'custom-200': '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
