import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Pages from '../views/Pages.vue';
import Tabes from '../views/home-tabe.vue';
import Home from '../views/home.vue';
import Cours from '../views/cours/home-cours.vue'
import Sujet from '../views/sujet/home-sujet.vue'
import CoursPage from '../views/cours/cours-conten.vue'

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
  },
  {
    path:'/cours',
    component: Cours
  },
  {
    path:'/sujet',
    component: Sujet
  },
  {
    path:'/cours/:page',
    component:CoursPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
