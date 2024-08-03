<template>
  <v-alert
      border="top"
      type="error"
      variant="outlined"
  >
    <span style="color: var(--gold);">El inicio de sesión está deshabilitado debido a mejoras en la plataforma interna.</span>
  </v-alert>
  <div class="pruebaGradientWindow d-flex flex-column justify-content-center">
    <div>
      <v-container class="mt-sm-6 mt-xl-12 mb- primer-slide-container">
        <v-row class="mt-4 d-flex justify-center">
          <div>
            <v-card class="mx-6 pa-12 pb-8" elevation="24" max-width="448" rounded="xl">
              <div class="col">
                <!--								<GoogleSignInButton-->
                <!--									@success="handleLoginSuccess"-->
                <!--									@error="handleLoginError"-->
                <!--								></GoogleSignInButton>-->
                <v-card class="mb-4 bg-blue-grey-lighten-4 rounded-lg" variant="tonal">
                  <v-card-text class="text-medium-emphasis text-caption">
                    Únete a nuestra comunidad con solo un clic! Puedes registrarte fácilmente usando tus
                    <b>plataformas favoritas </b>como Facebook, Google y más.
                  </v-card-text>
                </v-card>
                <div class="d-flex justify-space-around">
                  <a href="#" class="fb log-in-icon">
                    <v-icon icon="mdi-facebook" class="mr-6"></v-icon>
                  </a>
                  <a href="#" class="twitter log-in-icon">
                    <v-icon icon="mdi-twitter" class="mr-6"></v-icon
                    >
                  </a>
                  <a href="#" class="google log-in-icon">
                    <v-icon icon="mdi-google" class="mr-6"></v-icon>
                  </a>
                  <a href="#" class="github log-in-icon">
                    <v-icon icon="mdi-github" class="mr-6"></v-icon>
                  </a>
                </div>

              </div>
              <v-form v-model="form" @submit.prevent="">
                <hr class="my-4"/>
                <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

                <v-text-field
                    density="compact"
                    placeholder="Email address"
                    prepend-inner-icon="mdi-email-outline"
                    variant="outlined"
                    v-model="email"
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
                    v-model="password"
                    @click:append-inner="visible = !visible"
                ></v-text-field>

                <v-card class="mb-12 rounded-lg" color="surface-variant" variant="tonal">
                  <v-card-text class="text-medium-emphasis text-caption">
                    Si no te acuerdas de la contraseña, también puedes hacer clic en "¿Olvidaste la
                    contraseña?" para restablecer la contraseña de inicio de sesión.
                  </v-card-text>
                </v-card>

                <v-btn
                    :loading="loading"
                    size="large"
                    type="submit"
                    variant="tonal"
                    disabled="true"
                    rounded="xl"
                    block
                    style="background-color: var(--blue); color: white;"
                >
                  Log In <span class="mdi mdi-login"></span
                ></v-btn>

                <v-card-text class="text-center">
                  <p>
                    <nuxt-link to="/sign-up" class="text-blue-grey-darken-3">
                      Regístrate ahora
                      <v-icon icon="mdi-chevron-right"></v-icon>
                    </nuxt-link>
                  </p>
                </v-card-text>
              </v-form>
            </v-card>
          </div>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style>
.pruebaGradientWindow {
  background: linear-gradient(-45deg, var(--three), #37474f, var(--one));
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
  position: static;
  height: 140vh;
  margin: 0; /* Remove margin */
  box-sizing: border-box; /* Include padding and border in the element's total height */
}

@media screen and (min-width: 429px) {
  .pruebaGradientWindow {
    height: 100vh;
  }
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.log-in-icon {
  padding: 0.5rem;
  opacity: 0.85;
  max-width: 43px;
  border-radius: 25%;
  color: var(--gold);
  border: 1px solid var(--gold);
}

.log-in-icon:hover {
  background-color: var(--blue);
  color: white;
}
</style>
<script>
// import { GoogleSignInButton } from "vue3-google-signin"; // import for Google Button
export default {
  components: {
    // GoogleSignInButton,
  },
  data: () => ({
    form: false,
    email: null,
    password: null,
    visible: false,
    loading: false,
  }),
  methods: {

    login() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
      this.postToBackendAuth();
    },
    // handle success google login event
    // handleLoginSuccess(response) {
    // 	const { credential } = response;
    // 	console.log("Access Token", credential);
    // 	this.postToBackendGoogleButton(credential);
    // },
    // handle an error google login event
    // handleLoginError() {
    // 	console.error("Login failed");
    // },
    async postToBackendGoogleButton(accessToken) {
      const response = await fetch(process.env.BACKEND_API + "log-in/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          /* your data here */
        }),
      });
      const data = await response;
    },
    // async postToBackendAuth() {
    // 	const response = await fetch(process.env.BACKEND_API + "auth/token/", {
    // 		method: "POST",
    // 		headers: {
    // 			"Content-Type": "application/json",
    // 			accept: "application/json",
    // 		},
    // 		body: JSON.stringify({
    // 			grant_type: "password",
    // 			username: this.email,
    // 			password: this.password,
    // 			client_secret:
    // 				process.env.GOOGLE_CLIENT_SECRET,
    // 			client_id: process.env.GOOGLE_CLIENT_ID,
    // 		}),
    // 	});
    // 	const data = await response.json();
    // },
    // onSubmit() {
    // 	this.postToBackendAuth();
    // 	if (!this.form) {
    // 	}
    //
    // 	this.loading = true;
    //
    // 	setTimeout(() => (this.loading = false), 2000);
    // },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>
