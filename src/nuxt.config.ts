import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  //...
  app: {
    head: {
      title: 'NT Solutions',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
      ]
    },
  },
  build: {
    transpile: ['vuetify', 'gsap', 'mdi-vue'],
  },
  plugins: [
    {src: '~/plugins/vue3-lottie.js', mode: 'client'}
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({autoImport: true}))
      })
    },
    '@hypernym/nuxt-gsap',
    '@nuxtjs/google-fonts',
    // 'nuxt-vue3-google-signin'
    //... here we will add another modules
  ],
  // googleSignIn: {
  //   clientId: process.env.GOOGLE_CLIENT_ID_FRONT,
  // },
  css: [
    '~/assets/css/global.css', // Include the global CSS file
  ],
  googleFonts: {
    families: {
      // Roboto: true,
      // "Source Sans 3": true
    }
  }

})
