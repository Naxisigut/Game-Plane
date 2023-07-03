<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg" :width="plane.width" :height="plane.height"></Sprite>
  </Container>
</template>

<script setup lang="ts" >
import planeImg from '../assets/img/plane.png';
import { Plane } from '../game';
import { onMounted, onUnmounted, PropType } from 'vue';

const { plane } = defineProps({
  plane:{
    type: Object as PropType<Plane>,
    required: true
  }
})

onMounted(()=>{
  window.addEventListener('keydown', planeActs)
})
onUnmounted(()=>{
  window.removeEventListener('keydown', planeActs)
})

const planeActs = (e: KeyboardEvent)=>{
  if(e.code === 'Space')return plane.attack()

  switch (e.code) {
    case 'ArrowDown':
      plane.move('down')
      break;
    case 'ArrowUp':
      plane.move('up')
      break;
    case 'ArrowLeft':
      plane.move('left')
      break;
    case 'ArrowRight':
      plane.move('right')
      break;
    case 'Space':
      plane.attack()
      break;
  
    default:
      break;
  }
}


</script>

<style lang="less" scoped>
</style>