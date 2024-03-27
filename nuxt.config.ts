import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  ssr: true, // Enable server-side rendering
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
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
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