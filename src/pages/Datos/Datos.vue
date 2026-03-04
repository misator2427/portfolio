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

           

        
        <section class="h-screen bg-amber-200"  id="estudios"> Estudios </section>

        <section class="h-screen bg-blue-200"  id="habilidades"> Habilidades </section>

        <section class="h-screen bg-red-300"   id="info"> Información Relevante </section>

       

    </div>

</template>




<style> 

</style>