---
title: 入坑GIT
date: 2016-05-28 00:37:54
tags: [git,github]
categories: [git]
---

# GIT简单入门应用(for win10)
## GIT简介

Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。通过git能够上传自己的项目到github上与网友交流。传说github是世界上最大的XXX平台。。具体的教程可以点击这里[廖老师的教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/)

## 掌握三个区的概念

<img src="http://lyjnc.me/lyjblog/img/git%E6%B5%81%E7%A8%8B%E5%9B%BE.png">　

### 工作区
   顾名思义,就是平时修改文件的地方,注意一下它的位置要放在和一个隐藏的<.git>文件一个目录下。不然无法使用git bash指令。
### 暂存区
   暂时储存文件的地方,是一个过渡区,有利于文件的修改。
 <!--more-->
### 本地仓库
   本地版本库,里面有一个master分支和一个指向master的指针HEAD。

### 远程库
  即在部署在github网站上的你的私人仓库

### 基本操作：
  1.首先在工作区修改文档。
  2.将工作区的文件放进暂存区。
  ```
  $ git add   #将所有修改后的文件提交进暂存区
  ```
  ```
  $ git add <file>  #将指定文件提交进暂存区
  ```
  3.将暂存区的文件放进本地仓库。
  ```
  $ git commit -m"xxxxx"  #xxx代表这次操作的名称,最好这样提交,以便以后修改整理
  ```
  4.将本地仓库的文件放进远程库。
  ```
  $git push origin master  #将本地主分支上传到远程主分支
  ```

### 查询状态
  1.掌握仓库状态。
  ```
  $ git status
  ```
  2.查看工作区与暂存区的不同之处。
  ```
  $ git diff #注意如果修改了文件没有add提交到暂存区,是不会有区别的
  ```
  3.查看工作区与本地仓库的不同之处。
  ```
  $ git diff HEAD #注意当文件add到暂存区后,才会出现区别
  ```
  4.比较暂存区和版本库差异
  ```
  $ git diff --cached
   ```
  5.查看历史记录。
  ```
  $ git log
  ```
  6.查看历史提交对应的id数。
  ```
  $ git reflog
  ```
  7.查看远程库
  ```
  $ git remote origin
  ```
  8.显示远程库详细消息。
  ```
  $ git remote -v
  ```
  9.查看标签
  ```
  $ git tag
  ```

### 删除文件
   1.从工作区删除文件。直接手动删除。
   2.从暂存区和工作区删除文件。
  ```
  $ git rm <file> #删除2个区的文件
  ```
   3.强制删除文件
    ```
    $ git rm -f <file>
    ```

### 恢复删除的文件
1.如果删除了工作区的文件,当时可以"ctrl+z"撤销行为,还有一种就是:
```
    $ git checkout --<file>
```
2.当删除了工作区和暂存区的文件,使用:
```
    $ git reset HEAD --<file>
```
3.补充一点,空格位置不同,返回的git记忆文件也不同,如果要消除git diff引起的差异,则将空格一起删掉,切记调试的时候点击文本的任意地方,最好点击文本条。

### 版本跳转
 1.如果你将本地版本库的文件删除了,
    ```
    git reset --hard HEAD^  #回到上一个版本
    git reset --hard HEAD^^  #回到上上一个版本
    ```
2.如果想在任意版本穿梭
    ```
    git reset --hard 7位id数  #在查询状态里可以查到id数(随即的七位字符,对应的)
    ```

### 克隆远程库

1.当你设置了本机的ssh并且将ssh设置在你的github上后,就可以不用输入密码随意的从本机提交文件到远程库。
2.克隆,Git支持多种协议，包括https，但通过ssh支持的原生git协议速度最快。
```
    $ git clone git@github.com:username/reponame.git  #修改对应的username/reponame即可
```

### 关于分支

  1.查看分支图。
  ```
  $git log --graph
  ```
  2.详细分支图。
  ```
  $ git log --graph --pretty=oneline --abbrev-commit
  ```
  3.查看各个分支的名称,及当前分支。
  ```
  $ git branch
  ```
  4.常见并切换分支
  ```
  $ git checkout -b dev #创建分支dev并切换到dev
  ```
  5.将分支切换到master
  ```
  $ git checkout master
  ```
  4.关于合并分支：
  1.如果只修改一个分支,可以将分支的内容add,commit之后,然后将分支的内容合并到master上面。直接
  ```
  $git merge dev    #分支名字随便取,当然合并的时候,是要切在master分支上的
  ```
  注意前提条件,只修改一个分支。会出现:Fast-forward,这种方法是快速合并。这样而且不会出现冲突。
  2.在修改一个分支的同时,又修改master分支,在两者提交的时候不会出现问题,但是当你切到master分支，准备合并新的分支的时候,会出现冲突,如何解决呢,就是当你点开你修改的文件,再加一句修改的语句,再提交,就ok了。
  3.关于快速合并模式有它的弊端,即在这种模式下,不会有分支信息。如果使用普通模式(--no--ff),则Git在合并的时候,从分支历史上可以看出分支信息。假设创建一个分支,并修改了一个文件的内容,提交之后,切回master分支,准备合并新的分支使用:
  ```
  $ git merge --no-ff -m "XXXX" dev  #随便取的分支名
  ```
  这样就会显示分支提交合并的过程,有利于查看修改bug

   <img src="http://lyjnc.me/lyjblog/img/%E5%90%88%E5%B9%B6%E5%88%86%E6%94%AF%E6%96%B9%E6%B3%95.png">
   这个图左边的是FF方法合并分支,右边的是普通的方法合并分支。
  4.当你正在修改分支dev的时候,又要修改另外一个分支,而你又不想提交dev分支,怎么办？
  ```
  $ git stash    #将工作环境储存起来
  ```
   当你修改完另外一个分支之后,切换回master,将分支合并,删除这个修改的分支。然后切换成储存起来的dev分支,先查看环境：
   ```
   $ git stash list  #会出现stash@{0}:XXXX
   ```
   ```
   $ git stash pop  #恢复到之前的工作状态
   ```

  5.有时删分支的时候会出现问题,需要强行删除分支。
  ```
  $git branch -D XXX
  ```
  6.推送远程分支。
  ```
  $ git push origin XXX
  ```
  7.推送master分支。
 ```
 $ git push origin master
 ```
  8.远程分支如何删除。
```
git push origin :要删除的远程分支名字
```


### 关于标签
  1.查看ID标签图
  ```
  $ git log --pretty=oneline --abbrev-commit
   ```
  2.给不同版本的本地库打标签
  ```
  $ git tag v0.8 10e91b7    #这只是举个例子
  ```
  3.删除本地标签
  ```
  $ git tag -d v0.1
  ```
  4.删除远程标签
```
git push origin --delete tag <tagname>

```