interface lang{
    title_name: string
    mublog_name: string
    muprojectdoc_name: string
    mugithub_name: string
    bottom_info: string
    page_source_code: string
}

let lang_en: lang = {
    title_name: "MuCloud_Official",
    mublog_name: "MuBlog",
    muprojectdoc_name: "MuProjectDoc",
    mugithub_name: "GithubPage",
    bottom_info: "Design by Mu_Cloud | MADE IN VOID LAND | Based VUE & TS",
    page_source_code: "Page Source Code",
}

let lang_zh: lang = {
    title_name: "暮云",
    mublog_name: "暮云的博客站",
    muprojectdoc_name: "暮企划·文档站",
    mugithub_name: "暮云的Github主页",
    bottom_info: "由 Mu_Cloud 设计制作 | MADE IN VOID LAND | 基于 Vue TS",
    page_source_code: "网页源代码库",
}

const locale = window.navigator.language;
export let mulang: lang = lang_zh

let loadMuLang = () => {
    let langCode = locale.split("-")[0]
    if (langCode == "en") {
        mulang = lang_en
    } else if (langCode == "zh") {
        mulang = lang_zh
    }
}

loadMuLang()
