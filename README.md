# 二手市场全栈应用 (Second Hand Market Full-Stack App)

这是一个完整的二手市场应用，包含前端和后端代码。

## 🏗️ 项目结构

```
Phase1-main/
├── frontend/                    # React + Vite + TypeScript 前端项目
│   ├── src/                     # 前端源代码
│   │   ├── components/          # 可复用组件
│   │   ├── pages/               # 页面组件
│   │   ├── services/            # API服务
│   │   ├── store/               # Zustand状态管理
│   │   └── utils/               # 工具函数
│   ├── package.json             # 前端依赖配置
│   └── index.html               # HTML入口文件
├── src/main/java/               # Spring Boot 后端代码
│   └── com/example/secondhandmarketapp/
│       ├── controller/          # REST API控制器
│       ├── service/             # 业务逻辑服务
│       ├── repository/          # 数据访问层
│       ├── entity/              # 数据库实体
│       ├── dto/                 # 数据传输对象
│       └── model/               # 数据模型
├── src/main/resources/          # 配置文件
│   ├── static/                  # 静态资源目录
│   ├── application.yml          # 应用配置
│   └── db-init.sql              # 数据库初始化脚本
├── build.gradle                 # Gradle构建配置
└── docker-compose.yml           # Docker部署配置
```

## 🛠️ 技术栈

### 前端 (Frontend)
- **React 18** - 用户界面框架
- **TypeScript** - 类型安全
- **Vite** - 快速构建工具
- **Ant Design** - UI组件库
- **Zustand** - 状态管理
- **React Router** - 路由管理
- **Axios** - HTTP客户端

### 后端 (Backend)
- **Spring Boot** - Java应用框架
- **Spring Security** - 安全认证
- **Spring Data JPA** - 数据访问
- **H2 Database** - 内存数据库
- **Gradle** - 构建工具

## 🚀 快速开始

### 1. 启动后端服务
```bash
# 在项目根目录执行
./gradlew bootRun
```
后端服务将在 `http://localhost:8080` 启动

### 2. 启动前端开发服务器
```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```
前端服务将在 `http://localhost:5173` 启动

### 3. 访问应用
- 前端页面: http://localhost:5173
- 后端API: http://localhost:8080/api

## 📱 功能特性

### 用户功能
- ✅ 用户注册/登录
- ✅ 用户资料管理
- ✅ JWT令牌认证

### 商品功能
- ✅ 商品发布
- ✅ 商品浏览
- ✅ 商品搜索

### 聊天功能
- ✅ 聊天室创建
- ✅ 消息发送
- ✅ 实时通信

## 🔧 开发模式

### 独立开发模式
- 前端和后端分别运行在不同端口
- 前端通过API调用后端服务
- 适合开发和调试

### 集成部署模式
- 前端构建后放入后端static目录
- 统一部署为一个应用
- 适合生产环境

## 📦 构建部署

### 构建前端
```bash
cd frontend
npm run build
```

### 构建后端
```bash
./gradlew build
```

### Docker部署
```bash
docker-compose up -d
```

## 🔐 API接口

### 认证接口
- `POST /api/auth/signup` - 用户注册
- `POST /api/auth/login` - 用户登录

### 商品接口
- `GET /api/items` - 获取商品列表
- `POST /api/items` - 创建商品
- `GET /api/items/{id}` - 获取商品详情

### 聊天接口
- `GET /api/chatrooms` - 获取聊天室列表
- `POST /api/chatrooms` - 创建聊天室
- `POST /api/messages` - 发送消息

## 👥 贡献者

- **前端开发**: Shuwen Luo
- **后端开发**: 团队开发
- **项目架构**: 全栈集成

## 📄 许可证

Apache-2.0 License