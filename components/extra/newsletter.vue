<template>
  <form ref="formularioNewsletterRef" @submit="submit">
    <v-row>
      <v-col cols="10">
        <v-text-field
            v-model="email.value.value"
            required
            label="Email address"
            placeholder="johndoe@gmail.com"
            variant="outlined"
            :error-messages="email.errorMessage.value"
        />
      </v-col>
      <v-col cols="2">
        <v-btn :loading="loading" size="x-large" variant="outlined" @click="submit">
          <v-icon icon="mdi-email-check-outline"/>
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {useField, useForm} from "vee-validate";

const emit = defineEmits(['newsletterToast'])
const loading = ref(false)
const {handleSubmit} = useForm({
  validationSchema: {
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
      return "Correo electrónico tiene que tener formato válido, por ejemplo: mail@gmail.com";
    }
  }
})

const email = useField("email");
const submit = handleSubmit(async (values) => {
  loading.value = true;
  try {
    await $fetch(`${useRuntimeConfig().public.backendApi}/api/v1/newsletter/`, {
      method: "POST",
      body: {email: values.email}
    })
    sendEventToParent(true);
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false;
  }
});

function sendEventToParent(success: boolean): void {
  emit('newsletterToast', success)
}
</script>
<style scoped lang="scss">
</style>
