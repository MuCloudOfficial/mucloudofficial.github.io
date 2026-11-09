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

/** 存储读写一律包一层：隐私模式、存储被禁、配额满都可能抛错，不能让它掀翻整个页面 */
function safeGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function safeSet(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // 存不进就算了，本次会话照常工作，只是下次打开要重新选
  }
}

function normalize(raw: string | null | undefined): Locale | null {
  if (!raw) return null
  const code = raw.split('-')[0].toLowerCase()
  if (code === 'zh') return 'zh'
  if (code === 'en') return 'en'
  return null
}

function detect(): Locale {
  if (typeof window === 'undefined') return 'en'
  const saved = normalize(safeGet(STORAGE_KEY))
  if (saved) return saved
  // 非中文一律落英文
  return normalize(window.navigator?.language) ?? 'en'
}

/** 响应式文案表：切换语言时整个模板会跟着重渲染 */
export const mulang = reactive<Lang>({ ...langEn })
export const locale = ref<Locale>('en')

function apply(next: Locale) {
  Object.assign(mulang, next === 'zh' ? langZh : langEn)
  locale.value = next
  if (typeof document !== 'undefined') {
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en'
  }
}

export function setLocale(next: Locale, persist = true) {
  // 先切界面，再谈持久化：存不进去也不该让按钮点了没反应
  apply(next)
  if (persist) safeSet(STORAGE_KEY, next)
}

export function toggleLocale() {
  setLocale(locale.value === 'zh' ? 'en' : 'zh')
}

apply(detect())
