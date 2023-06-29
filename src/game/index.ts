import { Application } from 'pixijs';
import { Plane, initPlane } from './Plane';
import { reactive } from 'vue';

export * from './Plane'

export const game = new Application({
  width: 500,
  height: 500
})

document.body.append(game.view as HTMLCanvasElement)

const mainTicker = (plane: Plane)=>{
  /* 帧循环子弹移动 */
  game.ticker.add(()=>{
    plane.run()
  })
}

export const initGame = (plane, bullets = [], opts?)=>{
  initPlane(plane, bullets, opts)

  /* 帧循环 */
  mainTicker(plane)

  return{
    plane, bullets
  }
}
// export const initGame = (_plane, bullets = [], opts?)=>{
//   const plane = initPlane(_plane, bullets, opts)

//   /* 帧循环 */
//   mainTicker(plane)

//   return{
//     plane, bullets
//   }
// }

