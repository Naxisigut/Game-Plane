/* 敌方飞机 */

import { getRandomElement } from '@/utils/array';
import { getRandomNumber } from '@/utils/number';
import { contanierInfo } from '.';

export default class EnemyPlane{
  public x: number = 0
  public y: number = 0
  public width: number = 50
  public height: number = 50
  public speed: number = 1
  public group: Array<EnemyPlane>
  public border: number = 500
  public movingDirection: "up" | 'down' | 'left' | 'right' 
  public movingTimer: Timer
  // public moveDirection: number 
  constructor(group: Array<EnemyPlane> , opts?){
    this.group = group
    this.movingDirection = 'down'
    this.movingTimer = setInterval(()=>{
      this.movingDirection = getRandomElement(['down', 'left', 'right'])
    }, 3000)
    Object.assign(this, opts)
  }
  move(direction = 'down'){
    switch (direction) {
      case 'up':
        this.y -= this.speed
        break;
      case 'down':
        this.y += this.speed
        break;
      case 'left':
        this.x -= this.speed
        break;
      case 'right':
        this.x += this.speed
        break;
    
      default:
        // 默认向下移动
        this.y += this.speed
        break;
    }

    if(this.y > this.border)this.onDestroy()
  }
  autoMove(){
    this.move(this.movingDirection)
  }
  onDestroy(){
    clearInterval(this.movingTimer)
    const index = this.group.indexOf(this)
    this.group.splice(index, 1)
  }
}


export const generateEnemy = (enemies: Array<EnemyPlane>, interval: number = 2000)=>{
  setInterval(()=>{
    const x = getRandomNumber(0, contanierInfo.width)
    enemies.push(new EnemyPlane(enemies, {x, y: 0}))
  }, interval)
}