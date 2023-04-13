/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#BCD8E2',
			},
			boxShadow: {
				main: '0 0 10px #ddd',
			},
		},
	},
	plugins: [],
};
