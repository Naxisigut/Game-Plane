import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'; // 新增

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template:{
      compilerOptions:{
        // isCustomElement:(tag)=>{
        //   console.log(111, tag);
        //   if(tag === 'Container' || 'Sprite' )return true
        //   return false
        // }
      }
    }
  })],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
