
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
