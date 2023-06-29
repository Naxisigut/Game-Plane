<script setup lang="ts">
import PlaneVue from './components/Plane.vue';
import BulletVue from './components/Bullet.vue';
import { initGame } from './game';
import { reactive } from 'vue';
import { Plane } from './game/Plane';
// const { plane, bullets } = initGame(reactive({}), reactive([]))

/* 飞机默认配置 */
const defaultOpts = {
  speed: 5, 
  bulletSpeed: 1
}
const { plane, bullets } = initGame(reactive(new Plane()), reactive([]), defaultOpts)

</script>

<template>
  <Container>
    <PlaneVue :plane="plane"></PlaneVue>
    <BulletVue v-for="(bullet, index) in bullets" :key="index" :bullet="bullet"></BulletVue>
  </Container>  
</template>

