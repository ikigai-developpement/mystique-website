<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
</script>

<div class="bg-rightImg text-3xl bg-cover h-[130vh] text-white flex flex-col">
	<div
		use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			isInView = inView;
		}}
		class="flex flex-col justify-center text-center gap-5 backdrop-blur-[1px] my-20 overflow-hidden"
	>
		{#if isInView}
			<h1 transition:fade={{ delay: 650, duration: 700 }} class="font-atteron text-2xl">
				l’agence de conseil en stratégie immersive dévoilé à Lévis, Québec et Montréal
			</h1>
			<h2
				transition:fade={{ delay: 450, duration: 600 }}
				class="uppercase font-horizon text-md:5xl md:mx-[20rem]"
			>
				Révéler la passion humaine derrière chaque entreprise
			</h2>
			<p transition:fade={{ delay: 770, duration: 800 }} class="text-lg md:mx-[25rem]">
				Entrez, nobles esprits, dans l'univers envoûtant de Mystique - Agence stratégique immersive,
				une marque dissimulée dans les recoins nébuleux des réalités ordinaires, où seuls les
				visionnaires de Québec, Montréal et les environs osent s’aventurer. Ici, la réalité ne se
				limite pas à ce que vous percevez, mais à ce que votre entreprise décide de créer. Prêt·e·s
				à être mystifié·e?
			</p>

			<div transition:fade={{ delay: 450, duration: 300 }}>
				<button class="uppercase bg-white text-black text-xl rounded-2xl px-3 md:px-5 py-1">
					Oser l'expérience Mystique
				</button>
			</div>
		{/if}
	</div>
</div>
