module.exports = {
  title: '张佳宇的笔记',
  description: 'WEB前端工程师',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '联系我', href: 'tel:18813023154', link: 'tel:18813023154' },
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
            ['js/1', '基础知识'],
            ['js/2', '数据结构']
          ]
        },
        {
          title: 'vue',
          collapsable: true,
          children: [
            ['vue/1', '知识点'],
            ['vue/2', 'vue性能优化'],
            ['vue/page-a', 'md-demo']
          ]
        },
        {
          title: 'interview',
          collapsable: true,
          children: [
            ['interview/1', '面试题汇总'],
            ['interview/2', '快手面试题'],
            ['interview/3', '京东面试题'],
            ['interview/4', '阿里面试题']
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