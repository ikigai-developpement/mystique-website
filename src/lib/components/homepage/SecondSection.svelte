<script lang="ts">
	export let scroll: number;
	export let innerHeight: number;
	let isVisible = false;

	$: isVisible = scroll > innerHeight * 1.3 && scroll < innerHeight * 2.1;
	$: displayClass = isVisible ? 'opacity-100' : 'opacity-0';
</script>

<div class="bg-leftImg bg-cover  h-[300vh] md:h-[130vh] text-white">
	<div
		class={`fixed inset-0 flex flex-col md:my-auto my-24 tracking-wider text-center backdrop-blur-[1px]  rounded-3xl h-[26rem] 
		bg-gradient-to-r from-transparent from-10% via-black/40 via-24% to-transparent to-90%   transition-opacity ease-in-out duration-900 ${displayClass} `}
	>
		<h2
			class={`font-horizon md:text-5xl text-xl mx-3 md:mx-[29rem] uppercase my-2 transition-opacity delay-700  ease-in-out duration-1000 ${displayClass}`}
		>
			Faire battre le cœur des marques
		</h2>
		<h3
			class={`font-atteron uppercase md:text-3xl mx-3 text-lg  my-2 transition-opacity delay-700  ease-in-out duration-1000 ${displayClass}`}
		>
			Quoi attendre de nos expert·e·s en conseil marketing?
		</h3>
		<p
			class={`text-base md:mx-[25rem] mx-5 text-pretty my-2 tracking-wide transition-opacity delay-500  ease-in-out duration-900 ${displayClass}`}
		>
			Bien plus qu’une simple agence marketing de Lévis, Mystique représente un mouvement de pensée,
			un laboratoire émotionnel, une idéologie à part entière. Chez Mystique, chaque pensée devient
			une exploration métaphysique de votre potentiel intérieur.
		</p>
		<p
			class={`text-base md:mx-[23rem] mx-5 text-pretty my-2 tracking-wide transition-opacity delay-500  ease-in duration-900 ${displayClass}`}
		>
			Du captage à l’incarnation, nous croyons en nos idées et en nos actions. Notre distinction
			réside dans nos stratégies immersives, notre réseau d'architectes de la réalité, et notre
			approche métaphysique de l’AURA comme fondement principal. Seules les entreprises qui sont
			prêtes à repousser les limites sont invitées à découvrir la puissance transformative de la
			réinvention de la réalité. Intrigué·e·s?
		</p>
		<button
			class={`uppercase bg-white text-black md:text-xl mx-auto tracking-wide my-2  rounded-2xl px-5 py-1 transition-opacity delay-700  ease-in duration-900 ${displayClass}`}
		>
			En savoir plus
		</button>
	</div>
</div>
