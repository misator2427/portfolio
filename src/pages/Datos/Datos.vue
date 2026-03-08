<script setup lang="ts">

import { scrollToSection } from '@/utils/scrollToSection'
import NavegadorDatos from '@/components/NavegadorDatos.vue'
import CarouselSkills from '@/components/CarouselSkills.vue'
import { ref, onMounted } from "vue"

const skills = [
    {
    title: "Desarrollo Web",
    description: "Experiencia desarrollando aplicaciones web modernas utilizando Vue, Tailwind y TypeScript."
    },
    {
    title: "Programación",
    description: "Capacidad para diseñar soluciones eficientes y estructuradas aplicando buenas prácticas de programación."
    },
    {
    title: "Aprendizaje rápido",
    description: "Capacidad para adaptarme a nuevas tecnologías y herramientas de forma rápida."
    },
    {
    title: "Trabajo en equipo",
    description: "Experiencia colaborando en proyectos y comunicando ideas técnicas de forma clara."
    }
]

const openCard = ref<number | null>(null)

function toggleCard(index: number) {
    openCard.value = openCard.value === index ? null : index
}


// para animar la seccion

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

</script>

<template>

    <div class="relative w-full min-h-screen overflow-x-hidden">

   
    <NavegadorDatos />

    <div class="fixed inset-0 -z-10 bg-red-300 flex items-center"></div>

<!-- secciond de estudios  -->

    <section class="seccion min-h-screen flex flex-col justify-center px-10 max-w-[1400px] mx-auto" id="estudios">

        <RouterLink to="/" class="absolute top-6 left-10 text-lg font-semibold hover:underline">
            Home
        </RouterLink>

        <div class="max-w-[900px]">

            <h1 class="text-4xl md:text-7xl lg:text-8xl font-bold">

                <span>Miquel</span>
                    <br>
                <span>Satorre Santonja</span>

                <p class="text-lg md:text-2xl mt-6">
                    Esta es una web de presentación de Miquel Satorre Santonja.
                </p>

            </h1>

        </div>

    </section>

<!-- seccion de habilidades  -->

    <section class="seccion min-h-screen flex flex-col justify-center px-10 max-w-[1400px] mx-auto pt-20" id="habilidades">
        <div class="w-full max-w-[900px]">

            <h1 class="text-4xl md:text-6xl font-bold mb-8">
                Habilidades
            </h1>

            <br>

            <CarouselSkills :skills="skills" />

        </div>
    </section>

<!-- seccion de info -->

    <section class="seccion min-h-screen flex items-center px-10" id="info">

        <div class="w-full max-w-[1100px] mx-auto flex flex-col gap-8">

            <Card class="w-full border shadow-sm hover:shadow-md transition-all duration-300">

                <div class="flex justify-between items-center p-6 cursor-pointer" @click="toggleCard(1)">

                    <div class="flex items-center gap-6">

                        <h2 class="text-2xl font-bold">
                            Sección
                        </h2>

                        <p class="text-gray-600">
                            Descripción
                        </p>

                    </div>

                    <span class="text-2xl transition-transform duration-300" :class="{ 'rotate-180': openCard === 1 }"></span>

                </div>

                <transition name="expand">
                    <div v-if="openCard === 1" class="px-6 pb-6 text-lg text-gray-700">
                        Descripción detallada de la sección
                    </div>
                </transition>

            </Card>

            <Card class="w-full border shadow-sm hover:shadow-md transition-all duration-300">

                <div class="flex justify-between items-center p-6 cursor-pointer" @click="toggleCard(2)">

                    <div class="flex items-center gap-6">

                        <h2 class="text-2xl font-bold">
                            Lo que sea
                        </h2>

                        <p class="text-gray-600">
                         Descripción
                        </p>

                    </div>

                    <span class="text-2xl transition-transform duration-300" :class="{ 'rotate-180': openCard === 2 }"></span>

                </div>

                <transition name="expand">
                    <div
                        v-if="openCard === 2" class="px-6 pb-6 text-lg text-gray-700">
                        Descripción mucho detalle
                    </div>
                </transition>

            </Card>

            <Card class="w-full border shadow-sm hover:shadow-md transition-all duration-300">

                <div class="flex justify-between items-center p-6 cursor-pointer" @click="toggleCard(3)">

                    <div class="flex items-center gap-6">

                        <h2 class="text-2xl font-bold">
                            Lo que sea
                        </h2>

                        <p class="text-gray-600">
                            Descripción
                        </p>

                    </div>

                    <span class="text-2xl transition-transform duration-300" :class="{ 'rotate-180': openCard === 3 }"></span>

                </div>

                <transition name="expand">
                    <div v-if="openCard === 3" class="px-6 pb-6 text-lg text-gray-700">
                        Descripción detallada
                    </div>
                </transition>

            </Card>

        </div>

    </section>

    </div>

</template>

<style>

    .expand-enter-active,
    .expand-leave-active {
    transition: all 0.35s ease;
    }

    .expand-enter-from,
    .expand-leave-to {
    opacity: 0;
    transform: translateY(-10px);
    }

    .expand-enter-to,
    .expand-leave-from {
    opacity: 1;
    transform: translateY(0);
    }

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