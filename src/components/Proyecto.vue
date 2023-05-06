<template>
  <article class="m-4 px-4 border">
    <header class="flex justify-between font-bold">
      <div class="font-bold text-2xl">
        <h2>{{ proyecto.nombre }}</h2>
      </div>
      <div class="flex justify-evenly text-right">
        <div class="font-normal italic px-2">
          <h3>{{ proyecto.fecha }}</h3>
        </div>
        <div>
          <h3>{{ proyecto.estado }}</h3>
        </div>
      </div>
    </header>
    <hr class="border-2 border-celestucho">
    <main class="py-2">
      <div class="text-lg">
        <p>{{ proyecto.descripcion }}</p>
      </div>
    </main>
    <footer class="grid grid-cols-2">
      <div class="text-md px-4">
        <ul>
          <li v-for="punto in proyecto.puntos" :key="punto" class="list-[square]">{{ punto }}</li>
        </ul>
      </div>
      <div class="flex items-center justify-around border border-violet-300 bg-celestucho2 max-h-[166px]">
        <IconoTecnologia v-for="tec in proyecto.techStack" :key="tec.title" :icon="tec.icon" :title="tec.title" />
      </div>
    </footer>
  </article>
</template>

<script lang="ts">
  import IconoTecnologia from './IconoTecnologia.vue'

  export default {
    props: {
      proyecto: {
        type: Object,
        required: true
      },
    },
    components: {
      IconoTecnologia
    }
  }
</script>

