<template>
  <div class="flex justify-center">
    <template v-for="icon in icons" :key="icon.name" >
      <component :is="icon" :style="{ fill: fill }" :class="classes" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { Component } from 'vue'
defineProps<{
  icons: Component[],
  fill?: string,
  classes?: string
}>()
</script>

