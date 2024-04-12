import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "同济小本本",
  description: "小知识库",
  themeConfig: {
    logo: '/assets/logo.png',
    nav: [
      { text: '信息化标准', link: '/informatization/' }
    ],

    sidebar: {
      '/informatization/': [
        {
          text: '电子病历基本数据集',
          link: '/informatization/emr_dataset'
        }
      ]
    }
  }
})
