---
title: Boostrap初体验
date: 2016-05-27 00:37:53
tags: [框架,boostrap]
categories: [响应式框架]
---

# 迷&体验

## 第一次接触到bs
 Boostrap 来自Twitter的某一个项目,是一个比较火的前端框架。它基于html和css和js,让开发更加快捷,看官方文档里,会发Boostrap包含了丰富的web组件,可以快速地搭建一个漂亮的网站,当然在引入BS的时候，要同时引入jquery,因为BS所有的JS插件都依赖于jQuery。
 首先在head中设置
 ```
 <meta name="viewport" content="width=device-width,initial-scale=1">
 <link href="css/bootstrap.min.css" rel="stylesheet">
 <link href="css/font-face.css" rel="stylesheet" type="text/css">
<!--[ifltIE9]>
<script
type="text/javascript"
src="scripts/html5shiv.js"></script>
<![endif]-->
  ```
  <!--more-->
 让视口的宽度等于物理设备上真实的分辨率，初始缩放比例为1，不做任何缩放。html5shiv是Html5标签结构,使用Javascript来使不支持HTML5的浏览器支持HTML标签。当然css文件引入也是不可少的。然后要在最后设置js(当然使用CDN也可以的)
 ```
 <script src="js/jquery-1.7.2.js"></script>
 <script src="js/bootstrap.min.js"></script>
 ```
## 接着开始愉快地搭建静态页面
### 首先设置顶部导航栏
 ```<nav class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation"></nav>
 ```

设置icon-bar的线条数

 ```
 <span class="icon-bar"></span>
 <span class="icon-bar"></span>
 <span class="icon-bar"></span>
 ```
 呃当时遇到一个问题,就是当点击collapse,可以展开,但是无法收回,在网上也找了方法,看了下boostrap的源码,感觉更好的方法解决。。我就添加了一段js

 ```
 <script type="text/javascript">
  $(document).ready(function() {
    $(".navbar-toggle").toggle(function() {
      $("#change_1").removeClass('in');    //注释：#change_1是加在<div class="collapse navbar-collapse"></div>这个盒子上的
    }, function() {
      $("#change_1").addClass('in');
    });
      });
  </script>

 ```
 最终可以自动展开 注释:之前引用的jquery是1.7.2版本的,还是支持toggle()方法的 新版本不支持toggle()方法了[请点击这里](http://www.ppblog.cn/jquery1-9live.html){:target="_blank"}。可以通过版本迁移或者使用if else 判断click事件也是可以的。

### 轮播效果
[官文](http://v2.bootcss.com/javascript.html#carousel){:target="_blank"}。具体的在文档中
关于轮播的符号这些,其实可以单独引用的。需要一个boostrap的font-face.css,1个fonts文件里有
glyphicons-halflings-regular.[文件名]{eot/svg/ttf/woff}等四个文件。
html：
```
  <div class="glyphicon glyphicon-chevron-right"></div>
```
css:
```
 .glyphicon-chevron-right
 {content: "\e080";}
.glyphicon-chevron-right::before
 {color: #00ffff;}
```
这样就可以轻松将Bootstrap Glyphicons 引用到你网页中。
###  12列布局
Bootstrap内置了一套响应式、移动设备优先的12列格网布局系统，它会随着屏幕设备或视口（viewport）尺寸的增加，系统会自动分为最多12列。注意一下：
 1. col-xs- 超小屏幕 手机 (<768px)
 2. col-sm- 小屏幕 平板 (≥768px)
 3. col-md- 中等屏幕 桌面显示器 (≥992px)
 4. col-lg- 大屏幕 大桌面显示器 (≥1200px)
 原理都是一样的总共12列然后来平分布局。只是如果需求不同,在不同屏幕上要求有不同的比例,就可以多加一个类来说明。
### 背景音乐
有点丑陋,这里使用的是audio标签..以后再研究啦。





