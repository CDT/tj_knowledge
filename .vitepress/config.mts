import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "同济小本本",
  description: "在同济看病，您需要知道的一切",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '科室介绍', link: '/' },
      { text: '门诊就诊', link: '/markdown-examples' },
      { text: '住院就诊', link: '/markdown-examples' },
      { text: '医保报销', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'facebook', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
