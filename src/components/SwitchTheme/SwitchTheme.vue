<script setup lang="ts">
import { computed } from 'vue'
import { useThemeMode } from '@/utils/useThemeMode'

const { switchMode, currentMode } = useThemeMode()

const currentThemeIcon = computed(() => {
  if (currentMode.value === 'dark') {
    return 'i-solar-sun-2-linear'
  }
  else {
    return 'i-solar-moon-linear'
  }
})
</script>

<template>
  <span :class="currentThemeIcon" class=" text-black dark:text-white text-2xl cursor-pointer" @click="switchMode" />
</template>
