import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/weight',
    name: 'weight',
    component: () => import('../views/Weight.vue')
  },
  {
    path: '/register_blood_pressure',
    name: 'register_blood_pressure',
    component: () => import('../views/RegisterBloodPressure.vue')
  },
  {
    path: '/blood_pressure',
    name: 'blood_pressure',
    component: () => import('../views/BloodPressure.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
