import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "两不疑",
  description: "结发为夫妻 恩爱两不疑",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '小栈', link: '/' },
      { text: '友联', link: '/wei1' }
    ],

    sidebar: [
      {
        text: '过去',
        items: [
          { text: '未命名1', link: '/wei1' },
          { text: '未命名2', link: '/wei2' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: '' }
    ]
  }
})
