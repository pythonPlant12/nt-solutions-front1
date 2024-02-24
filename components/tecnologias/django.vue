<template>
	<v-window-item class="primera-ventana">
		<v-card elevation="24" class="d-sm-flex justify-sm-center align-sm-center ma-2 primera-ventana">
			<v-col sm="5" col="12" class="mt-16 mb-8 mx-md-12">
				<h1 class="text-sm-h3 pb-16 text-orange-darken-2 mx-sm-4">
					Desarrollo Ágil con Django y DRF
				</h1>
				<p class="text-sm-h5 text-grey-darken-2 mx-sm-4 descripcion-text mx-12 mx-sm-auto">
					Experimenta un desarrollo rápido y seguro con la combinación poderosa de Django y Django
					Rest Framework (DRF). Con Django, obtienes eficiencia en la construcción de
					funcionalidades, mientras que DRF facilita la creación de APIs potentes para una
					comunicación efectiva entre el frontend y el backend. La seguridad está integrada en cada
					capa, gracias a las prácticas seguras de Django. 
				</p>
			</v-col>
			<v-col cols="12" sm=""></v-col>
			<v-col sm="5" col="12" class="mx-md-12 descripcion-title">
				<v-img src="/css/pictures/slide2-django-logo.png" height="100" class="slide-image"></v-img>
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
