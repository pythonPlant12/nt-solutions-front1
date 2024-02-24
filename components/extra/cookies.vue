<template>
	<!-- ? COOKIES BANNER -->
	<v-banner
		v-if="cookiesNoAceptadas"
		class="cookies"
		avatar="https://cdn.vuetifyjs.com/docs/images/logos/v.svg"
		stacked
	>
		<template v-slot:text>
			Bienvenido/a a <b class="text-orange-darken-2">NT Solutions</b>, una empresa dedicada
			al desarrollo de páginas web. Valoramos la privacidad de nuestros usuarios y clientes y nos
			comprometemos a proteger la información personal que puedan proporcionarnos. La presente
			describe

			<a href="https://www.iubenda.com/privacy-policy/76325752/cookie-policy" target="_blank"
				><b>Política de Privacidad</b></a
			>
			cómo recopilamos, utilizamos y compartimos la información que obtenemos a través de nuestros
			servicios en línea.
		</template>

		<template v-slot:actions>
			<v-dialog v-model="dialog" max-width="500">
				<template v-slot:activator="{ props }">
					<v-btn
						class="text-none"
						color="orange-darken-4"
						rounded="0"
						variant="outlined"
						v-bind="props"
					>
						Configurar Cookies
					</v-btn>
				</template>

				<v-card title="Configuración de los Cookies">
					<v-card-text>
						<h4>Cookies</h4>
						<p class="pb-4">
							Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario y
							personalizar el contenido. Al utilizar nuestro sitio web, usted acepta el uso de
							cookies de acuerdo con esta Política de Privacidad. Las cookies son pequeños archivos
							de datos que se almacenan en su dispositivo cuando visita nuestro sitio web.
							Utilizamos tres tipos de cookies:
						</p>

						<v-list-subheader class="font-weight-black text-high-emphasis"
							>Cookies Necesarias (Required Cookies)</v-list-subheader
						>

						<p class="mb-4">
							Estas cookies son esenciales para el funcionamiento básico de nuestro sitio web. Le
							permiten navegar por el sitio y utilizar funciones clave, como acceder a áreas
							seguras.
						</p>

						<v-list-subheader class="font-weight-black text-high-emphasis"
							>Cookies de Rendimiento (Performance Cookies)</v-list-subheader
						>

						<v-switch
							v-model="performance"
							:label="performance ? 'On' : 'Off'"
							color="orange-darken-4"
							density="compact"
							hide-details
							inline
							inset
						></v-switch>

						<p class="mb-4">
							Estas cookies recopilan información sobre cómo los visitantes utilizan nuestro sitio
							web, como las páginas que visitan con más frecuencia. Nos ayudan a mejorar el
							rendimiento y la eficiencia de nuestro sitio.
						</p>

						<v-list-subheader class="font-weight-black text-high-emphasis"
							>Cookies Publicitarias (Advertising Cookies)</v-list-subheader
						>

						<v-switch
							v-model="advertising"
							:label="advertising ? 'On' : 'Off'"
							color="orange-darken-4"
							density="compact"
							hide-details
							inline
							inset
						></v-switch>

						<p class="mb-16">
							Estas cookies se utilizan para mostrar anuncios relevantes para usted y sus intereses.
							También pueden ser utilizadas para realizar un seguimiento de la eficacia de nuestras
							campañas publicitarias.
						</p>
					</v-card-text>

					<v-divider></v-divider>

					<v-card-actions class="justify-center px-6 py-3">
						<v-btn
							class="flex-grow-1 text-none"
							color="orange-darken-4"
							rounded="0"
							variant="plain"
							@click="dialog = false, aceptarCookies()"
						>
							Rechazar todas
						</v-btn>

						<v-btn
							class="text-white flex-grow-1 text-none"
							color="orange-darken-4"
							rounded="0"
							variant="flat"
							@click="dialog = false, aceptarCookies()"
						>
							Guardar y aceptar
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>

			<v-btn
				class="text-none ms-4 text-white"
				color="orange-darken-4"
				rounded="0"
				variant="flat"
				@click="aceptarCookies()"
			>
				Aceptar Cookies
			</v-btn>
		</template>
	</v-banner>
</template>

<style>
.cookies {
	position: fixed !important;
	border-top: 1px solid gray !important;
	bottom: 0rem;
	z-index: 1;
}
</style>

<script>
export default {
	data() {
		return {
			dialog: false,
			advertising: true,
			performance: true,
			cookiesNoAceptadas: true,
		};
	},
	methods: {
		aceptarCookies() {
			this.cookiesNoAceptadas = false;
			this.$emit("aceptarCookies", false);
		},
	},
};
</script>
