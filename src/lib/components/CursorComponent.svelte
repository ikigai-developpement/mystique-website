<script lang="ts">
	import { spring } from 'svelte/motion';

	let coord1 = spring({ x: 0, y: 0 }, { stiffness: 0.05, damping: 0.6 });
	let coord2 = spring(
		{
			x: 0,
			y: 0
		},
		{ stiffness: 0.09, damping: 0.5 }
	);
	let size = spring(10);
</script>

<svelte:window
	on:mousemove={(e) => {
		coord1.set({ x: e.pageX, y: e.pageY });
		coord2.set({ x: e.pageX, y: e.pageY });
	}}
	on:mousedown={(e) => {
		size.set(20);
	}}
	on:mouseup={(e) => {
		size.set(10);
	}}
/>
<svg class="w-full h-full">
	<circle
		cx={$coord1.x}
		cy={$coord1.y}
		r={$size}
		stroke="lightgray"
		stroke-width="1"
		fill-opacity="0"
	/>
	<circle cx={$coord2.x} cy={$coord2.y} r={$size / 3} fill="purple" />
</svg>

<style>
	:global(body) {
		cursor: none;
	}

	.w-full {
		width: 99vw;
	}

	.h-full {
		height: 480vh;
	}

	svg {
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
	}
</style>
