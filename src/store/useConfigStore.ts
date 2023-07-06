import { defineStore } from 'pinia';

export const useConfigStore = defineStore('configStore', () => {
  /* 窗口信息 */
  const viewInfo: ViewInfo = {
    width: window.innerWidth -1,
    height: window.innerHeight -5
  }


  /* pixi应用信息 */
  // const application: nu = 

  return {viewInfo, }
})