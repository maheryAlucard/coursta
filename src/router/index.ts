import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Pages from '../views/Pages.vue';
import Tabes from '../views/home-tabe.vue';
import Home from '../views/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/Tabes',
    component: Tabes
  },
  {
    path: '/pages/',
    component: Pages
  },
  {
    path: '/home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
