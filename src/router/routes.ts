import { createWebHistory, type RouterOptions } from 'vue-router'

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home.vue'),
    },
    {
      path: '/next',
      component: () => import('@/pages/next.vue'),
    },
  ],
}

export {
  routerOptions,
}
