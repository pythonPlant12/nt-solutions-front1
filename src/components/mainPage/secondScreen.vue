<template>

  <v-sheet>
    <v-card class="mx-sm-16 mx-4 px-2 mt-16" rounded="xl" elevation="24">
      <h2 class="titulo text-h3 font-weight-black text-center mt-16">
        Mundo digital a tu alcance
      </h2>
      <div>
        <div class="d-flex justify-center">
          <v-img max-width="500" src="/css/animations/gif/secondScreen.gif" alt=""></v-img>
        </div>
        <p class="texto text-sm-h6 text-caption mb-8 mb-sm-4 mt-8 mx-4 mx-sm-16 text-grey-darken-1">
          Si estás aqui es porque valoras la excelencia en la presencia digital de tu negocio. En
          nuestra plataforma, te ofrecemos no solo servicios de diseño web vanguardistas, sino
          también soluciones tecnológicas personalizadas para potenciar el rendimiento de tu
          empresa. Desde la implementación de bases de datos hasta la creación de portales
          especializados, nuestro compromiso es impulsar tu éxito en línea. Con enfoque en el
          posicionamiento web y SEO, nos esforzamos por llevar tu presencia digital a nuevas
          alturas.
        </p>
      </div>
      <div class="d-flex justify-center mb-12">
        <nuxt-link to="/servicios">
          <v-btn
              color="var(--gold)"
              rounded="lg"
              class="mt-lg-16 mt-sm-8"
              :ripple="false"
              size="x-large"
              :elevation="buttonElevation"
              @mouseenter="setElevation(24)"
              @mouseleave="setElevation(4)"
          ><span style="color: white;">Descubrir</span></v-btn
          >
        </nuxt-link>
      </div>
    </v-card>
  </v-sheet>
  <div class="prueba1">
    <div class="scroll" style="--time:25s">
      <div>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>ReactJS</span>
        <span>Figma</span>
        <span>Photoshop</span>
        <span>Premiere Pro</span>
        <span>Figma</span>
        <span>Angular</span>
        <span>Node JS</span>
      </div>
      <div>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>ReactJS</span>
        <span>Figma</span>
        <span>Photoshop</span>
        <span>Premiere Pro</span>
        <span>Figma</span>
        <span>Angular</span>
        <span>Node JS</span>
      </div>
    </div>
    <div class="scroll" style="--time:50s">
      <div>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>ReactJS</span>
        <span>Figma</span>
        <span>Photoshop</span>
        <span>Premiere Pro</span>
        <span>Figma</span>
        <span>Angular</span>
        <span>Node JS</span>
      </div>
      <div>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>ReactJS</span>
        <span>Figma</span>
        <span>Photoshop</span>
        <span>Premiere Pro</span>
        <span>Figma</span>
        <span>Angular</span>
        <span>Node JS</span>
      </div>
    </div>

    <div class="scroll imgBox" style="--time:25s">
      <div>
        <img src="/css/pictures/carousel-secondScreen/./images/css.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/js.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/React.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/angular.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/figma.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/photoshop.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/mui.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/tailwind.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/premierePro.png" alt="">
      </div>
      <div>
        <img src="/css/pictures/carousel-secondScreen/./images/css.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/js.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/React.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/angular.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/figma.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/photoshop.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/mui.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/tailwind.png" alt="">
        <img src="/css/pictures/carousel-secondScreen/./images/premierePro.png" alt="">
      </div>
    </div>
  </div>

  <v-sheet elevation="24" height="auto" class="pb-16 mt-12 mx-sm-16 mx-4 mb-16" rounded="xl">
    <h1 class="text-sm-h4 py-sm-16 py-8 font-weight-black px-8 text-center subtitulo">
      PREGUNTAS FRECUENTES
    </h1>

    <v-expansion-panels class="pa-sm-4 px-0">
      <v-expansion-panel v-for="(message, i) in messages" :key="i" hide-actions rounded="xl" ref="vExpansionPanel">
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
          <v-card-text v-text="message.text" class="text-center"></v-card-text>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-sheet>
</template>

<style>


.prueba1 {
  display: flex;
  margin-top: 2rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  background: white;
  flex-direction: column;
}

.scroll {
  position: relative;
  display: flex;
  max-width: 95%;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent)
}

.scroll div {
  white-space: nowrap;
  animation: scroll var(--time) linear infinite;
  animation-delay: calc(var(--time) * -1);
}

.scroll div:nth-child(2) {
  animation: scroll2 var(--time) linear infinite;
  animation-delay: calc(var(--time) / -2);
}


@keyframes scroll {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes scroll2 {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-200%);
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

.scroll div span:hover {
  background: #3fd2f9;
  cursor: pointer;
}

.imgBox .scroll {
  display: flex;
  align-items: center;
  justify-content: center;
}

.imgBox img {
  max-width: 100px;
  scale: 0.8;
}

.tecnologias-div {
  border: 0px !important;
  border-color: white !important;
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
}

@media screen and (max-width: 668) {
  .titulo {
    font-size: 1rem !important;
    color: var(--three);
  }

  .texto {
    font-size: 12px !important;
  }
}
</style>

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
  methods: {
    setElevation(value) {
      this.buttonElevation = value;
    },
  },
};
</script>
