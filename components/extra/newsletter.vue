<template>
  <form ref="formularioNewsletterRef" @submit="submit">
    <v-row>
      <v-col cols="10">
        <v-text-field
        required
        label="Email address"
        placeholder="johndoe@gmail.com"
        variant="outlined"
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
      ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn :loading="loading" @click="submit" size="x-large" variant="outlined"><v-icon icon="mdi-email-check-outline"></v-icon></v-btn>
      </v-col>
    </v-row>
  </form>
</template>
<style style="scss">
.newsletter {
  .v-messages__message{
    color: var(--three);
  }
  .v-field--error .v-field__outline .newsletter {
    color: var(--three);
  }
}
</style>
<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const emit = defineEmits(['newsletterToast'])
const loading = ref(false)
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
			return "Correo electrónico tiene que tener formato válido, por ejemplo: mail@gmail.com";
    }
  }
})

const email = useField("email");
const submit = handleSubmit((values) => {
  loading.value = true;
			setTimeout(() => {
				loading.value = false;
        sendEventToParent();
			}, 1000);
});

function sendEventToParent() {
  emit('newsletterToast', true)
};
</script>
