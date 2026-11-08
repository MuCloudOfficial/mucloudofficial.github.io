<h2 align="center"> Mu_Cloud's Github Main Site Page </h2>
<h3 align="center"> Mu_Cloud 主站 </h3>

---

<div align="center">
    <a href="https://github.com/MuCloudOfficial/mucloudofficial.github.io/releases"><img alt="Release" src="https://img.shields.io/github/package-json/v/MuCloudOfficial/mucloudofficial.github.io?label=Release&labelColor=black&color=gray"></a>
    <img alt="Vue" src="https://img.shields.io/github/package-json/dependency-version/MuCloudOfficial/mucloudofficial.github.io/vue?label=Vue&labelColor=black&color=gray">
    <img alt="Vite" src="https://img.shields.io/github/package-json/dependency-version/MuCloudOfficial/mucloudofficial.github.io/dev/vite?label=Vite&labelColor=black&color=gray">
    <img alt="Tailwind CSS" src="https://img.shields.io/github/package-json/dependency-version/MuCloudOfficial/mucloudofficial.github.io/dev/tailwindcss?label=Tailwind&labelColor=black&color=gray">
    <img alt="TypeScript" src="https://img.shields.io/github/package-json/dependency-version/MuCloudOfficial/mucloudofficial.github.io/dev/typescript?label=TypeScript&labelColor=black&color=gray">
    <img alt="Deploy" src="https://github.com/MuCloudOfficial/mucloudofficial.github.io/actions/workflows/main.yml/badge.svg">
</div>

---

## 简介

纯静态的个人主页：单页、无路由。头像 + 名字 + 三个外链按钮（博客 / 文档站 / GitHub），底部署名与源码链接。
中英文按浏览器语言自动切换，切换结果记在 `localStorage`，非中文一律落英文。

- 站点：https://mucloud.muverse.ltd
- 技术栈：Vue 3 + Vite 7 + Tailwind CSS 4 + TypeScript
- 构建：GitHub Actions → GitHub Pages

## 本地开发

```bash
npm ci
npm run dev        # 开发服务器
npm run typecheck  # 类型检查（vue-tsc）
npm run lint       # 静态检查（oxlint）
npm run build      # 构建到 dist/
npm run preview    # 预览构建产物
npm run format     # 格式化（prettier）
```

## 目录

```
src/
  App.vue              首页布局
  main.js              入口
  style.css            Tailwind 引入 + 全局样式与 .buttonBase
  components/
    Navigation.vue     顶部导航（窄屏折叠菜单 + 语言切换）
  shared/
    links.ts           所有外链地址
    translation.ts     中英文案（响应式，含语言切换）
public/                favicon、apple-touch-icon、manifest、robots.txt、sitemap.xml
.github/workflows/     Pages 部署（构建前跑 typecheck + lint）
```

## 约定

- 版本号写在 `package.json`，格式 `X.Y.Z-代号`（跟 MuView 一致，这里的代号是 `VoidLand`），徽章自动读它，不用手改
- 改完必须能过 `typecheck` 与 `lint`，否则 CI 不会部署
- 图片一律 WebP，提交前先压过

---

<p align="center" style="font-weight: bold">MADE IN VOID LAND | “似遗殇陌路，亦无复故缘。”</p>

<p align="center" style="font-weight: bold">Designed by Mu_Cloud</p>
