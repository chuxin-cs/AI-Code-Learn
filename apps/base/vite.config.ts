import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from "vite-plugin-qiankun";

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 9002,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins:[
    vue(),
    qiankun('system', { useDevMode: true }),
  ]
})
