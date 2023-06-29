import Bullet from './Bullet';

export interface Plane {
  x: number,
  y: number,
  speed: number,
  bulletSpeed: number
  bullets: Array<Bullet>
  moveDown: ()=>void
  moveUp: ()=>void
  moveLeft: ()=>void
  moveRight: ()=>void
  attack: ()=>void
  run: ()=>void

}

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
    const bullet = new Bullet(plane, {x: plane.x + 40, y: plane.y, speed: plane.bulletSpeed})
    bullet.onDestroy = ()=>{
      const index = bullets.indexOf(bullet)
      bullets.splice(index, 1)
    }
    bullets.push(bullet)
  }

  /* 子弹移动 */
  plane.run = ()=>{
    for(let i = 0; i < bullets.length; i++){
      bullets[i].move()
    }
  }

  return plane
}