# 个人在线简历 - make-cv

## 一、项目简介
`make-cv` 是一个使用 React 和 Vite 构建的个人在线简历项目。它提供了简洁美观的界面，支持从 Markdown 文件加载简历内容，具有良好的可定制性，还方便进行打印操作。用户可以通过修改配置文件轻松定制简历的标题、头部信息等内容，同时支持使用 Markdown 语法撰写详细的简历信息。

## 二、功能特性
1. **Markdown 支持**：使用 Markdown 文件编写简历内容，易于维护和格式调整。
2. **可定制性**：通过修改 `config.yml` 文件，能自定义简历的标题、头部信息、是否显示头部等。
3. **美观的界面**：采用简洁美观的设计风格，模拟纸张效果并使用大头针装饰，增强视觉吸引力。
4. **打印提醒**：提供打印提示，方便用户将简历导出为 PDF 文件。

## 三、技术栈
### 前端框架
- **React**：用于构建用户界面，提供高效的组件化开发方式。

### 构建工具
- **Vite**：快速的构建工具，提供了快速的冷启动和热更新能力。

### 解析库
- **markdown-it**：用于解析 Markdown 文件，将 Markdown 内容转换为 HTML 格式。
- **js-yaml**：用于解析 YAML 配置文件，方便读取和使用配置信息。

## 四、项目结构
```
make-cv/
├── .github/                 # GitHub 工作流配置
│   └── workflows/
│       └── docker-publish.yml
├── public/                  
│   ├── resume.md            # 简历 Markdown 文件
│   ├── config.yml           # 配置文件
├── src/                     # 源代码
│   ├── components/          # 组件
│   │   ├── Footer.jsx
│   │   ├── HeaderInfo.jsx
│   │   └── ResumeContent.jsx
│   ├── App.jsx              # 主应用组件
│   ├── App.css              # 主应用样式
│   ├── main.jsx             # 入口文件
│   └── style.css            # 全局样式
├── index.html               # 入口 HTML 文件
├── package.json             # 项目依赖和脚本配置
├── package-lock.json        # 锁定依赖版本
└── README.md                # 项目说明文档
```

## 五、快速开始
### 1. 克隆项目
```bash
git clone https://github.com/PGWan68/make-cv.git
cd make-cv
```

### 2. 安装依赖
```bash
npm install
```

### 3. 开发环境启动
```bash
npm run dev
```
启动开发服务器后，在浏览器中访问 `http://localhost:3018` 即可查看简历。

### 4. 生产环境构建
```bash
npm run build
```
构建完成后，会在 `dist` 目录下生成静态文件。

### 5. 预览生产环境
```bash
npm run preview
```
启动预览服务器后，访问 `http://localhost:3018` 即可查看构建后的简历。

## 六、配置说明
可以通过修改 `config.yml` 文件来定制简历的相关信息：
```yaml
title: 'make-cv - 漂亮的在线个人简历'
showHeader: true
showPrintStick: true
headerInfo:
  photo: 'https://fileswan.x.ddnsto.com/imgs/IMG_2948.JPG'
  name: '张三(AI生成)'
  phone: '188****8888'
  email: 'zhangsan@makecv.com'
```
- `title`：简历页面的标题。
- `showHeader`：是否显示头部信息。
- `showPrintStick`：是否显示底部的打印标签。
- `headerInfo`：头部信息，包括照片、姓名、电话和邮箱。


## 七、部署教程

### 静态资源部署
静态资源部署是将项目构建后生成的静态文件部署到静态文件服务器上，从而让用户可以通过网络访问。以下以部署到 GitHub Pages 为例，详细介绍静态资源部署的步骤：

#### 1. 创建新仓库
在 GitHub 上创建一个新的仓库，用于存放部署的静态文件。你可以登录 GitHub 账号，点击右上角的“+”号，选择“New repository”，然后按照提示填写仓库名称、描述等信息，最后点击“Create repository”完成创建。

#### 2. 构建项目
在本地项目目录下，执行以下命令进行生产环境构建：
```bash
npm run build
```
构建完成后，会在 `dist` 目录下生成静态文件。

#### 3. 推送文件到 `gh-pages` 分支
将 `dist` 目录下的文件推送到新仓库的 `gh-pages` 分支。可以按照以下步骤操作：
```bash
# 创建并切换到 gh-pages 分支
git checkout -b gh-pages

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "Deploy to GitHub Pages"

# 推送更改到远程仓库的 gh-pages 分支
git push origin gh-pages
```

#### 4. 配置 GitHub Pages
在新仓库的设置中，找到 GitHub Pages 部分，将源设置为 `gh-pages` 分支。设置完成后，GitHub 会自动为你部署静态文件。

#### 5. 访问简历
稍等片刻，即可通过仓库的 GitHub Pages 链接访问简历。链接格式通常为 `https://<your-github-username>.github.io/<repository-name>`。

### Docker 部署
本项目已经推送至Dockerhub，支持使用 Docker 进行部署。以下是详细的 Docker 部署步骤：

#### 1. 拉取镜像
在需要部署的服务器上，拉取并运行 Docker 镜像：
```bash
# 拉取镜像
docker pull pinger68/make-cv:latest

# 运行容器
docker run -d -p 3018:3018 -v /make-cv/config:/app/config pinger68/make-cv:latest
```

#### 2. 访问简历
运行以上命令后，你可以通过访问服务器的 IP 地址和端口号（例如 `http://<server-ip>:3018`）来查看简历。

## 八、贡献
如果你发现任何问题或有改进建议，欢迎提交 Issue 或 Pull Request。

## 九、许可证
本项目采用 [MIT 许可证](LICENSE)。