import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ColorHunt Palette - 60-30-10 Rule
        // 60% #EEEEEE (neutral/background)
        // 30% #222831 & #393E46 (primary/secondary)
        // 10% #00ADB5 (accent)

        primary: {
          DEFAULT: '#222831',
          50: '#f5f6f7',
          100: '#e5e7eb',
          200: '#c8ccd3',
          300: '#9fa5b0',
          400: '#6b7280',
          500: '#393E46',
          600: '#222831',
          700: '#1a1f26',
          800: '#13171c',
          900: '#0d1013',
        },
        secondary: {
          DEFAULT: '#393E46',
          50: '#f6f7f8',
          100: '#eceef0',
          200: '#d4d7dc',
          300: '#b0b5bd',
          400: '#84898f',
          500: '#393E46',
          600: '#2e3139',
          700: '#25282e',
          800: '#1c1f23',
          900: '#14161a',
        },
        accent: {
          DEFAULT: '#00ADB5',
          50: '#e6f9fa',
          100: '#ccf3f5',
          200: '#99e7eb',
          300: '#66dbe0',
          400: '#33cfd6',
          500: '#00ADB5',
          600: '#008a91',
          700: '#00676d',
          800: '#004548',
          900: '#002224',
        },
        neutral: {
          DEFAULT: '#EEEEEE',
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#EEEEEE',
          400: '#E0E0E0',
          500: '#BDBDBD',
          600: '#9E9E9E',
          700: '#757575',
          800: '#616161',
          900: '#424242',
        },
        // Semantic colors for states
        success: {
          DEFAULT: '#00ADB5',
          50: '#e6f9fa',
          100: '#ccf3f5',
          200: '#99e7eb',
          300: '#66dbe0',
          400: '#33cfd6',
          500: '#00ADB5',
          600: '#008a91',
          700: '#00676d',
          800: '#004548',
          900: '#002224',
        },
        warning: {
          DEFAULT: '#F59E0B',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F59E0B',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          DEFAULT: '#EF4444',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#EF4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        info: {
          DEFAULT: '#00ADB5',
          50: '#e6f9fa',
          100: '#ccf3f5',
          200: '#99e7eb',
          300: '#66dbe0',
          400: '#33cfd6',
          500: '#00ADB5',
          600: '#008a91',
          700: '#00676d',
          800: '#004548',
          900: '#002224',
        },
      },

      // Typography Scale (Major Third - 1.250)
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],
        sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
        base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
        lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0' }],
        xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },

      // Spacing Scale (4px base)
      spacing: {
        xs: '0.25rem', // 4px
        sm: '0.5rem', // 8px
        md: '1rem', // 16px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        '2xl': '3rem', // 48px
        '3xl': '4rem', // 64px
        '4xl': '6rem', // 96px
      },

      // Border Radius
      borderRadius: {
        none: '0',
        sm: '0.25rem', // 4px
        DEFAULT: '0.5rem', // 8px
        md: '0.75rem', // 12px
        lg: '1rem', // 16px
        xl: '1.5rem', // 24px
        full: '9999px',
      },

      // Shadows (Elevation System)
      boxShadow: {
        xs: '0 1px 2px 0 rgba(34, 40, 49, 0.05)',
        sm: '0 1px 3px 0 rgba(34, 40, 49, 0.1), 0 1px 2px -1px rgba(34, 40, 49, 0.1)',
        DEFAULT: '0 4px 6px -1px rgba(34, 40, 49, 0.1), 0 2px 4px -2px rgba(34, 40, 49, 0.1)',
        md: '0 10px 15px -3px rgba(34, 40, 49, 0.1), 0 4px 6px -4px rgba(34, 40, 49, 0.1)',
        lg: '0 20px 25px -5px rgba(34, 40, 49, 0.1), 0 8px 10px -6px rgba(34, 40, 49, 0.1)',
        xl: '0 25px 50px -12px rgba(34, 40, 49, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(34, 40, 49, 0.05)',
      },

      // Animation
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'spin-slow': 'spin 3s linear infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      // Transitions
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '300ms',
        slow: '500ms',
      },
    },
  },
  plugins: [],
};

export default config;
