import { EnemyPlane, Plane, hitCheck } from "./";

/* 玩家子弹攻击敌方飞机 */
export const playerBulletsAttack = (player: Plane, enemies: EnemyPlane[])=>{
  for(const enemy of enemies){
    for(const bullet of player.bullets){
      if(hitCheck(enemy, bullet)){
        enemy.onDestroy()
        bullet.onDestroy()
      }
    }
  }
}