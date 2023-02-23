import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
 
// *********************************** 路径配置新增 start  
import { resolve } from 'path'     
 
const pathResolve = (dir: string): any => {  
  return resolve(__dirname, ".", dir)          
}
 
const alias: Record<string, string> = {
  '@': pathResolve("src")
}
 
// ********************************** 路径配置新增  end 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {  // ****************** 路径配置新增
    alias     // ****************** 路径配置新增
  },           // ****************** 路径配置新增
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
 