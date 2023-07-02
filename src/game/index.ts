import { Application } from 'pixijs';
import { default as Plane,  initPlane } from './Plane';
export { Plane, initPlane };


/* 初始化容器 */
const initContainer = ()=>{
  return new Application({
    width: 500, height: 500
  })
}
export const container = initContainer()


const mainTicker = (plane: Plane)=>{
  /* 帧循环子弹移动 */
  container.ticker.add(()=>{
    plane.run()
  })
}
/* 初始化游戏 */
export const initGame = (plane: Plane)=>{

  /* 帧循环 */
  mainTicker(plane)

  return{
    plane, 
    bullets: plane.bullets
  }
}
