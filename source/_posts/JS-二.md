---
title: JS(二)
date: 2016-06-02 16:18:59
tags:
categories:
---


# JS基础(二)
## 流程控制语句
### 分支语句
1. 条件分支语句  if(){}else{}
2.多重分支语句,用于多个值相等的比较。 switch(){case n: ...}

### 循环语句
1. for循环,是一种先判断,后运行的循环语句。但它具有执行循环前初始变量和定义循环后要执行代码的能力 for(;;;){}
2. for in语句,是一种精准的迭代语句，可以用来枚举对象的属性。for(x in y){};一般是迭代y里面的属性
3.while语句,一种先判断，后运行的循环语句。while(){}
4.do while语句,是一种先运行，后判断的循环语句。也就是说，不管条件是否满足，至少先运行一次循环体。do{}while()

### 控制结构
* break 和continue语句用于在循环中精确地控制代码的执行
1. continue 继续执行语句。退出当前循环，继续后面的循环。
2. break    终端执行语句。立即退出循环，强制继续执行循环后面的语句
3. return   函数返回语句。
4. throw    异常触发语句。
5. try{}catch(){}finally  异常捕获处理。


### 其他语句
with语句,将代码的作用域设置到一个特定的对象中,with(){}。
 <!--more-->
## 函数

### 函数声明
函数对任何语言来说都是一个核心的概念。通过函数可以封装任何多条语句，而且可以在任何地方、任何时候调用执行。ECMAScript中的函数使用function关键字来声明，后跟一组参数以及函数体。
```
function box(){            //函数的声明已完成;box里没有参数，就是没有参数的函数声明
alert('我只有被调用才可以执行'); //函数本身没有运行功能
}                                //必须调用才可以执行
box();                          //这样才会被调用，这个调用的位置可以放在function之前
```

### return返回值
带参和不带参的函数，都没有定义返回值，而是调用后直接执行的。实际上，任何函数都可以通过return语句跟后面的要返回来的值来实现返回值。

```
function box(){
    return 10;
    return 100;
}                    //打印出的结果是10，
 alert(box());       //当一个函数遇到第一个return就会终止后面的return
                     //即使第一个return没有数值，也会直接打出undefined
```

### arguments对象
ECMAScript函数不介意传递进来多少参数，也不会因为参数不同意而错误。实际上，函数体内可以通过arguments对象来接受传递进来的参数。利用它我们可以利用length这个属性，来智能的判断有多少参数，然后把参数进行合理的应用。


## 对象和数组
什么是对象，其实就是一种类型，即引用类型。而对象的值就是引用类型的实例。在ECMAScript中引用类型是一种数据结构，用于将数据和功能组织在一起。"它"也常被称做为类，但ECMAScript中却没有这种东西。虽然ECMAScript是一门面向对象的语言，却不具备传统面向对象语言所支持的类和接口的那个基本结构。

### Object类型
到目前为止，我们使用的引用类型最多的可能就是Object类型了。虽然Object的实例不具备多少功能，但对于在应用程序中的存储和传输数据而言，它确实是非常理想的选择。创建object类型有两种。一种是使用new运算符，一种是字面量表达法。
在实际开发过程中，一般我们更加喜欢字面量的声明方式。因为它清晰，语法代码少，而且还给人一种封装的感觉。字面量也是向函数传递大量可选参数的首选方式。

### Array类型(数组,对象类型)
除了Object类型之外，Array类型是ECMAScript最常用的类型。而且ECMAScript中的Array类型和其他语言中的数组有很大的区别。虽然数组都是有序排列，<strong>但ECMAScript中的数组每个元素可以保存任何类型。</strong>ECMAScript中数组的大小也是可以调整的。创建array类型有2种方式：第一种是new运算符。第二种是字面量。
PS:数组最多可包含4294967295个元素，超出即会发生异常。

1.使用join分隔符方法。
```
var box=['lyj',23,'计算机编程'];
alert(box.join('|'));             //lyj|23|计算机编程
```
2.输出数组内元素的方法。
```
var box=[
{
name:'lyj',
  age:23
}];
alert(box[0].age);       //输出的是数组内第一个元素的age属性值。
alert(box[0]['age']);   // 这样也可以输出23，记得要加引号,相当于获取第一个元素内有一个字符串为age的属性值。
```
3.数组的几个方法。
```
var box=['lyj',23,'计算机编程'];  //字面量声明
alert(box.push('重庆'));   //数组末尾添加一个元素，并返回数组的最新"长度"，
alert(box);           //查看数组
alert(box.pop());      //移除数组末尾元素，并返回移除的元素(最后一个)
alert(box);   //查看元素

var box=['lyj',23,'计算机编程'];  //字面量声明
box.reverse();  // 方法执行后，返回一个逆序后的数组，原数组也被逆向排序了
alert(box);
box.sort();  //从小到大排序，23，lyj，计算机编程，也是返回的一个有序数组。它不像之前字符串连接那样,要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。这个数组是直接改变了
alert(box);

var box=['lyj',23,'重庆'];
   var box2=box.concat('计算机编程');  //在后面添加的
   alert(box2);
   alert(typeof box2);     //object
   alert(box);         //原来的数组没有变化 还是之前的,上面的数组就被改变了

```
## 时间与日期
### 返回当前时间与日期
```
var box=new Date();
box1=box.getMonth()+1;
alert(box.getFullYear()+'-'+box1+'-'+box.getDate()+" "+box.getHours()+':'+box.getMinutes()+':'+box.getSeconds()+'星期'+box.getDay());

```

## 正则表达式
什么是正则表达式：它是一个描述字符模式的对象。ECMAscript的RegExp类表示正则表达式，而String和RegExp都定义了使用正则表达式进行强大的模式匹配和文本检索与替换的函数。
正则表达式主要用来验证客户端的输入数据：
用户填写完表单单击按钮之后，表单就会被发送到服务器，在服务器端通常会用PHP、ASP、.NET等服务器脚本对其进行进一步地处理，因为客户端验证，可以节约大量的服务器端的系统资源，并提供更好的用户体验
有2种格式:
```
var pattern=/box/i; //使用字面量的正则
var pattern=new RegExp('box','i');//Reg模式
方法:
alert(pattern.test(str));   //模式.测试(字符串)
alert(/Box/i.test('box'));  //显示true这种也可以
```
### 测试正则表达式
  <h2>RegExp对象的方法</h2>

|    方法        | 功能                                                               |
| -----          |:----:                                                              |
| test           | 在字符串中测试模式匹配，返回true或false（布尔类型）                |
| exec           | 在字符串中执行匹配搜索，返回结果数组（对象Object类型）或者null     |

  <h2>test()和exec()方法，String对象也提供了4个使用正则表达式的方法。</h2>

  |    方法        | 含义                                                  |
| -----          |:----:                                                   |
| match(pattern)(匹配)           | 返回pattern中的子串或null               |
| replace(pattern,replacement)(替换)           | 用replacement替换pattern  |
| search(pattern)(搜寻)           | 返回字符串中pattern开始位置            |
| split(pattern)(分离)            |  返回字符串按指定pattern拆分的数组     |


