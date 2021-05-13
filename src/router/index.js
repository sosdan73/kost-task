import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('../views/Education.vue')
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: () => import('../views/Achievements.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
