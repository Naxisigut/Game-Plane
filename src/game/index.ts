import { Application } from 'pixijs';
import { default as Plane,  initPlane } from './Plane';
import { default as EnemyPlane, generateEnemy} from './EnemyPlane';
import { hitCheck } from './hit';
import { playerBulletsAttack } from './fighting';
export { Plane, initPlane, EnemyPlane, generateEnemy, hitCheck };


/* 初始化容器 */
const initContainer = ()=>{
  const width = window.innerWidth
  const height = window.innerHeight
  return new Application({
    width, height
  })
}
export const container = initContainer()


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

    // enemies.forEach((enemy,index) => {
    //   /* 帧循环：敌军飞机移动 */
    //   enemy.move()
      
    //   /* 帧循环：敌军碰撞子弹后销毁 */
    //    player.bullets.forEach((bullet,index) => {
    //       if(hitCheck(bullet, enemy)){
    //         bullet.onDestroy()
    //         enemy.onDestroy()
    //       }             
    //    })
    // })
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
