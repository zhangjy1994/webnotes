const path = require('path')
module.exports = {
  title: '张佳宇的笔记',
  description: 'WEB前端工程师',
  configureWebpack: {
    resolve: {
      alias: {
        '@imgs': path.join(__dirname ,'/public/imgs')
      }
    },
  },
  themeConfig: {
    // logo: './public/img/logo.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '联系我', href: 'tel:18813023154', link: 'tel:18813023154' },
      { text: 'Guide', link: '/views/' },
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }
    ],
    // displayAllHeaders: true, // 显示所有页面的标题链接
    sidebar: [
      // {
      //   title: '前言',
      //   collapsable: false,
      //   path: '/views/'
      // },
      {
        title: 'html',
        collapsable: true,
        path: '/views/html/',
        sidebarDepth: 1,
        children: [
          ['/views/html/1', '基础知识']
        ]
      },
      {
        title: 'css',
        collapsable: true,
        // path: '/views/css/',
        sidebarDepth: 1,
        children: [
          ['/views/css/1', '基础知识'],
          '/views/css/2',
          '/views/css/3'
        ]
      },
      {
        title: 'js',
        collapsable: true,
        // path: '/views/js/',
        sidebarDepth: 1,
        children: [
          ['/views/js/1', '基础知识'],
          ['/views/js/2', '数据结构']
        ]
      },
      {
        title: 'vue',
        collapsable: true,
        // path: '/views/vue/',
        sidebarDepth: 1,
        children: [
          ['/views/vue/1', '知识点'],
          ['/views/vue/2', 'vue性能优化'],
          '/views/vue/3'
        ]
      },
      {
        title: 'interview',
        collapsable: true,
        // path: '/views/interview/',
        sidebarDepth: 1,
        children: [
          '/views/interview/1',
          '/views/interview/2',
          '/views/interview/3',
          '/views/interview/4',
          '/views/interview/5',
          '/views/interview/demo'
        ]
      },
      {
        title: '杂记',
        collapsable: true,
        // path: '/views/other/',
        sidebarDepth: 0,
        children: [
          '/views/other/1',
          '/views/other/2'
        ]
      }
    ],
    // sidebarDepth: 2
  },
  markdown: {
    lineNumbers: true
  },
  base: "/webnotes/",
  plugins: ['@vuepress/back-to-top', '@vuepress/active-header-links','@vuepress/nprogress']
}