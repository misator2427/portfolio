<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue'

import Card from '@/components/ui/card/Card.vue'
import CardContent from '@/components/ui/card/CardContent.vue'

import CarrusImaginum from '@/components/CarrusImaginum.vue'

import { onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

// animación al aparecer en pantalla
onMounted(() => {

  const secciones = document.querySelectorAll(".seccion")

  const observer = new IntersectionObserver(
    (entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        } else {
        entry.target.classList.remove("visible")
        }

    })

    },
    {
        threshold: 0.2
    }
    )

  secciones.forEach((sec) => observer.observe(sec))

})

const photos = [
    "Benifallim",
    "Letra",
    "Pereza",
    "Post1",
    "Calcotada",
]

// tarjetas mas limpio
const cards = [
    
    {
    title: "Trabajos",
    route: "/trabajos/about",
    image: "/imagenesOptimizadas/FolletoA.jpg"
    },
    {
    title: "Datos",
    route: "/datos",
    image: "/imagenesOptimizadas/Calcotada.jpg"
    },
    {
    title: "Contacto",
    route: "/contacto",
    image: "/imagenesOptimizadas/Benifallim.jpg"
    },
    {
    title: "Otros",
    route: "/otros",
    image: "/imagenesOptimizadas/Letra.jpg"
    },
]

</script>

<template>

    <div class="relative min-h-screen w-full text-white overflow-x-hidden">

    <!-- fondo carrusel -->
    <div class="fixed inset-0 -z-10">
        <CarrusImaginum 
        :photos="photos"
        basePath="/imagenesOptimizadas"
        :auto-play-delay="2000"
        class="carousel-bg"
        />
    </div>

    <div class="min-h-screen w-full bg-black/40">

<!-- parte inicial -->

    <section class="seccion h-screen px-6 sm:px-8 md:px-10 lg:px-14 flex items-end" id="texto">

        <header class="w-full max-w-[1200px]">

            <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold pb-1 md:pb-2 z-10 transition-all leading-tight texto-aparece text-[#3F5620]">

                <span>Miquel</span>
                <br>
                <span>Satorre Santonja</span>

            </h1>

            <p class="text-base sm:text-lg md:text-2xl lg:text-3xl transition-all mt-1 md:mt-2 pb-2 max-w-[700px] texto-aparece-delay ">
                Importancia en el diseño y la familia
            </p>

        </header>

    </section>

<!-- tarjetas de las secciones -->

    <section class="seccion flex h-screen items-center justify-center" id="tarjetas">

        <header>

            <div class="z-10 grid grid-cols-2 gap-10 md:gap-28 lg:gap-40 xl:gap-32 items-center text-2xl transition-all">

                <Card
                    v-for="card in cards"
                    :key="card.route"
                    class="cursor-pointer transition-all hover:scale-105 w-[200px] bg-[#FEEFF3] backdrop-blur-[4px] rounded-[10px] overflow-hidden text-[#3F5620]"
                    @click="router.push(card.route)"
                >

                    <CardContent class="p-0 flex flex-col items-center">

                        <div class="w-full text-center font-semibold text-[1.2rem] p-[8px] bg-[#FEEFF3] text-[#3F5620]">
                            {{ card.title }}
                        </div>

                        <div class="w-full h-[160px] overflow-hidden">
                            <img 
                                :src="card.image"
                                :alt="card.title"
                                class="w-full h-full object-cover"
                            />
                        </div>

                    </CardContent>

                </Card>

            </div>

        </header>

    </section>

    </div>

    </div>

</template>

<style scoped>

    .seccion{
    opacity:0;
    transform:translateY(40px);
    transition:all 0.7s ease;
    }

    .seccion.visible{
    opacity:1;
    transform:translateY(0);
    }

     /* para que "aparezca" */

    @keyframes aparecer{

        from{
            opacity:0;
            transform: translateY(20px);
        }

        to{
            opacity:1;
            transform: translateY(0);
        }

    }

    .texto-aparece{
        animation: aparecer 0.6s ease;
    }

    .texto-aparece-delay{
        animation: aparecer 0.6s ease 0.2s;
        animation-fill-mode: both;
    }

    

</style>