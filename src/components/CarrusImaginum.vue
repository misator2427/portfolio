<script setup lang="ts">
//imports del carrusel
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

//hago interfaz para pasar las propiedades que recibe de batman como las fotos

interface Props {
    photos: string[]
    basePath: string
    autoPlayDelay?: number
    loop?: boolean
    dragFree?: boolean
}
//como tengo propiedades opcionales tengo que meter el define props en una const
const props = withDefaults(defineProps<Props>(), {
    autoPlayDelay: 2000,
    loop: true,
    dragFree: true
}) 

</script>


<template>
    <Carousel 
        class="w-full max-w-md md:max-w-2xl lg:max-w-4xl "
        :opts="{
        loop:props.loop,
        dragFree: props.dragFree
        }"
        :plugins="[Autoplay({
        delay: props.autoPlayDelay,
        })]"
    >
  
  
    <CarouselContent>
      <CarouselItem v-for="(photo, index) in props.photos" :key="index">
        <div class="p-1">
          <Card class="border-none">
            <CardContent class=" flex aspect-6/4 items-center justify-center">
              <img 
              :src="`${ props.basePath }/${ photo }.jpg`" 
              :alt="`Image ${ index + 1 } `"
              class="w-full h-full object-cover"
              >
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
   
  </Carousel>
</template>



<style scoped>

</style>