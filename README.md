# 个人在线简历 - make-cv

## 一、项目简介
`make-cv` 是一个使用 React 和 Vite 构建的个人在线简历项目。它提供了简洁美观的界面，支持从 Markdown 文件加载简历内容，具有良好的可定制性，还方便进行打印操作。用户可以通过修改配置文件轻松定制简历的标题、头部信息等内容，同时支持使用 Markdown 语法撰写详细的简历信息。

## 二、功能特性
1. **Markdown 支持**：使用 Markdown 文件编写简历内容，易于维护和格式调整。
2. **可定制性**：通过修改 `config.yml` 文件，能自定义简历的标题、头部信息、是否显示头部等。
3. **美观的界面**：采用简洁美观的设计风格，模拟纸张效果并使用大头针装饰，增强视觉吸引力。
4. **打印功能**：提供打印提示，方便用户将简历导出为 PDF 文件。

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
publicPath: '/public/'
resumePath: './markdown/resume.md'
showHeader: true
headerInfo:
  photo: './src/assets/avatar.jpg'
  name: '万合天宜'
  phone: '188****8888'
  email: 'pgwan@makecv.com'
```
- `title`：简历页面的标题。
- `publicPath`：公共资源路径。
- `resumePath`：简历 Markdown 文件的路径。
- `showHeader`：是否显示头部信息。
- `headerInfo`：头部信息，包括照片、姓名、电话和邮箱。

## 七、自定义简历内容
可以编辑 `markdown/resume.md` 文件来修改简历的具体内容，支持 Markdown 语法。文件中已经包含了个人信息、工作经历、开源项目和作品、技能清单等常见简历板块，示例内容如下：
```markdown
# 个人信息

- 胶布帝/男/1990 
- 本科/萌鹿大学计算机系 
- 工作年限：3年
- 微博：[@JobDeer](http://weibo.com/jobdeer) （``` 如果没有技术相关内容，也可以不放 ```）
- 技术博客：http://blog.github.io ( ``` 使用GitHub Host的Big较高 ```  )
- Github：http://github.com/geekcompany ( ``` 有原创repo的Github帐号会极大的提升你的个人品牌 ```  )
- 手机：135******** （```如果是外地手机，可注明。如经常关机，要写上最优联系时间```）
- Email：goodman@gmail.com （```虽然我觉得QQ邮箱无所谓，不过有些技术人员比较反感，建议用G```）
- QQ/微信号：6*******（```提供一个通过网络可以联系到你的方式```）
- 期望职位：Web前端高级程序员，应用架构师
- 期望薪资：税前月薪15k~20k，特别喜欢的公司可例外
- 期望城市：北京

# 工作经历
## ABC公司 （ 2012年9月 ~ 2014年9月 ）
### DEF项目 

我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。

# 开源项目和作品
## 开源项目
（对于程序员来讲，没有什么比Show me the code能有说服力了）

 - [STU](http://github.com/yourname/projectname)：项目的简要说明，Star和Fork数多的可以注明
 - [WXYZ](http://github.com/yourname/projectname)：项目的简要说明，Star和Fork数多的可以注明

# 技能清单
（我一般主张将技能清单写入到工作经历里边去。不过很难完整，所以有这么一段也不错）

以下均为我熟练使用的技能

- Web开发：PHP/Hack/Node
- Web框架：ThinkPHP/Yaf/Yii/Lavaral/LazyPHP
- 前端框架：Bootstrap/AngularJS/EmberJS/HTML5/Cocos2dJS/ionic
- 前端工具：Bower/Gulp/SaSS/LeSS/PhoneGap
- 数据库相关：MySQL/PgSQL/PDO/SQLite
- 版本管理、文档和自动化部署工具：Svn/Git/PHPDoc/Phing/Composer
- 单元测试：PHPUnit/SimpleTest/Qunit
- 云和开放平台：SAE/BAE/AWS/微博开放平台/微信应用开发
```

## 八、部署
可以将 `dist` 目录下的静态文件部署到任何静态文件服务器上，例如 GitHub Pages、Netlify 等。以下是部署到 GitHub Pages 的简单步骤：
1. 在 GitHub 上创建一个新的仓库。
2. 将 `dist` 目录下的文件推送到该仓库的 `gh-pages` 分支。
3. 在仓库的设置中，将 GitHub Pages 的源设置为 `gh-pages` 分支。
4. 稍等片刻，即可通过仓库的 GitHub Pages 链接访问简历。

## 九、贡献
如果你发现任何问题或有改进建议，欢迎提交 Issue 或 Pull Request。

## 十、许可证
本项目采用 [MIT 许可证](LICENSE)。