module.exports = {
    title: '余温无痕个人博客',
    description: '', //描述
    dest: './docs/.vuepress/dist', 
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/blog/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: 'External', link: 'https://www.baidu.com' },
        ],
        sidebarDepth: 2, // 侧边栏显示2级
        sidebar: [
            {
                title: '指南',
                collapsable: false,
                children: ['/guide/', '/guide/guide-about', '/guide/md-study', '/guide/vue-press-study', '/guide/bushu'],
            },
            {
                title: '文章',
                collapsable: false,
                children: ['/articles/git-about','/articles/vue-about', '/articles/xcx-about', '/articles/css-about','/articles/js-about'],
            },
        ]
    }
}