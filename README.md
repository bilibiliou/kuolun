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

3.开启server 

```
npm run server
```

或者

```
pm2 start process.json
```

如需开发， 可以 开启 webpack watch 

```
npm run dev
```

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

