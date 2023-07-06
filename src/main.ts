// import { createApp } from 'vue'
// import './style.css'
// import App from './components/HelloWorld.vue'

// const app1 = createApp(App).mount('#app')
// console.log(app1.config);
// app.config.warnHandler = (msg, instance, trace) => {
  //   // `trace` 是组件层级结构的追踪
  // }
  
import App from './App.vue'


import { createApp } from './runtime-canvas';
const app = createApp(App)

import { createPinia } from 'pinia';
const pinia = createPinia()
app.use(pinia)

import { useAppStore } from './store';
const { application} = useAppStore()

document.body.append(application.view as HTMLCanvasElement)

app.config.warnHandler = ()=>null
app.mount(application.stage)




