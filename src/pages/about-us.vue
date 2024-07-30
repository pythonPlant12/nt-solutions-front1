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
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="12" lg="10">
        <v-timeline side="end">
          <v-timeline-item size="small">
            <sobreNosotros-componenteCard
                :title="title1"
                :text="text1"
                :image="image1"
                :animation="animation1"
            />
          </v-timeline-item>

          <v-timeline-item size="small">
            <sobreNosotros-componenteCard
                :title="title2"
                :text="text2"
                :image="image2"
                :animation="animation1"
            />
          </v-timeline-item>
          <v-timeline-item size="small">
            <sobreNosotros-componenteCard
                :title="title1"
                :text="text1"
                :image="image1"
                :animation="animation1"
            />
          </v-timeline-item>
          <v-timeline-item size="small">
            <sobreNosotros-componenteCard
                :title="title3"
                :text="text3"
                :image="image3"
                :animation="animation1"
            />
          </v-timeline-item>
          <v-timeline-item size="small">
            <sobreNosotros-componenteCard
                :title="title4"
                :text="text4"
                :image="image4"
                :animation="animation1"
            />
          </v-timeline-item>
          <v-timeline-item size="small">
            <sobreNosotros-componenteCard
                :title="title5"
                :text="text5"
                :image="image5"
                :animation="animation1"
            />
          </v-timeline-item>
          <v-timeline-item size="small">
            <sobreNosotros-componenteCard
                :title="title5"
                :text="text5"
                :image="image5"
                :animation="animation1"
            />
          </v-timeline-item>
          <v-timeline-item size="small">
            <sobreNosotros-componenteCard
                :title="title6"
                :text="text6"
                :image="image6"
                :animation="animation1"
            />
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
  <div id="elementosSobreNosotros">


  </div>
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
  max-width: 800px;
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
      title1: "Líderes en la Revolución Digital Global",
      text1:
          "Forjamos el camino hacia la revolución digital desde el epicentro de la innovación. Nuestra empresa lidera con tecnologías avanzadas que transforman la manera en que el mundo abraza la innovación.",
      image1: "/css/pictures/sobreNosotros-card1.png",
      animation1: "moviendose",

      title2: "Arquitectos de Soluciones Transformadoras",
      text2:
          "En el corazón de la tecnología, diseñamos soluciones que trascienden fronteras. Guiados por una visión global, llevamos la excelencia a cada rincón del planeta a través de implementaciones de última generación.",
      image2: "/css/pictures/sobreNosotros-card2.png",

      title3: "Innovación como Pilar Fundamental",
      text3:
          "Nuestra historia se construye con líneas de innovación que cruzan continentes. Desde el epicentro de la acción, generamos un impacto positivo en el mundo mediante tecnologías que eliminan las barreras geográficas.",
      image3: "/css/pictures/sobreNosotros-card3.png",

      title4: "Conectando Horizontes con Tecnología Avanzada",
      text4:
          "Enlazamos horizontes, conectando continentes con tecnologías avanzadas. Somos la fuerza impulsora detrás de una nueva era digital, llevando la esencia de innovación y calidad a todos los rincones del globo.",
      image4: "/css/pictures/sobreNosotros-card4.png",

      title5: "Estrategas de la Transformación Digital",
      text5:
          "Desde el epicentro de la estrategia digital, trazamos la ruta hacia el futuro. Nuestra presencia global es testimonio de una dedicación inflexible a la excelencia tecnológica, marcando el camino para la próxima era digital.",
      image5: "/css/pictures/sobreNosotros-card5.png",

      title6: "Embajadores de la Excelencia Tecnológica",
      text6:
          "Como embajadores de la excelencia tecnológica, actuamos desde el epicentro de la innovación. Nuestra identidad se forja en el compromiso con la calidad, la innovación y la creación de un impacto significativo en la forma en que el mundo adopta la tecnología.",
      image6: "",
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
