<script setup lang="ts">

import { scrollToSection } from '@/utils/scrollToSection';

import NavegadorDatos from '@/components/NavegadorDatos.vue';

import CarouselSkills from '@/components/CarouselSkills.vue'

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

// para mis tarjetas

import { ref } from "vue";

const openCard = ref<number | null>(null);

function toggleCard(index: number) {
  openCard.value = openCard.value === index ? null : index;
}

// para controlar lo que me muevo en la pantalla

import { onMounted } from "vue";


onMounted(() => {

  const secciones = document.querySelectorAll(".seccion");

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }

      });

    },
    {
      threshold: 0.75
    }
  );

  secciones.forEach((sec) => observer.observe(sec));

});











</script>




<template>
    <header class="bg-[#6ecd51] w-full border border-black">

         <div class="flex flex-col md:flex-row items-center justify-between p-3 mx-auto max-w-[1400px] md:px-20">
        
    

            <div class="flex gap-6 pt-3"> 
                
                <Button variant="tertiarius" size="elongatis" class="bg-[#5fe2f0] hover:bg-[#6ecd51] focus:bg-[#6ecd51]">

                <RouterLink to="/trabajos">
                    Home
                </RouterLink>

                </Button>
          

                

                
               
            </div>

        </div>

        


    </header>

     





    <div class="Personal">

        <NavegadorDatos />

        <div class="bg-red-300 fixed inset-0 -z-10 flex items-center"> </div>   

        <section class="seccion h-screen "  id="estudios"> 

            <h1 class="order-1 lg:order-2 w-full lg:w-1/2 text-right lg:text-left text-3xl md:text-7xl lg:text-8xl font-bold transition-all">
                <span>Miquel</span>
                <br>
                <!-- br es un salto de línea -->
                <span>Satorre Santonja</span>

                <p class="text-lg md:text-3xl transition-all mt-4">
                    Esta es una web de presentación de Miquel Satorre Santonja.
                </p>
            </h1>
            

        </section>


        <section class="seccion h-screen flex items-start justify-start px-10 pt-24" id="habilidades">

            <div class="w-full max-w-[1200px] flex flex-col gap-16">

               
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
                Habilidades
                </h1>

                
                <CarouselSkills :skills="skills" />

            </div>

        </section>

        <section class="seccion min-h-screen flex items-center justify-center px-10" id="info">

            <div class="w-full max-w-[1300px] flex flex-col gap-8">

                
                <Card class="w-full border shadow-sm hover:shadow-md transition-all duration-300">

                <div
                    class="flex justify-between items-center p-6 cursor-pointer"
                    @click="toggleCard(1)"
                >

                    <div class="flex items-center gap-6">
                    <h2 class="text-2xl font-bold">Seccion</h2>

                    <p class="text-gray-600">
                        Descripcion
                    </p>
                    </div>

                    <span
                    class="text-2xl transition-transform duration-300"
                    :class="{ 'rotate-180': openCard === 1 }"
                    >
                    ▼
                    </span>

                </div>

                <transition name="expand">
                    <div
                    v-if="openCard === 1"
                    class="px-6 pb-6 text-lg text-gray-700"
                    >
                    Descripcion detallada de la seccion
                    </div>
                </transition>

                </Card>


                
                <Card class="w-full border shadow-sm hover:shadow-md transition-all duration-300">

                <div
                    class="flex justify-between items-center p-6 cursor-pointer"
                    @click="toggleCard(2)"
                >

                    <div class="flex items-center gap-6">
                    <h2 class="text-2xl font-bold">Lo q sea</h2>

                    <p class="text-gray-600">
                        descripcion
                    </p>
                    </div>

                    <span
                    class="text-2xl transition-transform duration-300"
                    :class="{ 'rotate-180': openCard === 2 }"
                    >
                    ▼
                    </span>

                </div>

                <transition name="expand">
                    <div
                    v-if="openCard === 2"
                    class="px-6 pb-6 text-lg text-gray-700"
                    >
                    Descripcion mucho detalle
                    </div>
                </transition>

                </Card>


                
                <Card class="w-full border shadow-sm hover:shadow-md transition-all duration-300">

                <div
                    class="flex justify-between items-center p-6 cursor-pointer"
                    @click="toggleCard(3)"
                >

                    <div class="flex items-center gap-6">
                    <h2 class="text-2xl font-bold">Lo q sea</h2>

                    <p class="text-gray-600">
                        Descripcion
                    </p>
                    </div>

                    <span
                    class="text-2xl transition-transform duration-300"
                    :class="{ 'rotate-180': openCard === 3 }"
                    >
                    ▼
                    </span>

                </div>

                <transition name="expand">
                    <div
                    v-if="openCard === 3"
                    class="px-6 pb-6 text-lg text-gray-700"
                    >
                    Descripcion detallada
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

  opacity: 0;
  transform: translateY(40px);

  transition: all 0.7s ease;

}

.seccion.visible{

  opacity: 1;
  transform: translateY(0);

}

</style>