<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <em class="mt-40">
    CURRENT PAGE: /next
  </em>
  <button
    class="py-2 px-4 mt-8 shadow-lg
    hover:bg-gray-300 hover:text-gray-900
    transition-all duration-500 select-none
    text-xs font-bold rounded-lg"
    @click="router.push('/')"
  >
    BACK
  </button>
</template>
