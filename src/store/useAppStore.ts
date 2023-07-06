import { defineStore } from 'pinia';
import { initApplication } from '@/game';
import { Application } from 'pixi.js';

export const useAppStore = defineStore('appStore', ()=>{
  /* 窗口信息 */
  const viewInfo: ViewInfo = {
    width: window.innerWidth -1,
    height: window.innerHeight -5
  }

  const application: Application = initApplication(viewInfo.width, viewInfo.height)

  return {application, viewInfo}
})

// export const useAppStore = defineStore('appStore', {
//   /* 窗口信息 */
//   state: () => ({
//     viewInfo:{
//       width: window.innerWidth -1,
//       height: window.innerHeight -5
//     },
//   })

  // const application = initApplication(viewInfo.width, viewInfo.height)

  // return {application, viewInfo}
// })