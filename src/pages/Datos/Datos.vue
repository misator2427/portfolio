<script setup lang="ts">

import { scrollToSection } from '@/utils/scrollToSection'
import NavegadorDatos from '@/components/NavegadorDatos.vue'
import CarouselSkills from '@/components/CarouselSkills.vue'
import { ref, onMounted } from "vue"

const skills = [
    {
    title: "Desarrollo Web",
    description: "Experiencia desarrollando aplicaciones web modernas utilizando Vue, Tailwind y TypeScript.",
    class: "text-[#3F5620]",
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
        threshold: 0.2
    }
    )

    secciones.forEach((sec) => observer.observe(sec))

})

</script>

<template>

    <div class="relative w-full min-h-screen overflow-x-hidden">

   
    <NavegadorDatos />

    <div class="fixed inset-0 -z-10 bg-[#FEEFF3] flex items-center"></div>

<!-- secciond de estudios  -->

    <section class="seccion min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-14 max-w-[1400px] mx-auto" id="estudios">

        <header class="flex px-10 text-[#3F5620]">

            <RouterLink to="/" class="absolute top-6 left-10 text-lg font-semibold hover:underline">
                Home
            </RouterLink>
        </header>

       

        <div class="max-w-[900px] pt-20">

            <h1 class="text-4xl md:text-6xl font-bold mb-8 ">

                <span class="text-[#3F5620] texto-aparece">
                    Sobre mis estudios
                </span>
                

                <p class="text-lg md:text-2xl mt-6 texto-aparece-delay">
                    Como ya sabes mi nombre, nos ahorramos las presentaciones, más allá de decirte que estoy encantado de tenerte por aquí

                    <br>

                    Soy un diseñador estudiando el grado de Diseño y Tecnologñias Creativas por la UPV, que es una pasada. En realidad no empecé con esto, pero al final el diseño acabó llamándome y ahora estás leyendo esto.

                    <br>

                    Así que sí, podría decir que el Diseño es lo que realmente me motiva, es lo que me hace querer aprender más y más y no estar conforme con mis resultados, si el objetivo es aprender,

                    <br>

                    ¡Equivocarse es parte de la gracia!
                </p>

            </h1>

        </div>

    </section>

<!-- seccion de habilidades  -->

    <section class="seccion min-h-screen flex items-center px-6 sm:px-8 md:px-10 lg:px-14 max-w-[1400px] mx-auto" id="habilidades">
        <div class="w-full max-w-[900px] mx-auto">

            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3F5620] leading-tight texto-aparece">
                Habilidades
            </h1>

            <p class="text-base sm:text-lg md:text-xl lg:text-2xl mt-3 md:mt-4 leading-snug text-[#3F5620] texto-aparece">
                Aquí me gustaría destacar alguna de las cosas que considero que me distingue a mí de otro posible perfil de diseño
            </p>

            <div class="w-full mt-8 md:mt-10 flex justify-center texto-aparece-delay">
                <CarouselSkills :skills="skills" />
            </div>

        </div>
    </section>

<!-- seccion de info -->

    <section class="seccion min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-14 max-w-[1400px] mx-auto" id="info">

        <h1 class="text-4xl md:text-6xl font-bold mb-8 text-[#3F5620] texto-aparece">

            <span class="text-[#3F5620]">
                Más sobre mí
            </span>

        </h1>

        

        <div class="w-full max-w-[1100px] mx-auto flex flex-col gap-8 texto-aparece-delay">

            <Card class="w-full border shadow-sm hover:shadow-md transition-all duration-300">

                <div class="flex justify-between items-center p-6 cursor-pointer" @click="toggleCard(1)">

                    <div class="flex items-center gap-6">

                        <h2 class="text-2xl font-bold text-[#3F5620]">
                            Actuar
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

                        <h2 class="text-2xl font-bold text-[#3F5620]">
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

                        <h2 class="text-2xl font-bold text-[#3F5620]">
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