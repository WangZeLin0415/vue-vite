import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import resolve from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // 字符串简写写法
      '/foo': 'http://localhost:4567/foo',
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 正则表达式写法
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      }
    }
  },
  resolve: {
        alias: [
          {
            find: /^\/@\//,
            replacement:'src',
          },
          // {
          //   "/@/": resolve(__dirname, "src"),
          // },
        ],
      },
  
})
