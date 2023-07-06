<script setup lang="ts">

import PlaneVue from './components/Plane.vue';
import BulletVue from './components/Bullet.vue';
import EnemyPlane from './components/EnemyPlane.vue';
import ActionsVue from './components/Actions.vue';
import { initGame, Plane } from './game';
import { reactive } from 'vue';
import { useAppStore } from '@/store';


const appStore = useAppStore()

/* 玩家飞机默认配置 */
const defaultOpts = {
  speed: 5, 
  bulletSpeed: 5,
  x: appStore.viewInfo.width / 2,
  y: appStore.viewInfo.height - 100,
  width: 100, 
  height: 100, 
}

const player = reactive(new Plane(defaultOpts))
const enemies = reactive([])

initGame(appStore.application, player, enemies )




</script>

<template>
  <Container>
    <PlaneVue :plane="player"></PlaneVue>
    <BulletVue v-for="(bullet, index) in player.bullets" :key="index" :bullet="bullet"></BulletVue>
    <EnemyPlane v-for="(enemy, index) in enemies" :enemy-plane="enemy" :key="index"></EnemyPlane>
    <ActionsVue></ActionsVue>
  </Container>  
</template>

<style>
body, canvas{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

