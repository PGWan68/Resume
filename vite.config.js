import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3018,         // 开发服务器端口（npm run dev）
    host: '0.0.0.0',    // 允许外部访问（Docker 容器内必须设置）
  },
  preview: {
    port: 3018,         // 预览服务器端口（npm run preview）
    host: '0.0.0.0',    // 允许外部访问
  }
})
