// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '粥里有勺糖',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, 粥里有勺糖',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // 如果npx pagefind 时间过长，可以手动将其安装为项目依赖 pnpm add pagefind
  // search: false,

  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    copyright: 'MIT License | MakaSpaceX',
    icpRecord: {
      name: '京ICP备2024050915号-1',
      link: 'https://beian.miit.gov.cn/'
    },
    securityRecord: {
      name: '公网安备京2024050915号',
      link: 'https://www.beian.gov.cn/portal/index.do'
    },
  },
  authorList: [
    {
      nickname: 'makaspacex',
      url: 'https://github.com/makaspacex/makaspacex.github.io',
      des: '你的指尖,拥有改变世界的力量'
    },
    {
      nickname: 'admin',
      url: 'https://github.com/makaspacex/makaspacex.github.io',
      des: '你的指尖,拥有改变世界的力量'
    },
    {
      nickname: '黄玄',
      url: 'https://github.com/huxpro',
      des: '离开世界之前 一切都是过程'
    },

  ],
  // 默认开启
  darkTransition: false,

  // 主题色修改
  themeColor: 'vp-default',

  // 文章默认作者
  author: 'makaspacex',
  article: {
    /**
     * 是否展示文章的预计阅读时间
     */
    readingTime: true,
    /**
     * 是否隐藏文章页的封面展示
     */
    hiddenCover: true,
    /**
     * 阅读时间分析展示位置
     */
    readingTimePosition: 'inline'
  },
  // 友链
  friend: [
    {
      nickname: '粥里有勺糖',
      des: '你的指尖用于改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://sugarat.top',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],
  // 评论
  comment: {
    type: 'giscus',
    options: {
      repo: 'makaspacex/makafly-blog',
      repoId: 'R_kgDOL5rwgw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOL5rwg84CfREm',
      inputPosition: 'top',
      lang:"zh-CN",
      mapping:"title"
    },
    mobileMinify: true
  }
  // ,oml2d: {
  //   mobileDisplay: false,
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json'
  //     }
  //   ]
  // }
})

export { blogTheme }
