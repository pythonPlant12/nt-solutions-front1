<template>
  <div>
    <div class="pruebaServicios1">
      <div class="box">
        <div class="wave -one"/>
        <div class="wave -two"/>
      </div>
    </div>
    <div class="primera-pantalla elementos-primera-pantalla">
      <v-container class="mt-10 mt-xxl-16">
        <v-row class="mt-xs-12 d-flex justify-center">
          <div class="mb-2 mb-lg-6 px-6 mt-xxl-16 rounded-xl mx-2">
            <h2
                class="px-2 py-4 text-xl-h2 text-h4 text-md-h2 text-center"
                style="color: var(--gold)"
            >
              Excelencia Digital,<br>
              Adaptada para Ti
            </h2>
          </div>
        </v-row>
        <v-row class="mb-4 v-flex align-center">
          <v-col cols="12" lg="5">
            <v-card
                class="mb-16 px-6 rounded-xl elementos-primera-pantalla bg-transparent"
                elevation="24"
            >
              <p
                  class="py-4 text-xl-h5 py-xl-16 px-xl-16 text-md-h6 typed-text"
              >
                {{ typedText }}
              </p>
            </v-card>
          </v-col>
          <v-col cols="2"/>
          <v-col
              v-if="$vuetify.display.lgAndUp"
              cols="5"
              class="mb-16 px-6 rotating-image"
          >
            <v-img
                src="/css/pictures/logo.png"
                cover
                class="elementos-primera-pantalla"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="segunda-pantalla mb-16">
      <v-container>
        <v-row>
          <v-col cols="12" lg="5" class="mb-16 servicesCard hidden left">
            <servicios-servicesCard
                :titulo-card="tituloCard1"
                :sub-titulo-card="subTituloCard1"
                :texto-card="textoCard1"
                :image="imageCard1"
            />
          </v-col>
          <v-spacer/>
          <v-col cols="12" lg="5" class="mb-16 servicesCard hidden right">
            <servicios-servicesCard
                :titulo-card="tituloCard2"
                :sub-titulo-card="subTituloCard2"
                :texto-card="textoCard2"
                :image="imageCard2"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="5" class="mt-16 mb-16 servicesCard hidden left">
            <servicios-servicesCard
                :titulo-card="tituloCard3"
                :sub-titulo-card="subTituloCard3"
                :texto-card="textoCard3"
                :image="imageCard3"
            />
          </v-col>
          <v-spacer/>
          <v-col cols="12" lg="5" class="mt-16 mb-16 servicesCard hidden right">
            <servicios-servicesCard
                :titulo-card="tituloCard4"
                :sub-titulo-card="subTituloCard4"
                :texto-card="textoCard4"
                :image="imageCard4"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="5" class="mt-16 mb-16 servicesCard hidden left">
            <servicios-servicesCard
                :titulo-card="tituloCard5"
                :sub-titulo-card="subTituloCard5"
                :texto-card="textoCard5"
                :image="imageCard5"
            />
          </v-col>
          <v-spacer/>
          <v-col cols="12" lg="5" class="mt-16 mb-16 servicesCard hidden right">
            <servicios-servicesCard
                :titulo-card="tituloCard6"
                :sub-titulo-card="subTituloCard6"
                :texto-card="textoCard6"
                :image="imageCard6"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      observer: null,
      show: false,
      typedText: "",
      fullText:
          "Descubre una suite de servicios tecnológicos en NT Solutions diseñados para un impacto máximo. Desde el desarrollo de sitios web de vanguardia hasta integraciones de bases de datos sin fisuras y diseño web creativo, adaptamos soluciones para elevar tu marca. Nuestro marketing digital estratégico, aplicaciones web preparadas para el futuro y soluciones de comercio electrónico personalizadas redefinen el éxito en el panorama digital. Experimenta la innovación con NT Solutions, donde tu visión se encuentra con la excelencia digital.",
      tituloCard1: "Desarrollo de Sitios Web a Medida",
      subTituloCard1: "Transformamos Ideas en Realidad Digital",
      textoCard1:
          "Eleva tu presencia en línea con nuestros servicios personalizados de desarrollo de sitios web. Nuestro equipo de desarrolladores expertos crea sitios web receptivos y visualmente impactantes adaptados a las necesidades únicas de tu negocio. Desde el concepto hasta la implementación, convertimos tu visión en una experiencia en línea poderosa.",
      imageCard1: "/css/pictures/servicios-web.png",

      tituloCard2: "Soluciones Creativas de Diseño Web",
      subTituloCard2: "Diseños Atractivos para un Mundo Digital",
      textoCard2:
          "Sumerge a tu audiencia en experiencias en línea visualmente cautivadoras. Nuestros diseñadores expertos fusionan la estética con la funcionalidad, creando sitios web cautivadores que dejan una impresión duradera. Eleva tu marca con nuestras soluciones personalizadas de diseño web que reflejan tu identidad y resuenan con tu audiencia objetivo.",
      imageCard2: "/css/animations/gif/services_webDesign.gif",

      tituloCard3: "Arquitecturas de Aplicaciones Web",
      subTituloCard3: "Construimos Arquitecturas Escalables para la Innovación",
      textoCard3:
          "Potencia tu negocio con aplicaciones web de última generación. Nuestros arquitectos diseñan marcos escalables y resistentes que se adaptan a tus necesidades cambiantes. Desde la conceptualización hasta la implementación, diseñamos aplicaciones web que impulsan la innovación y llevan tu negocio hacia adelante.",
      imageCard3: "/css/pictures/servicios-arquitecturasWeb.png",

      tituloCard4: "Soluciones de Comercio Electrónico a Medida",
      subTituloCard4: "Desbloqueamos el Éxito en Ventas Minoristas en Línea",
      textoCard4:
          "Revoluciona tu tienda en línea con nuestras soluciones de comercio electrónico personalizadas. Integramos interfaces amigables para el usuario con sistemas backend robustos, ofreciendo una experiencia de compra segura e intuitiva. Maximiza tu potencial de ventas en línea con nuestra experiencia en comercio electrónico personalizado.",
      imageCard4: "/css/pictures/servicios-e-commerce.png",

      tituloCard5: "Integraciones de Bases de Datos",
      subTituloCard5: "Almacena datos de manera segura",
      textoCard5:
          "Desbloquea el poder de la gestión de datos sin fisuras. Nuestros servicios de integración de bases de datos garantizan que tus sistemas se comuniquen de manera eficiente, mejorando la eficiencia operativa. Desde el diseño hasta la implementación, optimizamos tu arquitectura de datos, proporcionando una base para soluciones comerciales escalables y robustas.",
      imageCard5: "/css/pictures/servicios-database.png",

      tituloCard6: "Marketing Digital Estratégico",
      subTituloCard6: "Amplifica tu Presencia en Línea",
      textoCard6:
          "Navega el panorama digital con nuestras completas soluciones de marketing digital. Desde SEO y gestión de redes sociales hasta campañas dirigidas, amplificamos la visibilidad de tu marca y fomentamos la participación significativa. Mantente a la vanguardia en la era digital con nuestras estrategias de marketing basadas en datos.",
      imageCard6: "/css/pictures/servicios-marketing.png",
    };
  },

  computed: {
    columnCount() {
      // Adjust the breakpoint as needed
      return this.$vuetify.display.smAndUp ? "6" : "12";
    },
  },
  mounted() {
    this.setupObserver();
    this.typeText();
  },
  methods: {
    typeText() {
      let index = 0;
      const intervalId = setInterval(() => {
        this.typedText = this.fullText.slice(0, index);
        index++;
        if (index > this.fullText.length) {
          clearInterval(intervalId);
        }
      }, 15);
    },

    setupObserver() {
      // Observer for the services cards appearing
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });

      const hiddenElements = document.querySelectorAll(".servicesCard");
      hiddenElements.forEach((element) => this.observer.observe(element));
    },
  },
};
</script>

<style lang="scss">
.pruebaServicios1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(186, 185, 185, 0.6);
}

.box {
  position: fixed;
  top: 0;
  transform: rotate(80deg);
  left: 0;
}

.wave {
  position: absolute;
  opacity: 0.8;
  width: 1500px;
  height: 1300px;
  margin-left: -150px;
  margin-top: -250px;
  border-radius: 43%;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}

.wave.-one {
  animation: rotate 10000ms infinite linear;
  opacity: 5%;
  background: white;
}

.wave.-two {
  animation: rotate 6000ms infinite linear;
  opacity: 10%;
  background: white;
}

.segunda-pantalla {
  min-height: 100dvh;
}

.toda-pagina {
  opacity: 0;
  animation: apareciendo 2s forwards;
}

.elementos-primera-pantalla {
  opacity: 0;
  animation: apareciendo 5s forwards;
}

.rotating-image {
  animation: rotate 10s linear infinite; /* Adjust the duration as needed */
}

.typed-text {
  color: var(--blue-dark);
}

/* Optional: add styles for better readability or customization */
.typed-text::after {
  content: "|"; /* Cursor blink */
  animation: blink 0.7s infinite alternate;
}

.services-database {
  animation: services-database 5s infinite;
}

@keyframes apareciendo {
  to {
    opacity: 1;
  }
}

@keyframes blink {
  to {
    opacity: 0;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes services-database {
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

/*
--- ANIMATIONS FOR APPEARING AND DISSAPEARING ELEMENTS
*/
.hidden {
  opacity: 0;
  transition: all 1s;
}

.left {
  transform: translateX(-4rem);
}

.right {
  transform: translateX(4rem);
}

.show {
  opacity: 1 !important;
  transform: translateX(0) !important;
}
</style>
