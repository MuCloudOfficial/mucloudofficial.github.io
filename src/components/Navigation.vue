<script setup>
import {onMounted, ref} from "vue";

let onVisible = ref(false)
let onMenu = ref(false)

let subMenu = {
    "MuProjectDoc": "https://mucloudofficial.github.io/MuCloudProjectDoc",
    "MuBlog": "https://mucloudofficial.github.io/MuBlog"
}

function handleSize(){
    onVisible.value = window.innerWidth <= 700;
}

onMounted(() => {
    handleSize();
    window.addEventListener('resize', handleSize);
})
</script>

<template>
    <nav class="flex content-center bg-transparent h-16 backdrop-blur-sm text-gray-500 dark:text-gray-400">
        <a href="#" class="font-bold text-center content-center mx-10">MuCloud_Official</a>
        <ul class="inline-flex content-center align-center justify-center mx-10" v-if="!onVisible">
            <li class="my-auto mx-5" v-for="(k, v) in subMenu">
                <a :href="k">{{ v }}</a>
            </li>
        </ul>
        <button class="ml-auto w-16" v-if="onVisible" @click.prevent="onMenu = !onMenu">
            <svg class="mx-auto h-6 w-6 stroke-gray-400 stroke-2" v-if="onMenu" fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <line x1="3" x2="21" y1="12" y2="12"/>
                <line x1="3" x2="21" y1="6" y2="6"/>
                <line x1="3" x2="21" y1="18" y2="18"/>
            </svg>
            <svg class="mx-auto h-6 w-6 stroke-gray-400 stroke-2" v-if="!onMenu" fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" x2="6" y1="6" y2="18"/>
                <line x1="6" x2="18" y1="6" y2="18"/>
            </svg>
        </button>
    </nav>


</template>

<style scoped>

</style>