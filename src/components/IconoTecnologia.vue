<template>
  <article class="border-2 rounded-md font-bold text-center py-2 px-4 m-4 bg-blancucho">
    <div class="flex justify-center rounded-md max-w-[6pem] max-h-[6pem]">
      <component :is="icon" size="80pem" style="fill: black" class="" />
    </div>
    <div class="pt-2">
      <h3>{{ title }}</h3>
    </div>
  </article>
</template>

<script lang="ts">
export default {
  name: "IconoTecnologia",
  props: {
    icon: {
      type: Object, // expects a string name of a vue component
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

