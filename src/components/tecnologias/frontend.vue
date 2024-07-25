<template>
	<v-card
		elevation="24"
		rounded="xl"
		class="mx-4 mb-10 d-sm-flex mb-md-16 mt-8 my-sm-12 py-sm-16 px-6 justify-sm-center align-sm-center descripcion-title"
		max-width="1200"
	>
		<v-row class="justify-center">
			<v-col md="5" cols="10" class="mx-md-12 mt-16 mt-sm-0">
				<h3 class="text-sm-h3 pb-16 mx-sm-4" style="color: var(--gold)">Desarrollo Frontend con Angular y Vue</h3>
				<p class="text-sm-h5 text-grey-darken-2 mx-sm-4 descripcion-text pb-16">
					Para la creación de interfaces de usuario dinámicas y robustas, empleamos Angular y Vue.js.
				Estas tecnologías frontend permiten el desarrollo de aplicaciones web interactivas y
				escalables, brindando experiencias de usuario excepcionales.
				</p>
			</v-col>
			<v-col md="5" cols="10" class="mx-md-12 descripcion-title">
				<v-img src="/css/pictures/slide1-frontend-logo.png" height="400" class="slide-image"></v-img>
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
