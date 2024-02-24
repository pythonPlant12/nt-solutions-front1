<template>
	<v-sheet
		class="d-flex align-center justify-center flex-column text-center mx-auto px-4 mt-sm-16 mt-6"
		elevation="24"
		height="80vh"
		rounded
		max-width="80%"
		width="100%"
	>
		<h2 class="titulo text-h3 font-weight-black text-orange">Empresa en un mundo digital</h2>
		<p class="texto text-sm-h6 text-caption mb-8 mt-8 mx-4 mx-sm-16 text-grey-darken-1">
			Si estás aqui es porque valoras la excelencia en la presencia digital de tu negocio. En
			nuestra plataforma, te ofrecemos no solo servicios de diseño web vanguardistas, sino también
			soluciones tecnológicas personalizadas para potenciar el rendimiento de tu empresa. Desde la
			implementación de bases de datos hasta la creación de portales especializados, nuestro
			compromiso es impulsar tu éxito en línea. Con enfoque en el posicionamiento web y SEO, nos
			esforzamos por llevar tu presencia digital a nuevas alturas.
		</p>

		<nuxt-link to="/servicios">
			<v-btn color="orange buttonDescubrir" :ripple="false" size="x-large" :elevation="buttonElevation" @mouseenter="setElevation(24)" @mouseleave="setElevation(4)"
				>Descubrir</v-btn
			>
		</nuxt-link>
	</v-sheet>
	<h1 class="text-sm-h2 font-weight-black text-orange text-center mt-16">
		Utilizando mismas tecnologías...
	</h1>
	<v-sheet
		width="100%"
		elevation="24"
		rounded
		class="d-flex align-center justify-center mx-auto my-16"
	>
		<v-slide-group v-model="model" class="pa-4">
			<v-slide-group-item v-for="item in items" :key="item" v-slot="{ toggle }">
				<v-card :class="['ma-4']" height="200" width="200" @click="toggle">
					<h5 class="text-center">{{ item.nombre }}</h5>
					<div class="d-flex fill-height align-center justify-center">
						<v-img :src="item.img" height="100" class="services-database"></v-img>
					</div>
				</v-card>
			</v-slide-group-item>
		</v-slide-group>
	</v-sheet>
	<v-sheet elevation="24" height="auto" rounded width="100%" class="pb-16 mx-auto">
		<h1 class="text-sm-h2 py-sm-16 py-8 font-weight-black text-orange px-8 text-center">
			Preguntas más frecuentes...
		</h1>

		<v-expansion-panels variant="popout" class="pa-sm-4 px-0">
			<v-expansion-panel v-for="(message, i) in messages" :key="i" hide-actions>
				<v-expansion-panel-title>
					<v-row align="center" class="spacer" no-gutters>
						<v-col class="text-no-wrap text-left" cols="5" sm="3">
							<v-chip
								v-if="message.tag"
								:color="`${message.color}-lighten-1`"
								class="ms-0 me-2"
								label
								small
							>
								{{ message.tag }}
							</v-chip>
							<strong>{{ message.title }}</strong>
						</v-col>

						<v-col
							v-if="message.excerpt"
							class="text-medium-emphasis text-truncate hidden-sm-and-down"
						>
							&mdash;
							{{ message.excerpt }}
						</v-col>
					</v-row>
				</v-expansion-panel-title>

				<v-expansion-panel-text>
					<h3 class="text-h6 text-center text-orange">{{ message.excerpt }}</h3>
					<v-card-text v-text="message.text" class="text-center"></v-card-text>
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-sheet>
</template>

<style>
@media screen and (max-width: 1100px) {
	.titulo {
		font-size: 2rem !important;
		line-height: 2rem;
	}
	.subtitulo {
		font-size: 1.4rem !important;
	}
}

@media screen and (max-width: 668) {
	.titulo {
		font-size: 1rem !important;
	}
}

</style>

<script>
export default {
	data: () => ({
		buttonElevation: 4,
		model: null,
		show: false,
		items: [
			{
				nombre: "Google",
				img: "/css/pictures/carousel-2/google.png",
			},
			{
				nombre: "Pinterest",
				img: "/css/pictures/carousel-2/pinterest.png",
			},
			{
				nombre: "Facebook",
				img: "/css/pictures/carousel-2/facebook.png",
			},
			{
				nombre: "Netflix",
				img: "/css/pictures/carousel-2/netflix.png",
			},
			{
				nombre: "Spotify",
				img: "/css/pictures/carousel-2/spotify.png",
			},
			{
				nombre: "Youtube",
				img: "/css/pictures/carousel-2/youtube.png",
			},
			{
				nombre: "X",
				img: "/css/pictures/carousel-2/x.png",
			},
			{
				nombre: "Instagram",
				img: "/css/pictures/carousel-2/instagram.png",
			},
			{
				nombre: "Postgres",
				img: "/css/pictures/carousel-2/postgresql.png",
			},
		],
		messages: [
			{
				avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
				name: "John Leider",
				title: "Desarrollo Web Personalizado",
				color: "orange",
				excerpt: "¿Cómo beneficia un desarrollo web personalizado a mi empresa?",
				text: "El desarrollo web personalizado ofrece soluciones adaptadas a las necesidades específicas, proporcionando flexibilidad y eficacia para un sitio web único.",
				tag: 1,
			},
			{
				icon: "mdi-account-multiple",
				name: "Servicios Especializados",
				excerpt: "¿Cuáles son las ventajas de elegir servicios especializados?",
				tag: 2,
				total: 3,
				title: "Servicios Especializados",
				text: "Optar por servicios especializados garantiza un enfoque centrado en las necesidades únicas de tu empresa, brindando soluciones más adaptadas que las plataformas estándar.",
			},
			{
				icon: "mdi-tag",
				name: "Promos",
				color: "orange",
				tag: 3,
				total: 4,
				title: "SEO Personalizado",
				excerpt: "¿Ofrecen servicios de SEO personalizados para mejorar la visibilidad?",
				text: "Sí, la integración de estrategias de SEO personalizadas aumenta la visibilidad del sitio web, mejorando el ranking en los motores de búsqueda y atrayendo más tráfico orgánico.",
			},
			{
				icon: "mdi-tag",
				name: "Promos",
				tag: 4,
				total: 4,
				title: "Comercio Electrónico Adaptable",
				excerpt: "¿Pueden incorporar funcionalidades de comercio electrónico específicas?",
				text: "Absolutamente, el desarrollo personalizado permite la integración de soluciones de comercio electrónico adaptadas a las necesidades específicas de tu empresa.",
			},
			{
				color: "orange",
				icon: "mdi-tag",
				name: "Promos",
				tag: 5,
				total: 4,
				title: "Promoción Digital Integral",
				excerpt: "¿Cómo se promocionan los sitios web empresariales desarrollados?",
				text: "Empleamos estrategias de marketing digital integral, incluyendo redes sociales, contenido atractivo y publicidad en línea, para aumentar la visibilidad de los servicios en línea.",
			},
		],
		lorem:
			"Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
	}),
	methods: {
		setElevation(value) {
			this.buttonElevation = value;
		}
	}
};
</script>
