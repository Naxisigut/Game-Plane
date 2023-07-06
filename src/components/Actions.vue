<template>
  <Container :x="appStore.viewInfo.width - 70" :y="20">
    <Sprite v-if="isPaused" :texture="startImg" :width="50" :height="50" eventMode="static" :events="startEvents"></Sprite>
    <Sprite v-else :texture="pauseImg" :width="50" :height="50" eventMode="static" :events="pauseEvents"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import startImg from '@/assets/img/start.png';
import pauseImg from '@/assets/img/pause.png';
import { ref, reactive } from 'vue';
import { useAppStore } from '@/store';

const appStore = useAppStore()

const isPaused = ref<Boolean>(false)
const startEvents = reactive({
  'pointerdown': (e)=>{
    // console.log(11, e);
    isPaused.value = true
  }
})
const pauseEvents = reactive({
  'pointerdown': (e)=>{
    isPaused.value = false
  }
})

</script>