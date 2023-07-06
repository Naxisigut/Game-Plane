import { Application } from 'pixi.js';
import { default as Plane,  initPlane } from './Plane';
import { default as EnemyPlane, generateEnemy} from './EnemyPlane';
import { hitCheck } from './hit';
import { playerBulletsAttack } from './fighting';
import { useConfigStore } from '@/store/useConfigStore';
import { storeToRefs } from 'pinia';
export { Plane, initPlane, EnemyPlane, generateEnemy, hitCheck };


const { viewInfo } = storeToRefs(useConfigStore())
/* 初始化容器 */
const initContainer = ()=>{
  return new Application({
    width: viewInfo.width, 
    height: viewInfo.height
  })
}
export const container = initContainer()

/* 帧循环 */
const mainTicker = (player: Plane, enemies: Array<EnemyPlane>)=>{
  container.ticker.add(()=>{
    /* 帧循环：子弹移动 */
    player.run()

    /* 帧循环：敌军移动 */
    for(const enemy of enemies){
      enemy.autoMove()
    }

    /* 帧循环：战斗 */
    playerBulletsAttack(player, enemies)

  })

  
}
/* 初始化游戏 */
export const initGame = (player: Plane, enemies: EnemyPlane[])=>{

  /* 帧循环 */
  mainTicker(player, enemies)
  
  generateEnemy(enemies) // 生成敌军
  

  return{
    player, 
    bullets: player.bullets
  }
}
