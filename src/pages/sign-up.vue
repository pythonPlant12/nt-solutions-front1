<template>
	<div class="pruebaGradientWindow d-flex flex-column justify-content-center">
	<div>
		<v-container class="mt-sm-6 mt-xl-12 primer-slide-container">
			<v-row class="mt-4 d-flex justify-center">
				<div>
					<v-card
						class="mx-6 pa-12 pb-8"
						elevation="24"
						max-width="448"
						rounded="xl"
					>
						<v-card class="mb-4 bg-orange-lighten-4 rounded-lg" variant="tonal">
							<v-card-text class="text-medium-emphasis text-caption">
								Únete a nuestra comunidad con solo un clic! Puedes registrarte fácilmente usando tus
								<b>plataformas favoritas </b>como Facebook, Google y más.
							</v-card-text>
						</v-card>
						<div class="d-flex justify-space-around">
							<a href="#" class="fb sign-up">
								<v-icon icon="mdi-facebook" class="mr-6"></v-icon>
							</a>
							<a href="#" class="twitter sign-up">
								<v-icon icon="mdi-twitter" class="mr-6"></v-icon
							></a>
							<a href="#" class="google sign-up">
								<v-icon icon="mdi-google" class="mr-6"></v-icon>
							</a>
							<a href="#" class="github sign-up">
								<v-icon icon="mdi-github" class="mr-6"></v-icon>
							</a>
						</div>
						<hr class="my-4" />
						<div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

						<v-text-field
							density="compact"
							placeholder="Email address"
							prepend-inner-icon="mdi-email-outline"
							variant="outlined"
						></v-text-field>

						<div
							class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
						>
							Contraseña

							<a
								class="text-caption text-decoration-none text-blue"
								href="#"
								rel="noopener noreferrer"
								target="_blank"
							>
								¿Olvidaste la contraseña?</a
							>
						</div>

						<v-text-field
							:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
							:type="visible ? 'text' : 'password'"
							density="compact"
							placeholder="Escribe tu contraseña"
							prepend-inner-icon="mdi-lock-outline"
							variant="outlined"
							@click:append-inner="visible = !visible"
						></v-text-field>
						<v-text-field
							:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
							:type="visible ? 'text' : 'password'"
							density="compact"
							placeholder="Confirma tu contraseña"
							prepend-inner-icon="mdi-lock-outline"
							variant="outlined"
							@click:append-inner="visible = !visible"
						></v-text-field>
						<v-card class="mb-12 rounded-lg" color="bg-blue" variant="tonal">
							<v-card-text class="text-medium-emphasis text-caption">
								Necesitas confirmar tu correo electrónico para poder acceder a todas las funciones de la plataforma
							</v-card-text>
						</v-card>

						<v-btn
							:loading="loading"
							size="large"
							variant="tonal"
							rounded="xl"
							block
							@click="login()"
              style="background-color: var(--gold); color: white;"
						>
							Sign Up <span class="mdi mdi-login"></span
						></v-btn>

						<v-card-text class="text-center">
							<p>
								<nuxt-link to="/log-in" class="text-brown-lighten-2 mr-6">
									<v-icon icon="mdi-chevron-left"></v-icon>Devolver 
								</nuxt-link>
							</p>
						</v-card-text>
					</v-card>
				</div>
			</v-row>
		</v-container>
	</div>
</div>
</template>
<style>
.sign-up {
	padding: 0.5rem;
	opacity: 0.85;
  max-width: 43px;
	border-radius: 25%;
  color: var(--blue);
  border: 1px solid var(--blue);
}

/*
!* add appropriate colors to fb, twitter and google buttons *!
.fb {
	background-color: #3b5998;
	color: white;
}

.twitter {
  border-radius: 5px;
}

.google {
	background-color: rgb(163, 118, 118);
	color: white;
}

.github {
	background-color: var(--five);
	color: white;
}
*/

.btn:hover {
	opacity: 1;
}
</style>
<script>
export default {
	data: () => ({
		visible: false,
		loading: false,
	}),
	methods: {
		login() {
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
			}, 5000);
		},
	},
};
</script>
