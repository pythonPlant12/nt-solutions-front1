<template>
  <div class="main-div">
    <img src="/css/pictures/about-us/about-us-1.jpg"
         alt="Imagen sobre nosotros"
         id="about-us-main-image"
         fetchpriority="high"
    >
    <div class="overlay-content">
      <h2 class="overlay-title main-title">Nos preocupamos por el bienestar empresarial, personal y laboral</h2>
    </div>
    <div class="overlay-button">
      <v-btn
          class="main-button"
          @click="moverAlSegundoElemento()"
          :ripple="false"
          stacked
          rounded="lg"
          color="white"
          @mouseenter="setElevation(24)"
          @mouseleave="setElevation(4)"

      >
        <span style="color: var(--gold);">Quienes somos</span>
      </v-btn>
    </div>

  </div>
  <v-container id="elementosSobreNosotros">
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <v-timeline side="end" class="timeline">
          <v-timeline-item size="small" dot-color="var(--gold)" v-for="card in aboutUsCards">
            <sobreNosotros-componenteCard
                :title="card.title"
                :text="card.text"
                :image="card.image"
                :animation="animation1"
            />
          </v-timeline-item>

        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.main-div {
  position: relative;
  transition: opacity 0.5s ease;
}

#about-us-main-image {
  position: relative;
  width: 100vw;
  height: 100vh;
  object-fit: cover; /* Cover the whole screen without distortion */
}

.overlay-content {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  min-width: 300px;
}

.overlay-button {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  min-width: 100px;
}

.overlay-title {
  color: white;
  font-size: 2rem;
  text-shadow: 4px 4px 20px rgb(0, 0, 0);
}

.main-title {
  animation: apareciendoFondoPantalla 2s forwards;
  opacity: 0;
}

.timeline {
  margin: 0 0 0 -20px;
}

@keyframes apareciendoFondoPantalla {
  to {
    opacity: 1;
  }
}
</style>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          color: 'info',
          icon: 'mdi-information',
        },
        {
          id: 2,
          color: 'error',
          icon: 'mdi-alert-circle',
        },
      ],
      aboutUsCards: [
        {
          title: "Líderes en la Revolución Digital Global",
          text:
              "Forjamos el camino hacia la revolución digital desde el epicentro de la innovación. Nuestra empresa lidera con tecnologías avanzadas que transforman la manera en que el mundo abraza la innovación.",
          image: "/css/pictures/sobreNosotros-card1.png",
        },
        {
          title: "Arquitectos de Soluciones Transformadoras",
          text:
              "En el corazón de la tecnología, diseñamos soluciones que trascienden fronteras. Guiados por una visión global, llevamos la excelencia a cada rincón del planeta a través de implementaciones de última generación.",
          image: "/css/pictures/sobreNosotros-card2.png",

        },
        {
          title: "Innovación como Pilar Fundamental",
          text:
              "Nuestra historia se construye con líneas de innovación que cruzan continentes. Desde el epicentro de la acción, generamos un impacto positivo en el mundo mediante tecnologías que eliminan las barreras geográficas.",
          image: "/css/pictures/sobreNosotros-card3.png",
        },
        {
          title: "Conectando Horizontes con Tecnología Avanzada",
          text:
              "Enlazamos horizontes, conectando continentes con tecnologías avanzadas. Somos la fuerza impulsora detrás de una nueva era digital, llevando la esencia de innovación y calidad a todos los rincones del globo.",
          image: "/css/pictures/sobreNosotros-card4.png",

        },
        {
          title: "Estrategas de la Transformación Digital",
          text:
              "Desde el epicentro de la estrategia digital, trazamos la ruta hacia el futuro. Nuestra presencia global es testimonio de una dedicación inflexible a la excelencia tecnológica, marcando el camino para la próxima era digital.",
          image: "/css/pictures/sobreNosotros-card5.png",
        },
        {
          title: "Embajadores de la Excelencia Tecnológica",
          text:
              "Como embajadores de la excelencia tecnológica, actuamos desde el epicentro de la innovación. Nuestra identidad se forja en el compromiso con la calidad, la innovación y la creación de un impacto significativo en la forma en que el mundo adopta la tecnología.",
          image: "",
        }
      ],
      animation1: "moviendose",
    };
  },
  methods: {
    setElevation(value) {
      this.buttonElevation = value;
    },
    moverAlSegundoElemento() {
      gsap.to(window, {
        duration: 0.7,
        scrollTo: {y: "#elementosSobreNosotros", offsetY: 80},
      });
    },

  },


};
</script>
