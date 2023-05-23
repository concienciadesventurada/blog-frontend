<template>
  <nav class="sticky p-5 bg-gris shadow md:flex md:items-center md:justify-between text-blancucho">
    <div class="flex justify-between items-center">
      <span class="font-bold text-2xl cursor-pointer">
        ACÓLITO Y HEREJE
      </span>

      <span class="text-3xl cursor-pointer mx-2 md:hidden block">
        <a name="menu" @click="isSidebarOpen = !isSidebarOpen">=</a>
      </span>
    </div>

    <ul
      :class="isSidebarOpen ? '' : 'nav-links md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0'"
    >
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-dorado duration-500">HOME</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-dorado duration-500">ABOUT</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-dorado duration-500">CONTACT</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-dorado duration-500">BLOG</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isSidebarOpen: false,
    };
  },
};
</script>

