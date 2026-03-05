<script setup lang="ts">

import { scrollToSection } from '@/utils/scrollToSection';

import NavegadorDatos from '@/components/NavegadorDatos.vue';











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

        <section class="h-screen "  id="estudios"> 

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


        <section class="h-screen "  id="habilidades"> 

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

        <section class="h-screen "   id="info"> 

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

        
        

       

    </div>

</template>




<style> 

#estudios {
  /* aparece suave */
    animation: aparecer 0.6s ease;
}

#habilidades {
  /* aparece suave */
    animation: aparecer 0.6s ease;
}

#info {
  /* aparece suave */
    animation: aparecer 0.6s ease;
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

</style>