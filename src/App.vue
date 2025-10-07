<script setup>
import Navigation from './components/Navigation.vue'
</script>

<template>
    <Navigation/>

    <img class="h-32 w-32 mx-auto mt-50 rounded-full" src="./assets/bg/icon.jpg" alt="Icon"/>
    <h1 class="mx-auto text-center my-5 text-gray-300 text-3xl font-bold">Mu_Cloud</h1>
    <p class="mx-auto text-center text-gray-300 text-base">MuCloud_Official</p>
    <div class="mx-auto w-full flex flex-row items-center justify-center p-5">
        <a href="https://mucloudofficial.github.io/MuBlog" target="_blank"><button class="buttonBase">MuBlog</button></a>
        <a href="https://mucloudofficial.github.io/MuCloudProjectDoc" target="_blank"><button class="buttonBase">MuProjectDoc</button></a>
        <a href="https://github.com/MuCloudOfficial" target="_blank"><button class="buttonBase">GithubPage</button></a>
    </div>
    <footer class="w-full absolute bottom-0">
        <p class="mx-auto text-center p-2 text-gray-300 text-sm">Design by Mu_Cloud | MADE IN VOID LAND | Based on HTML & VUE & TailwindCSS | <a class="underline" href="https://github.com/MuCloudOfficial/mucloudofficial.github.io">Page Source Code</a></p>
    </footer>
</template>

<style scoped>

</style>
