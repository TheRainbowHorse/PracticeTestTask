import { createRouter, createWebHistory } from 'vue-router'

import Weather from '../components/Weather.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Weather,
      props: true
    },
    {
      path: '/weather/:city',
      component: Weather,
      props: true
    }
  ]
})

export default router
