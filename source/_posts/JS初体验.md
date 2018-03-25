---
title: JS初体验
date: 2016-05-30 01:18:55
tags: [JavaScript,前端]
categories: [JavaScript]
---

# JS初体验

## 标签
* 在script标签解析章,charset不常用到,如
```
<script type="text/javaScript" src="xxx.js" charset="gb2312">
```
 一般写成:
 ```
<script type="text/javaScript">
 ```
* script标签解析中,defer:表示脚本可以延迟到文档完全被解析和显示之后再执行。因为大多浏览器不支持,所以很少用。所以一般将js的内容放在html之后:

 ```
</body>
</html>
<script type="text/javaScript">
    alert('欢迎来到JavaScript世界！');
</script>
 ```
 <!--more-->
* 如果将js的内容放在body标签内的最前端,根据渲染顺序,网页就会先解析js里的内容。
* 直接在显示了文本之后放入你要执行的脚本，逻辑性更清晰:
```
<body>
欢迎来到JavaScript世界！
<script type="text/javaScript">
    alert('欢迎来到JavaScript世界！');
</script>
</body>
</html>
```
* 如果script标签放在head与head之间，文本在body与body之间，那么网页就会先执行head与head之间的内容。
* 当然以后有script标签放在head与head之间，文本在body与body之间，但是想要先执行文本的方法，以后会提到- -..哥
* 在浏览器(仅限火狐)中输入about:config,可以调节浏览器启用或者关闭Javascript的功能。

## 语法关键保留字及变量

* 标识符:指的是变量、函数、属性的名称,或者函数的参数。标识符规则：
  1.第一字符必须是字母、下划线"_"或一个美元符号($)。
  2.其他字符可以是字母、下划线、美元符号或数字。
  3.不能把关键字、保留字、true、false和null作为标识符。
* 直接量(字面量literal):程序中直接显示出来的数据值
在ECMAScript 第三版中，像数组字面量和对象字面量的表达式也是支持的，如下：
｛x:1,y:2｝　　　对象字面量表达式
[1,2,3,4,5]　　　数组字面量表达式
* JavaScript中什么事对象: JavaScript中的所有事物都是对象:字符串、数值、数组、函数...此外,JavaScript允许自定义对象。
* 布尔值:要注意的是,这个布尔型与C/C++中的布尔型有所不同,C/C++中的布尔型除了可以使用ture或false以外,还可以使用1或0.但在javascript中只能使用true或false.
* 空值型:在javascript中空值是用null表示,null值是个特殊的值,只表示什么都没有,如果试图引用一个未经定义的变量,由于它没有值,返回值就为null值.
* 单引号和双引号表示的字符串解析方式不同，而ECMAScript中，这两种表示方法没有任何区别
但要记住的是，必须成对出现，不能穿插使用，否则会出错。

```
var boxString='李应劼'
boxString=100;
alert(boxString);

```
这种编程方式不好，因为改变不同类型的量，对于后期维护带来困难，性能不高，导致成本高。最好分成2个变量。

## 数据类型
  　　<blockquote>Ecmascript中有5种简单数据类型：Undefined(未定义)、Null(无效值)、Boolean(布尔型)、Number(数字型)、String(字符串)。还有一种复杂的Object。ECMAScript 不支持任何创建自定义类型的机制，所有值都成为以上6种数据类型之一。</blockquote>

| 字符串类型(类型返回的字符串)     | 描述      |
| -----          |:----:     |
| undefined      | 未定义    |
| boolean        | 布尔值    |
| string         | 字符串    |
| number         | 数值      |
| object         | 对象或null|
| function       | 函数      |
| 前5个是数据类型,最后一个不是,是函数类型|

*  空对象和空的对象的区别:
   空的对象，表示这个对象创建了，里面没有东西
   空对象，表示没有创建，就是一个null (null就属于Null类型)

*  null和undefined
    不同类型间比较，==之比较“转化成同一类型后的值,看"值"是否相等，===如果类型不同，其结果就是不等,但是:

```
     alert(undefined==null);
     //任何时候都不建议显式的设置一个变量为undefined，
     //但是如果保存对象的变量还没有真正保存对象，应该设置成null。
     //实际上，undefined值是派生自null值的，ECMAScript标准规定对二者进行相等性测试要返回true,和一般的判断==是不同的,是规定的

  alert(undefined===null);    // 三个等号表示恒等，所以要求数据类型也必须相等才可以，
                             //undefined数据类型是Undefined ,null 数据类型是Null，
                            //Undefined类型返回的字符串是undefined,Null类型返回的字符串是object。
                           //undefined 的值是undefined，null 的值是null，也不同

```

* 函数function
  函数不是数据类型，但是用typeof 操作符也可以用。打印出来是它function(){}本体。typeof操作符可以操作变量也可以操作自变量，虽然可以(typeof 250)这样使用，这是一个函数的用法，但是typeof是操作符而非内置函数。PS：函数function在ECMAScript中是对象，而不是一种数据类型，所以使用typeof 来区分function 和object 是非常有必要的。
  但是typeof可以操作function输出它本身，而字符串返回"数据类型"(执行了一个动作)是function。

* undefined
Undefind类型只有一个值，即特殊的undefined。

1.在使用var 声明变量，但没有对其初始化的时候这个值就是undefined。
2.给变量赋值undefined,没什么意义。
3.未定义变量,alert变量,也是undefined。这种从逻辑上思考是错误的,因为最开始Undefind是由于没有对其初始化,理应报错。所以，我们在定义变量的时候，尽可能的不要只声明，不赋值。

* null
 Null类型是一个只有一个值的数据类型，即特殊的值null。它表示一个空对象引用(指针)，而typeof操作符检测null会返回object。

* 数值型---浮点型
 ```
 var box =.8;           //有效，但不推荐此写法 CSS JS压缩的时候难道不变成.8吗？。。
 var box=12.0;          //小数点后面是0，转成为12
 var box=4.12e9;        //即4120000000   (4*10^9)
 ```
  由于保存浮点数值需要的内存空间比整型数值大两倍，因此ECMAScript会自动将可以转换为整型的浮点数值转成为整型。
  对于那些过大或过小的数值，可以用科学技术法来表示(e表示法)。用e表示该数值的前面10的指数次幂。

* NAN
即非数值(Not a Number)是一个特殊的值，这个数值用于表示一个本来要返回数值的操作数未返回数值的情况(这样就不会抛出错误了)。比如，在其他语言中，任何数值除以0都会导致错误而终止程序执行。但在ECMAScript中，会返回特殊的值，因此不会影响程序执行。非数值的性质：可以通过Number.NaN得到NaN值，任何与NaN进行运算的结果均为NaN，NaN与自身不相等(NaN不与任何值相等)

　　ECMAScript中提供了isNaN的函数判断是不是NaN类型。
isNaN()函数也适用于对象。在调用isNaN()函数过程中，首先会调用valueOf()方法，然后确定返回值是否能够转换成数值。如果不能，则基于这个返回值再调用toString()方法，再测试返回值

* 转型函数
有3个函数可以把非数值转换为数值：
Number()
parseInt()     (将字符串转换成整数)
parseFloat()  (将字符串转换成浮点数)。
Number()函数是转型函数可以用于任何数据类型，而另外两个则专门用于把字符串转换成数值。有2个特殊的：
```
alert(Number(null));      // 0,空对象返回0
alert(Number(undefined))  //NaN,undefined 返回NaN
```
如果是字符串，应该遵循以下5条规则：
1.只包含数值的字符串，会直接转换成十进制数值，如果包含前导0，即自动去掉。(0456是八进制会出问题'0456'是字符串转换成的结果就没有问题 )
```
alert(Number('456'));    //456
alert(Number('0456'));    //456
alert('0456');    //456
alert(0456);      //这个就会出问题,因为输出的不是十进制,是八进制,就会转换成302
alert(Number('070'));    //70
```
2.只包含浮点数值的字符串，会直接转换成浮点数值，如果包含前导和后导0，即自动去掉。
```
alert(Number('0.890'));    //8.9 。。经过实测并不是这样(这条有点问题)
```
3.如果字符串是空的，那么直接转换成0。
```
alert(Number(''));    //0
```
4.如果不是以上三种字符串类型，则返回NaN。
```
alert(Number('Lee123'));    //NaN
```
5.如果是对象，首先会调用valueOf()方法，然后确定返回值是否能够转换成数值。如果不能，则基于这个返回值再调用toString()方法，再测试返回值。
```
var box={
toString : function(){  //如果有valueOf : function(){} 就先调用这个
return'123';      //可以改成return 'Lee' 查看效果
}
};
alert(Number(box));     //123
```
由于Number()函数在转换字符串时比较复杂且不够合理，因此在处理整数的时候更常用的是parseInt()。

## 数值类型
### 字符串类型(string)+(object对象类型)
### 字符串类型
<h3>String 类型包含了一些特殊的字符字面量，也叫转义序列。</h3>

|    字面量      | 含义      |
| -----          |:----:     |
| \n             | 换行      |
| \t             | 制表 tab  |
| \b             | 空格   blank   |
| \f             | 进纸  formfeed      |
| \\             | 斜杠|
| \'             | 单引号      |
| \''            | 双引号      |
| \xnn           | 以十六进制代码nn表示的一个字符的(0~F)。例:\x41      |
| \unnn          | 以十六进制代码nnn表示的一个Unicode字符(0~F)。例:\u03a3         |

### ECMAScript的字符串
ECMAScript中的字符串是不可变的，也就是说，字符串一旦创建，它们的值就不能改变。要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。底层原理:
```
 var box='Mr.';
   box=box+'Lee';
   alert(box);    //打出来是Mr.Lee
//最开始定义了一个盒子里装的是Mr.然后第二步加一个'Lee'，并没有改变第一个盒子存在形式
         //只是一种形式上的相加
```

## 运算符

　　ECMA-262描述了一组用于操作数据值的运算符，包括一元运算符、布尔运算符、算数运算符、关系运算符、三元运算符、位运算符及赋值运算符

### 什么是表达式
   表达式是ECMAScript中的一个“短语”，解释器会通过计算把它转换成一个值。最简单的表达式是字面量或者变量名。
```
5.96                        //数值字面量
'Lee'                        //字符串字面量
true                        //布尔值字面量
null                        //空值字面量
/Jave/                      //正则表达式字面量
{x:1,y:2}                    //对象字面量、对象表达式
[1,2,3]                     //数组字面量、数组表达式
function(n) {return x+y;}       //函数字面量、函数表达式
box                        //变量
当然，还可以通过合并简单的表达式来创建复杂的表达式。比如：
box +5.96                    //加法运算的的表达式
typeof(box)                   //查看数据类型的表达式
box >8                       //逻辑运算表达式
通过上面的叙述，我们得知，单一的字面量和组合字面量的运算符都可称为表达式。
```
### 一元运算符
```
++box;  //把box累加一个1，相当于box=box+1
--box;   //把box累减一个1，相当于box=box-1
box++;  //同上
Box--;   //同上
```

### 算数运算符

ECMAScript定义了5个算数运算符，加减乘除求模（取余）。如果在算数运算的值不是数值，那么后台会先使用Number()转型函数将其转换为数值(隐式转换)。

1.加法
```
 var box=1+2         //等于3
 var box=1+NaN      //NaN，只要有一个NaN就为NaN
 var box=Infinity+ Infinity   //Infinity    无穷大相加还是无穷大
 var box=-Infinity+-Infinity  //-Infinity
 var box=100+’100’        //100100，字符串连接符，有字符串就不是加法
```


### 运算符中表达式与值的关系


|    表达式      | 值        |
| -----          |:----:     |
| null=undefined | true      |
| 'NaN'==NaN     | false     |
| 5=NaN          | false     |
| NaN==NaN       | false     |
| false==0       | true      |
| true==1        |   true    |
| true==2        | false     |
| undefined==0   |  false    |
| null==0        |  false    |
| '100'==100     |   true    |
| '100'===100    |   false   |

## 逻辑运算符
逻辑运算符通常用于布尔值的操作，一般和关系运算符配合使用，有三个逻辑运算符：逻辑与（AND）、逻辑或（OR）、逻辑非（NOT）。
### 逻辑与  &&
如果两边的操作数有一个操作数不是布尔值的情况下，与运算就不一定返回布尔值，此时，遵循以下规则：
1、第一个操作数是对象，则返回第二个操作数；
2、第二个操作数是对象，则第一个操作数返回true，才返回第二个操作数，否则返回false；
3、有一个操作数是null，则返回null；
4、有一个操作数是undefined，则返回undefined。

### 逻辑或   ||
如果两边的操作数有一个操作数不是布尔值的情况下，逻辑或运算就不一定返回布尔值，此时，遵循以下规则：
1.第一个操作数是对象，则返回第一个操作数。
2.第一个操作数的求值结果为false，则返回第二个操作数；
3.两个操作数都是对象，则返回第一个操作数；
4.两个操作数都是null，则返回null；
5.两个操作数都是NaN，则返回NaN；
6.两个操作数都是undefined，则返回undefined；

与逻辑与运算符相似，逻辑或运算符也是短路操作。当第一操作数的求值结果为true，就不会对第二操作数求值了。
```
var box=true||age;             //true
var box=false||age;            //出错 ，age未定义
```

### 逻辑非
逻辑非运算符可以用于任何值。无论这个值是什么数据类型，这个运算符都会返回一个布尔值。它的流程是：先将这个值转换成布尔值，然后取反，规则如下：
1.操作数是一个对象，返回false；
2.操作数是一个空字符串，返回true；
3.操作数是一个非空字符串，返回false；
4.操作数是数值0，返回true；
5.操作数是任意非0数值（包括infinity），false；
6.操作数是null，返回true；
7.操作数是NaN，返回true；
8.操作数是undefined，返回true；

使用一次逻辑非运算符，流程是将值转换成布尔值然后取反。
而使用两次逻辑非运算符就是将值转换成布尔值取反再取反，
相当于对值进行Boolean()转型函数处理
```
var box=!!0;
alert (box); //false
alert(Boolean(box));  //false
var box1=!!NaN;
alert(box11);    //false
alert(Boolean(box1));  //false
```
### 位运算
这个概念内容有点多,ECMA位运算符,详见W3C[位运算](http://www.w3school.com.cn/js/pro_js_operators_bitwise.asp)

### 其他运算符
 <h3>逗号运算符 逗号运算符可以在一条语句中执行多个操作</h3>
```
<script>
var a = 10, b = 20;
function CommaTest(){
return a++, b++, 10;
}
var c = CommaTest();
alert(a); // 返回11
alert(b); // 返回21
alert(c); // 返回10
</script>
```
