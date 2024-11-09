<script setup lang="ts">
import {toast} from "vue3-toastify";
import {useUserStore} from "../../store/userStore";

const router = useRoute()
const userStore = useUserStore()

const otp = ref('')
const loadingOtpSpinner = ref(false)
const disabledOtpButton = ref(true)

const email = router.params.email
const decodedEmail = ref('');

onMounted(async () => {
  try {
    decodedEmail.value = await decodeBase64Url(email);
    toast(`Gracias por registrarse en NT Solutions`, {type: 'info'});
  } catch {
    await navigateTo('/error');
  }
});

watch(otp, async(newOtp, oldOtp) => {
  if (newOtp.length === 6 && oldOtp !== newOtp) {
    await sendOtpCode()
  } else {
    disabledOtpButton.value = true
  }
})

async function decodeBase64Url(base64Url: string) {
  return atob(base64Url);
}

async function sendOtpCode() {
  loadingOtpSpinner.value = true;
  // Send OTP code to the server
  try {
    const response = await $fetch(useRuntimeConfig().public.backendApi + '/api/v1/auth/verify-email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        otp: otp.value,
        email: userStore.email
      }
    })
    if (response) {
      await navigateTo('/log-in')
      toast('Tu correo electrónico ha sido validado con éxito', {type: "success"})
    } else {
      console.error(`response no existe, response: ${response}`)
    }
  } catch (err) {
    toast(`Error al verificar el código: ${err?.data?.message ? err?.data?.message : err}`, {type: "error"})
    otp.value = ''
  } finally {
    otp.value = ''
    loadingOtpSpinner.value = false
  }
}
</script>
<template>
  <div class="otp-div">
    <v-card
        class="py-8 px-6 text-center ma-4 otp-card"
        elevation="24"
        min-width="300"
        max-width="400"
        rounded="xl"
    >
      <h3 class="text-h6 mb-4">Verifica tu cuenta</h3>

      <div class="mb-4">
        Estimado cliente, hemos mandado el código de verificación a su correo electrónico
        <strong>{{ decodedEmail }}</strong>.<br>
      </div>
      <div class="text-grey-darken-1 text-body-2">
        Por favor, introduzca el código para verificar su cuenta.
      </div>
      <v-sheet color="surface">
        <v-otp-input
            v-model="otp"
            type="text"
            variant="solo"
        />
      </v-sheet>

      <v-btn
          style="color: white"
          class="my-4"
          color="var(--blue)"
          height="40"
          text="Verificar"
          variant="flat"
          width="70%"
          :loading="loadingOtpSpinner"
          :disabled="disabledOtpButton"
      />

      <div class="text-caption">
        No has recibido el código? <a href="#" @click.prevent="otp = ''">Reenviar</a>
      </div>
    </v-card>
  </div>

</template>
<style lang="scss" scoped>
.otp-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.otp-card {
  transform: translateY(-4rem);
}
</style>