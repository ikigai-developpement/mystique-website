<script>
	import menuicon from '$lib/assets/icone_menu.svg';
	import mysticlogo from '$lib/assets/logo_blanc.png';
	import musicicon from '$lib/assets/icone_musique.svg';
	import dragonicon from '$lib/assets/icone_dragon.svg';
</script>

<div class="flex flex-row md:justify-evenly justify-between absolute inset-x-0 items-center mx-3  md:mx-20 z-30">
	<div class="flex md:flex-row flex-col gap-5 md:top-2 relative top-10">
		<img
			src={dragonicon}
			alt="icone_dragon"
			width="70"
			class="md:hover:scale-110 md:active:scale-90 active:scale-110  transition-all ease-in-out duration-200 w-[3.5rem] md:w-auto "
		/>
		<img
			src={musicicon}
			alt="icone_musique"
			width="70"
			class="md:hover:scale-110 md:active:scale-90 active:scale-110 transition-all ease-in-out duration-200 w-[3.5rem] md:w-auto "
		/>
	</div>
	<img src={mysticlogo} alt="logo" width="50%" class="md:w-[25rem] md:mr-16" />
	<div class="flex flex-col justify-center">
		<img
			src={menuicon}
			alt="icone_menu"
			width="70"
			class="md:hover:scale-110 active:scale-110 md:active:scale-0 transition-all ease-in-out duration-300 w-[3.5rem] md:w-auto mt-6"
		/>
	</div>
</div>
