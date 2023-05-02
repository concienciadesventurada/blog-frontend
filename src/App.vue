<script setup lang="ts">
import Tecnologia from './components/Tecnologia.vue'
import { MongodbIcon, ExpressIcon, TailwindcssIcon, ReactIcon, DockerIcon, NodedotjsIcon, PostgresqlIcon, NeovimIcon, ArchlinuxIcon, FedoraIcon, LinuxIcon, DotenvIcon, RlanguageIcon, TypescriptIcon, ViteIcon, TmuxIcon, LodashIcon, GnubashIcon, CplusplusIcon, CIcon, MongooseIcon, PostcssIcon } from 'vue3-simple-icons'

const loremIpsum: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis. Eu consequat ac felis donec et odio. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Volutpat odio facilisis mauris sit amet massa vitae. Odio ut enim blandit volutpat maecenas. Eu nisl nunc mi ipsum faucibus. Justo nec ultrices dui sapien eget mi proin sed. Nulla facilisi cras fermentum odio eu feugiat pretium. Proin libero nunc consequat interdum varius. Nunc eget lorem dolor sed viverra ipsum nunc. Lorem donec massa sapien faucibus et. Eget nullam non nisi est sit. Sapien eget mi proin sed libero enim. Eu facilisis sed odio morbi quis commodo odio. Dui sapien eget mi proin sed."
</script>

<template name="tech-stack">
  <section class="p-2 border-2 border-red-900" name="proyectos">
    <h1 class="font-bold text-lg">Proyectos</h1>
    <article class="m-2 px-4 border">
      <header class="flex justify-between font-bold">
        <div>
          <h2>Entre Hielo y Fuego</h2>
        </div>
        <div class="flex justify-evenly text-right">
          <div class="font-normal italic px-2">
            <h3>Marzo-Abril 2023</h3>
          </div>
          <div>
            <h3>Continuous Integration</h3>
          </div>
        </div>
      </header>
      <main class="py-2">
        <div>
          <p>{{ loremIpsum.slice(0, 250) }}</p>
        </div>
      </main>
      <footer class="grid grid-cols-2">
        <div class="text-md px-4">
          <ul>
            <li>{{ loremIpsum.slice(0, 85) }}</li>
            <li>{{ loremIpsum.slice(0, 85) }}</li>
            <li>{{ loremIpsum.slice(0, 85) }}</li>
            <li>{{ loremIpsum.slice(0, 85) }}</li>
            <li>{{ loremIpsum.slice(0, 85) }}</li>
          </ul>
        </div>
        <div class="flex items-center justify-around border border-violet-300">
          <article class="border-2 rounded-md font-bold text-center py-2 px-4 m-4">
            <div class="flex justify-center rounded-md w-full h-full">
              <MongodbIcon size="10px" style="fill: black" class="w-full h-full" />
            </div>
            <div class="pt-2">
              <h3>MongoDB</h3>
            </div>
          </article>
          <article class="border-2 rounded-md font-bold text-center py-2 px-4 m-4">
            <div class="flex justify-center rounded-md w-full h-full">
              <ExpressIcon size="10px" style="fill: black" class="w-full h-full" />
            </div>
            <div class="pt-2">
              <h3>Express</h3>
            </div>
          </article>
          <article class="border-2 rounded-md font-bold text-center py-2 px-4 m-4">
            <div class="flex justify-center rounded-md w-full h-full">
              <ReactIcon size="10px" style="fill: black" class="w-full h-full" />
            </div>
            <div class="pt-2">
              <h3>React</h3>
            </div>
          </article>
          <article class="border-2 rounded-md font-bold text-center py-2 px-4 m-4">
            <div class="flex justify-center rounded-md">
              <NodedotjsIcon size="10px" style="fill: black" class="w-full h-full" />
            </div>
            <div class="pt-2">
              <h3>NodeJS</h3>
            </div>
          </article>
          <article class="border-2 rounded-md font-bold text-center py-2 px-4 m-4">
            <div class="flex justify-center rounded-md">
              <DockerIcon size="10px" style="fill: black" class="w-full h-full" />
            </div>
            <div class="pt-2">
              <h3>Docker</h3>
            </div>
          </article>
        </div>
      </footer>
    </article>
  </section>
</template>

