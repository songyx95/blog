# vuePress学习
::: warning 注意 
请确保你的Node.js版本 >= 8
:::

查看Node.js版本
``` sh
node -v
```

## 全局安装

``` sh
#安装  
yarn global add vuepress # 或者：npm install -g vuepress
```

## 局部安装（推荐）

``` sh
yarn add -D vuepress # npm install -D vuepress
```

::: warning 注意
如果你的现有项目依赖了 webpack 3.x，我们推荐使用 Yarn 而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树
:::

``` js
//查看webpack 版本信息
$ npm info webpack
//安装指定版本
$ npm install webpack@1.31.x --save-dev
```

### 创建项目  
选择好项目文件存放位置之后，开始创建，即可右键手动新建文件夹，也可使用mkdir命令创建  

``` sh
#创建vuepress-demo并进入该文件目录下
mkdir vuepress-demo && cd vuepress-demo  

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

#初始化目录，建立并编辑 package.json
使用 npm init 或 npm init -y
```

用编辑器打开package.json，修改脚本内容，

``` json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

在vuepress-demo文件夹中继续创建文件夹和文件
1.新建 `docs` 文件夹，再在docs中创建 `.vuepress ` 文件夹，在`.vuepress`中创建 ` public ` 文件夹和 `config.js` 文件，最终项目结构如下所示：

```
├─ docs
│  ├─ README.md
│  └─ .vuepress
|     └─ public
│     └─ config.js
└─ package.json
```

在 config.js 文件中配置网站标题、描述、主题等信息

``` js
module.exports = {
    title: '博客',
    description: '', //描述
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    dest: './docs/.vuepress/dist',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/guide/' },
        ],
        sidebarDepth: 2, // 侧边栏显示2级
    }
}
```
修改 `docs` 根目录下的 `README.md`

``` md
---
home: true
heroImage: /logo.jpg
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2020-present 
---
```

### 运行项目
``` 
npm run docs:dev
```

运行上述代码，最后会提示预览的网址http://localhost:8080/

## 项目配置

### 侧边栏导航配置
1.在 `docs` 下新建一个 `guide` 文件夹，然后在新建 `README.md` 、 `demo-one.md` 、 `demo-two.md` 文件

```
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
|  └─ guide
|     └─ README.md
|     └─ demo-one.md
|     └─ demo-two.md
└─ package.json
```

在 `guide` 目录下的 `README.md` 中编写

``` md
# 前言
闲暇时间编写，用来记录一些学习心得和一些问题的处理办法
```

在 `demo-one.md` 和 `demo-two.md` 中分别编辑

``` md
demo-one.md
# 关于博主

demo-two.md
# Markdown学习心得
```

在 `.vuepress` 下的 `config.js` 中配置
``` js
module.exports = {
    title: '余温无痕个人博客',
    description: '', //描述
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/guide/' },
        ],
        sidebarDepth: 2, // 侧边栏显示2级
        sidebar: [ //侧边栏
            {
                title: '指南',
                collapsable: false, //是否开启折叠，为false是强制展开
                children: ['/guide/', '/guide/demo-one', '/guide/demo-two'],
            },
        ]
    }
}
```

运行项目

``` 
npm run docs:dev
```

预览效果
![演示效果图片](/a1.jpg)

### 首页配置

``` md
---
home: true
heroImage: /logo.jpg
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2020-present 余温无痕
---
```

