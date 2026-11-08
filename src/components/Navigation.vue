<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { MUBLOG, MUPROJECTDOC } from '../shared/links'
import { mulang, toggleLocale } from '../shared/translation'

const isNarrow = ref(false)
const menuOpen = ref(false)

let mq: MediaQueryList | null = null

function sync(e: MediaQueryList | MediaQueryListEvent) {
  isNarrow.value = e.matches
  if (!e.matches) menuOpen.value = false
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  mq = window.matchMedia('(max-width: 700px)')
  sync(mq)
  mq.addEventListener('change', sync)
  window.addEventListener('keydown', onEsc)
})

onBeforeUnmount(() => {
  mq?.removeEventListener('change', sync)
  window.removeEventListener('keydown', onEsc)
  mq = null
})

function onEsc(e: KeyboardEvent) {
  if (e.key === 'Escape') closeMenu()
}

const items = [
  { label: () => mulang.muprojectdoc_name, href: MUPROJECTDOC },
  { label: () => mulang.mublog_name, href: MUBLOG },
]
</script>

<template>
  <nav class="relative z-20 h-16 bg-transparent text-gray-400 backdrop-blur-sm">
    <div class="mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6">
      <a href="/" class="truncate font-bold" :aria-label="mulang.title_name">
        {{ mulang.title_name }}
      </a>

      <ul v-if="!isNarrow" class="ml-8 flex items-center gap-6">
        <li v-for="item in items" :key="item.href">
          <a :href="item.href" class="hover:text-gray-200">{{ item.label() }}</a>
        </li>
      </ul>

      <div class="ml-auto flex items-center gap-1">
        <button
          type="button"
          class="rounded px-3 py-2 text-sm hover:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
          :aria-label="`Switch language to ${mulang.lang_switch}`"
          @click="toggleLocale"
        >
          {{ mulang.lang_switch }}
        </button>

        <button
          v-if="isNarrow"
          type="button"
          class="rounded p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <svg
            v-if="!menuOpen"
            class="h-6 w-6 stroke-gray-400 stroke-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg
            v-else
            class="h-6 w-6 stroke-gray-400 stroke-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <transition name="fade">
      <ul
        v-if="isNarrow && menuOpen"
        id="mobile-menu"
        class="absolute inset-x-0 top-16 border-t border-gray-700/40 bg-gray-900/80 backdrop-blur-md"
      >
        <li v-for="item in items" :key="item.href">
          <a
            :href="item.href"
            class="block px-6 py-3 hover:bg-gray-800/60"
            @click="closeMenu"
          >
            {{ item.label() }}
          </a>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
