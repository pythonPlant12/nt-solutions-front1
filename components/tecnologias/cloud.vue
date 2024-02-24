<template>
	<v-window-item class="primera-ventana">
		<v-card elevation="24" class="d-sm-flex justify-sm-center align-sm-center ma-2 primera-ventana">
			<v-col sm="5" col="12" class="mx-md-12">
				<v-img
					src="/css/pictures/slide1-allcloud-logo.png"
					height="300"
					class="slide-image"
					hover
				></v-img>
			</v-col>
			<v-col cols="12" sm=""></v-col>
			<v-col sm="5" col="12" class="mx-md-12 descripcion-title">
				<h1 class="text-sm-h3 pb-16 text-orange-darken-2 mx-sm-4">Tecnologías Cloud</h1>
				<p class="text-sm-h5 text-grey-darken-2 mx-sm-4 descripcion-text">
					Adoptamos tecnologías en la nube para ofrecer soluciones escalables y flexibles.
					Trabajamos con plataformas como AWS, Azure y Google Cloud para proporcionar servicios
					seguros y confiables, adaptados a las necesidades específicas de nuestros clientes.
				</p>
			</v-col>
		</v-card>
	</v-window-item>
</template>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

<style>
.primera-ventana {
	min-height: 100dvh !important;
}
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
@media screen and (min-width: 1281px) {
	@keyframes slideImageScale {
		33% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}
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
