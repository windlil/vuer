<script setup lang="ts">
import { useRouter } from 'vue-router'
import List from '@/components/List/List.vue'

const router = useRouter()

const data = [
  { name: 'Vue3', desp: 'Modern UI framework' },
  { name: 'Vite4', desp: 'Fast development server' },
  { name: 'Tailwindcss', desp: 'Utility-first CSS framework' },
  { name: 'Pinia', desp: 'Vue state management' },
  { name: 'Vue Router', desp: 'Vue.js routing manager' },
]
</script>

<template>
  <h1 class="font-bold mt-40">
    <a href="https://github.com/windlil/vuer">HELLO VUER</a>
  </h1>
  <p>
    <em>Build a <span class="font-bold text-green-500 dark:text-green-300">Vue</span> app smoothly.</em>
  </p>
  <List :data="data" />
  <button
    class="py-2 px-4 mt-8 shadow-lg
    hover:bg-gray-300 hover:text-gray-900
    transition-all duration-500 select-none
    text-xs font-bold rounded-lg"
    @click="router.push('/next')"
  >
    NEXT
  </button>
</template>
