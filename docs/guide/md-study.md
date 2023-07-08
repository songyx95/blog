# Markdown学习
::: tip 提示
有些资料是借鉴和参考网上收集来的，参考地址：  
<https://www.runoob.com/markdown/md-paragraph.html>
<https://blog.csdn.net/heimu24/article/details/81189700>
:::

::: warning Markdown说明
Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。  
Markdown 语言在 2004 由约翰·格鲁伯（英语：John Gruber）创建。  
Markdown 编写的文档可以导出 HTML 、Word、图像、PDF、Epub 等多种格式的文档。  
Markdown 编写的文档后缀为 .md, .markdown。
:::

Markdown 能被使用来撰写电子书，如：Gitbook。

当前许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。例如：GitHub、简书、reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge等。

## 标题
使用 # 号标记，使用 # 号可表示 1-6 级标题，一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。

``` md
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

**效果**  
![效果图](https://s1.ax1x.com/2020/08/27/dhBVtf.jpg)

## 字体
Markdown 可以使用以下几种字体：

``` 
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
```

**效果**  
![效果图](https://s1.ax1x.com/2020/08/27/dhDbIx.jpg)

### 字体大小
size：值为从 1 - 7 的数字。浏览器默认值是 3。设置8的大小也是和7一样的
``` md
<font size=1>我是尺寸</font>
<font size=2>我是尺寸</font>
<font size=3>我是尺寸</font>
<font size=4>我是尺寸</font>
<font size=5>我是尺寸</font>
<font size=6>我是尺寸</font>
<font size=7>我是尺寸</font>
<font size=8>我是尺寸</font>
```
**效果**  
<font size=1>我是尺寸</font>  
<font size=2>我是尺寸</font>  
<font size=3>我是尺寸</font>  
<font size=4>我是尺寸</font>  
<font size=5>我是尺寸</font>  
<font size=6>我是尺寸</font>  
<font size=7>我是尺寸</font>  
<font size=8>我是尺寸</font>  

### 字体颜色

``` html
<font face="黑体">我是黑体字</font>
<font face="微软雅黑">我是微软雅黑</font>
<font face="STCAIYUN">我是华文彩云</font>
<font color=red>我是红色</font>
<font color=#008000>我是绿色</font>
<font color=Blue>我是蓝色</font>
<font face="黑体" color=green size=5>我是黑体，绿色，尺寸为5</font>
```
**<font size=4>效果</font>**  

<font face="黑体">我是黑体字</font>  
<font face="微软雅黑">我是微软雅黑</font>  
<font face="STCAIYUN">我是华文彩云</font>  
<font color=red>我是红色</font>  
<font color=#008000>我是绿色</font>  
<font color=Blue>我是蓝色</font>  
<font face="黑体" color=green size=5>我是黑体，绿色，尺寸为5</font>

### 字体背景色
由于 style 标签和标签的 style 属性不被支持，所以这里只能是借助` table, tr, td `等表格标签的` bgcolor `属性来实现背景色。故这里对于文字背景色的设置，只是将那一整行看作一个表格，更改了那个格子的背景色（bgcolor）

``` md
<table><tr><td bgcolor=yellow>背景色yellow</td></tr></table>
```

**效果**  
<table><tr><td bgcolor=yellow>背景色yellow</td></tr></table>

## 图片样式

### 插入图片
``` md
![alt 属性文本](图片地址) 
![alt 属性文本](图片地址 "可选标题")

![演示效果图片](/a1.jpg)  
![演示效果图片](http://pic11.photophoto.cn/20090626/0036036341009653_b.jpg)  

也可以<img>标签插入
<img src="http://pic11.photophoto.cn/20090626/0036036341009653_b.jpg" width="50%" height="50%">

当然，你也可以像网址那样对图片网址使用变量:
这个链接用 1 作为网址变量 [RUNOOB][1].
然后在文档的结尾为变量赋值（网址）

[1]: http://static.runoob.com/images/runoob-logo.png
```
**效果**
![演示效果图片](/a1.jpg)  

### 设置百分比

``` md
<img src="http://pic11.photophoto.cn/20090626/0036036341009653_b.jpg" width="50%" height="50%">
```

**效果**  
<img src="http://pic11.photophoto.cn/20090626/0036036341009653_b.jpg" width="50%" height="50%">

### 设置固定大小
``` md
<img src="http://pic11.photophoto.cn/20090626/0036036341009653_b.jpg" width="300" height="350" >
```
**效果**  
<img src="http://pic11.photophoto.cn/20090626/0036036341009653_b.jpg" width="300" height="350" >

### 设置水平居中
`align=xxxx`，有三种属性`left`、`right`、`center`
``` md
<div align=center><img src="http://pic11.photophoto.cn/20090626/0036036341009653_b.jpg" width="50%" height="50%"></div>
```
**效果**  
<div align=center><img src="http://pic11.photophoto.cn/20090626/0036036341009653_b.jpg" width="50%" height="50%"></div>

## 段落换行
Markdown 段落没有特殊的格式，直接编写文字就好，段落的换行是使用<font color=#3EAF7C>两个以上空格加上回车</font>。
也可以在段落后面使用<font color=#3EAF7C>一个空行</font>来表示重新开始一个段落。

## 分隔线
你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：
``` md
***

* * *

*****

- - -

----------
```

**效果** 
***

* * *

*****

- - -

----------

## Markdown 列表
Markdown 支持有序列表和无序列表。  
无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记，这些标记后面要添加一个空格，然后再填写内容：
``` md
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项

- 第一项
- 第二项
- 第三项
```

**效果** 
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项

- 第一项
- 第二项
- 第三项

**有序列表使用数字并加上 . 号来表示，如：**
``` md
1. 第一项
2. 第二项
3. 第三项
```
**效果** 
1. 第一项
2. 第二项
3. 第三项

**列表嵌套**
列表嵌套只需在子列表中的选项前面添加四个空格即可：
``` md
1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
```
**效果** 
1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素

## 区块
``` md
> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想
```
**效果** 
> 区块引用  
> 菜鸟教程  
> 学的不仅是技术更是梦想

另外区块是可以嵌套的，一个 > 符号是最外层，两个 > 符号是第一层嵌套，以此类推：
``` md
> 最外层
> > 第一层嵌套
> > > 第二层嵌套
```
**效果** 
> 最外层
> > 第一层嵌套
> > > 第二层嵌套

列表中使用区块
``` md
* 第一项
    > 菜鸟教程
    > 学的不仅是技术更是梦想
* 第二项
```
**效果** 
* 第一项
    > 菜鸟教程  
    > 学的不仅是技术更是梦想
* 第二项

## 代码块中的语法高亮
VuePress 使用了 Prism 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名。   
如果是段落上的一个函数或片段的代码可以用反引号把它包起来（`），例如：
```
`printf()` 函数
```
**效果**   
`printf()` 函数


多行以` ```,``` `分隔

``` js
//使用时，把下面注释的取消注释即可
//``` js
export default {
  name: 'MyComponent',
  // ...
}
//```
```

**效果** 
``` js
export default {
  name: 'MyComponent',
  // ...
}
```

## 代码块中的行高亮
``` js
//使用时，把下面注释的取消注释即可
//``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
//```
```
**效果** 
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 链接
``` md
CSDN：<https://blog.csdn.net/u014678583?orderby=ViewCount>

[CSDN](CSDN：<https://blog.csdn.net/u014678583?orderby=ViewCount>)
```
**效果**   
CSDN：<https://blog.csdn.net/u014678583?orderby=ViewCount>  
[CSDN](CSDN：<https://blog.csdn.net/u014678583?orderby=ViewCount>)

我们还可以通过变量来设置一个链接，变量赋值在文档末尾进行：
``` md
这个链接用 1 作为网址变量 [Google][1]
这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在文档的结尾为变量赋值（网址）

[1]: http://www.google.com/
[runoob]: http://www.runoob.com/
```

**效果**  
这个链接用 1 作为网址变量 [Google][1]  
这个链接用 runoob 作为网址变量 [Runoob][runoob]  

## 自定义容器
``` md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```
**效果** 
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

你也可以自定义块中的标题：

``` js
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
//```js，使用的时候取消注释
console.log('你好，VuePress！')
//```
:::
```

**效果** 
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

## Emoji表情
```
:tada: :100:
```
**效果**   
:tada: :100:

你可以在[这个列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)找到所有可用的 Emoji。

## 表格
Markdown 制作表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行。
``` md
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
```
**效果**   
|  表头表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
  

**我们可以设置表格的对齐方式：**
* -: 设置内容和标题栏居右对齐。
* :- 设置内容和标题栏居左对齐。
* :-: 设置内容和标题栏居中对齐。

``` md
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
  单元格 | 单元格 | 单元格 
```
**效果**   
| 左对齐左对齐 | 右对齐右对齐 | 居中对齐居中对齐 |
|:----- | ----: | :----: |
| 单元格 | 单元格 | 单元格 |
  单元格 | 单元格 | 单元格 

**语法说明**
* 1）|、-、:之间的多余空格会被忽略，不影响布局。  
* 2）默认标题栏居中对齐，内容居左对齐。  
* 3）-:表示内容和标题栏居右对齐，:-表示内容和标题栏居左对齐，:-:表示内容和标题栏居中对齐。  
* 4）内容和|之间的多余空格会被忽略，每行第一个|和最后一个|可以省略，-的数量至少有一个。

## 目录
```
[[toc]]
```
**效果**   
[[toc]]

目录（Table of Contents）的渲染可以通过 markdown.toc 选项来配置。

## 行号
在`config.js`文件中配置
``` js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```
**效果**

![效果图](https://www.vuepress.cn/line-numbers-desktop.png)

## 支持的 HTML 元素  
不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。

``` md
目前支持的 HTML 元素有：<kbd> <b> <i> <em> <sup> <sub> <br>等 ，如：

使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
```
**效果**  
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑

## 转义
Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符，Markdown 使用反斜杠转义特殊字符：
``` md
**文本加粗** 
\*\* 正常显示星号 \*\*
```

**效果**  
**文本加粗**   
\*\* 正常显示星号 \*\*

Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：
```
\   反斜线
`   反引号
*   星号
_   下划线
{}  花括号
[]  方括号
()  小括号
#   井字号
+   加号
-   减号
.   英文句点
!   感叹号
```

## 计算公式
Markdown非常好用，但是对于数学公式的实时显示有一些缺陷，如何解决这一问题呢？

**在线LaTex编辑**  
输入数学公式（使用TeX语法），比如输入

``` js
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a} //公式

//http://www.codecogs.com/eqnedit.php?latex=  在线LaTex编辑方式，后面把你的公式带上
<a href="http://www.codecogs.com/eqnedit.php?latex=x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}"  
 target="_blank"  
 >  
    <img src="http://latex.codecogs.com/gif.latex?x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}"  
    title="x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}"  
    />  
</a>
```
**效果**  
<a href="http://www.codecogs.com/eqnedit.php?latex=x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" title="x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" /></a>




[1]: http://www.google.com/
[runoob]: http://www.runoob.com/