---
title: flex布局小结(1)
date: 2016-05-30 01:18:06
tags: [页面布局,flex]
categories: [flex布局]
---

# flex布局
## 基础要点
1.一般来说flex布局注意父元素和子元素的关系,父元素为容器元素(container),子元素为项目元素(items),添加个语义。
2.注意,设为Flex布局以后,子元素的float、clear和vertical-align属性将失效。
3.flex属性是flex-grow,flew-shrink和flex-basis的简写。默认值为0 1 auto;
  flex属性值是1时,     flex-grow、flex-shrink、flex-basis分别为1 1 0%;
  flex属性值是auto时,  flex-grow、flex-shrink、flex-basis分别为1 1 auto;
  flex属性值是none时候,flex-grow、flex-shrink、flex-basis分别为0 0 auto。
  <!--more-->
* flex-grow,在items没有充满container时去充满
* flex-shrink,在item充满container,将items缩小
* grown_width=container_blank×(item的flex-grow/items的flex-grow)
* shrunk_width=overflow_blank×(item的flex-shrink/items的flex-shrink)
* flex-basis 指定初始化时候的item宽度,即mainsize。
* 有一点有点疑惑就是不知道如何计算初始化的crosssize即在交叉轴上的长度。

4.上[caniuse](http://caniuse.com/#search=flex)上就可以查到哪些版本的浏览器支持flex的对应的属性,哪些版本支持前缀hack之后的属性。在IE规范更改了他的语法,因此需要使用不同的语法。chrome某些版本需要加前缀"-webkit",而Firefox和Safari也是某些版本需要加浅醉,Firefox已更新为最新的规范,但时,在实际项目中最好不要用最新的规范,直到它稳定了,再使用。
5.这里介绍一个sublime的神器,autoprefixed,安装好插件后,选中需要加前缀的地方,ctrl+shift+p,输入auto+pre[模糊搜索],点击,就可以快速地帮你补全前缀了。
6.关于flex 缺省的 auto 跟 0 到底有何区别,留一篇博文[小戳这儿](https://segmentfault.com/a/1190000004288826)。
7.旧版要求伸缩元素(flex-item)必须是块级元素,所以 inline 元素需要设置 display: block,才可以正常显示。
8.而新版的伸缩元素(flex-item)不必要是块级元素,例如span这样的元素不用设置成块级元素。
9.旧版的弹性盒子参考张鑫旭老师的文章[点这](http://www.zhangxinxu.com/wordpress/2010/12/css-box-flex%E5%B1%9E%E6%80%A7%EF%BC%8C%E7%84%B6%E5%90%8E%E5%BC%B9%E6%80%A7%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E7%AE%80%E4%BB%8B/)。
10.[flex布局的历史演变](http://www.tuicool.com/articles/Afq6Bzq)
