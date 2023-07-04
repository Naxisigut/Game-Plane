<script setup lang="ts">
import PlaneVue from './components/Plane.vue';
import BulletVue from './components/Bullet.vue';
import EnemyPlane from './components/EnemyPlane.vue';
import { initGame, Plane } from './game';
import { reactive } from 'vue';

const width = window.innerWidth
const height = window.innerHeight


/* 玩家飞机默认配置 */
const defaultOpts = {
  speed: 5, 
  bulletSpeed: 5,
  x: width / 2,
  y: height - 100,
  width: 100, 
  height: 100, 
}

const player = reactive(new Plane(defaultOpts))
const enemies = reactive([])

initGame(player, enemies )




</script>

<template>
  <Container>
    <PlaneVue :plane="player"></PlaneVue>
    <BulletVue v-for="(bullet, index) in player.bullets" :key="index" :bullet="bullet"></BulletVue>
    <EnemyPlane v-for="(enemy, index) in enemies" :enemy-plane="enemy" :key="index"></EnemyPlane>
  </Container>  
</template>

<style>
body, canvas{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

