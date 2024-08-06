<script setup lang="ts">
import {onMounted, Ref} from "vue";

const viewport = useViewport()
let clientesSatisfechosNum: Ref = ref(0);
let clientesSatisfechosPorc: Ref = ref(0);
let eCommerceMondatosNum: Ref = ref(0);
let aumentoVentasPorc: Ref = ref(0);
onMounted(() => {
  setupObserver()
})

function iterateNumbers(reference: Ref, number: number): void {
  setTimeout(() => {
    const intervalId = setInterval(() => {
      if (reference.value < number) {
        reference.value += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 0.001);
  }, 500);
}

function setupObserver() {
  // Observer for the services cards appearing
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const observerNumber = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("clientesSatisfechosNum")) {
          iterateNumbers(clientesSatisfechosNum, 1238);
        } else if (entry.target.classList.contains("clientesSatisfechosPorc")) {
          iterateNumbers(clientesSatisfechosPorc, 92);
        } else if (entry.target.classList.contains("eCommerceMondatosNum")) {
          iterateNumbers(eCommerceMondatosNum, 729);
        } else if (entry.target.classList.contains("aumentoVentasPorc")) {
          iterateNumbers(aumentoVentasPorc, 61);
        }
      }
    });
  });


  const descriptionElements = document.querySelectorAll(".hidden");
  descriptionElements.forEach((element) => observer.observe(element));
  const numberElements = document.querySelectorAll(".number")
  numberElements.forEach((element) => observerNumber.observe(element));
}
</script>

<template>
  <!--  <h1 v-if="viewport.isLessThan('desktop')">HOLA</h1>-->
  <section class="firstScreenDiv">
    <div class="firstTitleDiv">
      <h2 class="firstTitle">Los números hablan por si mismo</h2>
    </div>

    <div class="statisticsElement">
      <div class="number-box">
        <p class="number gradient-text clientesSatisfechosNum">{{ clientesSatisfechosNum }}</p>
        <p class="number-description hidden">trabajos realizados</p>
      </div>
      <div class="description-box hidden">
        <p>Contamos con más de mil clientes que han confiado en nosotros para desarrollar sus páginas web.</p>
      </div>
    </div>

    <div class="statisticsElement">
      <div class="description-box hidden">
        <p>Estamos comprometidos con la satisfacción del cliente, logrando excelentes resultados.</p>
      </div>

      <div class="number-box">
        <p class="number gradient-text clientesSatisfechosPorc">{{ clientesSatisfechosPorc }}%</p>
        <p class="number-description hidden">clientes satisfechos</p>
      </div>
    </div>

    <div class="statisticsElement">
      <div class="number-box">
        <p class="number gradient-text eCommerceMondatosNum">{{ eCommerceMondatosNum }}</p>
        <p class="number-description hidden">e-commerce desarrollados</p>
      </div>

      <div class="description-box hidden">
        <p>Hemos desarrollado una gran cantidad de e-commerce exitosos para nuestros clientes.</p>
      </div>
    </div>

    <div class="statisticsElement">
      <div class="description-box hidden">
        <p>Nuestros clientes han experimentado un notable incremento en sus ventas.</p>
      </div>

      <div class="number-box">
        <p class="number gradient-text aumentoVentasPorc">+{{ aumentoVentasPorc }}%</p>
        <p class="number-description hidden">aumento de ventas</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.statisticsElement {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

.firstTitleDiv {
  .firstTitle {
    text-align: center;
    margin: 1rem 2rem 0 2rem;
    font-size: 1.5rem;
    color: var(--blue);
  }
}

.gradient-text {
  background: linear-gradient(
          to right,
          rgb(7, 33, 70),
          rgb(33, 36, 77),
          rgb(53, 38, 83),
          rgb(72, 39, 85),
          rgb(142, 59, 64),
          rgb(149, 70, 56),
          rgb(152, 82, 48),
          rgb(151, 95, 41),
          rgb(148, 109, 36)
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-animation 5s infinite;
}

.description-box {
  color: var(--four);
  padding: 3rem;
  font-size: 1.5rem;
  transition: all 2s;
  order: 2;
  text-align: center;
}

.number-box {
  order: 1;
  padding: 3rem;
  min-width: 320px;
  max-width: 320px;
  border: 1px solid var(--six);
  border-radius: 15px;
  box-shadow: 0 0 50px 2px var(--six); // Adjust the values as needed
  .number {
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
  }

  .number-description {
    margin-bottom: -1rem;
    font-size: 1.2rem;
    color: var(--six);
    text-align: center;
  }
}

@media (min-width: 1028px) {
  .firstScreenDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 8rem;
  }

  .statisticsElement {
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    flex-direction: row;
    max-width: 1440px;
    margin: 2rem 3rem 5rem 3rem;
    gap: 5rem;

    .number-box {
      order: unset;

      .number {
        font-size: 6rem;
      }

      .number-description {
        margin-bottom: 0;
        font-size: 1.5rem;
      }
    }

    .description-box {
      order: unset;
      color: var(--four);
      padding: 3rem;
      font-size: 2rem;
      transition: all 2s;
      text-align: left;

    }

  }
  .firstTitleDiv {
    .firstTitle {
      margin: 2rem 2rem 2rem 2rem;
      font-size: 3rem;
    }
  }

  .hidden {
    opacity: 0;
  }
}

@keyframes gradient-animation {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

</style>