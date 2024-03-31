<template>
	<div class="pruebaGradientWindow d-flex flex-column justify-content-center">
		<div>
			<v-container class="mt-sm-6 primer-slide-container">
				<v-row class="mt-4 d-flex justify-center">
					<div>
						<v-card
							class="mx-2 pa-12 pb-8"
							elevation="24"
							max-width="448"
							rounded="xl"
						>
							<div class="col">
								<a href="#" class="fb btn rounded-xl">
									<v-icon icon="mdi-facebook" class="mr-6"></v-icon> Login with Facebook
								</a>
								<a href="#" class="twitter btn rounded-xl">
									<v-icon icon="mdi-twitter" class="mr-6"></v-icon> Login with Twitter
								</a>
								<a href="#" class="google btn rounded-xl">
									<v-icon icon="mdi-google" class="mr-6"></v-icon> Login with Google
								</a>
								<a href="#" class="github btn rounded-xl">
									<v-icon icon="mdi-github" class="mr-6"></v-icon> Login with Github
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
	
							<v-card class="mb-12 rounded-lg" color="surface-variant" variant="tonal">
								<v-card-text class="text-medium-emphasis text-caption">
									Si no te acuerdas de la contraseña, también puedes hacer clic en "¿Olvidaste la
									contraseña?" para restablecer la contraseña de inicio de sesión.
								</v-card-text>
							</v-card>
	
							<v-btn
								class="bg-blue-grey-darken-3"
								:loading="loading"
								size="large"
								variant="tonal"
								rounded="xl"
								block
								@click="login()"
							>
								Log In <span class="mdi mdi-login"></span
							></v-btn>
	
							<v-card-text class="text-center">
								<p>
									<nuxt-link to="/sign-up" class="text-blue-grey-darken-3">
										Regístrate ahora <v-icon icon="mdi-chevron-right"></v-icon>
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
.pruebaGradientWindow {
	background: linear-gradient(-45deg, #E65100, #37474F, var(--one));
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
	height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.btn {
	width: 100%;
	padding: 12px;
	border: none;
	border-radius: 4px;
	margin: 5px 0;
	opacity: 0.85;
	display: inline-block;
	font-size: 17px;
	line-height: 20px;
	text-decoration: none; /* remove underline from anchors */
}
/* add appropriate colors to fb, twitter and google buttons */
.fb {
	background-color: #3b5998;
	color: white;
}

.twitter {
	background-color: #55acee;
	color: white;
}

.google {
	background-color: rgb(163, 118, 118);
	color: white;
}

.github {
	background-color: var(--five);
	color: white;
}

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
