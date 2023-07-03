import { Application } from 'pixijs';
import { default as Plane,  initPlane } from './Plane';
import { default as EnemyPlane, generateEnemy} from './EnemyPlane';
export { Plane, initPlane };


/* 初始化容器 */
const initContainer = ()=>{
  return new Application({
    width: 500, height: 500
  })
}
export const container = initContainer()


const mainTicker = (player: Plane, enemies: Array<EnemyPlane>)=>{
  container.ticker.add(()=>{
    /* 帧循环：子弹移动 */
    player.run()

    /* 帧循环：敌军飞机移动 */
    enemies.forEach((enemy,index) => {
       enemy.move()
    })
  })

  
}
/* 初始化游戏 */
export const initGame = (player: Plane, enemies: EnemyPlane[])=>{

  /* 帧循环 */
  mainTicker(player, enemies)

  generateEnemy(enemies)
  

  return{
    player, 
    bullets: player.bullets
  }
}
