import { reactive, ref } from 'vue'

export type Locale = 'en' | 'zh'

export interface Lang {
  display_name: string
  title_name: string
  mublog_name: string
  muprojectdoc_name: string
  mugithub_name: string
  lang_switch: string
  bottom_info: string
  page_source_code: string
}

const langEn: Lang = {
  display_name: 'Mu_Cloud',
  title_name: 'MuCloud_Official',
  mublog_name: 'MuBlog',
  muprojectdoc_name: 'MuProjectDoc',
  mugithub_name: 'GitHub',
  lang_switch: '中文',
  bottom_info: 'Designed by Mu_Cloud | MADE IN VOID LAND | Built with Vue & TS',
  page_source_code: 'Source',
}

const langZh: Lang = {
  display_name: '暮云',
  title_name: 'MuCloud_Official',
  mublog_name: '暮云的博客站',
  muprojectdoc_name: '暮企划·文档站',
  mugithub_name: 'GitHub',
  lang_switch: 'EN',
  bottom_info: '由 Mu_Cloud 设计制作 | MADE IN VOID LAND | 基于 Vue & TS',
  page_source_code: '源码',
}

const STORAGE_KEY = 'mumu-lang'

function normalize(raw: string | null | undefined): Locale | null {
  if (!raw) return null
  const code = raw.split('-')[0].toLowerCase()
  if (code === 'zh') return 'zh'
  if (code === 'en') return 'en'
  return null
}

function detect(): Locale {
  const saved = normalize(localStorage.getItem(STORAGE_KEY))
  if (saved) return saved
  // 非中文一律落英文
  return normalize(window.navigator.language) ?? 'en'
}

/** 响应式文案表：切换语言时整个模板会跟着重渲染 */
export const mulang = reactive<Lang>({ ...langEn })
export const locale = ref<Locale>('en')

function apply(next: Locale) {
  Object.assign(mulang, next === 'zh' ? langZh : langEn)
  locale.value = next
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en'
}

export function setLocale(next: Locale, persist = true) {
  if (persist) localStorage.setItem(STORAGE_KEY, next)
  apply(next)
}

export function toggleLocale() {
  setLocale(locale.value === 'zh' ? 'en' : 'zh')
}

apply(detect())
