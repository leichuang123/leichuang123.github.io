const path = require('path');

module.exports = {
    title: 'My Doc',
    description: '一个基于vuePress文档网站',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 添加网站的icon图标
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
        [
            'link',
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css',
            },
        ],
    ],
    // 设置本地开发端口号
    port: 8082,
    configureWebpack: {
        resolve: {
            // 设置路径别名，用于引入图片地址时，使用别名表示路径
            alias: {
                '@img': path.join(__dirname, '../assets/img'),
            },
        },
    },
    base: '',
    themeConfig: {
        // 设置使用Algolia 搜索
        // algolia: {
        //     apiKey: 'eb7ed07c4a067ac8d5276f84faed7c97',
        //     indexName: 'yulilong',
        // },
        // 如果有新内容，则显示刷新按钮刷新页面
        serviceWorker: {
            updatePopup: true, // Boolean | Object, 默认值是 undefined.
        },
        // 启用最后更新时间
        lastUpdated: '文档更新时间',
        // 侧边栏标题显示的层数, 0:禁用标题（headers）链接， 1：提取到 h2 的标题， 2： 同时提取 h2 和 h3 标题
        sidebarDepth: 2,
        sidebar: 'auto',
        nav: [
            { text: '首页', link: '/' }, // 根路径
            // 显示下拉列表
            {
                text: '文档链接',
                items: [
                    { text: 'Vue文档', link: 'https://cn.vuejs.org/' },
                    {
                        text: 'VuePress',
                        items: [
                            { text: '1', link: 'https://vuepress.vuejs.org/zh/' },
                            { text: '2', link: 'https://vuepress.vuejs.org/zh/' },
                        ],
                    },
                ],
            },
        ],
        sidebar: {
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
