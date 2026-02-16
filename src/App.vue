<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import {MUBLOG, MUGITHUB, MUPROJECTDOC, REPO} from "./shared/links";
import {mulang} from "./shared/translation";
</script>

<template>
    <Navigation/>

    <img class="h-32 w-32 mx-auto mt-50 rounded-full" src="./assets/bg/icon.jpg" alt="Icon"/>
    <h1 class="mx-auto text-center my-5 text-gray-300 text-3xl font-bold">Mu_Cloud</h1>
    <p class="mx-auto text-center text-gray-300 text-base">MuCloud_Official</p>
    <div class="mx-auto w-full flex flex-row items-center justify-center p-5">
        <a :href="MUBLOG" target="_blank"><button class="buttonBase">{{ mulang.mublog_name }}</button></a>
        <a :href="MUPROJECTDOC" target="_blank"><button class="buttonBase">{{ mulang.muprojectdoc_name }}</button></a>
        <a :href="MUGITHUB" target="_blank"><button class="buttonBase">{{ mulang.mugithub_name }}</button></a>
    </div>
    <footer class="w-full absolute bottom-0">
        <p class="mx-auto text-center p-2 text-gray-300 text-sm">{{ mulang.bottom_info }} <a class="underline" :href="REPO">{{ mulang.page_source_code }}</a></p>
    </footer>
</template>
