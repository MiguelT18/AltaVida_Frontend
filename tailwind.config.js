/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			width: {
				navBrandLogo: 'clamp(6rem, 35vw, 8rem)',
			},
			colors: {
				orange: '#FF8900',
				'steel-blue': '#4E5B6D',
				silver: '#BDC3C7',
				black: '#000000',
				'dark-gray': '#333333',
				'sky-blue': '#3498DB',
				'navy-blue': '#1B2532',
			},
			fontFamily: {
				'my-montserrat': ['Montserrat', 'sans-serif'],
				'my-raleway': ['Raleway', 'sans-serif'],
			},
			fontSize: {
				sm: 'clamp(0.75rem, 4.2vw, 1rem)',
				md: 'clamp(1rem, 5vw, 1.3rem)',
				lg: 'clamp(1.2rem, 7.5vw, 1.6rem)',
				xl: 'clamp(1.6rem, 9vw, 2.2rem)',
			},
			animation: {
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'bounce-slow': 'bounce 3s infinite 1s',
			},
		},
	},
	plugins: [],
}
