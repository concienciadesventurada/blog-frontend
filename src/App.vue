<script setup lang="ts">
import Proyecto from './components/Proyecto.vue'
import { MongodbIcon, ExpressIcon, TailwindcssIcon, ReactIcon, DockerIcon, NodedotjsIcon, PostgresqlIcon, VuedotjsIcon, NeovimIcon, ArchlinuxIcon, FedoraIcon, LinuxIcon, DotenvIcon, RIcon, TypescriptIcon, ViteIcon, TmuxIcon, LodashIcon, GnubashIcon, CplusplusIcon, CIcon, MongooseIcon, PostcssIcon } from 'vue3-simple-icons'

const ehyf = {
  nombre: "Entre Hielo y Fuego catering's service web app",
  fecha: "Marzo-Abril 2023",
  estado: "CI - CD",
  descripcion: "A quoting tool, interactive menu, reservation system for a catering service. Automated before manual calculations and labor-intensive customer service.",
  puntos: [
    "Layed out in Figma. Tailor-made for company’s target audience using TailwindCSS and some MaterialUI components.",
    "Currently designed for mobile navigation in mind. Built with responsiveness first focus.",
    "Custom hooks for efficient and effective data validation and communication between frontend and backend.",
    "Designed and implemented MongoDB database from scratch with scalability and flexibility as core philosophy.",
    "Complete set of administrative tools with CRUD operations for managing inventory and products.",
    "Administrative tools secured and isolated from users in its own Docker container.",
    "RESTful API with modern techniques, best-practices and data validation using Express.",
    "Secure and reliable: encryption at rest and CSFLE implementation for sensitive data."
  ],
  techStack: [
    { icon: MongodbIcon, title: "MongoDB" },
    { icon: ExpressIcon, title: "Express" },
    { icon: ReactIcon, title: "React" },
    { icon: NodedotjsIcon, title: "NodeJS" },
    { icon: DockerIcon, title: "Docker" }
  ]
}

const ayh = {
  nombre: "Acolito y Hereje",
  fecha: "May 2023",
  descripcion: "My portfolio and blog made with love from scratch as a exploratory project to learn VueJS, Typescript and PostgreSQL.",
  estado: "In development",
  puntos: [
    "Compiled with Vite",
    "Designed for desktop first.",
    "Basics of relational database architecture and design.",
    "Deployed on Heroku.",
    "Applied users for comment sections and OAuth.",
  ],
  techStack: [
    { icon: PostgresqlIcon, title: "PostgreSQL" },
    { icon: ExpressIcon, title: "Express" },
    { icon: VuedotjsIcon, title: "VueJS" },
    { icon: NodedotjsIcon, title: "NodeJS" },
    { icon: TailwindcssIcon, title: "TailwindCSS" }
  ]
}

const absolutePixel = {
  nombre: "absolutepixel",
  fecha: "Jul-Aug 2022",
  estado: "Archived",
  descripcion: "A 2D Game Engine written in modern C++ powered by SDL2 API.",
  puntos: [
    "Designed for a work in progress card game.",
    "Exploratory project for hands-on practice in OOP, design patterns, image display and user events.",
    "Currently there is a Pong! clone made with the engine in its correspondent branch."
  ],
  techStack: [
    { icon: CplusplusIcon, title: "C++" },
  ]
};

const freqTab = {
  nombre: "freqTab",
  fecha: "May-July - 2022",
  estado: "Archived",
  descripcion: "Exploratory project for R, RStudio, and package making.",
  puntos: [
    "A simple yet effective R Package that automates the creation of complete frequency tables for grouped data in cleansed data-set columns.",
    "It is also capable of calculate measures of central tendency for grouped data.",
    "Proven in LAPOP survey data in the years 2006 to 2020 for Chile and Costa Rica data-sets.",
  ],
  techStack: [
    { icon: RIcon, title: "R" },
  ]
}

</script>

<template>
  <main class="grid grid-cols-[20rem_auto] bg-cv">
    <aside class="flex flex-col justify-center items-center bg-gris h-screen">
      <div>
        <div class="rounded-full w-40 h-40 bg-red-500"></div>
      </div>
      <div>
        <h1 class="font-bold text-white text-2xl">Matias Martinez</h1>
      </div>
    </aside>
    <section class="flex-col bg-cv p-2 border-2 border-red-900" name="proyectos">
      <h1 class="font-bold text-3xl">Proyectos</h1>
      <Proyecto :proyecto="ehyf" />
      <Proyecto :proyecto="ayh" />
      <Proyecto :proyecto="absolutePixel" />
      <Proyecto :proyecto="freqTab" />
    </section>
  </main>
</template>

