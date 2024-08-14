<script lang="ts">
	export let scroll: number;
	export let innerHeight: number;
	let isVisible = false;

	$: isVisible = scroll > innerHeight * 0.4 && scroll < innerHeight * 1.2;
	$: displayClass = isVisible ? 'opacity-100' : 'opacity-0';
</script>

<div class="bg-rightImg text-3xl bg-cover h-[130vh] text-white flex flex-col">
	<div
		class={`fixed inset-0 flex flex-col my-auto text-center backdrop-blur-[1px] md:mx-[20rem] rounded-3xl h-[26rem] overflow-hidden 
		bg-gradient-to-r from-transparent from-10% via-black/40 via-24% to-transparent to-90%   transition-opacity ease-in duration-150 ${displayClass} `}
	>
		<h1 class={`font-atteron text-2xl  my-5 transition-opacity  ease-in duration-150 ${displayClass}delay-300 `}>
			l’agence de conseil en stratégie immersive dévoilé à Lévis, Québec et Montréal
		</h1>
		<h2 class={`uppercase font-horizon my-5 text-md:5xl transition-opacity delay-700  ease-in duration-1000 ${displayClass} delay-150`}>
			Révéler la passion humaine derrière chaque entreprise
		</h2>
		<p class={`text-lg my-5 transition-opacity delay-500  ease-in duration-150 ${displayClass}` }>
			Entrez, nobles esprits, dans l'univers envoûtant de Mystique - Agence stratégique immersive,
			une marque dissimulée dans les recoins nébuleux des réalités ordinaires, où seuls les
			visionnaires de Québec, Montréal et les environs osent s’aventurer. Ici, la réalité ne se
			limite pas à ce que vous percevez, mais à ce que votre entreprise décide de créer. Prêt·e·s à
			être mystifié·e?
		</p>
		<button class={`uppercase bg-white text-black text-xl mx-auto rounded-2xl px-5 py-1 transition-opacity delay-700  ease-in duration-150 ${displayClass}`}>
			Oser l'expérience Mystique
		</button>
	</div>
</div>
