import { reactive, ref } from 'vue'

export type Locale = 'en' | 'zh'

export interface Lang {
  display_name: string
  title_name: string
  page_title: string
  page_description: string
  mublog_name: string
  muprojectdoc_name: string
  mugithub_name: string
  lang_switch: string
  menu_open: string
  menu_close: string
  skip_to_content: string
  bottom_info: string
  page_source_code: string
}

const langEn: Lang = {
  display_name: 'Mu_Cloud',
  title_name: 'MuCloud_Official',
  page_title: 'Mu_Cloud — MuVerse · MuProject',
  page_description:
    'Mu_Cloud — member of MuVerse-Project. Minecraft server tooling, front-end and docs.',
  mublog_name: 'MuBlog',
  muprojectdoc_name: 'MuProjectDoc',
  mugithub_name: 'GitHub',
  lang_switch: '中文',
  menu_open: 'Open menu',
  menu_close: 'Close menu',
  skip_to_content: 'Skip to content',
  bottom_info: 'Designed by Mu_Cloud | MADE IN VOID LAND | Built with Vue & TS',
  page_source_code: 'Source',
}

const langZh: Lang = {
  display_name: '暮云',
  title_name: 'MuCloud_Official',
  page_title: 'Mu_Cloud — 暮云 · MuVerse',
  page_description: 'Mu_Cloud（暮云）— MuVerse-Project 成员，做 Minecraft 服务端工具、前端与文档。',
  mublog_name: '暮云的博客站',
  muprojectdoc_name: '暮企划·文档站',
  mugithub_name: 'GitHub',
  lang_switch: 'EN',
  menu_open: '打开菜单',
  menu_close: '关闭菜单',
  skip_to_content: '跳到主内容',
  bottom_info: '由 Mu_Cloud 设计制作 | MADE IN VOID LAND | 基于 Vue & TS',
  page_source_code: '源码',
}

const LANG_TEXT: Record<Locale, Lang> = { en: langEn, zh: langZh }

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
  // 先看 ?lang= 参数：这样中文版可以有可分享的链接
  const fromQuery = normalize(new URLSearchParams(window.location.search).get('lang'))
  if (fromQuery) return fromQuery
  const saved = normalize(safeGet(STORAGE_KEY))
  if (saved) return saved
  // 非中文一律落英文
  return normalize(window.navigator?.language) ?? 'en'
}

/** 响应式文案表：切换语言时整个模板会跟着重渲染 */
export const mulang = reactive<Lang>({ ...langEn })
export const locale = ref<Locale>('en')

function apply(next: Locale) {
  const text = LANG_TEXT[next]
  Object.assign(mulang, text)
  locale.value = next
  if (typeof document === 'undefined') return

  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en'
  document.title = text.page_title
  const desc = document.querySelector('meta[name="description"]')
  if (desc) desc.setAttribute('content', text.page_description)
  const ogLocale = document.querySelector('meta[property="og:locale"]')
  if (ogLocale) ogLocale.setAttribute('content', next === 'zh' ? 'zh_CN' : 'en_US')
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', text.page_title)
  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.setAttribute('content', text.page_description)
}

export function setLocale(next: Locale, persist = true) {
  // 先切界面，再谈持久化：存不进去也不该让按钮点了没反应
  apply(next)
  if (persist) safeSet(STORAGE_KEY, next)
  if (typeof window === 'undefined') return
  // 让地址栏跟着走，方便直接把中文链接发出去
  try {
    const url = new URL(window.location.href)
    if (next === 'zh') url.searchParams.set('lang', 'zh')
    else url.searchParams.delete('lang')
    window.history.replaceState(null, '', url)
  } catch {
    // replaceState 在个别沙箱里会抛错，忽略即可
  }
}

export function toggleLocale() {
  setLocale(locale.value === 'zh' ? 'en' : 'zh')
}

apply(detect())
