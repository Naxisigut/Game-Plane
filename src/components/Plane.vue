<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>

<script setup lang="ts" >
import planeImg from '../assets/img/plane.png';
import { reactive } from 'vue';
import { initPlane } from '../game';

const plane = initPlane( reactive({}))

window.addEventListener('keydown', (e)=>{
  switch (e.code) {
    case 'ArrowDown':
      plane.moveDown()
      break;
    case 'ArrowUp':
      plane.moveUp()
      break;
    case 'ArrowLeft':
      plane.moveLeft()
      break;
    case 'ArrowRight':
      plane.moveRight()
      break;
  
    default:
      break;
  }
})


</script>

<style lang="less" scoped>
</style>