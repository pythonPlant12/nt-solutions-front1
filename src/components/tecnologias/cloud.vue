<template>
	<v-card
		elevation="24"
		rounded="xl"
		class="mx-4 d-sm-flex mb-md-16 mt-8 my-sm-12 py-sm-16 px-6 justify-sm-center align-sm-center descripcion-title"
		max-width="1200"
	>
		<v-row class="justify-center">
			<v-col md="5" cols="10" class="mx-md-12 descripcion-title">
				<v-img
					src="/css/pictures/slide1-allcloud-logo.png"
					height="400"
					class="slide-image"
				></v-img>
			</v-col>
			<v-col md="5" cols="10" class="mx-md-12 mt-16 mt-sm-0">
				<h2 class="text-sm-h3 pb-16 mx-sm-4" style="color: var(--gold)">Tecnologías Cloud</h2>
				<p class="text-sm-h5 text-grey-darken-2 mx-sm-4 descripcion-text pb-16">
					Adoptamos tecnologías en la nube para ofrecer soluciones escalables y flexibles.
					Trabajamos con plataformas como AWS, Azure y Google Cloud para proporcionar servicios
					seguros y confiables, adaptados a las necesidades específicas de nuestros clientes.
				</p>
			</v-col>
		</v-row>
	</v-card>
</template>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

<style>
.slide-image {
	opacity: 0;
	animation: slideImageScale 5s infinite, apareciendo 2s forwards;
}
.descripcion-title {
	opacity: 0;
	animation: apareciendo 2s forwards;
}

.descripcion-text {
	opacity: 0;
	animation: 1s apareciendo 2s forwards;
}

</style>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

<script>
export default {
	data: () => ({
		length: 3,
		onboarding: 0,
	}),
};
</script>
