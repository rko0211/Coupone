import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [

		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",

	],
	theme: {
		extend: {
			colors: {
				customGray: '#787878',
				customFieldColor: '#D9D9D9',
				customLabelColor: '#404040',
				customGreenColor: '#248D50',
				customgraydark: ' #888888',
				navbarBgColor: '#FAFAFA',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			screens: {
				customMax: {
					max: '1124px'
				},
				navBarWidth: {
					max: '1112px'
				},
				brandWidth: {
					max:'1234px'
				},
				searchBar: "771px",
				customlg: '1125px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'custom': '0px 0px 4px 0px #00000040',

			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			}
		}
	},
	plugins: [tailwindcssAnimate],
};
