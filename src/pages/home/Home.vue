<script lang="ts" setup>


</script>

<template>

    <div></div>

    <div class= "bg-amber-200 flex h-200">
        <header class="presentación">

            <img class="absolute opacity-20 h-200 w-full" src="/Imágenes/Benifallim/Benifallim.webp" alt="">

            <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold pb-5 md:pb-15 z-10 transition-all">
                <span class="text-[rgb(27,182,246)] ">Miquel</span> 
                <br> 
                <!-- br es un salto de línea -->
                Satorre <span class="text-[rgb(27,182,246)] ">Santonja</span>
            </h1>


            <p class="text-lg md:text-3xl transition-all">
                Nini y poco mas
            </p>
        </header>
    </div>
<!-- aqi yo tengo mis rutas, y donde van viene marcado por el router link, el resto son creando los botones. Ojo que coincida el nombre que le he pueesto en el index con el que llamo -->
    <div class= "bg-blue-200 flex h-200 items-center row justify-center">
        <header class="botones">
            <div class="z-10 grid grid-cols-2 gap-4 items-center text-2xl">
                <Button variant="destructive" class="mr-1 bg-[rgb(27,182,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,0.7)] transition-all">
                <RouterLink to="/otros"> Otros </RouterLink>
                </Button>

                <Button variant="destructive" class="mr-1 bg-[rgb(27,182,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,0.7)] transition-all">
                <RouterLink to="/trabajos"> Trabajos </RouterLink>
                </Button>

                <Button variant="destructive" class="mr-1 bg-[rgb(27,182,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,0.7)] transition-all">
                <RouterLink to="/datos"> Datos </RouterLink>
                </Button>
                
                 <Button variant="destructive" class="mr-1 bg-[rgb(27,182,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,0.7)] transition-all">
                <RouterLink to="/contacto"> Contacto </RouterLink>
                </Button>
                
            </div>

            
        </header>
    </div>


</template>

<style scoped>
    h1{
        font-family: Rubik 
    }


</style>