# Dockerfile
# 使用官方Node.js LTS版本作为基础镜像
FROM node:18 AS builder

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install --production

# 复制项目文件

COPY . .

# 构建应用
RUN npm run build

# 创建轻量级生产镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 复制生产依赖
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules/ ./node_modules/

# 复制构建产物
COPY --from=builder /app/dist/ ./dist/
COPY --from=builder /app/public/ ./public/
COPY --from=builder /app/src/ ./src/
COPY --from=builder /app/_config.yml ./

# 暴露端口（根据您的应用配置）
EXPOSE 3000

# 启动应用
CMD ["npm", "run", "dev"]