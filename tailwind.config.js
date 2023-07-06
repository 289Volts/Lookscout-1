/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"primary-600": "#437EF7",
				"neutral-600": "#EAEBF0",
				navBg1: "#fff",
			},
		},
	},
	plugins: [],
};
