<template>
	<div id="video-container">
		<video id="video" autoplay loop muted playsinline>
			<!-- Add your video source here -->
			<source src="/css/pictures/sobreNosotrosBackground.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</div>
	<sobreNosotros-componenteCard
		:title="title1"
		:text="text1"
		:image="image1"
		:animation="animation1"
	/>
	<sobreNosotros-componenteCard
		:title="title2"
		:text="text2"
		:image="image2"
		:animation="animation1"
	/>
	<sobreNosotros-componenteCard
		:title="title3"
		:text="text3"
		:image="image3"
		:animation="animation1"
	/>
	<sobreNosotros-componenteCard
		:title="title4"
		:text="text4"
		:image="image4"
		:animation="animation1"
	/>
	<sobreNosotros-componenteCard
		:title="title5"
		:text="text5"
		:image="image5"
		:animation="animation1"
	/>
	<sobreNosotros-componenteCard
		:title="title6"
		:text="text6"
		:image="image6"
		:animation="animation1"
	/>
</template>
<style>
#video-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100dvh;
	overflow: hidden;
	opacity: 0;
	animation: apareciendoFondoPantalla 2s forwards;
}

#video {
	width: 100%;
	height: 100%;
	object-fit: cover; /* Ensure the video covers the entire container */
	opacity: 0;
	animation: apareciendoFondoPantalla 2s forwards;
}
@keyframes apareciendoFondoPantalla {
	to {
		opacity: 1;
	}
}
</style>

<script>
export default {
	data() {
		return {
			title1: "Líderes en la Revolución Digital Global",
			text1:
				"Forjamos el camino hacia la revolución digital desde el epicentro de la innovación. Nuestra empresa lidera con tecnologías avanzadas que transforman la manera en que el mundo abraza la innovación.",
			image1: "/css/pictures/sobreNosotros-card1.png",
			animation1: "moviendose",

			title2: "Arquitectos de Soluciones Transformadoras",
			text2:
				"En el corazón de la tecnología, diseñamos soluciones que trascienden fronteras. Guiados por una visión global, llevamos la excelencia a cada rincón del planeta a través de implementaciones de última generación.",
			image2: "/css/pictures/sobreNosotros-card2.png",

			title3: "Innovación como Pilar Fundamental",
			text3:
				"Nuestra historia se construye con líneas de innovación que cruzan continentes. Desde el epicentro de la acción, generamos un impacto positivo en el mundo mediante tecnologías que eliminan las barreras geográficas.",
			image3: "/css/pictures/sobreNosotros-card3.png",

			title4: "Conectando Horizontes con Tecnología Avanzada",
			text4:
				"Enlazamos horizontes, conectando continentes con tecnologías avanzadas. Somos la fuerza impulsora detrás de una nueva era digital, llevando la esencia de innovación y calidad a todos los rincones del globo.",
			image4: "/css/pictures/sobreNosotros-card4.png",

			title5: "Estrategas de la Transformación Digital",
			text5:
				"Desde el epicentro de la estrategia digital, trazamos la ruta hacia el futuro. Nuestra presencia global es testimonio de una dedicación inflexible a la excelencia tecnológica, marcando el camino para la próxima era digital.",
			image5: "/css/pictures/sobreNosotros-card5.png",

			title6: "Embajadores de la Excelencia Tecnológica",
			text6:
				"Como embajadores de la excelencia tecnológica, actuamos desde el epicentro de la innovación. Nuestra identidad se forja en el compromiso con la calidad, la innovación y la creación de un impacto significativo en la forma en que el mundo adopta la tecnología.",
			image6: "",
		};
	},
};
</script>
