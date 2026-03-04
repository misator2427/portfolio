
<script setup lang="ts">
import { ref } from 'vue';
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

import { Phone, Mail, MapPin, X, Instagram, Linkedin, InstagramIcon, MessageCircle, Menu, MenuIcon } from 'lucide-vue-next';


const dias = ref<DateValue> ()

</script>

<template>

  <header class="bg-[#6ecd51] w-full border border-black">

    <div class="flex flex-col md:flex-row items-center justify-between p-3 mx-auto max-w-[1400px] md:px-20">
        
    

        <div class="flex gap-6 pt-3">

            

            <Button variant="tertiarius" size="elongatis" class="bg-[#5fe2f0] hover:bg-[#6ecd51] focus:bg-[#6ecd51]">

            <RouterLink to="/trabajos">
                Home
            </RouterLink>

            </Button>


        </div>

    </div>

    


</header>

<section id="Lugar" class="w-full py-12 bg-gray-100 h-screen">

  <div class="container mx-auto max-w-5xl px-4">

   
          
    <div class="flex lg:flex-row gap-8 ">

      <h1 class="text-1xl md:text-7xl lg:text-8xl font-bold md:pb-15 z-10 transition-all">
        <span>Miquel</span>
        <br>
        <!-- br es un salto de línea -->
        <span>Satorre Santonja</span>

        <p class="text-lg md:text-3xl transition-all mt-4">
            Esta es una web de presentación de Miquel Satorre Santonja.
        </p>
      </h1>

      <!-- Mapa de Google Maps -->
      <div class="hidden lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <div class="aspect-square">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24910.002153592683!2d-0.4990140953267379!3d38.70058034303596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61864e204bb377%3A0x3270bc5ab4510472!2sAlcoy%2C%20Alicante!5e0!3m2!1ses!2ses!4v1772616610408!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      
    </div>
  </div>
</section>

<section id="Contacto" class="w-full py-12 bg-gray-100 min-h-screen flex items-center">
  <div class="container mx-auto max-w-5xl px-4 flex flex-col lg:flex-row items-start gap-12">

    <h1 class="order-1 lg:order-2 w-full lg:w-1/2 text-right lg:text-left text-3xl md:text-7xl lg:text-8xl font-bold transition-all">
        <span>Miquel</span>
        <br>
        <!-- br es un salto de línea -->
        <span>Satorre Santonja</span>

        <p class="text-lg md:text-3xl transition-all mt-4">
            Esta es una web de presentación de Miquel Satorre Santonja.
        </p>
    </h1>


<!-- Formulario -->
    <div class="order-2 lg:order-1 w-full lg:w-1/2">
      <form  class="space-y-6 bg-white p-8 rounded-2xl shadow-xl w-full">
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
            <SelectTrigger class="border-gray-200 bg-white text-gray-900">
              <SelectValue placeholder="Selecciona una misión" />
            </SelectTrigger>


            <SelectContent class="bg-white">
              <SelectItem value="rescatare">
                Rescate de rehenes
              </SelectItem>
              <SelectItem value="investigare">
                Investigacion criminal
              </SelectItem>
              <SelectItem value="persequi">
                Persecucion de villanos
              </SelectItem>
              <SelectItem value="defendere">
                Defensa de Gotham
              </SelectItem>
              
            </SelectContent>
          </Select>

        </div>

        <div class="space-y-2">
          <Label>Fecha de la mision</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <span v-if="dias"> 
                  {{dias.day}} / {{ dias.month }} / {{ dias.year }}
                </span>

                <span v-else> 
                  Selecciona una fecha 
                </span>

              </Button>
            </PopoverTrigger>
            <PopoverContent>  
              <Calendar v-model="dias"/>
            </PopoverContent>
          </Popover>

        </div>

        <Button
        type="submit"
        class="w-full bg-[rgb(106,90,205)] hover:bg-[rgb(88,75,171)] text-white text-md mt-4"
        >
          Enviar solicitud
        </Button>

            
      </form>
    </div>

  </div>
</section>



<footer class="w-full bg-gray-900 text-gray-300 py-12">
  <div class="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">

    <div class="space-y-4 text-center md:text-left">

      <h3 class="text-xl font-bold text-white">Información de Contacto</h3>
            
        <div class="space-y-2">
          <p class="flex items-center gap-2 justify-center md:justify-start">

            <Phone class="w-5 h-5 "/>
            + 735 918 385 

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">
            <Mail class="w-5 h-5 "/>
            msatsan@gmail.com

          </p>
          <p class="flex items-center gap-2 justify-center md:justify-start">
            <MapPin class="w-5 h-5 "/>
            Alcoy, Alicante

          </p>
        </div>
      </div>

      <!-- Redes sociales -->
      <div class="space-y-4 text-center md:text-left text-gray-400">
        <h3 class="text-xl font-bold text-white">Síguenos</h3>
        <div class="flex gap-8 justify-center">
          
          <X class="w-10 h-10 hover:text-white"/>
          <Instagram class="w-10 h-10 hover:text-white"/>
          <Linkedin class="w-10 h-10 hover:text-white"/>
          <MessageCircle class="w-10 h-10 hover:text-white"/>
              
        </div>
    </div>
  </div>
</footer>

</template>



<style scoped>

</style>