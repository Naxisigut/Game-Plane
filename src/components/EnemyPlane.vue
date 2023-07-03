<template>
  <Container :x="enemyPlane.x" :y="enemyPlane.y">
    <Sprite :texture="enemyPlaneImg" :width="enemyPlane.width" :height="enemyPlane.height"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import enemyPlaneImg from '@/assets/img/enemyPlane.png';
import EnemyPlane from '@/game/EnemyPlane';
import { PropType } from 'vue';

const { enemyPlane } = defineProps({
  enemyPlane: {
    type: Object as PropType<EnemyPlane>,
    required: true
  }
})



</script>