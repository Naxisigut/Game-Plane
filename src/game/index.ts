import { Application } from 'pixi.js';
import { default as Plane,  initPlane } from './Plane';
import { default as EnemyPlane, generateEnemy} from './EnemyPlane';
import { hitCheck } from './hit';
import { playerBulletsAttack } from './fighting';
export { Plane, initPlane, EnemyPlane, generateEnemy, hitCheck };


/* 初始化容器 */
export const initApplication = (width: number, height: number)=>{
  return new Application({ width, height })
}

/* 帧循环 */
const mainTicker = (app: Application, player: Plane, enemies: Array<EnemyPlane>)=>{
  app.ticker.add(()=>{
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
export const initGame = (pixiApp: Application, player: Plane, enemies: EnemyPlane[])=>{
console.log(pixiApp);
  /* 帧循环 */
  mainTicker(pixiApp, player, enemies)
  
  generateEnemy(enemies, 2000, {width: pixiApp.view.clientWidth, height: pixiApp.view.clientHeight}) // 生成敌军
  

  return{
    player, 
    bullets: player.bullets
  }
}
