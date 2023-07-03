<template>
  <Container :x="bullet.x" :y="bullet.y">
    <Sprite :texture="bulletImg" :width="bullet.width" :height="bullet.height"></Sprite>
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

</script>

<style lang="less" scoped>
</style>