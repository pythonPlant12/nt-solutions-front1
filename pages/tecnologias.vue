<template>
	<v-container class="mt-10 mt-xxl-16 primer-slide-container">
		<v-row class="justify-center">
			<h1 class="px-2 py-4 text-xl-h2 text-h4 text-md-h2">
			Tecnologías
			</h1>
		</v-row>
	</v-container>
	<tecnologias-databases />
	<tecnologias-cloud />
	<tecnologias-docker />
	<tecnologias-django />
	<tecnologias-frontend />
</template>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

<style>
.primer-slide-container {
	opacity: 0;
	animation: apareciendo 2s forwards;
}

@keyframes apareciendo {
	to {
		opacity: 1;
	}
}
@media screen and (max-width: 680px) {
	@keyframes slideImageScale {
		33% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.5);
		}
		100% {
			transform: scale(1);
		}
	}
}

@media screen and (min-width: 681px) {
	@keyframes slideImageScale {
		33% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
}
</style>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

<script>
export default {
	data: () => ({
		length: 3,
		onboarding: 0,
	}),
};
</script>
