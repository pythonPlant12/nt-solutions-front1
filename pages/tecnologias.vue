<template>
	<v-container class="mt-10 mt-xxl-16">
		<v-row class="justify-center">
			<h1 class="px-2 py-4 text-xl-h2 text-h4 text-md-h2">
			Tecnologías
			</h1>
		</v-row>
	</v-container>
	<div class="tecnologias-card">
		<tecnologias-databases />
	<tecnologias-cloud />
	<tecnologias-docker />
	<tecnologias-django />
	<tecnologias-frontend />
	</div>
</template>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

<style>
.tecnologias-card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
