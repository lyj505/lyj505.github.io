---
title: basic use of md
date: 2017-04-20 23:16:26
tags: [markdown]
categories: [markdown]
---

### (md 忘了hexo 标签需要空格写数组..)

This is an H1
=============

This is an H2
-------------
<!--more-->
# 这是 H1

## 这是 H2

###### 这是 H6

# 这是 H1 #

## 这是 H2 ##

### 这是 H3 ######

> ## 这是一个标题。
>
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
>
> 给出一些例子代码：
>
>     return shell_exec("echo $input | $markdown_script");


无序列表使用星号、加号或是减号作为列表标记：

*   Red
*   Green
*   Blue

等同于：

+   Red
+   Green
+   Blue


也等同于：

-   Red
-   Green
-   Blue

你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：

* * *

***

*****

- - -

---------------------------------------


强调

Markdown 使用星号（*）和底线（_）作为标记强调字词的符号，被 * 或 _ 包围的字词会被转成用 <em> 标签包围，用两个 * 或 _ 包起来的话，则会被转成 <strong>，例如：

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__


你可以随便用你喜欢的样式，唯一的限制是，你用什么符号开启标签，就要用什么符号结束。

强调也可以直接插在文字中间：

un*frigging*believable



