<!-- ! TEMPLATE -->

<template>
	<div class="main-div">
		<v-carousel
			:continuous="true"
			interval="10000"
			hide-delimiter-background
			height="100vh"
			cycle
			show-arrows="hover"
		>
			<v-carousel-item
				v-for="(slide, i) in slides"
				:key="i"
				:src="slide.image"
				cover
			>
				<div class="carousel-items">
					<div class="heading-carousel">
						<h1 class="heading-carousel-title rounded-lg">{{ slide.title }}</h1>
						<p class="heading-carousel-subtitle rounded-lg">{{ slide.subtitle }}</p>
					</div>
				</div>
				<div class="carousel-button">
					<v-btn @click="moverAlSegundoElemento()" :ripple="false" stacked prepend-icon="$vuetify" elevation="24" size="x-large" color="var(--three)">
						Conocer más
					</v-btn>
				</div>
			</v-carousel-item>
		</v-carousel>
	</div>
	<!-- ? Here I will insert a component which is in another folder, in order to provide path I should do <folder>-<component> -->
	<div id="segundoElementoHtml">
		<mainPage-secondScreen />
	</div>
</template>

<!-- ! STYLE -->

<style>
.main-div {
	top: 5rem;
}
.carousel-items {
	display: flex;
	flex-direction: column;
	margin-left: 6rem;
	align-content: center;
	justify-content: center;
	position: relative;
	top: 20%;
}
.heading-carousel {
	margin-right: 2rem;
	color: white;
	top: 20%;
	padding: 0.5rem;
}

.heading-carousel-title {
	position: relative;
	display: flex;
	min-height: 12rem !important;
	min-width: 35rem;
	max-width: 60%;
	font-size: 4rem !important;
	font-weight: bold;
	padding: 0.5rem;
	background-color: var(--two);
	opacity: 0;
	animation: tituloApareciendo 3s forwards;
}

.heading-carousel-subtitle {
	position: relative;
	margin-top: 1rem !important;
	font-size: 1.5rem;
	width: fit-content;
	max-width: 80%;
	padding: 0.5rem;
	background-color: var(--one);
	color: var(--four);
	opacity: 0;
	animation: subtituloApareciendo 1s forwards 3s;
}

.carousel-button {
	position: absolute;
	top: 75%;
	left: 50%;
	/* This helps me to always maintain the button on the center */
	transform: translate(-50%, -50%);
	opacity: 0;
	animation: botonApareciendo 2s forwards, botonMoviendose 2s infinite 3s;
}

/* Animations */

@keyframes tituloApareciendo {
	20% {
		opacity: 0;
	}
	80% {
		transform: scale(1.1);
	}
	100% {
		opacity: 0.8;
	}
}

@keyframes botonApareciendo {
	20% {
		opacity: 0;
		transform: scale(0);
		transform: translate(-50%, -50%);
	}
	80% {
		transform: scale(1.5);
		transform: translate(-50%, -50%);
	}
	100% {
		opacity: 0.9;
		transform: scale(1);
		transform: translate(-50%, -50%);

	}
}

@keyframes botonMoviendose {
	0% {
		transform: translate(-50%, -50%);
	}
	50% {
		transform: translate(-50%, -60%);
	}
	100% {
		transform: translate(-50%, -50%);
	}
}
@keyframes subtituloApareciendo {
	from {
		opacity: 0;
	}
	to {
		opacity: 0.9;
	}
}

/* Screen sizes */

@media screen and (max-width: 680px) {
	.carousel-items {
		top: 0%;
		margin: 1.5rem 0rem;
	}

	.heading-carousel-title {
		min-width: 80%;
		max-width: auto;
		max-height: 8rem;
		padding: 1rem 1rem;
		height: 15rem;
		font-size: 1.2rem;
		margin-left: 1.5rem;
	}

	.heading-carousel-subtitle {
		height: 4rem;
		font-size: 14px !important;
		margin-left: 1.5rem;
	}

	.heading-carousel {
		margin: 10%;
		left: 0rem;
	}
}

@media screen and (max-width: 1024px){
	.heading-carousel-title {
		font-size: 1.8rem !important;
	}
}
</style>

<!-- ! SCRIPT -->

<script>
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // Import the ScrollToPlugin

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

export default {
	data() {
		return {
			slides: [
				{
					image: "/css/pictures/carousel-1.jpg",
					title: "Soluciones Tecnológicas para el Éxito Empresarial",
					subtitle: "Mejora tu Rendimiento con Estrategias a la Medida",
				},
				{
					image: "/css/pictures/carousel-2.jpg",
					title: "Posicionamiento Estratégico en la Web",
					subtitle: "Optimice su Visibilidad y Aumente su Alcance en la Web",
				},
				{
					image: "/css/pictures/carousel-3.jpg",
					title: "Bases de Datos Potentes para su Negocio",
					subtitle:
						"Optimice el Manejo de Datos para Decisiones Más Inteligentes y Rápidas",
				},
			],
			headings: ["hey", "hello"],
		};
	},
	methods: {
		moverAlSegundoElemento() {
			// const segundoElemento = this.$refs.segundoElementoHtml;
			// Utilizando $refs accedemos al elemento html,
			// smoother.scrollTo(segundoElemento)
			gsap.to(window, {
				duration: 0.7,
				scrollTo: { y: "#segundoElementoHtml", offsetY: 80 },
			})
		}	
	}
};
</script>
