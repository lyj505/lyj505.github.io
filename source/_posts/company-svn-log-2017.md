---
title: company-svn-log-2017
date: 2018-02-04 22:55:41
tags: [review]
categories: [review]
---
#2.0 version
1.mvc c# 命名空间 类 控制器 生成视图 。
2.将str dot 等模式转换成vue模板,期间有也有用到mvc一些取viewbag的小技巧  
`var openId = '@ViewBag.ClerkOpenId'`;
3.上下拉的接口初始化注意点,回调不能搞错了。
4.写了一些reset_css,满足自己业务的需求。
5.前期mock数据有点傻,最开始不知道.net访问json还需要配置一个allow json 在config里面,所以mock的data都写在页面上了,后来使用json模拟数据,再到后来模拟api,前后端分离之后,前端可以mock api接口返回数据。
6.mvc的layout还蛮好用的,可以用layout来写模板,模块化一部分代码,当然也少不了mvc的部分视图。
7.mvc的vue其实也很好用,写一个app挂载在外面,在单独的cshtml页面也不需要注册挂载点了。
8.关于字段问题,其实如果风格统一可以少很多问题,不用再人工去校验字段,很多后台都是一个sql,返回的字段不同,因为没有统一的规范,所以出现了问题,所有有时候,维护的人少,风格更加统一,
更容易写出高度维护的代码。
9.养成todo,undo,timestamp的习惯,这样更容易你回忆起写业务或者其他代码的时候。
10.不想成为api工程师啊,我的天,业务工程师,我的天,轮子工程师,貌似还可以。。。
<!--more-->
11.mui滑动的时候v-on:click失效,应该是滑动的时候禁止了click事件吧,算优化也算bug,这样的话相当于,封装了一个vue-tap组件可以在滑动的时候触发touch_start。
12.命名规范这个东西,首先我一个人做没有明确的规范,然后之前再参照各大公司fe的标准看看规范好了
13.实现点击input 不会弹出输入框的小事件。
``` 
onfocus="this.blur()" 
```
14.vs的vue也没做配置,不想折腾vs(省略写个v-on <===> "@"都会报错的),,还是vsc舒服,即使我的中文版vs已经不能正常启动express,只能靠发布挂载iis了。。(修复3,4次无果)
15.和美学有关的估计和ife还是有很大的关系,对于一个完全不懂的小白进来如何操作,如何获得最简单的操作,比如对于popover的配置,宽度的配置。animation 用了一个库,但是这个时间是固定的,因为只能写定时动画,某一个类,这个值得优化,还是少用important吧。。我的哥。闪现问题全局增加一个v-cloak就行了,相当于最开始先把dom隐藏起来,这样就不会出现模板闪现的问题。
16.对于单选框的问题,如果在外层包一层div,把事件作用到div上,这样点击一次,就会自动trigger input的click,事件委托吧。如果你把事件作用在input上相当于click了input一下,再trigger click一下,相当于
执行了2次,和本来的业务逻辑不同了。
17.obj 深浅复制,普通元素深浅复制。(undo) 
18.丢失this 
```
function bind let =》
```
19.ios和Android发送短信body的区分。
```
(data.uaInfo.versions.android ? '?':'&')+'body=亲爱的用户,您好' 
```
20.可以解除一下es6 ,7,感觉同步的await好好用啊,反之迭代器控制流程并不是这么好用？没用过。
21.看到这么多shit 业务代码真的烦,it·s fuck.
22.taobao flex.js rem2px 用起来啊哈哈哈哈,兼容性呢？(undo,最近在早读课看到一篇修复兼容性屏幕宽度的问题,有兴趣的话去看一下)

# 2.5 version
###### Sun Feb 11 10:53:33 CST 2018
1.对了哦,关于canvas合成二维码和图片的还是蛮有意思的,使用vue封装了一个组件。

```
 $('body').append("<div id='qr_app'></div>");
                $("#qr_app").append('<qrcode-modal></qrcode-modal>');
                var evalstr = 'var app = new Vue({el: "#qr_app"})';
                eval(evalstr);
```
画canvas的时候有几个注意的点:
1.1、 先根据后台生成qrurl生成二维码canvas_qr。
1.2、 自建合成图片需要的数组,将生成二维码的canvas_qr的(toDataURL)放进该数组或者对象中。
1.3、 开始canvas draw,这是个递归的draw,直到把需要合成的图片全部合成完为止。
```
//last step:
 imgPath = this.cocanvas.toDataURL("image/jpeg");
            this.cosrc = imgPath;
```
1.4、 打开二维码modal,或者开启modal动画。

5.关于层叠关系有空还是整理一下文档。(undo)

6.app.js里面封装的几个utils还是蛮好用的,分割线那个蛮好的(undo)

7.mui input 不加type 获取不到焦点。。ios。。什么设计,也修复源代码改了几个bug,没时间pull request了。。

8.遇到个坑爹的问题。。我这边mvc的项目没有转es5,我使用vue框架进行开发的时候,某一个页面新建一个vue实例的时候,在methods里面使用到了return;在后面的方法里面使用了一个let的语法。。
当时写另外一个es6的项目搞混了。。逃...然后导致编译错误,关键是没有执行该方法,不知道vue或者其他工具在这里可不可以优化,在进行编译的过程的时候,只编译需要使用到的方法,,,这个估计有点难。。
毕竟相当于要去重新遍历整个vue树及dom上的节点,才能知道,所以还是自己的失误。。还发现一个bug###### Mon Feb 12 15:50:21 CST 2018 应该是在这个1个月之前把,,,wechat pc版的内置浏览器也
不支持let 语法~~~iphone5 iphone6港版刷机王,这2个也不支持,其他的是正常的,包括安卓手机,说白了其实也是一个编译的兼容性问题。

9.滚动那个可以做个专题。。虽然说很简答,但是也反映了一定问题,写代码和思考缺少一定的结合,或者是没有一定的应急思维反应。(todo 录制代码)
大概分为2步:
9.1.等待dom元素的渲染(滚动el)
9.2.获取body或者滚动父元素的宽度。
9.3.获取滚动字体的宽度。
9.4.设置固定滚动速度。
9.5.计算滚动一圈的时间
````
parseFloat(((body_w+scroll_w)/sp).toFixed(2));
```
9.6.设置动画时间。
```
'animation-duration':scrolltime,
```
9.7.在动画时间之前可以在dom上挂一个除了时间之外的其他动画参数,当然要等时间渲染出来之后,再去渲染动画的class,这样才能保持所有手机兼容性稳定。
9.8.(todo) 删掉设置动画时间的css,ios动画兼容性问题,animation.


#scan dinner 
