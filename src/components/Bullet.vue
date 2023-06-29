<template>
  <Container :x="bullet.x" :y="bullet.y">
    <Sprite :texture="bulletImg" :width="20" :height="20"></Sprite>
  </Container>
</template>

<script setup lang="ts" >
import { PropType } from 'vue';
import bulletImg from '../assets/img/bullet.png';
import Bullet from '../game/Bullet';

const { bullet } = defineProps({
  bullet: {
    type: Object as PropType<Bullet>,
    required: true
  },
})


// import { reactive, onMounted, onUnmounted } from 'vue';
// import { initPlane } from '../game';

// const plane = initPlane( reactive({}))

// onMounted(()=>{
//   window.addEventListener('keydown', move)
// })
// onUnmounted(()=>{
//   window.removeEventListener('keydown', move)
// })


// const move = (e: KeyboardEvent)=>{
//   switch (e.code) {
//     case 'ArrowDown':
//       plane.moveDown()
//       break;
//     case 'ArrowUp':
//       plane.moveUp()
//       break;
//     case 'ArrowLeft':
//       plane.moveLeft()
//       break;
//     case 'ArrowRight':
//       plane.moveRight()
//       break;
  
//     default:
//       break;
//   }
// }


</script>

<style lang="less" scoped>
</style>