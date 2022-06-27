import Vue from 'vue'
import VueRouter from 'vue-router'
import ResourcePage from '../views/ResourcePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ResourcePage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
