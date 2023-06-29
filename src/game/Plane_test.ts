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

const defaultOpts = {
  x: 0, 
  y: 0,
  speed: 5,
  bulletSpeed: 1
}

export const initPlane = (plane, bullets: Array<Bullet> = [], opts?): Plane  => {
  Object.assign(plane, defaultOpts, opts)
  plane.bullets = bullets
  plane.moveDown = ()=>{
    plane.y += plane.speed
  }

  plane.moveUp = ()=>{
    plane.y -= plane.speed
  }

  plane.moveLeft = ()=>{
    plane.x -= plane.speed
  }

  plane.moveRight = ()=>{
    plane.x += plane.speed
  }

  plane.attack = ()=>{
    bullets.push(new Bullet({x: plane.x + 40, y: plane.y, speed: plane.bulletSpeed}))
  }

  /* 子弹移动 */
  plane.run = ()=>{
    for(let i = 0; i < bullets.length; i++){
      bullets[i].move()
    }
  }

  return plane
}

export class Plane {
  
} 