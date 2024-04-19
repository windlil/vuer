<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
  <h1 class="font-bold mt-40">
    <a href="https://github.com/windlil/vuer">HELLO VUER</a>
  </h1>
  <p>
    <em>Build a Vue app smoothly.</em>
  </p>
  <p>
    <em>Vue3 + Vite5 + Tailwindcss + VueRouter + Pinia</em>
  </p>
  <button
    class="py-2 px-4 mt-8
    bg-purple-200 text-gray-600
    hover:bg-purple-300 hover:text-gray-900
    transition-all duration-500 select-none
    text-sm font-bold rounded-lg"
    @click="router.push('/next')"
  >
    NEXT
  </button>
</template>
