<template>
  <v-container class="mt-10 text-center mt-xxl-16 primer-slide-container">
    <v-row class="d-flex justify-center">
      <v-card class="px-6 mt-xxl-16 rounded-xl mx-2" elevation="0">
        <h2 class="px-2 py-4 text-xl-h2 text-h4 text-md-h2" style="color: var(--blue-dark)">
          Ponte en contacto con nosotros
        </h2>
      </v-card>
    </v-row>
  </v-container>
  <v-container class="mb-10">
    <div>
      <v-row class="d-flex justify-center">
        <contact-us-form class="formulario" @form-submitted="handleSubmittedForm"/>
      </v-row>
      <v-dialog
          v-model="dialog"
          width="auto"
      >
        <v-card
            class="mx-auto"
            prepend-icon="mdi-card-account-mail"
            subtitle="Gracias por ponerse en contacto"
            max-width="400"
        >
          <template #title>
            <span class="font-weight-black" style="color: var(--blue)">Solicitud enviada</span>
          </template>

          <v-card-text class="pt-4">
            Proximamente contactaremos contigo para darle seguimiento a tu solicitud.
          </v-card-text>

          <template #actions>
            <v-btn
                style="color: var(--blue)"
                class="ms-auto"
                variant="tonal"
                text="Ok"
                @click="dialog = false"
            />
          </template>
        </v-card>
      </v-dialog>
    </div>
  </v-container>

</template>
<script setup>
const dialog = ref(false)

function handleSubmittedForm() {
  // This also can receive one param
  dialog.value = true;
}
</script>
<style>
.primer-slide-container {
  opacity: 0;
  animation: apareciendo 2s forwards;
}

.formulario {
  opacity: 0;
  animation: apareciendo 1.5s forwards 1s;
}

@keyframes apareciendo {
  to {
    opacity: 1;
  }
}
</style>

