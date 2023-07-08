# GitHub Pages 部署

::: warning
如果你的现有项目依赖了 webpack 3.x，推荐使用 Yarn 而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。
:::

## 前提（推荐使用 yarn）

1.如果你已经安装了`npm`，那么可以使用`npm`安装`yarn`

```
npm install -g yarn
```

2.直接在官网下载安装：<https://classic.yarnpkg.com/zh-Hans/docs/install/>，注意区分开操作系统。

**查看是否安装成功**

```
yarn -v
```

**yarn 常用命名**

```
# 初始化一个项目
yarn init
# 装包
yarn add packagename
yarn add packagename --dev
# 更新包
yarn upgrade packagename
# 删除包
yarn remove packagename
# 安装所有包
yarn
yarn install
# 发布包
yarn publish
# 查看包的缓存列表
yarn cache list
# 全局安装包 == npm -g
yarn global
```

## 开始部署

首先申请并注册好 GitHub 账号，并在 GitHub 上建立仓库 **(注意仓库要选择公开的，如果选择私有的话后期部署上去需要额外交付费用的)**，此处省略。  
然后再本地初始化仓库，并关联远程仓库，这里选择使用 `SSH`
``` 
git init
git remote add origin 你的远程仓库(git@github.com:用户名/仓库名.git)
```
整个项目上传到 ` master ` 分支上，方便管理
```
git add .
git commit -m "first init"
git push -u origin master
```
注意，最好配置一个 .gitignore 文件，去掉不需要上传的文件和文件夹。

## 正式部署

1. 首先，在 `docs/.vuepress/config.js` 中配置正确的 `base`。此时的`base`路径有两种配置方式。

   - 如果你打算发布到` https://<USERNAME>.github.io/`，则可以省略这一步，因为`base`默认即是` "/"`。

   - 如果你打算发布到` https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在` https://github.com/<USERNAME>/<REPO>`），则将`base`设置为` "/<REPO>/"`。

比如我的仓库名叫：blog
```js
module.exports = {
  title: "标题",
  description: "描述",
  base: "/blog/",
};
```

2. 在你的项目中，创建一个如下的`deploy.sh`文件

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 把上面的 <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名，示例：
git push -f git@github.com:yonghjum/blog.git master:gh-pages

cd -
```

在 `package.json` 配置

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs --temp .temp",
    "docs:build": "vuepress build docs",
    "deploy": "bash deploy.sh"
  }
}
```

配置好后在`Git Bash`输入`yarn deploy`运行
![效果](https://s1.ax1x.com/2020/08/28/dIjZE4.png)

运行到这里，就已经成功了，接着返回 `GitHub` 仓库中点击 `setting`，在当前页找到 `GitHub Pages`
![效果](https://s1.ax1x.com/2020/08/28/dIj7a4.png)
![效果](https://s1.ax1x.com/2020/08/28/dIjzqO.png)

这个是我部署上去的示例：<https://songyx95.github.io/blog/>