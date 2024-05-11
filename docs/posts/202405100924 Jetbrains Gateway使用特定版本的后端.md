---
title: Jetbrains Gateway使用特定版本的后端
date: 2024-05-10 09:24:26
author: admin
cover: https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/uPic/VBZH0E.png
tags: 
 - jetbrains
 - pycharm
 - 远程开发
---
# Jetbrains Gateway使用特定版本的后端

pycharm更新到2024.1.1后，debug控制台无法调试代码，2024.1是正常的。但是选择后端时却没有了2024.1版本。解决办法就是使用jetbrains官方的下载程序下载好特定版本的后端，然后gateway选择的时候上传到服务器即可。

入口页面或者直接访问地址 `https://www.jetbrains.com/pycharm/download/other.html`

![](https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/uPic/RbOTP6.png)

选择版本，然后复制平台的下载链接，如 `https://download.jetbrains.com/python/pycharm-professional-2024.1.tar.gz`

![](https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/uPic/ZN6G1v.jpg)

之后gateway指定下载连接

![](https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/uPic/DR4OTA.png)

![](https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/uPic/Bi288l.png)


等待下载完成即可。


---

分割线：下面的内容适合大批量下载，简单方法见上面


官方指导教程：[完全离线模式| IntelliJ IDEA 文档 --- Fully offline mode | IntelliJ IDEA Documentation (jetbrains.com)](https://www.jetbrains.com/help/idea/fully-offline-mode.html)


### 下载Jetbrains

下载地址： `https://www.jetbrains.com/code-with-me/on-prem/#downloads`

![](https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/uPic/xYIRsg.png)


### 解压后进入bin目录

执行

```
./jetbrains-clients-downloader --products-filter PY --build-filter 241.14494.241 --platforms-filter linux-x64 --download-backends ./aaa

```


`--products-filter`刚开始只需要随便输入一个错误的，然后程序报错就会出现所有的可选项。

`--build-filter` 在这里查询 `https://www.jetbrains.com/idea/download/other.html`

![](https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/uPic/4rQwkn.png)


下载会得到一个压缩文件，然后gateway上传即可。


### Gateway选择后端时上传

![](https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/uPic/DR4OTA.png)

![](https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/uPic/ryTELd.png)


然后等待即可。