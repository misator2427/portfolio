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
      threshold: 0.75
    }
  )

  secciones.forEach((sec) => observer.observe(sec))

})

const photos = [
    "justice",
    "arkham",
    "superman",
    "varios",
    "villana",
    "villano",
    "grupo",
    "robin",
    "anne",
    "joker",
    "resplandor",
    "cat",
    "gafas",
    "league",
    "fondoVerde"
]

// tarjetas mas limpio
const cards = [
    {
    title: "Otros",
    route: "/otros",
    image: "/Imágenes/Benifallim/Benifallim.webp"
    },
    {
    title: "Trabajos",
    route: "/trabajos/about",
    image: "/Imágenes/Benifallim/Benifallim.webp"
    },
    {
    title: "Datos",
    route: "/datos",
    image: "/Imágenes/Benifallim/Benifallim.webp"
    },
    {
    title: "Contacto",
    route: "/contacto",
    image: "/Imágenes/Benifallim/Benifallim.webp"
    }
]

</script>

<template>

    <div class="relative min-h-screen w-full text-white overflow-x-hidden">

    <!-- fondo carrusel -->
    <div class="fixed inset-0 -z-10">
        <CarrusImaginum 
        :photos="photos"
        basePath="/imagines/batman"
        :auto-play-delay="2000"
        class="carousel-bg"
        />
    </div>

    <div class="min-h-screen w-full bg-black/40">

<!-- parte inicial -->

    <section class="seccion h-screen p-10 flex items-end" id="texto">

        <header class="w-full">

            <h1 class="text-2xl md:text-7xl lg:text-8xl font-bold md:pb-15 z-10 transition-all font-[Rubik]">

                <span>Miquel</span>
                    <br>
                <span>Satorre Santonja</span>

                <p class="text-lg md:text-3xl transition-all mt-4">
                    Esta es una web de presentación de Miquel Satorre Santonja.
                </p>

            </h1>

        </header>

    </section>

<!-- tarjetas de las secciones -->

    <section class="seccion flex h-screen items-center justify-center" id="tarjetas">

        <header>

            <div class="z-10 grid grid-cols-2 gap-16 items-center text-2xl">

                <Card
                    v-for="card in cards"
                    :key="card.route"
                    class="cursor-pointer transition-all hover:scale-105 w-[200px] bg-black/60 backdrop-blur-[4px] rounded-[10px] overflow-hidden hover:shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
                    @click="router.push(card.route)"
                    >

                    <CardContent class="p-0 flex flex-col items-center">

        <!-- titulo de las tarjetas -->

                        <div class="w-full text-center font-semibold text-[1.2rem] p-[8px] bg-white/10">
                         {{ card.title }}
                        </div>

    <!-- la imagen adaptada -->

                        <div class="w-full p-[10px] flex justify-center items-center">

                            <img 
                            :src="card.image"
                            :alt="card.title"
                            class="max-w-full h-auto object-contain"
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

    

</style>