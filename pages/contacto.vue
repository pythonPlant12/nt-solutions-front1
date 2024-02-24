<template>
	<v-container class="mt-10 mt-xxl-16 primer-slide-container">
		<v-row class="d-flex justify-center">
			<v-card class="mb-6 px-6 mt-xxl-16 rounded-xl mx-2" elevation="0">
				<h1 class="px-2 py-4 text-orange-darken-2 text-xl-h2 text-h4 text-md-h2">
					Ponte en contacto con nosotros
				</h1>
			</v-card>
		</v-row>
	</v-container>
	<v-container class="mt-16 ">
        <v-row class="d-flex justify-center">
		<contacto-formularioComponent class="formulario" />
    </v-row>
	</v-container>
</template>
<style>
.primer-slide-container {
	opacity: 0;
	animation: apareciendo 2s forwards;
}
.formulario {
    opacity: 0;
    animation: apareciendo 1.5s forwards 1s;
}
@keyframes apareciendo {
	to {
		opacity: 1;
	}
}
</style>
<script></script>
