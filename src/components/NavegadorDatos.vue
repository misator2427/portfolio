<script setup lang="ts">



import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'
import { scrollToSection } from '@/utils/scrollToSection';


interface MenuItems {
    label: string,
    href: string,
    onClick?: () => void
}

const menuItems = [
  {
    label: 'Portada',
    href: '#',
    onClick: () => scrollToSection('#')
  },
  {
    label: 'Vehiculis',
    href: '#vehiculis',
    onClick: () => scrollToSection('#vehiculis')
  },
  {
    label: 'Imágenes',
    href: '#videre',
    onClick: () => scrollToSection('#videre')
  },
  {
    label: 'Contacto',
    href: '#contactus',
    onClick: () => scrollToSection('#contactus')
  },
]




</script>


<template>

    <nav class="bg-white">
        <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem> 
                        <!-- Los menu items son los botoncitos de la web -->
                        
                    
                        <NavigationMenuLink>Link</NavigationMenuLink>
                        
                    </NavigationMenuItem>

                    <!-- aqui añade todo lo de la lista de arriba -->

                    <NavigationMenuItem v-for="item in menuItems" :key="item.label">
                                    <a
                                    :href="item.href"
                                    @click.prevent="item.onClick ? item.onClick() : null"
                                    >
                                        <NavigationMenuLink>
        
                                        {{item.label}}
                                        </NavigationMenuLink>
                                    </a>  
                                    
                        
                    </NavigationMenuItem>

                


                </NavigationMenuList>
        </NavigationMenu>
    </nav>

     
   
</template>



<style scoped>
    nav{
          background-color: white;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1;
    
    }

    .icon-home {
        color: orange;
        width: 3rem;
        height: 100%;
        /* cada rem son 16 pixeles */
        /* si le pones 100% a uno de los dos, cambia de forma proporcional */
    }

    .icon-home:hover {
        color: white;
        background-color: orange;

    }

    .extra-nav {
    background-color: white;
    opacity: 0.7;
    box-shadow: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    width: 11rem;
    border-radius: 0 0 1rem 0;
    z-index: 1;
    /* esto es para que esté siempre encima :D */
    }

    @media (min-width: 640px){
    .extra-nav {
        width: 100%;
        border-radius: 0 0 1rem 0;
        opacity: 1;
        left: 0;
    }
    }

</style>