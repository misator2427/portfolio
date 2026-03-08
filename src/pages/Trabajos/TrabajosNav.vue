<script setup lang="ts">

</script>


<!-- aqui controla la navegacion de los trabajos -->
<template>
    <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">

        

            <div >
                
            

                <div class="flex gap-6 pt-3">

                    <RouterLink to="/trabajos/gallery" active-class="font-bold">
                        Galería de trabajos
                    </RouterLink>

                    <RouterLink to="/trabajos/about" active-class="font-bold">
                        Sobre los trabajos
                    </RouterLink>

                    <Button variant="tertiarius" size="elongatis">

                    <RouterLink to="/trabajos">
                        Home
                    </RouterLink>

                    </Button>


                </div>

            </div>

           


        

        <main>
            <RouterView />
        </main>

        

    </div>
</template>



<style scoped>

</style>