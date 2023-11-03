import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "同济小本本",
  description: "在同济看病，您需要知道的一切",
  themeConfig: {
    logo: '/assets/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '科室介绍', link: '/depts/' },
      { text: '门诊就诊', link: '/outpatient/' },
      { text: '住院就诊', link: '/inpatient/' },
      { text: '医保报销', link: '/insurance/' }
    ],

    sidebar: {
      '/depts/': [
        {
          text: '内科',
          items: [
            { text: '科室1', link: '/depts/' },
            { text: '科室2', link: '/depts/' }
          ]
        },
        {
          text: '外科',
          items: [
            { text: '科室1', link: '/depts/' },
            { text: '科室2', link: '/depts/' }
          ]
        },
        {
          text: '妇科',
          items: [
            { text: '科室1', link: '/depts/' },
            { text: '科室2', link: '/depts/' }
          ]
        },
        {
          text: '儿科',
          items: [
            { text: '科室1', link: '/depts/' },
            { text: '科室2', link: '/depts/' }
          ]
        }
      ],
      '/outpatient/': [
        {
          text: '挂号',
          items: [
            { text: '挂号1', link: '/outpatient/' },
            { text: '挂号2', link: '/outpatient/' }
          ]
        },
        {
          text: '预约检查',
          items: [
            { text: '预约检查1', link: '/outpatient/' },
            { text: '预约检查2', link: '/outpatient/' }
          ]
        },
        {
          text: '缴费',
          items: [
            { text: '缴费1', link: '/outpatient/' },
            { text: '缴费2', link: '/outpatient/' },
            { text: '退费', link: '/outpatient/refund' }
          ]
        }
      ],
      '/inpatient/': [
        {
          text: '入院',
          items: [
            { text: '入院1', link: '/inpatient/' },
            { text: '入院2', link: '/inpatient/' }
          ]
        },
        {
          text: '预约检查',
          items: [
            { text: '预约检查1', link: '/inpatient/' },
            { text: '预约检查2', link: '/inpatient/' }
          ]
        },
        {
          text: '缴费',
          items: [
            { text: '缴费1', link: '/inpatient/' },
            { text: '缴费2', link: '/inpatient/' }
          ]
        }
      ],      
      '/insurance/': [
        {
          text: '市医保',
          items: [
            { text: '市医保1', link: '/insurance/' },
            { text: '市医保2', link: '/insurance/' }
          ]
        },
        {
          text: '省医保',
          items: [
            { text: '省医保1', link: '/insurance/' },
            { text: '省医保2', link: '/insurance/' }
          ]
        },
        {
          text: '新农合',
          items: [
            { text: '新农合1', link: '/insurance/' },
            { text: '新农合2', link: '/insurance/' }
          ]
        }
      ]
    }

    // socialLinks: [
    //   { icon: 'facebook', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
