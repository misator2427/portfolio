<script setup lang="ts">





</script>


<template>

    <div class="fixed inset-0 -z-10 bg-[#FEEFF3]"></div>

    <section class="min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-14 max-w-[1400px] mx-auto">

        <div class="w-full max-w-[900px] text-center flex flex-col items-center">

            
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3F5620] leading-tight texto-aparece">
                Sobre los trabajos
            </h1>

           
            <div class="mt-6 md:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl texto-aparece-delay">

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

    </section>

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