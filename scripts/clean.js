import fs from 'node:fs'

const homePageTemplate = `<script setup lang="ts">

</script>

<template>
  <div>
    Home
  </div>
</template>
`

function reWriteHomePageTemplate() {
  fs.writeFileSync('src/pages/home.vue', homePageTemplate)
}

reWriteHomePageTemplate()

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
