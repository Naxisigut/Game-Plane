import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

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
})
