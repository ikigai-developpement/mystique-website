<script lang="ts">
	import symbol from '$lib/assets/forme_1.svg';
	import FirstSection from '$lib/components/homepage/FirstSection.svelte';
	import SecondSection from '$lib/components/homepage/SecondSection.svelte';
	let scroll: number;
	let innerHeight: number;

	function calculate(scroll: number, min: number, max: number, start: number, end: number): number {
		if (scroll <= min) return start;
		if (scroll >= max) return end;
		return start + (end - start) * ((scroll - min) / (max - min));
	}
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight />

<div class="flex flex-col md:text-6xl text-white min-h-screen bg-headerimg items-center bg-contain">
	<div class=" mt-20">
		<img
			src={symbol}
			alt="symbole"
			width="850"
			style:transform={`rotate(${scroll / 10}deg) scale(${Math.min(scroll / 800 + 0.4)})`}
			style:opacity={`${calculate(scroll, 0.7 * innerHeight, 2.4 * innerHeight, 1, 0)}`}
		/>
	</div>
	<div class="backdrop-blur-[1px] bg-[#111111]/10 fixed h-full inset-0"></div>
	<div class="">
		<FirstSection />
		<SecondSection />
	</div>
</div>
