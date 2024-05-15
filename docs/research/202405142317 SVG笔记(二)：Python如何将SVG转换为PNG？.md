---
title: SVG笔记(二)：Python如何将SVG转换为PNG？
lang: zh-CN
date: 2021-03-15 20:50:15
author: makaspacex
cover: https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/picgo/202405150850985.webp
tags:
- svg
---
# SVG笔记(二)：Python如何将SVG转换为PNG？
原文：https://mp.weixin.qq.com/s/Z5pGs1KbqtTMHLHF-ZikjQ

上一篇文章使用4种方法解析了SVG文件并对图形进行了复现，这一篇主要讲如何使用Python将SVG转换为PNG文件，也就是矢量图和位图的转换。
本文需要用到两个Python库：`svglib`和`cairosvg`，svglib要求**Python>=3**，cairosvg要求安装**GTK+环境**和**Python>=3.6**。

**3. SVG转换为PNG**

`3.1 svglib()`

第一种方法比较简单，直接pip就可以成功安装库。有关这个方法的具体内容可以去这个网址查看：*https://pypi.org/project/svglib/*

```bash
# pip安装svglib
pip install svglib
```

使用这个方法转换SVG文件格式到PNG也很简单：

```python
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM
#1.svglib方法
pic = svg2rlg('马.svg')
renderPM.drawToFile(pic,'svglib.png')
```

转换后的图片如下，其实就是转换了一个格式，内容没有改变。在SVG文件中，整个画布相当于是透明的，只有三个闭环图形，但是svglib()方法会**将SVG的透明底色转换成白色**：

![图片](https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/picgo/202405150850985.webp)

***\*3.2 cairosvg()\

先贴两个网址，一个是pypi官网cairosvg库的说明和介绍：*https://pypi.org/project/CairoSVG/* ，另一个是 cairosvg的官网链接，里面有GitHub链接和文档说明 ：*https://www.courtbouillon.org/cairosvg*

首先还是使用pip安装cairosvg库：

```bash
pip install cairosvg
```

cairosvg转换图片格式的代码只需要一行，也非常简单

```
import cairosvg
#2.cairosvg方法
cairosvg.svg2png(file_obj=open('马.svg'), write_to='cairosvg.png')
```

不过和svglib不同的是，cairosvg不会将透明底色转换成白色，它将SVG转换成了PNG图片之后，**图片底色仍旧是透明的**。

**3.3 方法对比**

svglib方法**安装简单**，不过会**将SVG文件透明的底色转换成为白色**。

cairosvg方法需要安装**GTK+库并配置环境**，转换成功的PNG图片更贴近原SVG，因为它**不会对透明的地方进行另外的处理**。

来看一下两种方法生成的图片对比，背景是我的电脑桌面。可以看到左边图片的背景是透明的，右边的图片背景色被填充成了白色。

![图片](https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/picgo/202405150852427.webp)

## 写在最后

这一篇比较短，方法也比较简单，同样是安装环境，这一次我就淡定了许多，可能因为写过Meteor那样的大长篇之后觉得配置环境什么的都不是事儿了吧

我之前解析SVG的时候只用了DOM方法，ElementTree只是简单试了一下，但在写第一篇的时候发现居然还有一种SAX方法？写解析`<path>`那一部分的时候无意间又发现svgpathtools也可以解析SVG？结果就是修修补补，写了一周，一不小心又写了10000+字

说实话，写得有一点累，原以为公众号就当工作记录简单写写就行了。但当我真正开始写的时候总是希望自己写得更详细一点，把前因后果，概念结论，代码分析全都包括进去，这就导致每次写的内容都很多，花的时间也很多。不过呢，我最开始写公众号就是因为工作中新东西太多，有些事情做完就完了，根本来不及复盘和总结，所以想利用写公众号来弥补一下，所以说虽然写得有点累，但也算是一直走在学习的路上吧，就是我走得有点慢

我最近又想写新的内容，什么读书笔记？电影笔记？旅行笔记？有句话这样说，你之所以烦恼是因为想得太多而写得太慢，说的就是我了。不管怎样，我终于又写完了一个主题，下一个主题我已经想好了，也是解析XML文件相关，这次是：TTF里都有什么。

