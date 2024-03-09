import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({

  })
  app.vueApp.use(vuetify)
})
