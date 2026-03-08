<script setup lang="ts">





</script>


<template>
    <div class="flex flex-col lg:flex-row lg:justify-between md:items-center w-full max-w-350 md:mx-auto my-8 gap-8 px-5 md:px-20">

      
       <!-- he quitado lo de la figura que cambiaba con el raton -->


        <div class="flex flex-col gap-4 order-1 text-center lg:text-left">

            <h1 class="font-bold text-xl lg:text-5xl mb-5 texto-aparece"> 
               Sobre los trabajos
            </h1>
            <!-- texto como tal -->
            <div class="lg:max-w-3xl texto-aparece-delay">
                <p class="mb-5">
                    Hola
                </p>
                        
                <p class="mb-5">
                    Caracola
                </p>

                <p class="mb-5">
                    Yi
                </p>

                
                
            </div>
        </div>

    </div>
</template>



<style scoped>

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