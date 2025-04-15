import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 7000,
    proxy: {
      '/api': {
        //本地服务接口地址
        target: 'http://172.16.101.170:80',
        ws: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
      '/blade-auth': {
        target: 'https://apis-tocc-test.123cx.com',
        changeOrigin: true,
        pathRewrite: {
          '^/blade-auth': '/blade-auth',
        },
      },
    },
  },
})
