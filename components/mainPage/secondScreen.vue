<template>
  <div class="movingIconsSection">
    <div class="title gradient-text">
      Con la confianza de empresas muy conocidas
    </div>

    <div class="scroll-container">
      <div class="scroll-content">
        <img src="/css/pictures/carousel-secondScreen/./images/danone-grayscale.webp" alt="css">
        <img src="/css/pictures/carousel-secondScreen/./images/hubspot-monochrome.webp" alt="javascript">
        <img src="/css/pictures/carousel-secondScreen/./images/reddit-monochrome.webp" alt="react">
        <img src="/css/pictures/carousel-secondScreen/./images/salesforce-grayscale.webp" alt="angular">
        <img src="/css/pictures/carousel-secondScreen/./images/skyscanner-grayscale.webp" alt="figma">
        <img src="/css/pictures/carousel-secondScreen/./images/sony-music-monochrome.webp" alt="photoshop">
        <!-- Duplicate images for seamless loop -->
        <img src="/css/pictures/carousel-secondScreen/./images/danone-grayscale.webp" alt="css">
        <img src="/css/pictures/carousel-secondScreen/./images/hubspot-monochrome.webp" alt="javascript">
        <img src="/css/pictures/carousel-secondScreen/./images/reddit-monochrome.webp" alt="react">
        <img src="/css/pictures/carousel-secondScreen/./images/salesforce-grayscale.webp" alt="angular">
        <img src="/css/pictures/carousel-secondScreen/./images/skyscanner-grayscale.webp" alt="figma">
        <img src="/css/pictures/carousel-secondScreen/./images/sony-music-monochrome.webp" alt="photoshop">
      </div>
    </div>
  </div>

  <v-sheet>
    <v-card class="mx-sm-16 mx-4 px-2 mt-16" rounded="xl" variant="outlined">
      <h2 class="titulo text-h3 font-weight-black text-center mt-16">
        Mundo digital
      </h2>
      <div>
        <div class="d-flex justify-center">
          <v-img
max-width="500"
                 src="/css/animations/gif/secondScreen.gif"
                 alt="mundo digital"
                 fetchpriority="high"
          />
        </div>
        <p class="texto text-sm-h6 text-caption mb-8 mb-sm-4 mt-8 mx-4 mx-sm-16 text-grey-darken-1">
          En nuestra plataforma, te ofrecemos no solo servicios de diseño web vanguardistas, sino también soluciones
          tecnológicas personalizadas para potenciar el rendimiento de tu empresa. Desde la implementación de bases de
          datos hasta la creación de portales especializados y tiendas online, nuestro compromiso es impulsar tu éxito
          en línea. Con enfoque en el posicionamiento web y SEO, nos esforzamos por llevar tu presencia digital a nuevas
          alturas.
        </p>
      </div>
      <div class="d-flex justify-center mb-12">
        <nuxt-link to="/services">
          <v-btn
              color="var(--gold)"
              rounded="lg"
              class="mt-lg-16 mt-sm-8"
              :ripple="false"
              size="x-large"
          ><span style="color: white;">Descubrir</span></v-btn
          >
        </nuxt-link>
      </div>
    </v-card>
  </v-sheet>
  <!-- HTML -->

  <v-sheet height="auto" class="pb-16 mt-12 mx-sm-16 mx-4 mb-16" rounded="xl">
    <h3 class="text-sm-h4 py-sm-16 py-8 font-weight-black px-8 text-center subtitulo">
      PREGUNTAS FRECUENTES
    </h3>

    <v-expansion-panels>
      <v-expansion-panel v-for="(message, i) in messages" :key="i" ref="vExpansionPanel" hide-actions rounded="xl">
        <v-expansion-panel-title>
          <v-row align="center" class="spacer" no-gutters>
            <v-col class="text-no-wrap text-left" cols="5" sm="3">
              <v-chip v-if="message.tag" :color="'var(--three)'" class="ms-0 me-2" label small>
                {{ message.tag }}
              </v-chip>
              <strong>{{ message.title }}</strong>
            </v-col>
          </v-row>
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <h3 class="text-h6 text-center subtitulo">{{ message.excerpt }}</h3>
          <v-card-text class="text-center" v-text="message.text"/>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    buttonElevation: 4,
    model: null,
    show: false,
    items: [
      {
        nombre: "Google",
        img: "/css/pictures/carousel-2/google.png",
      },
      {
        nombre: "Pinterest",
        img: "/css/pictures/carousel-2/pinterest.png",
      },
      {
        nombre: "Facebook",
        img: "/css/pictures/carousel-2/facebook.png",
      },
      {
        nombre: "Netflix",
        img: "/css/pictures/carousel-2/netflix.png",
      },
      {
        nombre: "Spotify",
        img: "/css/pictures/carousel-2/spotify.png",
      },
      {
        nombre: "Youtube",
        img: "/css/pictures/carousel-2/youtube.png",
      },
      {
        nombre: "X",
        img: "/css/pictures/carousel-2/x.png",
      },
      {
        nombre: "Instagram",
        img: "/css/pictures/carousel-2/instagram.png",
      },
      {
        nombre: "Postgres",
        img: "/css/pictures/carousel-2/postgresql.png",
      },
    ],
    messages: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider",
        title: "Desarrollo Web Personalizado",
        color: "var(--three)",
        excerpt: "¿Cómo beneficia un desarrollo web personalizado a mi empresa?",
        text: "El desarrollo web personalizado ofrece soluciones adaptadas a las necesidades específicas, proporcionando flexibilidad y eficacia para un sitio web único.",
        tag: 1,
      },
      {
        icon: "mdi-account-multiple",
        name: "Servicios Especializados",
        excerpt: "¿Cuáles son las ventajas de elegir servicios especializados?",
        tag: 2,
        total: 3,
        title: "Servicios Especializados",
        text: "Optar por servicios especializados garantiza un enfoque centrado en las necesidades únicas de tu empresa, brindando soluciones más adaptadas que las plataformas estándar.",
      },
      {
        icon: "mdi-tag",
        name: "Promos",
        color: "var(--three)",
        tag: 3,
        total: 4,
        title: "SEO Personalizado",
        excerpt: "¿Ofrecen servicios de SEO personalizados para mejorar la visibilidad?",
        text: "Sí, la integración de estrategias de SEO personalizadas aumenta la visibilidad del sitio web, mejorando el ranking en los motores de búsqueda y atrayendo más tráfico orgánico.",
      },
      {
        icon: "mdi-tag",
        name: "Promos",
        tag: 4,
        total: 4,
        title: "Comercio Electrónico Adaptable",
        excerpt: "¿Pueden incorporar funcionalidades de comercio electrónico específicas?",
        text: "Absolutamente, el desarrollo personalizado permite la integración de soluciones de comercio electrónico adaptadas a las necesidades específicas de tu empresa.",
      },
      {
        color: "var(--three)",
        icon: "mdi-tag",
        name: "Promos",
        tag: 5,
        total: 4,
        title: "Promoción Digital Integral",
        excerpt: "¿Cómo se promocionan los sitios web empresariales desarrollados?",
        text: "Empleamos estrategias de marketing digital integral, incluyendo redes sociales, contenido atractivo y publicidad en línea, para aumentar la visibilidad de los servicios en línea.",
      },
    ],
    lorem:
        "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
  }),
  mounted() {
  },
  methods: {},
};
</script>

<style>
/* SCSS */
.scroll-container {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  max-width: 1080px;
}

.scroll-content {
  display: inline-block;
  animation: scroll-left 15s linear infinite;
}

.scroll-content img {
  display: inline-block;
  margin-right: 65px; /* Adjust spacing between images as needed */
  max-height: 48px;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.movingIconsSection {
  display: flex;
  margin-top: -2rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  background: white;
  flex-direction: column;

  .title {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  .gradient-text {
    background: linear-gradient(
        to right,
        rgb(7, 33, 70),
        rgb(33, 36, 77),
        rgb(53, 38, 83),
        rgb(72, 39, 85),
        rgb(142, 59, 64),
        rgb(149, 70, 56),
        rgb(152, 82, 48),
        rgb(151, 95, 41),
        rgb(148, 109, 36)
    );
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-animation 5s infinite;
  }
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

.scroll div span {
  display: inline-flex;
  margin: 10px;
  letter-spacing: 0.2em;
  background: var(--six);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.5s;
}

.titulo {
  color: var(--blue-dark) !important;
}

.subtitulo {
  color: var(--blue-dark);
}

.texto {
  color: var(--four) !important;
}

@media screen and (max-width: 1100px) {
  .titulo {
    font-size: 2rem !important;
    line-height: 2rem;
  }

  .texto {
    font-size: 0.9rem !important;
  }

  .movingIconsSection {
    margin-top: 2rem;
    .title {
      font-size: 1.5rem;
      text-align: center;
    }
  }
}

@media screen and (max-width: 668px) {
  .titulo {
    font-size: 1.8rem !important;
    color: var(--three);
  }

  .texto {
    font-size: 14px !important;
  }
}
</style>
