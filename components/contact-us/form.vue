<template>
  <form class="flex justify-center align-center" @submit="onSubmit">

    <v-stepper
        ref="stepper"
        v-model="step"
        :items="items"
        :hide-actions="true"
        prev-text="Volver"
        next-text="Seguir"
        class="rounded-xl"
        editable
    >
      <template #item.1>
        <h3 class="text-h6">Rellena tus datos personales</h3>

        <br>

        <v-sheet border>

          <v-text-field
              v-model="name.value.value"
              :counter="50"
              :error-messages="name.errorMessage.value"
              label="Nombre y Apellidos"
          />

          <v-text-field
              v-model="phone.value.value"
              :counter="20"
              :error-messages="phone.errorMessage.value"
              label="Número de teléfono"
          />

          <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              label="Correo electrónico"
          />

          <v-text-field
              v-model="texto.value.value"
              :counter="300"
              :error-messages="texto.errorMessage.value"
              label="Descripción de la Solicitud"
          />
          <v-select
              v-model="requestType.value.value"
              :items="tipos"
              :error-messages="requestType.errorMessage.value"
              label="Tipo"
          />

          <v-select
              v-model="companySize.value.value"
              :items="companySizeItems"
              :error-messages="companySize.errorMessage.value"
              label="Tamaño de empresa"
          />

          <v-btn text="Limpiar formulario" class="mb-6 mx-4 mt-2" @click="handleReset"/>
          <v-container class="d-flex justify-center justify-center mb-2">
            <!--           For submitting form add to v-btn  @click="sendTestRequest()"-->
            <v-btn text="Enviar" style="background-color: var(--blue); color: white;" type="submit" :loading="loadingFormButton"/>
          </v-container>
        </v-sheet>
      </template>
    </v-stepper>
  </form>
</template>
<script setup>
import {ref} from 'vue';
import {useField, useForm} from 'vee-validate';

const emit = defineEmits(['formSubmitted'])

const ERROR_MESSAGES = {
  NAME: 'Nombre tiene que tenér mínimo 2 carácteres.',
  PHONE: 'Teléfono tiene que tenér mínimo 9 digitos.',
  EMAIL: 'Correo electrónico tiene que tener formato válido, por ejemplo: mail@gmail.com',
  SELECT: 'Selecciona una de siguientes opciones.',
  CHECKBOX: 'Selecciona una de siguientes opciones.',
  TEXT: 'Descripción debe tener máximo 300 carácteres',
  COMPANY_SIZE: 'Selecciona el tamaño de tu empresa.'
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const {handleSubmit, handleReset} = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;
      return ERROR_MESSAGES.NAME;
    },
    phone(value) {
      if (value?.length > 8 && /[0-9-]+/.test(value)) return true;
      return ERROR_MESSAGES.PHONE;
    },
    email(value) {
      if (EMAIL_REGEX.test(value)) return true;
      return ERROR_MESSAGES.EMAIL;
    },
    requestType(value) {
      if (value) return true;
      return ERROR_MESSAGES.SELECT;
    },
    companySize(value) {
      if (value) return true;
      return ERROR_MESSAGES.COMPANY_SIZE;
    },
    texto(value) {
      if (value?.length < 300) return true;
      return ERROR_MESSAGES.TEXT;
    },
  },
});
const stepper = ref(null);
const loadingFormButton = ref(false);
const step = ref(1);
const items = ref(['Contacto']);

const name = useField('name');
const phone = useField('phone');
const email = useField('email');
const requestType = useField('requestType');
const companySize = useField('companySize');
const texto = useField('texto');
const checkbox = useField('checkbox');

const tipos = ref(['Presupuesto', 'Información']);
const companySizeItems = ref(['Autónomo', '1 - 5 empleados', '5-9 empleados', '10-49 empleados', '50-99 empleados', '100-499 empleados', '500+ empleados']);

function emitSubmittedForm(sent) {
  emit('formSubmitted', sent);
}

const onSubmit = handleSubmit(async values => {
  loadingFormButton.value = true;
  try {
    const response = await fetch(useRuntimeConfig().public.backendApi + '/api/v1/send-contact-form/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(values)
    });
    if (!response.ok) {
      throw new Error(`HTTP error!:${response.status}`);
    }
    loadingFormButton.value = false;
    emitSubmittedForm(true);
  } catch {
    loadingFormButton.value = false;
    emitSubmittedForm(false);
  }
});
</script>

<style lang="scss">
.formulario {
  width: 90%;
}
</style>