<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <em class="mt-40">
    CURRENT PAGE: /next
  </em>
  <button
    class="py-2 px-4 mt-8
    bg-purple-200 text-gray-600
    hover:bg-purple-300 hover:text-gray-900
    transition-all duration-500 select-none
    text-sm font-bold rounded-lg"
    @click="router.push('/')"
  >
    BACK
  </button>
</template>
