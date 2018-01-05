---
title: baidu IFE
date: 2016-05-27 00:11:46
tags: [IFE]
categories: [前端学习]
---

# 关于百度IFE (HTML+Css篇)

 　　看完基础的html和css就参加了今年的百度前端学院,以下是总结的一些自己常犯或重要的知识。
 1.特性值如果有包含空格就要用引号，单双引号都可以。如果特性值是单个词就可以不用引号，但为了避免出错和易于识别一般会加上引号:
```html
<p class=foo bar> (Beware, this probably does not mean what you think it means.)```

 上面的例子就是没有加引号浏览器会错误地解析成:
 ```html
 <p class="foo" bar="">```
2.

*  &gt表示大于符号(>)
*  &lt 表示小于符号 (<)
*  &amp表示和符号(&)
*  &quot表示引用符号(")
*  &copy表示版权所有(©)[实际上直接使用这个符号到html中也是可行的]

3.可以在abbr标签中使用 title 属性，这样就能够在鼠标指针移动到abbr元素上时显示出简称/缩写的完整版本。如下：
  The <abbr title="People's Republic of China">PRC</abbr> was founded in 1949. 请把鼠标放在PRC上就能看见效果。
<!--more-->
 4.在 option 元素中使用 label 属性：
 ```
<select>
  <option label="Volvo">Volvo (Latin for "I roll")</option>
  <option label="Saab">Saab (Swedish Aeroplane AB)</option></select>
```
<select>
  <option label="Volvo">Volvo (Latin for "I roll")</option>
  <option label="Saab">Saab (Swedish Aeroplane AB)</option>
</select>
像这种看似显示的是Volvo (Latin for "I roll")，但是在网页中只会显示Volvo,显示更短的标签,关于option标签有2个属性需要注意,value和label属性,label的值定义当使用,value的值定义送往服务器的选项值。


5.这里的href="javascript:;"，其中javascript:是伪协议，它可以让我们通过一个链接来调用javascript函数.而采用这个方式 javascript:;可以实现A标签的点击事件运行时，如果页面内容很多，有滚动条时，页面不会乱跳，用户体验更好。但是我发现只要是 href="javascript:" 后面不管跟什么都防止跳转。当然用js方法也可以完成加一个onclick="return false";也可以啦。


6.给文字样式加粗可以使用font-weight: bold/bolder/具体的数字(不要加px单位)。


7.关于圣杯布局和双飞翼布局,需要三列布局，中间宽度自适应，两边定宽，这样做的优势是重要的东西放在文档流前面可以优先渲染，而双飞翼布局是对圣杯布局的一种改良。[圣杯](http://www.cnblogs.com/tinyphp/p/4742922.html)  [双飞翼](http://www.cnblogs.com/tinyphp/p/4743674.html ) 可以参照来对比异同。

8.rgba中的a为Alpha(透明度取值)[0~1],值越大越透明,若不写a的值,默认a的值为0,则为不透明。而opcity(不透明度),越大越透明,越小越不透明。。。但是2个单词意思不同,效果却相同。相当于opacity还是设置透明度，值越大越透明。但是又一定的区别,alpha通道设定透明度的时候需要单独对每一个设定，而opacity直接就运用在了整个标签上，其实这就是两者最大的区别，总结来说，opacity只能设定整个元素的透明值(设置过opacity元素里子元素具有继承性)，而alpha通道可以特定对元素的某个属性设定透明值，比如上面的背景、边框、文字等。
```-webkit-filter: brightness(0.6)```这个也可以的它和opacity的效果类似。


 9.::after是一个CSS伪元素，使用::after，你可以从CSS里往页面上新增内容(不再要在HTML里有相应的东西),虽然最终生成的东西并不是真正的DOM里的内容代码的话。


