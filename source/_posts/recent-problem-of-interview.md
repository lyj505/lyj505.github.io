---
title: resent problem of interview
date: 2017-04-20 23:16:26
tags: [interview]
categories: [interview]
---

interview problem(md 忘了hexo 标签需要在数组前面加空格..)

### 面向对象的了解与应用?
[峰哥的文章](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)
有3个部分:
*   封装数据和方法。
*   构造函数的继承。
*   非构造函数的继承。


### 兼容性问题
js兼容:
1. Frame
  (1)现有问题：在IE中可以用window.top.frameId和window.top.frameName来得到该Frame所代表的Window，Firefox中只能用window.top.frameName。
  <!--more-->
  (2)解决方法：将Frame的Id和Name设置成相同，使用window.top.frameName来访问Frame。
2. (针对bug浏览器). 对document.getElementsByName的解释。
  (1)现有问题：IE中getElementsByName只会检查"input"和"img"元素，而在Firefox下会检查所有元素。
  (2)解决方法：不要使用getElementsByName检查除"input"和"img"之外的元素，如果要获得单个元素，尽量使用getElementById。

3. attachEvent和addEventListener
  (1)现有问题：IE中使用attachEvent来添加事件，Firefox中使用addEventListener。
  (2)解决方法：如下，注意事件参数的区别，一个是click，一个是onclick。
        ```if (document.attachEvent) document.attachEvent("click", clickHandler,false);
        else document.addEventListener("onclick",clickHandler);
        ```


4. const
  (1)现有问题：在IE中不能使用const关键字。如const constVar = 32;在IE中这是语法错误。
  (2)解决方法：不使用const，以var代替。
5. 多余的逗号
  (1)现有问题：firefox中对象文字常量容许多余的逗号，在IE中不允许。下面语句在IE中非法。
      var obj = { 'key' : 'aaa', }
  (2)解决方法：去掉多余逗号。

6. XML
创建XMLHttpRequest
  (1)现有问题：Firefox使用XMLHttpRequest，IE使用ActiveXObject。
  (2)解决方法：
```if (window.XMLHttpRequest) {
   req = new XMLHttpRequest();
 } else if (window.ActiveXObject) {
   req = new ActiveXObject("Microsoft.XMLHTTP");
 }
 ```


5种CSS兼容性写法:
    *， ie6,ie7可以识别；
    _和- ，  ie6可以识别；
    !important  ,表示高优先级，ie7及以上，firefox都支持，ie6认识带!important的样式属性，但不认识!important的优先级；
-webkit- ，针对safari，chrome浏览器的内核CSS写法
-moz-，针对firefox浏览器的内核CSS写法
-ms-，针对ie内核的CSS写法
-o-，针对Opera内核的CSS写法


CSS3某些新特性:
border-radius 圆角
box-shadow 阴影
Gradient 渐变
opacity 透明
rotate 旋转
font-face  字体
transitions 动态变化
transform 变形
scale 放大
transform ============》rotate==//translateY


### Jquery
jquery的绑定事件有几种方式,请举例说明其优缺点。

bind,live,delegate,on

　bind()向匹配元素添加一个或多个事件处理器。
　live() 向当前或未来的匹配元素添加一个或多个事件处理器；
  delegate() 为指定的元素（被选元素的子元素）添加一个或多个事件处理程序，并规定当这些事件发生时运行的函数。
  使用 delegate() 方法的事件处理程序适用于当前或未来的元素（比如由脚本创建的新元素）。
  on() 为指定的元素,添加一个或多个事件处理程序，并规定当这些事件发生时运行的函数。
  使用 on() 方法的事件处理程序适用于当前或未来的元素（比如由脚本创建的新元素）。



相同点：

　　1.都支持单元素多事件的绑定；空格相隔方式或者大括号替代方式;

　　2.均是通过事件冒泡方式，将事件传递到document进行事件的响应；

不同点:
2.bind()函数只能针对已经存在的元素进行事件的设置；但是live(),on(),delegate()均支持未来新添加元素的事件设置；
如果你运行了$("a").bind(…)，而后新的链接经由AJAX加入到了页面中，
则你的bind处理程序对于这些新加入的链接来说是无效的。
而另一方面live和delegate则是被绑定到另一个祖先节点上，
因此其对于任何目前或是将来存在于该祖先元素之内的元素都是有效的。

3.live()函数和delegate()函数两者类似，但是live()函数在执行速度，灵活性和CSS选择器支持方面较delegate()差些，想了解具体情况???why how to test.

后者实际上要快过前者，因为前者首先要扫描整个的文档查找所有的$("a")元素，把它们存成jQuery对象。尽管live函数仅需要把"a"作为串参数传递以用做之后的判断，但是$()函数并未知道被链接的方法将会是.live()。而另一方面，delegate方法仅需要查找并存储$(document)元素。

4.bind()支持Jquery所有版本；live()支持jquery1.8-；delegate()支持jquery1.4.2+；on()支持jquery1.7+；
bind()事件用于绑定某个事件，例如click事件。
jquery unbind()事件必须先使用bind()事件后才会生效。


### 闭包的应用与理解。
阅读underscore 源码中....
mark一下,读到305行。

### 请写出js内存泄漏的问题
1.
```
<div id="myDiv">
    <input type="button" value="Click me" id="myBtn">
</div>
<script type="text/javascript">
    var btn = document.getElementById("myBtn");
    btn.onclick = function(){
        btn.onclick = null;//处理 click事件还暴露在内存里。。
        document.getElementById("myDiv").innerHTML = "Processing...";
    }

      //  //或者采用事件委托 加个if 判断。
</script>
```


2. 对于纯粹的 ECMAScript 对象而言，只要没有其他对象引用对象 a、b，也就是说它们只是相互之间的引用，那么仍然会被垃圾收集系统识别并处理。但是，在IE浏览器中 中，如果循环引用中的任何对象是 DOM 节点或者 ActiveX 对象，垃圾收集系统则不会发现它们之间的循
环关系与系统中的其他对象是隔离的并释放它们。最终它们将被保留在内存中，直到浏览器关闭。


3. 闭包可以维持函数内局部变量，使其得不到释放。
上例定义事件回调时，由于是函数内定义函数，并且内部函数--事件回调的引用外暴了，形成了闭包

```
function bindEvent()
{
    var obj=document.createElement("XXX");
    obj.onclick=onclickHandler;
}
function onclickHandler(){
    //do something
}

//处理函数在外部,解除闭包。

//或者在定义事件处理函数的外部函数中，
//删除对dom的引用（题外，《JavaScript权威指南》中介绍过，
//闭包中，作用域中没用的属性可以删除，以减少内存消耗。）
function bindEvent()
{
    var obj=document.createElement("XXX");
    obj.onclick=function(){
        //Even if it's a empty function
    }
    obj=null; //关键
}

```

4. 某些DOM操作

 IE系列的特有问题 简单的来说就是在向不在DOM树上的DOM元素appendChild；IE7中，貌似为了改善内存泄露，IE7采用了极端的解决方案：离开页面时回收所有DOM树上的元素，其它一概不管。

5.不严谨代码造成的
```
var a,b;
  a = {p: {x: 1}};
b = a.p;
/*for(var i in a) {
    delete a[i];
}
*/


delete a.p.x;
delete a.p;



//delete a.p;
console.log(a);
console.log(b);//还是存在
//因此在JavaScript的某些实现中
//所以在销毁对象的时候，要遍历属性中属性，依次删除。
```

### 一个css的兼容性问题
当你点击一个链接或者通过Javascript定义的可点击元素的时候，它就会出现一个半透明的灰色背景。要重设这个表现，你可以设置-webkit-tap-highlight-color为任何颜色。
```
//当然也可以设为瞬时触发背景颜色为透明。

-webkit-tap-highlight-color:rgba(0,0,0,0);//transparent;
```

### JS新api
六、JS新API
新的选择器
1、document.querySelector("selector");
选择器返回第一个匹配到的元素，如未匹配到返回null
2、document.querySelectorAll("selector");
选择器返回所有匹配到的元素，如未匹配到返回空数组
3、document.getElementsByClassName("name");
选择器返回所有匹配到的元素，如未匹配到返回空数组

classList对象
在HTML5 API里，页面DOM里的每个节点上都有一个classList对象，程序员可以使用里面的方法新增、删除、修改及判断节点上的CSS类。




### css引入的方式有哪些？link和@import的区别？
1.内联方式。
2.嵌入方式。
3.链接方式。外链。
4.导入方式。。
<style>
    @import url(style.css);
</style>

两者都是外部引用CSS的方式，但是存在一定的区别：

　　区别1：link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。

　　区别2：link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。

　　区别3：link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。

　　区别4：ink支持使用Javascript控制DOM去改变样式；而@import不支持。

避免使用@import的原因很简单，因为它相当于将css放在网页内容底部。




### 请描述一下cookie,sessionStorage,localstorage的区别。
[看下这篇文章](http://www.cnblogs.com/caiyezi/p/5619506.html)

对于博文中得某一点还是有问题的
对用户访问页面的次数进行计数=====》》但是怕用户清楚缓存啊========》》》
还是得存储在数据库里--,如果对计数要求比较严谨。

### ionic遇到的坑。
1.当页面销毁的时候,需要加ng-view =====》cache==》false;
2.页面刷新dom及时性====》http cache====》false;不取缓存。
3.文字复制 css =======》加类hack一下
4.微信支付的坑。angular 单页应用 刷新页面===========》
5.微信授权地址变化=========》code 加到"#"前取不到。
6.问题:使用$rootscope存储一个新闻列表的参数。前端路由上不传id(这个是指params里的),当用户刷新页面之后,丢失了信息怎么办
其实解决方法有2种:1.是url拼接。2.将列表参数对应的id存在sessionstorage里,只有当用户关闭窗口才会丢失id。

### angularJs的坑
## 双向绑定的原理
angular并不存在定时脏检测。
angular对常用的dom事件，xhr事件等做了封装,在里面触发进入angular的digest流程。
在digest流程里面， 会从rootscope开始遍历，检查所有的watcher。
[angular性能优化](https://github.com/atian25/blog/issues/5)
(少用watch函数。。)
[关于双向绑定中文翻译](http://www.cnblogs.com/chuaWeb/p/angular-two-way-data-binding.html)
[jquery 实现双向绑定](http://www.oschina.net/translate/easy-two-way-data-binding-in-javascript)

## 执行顺序
Here's the calling order:
angularJS（1.x ===》）
1.app.config()
2.app.run()
3.directive's compile functions (if they are found in the dom)
4.app.controller()
5.directive's link functions (again, if found)


## factory service provider的区分

Say we have:
app.factory('a', fn);
app.service('b', fn);
app.provider('c', fn);
The difference between the three is that:

a's stored value comes from running fn , in other words: fn()
b’s stored value comes from newing fn, in other words: new fn()
c’s stored value comes from first getting an instance by newing fn, and then running a $get method of the instance
which means, there’s something like a cache object inside angular, whose value of each injection is only assigned once, when they've been injected the first time, and where:

cache.a = fn()
cache.b = new fn()
cache.c = (new fn()).$get()
This is why we use this in services, and define a this.$get in providers.



### 浏览器内核:
浏览器：IE，Chrome，FireFox，Safari，Opera。
内核：Trident(ie)，Gecko（火狐），Presto(Opera Software)，Webkit。

微信开发的浏览器内核  (X5 Blink内核)
android:
微信6.1版本以上的android用户，都是使用的QQ浏览器的X5内核。
5.4-6.1之间的版本，若用户安装了QQ浏览器就是使用的X5内核,若用户未安装就是使用自身系统的浏览器。
ios:
ios版微信里面用的是系统自带的
说到这里讲个小坑。。关于ios清微信浏览器缓存,可以使用以下2种方法:
1.删除微信。。。(..)
2.退账号重新登录。
3.js/css/html 生成的时候增加版本号...当然这个在某些情况下也是失效的,1,2方法最佳把。
### 关于构造函数
[构造函数](http://www.cnblogs.com/wyaocn/p/5815775.html)


### HTML5都有哪些新的API
[H5API](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5)

### 前端问题优化(来自互联网和个人经验)
1.base64编码来展示图片。就如图github 404页面那样：
你可以使用这个工具来 帮你把图片转换为base64编码的文件流，
但常规只推荐你把这种方式使用在用户重复访问量较少的页面，
因为它们虽然无须从服务端get一遍，但也无法缓 存在客户端，
导致用户每次访问页面都要重新渲染一次。
而且冗长的文件流代码会占用你页面很大的代码空间，维护起页面来估计也会挺心塞；
如果你喜欢尝鲜，可以学淘宝那样使用webp图片格式，它能很好地优化同画质下的文件大小：（ios 不支持,需要转换成jpg。。或者app端调用webview封装一个可以支持webp的图片）


2.延迟请求、异步加载脚本
解决这个问题的办法无非就是让脚本无阻塞地异步执行，比如给script标签加上defer和async属性或者动态注入脚本（可以参考这里），但这些都不是良好的解决方案，要么存在兼容性问题，要么太麻烦还无法处理依赖。
个人是推荐使用 requireJS（AMD规范）或 seaJS（CMD规范）来异步加载脚本并处理模块依赖的，
前者将“依赖前置”（预加载所有被依赖脚本模块，执行速度最快），
后者走的“依赖就近”（懒加载被依赖脚本模块，请求脚本更科学），
你可以根据项目具体需求来选择最合适的。


3.延迟请求首屏外的文件
先解释下，“首屏”指的是页面初始化时候的页面内容显示区域，也就是页面一加载，用户就首先看到的区域。
比 如像京东啊淘宝啊，对于需要滚动页面才能看到的图片内容，都做了类似lazyload的处理，这些无非都是走了代理模式的理念，但的确给用户一个错觉——这个页面更快地加载完了，因为我很快就看到了屏幕上的内容（即使我还没下拉滚动条，而页面后方的文件其实还没真正加载呢）。我们可以这样实现此方案，不依赖任何lazyload库，拿图片来做示范，我们可以这样编写首屏外的图片（假设某张图片地址是a.jpg）的img标签：
```
<img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="a.jpg">
```
如上所示，页面初步加载这张图片的时候是直接以base64的方式（当然你也可以统一使用一张占位图loading.gif来替代）来快速显示一张极小的图片的，而图片本身的真实路径是存在data-src属性内的，我们可以在页面加载结束后再向服务器请求它真实的文件并替换：


```
function init() {

    var imgDefer = document.getElementsByTagName('img');

    for (var i=0; i<imgDefer.length; i++) {

        if(imgDefer[i].getAttribute('data-src')) {

             imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        }
    }
}
window.onload = init;
```
如上是对图片的延迟加载处理，对于视频、音频文件，可以采取完全一样的原理来延迟加载，从而有效减少页面初始化等待时间。


5.走Gzip页面压缩形式、开启keep-alive连接模式等后端解决方案。
而页面阻塞才是影响用户体验的元凶，页面优化最重要的关注点就是你所看到的的东西要加载的更加快。无阻塞脚本可以分割外部脚本的下载和执行操作，这是程序员使用的hack技术，它很酷，但是会导致程序的复杂度增加，可读性下降，所以它应该是web前端架构师的技术，日常开发我们要慎用它。

6.webpack gulp压缩打包CSS,JS文件,减少http请求,background背景使用雪碧图。

7.js优化等等.....(it`s a big project);

8.angular的SEO的优化,去"#"。
### 其他问题

## 有个人最不喜欢正方形的东西。一木匠给他做了个正方形的窗户。他命令木匠重做但窗户的面积不变,这时候怎么办？
1.做两个长方形的，面积加起来是正方形的 。。这个答案比较low。
2.我的答案:卖了重新做。。。。。
3.正方形也是特殊的长方形,只要让爷爷觉得是长方形就行了。。
4.菱形有点机智。




## img的alt和title的异同。
alt 用于图片没显示时在图片显示区域显示一个说明文字。

title 表示鼠标在图片上停留时，显示一个悬浮框，其中显示的文字。
对于网站seo优化来说，title与alt还有最重要的一点：
　　搜索引擎对图片意思的判断，主要靠alt属性。
所以在图片alt属性中以简要文字说明，同时包含关键词，
也是页面优化的一部分。条件允许的话，可以在title属性里，进一步对图片说明。

## split()和join的区别。
Join 函数获取一批字符串，然后用分隔符字符串将它们联接起来，从而返回一个字符串。Split 函数获取一个字符串，然后在分隔符处将其断开，从而返回一批字符串。但是，这两个函数之间的主要区别在于 Join 可以使用任何分隔符字符串将多个字符串连接起来，而 Split 只能使用一个字符分隔符将字符串断开。
简单地说，如果你用split，是把一串字符（根据某个分隔符）分成若干个元素存放在一个数组里。而Join是把数组中的字符串连成一个长串，可以大体上认为是split的逆操作。
```
document.write(arr.join("."))
数组 ============>字符串 join()方法不改变原始数组。
```

## 事件绑定和普通事件有什么区别。
普通事件中的onclick是DOM0级事件只支持单个事件，
会被其他onclick事件覆盖,而事件绑定中的addEventListener是DOM2级事件可以添加多个事件而不用担心被覆盖.


## 事件委托是什么。(以下内容网上摘抄)
事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。那这是什么意思呢？网上的各位大牛们讲事件委托基本上都用了同一个例子，就是取快递来解释这个现象，我仔细揣摩了一下，这个例子还真是恰当，我就不去想别的例子来解释了，借花献佛，我摘过来，大家认真领会一下事件委托到底是一个什么原理：
有三个同事预计会在周一收到快递。为签收快递，有两种办法：
一是三个人在公司门口等快递；
二是委托给前台MM代为签收。
现实当中，我们大都采用委托的方案（公司也不会容忍那么多员工站在门口就为了等快递）。前台MM收到快递后，她会判断收件人是谁，然后按照收件人的要求签收，甚至代为付款。这种方案还有一个优势，那就是即使公司里来了新员工（不管多少），前台MM也会在收到寄给新员工的快递后核实并代为签收。

这里其实还有2层意思的：

第一，现在委托前台的同事是可以代为签收的，即程序中的现有的dom节点是有事件的；//代收快递的是爸爸

第二，新员工也是可以被前台MM代为签收的，即程序中新添加的dom节点也是有事件的。


每个函数都是一个对象，是对象就会占用内存，对象越多，内存占用率就越大，自然性能就越差了（内存不够用，是硬伤，哈哈），比如上面的100个li，就要占用100个内存空间，如果是1000个，10000个呢，那只能说呵呵了，如果用事件委托，那么我们就可以只对它的父级（如果只有一个父级）这一个对象进行操作，这样我们就需要一个内存空间就够了，是不是省了很多，自然性能就会更好。

事件委托是利用事件的冒泡原理来实现的，何为事件冒泡呢？就是事件从最深的节点开始，然后逐步向上传播事件，举个例子：页面上有这么一个节点树，div>ul>li>a;比如给最里面的a加一个click点击事件，那么这个事件就会一层一层的往外执行，执行顺序a>li>ul>div，有这样一个机制，那么我们给最外面的div加点击事件，那么里面的ul，li，a做点击事件的时候，都会冒泡到最外层的div上，所以都会触发，这就是事件委托，委托它们父级代为执行事件。

这里用父级ul做事件处理，当li被点击时，由于冒泡原理，事件就会冒泡到ul上，因为ul上有点击事件，所以事件就会触发，当然，这里当点击ul的时候，也是会触发的，那么问题就来了，如果我想让事件代理的效果跟直接给节点的事件效果一样怎么办，比如说只有点击li才会触发，不怕，我们有绝招：

Event对象提供了一个属性叫target，可以返回事件的目标节点，我们成为事件源，也就是说，target就可以表示为当前的事件操作的dom，但是不是真正操作dom，当然，这个是有兼容性的，标准浏览器用ev.target，IE浏览器用event.srcElement，此时只是获取了当前节点的位置，并不知道是什么节点名称，这里我们用nodeName来获取具体是什么标签名，这个返回的是一个大写的，我们需要转成小写再做比较（习惯问题）：
```
window.onload = function(){
　　var oUl = document.getElementById("ul1");
　　oUl.onclick = function(ev){
　　　　var ev = ev || window.event;
　　　　var target = ev.target || ev.srcElement;
　　　　if(target.nodeName.toLowerCase() == 'li'){
　 　　　　　　  alert(123);
　　　　　　　  alert(target.innerHTML);
　　　　}
　　}
}

```


看，上面是用事件委托的方式，新添加的子元素是带有事件效果的，我们可以发现，当用事件委托的时候，
根本就不需要去遍历元素的子节点，只需要给父级元素添加事件就好了，其他的都是在js里面的执行，
这样可以大大的减少dom操作，这才是事件委托的精髓所在。

## 用js实现冒泡排序。
1.思想：冒泡排序思想：每一次对比相邻两个数据的大小，小的排在前面，如果前面的数据比后面的大就
交换这两个数的位置要实现上述规则需要用到两层for循环，外层从第一个数到倒数第二个数，内层从外
层的后面一个数到最后一个数。

2.特点：排序算法的基础。简单实用易于理解，缺点是比较次数多，效率较低。

3.实现：

```
arr=[2,5,4,1,7,3,8,6,9,0];
var times=0;
var bubbleSort=function(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){//如果前面的数据比后面的大就交换
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        console.log("第"+(++times)+"次排序后："+arr);
        }
    }
    return arr;
}
console.log("The result is:"+bubbleSort(arr));
```

## 用js实现快速排序
1.思想：快速排序思想：先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之，放右边。左右分别用一个空数组去存储比较后的数据。最后递归执行上述操作，直到数组长度<=1;
2.特点：快速，常用。缺点是需要另外声明两个数组，浪费了内存空间资源。
3.实现：
```
arrquick=[2,5,4,1,7,3,8,6,9,0];

var times=0;
var quickSort=function(arrquick){
  console.log('arrquick.length',arrquick.length);
    //如果数组长度小于等于1无需判断直接返回即可
    if(arrquick.length<=1){
        return arrquick;
    }
    var midIndex=Math.floor(arrquick.length/2);//取基准点
    var midIndexVal=arrquick.splice(midIndex,1);//取基准点的值, //返回的一个数组
    //splice(index,1)函数可以返回数组中被删除的那个数arrquick[index+1]
    var left=[];//存放比基准点小的数组
    var right=[];//存放比基准点大的数组
    //遍历数组，进行判断分配
    for(var i=0;i<arrquick.length;i++){
        if(arrquick[i]<midIndexVal){
            left.push(arrquick[i]);//比基准点小的放在左边数组
        }
        else{
            right.push(arrquick[i]);//比基准点大的放在右边数组
        }
        console.log('left',left);
        console.log('right',right);
        console.log("第"+(++times)+"次排序后："+arrquick);
    }
    //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；
     console.log('init==============');
     console.log('quickSort(left).concat(midIndexVal,quickSort(right))')
    return quickSort(left).concat(midIndexVal,quickSort(right));
};
console.log(quickSort(arrquick)); //这里是执行函数
```
对于长度为10的数组快速排序使用了22次排序,冒泡排序使用了45次排序,快速排序的优点是快速,缺点是需要另外声明两个数组，浪费了内存空间资源。

## 严格模式下编程的好处:
1.变量限制 未定义限制

2.在定义名称的时候有两个名称是被被禁止使用的，分别是eval,和arguments两个参数。

3.当我们尝试去删除一个configurable: false的对象,不同模式下会产生什么样的情况呢。

4.当在一个函数中未定义this对象时在非严格模式下 将会返回global对象，而在严格模式下则为underfined

兼容性更好,代码更有健壮性,以后es往后扩展,不会影响。
