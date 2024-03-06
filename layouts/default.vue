<template>
	<header class="border-gray-400">
		<!-- ! Navigation Bar MOBILE-->
		<div class="container">
			<nav class="nav">
				<ul class="nav-list nav-list-mobile">
					<li class="nav-item">
						<div class="mobile-menu">
							<span class="line line-top1"></span>
							<span class="line line-top"></span>
							<span class="line line-buttom"></span>
							<span class="line line-buttom1"></span>
						</div>
					</li>
					<nuxt-link to="/">
						<v-img
							src="/css/pictures/logo.png"
							class="nav-link nav-link-logo logo-moviendose"
							width="50"
						></v-img>
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
					<v-btn-toggle class="nav-list nav-list-larger larger-mobile">
						<li class="nav-item nav-item-hidden">
							<div class="mobile-menu">
								<span class="line line-top"></span>
								<span class="line line-bottom"></span>
							</div>
						</li>
						<li class="nav-item">
							<nuxt-link to="/">
								<v-img src="/css/pictures/logo.png" class="nav-link nav-link-logo"></v-img>
							</nuxt-link>
						</li>

						<li class="nav-item">
							<nuxt-link to="/" class="nav-link nav-link-mobile" @click.prevent="cerrarMenu()"
								><v-btn
									:color="empresa"
									:style="{ 'text-decoration': empresaUnder ? 'underline' : 'none' }"
									append-icon="mdi mdi-domain"
									size="small"
									variant="text"
									rounded="lg"
									class="boton"
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
									:style="{ 'text-decoration': serviciosUnder ? 'underline' : 'none' }"
									append-icon="mdi mdi-database-cog"
									variant="text"
									size="small"
									rounded="lg"
									class="boton"
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
									:style="{ 'text-decoration': tecnologiasUnder ? 'underline' : 'none' }"
									append-icon="mdi mdi-wifi-settings"
									size="small"
									variant="text"
									rounded="lg"
									class="boton"
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
									:style="{ 'text-decoration': tecnologiasUnder ? 'underline' : 'none' }"
									append-icon="mdi mdi-information-variant"
									size="small"
									variant="text"
									rounded="lg"
									class="boton"
									>Sobre Nosotros</v-btn
								></nuxt-link
							>
						</li>
						<li class="nav-item">
							<nuxt-link
								to="/contacto"
								class="nav-link nav-link-mobile"
								@click.prevent="cerrarMenu()"
								><v-btn
									append-icon="mdi mdi-account-box-outline"
									variant="text"
									size="small"
									rounded="lg"
									class="boton"
									>Contacto</v-btn
								>
							</nuxt-link>
						</li>
						<li class="nav-item mr-4">
							<nuxt-link
								to="/politica-privacidad"
								class="nav-link nav-link-mobile"
								@click.prevent="cerrarMenu()"
								><v-btn
									append-icon="mdi mdi-account-box-outline"
									variant="outlined"
									size="small"
									rounded="lg"
									class="boton"
									>Log In</v-btn
								>
							</nuxt-link>
						</li>
					</v-btn-toggle>
				</ul>
			</nav>
		</div>
	</header>
	<div class="mt-16">
		<slot />
		<extra-Cookies @aceptarCookies="updateCookieData" v-if="cookiesAceptadas" />
	</div>

</template>

<style>
.boton {
	padding: 0.5rem !important;
}
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
	border-color: var(--two);
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
	min-height: 100dvh;

}

.primera-parte-footer {
	min-height: 100dvh;
}


@media screen and (min-width: 1100px) {
	.primera-parte-footer {
		min-height: auto;
	}
}

/* ! CSS Styles for PHONE (Small Screen ) */
@media screen and (max-width: 1100px) {
	header {
		height: 4.8rem;
		transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
			height 0.5s cubic-bezier(0.32, 0.08, 0.24, 1);
		display: block; /* Use flexbox */
	}

	.hero {
		height: 100rem;
		background-size: auto 100rem;
		background-position: bottom center;
		background-repeat: no-repeat;
	}

	header .container {
		padding: 0;
	}

	.nav-list {
		margin-top: -1.5rem;
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
		width: 1.5rem;
		height: 2.5px;
		border-radius: 20rem;
		background-color: #5f5a5a;
		color: #5f5a5a;
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
		margin-top: 12px;
		opacity: 1;
		transition: margin-top 0.3192s 0.1s cubic-bezier(0.04, 0.04, 0.12, 0.96);
		transition: opacity 0.3192s 0.2s cubic-bezier(0.04, 0.04, 0.12, 0.96);
		transition-delay: 0.3s;
	}

	.active .line-buttom1 {
		margin-top: -12px;
		opacity: 0;
		transition-delay: 0.2s;
		transition: margin-top 0.3192s 0.1s cubic-bezier(0.04, 0.04, 0.12, 0.96);
	}
	.line-top1 {
		margin-top: -12px;
		opacity: 1;
		transition: margin-top 0.3192s 0.1s cubic-bezier(0.04, 0.04, 0.12, 0.96);
		transition: opacity 0.3192s 0.2s cubic-bezier(0.04, 0.04, 0.12, 0.96);
		transition-delay: 0.3s;
	}

	/* ! Mobile Menu Trigger transition/transform */
	.active .line-top1 {
		margin-top: 12px;
		opacity: 0;
		transition-delay: 0.2s;
		transition: margin-top 0.3192s 0.1s cubic-bezier(0.04, 0.04, 0.12, 0.96);
	}

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
		transition: opacity 2s;
	}

	.nav-link-bag {
		width: 1.6rem;
		height: 4.8rem;
		transition: opacity 2s;
	}

	.nav {
		position: relative;
		padding: 2rem !important;
	}

	.nav-link {
		font-size: 1.7rem;
		padding: 0;
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

	.title-heading {
		font-size: 4.4rem;
	}

	.hero {
		height: 100rem;
		background-size: auto 100rem;
		background-position: bottom center;
		background-repeat: no-repeat;
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

@media screen and (max-width: 680px) {
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
		padding: 4.5rem 5rem;
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
	}
	to {
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

	computed: {},
};
</script>
