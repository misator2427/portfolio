<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

</script>


<template>
    
    <div class="bg-[#ffde00] min-h-screen text-center p-4 flex flex-col items-center justify-center">
        

       
         
        <h1 class="text-xl my-1 font-medium">
            Discover some of the most amazing Quotes from The Simpsons
        </h1>

        <div>
            <strong>This is an unofficial app (even though it looks so cool!)</strong>
        </div>

        <div className="mt-8 flex gap-5">
            <Button variant="tertiarius" size="elongatis">
                <RouterLink to="/">Exit</RouterLink>
            </Button>

            <Button variant="tertiarius" size="elongatis">
                <RouterLink to="/trabajos/about">Enter</RouterLink>
            </Button>
        </div>

        <!-- esto es para las imagenes de los personajes -->

       



    </div>

   
</template>
    



<style scoped>

</style>

