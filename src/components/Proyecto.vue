<template>
  <article class="m-4 border p-4 text-justify">
    <header class="sm:flex
      md:flex-row
      justify-between font-bold
      "
      >
      <div class="font-bold
        text-xl
        md:text-3xl
        "
        >
        <div class="flex items-center">
          <h class="rounded-md drop-shadow-sm">{{ proyecto.nombre }}</h>
          <div class="rounded-md text-xs ml-4 px-2 py-1 text-gray-500"
            :class="{ 'bg-verde' : proyecto.estado === 'CI - CD' || proyecto.estado === 'Deployed', 'bg-dorado' : proyecto.estado === 'Archived', 'bg-azulito' : proyecto.estado === 'In development'}"
            >
            <p>{{ proyecto.estado }}</p>
          </div>
        </div>
        <hr class="my-1 border-4 border-celestucho">
        <div class="flex items-end justify-end">
          <h class="text-right text-xs italic font-normal my-2 text-gris">{{ proyecto.fecha }}</h>
        </div>
      </div>
    </header>

    <section class="rounded-md">
      <div class="text-sm text-justify my-3">
        <p class="rounded-md">{{ proyecto.descripcion }}</p>
      </div>
      <footer class="flex-col
        md:grid md:grid-cols-2
        ">
        <div class="">
          <ul>
            <li v-for="punto in proyecto.puntos" :key="punto" class="text-sm py-1">- {{ punto }}</li>
          </ul>
        </div>
        <div class="flex items-center flex-wrap justify-evenly bg-celestucho2 my-2 rounded-md
          lg:max-h-[166px] md:my-auto
          ">
          <IconoTecnologia v-for="tec in proyecto.techStack" :key="tec.title" :icon="tec.icon" :title="tec.title" />
        </div>
      </footer>
    </section>
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

