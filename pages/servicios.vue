<template>
<div class="toda-pagina">
	<div class="primera-pantalla">
		<!-- ! CARD -->
		<v-container class="mt-10 mt-xxl-16 primer-slide-container">
			<v-row class="d-flex justify-center">
				<v-card class="mb-6 px-6 mt-xxl-16 rounded-xl mx-2" elevation="0">
					<h1 class="px-2 py-4 text-orange-darken-2 text-xl-h2 text-h4 text-md-h2">
						Excelencia Digital, Adaptada para Ti
					</h1>
				</v-card>
			</v-row>
			<v-row class="mx-2 my-6 v-flex align-center">
				<v-col cols="12" sm="5">
					<v-card
						class="mb-16 px-6 bg-orange-lighten-1 rounded-xl elementos-primera-pantalla"
						elevation="24"
					>
						<p
							class="px-2 py-4 text-md-h6 text-xl-h5 py-xl-16 px-xl-16 text-body-2 text-white typed-text"
						>
							{{ typedText }}
						</p>
					</v-card>
				</v-col>
				<v-col cols="2"></v-col>
				<v-col cols="5" v-if="$vuetify.display.smAndUp" class="mb-16 px-6 rotating-image">
					<v-img src="/css/pictures/service-title.png" cover class="elementos-primera-pantalla"></v-img>
				</v-col>
			</v-row>
		</v-container>
	</div>
		<div class="segunda-pantalla mb-16">
			<v-container> 
				<v-row>
					<v-col cols="12" sm="5"  class="mb-16">
						<servicios-servicesCard :tituloCard="tituloCard1" :subTituloCard="subTituloCard1" :textoCard="textoCard1" :image="imageCard1" />
					</v-col>
					<v-spacer></v-spacer>
					<v-col cols="12" sm="5" class="mb-16">
						<servicios-servicesCard :tituloCard="tituloCard2" :subTituloCard="subTituloCard2" :textoCard="textoCard2" :image="imageCard2" />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" sm="5" class="mt-16 mb-16">
						<servicios-servicesCard :tituloCard="tituloCard3" :subTituloCard="subTituloCard3" :textoCard="textoCard3" :image="imageCard3" />
					</v-col>
					<v-spacer></v-spacer>
					<v-col cols="12" sm="5" class="mt-16 mb-16">
						<servicios-servicesCard :tituloCard="tituloCard4" :subTituloCard="subTituloCard4" :textoCard="textoCard4" :image="imageCard4" />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" sm="5" class="mt-16 mb-16">
						<servicios-servicesCard :tituloCard="tituloCard5" :subTituloCard="subTituloCard5" :textoCard="textoCard5" :image="imageCard5" />
					</v-col>
					<v-spacer></v-spacer>
					<v-col cols="12" sm="5" class="mt-16 mb-16">
						<servicios-servicesCard :tituloCard="tituloCard6" :subTituloCard="subTituloCard6" :textoCard="textoCard6" :image="imageCard6" />
					</v-col>
				</v-row>
			</v-container>
		</div>
</div>	


</template>
<style>
.primera-pantalla {
	min-height: 100dvh;
}

.segunda-pantalla {
	min-height: 100dvh;
}

.toda-pagina {
	opacity: 0;
	animation: apareciendo 2s forwards;
}

.elementos-primera-pantalla {
	opacity: 0;
	animation: apareciendo 5s forwards 0.3s;
}

.rotating-image {
	animation: rotate 10s linear infinite; /* Adjust the duration as needed */
}

/* Optional: add styles for better readability or customization */
.typed-text::after {
	content: "|"; /* Cursor blink */
	animation: blink 0.7s infinite alternate;
}
.services-database {
	animation: services-database 5s infinite;
}
@keyframes apareciendo {
	to {
		opacity: 1;
	}
}

@keyframes blink {
	to {
		opacity: 0;
	}
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

@keyframes services-database {
	50% {
		transform: scale(0.95);
	}
	100% {
		transform: scale(1);

	}
}

</style>

<script>
export default {
	data() {
		return {
			show: false,
			typedText: "",
			fullText:
				"Descubre una suite de servicios tecnológicos en NT Solutions diseñados para un impacto máximo. Desde el desarrollo de sitios web de vanguardia hasta integraciones de bases de datos sin fisuras y diseño web creativo, adaptamos soluciones para elevar tu marca. Nuestro marketing digital estratégico, aplicaciones web preparadas para el futuro y soluciones de comercio electrónico personalizadas redefinen el éxito en el panorama digital. Experimenta la innovación con NT Solutions, donde tu visión se encuentra con la excelencia digital.",
			tituloCard1: "Desarrollo de Sitios Web a Medida",
			subTituloCard1: "Transformamos Ideas en Realidad Digital",
			textoCard1: "Eleva tu presencia en línea con nuestros servicios personalizados de desarrollo de sitios web. Nuestro equipo de desarrolladores expertos crea sitios web receptivos y visualmente impactantes adaptados a las necesidades únicas de tu negocio. Desde el concepto hasta la implementación, convertimos tu visión en una experiencia en línea poderosa.",
			imageCard1: "/css/pictures/servicios-web.png",

			tituloCard2: "Soluciones Creativas de Diseño Web",
			subTituloCard2: "Diseños Atractivos para un Mundo Digital",
			textoCard2: "Sumerge a tu audiencia en experiencias en línea visualmente cautivadoras. Nuestros diseñadores expertos fusionan la estética con la funcionalidad, creando sitios web cautivadores que dejan una impresión duradera. Eleva tu marca con nuestras soluciones personalizadas de diseño web que reflejan tu identidad y resuenan con tu audiencia objetivo.",
			imageCard2: "/css/pictures/servicios-webDesign.png",

			tituloCard3: "Arquitecturas de Aplicaciones Web",
			subTituloCard3: "Construimos Arquitecturas Escalables para la Innovación",
			textoCard3: "Potencia tu negocio con aplicaciones web de última generación. Nuestros arquitectos diseñan marcos escalables y resistentes que se adaptan a tus necesidades cambiantes. Desde la conceptualización hasta la implementación, diseñamos aplicaciones web que impulsan la innovación y llevan tu negocio hacia adelante.",
			imageCard3: "/css/pictures/servicios-arquitecturasWeb.png",

			tituloCard4: "Soluciones de Comercio Electrónico a Medida",
			subTituloCard4: "Desbloqueamos el Éxito en Ventas Minoristas en Línea",
			textoCard4: "Revoluciona tu tienda en línea con nuestras soluciones de comercio electrónico personalizadas. Integramos interfaces amigables para el usuario con sistemas backend robustos, ofreciendo una experiencia de compra segura e intuitiva. Maximiza tu potencial de ventas en línea con nuestra experiencia en comercio electrónico personalizado.",
			imageCard4: "/css/pictures/servicios-e-commerce.png",

			tituloCard5: "Integraciones de Bases de Datos",
			subTituloCard5: "Almacena datos de manera segura",
			textoCard5: "Desbloquea el poder de la gestión de datos sin fisuras. Nuestros servicios de integración de bases de datos garantizan que tus sistemas se comuniquen de manera eficiente, mejorando la eficiencia operativa. Desde el diseño hasta la implementación, optimizamos tu arquitectura de datos, proporcionando una base para soluciones comerciales escalables y robustas.",
			imageCard5: "/css/pictures/servicios-database.png",

			tituloCard6: "Marketing Digital Estratégico",
			subTituloCard6: "Amplifica tu Presencia en Línea",
			textoCard6: "Navega el panorama digital con nuestras completas soluciones de marketing digital. Desde SEO y gestión de redes sociales hasta campañas dirigidas, amplificamos la visibilidad de tu marca y fomentamos la participación significativa. Mantente a la vanguardia en la era digital con nuestras estrategias de marketing basadas en datos.",
			imageCard6: "/css/pictures/servicios-marketing.png",


		};
	},
	methods: {
		typeText() {
			let index = 0;
			const intervalId = setInterval(() => {
				this.typedText = this.fullText.slice(0, index);
				index++;
				if (index > this.fullText.length) {
					clearInterval(intervalId);
				}
			}, 15);
		},
	},
	mounted() {
		this.typeText();
	},

	computed: {
		columnCount() {
			// Adjust the breakpoint as needed
			return this.$vuetify.display.smAndUp ? "6" : "12";
		},
	},
};
</script>
