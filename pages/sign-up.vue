<template>
  <div class="gradientBackground d-flex flex-column justify-content-center">
    <div>
      <v-container class="mt-sm-6 mt-xl-12 mb-12 primer-slide-container">
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
              <!--              Social media accounts -->
              <div class="d-flex justify-space-around">
                <a href="#">
                  <img
                      src="public/icons/social-media/facebook.svg"
                      alt="Facebook"
                      width="30"
                      height="30"
                      class="log-in-icon"
                  >
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
              <hr class="my-4">
              <!--              Formulario -->
              <div>
                <v-form v-model="isValidSignUpForm" @submit.prevent="signUp">
                  <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

                  <v-text-field
                      v-model="email"
                      class="mb-2"
                      density="compact"
                      placeholder="Correo electrónico"
                      prepend-inner-icon="mdi-email-outline"
                      variant="outlined"
                      :rules="[rules.required, rules.email]"
                  />
                  <v-text-field
                      v-model="first_name"
                      class="mb-2"
                      density="compact"
                      placeholder="Nombre"
                      prepend-inner-icon="mdi-email-outline"
                      variant="outlined"
                      :rules="[rules.required]"
                  />
                  <v-text-field
                      v-model="last_name"
                      class="mb-2"
                      density="compact"
                      placeholder="Apellidos"
                      prepend-inner-icon="mdi-email-outline"
                      variant="outlined"
                      :rules="[rules.required]"
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
                      class="mb-2"
                      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="visible ? 'text' : 'password'"
                      density="compact"
                      placeholder="Escribe tu contraseña"
                      prepend-inner-icon="mdi-lock-outline"
                      variant="outlined"
                      :rules="[rules.required, rules.password]"
                      @click:append-inner="visible = !visible"
                  />
                  <v-text-field
                      v-model="password2"
                      class="mb-2"
                      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="visible ? 'text' : 'password'"
                      density="compact"
                      placeholder="Confirma tu contraseña"
                      prepend-inner-icon="mdi-lock-outline"
                      variant="outlined"
                      :rules="[rules.required, rules.password]"
                      @click:append-inner="visible = !visible"
                  />
                  <v-card class="mb-12 rounded-lg" color="bg-blue" variant="tonal">
                    <v-card-text class="text-medium-emphasis text-caption">
                      Necesitas confirmar tu correo electrónico para poder acceder a todas las funciones de la
                      plataforma
                    </v-card-text>
                  </v-card>

                  <v-btn
                      :loading="loading"
                      size="large"
                      variant="tonal"
                      rounded="xl"
                      block
                      type="submit"
                      style="background-color: var(--gold); color: white;"
                  >
                    Sign Up <span class="mdi mdi-login"/></v-btn>
                </v-form>
              </div>

              <v-card-text class="text-center">
                <p>
                  <nuxt-link to="/log-in" class="text-brown-lighten-2 mr-6">
                    <v-icon icon="mdi-chevron-left"/>
                    Devolver
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
<script setup lang="ts">
import {useUserStore} from "../store/userStore";
import {toast} from "vue3-toastify";

const userStore = useUserStore()
const runtimeConfig = useRuntimeConfig()
const router = useRouter()
const visible = ref(false)
const loading = ref(false)
const signUpError = ref('')

// Form data
const email = ref('')
const first_name = ref('')
const last_name = ref('')
const password = ref('')
const password2 = ref('')
const isValidSignUpForm = ref(false)

// Form rules
const rules = {
  required: value => !!value || 'Este campo es requerido',
  counter: value => value.length <= 20 || 'Max 20 characters',
  email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Correo electrónico inválido'
  },
  password: value => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{6,68}$/
    return pattern.test(value) || 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un dígito y un signo especial y debe tener entre 6 y 68 caracteres.'
  }
}

async function sendSignUpRequest(formData) {
  try {
    await $fetch(`${runtimeConfig.public.backendApi}/api/v1/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData
    })
    userStore.setUserData(first_name.value, last_name.value, email.value)
    await router.push(`/verify-user/${btoa(email.value)}`)
  } catch (error) {
    signUpError.value = Object.keys(error?.data).map(key => `${error.data[key]}`).join('\n')
    password.value = ""
    password2.value = ""
    toast(`${signUpError.value}`, {type: "error"})
  }
}

async function signUp() {
  if (!isValidSignUpForm.value) {
    return
  }
  loading.value = true;
  const formData = {
    email: email.value,
    first_name: first_name.value,
    last_name: last_name.value,
    password: password.value,
    password2: password2.value,
    encodedEmail: btoa(email.value)
  }
  await sendSignUpRequest(formData)
  loading.value = false;
}

</script>
<style>
</style>
