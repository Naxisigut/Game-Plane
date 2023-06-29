import Bullet from './Bullet';

// export interface Plane {
//   x: number,
//   y: number,
//   speed: number,
//   bulletSpeed: number
//   bullets: Array<Bullet>
//   moveDown: ()=>void
//   moveUp: ()=>void
//   moveLeft: ()=>void
//   moveRight: ()=>void
//   attack: ()=>void
//   run: ()=>void

// }


export const initPlane = (plane, bullets: Array<Bullet> = [], opts?): Plane  => {
  Object.assign(plane, opts)
  plane.bullets = bullets

  return plane
}

export class Plane {
  public x: number = 0
  public y: number = 0
  public speed: number = 5
  public bulletSpeed: number = 1
  public bullets: Array<Bullet> = []

  constructor(opts?){
    if(opts){
      Object.assign(this, opts)
    }
  }

  moveDown(){
    this.y += this.speed
  }
  moveUp(){
    this.y -= this.speed
  }
  moveLeft(){
    this.x -= this.speed
  }
  moveRight(){
    this.x += this.speed
  }
  /* 攻击，生成子弹 */
  attack(){
    const bullet = new Bullet(this, {x: this.x+40, y: this.y, speed: this.bulletSpeed})
    this.bullets.push(bullet)
  }
  /* 子弹移动 */
  run(){
    for(let i = 0; i < this.bullets.length; i++){
      this.bullets[i].move()
    }
  }
} 