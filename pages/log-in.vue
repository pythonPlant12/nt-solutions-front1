<template>
  <div class="gradientBackground">
    <v-container class="d-flex flex-column justify-content-center align-center mt-sm-6 mt-xl-12 primer-slide-container">
      <v-row class="mt-4 justify-center">
        <v-card class="mx-6 pa-12 pb-8" elevation="24" max-width="448" rounded="xl">
          <v-card class="mb-4 bg-blue-grey-lighten-4 rounded-lg" variant="tonal">
            <v-card-text class="text-medium-emphasis text-caption">
              Únete a nuestra comunidad con solo un clic! Puedes registrarte fácilmente usando tus
              <b>plataformas favoritas </b>como Facebook, Google y más.
            </v-card-text>
          </v-card>
          <div class="d-flex justify-space-around">
            <a href="#">
              <img src="public/icons/social-media/facebook.svg" alt="Facebook" width="30" height="30" class="log-in-icon">
            </a>
            <a href="#">
              <img src="public/icons/social-media/x.svg" alt="Facebook" width="28" height="28">
            </a>
            <a href="#">
              <img src="public/icons/social-media/google.svg" alt="Facebook" width="28" height="28">
            </a>
            <a href="#">
              <img src="public/icons/social-media/github.svg" alt="Facebook" width="28" height="28">
            </a>

          </div>

          <v-form v-model="form" @submit.prevent="">
            <hr class="my-4">
            <div class="text-subtitle-1 text-medium-emphasis">Email</div>

            <v-text-field
                v-model="email"
                density="compact"
                placeholder="Email address"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
            />

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
                v-model="password"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Escribe tu contraseña"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                @click:append-inner="visible = !visible"
            />

            <v-card class="mb-12 rounded-lg" color="surface-variant" variant="tonal">
              <v-card-text class="text-medium-emphasis text-caption">
                Si no te acuerdas de la contraseña, también puedes hacer clic en "¿Olvidaste la
                contraseña?" para restablecer la contraseña de inicio de sesión.
              </v-card-text>
            </v-card>

            <v-btn
                size="large"
                type="submit"
                variant="tonal"
                rounded="xl"
                block
                style="background-color: var(--blue); color: white;"
                :loading="logInLoading"
                :disabled="logInDisabled"
                @click="logIn()"
            >
              Log In <span class="mdi mdi-login"/></v-btn>

            <v-card-text class="text-center">
              <p>
                <nuxt-link to="/sign-up" class="text-blue-grey-darken-3">
                  Regístrate ahora
                  <v-icon icon="mdi-chevron-right"/>
                </nuxt-link>
              </p>
            </v-card-text>
          </v-form>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import {toast} from "vue3-toastify";
import {useUserStore} from "../store/userStore";

const form = ref(false)
const email = ref(null)
const password = ref(null)
const visible = ref(false)

const logInLoading = ref(false)
const logInDisabled = ref(true)

const userStore = useUserStore()


watch([email, password], () => {
  // First, check if either field is empty
  logInDisabled.value = !email.value || !password.value;

  // Then check email format
  if (email.value) {
    const isValidEmail = /^[a-z0-9.-]+@[a-z.-]+\.[a-z]+$/i.test(email.value);
    // If email is invalid, disable button
    if (!isValidEmail) {
      logInDisabled.value = true;
    }
  }
})

async function logIn() {
  logInLoading.value = true
  try {
    const response = await $fetch(useRuntimeConfig().public.backendApi + "/api/v1/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: email.value,
        password: password.value
      },
      credentials: 'include'
    })
    if (response) {
      userStore.setUserData(response.email, response.full_name.split(" ")[0], response.full_name.split(" ")[1])
      await navigateTo("/dashboard")
      toast("¡Bienvenido de nuevo!", {type: "success"})
    }
  } catch (err) {
    toast(`Error al iniciar sesión: ${Object.values(err.data)[0]}`, {type: "error"})
  } finally {
    logInLoading.value = false
    password.value = ""
  }
}
</script>
<style>
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
</style>
