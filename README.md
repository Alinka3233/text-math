# 微积分出题软件

基于山东大专微积分简明教程的在线出题系统，包含完整的题库和API接口。

## 功能特点

- 📚 涵盖微积分所有主要知识点
- 🎲 随机出题功能
- 💡 提供详细答案和解析
- 🔌 RESTful API接口
- 🎨 美观的用户界面

## 知识点覆盖

1. 函数与极限
2. 导数
3. 导数的应用
4. 不定积分
5. 定积分
6. 定积分的应用
7. 微分方程

## 安装与运行

1. 安装依赖：
```bash
npm install
```

2. 启动服务器：
```bash
npm start
```

3. 访问应用：
打开浏览器访问 http://localhost:3000

## API接口

### 获取所有知识点
```
GET /api/topics
```

### 随机生成题目
```
GET /api/questions/random?count=5&topic=函数与极限
```

### 获取指定知识点的所有题目
```
GET /api/questions/:topic
```

### 获取指定ID的题目
```
GET /api/question/:id
```

## 项目结构

```
Wjf/
├── server.js          # 后端服务器
├── questionBank.js    # 题库
├── package.json       # 项目配置
└── public/
    ├── index.html     # 主页
    ├── style.css      # 样式
    └── app.js         # 前端逻辑
```
