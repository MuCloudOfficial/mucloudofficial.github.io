<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import { MUBLOG, MUGITHUB, MUPROJECTDOC, REPO } from './shared/links'
import { mulang } from './shared/translation'
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <Navigation />

    <main class="flex flex-1 flex-col items-center justify-center px-5 py-10">
      <img
        class="h-32 w-32 rounded-full"
        src="./assets/bg/icon.webp"
        width="128"
        height="128"
        alt="Mu_Cloud"
        fetchpriority="high"
      />
      <h1 class="mt-5 text-center text-3xl font-bold text-gray-300">{{ mulang.display_name }}</h1>
      <p class="mt-1 text-center text-base text-gray-400">MuCloud_Official</p>

      <div class="mt-6 grid w-full max-w-md grid-cols-2 gap-3 px-0 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center">
        <a class="buttonBase" :href="MUBLOG" target="_blank" rel="noopener">{{ mulang.mublog_name }}</a>
        <a class="buttonBase" :href="MUPROJECTDOC" target="_blank" rel="noopener">{{ mulang.muprojectdoc_name }}</a>
        <a class="buttonBase col-span-2 sm:col-span-1" :href="MUGITHUB" target="_blank" rel="noopener">
          {{ mulang.mugithub_name }}
        </a>
      </div>
    </main>

    <footer class="w-full pb-4">
      <p class="px-5 text-center text-sm text-gray-400">
        {{ mulang.bottom_info }}
        <a class="underline hover:text-gray-200" :href="REPO" target="_blank" rel="noopener">
          {{ mulang.page_source_code }}
        </a>
      </p>
    </footer>
  </div>
</template>
