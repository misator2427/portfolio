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
  dragFree: false
})

const api = ref()

function setApi(val: any) {
  api.value = val
}

function nextSkill() {
  if (!api.value) return
  api.value.scrollNext()
}
</script>

<template>
  <Carousel
    class="w-full max-w-[800px] mx-auto"
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
        <Card
          class="w-full border border-black/20 bg-white/40 rounded-2xl overflow-hidden cursor-pointer"
          @click="nextSkill"
        >
          <CardContent class="px-6 py-8 md:px-8 md:py-10">
            <h3 class="text-2xl md:text-3xl font-bold mb-4 text-[#3F5620]">
              {{ skill.title }}
            </h3>

            <p class="text-base md:text-lg text-gray-700 leading-relaxed">
              {{ skill.description }}
            </p>
          </CardContent>
        </Card>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>

<style scoped>
:deep(.embla) {
  overflow: hidden;
}
</style>