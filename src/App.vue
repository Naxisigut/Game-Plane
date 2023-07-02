<script setup lang="ts">
import PlaneVue from './components/Plane.vue';
import BulletVue from './components/Bullet.vue';
import { initGame, Plane } from './game';
import { reactive } from 'vue';

/* 玩家飞机默认配置 */
const defaultOpts = {
  speed: 5, 
  bulletSpeed: 5
}

const playerPlane = reactive(new Plane(defaultOpts))

initGame(playerPlane)





</script>

<template>
  <Container>
    <PlaneVue :plane="playerPlane"></PlaneVue>
    <BulletVue v-for="(bullet, index) in playerPlane.bullets" :key="index" :bullet="bullet"></BulletVue>
  </Container>  
</template>

