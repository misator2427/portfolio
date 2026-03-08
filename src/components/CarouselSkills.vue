<script setup lang="ts">
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
    class="w-full overflow-hidden"
    :opts="{
      loop: props.loop,
      dragFree: props.dragFree
    }"
    @init-api="setApi"
  >
    <CarouselContent class="w-full">
      <CarouselItem
        v-for="(skill, index) in props.skills"
        :key="index"
        class="basis-full min-w-0"
      >
        <div
          class="w-full border border-black/20 px-6 py-6 md:px-8 md:py-8 cursor-pointer bg-white/30"
          @click="nextSkill"
        >
          <h3 class="text-2xl font-bold mb-4">
            {{ skill.title }}
          </h3>

          <p class="text-base md:text-lg text-gray-700 leading-relaxed">
            {{ skill.description }}
          </p>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>

<style scoped>
:deep(.embla) {
  overflow: hidden;
}
</style>