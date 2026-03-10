<script setup lang="ts">

</script>


<!-- aqui controla la navegacion de los trabajos -->
<template>
    <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">

        

            <div >

                <header class="flex justify-between sm:justify-start sm:gap-6 bg-[#3F5620] text-[#EED4DB] text-lg hover:underline px-10 pt-5">

                    <RouterLink to="/trabajos" active-class="font-bold">
                        Home
                    </RouterLink>

                    <RouterLink to="/trabajos/gallery" active-class="font-bold">
                        Galería de trabajos
                    </RouterLink>

                    <RouterLink to="/trabajos/about" active-class="font-bold">
                        Sobre los trabajos
                    </RouterLink>

                    <Button variant="tertiarius" size="elongatis">

                    </Button>

                </header>
                
            


            </div>

           


        

        <main>
            <RouterView />
        </main>

        

    </div>
</template>



<style scoped>

</style>