# Dockerfile
# 使用官方Node.js LTS版本作为基础镜像
FROM node:24-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制项目文件
COPY . .

# 安装全部依赖
RUN npm install

### 因为markdown文档需要时时更新，目前只使用开发环境，所以只需要复制代码文件即可

# # 构建应用
# RUN npm run build

# # 创建轻量级生产镜像
# FROM node:24-alpine

# # 设置工作目录
# WORKDIR /app

# # 复制生产依赖
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/node_modules/ ./node_modules/

# # 复制构建产物
# COPY --from=builder /app/dist/ ./dist/
# COPY --from=builder /app/public/ ./public/
# COPY --from=builder /app/config.yml ./

# 暴露端口（根据您的应用配置）
EXPOSE 3018

# 启动应用
CMD ["npm", "run", "dev"]