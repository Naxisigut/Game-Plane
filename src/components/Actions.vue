<template>
  <Container :x="props.containerInfo.width - 70" :y="20">
    <Sprite :texture="startImg" :width="50" :height="50" eventMode="static" :events="startEvents"></Sprite>
    <!-- <Sprite :texture="pauseImg" :width="50" :height="50" eventMode="static" :events="pauseEvents"></Sprite> -->
  </Container>
</template>

<script setup lang="ts">
import startImg from '@/assets/img/start.png';
import pauseImg from '@/assets/img/pause.png';
import { ref } from 'vue';
const props = defineProps({
  containerInfo: {
    type: Object,
    required: true
  }
})

const startEvents = ref({
  'pointerdown': (e)=>{
    console.log(11, e);
  }
})

const pauseEvents = ref({
  'pointerdown': (e)=>{
    console.log(22, e);
  }
})

const startClicked = (e)=>{
  console.log(11, e);
}

const pauseClicked = (e)=>{
  console.log(22, e);
}

console.log(props);
</script>