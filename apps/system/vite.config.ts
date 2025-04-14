import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from "vite-plugin-qiankun";

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 7001,
    hmr: false,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins:[
    react(),
    qiankun('system', { useDevMode: true }),
  ]
})
