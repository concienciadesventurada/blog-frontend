<script setup lang="ts">
  defineProps<{ iconoString: string, nombre: string, iconoSize: string, clases: string }>()
</script>

<template>
  <article class="flex-col justify-items-center border text-center rounded-md">
    <div>
      <font-awesome-icon :icon="iconoString" :size="iconoSize" />
    </div>
    <div>
      <h1 :class="clases">{{ nombre }}</h1>
    </div>
  </article>
</template>
