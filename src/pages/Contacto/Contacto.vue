<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { DateValue } from 'reka-ui';
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Button from '@/components/ui/button/Button.vue';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Phone, Mail, MapPin, X, Instagram, Linkedin, MessageCircle } from 'lucide-vue-next';

onMounted(() => {
  const secciones = document.querySelectorAll(".seccion")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        } else {
          entry.target.classList.remove("visible")
        }
      })
    },
    {
      threshold: 0.2
    }
  )

  secciones.forEach((sec) => observer.observe(sec))
})

const dias = ref<DateValue>()
</script>

<template>
  <div class="fixed inset-0 -z-10 bg-[#FEEFF3]"></div>

  <section id="Lugar" class="seccion min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-14 max-w-[1400px] mx-auto">

    <header class="flex px-10 text-[#3F5620]">
      <RouterLink to="/" class="absolute top-6 left-10 text-lg font-semibold hover:underline">
        Home
      </RouterLink>
    </header>

    <div class="w-full pt-20 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

      <!-- Texto -->
      <div class="w-full lg:w-1/2 max-w-[900px] text-[#3F5620]">
        <h1 class="text-4xl md:text-6xl font-bold mb-8">
          <span class="texto-aparece">¿Dónde?</span>

          <p class="text-lg md:text-2xl mt-6 texto-aparece-delay">
            X es una de mis inspiraciones. Es donde vivo y paso la mayor parte de mi tiempo, donde he podido desarrollar y descartar más ideas y probar cosas.
            <br><br>
            Es donde empezó todo, por eso sigo teniendo ilusión de volver a X cada vez, porque me recuerda lo mucho que ha pasado y cambiado en todo este tiempo.
          </p>
        </h1>
      </div>

      <!-- Mapa -->
      <div class="w-full lg:w-1/2 texto-aparece-delay">
        <div class="w-full overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24910.002153592683!2d-0.4990140953267379!3d38.70058034303596!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61864e204bb377%3A0x3270bc5ab4510472!2sAlcoy%2C%20Alicante!5e0!3m2!1ses!2ses!4v1772616610408!5m2!1ses!2ses"
            class="w-full h-full border-0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  </section>

  <section id="Contacto" class="seccion min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-14 max-w-[1400px] mx-auto">

    <div class="w-full pt-20 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

      <!-- Texto -->
      <div class="w-full lg:w-1/2 max-w-[900px] text-[#3F5620]">
        <h1 class="text-4xl md:text-6xl font-bold mb-8">
          <span class="texto-aparece">¡Contáctame!</span>

          <p class="text-lg md:text-2xl mt-6 texto-aparece-delay">
            Puedes contactarme mediante este formulario, sé que es un poco corporativo, pero es una buena forma de establecer un contacto orientado a encargo.
            <br><br>
            Ya sabes, si estás pensando en realizar un encargo, contáctame y que empiece la magia.
          </p>
        </h1>
      </div>

      <!-- Formulario -->
      <div class="w-full lg:w-1/2 texto-aparece-delay">
        <form class="space-y-6 bg-white p-8 rounded-2xl shadow-xl w-full">
          <div class="space-y-2">
            <Label for="nomen">Nombre</Label>
            <Input id="nomen" required />
          </div>

          <div class="space-y-2">
            <Label for="cognomen">Apellidos</Label>
            <Input id="cognomen" required />
          </div>

          <div class="space-y-2">
            <Select required>
              <SelectTrigger class="border-gray-200 bg-white text-[#3F5620]">
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>

              <SelectContent class="bg-white">
                <SelectItem value="rebrand">
                  Rebranding
                </SelectItem>
                <SelectItem value="proyecto">
                  Campaña
                </SelectItem>
                <SelectItem value="animacion">
                  Animación
                </SelectItem>
                <SelectItem value="marketing">
                  Marketing
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div class="space-y-2">
            <Label>Fecha del meeting</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <span v-if="dias">
                    {{ dias.day }} / {{ dias.month }} / {{ dias.year }}
                  </span>

                  <span v-else>
                    Selecciona una fecha
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar v-model="dias" />
              </PopoverContent>
            </Popover>
          </div>

          <Button
            type="submit"
            class="w-full bg-[#3F5620] hover:bg-[rgb(88,75,171)] text-white text-md mt-4"
          >
            Enviar solicitud
          </Button>
        </form>
      </div>

    </div>
  </section>

  <footer class="w-full bg-[#3F5620] text-gray-300 py-12">
    <div class="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">

      <div class="space-y-4 text-center md:text-left">
        <h3 class="text-xl font-bold text-white">Información de Contacto</h3>

        <div class="space-y-2">
          <p class="flex items-center gap-2 justify-center md:justify-start">
            <Phone class="w-5 h-5" />
            + 735 918 385
          </p>

          <p class="flex items-center gap-2 justify-center md:justify-start">
            <Mail class="w-5 h-5" />
            msatsan@gmail.com
          </p>

          <p class="flex items-center gap-2 justify-center md:justify-start">
            <MapPin class="w-5 h-5" />
            Alcoy, Alicante
          </p>
        </div>
      </div>

      <div class="space-y-4 text-center md:text-left text-gray-400">
        <h3 class="text-xl font-bold text-white">Puedes seguirme por aquí</h3>
        <div class="flex gap-8 justify-center">
          <X class="w-10 h-10 hover:text-white" />
          <Instagram class="w-10 h-10 hover:text-white" />
          <Linkedin class="w-10 h-10 hover:text-white" />
          <MessageCircle class="w-10 h-10 hover:text-white" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.seccion{
  opacity:0;
  transform:translateY(40px);
  transition:all 0.7s ease;
}

.seccion.visible{
  opacity:1;
  transform:translateY(0);
}

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