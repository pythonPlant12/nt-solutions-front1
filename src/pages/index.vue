<!-- ! TEMPLATE -->

<template>
  <div class="main-div" ref="mainDiv">
    <video ref="videoElement" autoplay muted loop playsinline id="backgroundVideo">
      <source src="/index-main.mp4" type="video/mp4">
      Your browser does not support the video tag. Try downloading the video <a href="/index-main.mp4">here</a>.
    </video>
    <div class="overlay-content">
      <h1 class="overlay-title">tu BUSINESS <br>
        <span class="overlay-subtitle">nuestra prioridad</span>
      </h1>
    </div>
    <div class="carousel-button">
      <v-btn
          @click="moverAlSegundoElemento()"
          :ripple="false"
          stacked
          rounded="lg"
          elevation="24"
          size="large"
          color="#936d24"
      >
        <span style="color: white;">Conocer más</span>
      </v-btn>
    </div>
  </div>
  <div id="segundoElementoHtml" class="mt-16" ref="segundoElemento">
    <mainPage-secondScreen/>
  </div>
</template>

<style scoped>
.main-div {
  position: relative;
  transition: opacity 0.5s ease;
}

#segundoElementoHtml {
  transition: opacity 0.5s ease;
}

.overlay-content {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  min-width: 300px;
}

.overlay-title {
  color: white; /* Choose a color that stands out against your video */
  font-size: 2.5rem;
  text-shadow: 5px 5px 15px rgba(0, 0, 0, 2);
}

.overlay-subtitle {
  font-weight: bold;
  color: #162659;
  font-size: 2rem;
  text-shadow: 4px 4px 20px rgba(255, 255, 255, 2);
}

#backgroundVideo {
  position: relative;
  width: 100vw;
  height: 100vh;
  object-fit: cover; /* Cover the whole screen without distortion */
}

.carousel-button {
  position: absolute;
  top: 70%;
  left: 50%;
  /* This helps me to always maintain the button on the center */
  transform: translate(-50%, -50%);
  z-index: 10;
  animation: botonMoviendose 2s infinite 3s;
}

/* Animations */

@keyframes tituloApareciendo {
  20% {
    opacity: 0;
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    opacity: 0.8;
  }
}

@keyframes botonMoviendose {
  0% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, -60%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}

@keyframes subtituloApareciendo {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.9;
  }
}
</style>

<!-- ! SCRIPT -->

<script>
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import the ScrollToPlugin
import { ref } from "vue";

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

export default {
  mounted() {
  },
  data() {
    return {};
  },
  setup() {
    const options = ref({
      loop: true,
      autoplay: true,
    });
    return {
      options,
    };
  },
  methods: {
    moverAlSegundoElemento() {
      // const segundoElemento = this.$refs.segundoElementoHtml;
      // Utilizando $refs accedemos al elemento html,
      // smoother.scrollTo(segundoElemento)
      gsap.to(window, {
        duration: 0.7,
        scrollTo: {y: "#segundoElementoHtml", offsetY: 80},
      });
    },
  },
};
</script>
