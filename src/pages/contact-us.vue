<template>
	<v-container class="mt-10 text-center mt-xxl-16 primer-slide-container">
	<v-row class="d-flex justify-center">
		<v-card class="px-6 mt-xxl-16 rounded-xl mx-2" elevation="0">
			<h2 class="px-2 py-4 text-xl-h2 text-h4 text-md-h2" style="color: var(--blue-dark)">
					Ponte en contacto con nosotros
				</h2>
			</v-card>
		</v-row>
	</v-container> 
	<v-container class="mb-10">
        <v-row class="d-flex justify-center">
		<contact-us-form class="formulario" />
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
