# 阔论 <拒绝注册的评论系统>

当头脑中突然冒出了好的想法，却又懒得注册？ 没关系,只要输入邮箱和一个喜欢的昵称，就能马上发表您的评论,
这便是该项目的愿景 ** 实现 游客的即兴评论(即登-即评) ** 

# 依赖

本项目依赖 mongodb 和 nodeJs ，需提前安装mongodb,部署可采用Pm2 ，也可以直接部署服务
浏览器环境 不兼容低版本浏览器 （使用了fetch 和 flex）

# 安装

```
npm install kuolun
```

or 

```
git clone https://github.com/NumerHero/kuolun.git
```

# 富文本功能（functions）

除了 基本的登录评论功能外，还有其他一些 富文本评论功能

## 流光标题

![shotpic](http://numerhero.github.io/assets/download/kuolun/insert-h1.gif)

## 插入表格

![shotpic](http://numerhero.github.io/assets/download/kuolun/insert-table.gif)

## 插入代码

![shotpic](http://numerhero.github.io/assets/download/kuolun/code-highlight.gif)

## 插入上传图片

![shotpic](http://numerhero.github.io/assets/download/kuolun/upload.gif)

## 插入表情

![shotpic](http://numerhero.github.io/assets/download/kuolun/comment_expressions.gif)

## 自拍上传

![shotpic](http://numerhero.github.io/assets/download/kuolun/snap-show.gif)

注：gif 经过压缩，所以视频质量并不清晰

# 数据库

使用 mongodb 存储

上限先改动 dao.js 中的存储 collection （如不改动默认为test）

# 使用

1.打开mongodb

```
mongod --dbpath your data storage location
```

2.在package.json 中设置监听端口 默认为5000

```
"scripts": {
  "dev": "set NODE_ENV=prod && webpack --colors -w",
  "server": "set NODE_PORT=5000 && node server" // NODE_PORT 默认 5000
},
```

如使用Pm2 请在 process.json 中修改

```
"env": {
  "NODE_PORT": 5000
}
```

3.修改server.js  中 Session 地址

4.开启server 

```
npm run server
```

或者

```
pm2 start process.json
```

# 建立HTTPS连接

首先生成证书和密钥

```
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365
```

其中

req 尝试请求该证书
-x509 告诉电脑这是一个自签名的证书，不需要去请求某个证书颁布者的确认
rsa 编码方式，密钥为2048位
-keyout 和 -out 配对 命名文件
-days 证书有效时间

可能会遇到

```
Error: error:0906A068:PEM routines:PEM_do_header:bad password read
```

网上的解决方案是将密码去掉

```
openssl rsa -in key.pem -out newkey.pem && mv newkey.pem key.pem
```

# 开发

如需开发， 可以调用命令 

```
npm run dev
```

# 更新

v1.0.7 

    1. 被组里同学用XSS玩坏了,使用[Js-Xss](https://github.com/leizongmin/js-xss) 做防Xss攻击
    2. 发现线上开发机不被允许调用摄像头，新增HTTPS连接
    3. 建立webpack_dll 减轻开发时的时间成本
    4. 使用cross-env 设置环境变量
    
# 有待完成

<input type="checkbox" disabled  >1. 定位功能
<input type="checkbox" disabled checked > 2. 拍照上传功能
<input type="checkbox" disabled  > 3. sns 服务功能

# 协议（licence）

The MIT License (MIT)

Copyright (c) 2016 Kuo Lun (阔论-评论系统)

Author: Owen(欧阳湘粤) 
Email: <469564715@qq.com> <blackcodero@gmail.com>
Github: github.com/numerhero

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

