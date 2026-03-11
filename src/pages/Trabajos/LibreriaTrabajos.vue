<script setup lang="ts">
import {Card, CardContent} from '@/components/ui/card'
import { characters, type Character } from './data';
import { computed, ref } from 'vue';

// paginador que controla y salen los personajes para clicar
//de aqui para abajo es para hacer nuestro paginador

const inPagina = 3

const nuncPagina = ref (1)

const totalPaginae = Math.ceil(characters.length / inPagina) //el ceil redondea la operacion, characters length es la longitud de la lista

const listaSimpsons = computed(() => {
    const inicio = (nuncPagina.value - 1) * inPagina //el valor inicial .1 x el numero de la pagina
    const fin = inicio + inPagina
    return characters.slice(inicio,fin)
})

const ireAdPaginam = (pagina: number) => {
    if(pagina >= 1 && pagina <= totalPaginae) {
        nuncPagina.value = pagina
    }

}
// ...Array(totalPaginae) sera 0,1,2,3,4. convertimos el array en otro con uno mas. i es el 0,1,2,3,4 y la barrabaja es el objeto

const paginaNumeri: number[] = [...Array(totalPaginae)].map((_, i) => i+1)

</script>


<template>

    <div class="fixed inset-0 -z-10 bg-[#FEEFF3] flex items-center"></div>

    <div class="w-full max-w-[900px] px-6 sm:px-8 md:px-10 pt-8">

        <h1 class="text-4xl md:text-6xl font-bold mb-6 texto-aparece text-[#3F5620]">
            Galería de Trabajos
        </h1>

        <p class="text-lg md:text-2xl texto-aparece-delay">
            Selecciona un trabajo para verlo en detalle
        </p>

    </div>


    <div class="flex flex-col items-center justify-center gap-8 w-full max-w-350 my-8 mx-auto">

        

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">

            <div
                v-for="character in listaSimpsons"
                :key="character.id"
                class="gallery-item"
                @click="$router.push(`/trabajos/gallery/${ character.id }`)"
            >

                <img 
                    :src="`/imagenesOptimizadas/${ character.imago }`"
                    class="gallery-image"
                />

                <div class="gallery-overlay">
                    <h2 class="gallery-title">
                        {{ character.nomen }}
                    </h2>
                </div>

            </div>

        </div>

        <div class="flex flex-row items-center justify-center gap-2 mt-4">
            <button
                @click="ireAdPaginam(nuncPagina - 1)" 
                :disabled="nuncPagina === 1"
                :class="['px-4 py-2 rounded-md font-medium transition-colors',
                    nuncPagina === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#3F5620] hover:bg-[#EED4DB] hover:text-black'

                ]"
            >
                Anterior
            </button>

           
            <button
                v-for="pagina in paginaNumeri" 
                @click="ireAdPaginam(pagina)"
                :class="['w-10 h-10 rounded-md font-medium transition-colors ', 
                    nuncPagina === pagina
                     ? 'bg-[#CEADB5] text-black'
                        :'bg-[#3F5620]  hover:bg-[#EED4DB] hover:text-black'
                ]"
            >
                {{ pagina }}
            </button>

            <button
                :disabled="nuncPagina === totalPaginae"
                @click="ireAdPaginam(nuncPagina + 1)" 
                :class="['px-4 py-2 rounded-md font-medium transition-colors',
                    nuncPagina === totalPaginae
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#3F5620] hover:bg-[#FEEFF3] hover:text-black text-[#FEEFF3]'

                ]"
            >
                Siguiente
            </button>
        </div>

       
       

    
    </div>
</template>



<style scoped>

/* para las imagenes */

.gallery-item{
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    cursor: pointer;

    /* aparece suave */
    animation: aparecer 0.6s ease;
}

/* imagen como tal */

.gallery-image{
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: transform 0.4s ease, filter 0.4s ease;
}

/* se hace gris, como en mi home */

.gallery-overlay{
    position: absolute;
    inset: 0;

    background: rgba(0,0,0,0.35);

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: opacity 0.4s ease;
}



.gallery-title{
    color: white;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1px;
}



.gallery-item:hover .gallery-image{

    
    transform: scale(1.05);

    
    filter: grayscale(40%) brightness(70%);
}

.gallery-item:hover .gallery-overlay{
    opacity: 1;
}

/* para que "aparezca" */

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