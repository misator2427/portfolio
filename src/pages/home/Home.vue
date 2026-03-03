<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue';

import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';

import CarrusImaginum from '@/components/CarrusImaginum.vue';


const photos = ["justice", "arkham", "superman", "varios", "villana", "villano", "grupo", "robin", "anne", "joker", "resplandor", "cat", "gafas", "league", "fondoVerde"]; 



</script>

<template>

    <div class="relative min-h-screen w-full text-white overflow-x-hidden">

        <div class="fixed inset-0 -z-10">
            <CarrusImaginum 
                :photos="photos"
                basePath="/imagines/batman"
                :auto-play-delay="2000"
                class="w-full h-full object-cover"
            />
        </div>

     

        <!-- OVERLAY OSCURO -->
        <div class="min-h-screen w-full bg-black/40">
    

            <div class="h-screen p-10 flex items-end">
                <header class="presentación w-full">

                    <h1 class="text-2xl md:text-7xl lg:text-8xl font-bold md:pb-15 z-10 transition-all">
                        <span>Miquel</span>
                        <br>
                        <!-- br es un salto de línea -->
                        <span>Satorre Santonja</span>

                        <p class="text-lg md:text-3xl transition-all mt-4">
                            Esta es una web de presentación de Miquel Satorre Santonja.
                        </p>
                    </h1>

                </header>
            </div>

            
            
            <!-- aqi yo tengo mis rutas, y donde van viene marcado por el router link, el resto son creando los botones. Ojo que coincida el nombre que le he pueesto en el index con el que llamo -->
            <div class= " flex h-screen items-center row justify-center">
                <header class="botones">
                    <div class="z-10 grid grid-cols-2 gap-x-150 gap-y-50 items-center text-2xl ">

                        
                        <!-- tarjeta de otros -->
                        <Card 
                            class="cursor-pointer w-[220px] h-[240px] mr-1 bg-[rgb(27,182,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,0.7)] transition-all hover:scale-105"
                            @click="$router.push(`/otros`)"
                        >

                            <CardContent class="flex flex-col items-center justify-start h-full pt-0.5">

                                <h2 class="text-xl font-semibold text-center"> 
                                    Otros 
                                </h2>

                                <div class="w-full flex justify-center">
                                    <img 
                                        src="/Imágenes/Nah.webp"
                                        alt="Otros"
                                        class="max-w-full max-h-full object-contain rounded-md"
                                    >
                                </div>

 

                            </CardContent>

                        </Card>

                        <!-- tarjeta de trabajos -->
                        <Card 
                            class="cursor-pointer w-[220px] h-[240px] mr-1 bg-[rgb(27,182,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,0.7)] transition-all hover:scale-105"
                            @click="$router.push(`/trabajos/about`)"
                        >

                            <CardContent class="flex flex-col items-center justify-start h-full pt-0.5">

                                
                                <h2 class="text-xl font-semibold text-center"> 
                                    Trabajos 
                                </h2>

                                <div class="w-full flex justify-center">
                                    <img 
                                        src="/Imágenes/Marshall.webp"
                                        alt="Trabajos"
                                        class="max-w-full max-h-full object-contain rounded-md"
                                    >
                                </div>

                            </CardContent>

                        </Card>

                        <!-- tarjeta de datos -->
                        <Card 
                            class="cursor-pointer w-[220px] h-[240px] mr-1 bg-[rgb(27,182,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,0.7)] transition-all hover:scale-105"
                            @click="$router.push(`/datos`)"
                        >

                            <CardContent class="flex flex-col items-center justify-start h-full pt-0.5">

                                

                                <h2 class="text-xl font-semibold text-center"> 
                                    Datos 
                                </h2>

                                <div class="w-full flex justify-center">
                                    <img 
                                        src="/Imágenes/Speed.jpg"
                                        alt="Datos"
                                        class="max-w-full max-h-full object-contain rounded-md"
                                    >
                                </div>

                            </CardContent>

                        </Card>

                        <!-- tarjeta de contacto -->

                        <Card 
                            class="cursor-pointer w-[220px] h-[240px] mr-1 bg-[rgb(27,182,246)] md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,0.7)] transition-all hover:scale-105"
                            @click="$router.push(`/contacto`)"
                        >

                            <CardContent class="flex flex-col items-center justify-start h-full pt-0.5">

                               

                                <h2 class="text-xl font-semibold text-center">
                                    Contacto
                                </h2>

                                <div class="w-full flex justify-center">
                                    <img 
                                        src="/Imágenes/Ballin.jpg"
                                        alt="Contacto"
                                        class="max-w-full max-h-full object-contain rounded-md"
                                    >
                                </div>

                            </CardContent>

                        </Card>

                        

                        

                        

                        
                        
                        
                        
                    </div>

                    
                </header>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h1{
        font-family: Rubik 
    }


</style>