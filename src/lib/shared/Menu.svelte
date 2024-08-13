<script>
	import menuicon from '$lib/assets/icone_menu.svg';
	import mysticlogo from '$lib/assets/logo_blanc.png';
	import musicicon from '$lib/assets/icone_musique.svg';
	import dragonicon from '$lib/assets/icone_dragon.svg';
</script>

<div class="flex flex-row justify-evenly absolute items-center mx-20 z-30">
	<div class="flex gap-5">
		<img
			src={dragonicon}
			alt="icone_dragon"
			width="70"
			class="hover:scale-110 active:scale-90 transition-all ease-in-out duration-200"
		/>
		<img
			src={musicicon}
			alt="icone_musique"
			width="70"
			class="hover:scale-110 active:scale-90 transition-all ease-in-out duration-200"
		/>
	</div>
	<img src={mysticlogo} alt="logo" width="20%" class="mr-20" />
	<div class="flex">
		<img
			src={menuicon}
			alt="icone_menu"
			width="70"
			class="hover:scale-110 transition-all ease-in-out duration-300"
		/>
	</div>
</div>
