---
title:  new work
date: 2017-05-27 21:42:02
tags: [状态]
categories: [work]
---

### 谈谈最近的工作感受

   来到新公司,由于使用的架构十分老旧,整个web的流程在老的mvc框架上,一个cshtml就有3500行左右,很难以维护,当软件需要更新或者由需求的时候,显得十分鸡肋。相比之前前后端分离的公司来说,更新迭代是一大痛点。
   我司公司的规划是,提出想用mvvm的架构去写前端,后台提供数据接口完成微信端webapp项目的重构。
   关于项目选型....记录一下坑。最开始看了国产框架mui,wxui,sui,frozenUi..等等,发现社区各种文档各种坑...尝试用mui上手写了几个demo,没有模块化开发的思想。决定使用ionic2/3+angular2/4进行开发。
   双管齐下,angularHeroDemo 和 ionicTabDemo,开始进行学习,正学得起劲,一看ionic的路由并不支持深层路由(这种说法可能有点问题,反正是无法使用angular自带的路由),对于pwa应用或者webapp来说很不友好,譬如用户需要分享一个url,由于使用ionic2的路由,会导致可能无法识别,如果做微信支付,调用微信js-sdk的api,估计也会由于路径出现问题,之前使用ng1的时候遇到过这种情况。
   所以放弃了ionic+angular2的使用,github了一下,发现有几个ui框架还是比较适合比如material design2 ,但是看了下风格和框架的重量,ui和ionic相比偏webPC,而且框架可能比较重,没有使用过,不发表意见。最终思考了,由于不会jsx的react,将目标移到vue我们伟大的国产框架身上。决定这个项目使用vux全家桶开发....至于cli和webpack等等配置,还需要不断学习。
   记录一下,今晚随即走路,竟然走回家了......
   life is not a marathon,it`s a maze.
   by the way ,,,I change my ide....study use VScode by MircroSoft.

