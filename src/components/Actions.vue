<template>
  <Container :x="props.containerInfo.width - 70" :y="20">
    <Sprite :texture="startImg" :width="50" :height="50"></Sprite>
    <Sprite :texture="pauseImg" :width="50" :height="50"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import startImg from '@/assets/img/start.png';
import pauseImg from '@/assets/img/pause.png';
const props = defineProps({
  containerInfo: {
    type: Object,
    required: true
  }
})

console.log(props);
</script>