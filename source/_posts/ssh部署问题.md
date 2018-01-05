---
title: ssh部署问题
date: 2016-05-28 20:58:00
tags: [ssh,git]
categories: [ssh,git]
---

# SSH远程部署失败

1.本机以前有一个ssh已经远程存在github中,昨天又重新生成了一个ssh密匙,当我重新hexo g -d 远程部署博客的时候出现了以下代码:
                                <!-- more -->
```
nothing to commit, working directory clean
Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Error: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

    at ChildProcess.<anonymous> (G:\front-end Web developer\hexoblog\blog\node_modules\hexo-util\lib\spawn.js:37:17)
    at emitTwo (events.js:100:13)
    at ChildProcess.emit (events.js:185:7)
    at ChildProcess.cp.emit (G:\front-end Web developer\hexoblog\blog\node_modules\cross-spawn-async\lib\enoent.js:37:29)
    at maybeClose (internal/child_process.js:827:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:211:5)
FATAL Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

Error: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

    at ChildProcess.<anonymous> (G:\front-end Web developer\hexoblog\blog\node_modules\hexo-util\lib\spawn.js:37:17)
    at emitTwo (events.js:100:13)
    at ChildProcess.emit (events.js:185:7)
    at ChildProcess.cp.emit (G:\front-end Web developer\hexoblog\blog\node_modules\cross-spawn-async\lib\enoent.js:37:29)
    at maybeClose (internal/child_process.js:827:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:211:5)
```

顿时十脸懵逼。。。。然后一怒之下我将github上里的公钥全部删除了。。。然后在本地重新生成ssh。之后就出现下面的问题。
对本机曾配置过的SSH key进行查询。可以不用进入.ssh的目录中查询,任意一个目录输入
```
  $  ls -al ~/.ssh
```
会出现以下：github_rsa  github_rsa.pub  id_rsa  id_rsa.pub  known_hosts。即使我远程的ssh删除了,本地的还没有删除。
呃。。因为这是我配置好了的文件,我就不删除以前生成的公钥了。
默认情况下每个账户生成的秘钥位置和名称都是相同的，这样后生成的秘钥就会覆盖前面的秘钥导致其失效。前面那2个钥匙是以前生成的,打开known_hosts可以清晰地知道本地有几次ssh的生成。(换句话说就是$ ssh-keygen -t rsa 了几次)。



## 公钥与私钥
  首先我们需要区分加密和认证这两个基本概念。
　　加密是将数据资料加密，使得非法用户即使取得加密过的资料，也无法获取正确的资料内容，所以数据加密可以保护数据，防止监听攻击。其重点在于数据的安全性。身份认证是用来判断某个身份的真实性，确认身份后，系统才可以依不同的身份给予不同的权限。其重点在于用户的真实性。两者的侧重点是不同的。

## 解决过程
  1.输入$ ssh -T git@github.com  验证。
  2.出现 Permission denied (publickey)。
  3. 说明一定是公钥的配置出了问题。然后我输入ssh -T -v git@github.com 。看看具体问题。

```
  OpenSSH_7.1p1, OpenSSL 1.0.2d 9 Jul 2015
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: Connecting to github.com [192.30.252.128] port 22.
debug1: Connection established.
debug1: identity file /c/Users/taylorlovepeace/.ssh/id_rsa type 1
debug1: key_load_public: No such file or directory
debug1: identity file /c/Users/taylorlovepeace/.ssh/id_rsa-cert type -1
debug1: key_load_public: No such file or directory
debug1: identity file /c/Users/taylorlovepeace/.ssh/id_dsa type -1
debug1: key_load_public: No such file or directory
debug1: identity file /c/Users/taylorlovepeace/.ssh/id_dsa-cert type -1
debug1: key_load_public: No such file or directory
debug1: identity file /c/Users/taylorlovepeace/.ssh/id_ecdsa type -1
debug1: key_load_public: No such file or directory
debug1: identity file /c/Users/taylorlovepeace/.ssh/id_ecdsa-cert type -1
debug1: key_load_public: No such file or directory
debug1: identity file /c/Users/taylorlovepeace/.ssh/id_ed25519 type -1
debug1: key_load_public: No such file or directory
debug1: identity file /c/Users/taylorlovepeace/.ssh/id_ed25519-cert type -1
debug1: Enabling compatibility mode for protocol 2.0
debug1: Local version string SSH-2.0-OpenSSH_7.1
debug1: Remote protocol version 2.0, remote software version libssh-0.7.0
debug1: no match: libssh-0.7.0
debug1: Authenticating to github.com:22 as 'git'
debug1: SSH2_MSG_KEXINIT sent
debug1: SSH2_MSG_KEXINIT received
debug1: kex: server->client chacha20-poly1305@openssh.com <implicit> none
debug1: kex: client->server chacha20-poly1305@openssh.com <implicit> none
debug1: expecting SSH2_MSG_KEX_ECDH_REPLY
debug1: Server host key: ssh-rsa SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8
debug1: Host 'github.com' is known and matches the RSA host key.
debug1: Found key in /c/Users/taylorlovepeace/.ssh/known_hosts:1
debug1: SSH2_MSG_NEWKEYS sent
debug1: expecting SSH2_MSG_NEWKEYS
debug1: SSH2_MSG_NEWKEYS received
debug1: Roaming not allowed by server
debug1: SSH2_MSG_SERVICE_REQUEST sent
debug1: SSH2_MSG_SERVICE_ACCEPT received
debug1: Authentications that can continue: publickey
debug1: Next authentication method: publickey
debug1: Offering RSA public key: /c/Users/taylorlovepeace/.ssh/id_rsa
debug1: Authentications that can continue: publickey
debug1: Trying private key: /c/Users/taylorlovepeace/.ssh/id_dsa
debug1: Trying private key: /c/Users/taylorlovepeace/.ssh/id_ecdsa
debug1: Trying private key: /c/Users/taylorlovepeace/.ssh/id_ed25519
debug1: No more authentication methods to try.
Permission denied (publickey).
```
4.发现它一直在查找id_dsa、
id_ecdsa、id_ed25519这三个文件,然后出现错误。因为远程的被我删除了,本地的.ssh文件也被我删除了,都查询不到了。


首先 在本机上电脑创建ssh：
```
$ ssh-keygen -t rsa
```
为什么会出现覆盖的情况呢？实际上是ssh的名字设置成相同了,所以内容会在相同路径下的.ssh文件下的公钥里进行覆盖,那么如何设置。

### 方法1
ssh-keygen生成ssh 密钥的时候，会出现:
Enter file in which to save the key (/c/Users/taylorlovepeace/.ssh/id_rsa):
Enter file in which to save the key ("当前所在路径"): "取个名字"
这里随便起一个名字，这样问题就出来了，你起的这个名字没有和ssh内设定的名字保持一致，所以使用命令

```
    $ ssh -T git@github.com
```
会报错 Permission denied (publickey)。
   解决方法:
1)    给文件起名字的时候使用 'id_rsa' 这个名字

2)    如果亲非要自己取名子，那就使用

ssh-add ~/.ssh/你的名字
将自己起的名字加入到ssh中这样再使用
ssh -T git@github.com 就会看到你想要的效果了。

。。呃,这个方法我最开始也没弄清楚到底怎么做,最后还是失败了,但后来整理的时候,觉得原理是对的,留下来先。
通过下面的方法
### 方法2

在stackoverflow上找到一个方法,具体的戳[这里](http://stackoverflow.com/questions/2643502/git-permission-denied-publickey)解决了问题

```cpp
First start by setting up your own public/private key pair set. This can use either DSA or RSA, so basically any key you setup will work. On most systems you can use ssh-keygen.

First you'll want to cd into your .ssh directory. Open up the terminal and run:
cd ~/.ssh && ssh-keygen
Next you need to copy this to your clipboard.
On OS X run: cat id_rsa.pub | pbcopy
On Linux run: cat id_rsa.pub | xclip
On Windows (via Cygwin/Git Bash) run: cat id_rsa.pub | clip
Add your key to your account via the website.
Finally setup your .gitconfig.
git config --global user.name "bob"
git config --global user.email bob@... (don't forget to restart your command line to make sure the config is reloaded)
Thats it you should be good to clone and checkout.
```

当然首先也要和上面一样重新建一个新的ssh
四部曲(实际上是三步)：
1. cd/到.ssh的第一级目录。 打开你的终端,我理解成win10下的git bash
2.将cat id_rsa.pub | clip 复制在你的剪切板里....好像并没有粘贴 。。。#后来搞懂它的意思了,实际上时一个命令但是在.ssh第一级目录下,打开gitbash,输入这段代码,就可以自动复制到剪切板里。。多么快？。。。
3.然后将id_rsa.pub 里的内容放到github你对应账号里的新添加的ssh里,title可以随便设置。
4.最后在git bash里输入对应的git config --global user.name ; git config --global user.email就成功了,
当你再次输入
  ```
  $ ssh -T git@github.com
  ```
  就会出现你最想看到的画面:
  Hi lyj505! You've successfully authenticated, but GitHub does not provide shell access.
  其实原理就相当于重新建一个SSH重新配置一次,且正确设置公钥的名字,就能解决问题。

### 方法3
  呃,由于博主的百度云过期了。。我也没有尝试恢复以前的版本解决问题
  [参考](http://www.cognize.me/2015/08/22/msysgiterror/#)

## 结果

最后显示的是：
 ```
Branch master set up to track remote branch master from git@github.com:lyj505/lyj505.github.io.git.
To git@github.com:lyj505/lyj505.github.io.git
 + cdbf547...e91a020 HEAD -> master (forced update)
INFO  Deploy done: git

 ```

## 总结一下
 1.首先我查询了下我的git版本号(git --version) 2.5.1 win10版本的。
 2.就相当于我配置了2个SSH key,在github账号里。。经过测试本地只有一组生效,通常来说,是不同的机器/或者不同的系统生成不同的密匙,然后添加到github账户里面,都添加进github里就是免登陆。
 3.不一样的key就是给不同主机用的,我在一个电脑上添加2个sshkey当然会出现错误，其实不是这样的,是设置的时候由于名字不对或者其他原因,导致的,一台主机可以配置多个sshkey,只需要设置不同的名称。留一个地址以后要用到的时候再看看-----[电脑管理多个SSH KEY管理(for linux)](http://yijiebuyi.com/blog/f18d38eb7cfee860c117d629fdb16faf.html)、[window7下的多个SSH管理](http://www.cnblogs.com/fanyong/p/3962455.html)。
 4.默认情况下每个账户生成的秘钥位置和名称都是相同的，这样后生成的秘钥就会覆盖前面的秘钥导致其失效。
 5.id_rsa和id_rsa.pub 一个公钥对应一个私钥。
 6.注意：密码(passphrase)设为空(要求输入密码时直接按"Enter"键),以方便不输入密码确实再把生成的id_dsa.pub(公共密钥保)拷贝到你要访问的机器上去并保存为authorized_keys.我认为我们将公钥放在github的过程就是将id_dsa.pub放在github setting里的ssh配置里。

## push的时候出现的状况

### 验证是不是主人
由于之前用了一个公钥,在github里已经被我删除掉了,本地的也被最新的公钥所覆盖,所以git push 更新文件的时候会出现用户名/密码输入登录的选项。由于之前已经配置好SSH,所以现在通过几个指令让电脑认识你的分支。
1.你可以更新一下origin
怎么修改Git remote add时使用的远程仓库呢？先删后加
```
   $ git remote remove origin
   $ git remote add origin git@github.com:Username/Your_Repo_Name.git
```
之后你还需要重新设置track branch：
```
   $ git push
```
会有一个出错按照提示
```
   $ git push --set-upstream origin master
```
解释：upstream
upstream与有几个远程库没有关系，它是分支与分支之间的流通道。
The -u tells Git to remember the parameters, so that next time we can simply run git push and Git will know what to do.
    　　相当于第一次串门的时候你登了个记办了个vip。。以后再来就知道是你来了。不用脱裤子搜身了。
2.设置了之后,就可以正确地上传至远程库了(无需输入用户名和密码)。
3.有个特例,我有个文件是部署在gh-page上的,demo或者是img图像可以展示在gh-page上,在那里git push的时候,要注意是:
```
$ git remote remove origin
$ git remote add origin git@github.com:Username/Your_Repo_Name.git
之后你还需要重新设置track branch，比如：
$ git push
$ git push --set-upstream origin gh-page    ##只有这里不一样,注意区别,不然造成后果严重
```
4.以前的项目 上传的时候需要加以上以上的步骤来消除以前秘钥对远程库的链接(说法欠妥),新建的项目直接clone下来, 上传的时候直接Git push 就可以push到远程库里。








