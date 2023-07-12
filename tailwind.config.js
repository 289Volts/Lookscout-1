/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"primary-25": "#F5FAFF",
				"primary-600": "#437EF7",
				neutral50: "#FAFBFC",
				neutral100: "#EAEBF0",
				neutral600: "#EAEBF0",
				neutral700: "#DAE0E6",
				gray50: "#5F6D7E",
				gray700: "#272D37",
				navBg1: "#fff",
			},
			boxShadow: {
				shadowXSM: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)",
				shadowMD: "0px 4px 6px -1px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.10)",
			},
		},
	},
	plugins: [],
};
