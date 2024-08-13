<script lang="ts">
	let scroll: number;
	let isInView: boolean;
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
</script>

<div class="bg-leftImg bg-cover h-[130vh] md:text-6xl text-white">
	<div
		use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			isInView = inView;
			console.log('inview', inView);
		}}
		class="flex flex-col justify-center text-center backdrop-blur-[1px] "
	>
		<h2
			class="font-horizon md:text-5xl uppercase md:mx-[28rem] my-2"
		>
			Faire battre le cœur des marques
		</h2>
		<h3
			class="font-atteron uppercase md:text-3xl my-2"
		>
			Quoi attendre de nos expert·e·s en conseil marketing?
		</h3>
		{#if isInView}
			<p
				transition:fade={{ delay: 750, duration: 700 }}
				style:transform={`translate3d(0, ${-scroll / 13}px, 0)`} class="text-base md:mx-[29rem] text-pretty my-2 transition-transform "
			>
				Bien plus qu’une simple agence marketing de Lévis, Mystique représente un mouvement de
				pensée, un laboratoire émotionnel, une idéologie à part entière. Chez Mystique, chaque
				pensée devient une exploration métaphysique de votre potentiel intérieur.
			</p>
			<p
				transition:fade={{ delay: 900, duration: 700 }}
				class="text-base md:mx-[29rem] text-pretty my-2"
			>
				Du captage à l’incarnation, nous croyons en nos idées et en nos actions. Notre distinction
				réside dans nos stratégies immersives, notre réseau d'architectes de la réalité, et notre
				approche métaphysique de l’AURA comme fondement principal. Seules les entreprises qui sont
				prêtes à repousser les limites sont invitées à découvrir la puissance transformative de la
				réinvention de la réalité. Intrigué·e·s?
			</p>
		{/if}

		<div>
			<button class="uppercase bg-white text-black text-xl rounded-2xl px-3 md:px-5 py-1">
				En savoir plus
			</button>
		</div>
	</div>
</div>
