<template>
  <!-- Header -->
  <div>
    <header class="border-gray-400">
      <!-- ! Navigation Bar MOBILE-->
      <div class="container">
        <nav class="nav">
          <ul class="nav-list nav-list-mobile">
            <li class="nav-item">
              <div class="mobile-menu">
                <span class="line line-top1"/>
                <span class="line line-top"/>
                <span class="line line-buttom"/>
                <span class="line line-buttom1"/>
              </div>
            </li>
          </ul>
          <NuxtLink to="/" class="title-heading-nav nav-list-mobile gradient-text bold">NT SOLUTIONS</NuxtLink>
          <!-- /.nav-list nav-list-mobile -->
          <!-- ! Navigation List of Options Bar COMPUTER -->
          <ul class="nav-list nav-list-larger larger-mobile">
            <v-btn-toggle
                v-model="activeBtn"
                mandatory
                class="nav-list nav-list-larger larger-mobile"
            >
              <li class="nav-item nav-item-hidden">
                <div class="mobile-menu">
                  <span class="line line-top"/>
                  <span class="line line-bottom"/>
                </div>
              </li>

              <li class="nav-item">
                <NuxtLink to="/" class="nav-link nav-link-mobile" @click.prevent="cerrarMenu()"
                >
                  <v-btn
                      value="/"
                      append-icon="mdi mdi-domain"
                      size="small"
                      variant="text"
                      rounded="lg"
                      class="boton"
                  >NT Solutions
                  </v-btn
                  >
                </NuxtLink
                >
              </li>

              <li class="nav-item">
                <NuxtLink
                    to="/services"
                    class="nav-link nav-link-mobile"
                    @click.prevent="cerrarMenu()"
                >
                  <v-btn
                      key="/services"
                      value="/services"
                      append-icon="mdi mdi-database-cog"
                      variant="text"
                      size="small"
                      rounded="lg"
                      class="boton"
                  >Servicios
                  </v-btn
                  >
                </NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink
                    to="/tecnologies"
                    class="nav-link nav-link-mobile"
                    @click.prevent="cerrarMenu()"
                >
                  <v-btn
                      key="/tecnologies"
                      value="/tecnologies"
                      append-icon="mdi mdi-wifi-settings"
                      size="small"
                      variant="text"
                      rounded="lg"
                      class="boton"
                  >Tecnologías
                  </v-btn
                  >
                </NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink
                    to="/about-us"
                    class="nav-link nav-link-mobile"
                    @click.prevent="cerrarMenu()"
                >
                  <v-btn
                      key="/about-us"
                      value="/about-us"
                      append-icon="mdi mdi-information-variant"
                      size="small"
                      variant="text"
                      rounded="lg"
                      class="boton"
                  >Sobre Nosotros
                  </v-btn
                  >
                </NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink
                    to="/contact-us"
                    class="nav-link nav-link-mobile"
                    @click.prevent="cerrarMenu()"
                >
                  <v-btn
                      key="/contact-us"
                      value="/contact-us"
                      append-icon="mdi mdi-account-box-outline"
                      variant="text"
                      size="small"
                      rounded="lg"
                      class="boton"
                  >Contacto
                  </v-btn
                  >
                </NuxtLink>
              </li>
              <li v-if="!hasAccess" class="nav-item">
                <NuxtLink to="/log-in" class="nav-link nav-link-mobile" @click.prevent="cerrarMenu()"
                >
                  <v-btn
                      append-icon="mdi mdi-lock-check"
                      variant="outlined"
                      size="small"
                      rounded="lg"
                      class="boton boton-sign-in"
                  >Log In
                  </v-btn
                  >
                </NuxtLink>
              </li>
              <li v-if="hasAccess" class="nav-item">
                <v-btn
                    append-icon="mdi mdi-logout"
                    variant="outlined"
                    size="small"
                    rounded="lg"
                    class="boton boton-log-out"
                    @click.prevent="cerrarMenu()"
                    @click="logout()"
                >salir
                </v-btn>
              </li>

              <li class="nav-item mr-4">
                <NuxtLink to="/sign-up" class="nav-link nav-link-mobile" @click.prevent="cerrarMenu()"
                >
                  <v-btn
                      v-if="!hasAccess"
                      append-icon="mdi mdi-account-check"
                      variant="outlined"
                      size="small"
                      rounded="lg"
                      class="boton boton-sign-up ml-2"
                  ><b class="text-white">Sign up</b></v-btn
                  >
                </NuxtLink>
              </li>
            </v-btn-toggle>
          </ul>
        </nav>
      </div>
    </header>

    <div class="mt-16">
      <slot/>
      <extra-Cookies v-if="!cookiesAceptadas" @aceptar-cookies="updateCookieData"/>
    </div>
    <footer class="footer">
      <v-container>
        <v-row align="center">
          <v-col align-self="center" class="text-center mt-8">
            <h2 style="color: var(--blue)">NT SOLUTIONS</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mx-2 my-4" cols="12" md="3">
            <h4 class="mb-4 mx-2" style="color: var(--gold)">CONTACTO</h4>
            <ul style="list-style-type: none">
              <li>
                <p class="text-body-2 my-1">
                  <v-icon class="mr-4" icon="mdi-email-outline"/>
                  info@nt-solutions.es
                </p>
              </li>
              <li>
                <p class="text-body-2 my-1">
                  <v-icon class="mr-4" icon="mdi-map-marker-outline"/>
                  Plaza de Castilla,
                  Madrid Spain
                </p>
              </li>
              <li>
                <p class="text-body-2 my-1">
                  <v-icon class="mr-4" icon="mdi-phone"/>
                  +34 633 144 405
                </p>
              </li>
              <li>
                <p class="text-body-2 my-1">
                  <v-icon class="mr-4" icon="mdi-whatsapp"/>
                  +34 622 100 031
                </p>
              </li>
              <li>
                <p class="text-body-2 my-1">
                  <v-icon class="mr-4" icon="mdi-translate-variant"/>
                  ENG ESP RUS
                </p>
              </li>
            </ul>
          </v-col>
          <v-col class="mx-2 my-4" cols="12" md="3">
            <h4 class="mb-4 mx-2" style="color: var(--gold)">MENÚ</h4>
            <ul style="list-style-type: none">
              <li>
                <NuxtLink to="/">
                  <v-btn
                      append-icon="mdi mdi-domain"
                      size="small"
                      variant="text"
                      rounded="lg"
                      class="boton"
                  >
                    NT Solutions
                  </v-btn>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services">
                  <v-btn
                      append-icon="mdi mdi-database-cog"
                      size="small"
                      variant="text"
                      rounded="lg"
                      class="boton"
                  >
                    Servicios
                  </v-btn>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/tecnologies">
                  <v-btn
                      append-icon="mdi mdi-wifi-settings"
                      size="small"
                      variant="text"
                      rounded="lg"
                      class="boton"
                  >
                    Tecnologías
                  </v-btn>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about-us">
                  <v-btn
                      append-icon="mdi mdi-information-variant"
                      size="small"
                      variant="text"
                      rounded="lg"
                      class="boton"
                  >
                    Sobre Nosotros
                  </v-btn>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="boton" to="/privacy-policy">
                  <v-btn
                      append-icon="mdi-account-eye-outline"
                      variant="text"
                      size="small"
                      rounded="lg"
                      class="boton"
                  >Política de privacidad
                  </v-btn>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="boton" to="/log-in">
                  <v-btn
                      append-icon="mdi mdi-lock-check"
                      variant="outlined"
                      size="small"
                      rounded="lg"
                      class="boton boton-sign-in ml-2 mb-2"
                  >Log In
                  </v-btn>
                </NuxtLink>
                <NuxtLink class="boton" to="/sign-up">
                  <v-btn
                      append-icon="mdi mdi-account-check"
                      variant="outlined"
                      size="small"
                      rounded="lg"
                      class="boton boton-sign-up ml-2"
                  ><b class="text-white">Sign up</b></v-btn
                  >
                </NuxtLink>
              </li>
            </ul>
          </v-col>
          <v-col class="mx-2 my-4" cols="9" md="5">
            <h4 class="mb-4 mx-2" style="color: var(--gold)">NEWSLETTER</h4>
            <extra-newsletter @newsletter-toast="abrirSnackBar"/>
            <p class="text-body-2 mt-2 text-grey-darken-1">
              Al suscribirte a nuestra newsletter, serás el primero en recibir actualizaciones
              exclusivas, consejos expertos, y ofertas especiales que solo están disponibles para
              nuestros suscriptores.
            </p>
          </v-col>
        </v-row>
        <v-row class="mt-12">
          <v-col cols="2" sm="3"/>
          <v-col>
            <v-icon icon="mdi-facebook" style="color: var(--gold);"/>
          </v-col>
          <v-col>
            <v-icon icon="mdi-linkedin" style="color: var(--gold);"/>
          </v-col>
          <v-col>
            <v-icon icon="mdi-github" style="color: var(--gold);"/>
          </v-col>
          <v-col>
            <v-icon icon="mdi-google-plus" style="color: var(--gold);"/>
          </v-col>
          <v-col>
            <v-icon icon="mdi-youtube" style="color: var(--gold);"/>
          </v-col>
          <v-col cols="2" sm="3"/>
        </v-row>
        <v-row>
          <v-col>
            <p class="my-8 mx-2 text-body-2 text-grey-darken-1 text-center">
              Empresa registrada oficialmente en Estonia. Comprometidos con la excelencia y la
              innovación en soluciones tecnológicas.
              <br>
              <b>© {{ currentYear }} NT-SOLUTIONS OÜ. </b> Todos los derechos reservados.
            </p>
          </v-col>
        </v-row>
      </v-container>
      <v-snackbar v-model="snackbar" color="grey-lighten-4" :timeout="5000">
        <p class="text-grey-darken-2">
          <b>¡Gracias por suscribirte!</b>
          <br>
          Nos alegra tenerte con nosotros. Recuerda que puedes desuscribirte de nuestro newsletter en
          cualquier momento siguiendo este enlace.
        </p>
        <template #actions>
          <v-btn color="var(--three)" variant="text" @click="snackbar = false"> Cerrar</v-btn>
        </template>
      </v-snackbar>
    </footer>
  </div>
</template>
<script setup lang="ts">
import {ref, watch, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import 'vue3-toastify/dist/index.css';

const cookiesAceptadas = ref(true);
const activeBtn = ref("nt-solutions");
const snackbar = ref(false);
const currentYear = new Date().getFullYear();
const accessToken = useCookie('access_token')
const refreshToken = useCookie('refresh_token');

const route = useRoute();
const hasAccess = computed(() => {
  return accessToken.value
});


onMounted(() => {
  setTimeout(() => {
    cookiesAceptadas.value = false;
  }, 5000);
  activeBtn.value = route.path;
  const selectElement = (element) => document.querySelector(element);
  selectElement(".mobile-menu").addEventListener("click", () => {
    selectElement("header").classList.toggle("active");
  });
});

watch(() => route.path, (newPath) => {
  activeBtn.value = newPath;
});

async function logout() {
  try {
    await $fetch(`${useRuntimeConfig().public.backendApi}/api/v1/auth/logout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${useCookie('access_token').value}`,
      },
      body: {
        "refresh_token": useCookie('refresh_token').value,
      },
      credentials: "include",
    });
    await deleteCookie()
    navigateTo('/')
  } catch (e) {
    console.error(e)
  }
}

async function deleteCookie() {
  accessToken.value = null;
  refreshToken.value = null;
}

const cerrarMenu = () => {
  const selectElement = (element) => document.querySelector(element);
  selectElement("header").classList.remove("active");
};

const updateCookieData = () => {
  cookiesAceptadas.value = true;
};

const abrirSnackBar = (success: boolean) => {
  if (success) {
    snackbar.value = true;
  }
};
</script>
<style lang="scss">
.footer {
  background-color: white;
  z-index: 200 !important;
  position: relative;
  box-shadow: 0px -35px 30px -35px black;
}

.boton {
  color: black;
}

header {
  .boton {
    padding: 1rem;
  }
}

.boton-sign-up {
  border-color: #A1887F !important;
  background-color: var(--gold) !important;
  color: white !important;
}

.boton-sign-in {
  color: white;
  background-color: var(--blue) !important;
}

.boton-log-out {
  max-height: 55px;
  color: white;
  background-color: var(--red) !important;
}

a {
  display: block;
  text-decoration: none;
}

/* ! Header */
header {
  box-shadow: 0px 4px 8px 4px rgba(128, 128, 128, 0.5);
  display: flex; /* Use flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  position: fixed;
  top: 0;
  z-index: 300;
  width: 100%;
  height: 4.4rem;
  background-color: white;
  backdrop-filter: blur(2rem);
  border-bottom-width: 1px;
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

.active .nav-link-logo {
  display: none;
}

.active .nav-list-larger .nav-item {
  opacity: 1;
}

.active .nav-list-larger {
  animation: fadeIn 1s ease-in;
  opacity: 1;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  visibility: visible;
}

/* ! CSS Styles for PHONE (Small Screen ) */
@media screen and (max-width: 1100px) {
  header {
    height: 4.8rem;
    transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
    height 0.3s cubic-bezier(0.32, 0.08, 0.24, 1);
    display: block; /* Use flexbox */
  }

  header .container {
    padding: 0;
  }

  .hero {
    height: 100rem;
    background-size: auto 100rem;
    background-position: bottom center;
    background-repeat: no-repeat;
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
    margin-top: -4px;
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
    background-color: var(--gold);
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

  .title-heading-nav {
    position: absolute;
    color: var(--blue);
    right: 2.2rem;
    top: 1.9rem;
    font-weight: bold;
  }

  @keyframes gradient-animation {
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

  .nav-list-larger .nav-item {
    width: 100%;
    justify-content: flex-start;
    border-bottom: 4px solid rgba(255, 255, 255, 0.1);
  }

  .nav-list-larger .nav-item:nth-child(9) {
    border-bottom: none;
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
