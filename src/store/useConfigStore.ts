import { defineStore } from 'pinia';

export const useConfigStore = defineStore('configStore', () => {
  /* 窗口信息 */
  const viewInfo = {
    width: window.innerWidth -1,
    height: window.innerHeight -5
  }

  return {viewInfo, }
})