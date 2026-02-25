<script lang="ts" setup>


</script>

<template>

    <div></div>

    <div class= "bg-amber-400 flex h-300">
        <header class="presentación">

            <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold pb-5 md:pb-15 z-10 transition-all">
                <span class="text-[rgb(27,182,246)] ">Miquel</span> (Him)
                <br> 
                <!-- br es un salto de línea -->
                Satorre <span class="text-[rgb(27,182,246)] ">Santonja</span>
            </h1>


            <p class="text-lg md:text-3xl transition-all">
                Nini y poco mas
            </p>
        </header>
    </div>

    <div class= "bg-blue-200 flex h-300">
        <header class="botones">
            <div class="z-10">
                <Button variant="destructive" class="mr-2 bg-[rgb(27,182,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,0.7)] transition-all">
                <RouterLink to="/otros"> Otros </RouterLink>
                </Button>

                <Button variant="destructive" class="mr-2 bg-[rgb(27,182,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,0.7)] transition-all">
                <RouterLink to="/trabajos"> Trabajos </RouterLink>
                </Button>

                <Button variant="destructive" class="mr-2 bg-[rgb(27,182,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,0.7)] transition-all">
                <RouterLink to="/datos"> Datos </RouterLink>
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