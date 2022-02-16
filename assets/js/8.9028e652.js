(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{375:function(s,t,a){s.exports=a.p+"assets/img/pack1.64857600.png"},376:function(s,t,a){s.exports=a.p+"assets/img/pack2.30519f0f.png"},422:function(s,t,a){"use strict";a.r(t);var n=a(26),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"vue性能优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue性能优化"}},[s._v("#")]),s._v(" Vue性能优化")]),s._v(" "),n("h2",{attrs:{id:"_1-代码层优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-代码层优化"}},[s._v("#")]),s._v(" 1. 代码层优化")]),s._v(" "),n("ul",[n("li",[s._v("v-if和v-show\n"),n("ul",[n("li",[s._v("v-if适用于在运行时很少改变条件不需要频繁切换条件的场景")]),s._v(" "),n("li",[s._v("v-show适用于需要频繁切换条件的场景")])])]),s._v(" "),n("li",[s._v("computed和watch\n"),n("ul",[n("li",[s._v("computed是计算属性，依赖其他属性值，并且它的值有缓存，只有它依赖的属性值改变，下一次获取它的值才会重新计算computed的值")]),s._v(" "),n("li",[s._v("当我们需要在数据变化时执行异步或开销较大的操作时，应该使用它。它可以允许我们执行异步操作")])])]),s._v(" "),n("li",[s._v("v-for遍历必须为item设置key，并且避免同时使用v-if")]),s._v(" "),n("li",[s._v("长列表性能优化\n"),n("ul",[n("li",[s._v("有些页面是纯粹的数据展示，不会有任何变化，我们就不需要vue来数据劫持，在大量数据展示的情况下，这能很明显的减少组件初始化的时间。可以用Object.freeze方法冻结一个对象，一旦被冻结就不会被修改。")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("data")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    users"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("created")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" users "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/api/users"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("users "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("freeze")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("users"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])]),s._v(" "),n("li",[s._v("图片资源懒加载\n"),n("ul",[n("li",[s._v("npm install vue-lazyload --save-dev")])])]),s._v(" "),n("li",[s._v("事件销毁\n"),n("ul",[n("li",[s._v("如果项目内使用了addEventListener做事件监听，那必须在销毁的钩子里做事件销毁removeEventListener")]),s._v(" "),n("li",[s._v("echarts、map等实例")])])]),s._v(" "),n("li",[s._v("路由懒加载"),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("Foo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./Foo.vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" router "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VueRouter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  routes"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/foo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" component"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Foo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])]),s._v(" "),n("li",[s._v("第三方插件的按需引入\n"),n("ul",[n("li",[s._v("需要的组件引入项目，不需要的不引入。使用 babel-plugin-component插件")])])]),s._v(" "),n("li",[s._v("优化无限列表性能\n"),n("ul",[n("li",[s._v("使用vue-virtual-scroll-list 和 vue-virtual-scroller")])])]),s._v(" "),n("li",[s._v("服务端渲染ssr和预渲染\n"),n("ul",[n("li",[s._v("优点：\n"),n("ul",[n("li",[s._v("利于SEO，因SPA页面内容是通过Ajax获取的，而搜索引擎不会等待Ajax异步完成后再捕获页面内容，所以SPA页面抓不到页面Ajax获取的内容；而ssr会直接把页面返回给浏览器，搜索引擎会直接拿到页面的内容")]),s._v(" "),n("li",[s._v("更快的加载页面。SPA会等待vue编译后的js文件都下载完成才渲染页面，这些都需要时间；SSR直接由服务端渲染好页面反给浏览器，无需等待js文件。所以SSR加载页面更快")])])]),s._v(" "),n("li",[s._v("缺点：\n"),n("ul",[n("li",[s._v("更多的开发条件限制：服务端渲染只支持 beforCreate 和 created 两个钩子函数，这会导致一些外部扩展库需要特殊处理，才能在服务端渲染应用程序中运行；并且与可以部署在任何静态文件服务器上的完全静态单页面应用程序 SPA 不同，服务端渲染应用程序，需要处于 Node.js server 运行环境")]),s._v(" "),n("li",[s._v("更多的服务器负载：在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用CPU 资源，因此如果你预料在高流量环境下使用，请准备相应的服务器负载，并明智地采用缓存策略。")]),s._v(" "),n("li",[s._v("预渲染： prerender-spa-plugin")])])])])]),s._v(" "),n("li",[n("a",{attrs:{href:"https://developers.google.com/speed/pagespeed/insights/",target:"_blank",rel:"noopener noreferrer"}},[s._v("页面性能检测工具"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"_2-webpack层面的优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack层面的优化"}},[s._v("#")]),s._v(" 2. Webpack层面的优化")]),s._v(" "),n("ul",[n("li",[s._v("Webpack 对图片进行压缩\n"),n("ul",[n("li",[s._v("webpack.base.conf.js 中 url-loader 中设置 limit 大小来对图片处理，对小于 limit 的图片转化为 base64 格式")]),s._v(" "),n("li",[s._v("image-webpack-loader来压缩图片 -> npm install image-webpack-loader --save-dev")])])]),s._v(" "),n("li",[s._v("减少ES6转ES5的多余重复的代码\n"),n("ul",[n("li",[s._v("babel-plugin-transform-runtime")])])]),s._v(" "),n("li",[s._v("提取公共代码\n"),n("ul",[n("li",[n("p",[s._v("如果项目中没有去将每个页面的第三方库和公共模块提取出来，则项目会存在以下问题：")]),s._v(" "),n("ul",[n("li",[s._v("相同的资源被重复加载，浪费用户的流量和服务器的成本")]),s._v(" "),n("li",[s._v("每个页面需要加载的资源太大，导致网页首屏加载缓慢，影响用户体验")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(375),alt:"1"}}),s._v(" "),n("img",{attrs:{src:a(376),alt:"2"}})])]),s._v(" "),n("li",[n("p",[s._v("Webpack 内置了专门用于提取多个Chunk 中的公共部分的插件 CommonsChunkPlugin")])])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所有在 package.json 里面依赖的包，都会被打包进 vendor.js 这个文件中。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("optimize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CommonsChunkPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vendor'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("minChunks")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resource "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n      module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("indexOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../node_modules'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 抽取出代码模块的映射关系")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("optimize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CommonsChunkPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'manifest'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  chunks"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vendor'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])])]),s._v(" "),n("li",[s._v("模板预编译\n"),n("ul",[n("li",[s._v("vue-template-loader")])])]),s._v(" "),n("li",[s._v("提取组件的CSS")]),s._v(" "),n("li",[s._v("优化 SourceMap\n"),n("ul",[n("li",[s._v("sourceMap ，它就是为了解决不好调式代码问题的")]),s._v(" "),n("li",[s._v("开发环境推荐：cheap-module-eval-source-map"),n("br"),s._v("\n生产环境推荐：cheap-module-source-map")])])]),s._v(" "),n("li",[s._v("构建结果输出分析\n"),n("ul",[n("li",[s._v("Webpack 输出的代码可读性非常差而且文件非常大，让我们非常头疼。为了更简单、直观地分析输出结果，社区中出现了许多可视化分析工具。这些工具以图形的方式将结果更直观地展示出来，让我们快速了解问题所在")]),s._v(" "),n("li",[s._v("分析工具webpack-bundle-analyzer")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 我们在项目中 webpack.prod.conf.js 进行配置：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("build"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bundleAnalyzerReport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" BundleAnalyzerPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack-bundle-analyzer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BundleAnalyzerPlugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  webpackConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BundleAnalyzerPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行 $ npm run build \\--report 后生成分析报告")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"_3-基础的web技术优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-基础的web技术优化"}},[s._v("#")]),s._v(" 3. 基础的web技术优化")]),s._v(" "),n("ul",[n("li",[s._v("开启 gzip 压缩\n"),n("ul",[n("li",[s._v("gzip 是 GNUzip 的缩写，最早用于 UNIX 系统的文件压缩。HTTP 协议上的 gzip 编码是一种用来改进 web 应用程序性能的技术，web 服务器和客户端（浏览器）必须共同支持 gzip。目前主流的浏览器，Chrome，firefox，IE等都支持该协议。常见的服务器如 Apache，Nginx，IIS 同样支持，gzip 压缩效率非常高，通常可以达到 70% 的压缩率，也就是说，如果你的网页有 30K，压缩之后就变成了 9K 左右")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以服务端使用我们熟悉的 express 为例，开启 gzip 非常简单")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// npm install compression --save")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 逻辑代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" compressiong "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'compressiong'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("express")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("compressiong")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])]),s._v(" "),n("li",[s._v("开启http缓存")]),s._v(" "),n("li",[s._v("CDN 的使用")])])])}),[],!1,null,null,null);t.default=e.exports}}]);