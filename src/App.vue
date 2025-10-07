<script setup>
import Navigation from './components/Navigation.vue'
</script>

<template>
    <Navigation/>

    <img class="h-32 w-32 mx-auto mt-50 rounded-full" src="./assets/bg/icon.jpg" alt="Icon"/>
    <h1 class="mx-auto text-center my-5 text-gray-300 text-3xl font-bold">Mu_Cloud</h1>
    <p class="mx-auto text-center text-gray-300 text-base">MuCloud_Official</p>
    <div class="mx-auto w-full flex flex-row items-center justify-center p-5">
        <button @click.capture="open('https://mucloudofficial.github.io/MuBlog', '_blank')" class="rounded-full w-40 h-10 mx-2 bg-gray-500 transition delay-10 duration-300 ease-in-out hover:bg-gray-400">MuBlog</button>
        <button @click.capture="open('https://mucloudofficial.github.io/MuCloudProjectDoc', '_blank')" class="rounded-full w-40 h-10 mx-2 bg-gray-500 transition delay-10 duration-300 ease-in-out hover:bg-gray-400">MuProjectDoc</button>
        <button @click.capture="open('https://github.com/MuCloudOfficial', '_blank')" class="rounded-full w-40 h-10 mx-2 bg-gray-500 transition delay-10 duration-300 ease-in-out hover:bg-gray-400">GithubPage</button>
    </div>
    <footer class="w-full absolute bottom-0">
        <p class="mx-auto text-center p-2 text-gray-300 text-sm">Design by Mu_Cloud | MADE IN VOID LAND | Based on HTML & VUE & TailwindCSS | <a class="underline" href="https://github.com/MuCloudOfficial/mucloudofficial.github.io">Page Source Code</a></p>
    </footer>
</template>

<style scoped>

</style>
