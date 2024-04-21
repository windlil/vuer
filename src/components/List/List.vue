<script setup lang="ts">
interface Props {
  data: {
    name: string
    desp: string
  }[]
}

defineProps<Props>()
</script>

<template>
  <ul class="w-1/4 text-xs">
    <li
      v-for="item in data" :key="item.name"
      class="select-none flex flex-row border-b-2 border-gray-100 dark:border-neutral-900 mt-2"
    >
      <div class="text-center w-2/5 p-2">
        <em>
          {{ item.name }}
        </em>
      </div>
      <div class="flex flex-1 items-center justify-center pl-4 text-gray-400">
        {{ item.desp }}
      </div>
    </li>
  </ul>
</template>
