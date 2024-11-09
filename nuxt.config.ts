import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  //...
  runtimeConfig: {
    public: {
      backendApi: process.env.NUXT_PUBLIC_BACKEND_SERVICE
    }
  },
  app: {
    head: {
      title: 'NT Solutions',
      ogTitle: 'NT Solutions',
      description: 'Soluciones informáticas para tu empresa. Desarrollo de software, diseño web, marketing digital y más. Creamos tu presencia en el mundo digital.',
      ogDescription: 'Soluciones informáticas para tu empresa. Desarrollo de software, diseño web, marketing digital y más. Creamos tu presencia en el mundo digital.',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
        {
          rel: 'stylesheet',
          href: 'htps://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap',
        }

      ],
      htmlAttrs: {
        lang: 'es'
      },
      charset: 'utf-8',
      script: [{
        src: 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js',
      }]
    },
  },
  build: {
    transpile: ['vuetify', 'gsap', 'mdi-vue'],
  },
  plugins: [
    {src: '~/plugins/vue3-lottie.js', mode: 'client'},
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({autoImport: true}))
      })
    },
    '@pinia/nuxt',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/google-fonts',
    'nuxt-viewport',
    //... here we will add another modules
  ],
  googleSignIn: {
    clientId: '863302209216-rai2sit9kda2v7dlmsgcgepkijpl1kt2.apps.googleusercontent.com',
  },
  css: [
    '~/assets/css/global.css', // Include the global CSS file
  ],
  compatibilityDate: "2024-08-09",
  googleFonts: {
    families: {
      Raleway: {
        // weights
        wght: [100, 400],
        // italic
        ital: [100]
      },
    }
  }

})
