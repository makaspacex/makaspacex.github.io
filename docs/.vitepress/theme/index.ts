import { BlogTheme as SugaratTheme } from "@sugarat/theme"
import type { Theme } from 'vitepress'

import elementplus from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

// 自定义样式重载
import "./style.scss"

// 自定义主题色
// import './user-theme.css'
export default {
  extends: SugaratTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(elementplus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
} satisfies Theme
