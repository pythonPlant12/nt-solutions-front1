import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  //...
  
  build: {
    transpile: ['vuetify', 'gsap', 'mdi-vue'],
  },
  plugins: [
    { src: '~/plugins/vue3-lottie.js', mode: 'client' }
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@hypernym/nuxt-gsap',
    '@nuxtjs/google-fonts'
    //...
  ],
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
