import { defineConfig } from 'vitepress'
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'

// 导入主题的配置
import sugaratThemeConfig from './sugarat-theme-config'
import sidebar from './sidebar'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'
const base = "/"
// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: sugaratThemeConfig,
  base,
  lang: 'zh-cn',
  title: '玛卡巴卡',
  titleTemplate: ':title',
  description: '使用博客主题@sugarat/theme，基于 vitepress 实现',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
  ],
  vite: {
    plugins: [pagefindPlugin()],
  },
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: '/logo.png',
    sidebar,
    // 去github上编辑
    editLink: {
      pattern:
        'https://github.com/makaspacex/makaspacex.github.io/blob/main/docs/:path',
      text: '去 GitHub 上编辑内容'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '教程',
        items: [
          { text: 'ES6教程', link: '/programer/es6/01-intro.md' },
          { text: 'Bash教程', link: '/programer/bash/01-intro' },
          { text: 'TS教程', link: '/programer/typescript/01-intro' },
          { text: 'JS教程', link: '/programer/javascript/1.1-introduction' },
        ],
      },
      { text: '关于', link: '/pages/about' },
      { text: '隐私政策', link: '/pages/private' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/makaspacex/makaspacex.github.io' }
    ],
  },
  markdown: {
    math: true,
    image: {
      lazyLoading: true
    }
  }
})
