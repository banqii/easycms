
Thinkjs + React + webpack + Mysql 实现的一个简单 CMS 系统

## 环境

Node.js  6.10.0

npm      4.3.0

Thinkjs  2.2.17

React    15.4.2

webpack  2.2.1

Mysql    5.0.45-community-nt

## 开始

### 导入数据库

```
导入目录中的 easycms.sql 数据库文件
```

### 修改代码

```
数据库连接配置在 easycms>src>common>config>db.js 文件中

默认
{
  host: '127.0.0.1',
  port: '',
  database: 'easycms',
  user: 'root',
  password: '123456',
  prefix: '',
  encoding: 'utf8'
}
```

### 安装依赖（以下命令在项目根目录中输入）

```
npm install
```

### 如需 webpack 打包（已经打包好了）

```
webpack
```

### 启动服务

```
npm start
```

### 浏览器（所有调试都在 Chrome 中完成）

```
localhost:8360
```
## 写在后面

整个项目历时三天整，其中半天了解框架，一天半写前端，一天写后端

由于以前对 thinkjs 和 React 都不太了解，三天中都是边学边做，
遇到的问题就到官方文档上查询、去社区中提问，或者 Google 一下~

这样的学习过程使我感到非常充实，过后有一种得到升华的感觉，
感谢项目的发起人:),能让我有这么一次不可多得的经历！

学习过程就是不断的探索，不断的磨砺，两者相辅相成，成为一个优秀工程师指日可待！