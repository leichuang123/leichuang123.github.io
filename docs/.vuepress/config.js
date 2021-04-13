module.exports = {
    title: 'My Doc',
    description: '一个基于vuePress文档网站',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 添加网站的icon图标
        // add jquert and fancybox async添加异步执行
        ['script', { defer: 'defer', src: '/static/jquery.slim.min.js' }],
        ['script', { defer: 'defer', src: '/static/jquery.fancybox.min.js' }],
        ['link', { defer: 'defer', rel: 'stylesheet', type: 'text/css', href: '/static/jquery.fancybox.min.css' }],
    ],
    // 设置本地开发端口号
    port: 8082,
    // configureWebpack: {
    //     resolve: {
    //         // 设置路径别名，用于引入图片地址时，使用别名表示路径
    //         alias: {
    //             '@img': path.join(__dirname, '../assets/img'),
    //         },
    //     },
    // },
    base: '',
    themeConfig: {
        // 如果有新内容，则显示刷新按钮刷新页面
        serviceWorker: {
            updatePopup: true, // Boolean | Object, 默认值是 undefined.
        },
        // 启用最后更新时间
        lastUpdated: 'Last Updated',
        // 侧边栏标题显示的层数, 0:禁用标题（headers）链接， 1：提取到 h2 的标题， 2： 同时提取 h2 和 h3 标题
        sidebarDepth: 2,
        sidebar: 'auto',
        nav: [
            { text: '首页', link: '/' }, // 根路径
            { text: '目录', link: '/catalog' },
            { text: 'Bing', link: 'https://cn.bing.com/' }, // 外部链接
            // 显示下拉列表
            {
                text: '文档链接',
                items: [
                    { text: 'Vue文档', link: 'https://cn.vuejs.org/' },
                    { text: 'VuePress', link: 'https://vuepress.vuejs.org/zh/' },
                ],
            },
            // 下拉列表显示分组
            {
                text: '更多',
                items: [
                    {
                        text: '其他网站',
                        items: [
                            { text: 'Vue Scroll', link: 'https://zhuanlan.zhihu.com/p/27407024' },
                            { text: 'Vue Slot', link: 'https://juejin.cn/post/6844904185922600968#heading-1' },
                        ],
                    },
                    {
                        text: 'GitHub',
                        items: [
                            {
                                text: 'Vue Press Config',
                                link:
                                    'https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js',
                            },
                        ],
                    },
                ],
            },
        ],
        sidebar: {
            // 目录
            '/catalog': ['catalog'],
            '/doc/tool/': [
                '001-webpack教程',
                '002-webpack-require.context',
                '003-Moment日期处理类库',
                '004-prettier代码格式化工具',
            ],
        },
    },
    plugins: [['@vuepress/back-to-top', true], '@vuepress/nprogress'],
};
