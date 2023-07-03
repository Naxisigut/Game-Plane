<script setup lang="ts">
import PlaneVue from './components/Plane.vue';
import BulletVue from './components/Bullet.vue';
import EnemyPlane from './components/EnemyPlane.vue';
import { initGame, Plane } from './game';
import { reactive } from 'vue';

/* 玩家飞机默认配置 */
const defaultOpts = {
  speed: 5, 
  bulletSpeed: 5
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

