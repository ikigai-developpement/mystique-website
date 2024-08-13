<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
</script>

<div class="bg-leftImg bg-cover h-[130vh] md:text-6xl text-white">
	<div
		use:inview={{ unobserveOnEnter: true, rootMargin: '-15%' }}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			isInView = inView;
		}}
		class="flex flex-col justify-center text-center backdrop-blur-[1px]"
	>
		{#if isInView}
			<h2
				transition:fade={{ delay: 650, duration: 700 }}
				class="font-horizon md:text-5xl uppercase md:mx-[28rem] my-2"
			>
				Faire battre le cœur des marques
			</h2>
			<h3
				transition:fade={{ delay: 450, duration: 600 }}
				class="font-atteron uppercase md:text-3xl my-2"
			>
				Quoi attendre de nos expert·e·s en conseil marketing?
			</h3>
			<p
				transition:fade={{ delay: 770, duration: 800 }}
				class="text-base md:mx-[28rem] text-pretty my-2"
			>
				Bien plus qu’une simple agence marketing de Lévis, Mystique représente un mouvement de
				pensée, un laboratoire émotionnel, une idéologie à part entière. Chez Mystique, chaque
				pensée devient une exploration métaphysique de votre potentiel intérieur.
			</p>
			<p
				transition:fade={{ delay: 800, duration: 800 }}
				class="text-base md:mx-[28rem] text-pretty my-2"
			>
				Du captage à l’incarnation, nous croyons en nos idées et en nos actions. Notre distinction
				réside dans nos stratégies immersives, notre réseau d'architectes de la réalité, et notre
				approche métaphysique de l’AURA comme fondement principal. Seules les entreprises qui sont
				prêtes à repousser les limites sont invitées à découvrir la puissance transformative de la
				réinvention de la réalité. Intrigué·e·s?
			</p>
		{/if}
	</div>
</div>
