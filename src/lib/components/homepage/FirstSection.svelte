<script lang="ts">
	let scroll: number;
	let innerHeight: number;
	function calculate(scroll: number, min: number, max: number, start: number, end: number): number {
		if (scroll <= min) return start;
		if (scroll >= max) return end;
		return start + (end - start) * ((scroll - min) / (max - min));
	}
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight />

<div class="bg-rightImg text-3xl bg-cover h-[130vh] text-white flex flex-col">
	<div
		class="flex flex-col justify-center text-center backdrop-blur-[1px]  h-[26rem] overflow-hidden mt-64 bg-black bg-opacity-40"
	>
		<div
			style={`opacity: ${calculate(scroll,  innerHeight, 1.7 * innerHeight, 1, 0)}`}
			class="  py-10 absolute top-[-80%] left-0 right-0 transition-transform  "
		>
			<h1
				class="font-atteron text-2xl my-5"
				style:transform={`translate3d(0, ${2*scroll / 5}px, 0)`}
			>
				l’agence de conseil en stratégie immersive dévoilé à Lévis, Québec et Montréal
			</h1>
			<h2
				class="uppercase font-horizon my-5 text-md:5xl md:mx-[20rem]"
				style:transform={`translate3d(0, ${2*scroll / 5}px, 0)`}
			>
				Révéler la passion humaine derrière chaque entreprise
			</h2>
			<p
				style:transform={`translate3d(0, ${2*scroll / 5}px, 0)`}
				class="text-lg md:mx-[25rem] my-5"
			>
				Entrez, nobles esprits, dans l'univers envoûtant de Mystique - Agence stratégique immersive,
				une marque dissimulée dans les recoins nébuleux des réalités ordinaires, où seuls les
				visionnaires de Québec, Montréal et les environs osent s’aventurer. Ici, la réalité ne se
				limite pas à ce que vous percevez, mais à ce que votre entreprise décide de créer. Prêt·e·s
				à être mystifié·e?
			</p>

			<div>
				<button 
			style:transform={`translate3d(0, ${2*scroll / 5}px, 0)`}
				
				class="uppercase bg-white text-black text-xl rounded-2xl p5 md:px-5 py-1">
					Oser l'expérience Mystique
				</button>
			</div>
		</div>
	</div>
</div>
