<script setup lang="ts">

</script>

<!-- esto es el header y footer de simpsons, lo de arriba y lo de abajo -->
<!-- aqui controla la navegacion de la pagina simpsons -->
<template>
    <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">

        <header class="bg-[#6ecd51] w-full border border-black">

            <div class="flex flex-col md:flex-row items-center justify-between p-3 mx-auto max-w-[1400px] md:px-20">
                
                <LogoSimpsons estilus="w-[8rem] h-auto"/>

                <div class="flex gap-6 pt-3">

                    <RouterLink to="/trabajos/gallery" active-class="font-bold">
                        Galería de trabajos
                    </RouterLink>

                    <RouterLink to="/trabajos/about" active-class="font-bold">
                        Sobre los trabajos
                    </RouterLink>

                    <Button variant="tertiarius" size="elongatis" class="bg-[#5fe2f0] hover:bg-[#6ecd51] focus:bg-[#6ecd51]">

                    <RouterLink to="/trabajos">
                        Home
                    </RouterLink>

                    </Button>


                </div>

            </div>

           


        </header>

        <main>
            <RouterView />
        </main>

        <footer class="text-center bg-[#6ecd51] w-full border border-black py-6">
           <div>
                <strong>All Rights Reserved</strong> 
            </div>

            <small>
                En proceso por Miquel Satorre
            </small>
        </footer>

    </div>
</template>



<style scoped>

</style>