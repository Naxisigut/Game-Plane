// import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')


import { game } from './game';
import { createApp } from './runtime-canvas';

createApp(App).mount(game.stage)

