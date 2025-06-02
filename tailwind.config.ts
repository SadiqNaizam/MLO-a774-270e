import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        /* Custom PRD colors accessible via Tailwind */
        'prd-sidebar': 'hsl(var(--sidebar-bg))', // #3B5998
        'prd-accent-red': 'hsl(var(--destructive))', // #F02849
        'prd-accent-blue': 'hsl(var(--primary))', // #1877F2
        'prd-primary-text': 'hsl(var(--foreground))', // #000000
        'prd-secondary-text': 'hsl(var(--muted-foreground))', // #65676B
        'prd-surface': 'hsl(var(--card))', // #FFFFFF

        /* Shadcn sidebar object using CSS vars */
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
        // Based on PRD: default: "rounded-md" (0.375rem), buttons: "rounded" (0.25rem)
        // --radius is 0.5rem (Shadcn default for lg)
        // lg: var(--radius) -> 0.5rem
        // md: calc(var(--radius) - 2px) -> 0.5rem - 2px ~ 0.375rem (PRD default)
        // sm: calc(var(--radius) - 4px) -> 0.5rem - 4px ~ 0.25rem (PRD button)
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
        // Explicitly map PRD terms if needed, though sm/md cover them
        // 'button': 'calc(var(--radius) - 4px)', // maps to sm
        // 'default': 'calc(var(--radius) - 2px)', // maps to md
			},
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
