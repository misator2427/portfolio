
<script setup lang="ts">

</script>

<template>

    <section class="h-200 bg-amber-200" > 
      <h1> DONDE </h1>  

      <div class="container mx-auto max-w-5xl px-4">

            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Contacta con Batman</h2>
            
            <div class="flex flex-col lg:flex-row gap-8 items-center">

                <!-- Mapa de Google Maps -->
                <div class="hidden lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
                    <div class="aspect-square">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.3997258892937!2d-0.3996366!3d38.66268065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6189db351339f9%3A0xb34d9f49ad745484!2s03816%20Benifallim%2C%20Alicante!5e0!3m2!1ses!2ses!4v1771242323082!5m2!1ses!2ses" 
                    width="600" 
                    height="450" 
                    class="w-full h-full rounded-lg"
                    :style="{border:0}"
                    allowfullscreen
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>
                </div>

            </div>  <!-- Formulario -->
        </div>
    
    
    </section>

        
        
    

    <section class="h-200 bg-blue-200"  > Mis redes </section>

</template>



<style scoped>

</style>