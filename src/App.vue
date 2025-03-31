<script setup>
import Navigation from './components/Navigation.vue'
import test from './components/test.vue'
</script>

<template>
    <Navigation/>

    <img class="h-32 w-32 mx-auto mt-50 rounded-full" src="./assets/bg/icon.jpg" alt="Icon"/>
    <h1 class="mx-auto text-center my-5 text-gray-300 text-3xl font-bold">Mu_Cloud</h1>
    <p class="mx-auto text-center text-gray-300 text-base">MuCloud_Official</p>
    <div class="mx-auto w-full flex flex-row items-center justify-center p-5">
        <button class="rounded-full w-40 h-10 mx-2 bg-gray-500 transition delay-10 duration-300 ease-in-out hover:bg-gray-400"><a href="https://mucloudofficial.github.io/MuBlog">MuBlog</a></button>
        <button class="rounded-full w-40 h-10 mx-2 bg-gray-500 transition delay-10 duration-300 ease-in-out hover:bg-gray-400"><a href="https://mucloudofficial.github.io/MuCloudProjectDoc">MuProjectDoc</a></button>
        <button class="rounded-full w-40 h-10 mx-2 bg-gray-500 transition delay-10 duration-300 ease-in-out hover:bg-gray-400"><a href="https://github.com/MuCloudOfficial">GithubPage</a></button>
    </div>
    <footer class="w-full absolute bottom-0">
        <p class="mx-auto text-center text-gray-300 text-base">Design by Mu_Cloud | MADE IN VOID LAND | Based on HTML & VUE & TailwindCSS | <a href="https://github.com/MuCloudOfficial/mucloudofficial.github.io">Page Source Code</a></p>
    </footer>
</template>

<style scoped>

</style>
