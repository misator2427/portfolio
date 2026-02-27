import Contacto from "@/pages/Contacto/Contacto.vue";
import Datos from "@/pages/Datos/Datos.vue";
import Home from "@/pages/home/Home.vue";
import Otros from "@/pages/Otros/Otros.vue";
import DescripcionInicial from "@/pages/Trabajos/DescripcionInicial.vue";
import LibreriaTrabajos from "@/pages/Trabajos/LibreriaTrabajos.vue";
import Trabajos from "@/pages/Trabajos/Trabajos.vue";
import TrabajosDetalle from "@/pages/Trabajos/TrabajosDetalle.vue";
import TrabajosNav from "@/pages/Trabajos/TrabajosNav.vue";
import { createRouter, createWebHashHistory } from "vue-router";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
// aqui yo tengo mis rutas, se añaden mas desde aqui, y luego ya cambio lo que sea donde las llame, en este caso estas van desde home a las otras
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  
    {
      path: '/trabajos',
      children: [
        {
          path: '',
          name: 'trabajos',
          component: Trabajos 
        },
        {
          path: 'about', 
          component: TrabajosNav,
          children: [
            {
              path: '', //#trabajos/about
              name: 'trabajos-about',
              component: DescripcionInicial
            }
            
          ]
        },
        {
          path: 'gallery',
          component:TrabajosNav,
          children: [
            {
              path: '', //#trabajos/gallery
              name: 'trabajos-gallery',
              component: LibreriaTrabajos

            },
            {
              path: ':id',
              name: 'trabajos-detail',
              component: TrabajosDetalle
            }
          ]
        }

      ]
      
    },
    {
      path: '/datos',
      name: 'datos',
      component: Datos
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    },
    {
      path: '/otros',
      name: 'otros',
      component: Otros
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    }
  ]
})