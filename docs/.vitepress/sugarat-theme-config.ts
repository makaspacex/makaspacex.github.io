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
export default getThemeConfig({
  // 开启RSS支持
  // RSS,
  mermaid: false,
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
    {
      nickname: '阮一峰',
      url: 'https://www.ruanyifeng.com/',
      des: '保持专注，持续发货。尽早构建，始终构建。提高自己，编写可靠/简单/愚蠢的代码。'
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
      url: 'https://theme.sugarat.top/',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/zh/',
    },
    {
      nickname: 'Element Plus',
      des: '基于 Vue 3，面向设计师和开发者的组件库',
      avatar:
        'https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/picgo/202405171100507.png',
      url: 'https://cn.element-plus.org/zh-CN/component/overview.html',
    },
    {
      nickname: 'Vue',
      des: '渐进式JavaScript 框架',
      avatar:'https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/picgo/202405171113282.png',
      url: 'https://cn.vuejs.org/',
    },
    {
      nickname: 'Pinia',
      des: '符合直觉的Vue.js 状态管理库',
      avatar:'https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/picgo/202405171115952.png',
      url: 'https://pinia.vuejs.org/zh/',
    },
    
  ],
  // 评论
  comment: {
    type: 'giscus',
    options: {
      repo: 'makaspacex/makaspacex.github.io',
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
