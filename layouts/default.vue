<template>
	<header class="border-gray-400">
		<!-- ! Navigation Bar MOBILE-->
		<div class="container">
			<nav class="nav">
				<ul class="nav-list nav-list-mobile">
					<li class="nav-item">
						<div class="mobile-menu">
							<span class="line line-top"></span>
							<span class="line line-buttom"></span>
							<span class="line line-buttom1"></span>
						</div>
					</li>
						<nuxt-link to="/" >
							<v-img src="/css/pictures/logo.svg" class="nav-link nav-link-logo logo-moviendose" width="30"></v-img>
						</nuxt-link>

					<li class="nav-item">
						<nuxt-link to="/contacto"
							><v-icon icon="mdi mdi-account-box-outline" class="nav-link nav-link-bag"></v-icon
						></nuxt-link>
					</li>
				</ul>
				<!-- /.nav-list nav-list-mobile -->
				<!-- ! Navigation List of Options Bar COMPUTER -->
				<ul class="nav-list nav-list-larger larger-mobile">
					<li class="nav-item nav-item-hidden">
						<div class="mobile-menu">
							<span class="line line-top"></span>
							<span class="line line-bottom"></span>
						</div>
					</li>
					<li class="nav-item">
						<nuxt-link to="/">
							<v-img src="/css/pictures/logo.svg" class="nav-link nav-link-logo"></v-img>
						</nuxt-link>						
					</li>

					<li class="nav-item">
						<nuxt-link to="/" class="nav-link nav-link-mobile" @click.prevent="cerrarMenu()"
							><v-btn :color="empresa" append-icon="mdi mdi-domain" size="large" variant="text"
								>NT Solutions</v-btn
							></nuxt-link
						>
					</li>
					<li class="nav-item">
						<nuxt-link
							to="/servicios"
							class="nav-link nav-link-mobile"
							@click.prevent="cerrarMenu()"
							><v-btn
								:color="servicios"
								append-icon="mdi mdi-database-cog"
								size="large"
								variant="text"
								>Servicios</v-btn
							></nuxt-link
						>
					</li>
					<li class="nav-item">
						<nuxt-link
							to="/tecnologias"
							class="nav-link nav-link-mobile"
							@click.prevent="cerrarMenu()"
							><v-btn
								:color="tecnologias"
								append-icon="mdi mdi-wifi-settings"
								size="large"
								variant="text"
								>Tecnologías</v-btn
							></nuxt-link
						>
					</li>
					<li class="nav-item">
						<nuxt-link
							to="/sobre-nosotros"
							class="nav-link nav-link-mobile"
							@click.prevent="cerrarMenu()"
							><v-btn
								:color="sobreNosotros"
								append-icon="mdi mdi-information-variant"
								size="large"
								variant="text"
								>Sobre Nosotros</v-btn
							></nuxt-link
						>
					</li>
					<li class="nav-item">
						<nuxt-link to="/contacto" class="nav-link nav-link-mobile" @click.prevent="cerrarMenu()"
							><v-btn
								:color="contacto"
								append-icon="mdi mdi-account-box-outline"
								variant="text"
								size="large"
								>Contacto</v-btn
							>
						</nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<div class="mt-16">
		<slot />
		<extra-Cookies @aceptarCookies="updateCookieData" v-if="cookiesAceptadas" />
	</div>
	<footer class="footer mt-16">
		<div class="primera-parte-footer mt-16">
			<v-row class="v-flex justify-center">
				<h2 class="text-orange-darken-2 sm:mt-10">NT Solutions</h2>
			</v-row>
			<v-row class="mt-16"></v-row>
			<v-row class="v-flex justify-center mt-16">
				<nuxt-link to="/"><v-btn varian="plain" class="text-h6">NT Solutions</v-btn></nuxt-link>
			</v-row>
			<v-row class="v-flex justify-center mt-8">
				<nuxt-link to="/servicios"
					><v-btn varian="plain" class="text-h6">Servicios</v-btn></nuxt-link
				>
			</v-row>
			<v-row class="v-flex justify-center mt-8">
				<nuxt-link to="/tecnologias"
					><v-btn varian="plain" class="text-h6">Tecnologías</v-btn></nuxt-link
				>
			</v-row>
			<v-row class="v-flex justify-center mt-8">
				<nuxt-link to="/sobre-nosotros"
					><v-btn varian="plain" class="text-h6">Sobre nosotros</v-btn></nuxt-link
				>
			</v-row>
			<v-row class="v-flex justify-center mt-8">
				<nuxt-link to="/contacto"
					><v-btn varian="plain" class="text-h6">Contacto</v-btn></nuxt-link
				>
			</v-row>
			<v-row class="mt-sm-16"></v-row>
			<v-row class="mt-xl-16"></v-row>
			<v-row class="mt-xl-16"></v-row>
			<v-row class="v-flex justify-center align-center pt-16 mt-16">
				<v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
			</v-row>
		</div>
		<v-container class="mt-sm-16 mb-sm-16 mb-4 segunda-parte">
			<v-row class="mt-sm-16"></v-row>
			<h4 class="mb-4 text-center text-grey-darken-2">1.2 Información Personal</h4>
			<p class="text-grey-darken-1">
				Además de la información recopilada a través de cookies, es posible que solicitemos ciertos
				datos personales, como su nombre, dirección de correo electrónico y número de teléfono, solo
				cuando sea necesario para proporcionar nuestros servicios.
			</p>
			<h4 class="mb-4 mt-4 text-center text-grey-darken-2">
				2. Cómo Utilizamos la Información Utilizamos la información recopilada para:
			</h4>
			<p class="text-grey-darken-1">
				Personalizar su experiencia en nuestro sitio web. Proporcionar servicios y responder a sus
				consultas. Mejorar la calidad de nuestros servicios y desarrollar nuevos productos. Enviarle
				comunicaciones relacionadas con nuestros servicios.
			</p>
			<h4 class="mb-4 mt-4 text-center text-grey-darken-2">3. Compartir Información</h4>
			<p class="text-grey-darken-1">
				No compartimos su información personal con terceros, excepto cuando sea necesario para la
				prestación de nuestros servicios o cuando estemos legalmente obligados a hacerlo.
			</p>
			<h4 class="mb-4 mt-4 text-center text-grey-darken-2">4. Notificación de Cookies</h4>
			<p class="text-grey-darken-1">
				Al visitar nuestro sitio web, verá una notificación de cookies que le informa sobre el uso
				de cookies y proporciona un enlace a esta Política de Privacidad. Al continuar navegando,
				usted acepta el uso de cookies según lo descrito en esta política.
			</p>
			<h4 class="mb-4 mt-4 text-center text-grey-darken-2">5. Sus Derechos</h4>
			<p class="text-grey-darken-1">
				Usted tiene el derecho de acceder, corregir o eliminar su información personal. Si tiene
				alguna pregunta o desea ejercer sus derechos de privacidad, no dude en ponerse en contacto
				con nosotros.
			</p>
			<h4 class="mb-4 mt-4 text-center text-grey-darken-2">6. Cambios en Esta Política</h4>
			<p class="text-grey-darken-1">
				Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Se
				le notificarán cambios significativos. Le recomendamos que revise periódicamente esta
				política para estar informado sobre cómo estamos protegiendo su información. Gracias por
				confiar en NT Solutions. NT Solutions Ltd. info@ntsolutions.com
				+34 633 144 405
			</p>
		</v-container>
	</footer>
</template>

<style>
a {
	display: block;
	text-decoration: none;
}
/* ! Header */
header {
	display: flex; /* Use flexbox */
	justify-content: center; /* Center horizontally */
	align-items: center; /* Center vertically */
	position: fixed;
	top: 0;
	z-index: 14;
	width: 100%;
	height: 4.4rem;
	background-color: rgba(248, 248, 248, 0.5);
	backdrop-filter: blur(2rem);
	border-bottom-width: 1px;
}

.main-div {
	height: 100dvh;
}
.nav-list {
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 -1rem;
}

.nav-list-mobile {
	display: none;
}

.nav-link {
	font-size: 1.4rem;
	color: #5f5a5a;
	width: 100%;
	padding: 0 1rem;
	transition: opacity 0.5s;
}
.nav-link:hover {
	opacity: 0.7;
}

.nav-link-logo {
	align-self: center;
	width: 1.6rem;
	height: 1.56rem;
	transition: opacity 3s;
}

.logo-moviendose {
	transition: opacity 3s;
	animation: 10s logoMoviendose infinite;
}

.active .nav-link-logo {
	display: none;
}

.nav-link-bag {
	margin-right: 2rem;
	align-self: center;
	width: 1.4rem;
	height: 4.4rem;
}

.active .nav-list-larger .nav-item {
	opacity: 1;
}

.active .nav-list-larger {
	animation: fadeIn 1s ease-in;
	opacity: 1;
	width: 100%;
	height: 100vh;
	visibility: visible;
}

.footer {
	border-top: 3px;
	border-top-style: solid;
	border-color: gray;
}

.primera-parte-footer {
	min-height: 100dvh;
}
.segunda-parte {
	z-index: 500 !important;
}

@media screen and (min-width: 1100px) {
	.primera-parte-footer {
		min-height: auto;
	}
}

@media screen and (max-width: 1100px) {
	.hero {
		height: 100rem;
		background-size: auto 100rem;
		background-position: bottom center;
		background-repeat: no-repeat;
	}

	header {
		display: block; /* Use flexbox */
	}
	.title-heading {
		font-size: 4.4rem;
	}

	.title-sub-heading {
		font-size: 2.4rem;
		color: white;
	}

	.cta-link:nth-child(2) {
		margin-left: 2rem;
	}

	.title-heading-watch {
		height: 6.2rem;
		/* background-image: url("images/hero/watch/logo_watch_medium.png"); */
		background-size: auto 6.2rem;
	}
}

/* ! CSS Styles for PHONE (Small Screen ) */
@media screen and (max-width: 1100px) {
	header {
		height: 4.8rem;
		transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
			height 0.5s cubic-bezier(0.32, 0.08, 0.24, 1);
	}

	header .container {
		padding: 0;
	}

	.iphone-11-pro {
		margin-top: 4.8rem;
	}

	.nav-list {
		margin-top: 0;
	}

	.nav-list-mobile {
		display: flex;
	}

	.nav-item {
		width: 4.8rem;
		height: 4.8rem;
		display: flex;
		justify-content: center;
		align-content: center;

	}

	.nav-link-mobile {
		padding-bottom: 8px;
		border-bottom-width: 2px;
		border-color: #2a2a2a10;
	}

	.nav-item-hidden {
		display: none;
	}

	/* ! Lines of mobile menu trigger */
	.mobile-menu {
		margin-left: 2rem;
		position: relative;
		z-index: 15;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.line {
		position: absolute;
		width: 1.7rem;
		height: 1.4px;
		background-color: #413f3f;
		color: #413f3f;
		transition: margin-top 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96);
	}

	.line-top {
		transform: translateX(10px);
		transform: rotate(0deg);
		transition: transform 0.3192s 0.1s cubic-bezier(0.04, 0.04, 0.12, 0.96);
	}
	.line-buttom {
		margin-top: -0.4px;
		transform: rotate(0deg);
		transition: transform 0.3192s 0.1s cubic-bezier(0.04, 0.04, 0.12, 0.96);
	}

	.line-buttom1 {
		margin-top: 10px;
		opacity: 1;
		transition: margin-top 0.3192s 0.1s cubic-bezier(0.04, 0.04, 0.12, 0.96);
		transition: opacity 0.3192s 0.2s cubic-bezier(0.04, 0.04, 0.12, 0.96);
		transition-delay: 0.1s;
	}

	.active .line-buttom1 {
		margin-top: 0px;
		opacity: 0;
		transition-delay: 0.1s;
		transition: margin-top 0.3192s 0.1s cubic-bezier(0.04, 0.04, 0.12, 0.96);
	}
	/* ! Mobile Menu Trigger transition/transform */

	.active .line-top {
		margin-bottom: 0;
		transform: rotate(45deg);
		transition: transform 0.3192s 0.1s cubic-bezier(0.04, 0.04, 0.12, 0.96);
	}
	.active .line-buttom {
		margin-top: 0;
		transform: rotate(-45deg);
		transition: transform 0.3192s 0.1s cubic-bezier(0.04, 0.04, 0.12, 0.96);
	}

	header.active {
		height: 100%;
		background-color: rgba(244, 239, 239, 1);
		backdrop-filter: blur(1rem);
	}

	.nav-link-logo {
		width: 1.8rem;
		height: 4.8rem;
		position: relative;
		z-index: 15;
		transition: opacity 3s
	}

	.nav-link-bag {
		width: 1.6rem;
		height: 4.8rem;
		transition: opacity 3s;
	}

	.nav {
		position: relative;
	}

	.nav-link {
		font-size: 1.7rem;
		padding: 0;
		margin: auto 0;
	}

	.nav-list-larger {
		position: fixed;
		opacity: 0;
		/* ! */
		visibility: hidden;
		top: 0;
		left: 0;
		width: 0;
		height: 0;
		display: block;
		padding: 10.5rem 5rem;
		z-index: 10;
		box-sizing: border-box;
		transition: opacity 0.3s;
	}

	.active .nav-link-bag {
		opacity: 0;
		transition: opacity 0.3s;
	}

	.nav-list-larger .nav-item {
		width: 100%;
		justify-content: flex-start;
		border-bottom: 4px solid rgba(255, 255, 255, 0.1);
	}
	.nav-list-larger .nav-item:nth-child(9) {
		border-bottom: none;
	}
}


@keyframes fadeIn {
	from {
		opacity: 0;
		visibility: hidden;
	}
	to {
		opacity: 1;
		visibility: visible;
	}
}
@keyframes logoMoviendose {
	from {
		rotate: 0;
	} to {
		rotate: 360deg;
	}
}
</style>
<script>
export default {
	mounted() {
		this.cookiesAceptadas = true;
		const selectElement = (element) => document.querySelector(element);

		selectElement(".mobile-menu").addEventListener("click", () => {
			selectElement("header").classList.toggle("active");
		});
	},
	data() {
		return {
			icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
			cookiesAceptadas: false,
		};
	},
	methods: {
		cerrarMenu() {
			const selectElement = (element) => document.querySelector(element);
			selectElement("header").classList.remove("active");
		},
		updateCookieData() {
			this.cookiesAceptadas = true;
		},
	},

	computed: {
		empresa() {
			const currentPath = this.$route.path;
			if (currentPath === "/") {
				return "orange";
			}
		},
		servicios() {
			const currentPath = this.$route.path;
			if (currentPath === "/servicios") {
				return "orange";
			}
		},
		tecnologias() {
			const currentPath = this.$route.path;
			if (currentPath === "/tecnologias") {
				return "orange";
			}
		},
		sobreNosotros() {
			const currentPath = this.$route.path;
			if (currentPath === "/sobre-nosotros") {
				return "orange";
			}
		},
		contacto() {
			const currentPath = this.$route.path;
			if (currentPath === "/contacto") {
				return "orange";
			}
		},
	},
};
</script>
