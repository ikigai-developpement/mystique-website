/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			perspective: {
				1000: '1000px'
			},
			rotate: {
				'y-180': 'rotateY(180deg)'
			},
			backgroundImage: {
				headerimg: "url('/src/lib/assets/HEADER.png')",
				rightImg: "url('/src/lib/assets/DROITE.png' ) ",
				leftImg: "url('/src/lib/assets/GAUCHE.png' ) ",
				ellipse: "url('/src/lib/assets/Ellipse.png') "
			}
		},
		fontFamily: {
			atteron: ['Atteron'],
			horizon: ['Horizon']
		}
	},
	plugins: []
};
