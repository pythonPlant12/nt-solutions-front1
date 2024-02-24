<template>
    <v-window
    v-model="onboarding"
    show-arrows
    direction="vertical"
  >
  <tecnologias-databases/>
  <tecnologias-cloud />
  <tecnologias-docker />
  <tecnologias-django />
  <tecnologias-frontend />
  </v-window>
</template>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

<style>

</style>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

<script>
  export default {
    data: () => ({
      length: 3,
      onboarding: 0,
    }),
  }
</script>