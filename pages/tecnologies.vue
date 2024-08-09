<template>
  <v-container class="mt-10 mt-xxl-16">
    <v-row class="justify-center primer-slide-container">
      <h2 class="px-2 py-4 text-xl-h2 text-h4 text-md-h2 text-center" style="color: var(--blue-dark);">
        Tecnologías
      </h2>
    </v-row>
  </v-container>
  <div class="tecnologias-card">
    <tecnologias-databases class="tecnologiasCard hidden left"/>
    <tecnologias-cloud class="tecnologiasCard hidden right"/>
    <tecnologias-docker class="tecnologiasCard hidden left"/>
    <tecnologias-django class="tecnologiasCard hidden right"/>
    <tecnologias-frontend class="tecnologiasCard hidden left"/>
  </div>
</template>


<style>
.tecnologias-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 680px) {
  @keyframes slideImageScale {
    33% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
}

@media screen and (min-width: 681px) {
  @keyframes slideImageScale {
    33% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
}

/*
--- ANIMATIONS FOR APPEARING AND DISSAPEARING ELEMENTS
*/
.hidden {
  opacity: 0;
  transition: all 1s;
}

.left {
  transform: translateX(-4rem);
}

.right {
  transform: translateX(4rem);
}

</style>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

<script>
let observer;
export default {
  data: () => ({
    length: 3,
    onboarding: 0,
  }),
  mounted() {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      });
    })

    const hiddenElements = document.querySelectorAll('.tecnologiasCard');
    hiddenElements.forEach((element) => observer.observe(element))
  },
};
</script>
