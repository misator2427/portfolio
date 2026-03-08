<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

interface Props {
  photos: string[]
  basePath: string
  autoPlayDelay?: number
  loop?: boolean
  dragFree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoPlayDelay: 2000,
  loop: true,
  dragFree: true
})
</script>


<template>

<Carousel
  class="w-screen h-screen"
  :opts="{
    loop: props.loop,
    dragFree: props.dragFree
  }"
  :plugins="[Autoplay({ delay: props.autoPlayDelay })]"
>

  <CarouselContent class="h-screen">

    <CarouselItem
      v-for="(photo, index) in props.photos"
      :key="index"
      class="h-screen"
    >

      <img
        :src="`${props.basePath}/${photo}.jpg`"
        :alt="`Image ${index + 1}`"
        class="w-screen h-screen object-cover"
      >

    </CarouselItem>

  </CarouselContent>

</Carousel>

</template>