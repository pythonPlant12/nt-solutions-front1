<template>
  <form @submit="onSubmit" class="flex justify-center align-center">

    <v-stepper
        v-model="step"
        :items="items"
        show-actions
        prev-text="Volver"
        next-text="Seguir"
        class="rounded-xl"
        editable
    >
      <template v-slot:item.1>
        <h3 class="text-h6">Rellena tus datos personales</h3>

        <br/>

        <v-sheet border>

          <v-text-field
              v-model="name.value.value"
              :counter="50"
              :error-messages="name.errorMessage.value"
              label="Nombre y Apellidos"
          ></v-text-field>

          <v-text-field
              v-model="phone.value.value"
              :counter="20"
              :error-messages="phone.errorMessage.value"
              label="Número de teléfono"
          ></v-text-field>

          <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              label="Correo electrónico"
          ></v-text-field>

          <v-text-field
              v-model="texto.value.value"
              :counter="300"
              :error-messages="texto.errorMessage.value"
              label="Descripción de la Solicitud"
          ></v-text-field>
          <v-select
              v-model="requestType.value.value"
              :items="tipos"
              :error-messages="requestType.errorMessage.value"
              label="Tipo"
          ></v-select>

          <v-select
              v-model="companySize.value.value"
              :items="companySizeItems"
              :error-messages="companySize.errorMessage.value"
              label="Tamaño de empresa"
          ></v-select>

          <v-btn @click="handleReset" class="mb-6 mx-4"> Limpiar formulario</v-btn>
          <v-container class="d-flex justify-center justify-center mb-2">
            <!--           For submitting form add to v-btn  @click="sendTestRequest()"-->
            <v-btn style="background-color: var(--blue); color: white;" type="submit" :loading="loadingFormButton">
              Enviar
            </v-btn>
          </v-container>

        </v-sheet>
      </template>

<!--      <template v-slot:item.2>-->
<!--        <h3 class="text-h6">Servicio solicitado</h3>-->

<!--        <br/>-->
<!--        <v-card class="mx-auto" max-width="1440">-->
<!--          <v-divider></v-divider>-->

<!--          <v-list lines="three" select-strategy="classic" class="mb-8">-->
<!--            <v-list-subheader>General</v-list-subheader>-->

<!--            <v-list-item value="web">-->
<!--              <template v-slot:prepend="{ isActive }">-->
<!--                <v-list-item-action start>-->
<!--                  <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>-->
<!--                </v-list-item-action>-->
<!--              </template>-->

<!--              <v-list-item-title>Desarrollo Web a Medida</v-list-item-title>-->

<!--              <v-list-item-subtitle> Transformamos Ideas en Realidad Digital</v-list-item-subtitle>-->
<!--            </v-list-item>-->

<!--            <v-list-item value="webDesign">-->
<!--              <template v-slot:prepend="{ isActive }">-->
<!--                <v-list-item-action start>-->
<!--                  <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>-->
<!--                </v-list-item-action>-->
<!--              </template>-->

<!--              <v-list-item-title>Soluciones de Diseño Web</v-list-item-title>-->

<!--              <v-list-item-subtitle> Diseños Atractivos para un Mundo Digital</v-list-item-subtitle>-->
<!--            </v-list-item>-->

<!--            <v-list-item value="arquitecturasWeb">-->
<!--              <template v-slot:prepend="{ isActive }">-->
<!--                <v-list-item-action start>-->
<!--                  <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>-->
<!--                </v-list-item-action>-->
<!--              </template>-->

<!--              <v-list-item-title>Arquitecturas de Web Apps</v-list-item-title>-->

<!--              <v-list-item-subtitle>-->
<!--                Construimos Arquitecturas Escalables para la Innovación-->
<!--              </v-list-item-subtitle>-->
<!--            </v-list-item>-->
<!--            <v-list-item value="e-commerce">-->
<!--              <template v-slot:prepend="{ isActive }">-->
<!--                <v-list-item-action start>-->
<!--                  <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>-->
<!--                </v-list-item-action>-->
<!--              </template>-->

<!--              <v-list-item-title>Comercio Electrónico a Medida</v-list-item-title>-->

<!--              <v-list-item-subtitle>-->
<!--                Desbloqueamos el Éxito en Ventas Minoristas en Línea-->
<!--              </v-list-item-subtitle>-->
<!--            </v-list-item>-->
<!--            <v-list-item value="database">-->
<!--              <template v-slot:prepend="{ isActive }">-->
<!--                <v-list-item-action start>-->
<!--                  <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>-->
<!--                </v-list-item-action>-->
<!--              </template>-->

<!--              <v-list-item-title>Bases de Datos</v-list-item-title>-->

<!--              <v-list-item-subtitle> Almacena datos de manera segura</v-list-item-subtitle>-->
<!--            </v-list-item>-->
<!--            <v-list-item value="marketing">-->
<!--              <template v-slot:prepend="{ isActive }">-->
<!--                <v-list-item-action start>-->
<!--                  <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>-->
<!--                </v-list-item-action>-->
<!--              </template>-->

<!--              <v-list-item-title>Marketing Digital Estratégico</v-list-item-title>-->

<!--              <v-list-item-subtitle> Amplifica tu Presencia en Línea</v-list-item-subtitle>-->
<!--            </v-list-item>-->
<!--          </v-list>-->
<!--          <v-container class="d-flex justify-center justify-center mb-2">-->
<!--            &lt;!&ndash;           For submitting form add to v-btn  @click="sendTestRequest()"&ndash;&gt;-->
<!--            <v-btn style="background-color: var(&#45;&#45;blue); color: white;" type="submit" :loading="loadingFormButton">-->
<!--              Enviar-->
<!--            </v-btn>-->
<!--          </v-container>-->
<!--        </v-card>-->
<!--      </template>-->
    </v-stepper>
  </form>
</template>
<style lang="scss">
.formulario {
  width: 90%;
}
</style>

<script setup>
import {ref} from 'vue';
import {useField, useForm} from 'vee-validate';

const emit = defineEmits(['formSubmitted'])

const base_url = 'https://nt-solutions-backend.onrender.com';
const base_url1 = 'http://nt-solutions-backend:10000';
const local_url = 'http://127.0.0.1:8000';

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
    const response = await fetch(base_url + '/send-contact-form/', {
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
    const data = await response.json();
    loadingFormButton.value = false;
    emitSubmittedForm(true);
  } catch (error) {
    console.log('Error fetching data', error);
    loadingFormButton.value = false;
    emitSubmittedForm(false);
  }
});
</script>