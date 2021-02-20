# 自用脚本 🌈

# 自用脚本 🌈

# 自用脚本 🌈

## 食用方法

### 方法一：本地安装 Node.js，下载本库脚本

- 教程请见：[EvineDeng/jd-base](https://github.com/EvineDeng/jd-base)，适用于以下系统：

  1. Armbian/OpenWrt/Debian/Ubuntu/CentOS/Fedora/RedHat 等 Linux 系统

  2. Android

  3. MacOS

### 方法二：云服务器、腾讯云函数等等

- 需自行有云服务器，云函数等
- 腾讯云云函数 [快速部署教程](tencentscf.md)（免费）
- 腾讯云云函数控制台使用 [教程说明](iCloud.md)
- 腾讯云云函数 [GitHub Action 部署教程](tencentscf.md#github-action-部署)

### 方法三：Docker（NAS 或 VPS 用户）

- 可以精确控制任务运行时间，有二种办法：[docker 办法一](https://github.com/lxk0301/jd_scripts/tree/master/docker)、[docker 办法二（和本地安装 Node.js 类似）](https://github.com/EvineDeng/jd-base)
- [环境变量](https://github.com/lxk0301/jd_scripts/blob/master/githubAction.md#%E4%B8%8B%E6%96%B9%E6%8F%90%E4%BE%9B%E4%BD%BF%E7%94%A8%E5%88%B0%E7%9A%84-secrets%E5%85%A8%E9%9B%86%E5%90%88)

#### 注：以上三种运行机制都是 Node.js，故您需仔细阅读下面几点

- 如果使用方法一与方法二，需自行提供京东 cookie 填写到 [jdCookie.js](https://github.com/lxk0301/jd_scripts/blob/master/jdCookie.js) 里面

* 获取京东 cookie 教程可参考 [浏览器获取京东 cookie 教程](https://github.com/lxk0301/jd_scripts/blob/master/backUp/GetJdCookie.md) , [插件获取京东 cookie 教程](https://github.com/lxk0301/jd_scripts/blob/master/backUp/GetJdCookie2.md)

* 方法三 Docker 安装 Cookie 请见各自的说明。

### 方法四：iOS 系统的代理软件（QuantumultX, Surge, Loon, 小火箭）

#### 以下内容只针对 iOS 用户

#### ios 使用多个京东账号，需要使用 BoxJs 保存多会话进行切换

##### BoxJs 简单说明可看作者[BoxJs 仓库地址](https://github.com/chavyleung/scripts/)

使用 box 可以实现远程订阅助力好友(需订阅此 [链接](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/lxk0301.boxjs.json))

- [BoxJs 使用教程](https://chavyleung.gitbook.io/boxjs/)

- [BoxJs 教程视频](https://youtu.be/eIpBrRxiy0w)

【用 box 订阅的好处】

1、脚本也可以远程挂载。京东活动助力功能的分享码只需在 box 里面填写。以后只需远程更新就行。

2、所有脚本的 cookie 都可以备份，方便你迁移到其他支持 box 的软件。

3、box 可以支持多账号

### 特别感谢(排名不分先后)：

- [@lxk0301](https://github.com/lxk0301/jd_scripts/tree/master)

* [@whyour](https://github.com/whyour/hundun/tree/master/quanx)

* [@nzw9314](https://github.com/nzw9314/QuantumultX/tree/master)
