import fs from 'node:fs'

const homePageTemplate = `<script setup lang="ts">

</script>

<template>
  <div>
    Home
  </div>
</template>
`

const newRoutes = `import { createWebHistory, type RouterOptions } from 'vue-router'

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home.vue'),
    },
  ],
}

export {
  routerOptions,
}
`

function reWriteHomePageTemplate() {
  fs.writeFileSync('src/pages/home.vue', homePageTemplate)
}

function reWriteRoutesOptions() {
  fs.writeFileSync('src/router/routes.ts', newRoutes)
}

function clean() {
  reWriteHomePageTemplate()
  reWriteRoutesOptions()
  fs.unlinkSync('src/pages/next.vue')
  fs.unlinkSync('src/components/List/List.vue')
  fs.rmdirSync('src/components/List')
  console.log('finish clean🎉')
}

clean()

// const removeList = [
//   'src/pages/next.vue',
// ]

// fs.unlink(removeList[0], (err) => {
//   if (err) {
//     console.log(err)
//   }
//   else {
//     console.log('删除成功')
//   }
// })
