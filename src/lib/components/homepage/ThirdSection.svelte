<script lang="ts">
	import frontstrategy from '$lib/assets/Service-1_avant.png';
	import backstrategy from '$lib/assets/Service-1_arriere.png';
	import frontexperience from '$lib/assets/Service-2_avant.png';
	import backexperience from '$lib/assets/Service-2_arriere.png';
	import frontaura from '$lib/assets/Service-3_avant.png';
	import backaura from '$lib/assets/Service-3_arriere.png';
</script>

<div class="bg-rightImg md:text-3xl bg-cover md:h-[130vh] text-white flex flex-col">
	<div class="flex flex-col text-center z-20 md:mx-96 gap-10">
		<h1 class=" uppercase md:text-6xl font-horizon">expertises</h1>
		<h2 class=" font-atteron">
			À qui s’adressent nos services de stratégie en marketing & communication?
		</h2>
		<p class="text-base">
			Dans un monde où la conformité règne, nous applaudissons les précurseur·euse·s. Les mystiques.
			Les pionnier·ère·s. Les rebelles. Les non-conformistes. Vous qui percevez la réalité
			autrement. Vous vivez à la limite de la normalité, sans peur de défier les normes. Les règles
			ne vous contraignent pas et le statu quo ne vous retient pas. On ne peut vous ignorer, car
			vous êtes les alchimistes du changement, transformant les rêves en réalités tangibles et
			déclenchant une transformation dans tout ce que vous entreprenez. Si certain·e·s vous
			considèrent comme des êtres mystérieux, nous, nous reconnaissons votre individualité. Notre
			équipe est dévouéeous sommes dévoué·e·s aux entreprises qui croient en leurs paroles et
			actions, qui poursuivent l'utopie de changer le monde à leur manière.
		</p>
	</div>
	<div class="flex flex-col md:flex-row justify-evenly mt-20 mx-48">
		<div class="relative w-72 h-96 perspective-1000">
			<div class="inner-card w-full h-full transition-transform duration-500 transform">
				<div class="front absolute inset-0">
					<img
						src={frontstrategy}
						alt="Front side of the card"
						class="w-full h-full object-cover rounded-lg"
					/>
				</div>
				<div class="back absolute inset-0 transform rotateY-180">
					<img
						src={backstrategy}
						alt="Back side of the card"
						class="w-full h-full object-cover rounded-lg"
					/>
				</div>
			</div>
		</div>
		<div class="relative w-72 h-96 perspective-1000">
			<div class="inner-card w-full h-full transition-transform duration-500 transform">
				<div class="front absolute inset-0">
					<img
						src={frontexperience}
						alt="Front side of the card"
						class="w-full h-full object-cover rounded-lg"
					/>
				</div>
				<div class="back absolute inset-0 transform rotateY-180">
					<img
						src={backexperience}
						alt="Back side of the card"
						class="w-full h-full object-cover rounded-lg"
					/>
				</div>
			</div>
		</div>
		<div class="relative w-72 h-96 perspective-1000">
			<div class="inner-card w-full h-full transition-transform duration-500 transform">
				<div class="front absolute inset-0">
					<img
						src={frontaura}
						alt="Front side of the card"
						class="w-full h-full object-cover rounded-lg"
					/>
				</div>
				<div class="back absolute inset-0 transform rotateY-180">
					<img
						src={backaura}
						alt="Back side of the card"
						class="w-full h-full object-cover rounded-lg"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.relative {
		position: relative;
	}
	.perspective-1000 {
		perspective: 1000px;
	}
	.inner-card {
		transform-style: preserve-3d;
		transition: transform 0.7s cubic-bezier(0.26, 0.6, 0.82, 0.53);
		transition-delay: 0.1s;
	}
	.relative:hover .inner-card {
		transform: rotateY(180deg);
	}
	.front,
	.back {
		backface-visibility: hidden;
	}
	.back {
		transform: rotateY(180deg);
	}
</style>
