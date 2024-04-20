<script setup lang="ts">
import SwitchTheme from '@/components/SwitchTheme.vue'
</script>

<template>
  <div
    class="w-full h-full relative
    flex items-center flex-col
   dark:text-white
  dark:bg-black"
  >
    <RouterView />
    <SwitchTheme class="absolute right-20 top-5" />
    <a
      href="https://github.com/windlil/vuer"
      class="text-2xl absolute right-8 top-5 i-ri-github-fill"
    />
  </div>
</template>
