# 阔论--拒绝注册的评论系统

设计阔论评论系统的愿景是 希望实现 游客的即兴评论

即登-即评

当头脑中突然冒出了好的想法，却又懒得注册？ 没关系,只要输入邮箱和一个喜欢的昵称，就能马上发表您的评论

# 安装

```
npm install kuolun
```

or 

```
git clone https://github.com/NumerHero/kuolun.git
```

# 界面UI

![shotpic](http://numerhero.github.io/assets/download/kuolun/ui.png)

# 富文本功能

除了 基本的登录评论功能外，还有其他一些 富文本评论功能

## 流光标题

![shotpic](http://numerhero.github.io/assets/download/kuolun/insert-h1.gif)

## 插入表格

![shotpic](http://numerhero.github.io/assets/download/kuolun/insert-table.gif)

## 插入代码

![shotpic](http://numerhero.github.io/assets/download/kuolun/code-highlight.gif)

## 插入上传图片

![shotpic](http://numerhero.github.io/assets/download/kuolun/upload.gif)

## 有待完成

1. 定位功能
2. 拍照上传功能
3. sns 服务功能

## 数据库

使用 mongodb 存储

上限先改动 dao.js

