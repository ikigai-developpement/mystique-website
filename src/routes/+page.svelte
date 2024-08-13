<script lang="ts">
	import { onMount } from 'svelte';

	import symbol from '$lib/assets/forme_1.svg';
	import FirstSection from '$lib/components/homepage/FirstSection.svelte';
	import SecondSection from '$lib/components/homepage/SecondSection.svelte';
	import ThirdSection from '$lib/components/homepage/ThirdSection.svelte';
	let scroll: number;
	let innerHeight: number;
	let symbolIsVisible = 0;
	let isShown = false;

	onMount(() => {
		setTimeout(() => {
			symbolIsVisible = 1;
		}, 800);
		setTimeout(() => {
			isShown = true;
		}, 500);
	});
	function calculate(scroll: number, min: number, max: number, start: number, end: number): number {
		if (scroll <= min) return start;
		if (scroll >= max) return end;
		return start + (end - start) * ((scroll - min) / (max - min));
	}
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight />

<div class="flex flex-col md:text-6xl text-white min-h-screen bg-headerimg items-center bg-cover">
	{#if isShown}
		<div class="mt-20 fixed">
			<img
				src={symbol}
				alt="symbole"
				width="800"
				style:transform={`rotate(${scroll / 10}deg) scale(${Math.min(scroll / 800 + 0.4)})`}
				style={`opacity: ${symbolIsVisible * calculate(scroll, 0.6 * innerHeight, 2.2 * innerHeight, 1, 0)};
					transition: opacity 0.3s ease-in;`}
			/>
		</div>
	{/if}
	<div class="backdrop-blur-[1px] bg-[#111111]/30 fixed h-full inset-0"></div>
</div>

<div class="">
	<FirstSection />
	<SecondSection />
	<ThirdSection />
</div>
