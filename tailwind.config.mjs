/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'text-primary': '#FBBF24',
				'card-bg-color': '#3E3C3C'
			}
		},
	},
	plugins: [],
}
