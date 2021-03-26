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
        },
        {
          title: 'html',
          collapsable: true,
          children: [
            ['html/1', '基础知识']
          ]
        },
        {
          title: 'css',
          collapsable: true,
          children: [
            ['css/1', '基础知识']
          ]
        },
        {
          title: 'js',
          collapsable: true,
          children: [
            ['js/1', '基础知识']
          ]
        },
        {
          title: 'interview',
          collapsable: true,
          children: [
            ['interview/1', '面试题汇总']
          ]
        },
        {
          title: '杂记',
          collapsable: true,
          path: 'other/1'
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