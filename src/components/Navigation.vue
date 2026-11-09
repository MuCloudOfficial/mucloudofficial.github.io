<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { MUBLOG, MUPROJECTDOC } from '../shared/links'
import { mulang, toggleLocale } from '../shared/translation'

const menuOpen = ref(false)
const toggleRef = ref<HTMLButtonElement | null>(null)

const items = [
  { label: () => mulang.muprojectdoc_name, href: MUPROJECTDOC },
  { label: () => mulang.mublog_name, href: MUBLOG },
]

function closeMenu(restoreFocus = false) {
  if (!menuOpen.value) return
  menuOpen.value = false
  if (restoreFocus) nextTick(() => toggleRef.value?.focus())
}

function onEsc(e: KeyboardEvent) {
  if (e.key === 'Escape') closeMenu(true)
}

// 菜单展开时监听 Esc；收起就摘掉，别常驻
watch(menuOpen, (open) => {
  if (typeof window === 'undefined') return
  if (open) window.addEventListener('keydown', onEsc)
  else window.removeEventListener('keydown', onEsc)
})
</script>

<template>
  <nav class="relative z-20 h-16 bg-transparent text-gray-300 backdrop-blur-sm">
    <div class="mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6">
      <a href="/" class="truncate font-bold" :aria-label="mulang.title_name">
        {{ mulang.title_name }}
      </a>

      <!-- 桌面：纯 CSS 控制显隐，不再用 JS 判断窗口宽度，避免首屏先桌面后移动地闪一下 -->
      <ul class="ml-8 hidden items-center gap-6 md:flex">
        <li v-for="item in items" :key="item.href">
          <a :href="item.href" class="hover:text-gray-100">{{ item.label() }}</a>
        </li>
      </ul>

      <div class="ml-auto flex items-center gap-1">
        <button
          type="button"
          class="rounded px-3 py-2 text-sm hover:text-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100"
          :aria-label="`Switch language to ${mulang.lang_switch}`"
          @click="toggleLocale"
        >
          {{ mulang.lang_switch }}
        </button>

        <button
          ref="toggleRef"
          type="button"
          class="rounded p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100 md:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? mulang.menu_close : mulang.menu_open"
          @click="menuOpen = !menuOpen"
        >
          <svg
            v-if="!menuOpen"
            class="h-6 w-6 stroke-gray-300 stroke-2"
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
            class="h-6 w-6 stroke-gray-300 stroke-2"
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

    <!-- v-show 而不是 v-if：元素始终在 DOM 里，aria-controls 才指向得到 -->
    <ul
      id="mobile-menu"
      v-show="menuOpen"
      class="absolute inset-x-0 top-16 border-t border-gray-700/40 bg-gray-900/85 backdrop-blur-md md:hidden"
    >
      <li v-for="item in items" :key="item.href">
        <a :href="item.href" class="block px-6 py-3 hover:bg-gray-800/60" @click="closeMenu()">
          {{ item.label() }}
        </a>
      </li>
    </ul>
  </nav>
</template>
