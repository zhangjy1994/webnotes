module.exports = {
  title: '张佳宇的笔记',
  description: 'WEB前端工程师',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/views/' }
    ],
    sidebar: {
      '/views/': [
        {
          title: '前言',
          collapsable: false,
          children: ['']
        },
        {
          title: 'vue',
          collapsable: true,
          children: [
            ['vue/page-a', 'a'],
            ['vue/page-b', 'b']
          ]
        }
      ]
    },
    // sidebarDepth: 2
  },
  markdown: {
    lineNumbers: true
  },
  base: "/webnotes/"
}