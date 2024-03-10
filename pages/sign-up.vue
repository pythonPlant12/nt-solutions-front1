<template>
	<div>
		<v-container class="mt-sm-6 primer-slide-container">
			<v-row class="mt-4 d-flex justify-center">
				<div>
					<v-card class="mx-2 mt-xl-6 mt-6 mt-6 sign-up" elevation="24" max-width="448">
						<v-toolbar color="blue-grey-darken-3" cards dark flat>
              <nuxt-link to="/log-in" class="text-white">
              <v-btn icon class="ml-2">
									<v-icon>mdi-arrow-left</v-icon>
								</v-btn>
              </nuxt-link>
							<v-card-title class="text-h6 font-weight-regular"> Registrate </v-card-title>
						</v-toolbar>
						<v-form ref="form" v-model="isValid" class="pa-4 pt-6">
							<v-text-field
								v-model="email"
								:rules="[rules.email]"
								color="blue-grey-darken-3"
								label="Correo electrónico"
                class="mb-2"
								type="email"
								variant="outlined"
							></v-text-field>
							<v-text-field
								v-model="password"
								:rules="[rules.password, rules.length(6)]"
								color="blue-grey-darken-3"
                class="mb-2"
								counter="6"
								label="Contraseña"
								style="min-height: 96px"
								type="password"
								variant="outlined"
							></v-text-field>
							<v-text-field
								v-model="phone"
                class="mb-2"
								color="blue-grey-darken-3"
								variant="outlined"
								label="Número de teléfono"
							></v-text-field>
							<v-textarea
								v-model="bio"
								color="blue-grey-darken-3"
                class="mb-2"
								label="Sobre tí"
								rows="1"
								variant="outlined"
								style="min-height: 200px"
								auto-grow
							></v-textarea>
							<v-checkbox v-model="agreement" :rules="[rules.required]" color="blue-grey-darken-3">
								<template v-slot:label>
									<p>
										Acepto las condiciones de:
										<a href="/politica-privacidad" target="_blank"> Politica de privacidad</a>
									</p>
								</template>
							</v-checkbox>
						</v-form>
						<v-divider></v-divider>
						<v-card-actions>
							<v-btn variant="text" @click="form.reset()"> Limpiar </v-btn>
							<v-spacer></v-spacer>
							<v-btn :disabled="!isValid" :loading="isLoading" color="blue-grey-darken-3">
								Registrarse
							</v-btn>
						</v-card-actions>
					</v-card>
				</div>
			</v-row>
		</v-container>
	</div>
</template>
<style>
.sign-up {
	min-width: 40rem !important;
}
@media screen and (max-width: 1100px) {
	.sign-up {
		min-width: 20rem !important;
		margin: 0px important!;
	}
}
</style>
<script setup>
import { ref } from "vue";

const rules = {
	email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
	length: (len) => (v) => (v || "").length >= len || `Invalid character length, required ${len}`,
	password: (v) =>
		!!(v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
		"Password must contain an upper case letter, a numeric character, and a special character",
	required: (v) => !!v || "This field is required",
};

const form = ref();

const agreement = ref(false);
const bio = ref("");
const dialog = ref(false);
const email = ref();
const isValid = ref(false);
const isLoading = ref(false);
const password = ref();
const phone = ref();
</script>
