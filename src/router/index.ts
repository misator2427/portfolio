import Datos from "@/pages/Datos/Datos.vue";
import Home from "@/pages/home/Home.vue";
import Trabajos from "@/pages/Trabajos/Trabajos.vue";
import { createRouter, createWebHashHistory } from "vue-router";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/trabajos',
      name: 'trabajos',
      component: Trabajos
    },
    {
      path: '/datos',
      name: 'datos',
      component: Datos
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})