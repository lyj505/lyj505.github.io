---
title: 初识Html&Css
date: 2016-05-26 23:35:44
tags: [Html,Css]
categories: [基础知识]
---

# 第一次接触Html+Css发现的问题
### 记录一下第一款ide编辑器 dreamweavers cs6

 * 在DW新建html的文件时,注意在首选参数里设置默认编码为GB312,以防乱码
 * DW自带snippet功能(自动补全)
 * 后来经[马刺哥]指引道路,换了一个编辑器sublime,简直编码神器,其实对我来说就是速度快,逼格高

### html
1. 在html中标记(标签)分为2种,单标记和双标记,对标记的要求并不是很严格。但在XHTML中,必须在自闭合标签中添加"/"闭合。对于HTML5中自闭合标签加"/"和不加"/"都符合标准。

2. 双标记可以多层嵌套,一个标记对的结束标记与最近一个标记对的开始标记配对。值得注意的是,标记对不能交叉。标记对的使用比单标记更频繁,被修饰的内容是有范围限制的,即由开始标记到结束标记这段内容表示被修饰的范围。

3. 不推荐使用b和i标签来显示黑体字和斜体,用更有语义化的 strong 和 em,如果单纯是为了样式,用css来定义样式。
<!--more-->
4. align的属性有right 、left、center、justify（两端对齐）位置两侧的引号都可有可无,为了表示真正的意思,最好是用引号包围关键字,其他的属性设置都一样。
```
<p><align="right">内容</p>
<p><align=left>内容</p>
<p><align="center">内容</p>
<p><align=justify>内容</p>
```
5. 在有序列表中还可以用其他有序符取代数字,```<ol type="#"></ol>```中的顺序可以表示为A、a、i、I等(除此之外输入任何字符串都是返回数字的排序)。

6. xmp与pre的重要区别是前者能把HTML代码看做文本,而后者会解释HTML代码。

7. 图像映射图：有时,单击同一图像中不同位置,会出现不同的链接,有矩形、圆形、多边形等[area/w3c](http://www.w3school.com.cn/tags/att_area_shape.asp)。

8. 表单控件中,action的值因动态语言不同而扩展名不同。method只能是GET和POST的一种。张表单中的form必须加action和method才可以提交。

9. embed标签可以引入多媒体。

### css
1. 内联定义样式的使用有一个好处,可以灵活地设置对象的样式,缺点是样式扩展性差。
2. 链接内部CSS,修饰范围比内联大,CSS放到html文件里,这意味着减少了一次http请求,缺点就是无法缓存。
3. CSS外链接,更有效率一张样式表可以控制更多的html页面,多一次http请求,但是可以缓存。
4. 总结一下,当页面经常访问的时候采用CSS外链接,当页面只用访问不多,比如注册页,只访问一次的,可以采用链接内部CSS。
5. padding内边距不能为负值和auto,而margin外边距则可以利用负值和auto来定位元素。
6. 列表目录符号:list-style-image(url)、list-style-position(如inside)、list-style-type(如square),可以选择的值很多。
7. 属性visibility和display都可以设置对象是否可见,当隐藏对象的时候visibility属性的hidden,会为对象保留物理空间,从滚动条可以看出来空间是存在的,但是display的none不会保存物理空间。
8. 利用clip+绝对定位可以写出五彩字体。
9. W3C规定四个伪类的声明顺序:L-V-H-A,记住2个单词love-hate。
10. img元素里的alt属性和title属性很重要,alt对搜索引擎更重要一些，在定义img标签的时候alt和title都要写全，保证各种浏览器的通用性,两者中包含的关键字，并且内容最好不一样,不要在alt和title中堆砌关键字,否则可能会导致搜索引擎的惩罚。




