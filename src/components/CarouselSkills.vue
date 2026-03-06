<script setup lang="ts">

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import { ref } from "vue"

interface Skill {
  title: string
  description: string
}

interface Props {
  skills: Skill[]
  loop?: boolean
  dragFree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loop: true,
  dragFree: true
})

const api = ref()

function setApi(val:any){
  api.value = val
}

function nextSkill(){

  if(!api.value) return

  api.value.scrollNext()

}

</script>


<template>

<Carousel
  class="w-full max-w-md md:max-w-2xl lg:max-w-4xl"
  :opts="{
    loop: props.loop,
    dragFree: props.dragFree
  }"
  @init-api="setApi"
>

  <CarouselContent>

    <CarouselItem
      v-for="(skill, index) in props.skills"
      :key="index"
    >

      <div class="p-2">

        <Card
          class="border-none cursor-pointer"
          @click="nextSkill"
        >

          <CardContent
            class="flex flex-col aspect-[6/4] items-start justify-center gap-6 p-10"
          >

            <h3 class="text-3xl font-bold">
              {{ skill.title }}
            </h3>

            <p class="text-lg text-gray-600 max-w-2xl">
              {{ skill.description }}
            </p>

          </CardContent>

        </Card>

      </div>

    </CarouselItem>

  </CarouselContent>

</Carousel>

</template>


<style scoped>

:deep(.embla){
  overflow: hidden;
}

</style>