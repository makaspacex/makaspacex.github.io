import { BlogTheme as SugaratTheme } from "@sugarat/theme"
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import { h } from 'vue'

// 自定义样式重载
import "./style.scss"
import MyLayout from './MyLayout.vue'

export default {
  extends: SugaratTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(ElementPlus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
  Layout:MyLayout
} satisfies Theme
