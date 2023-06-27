import { Application } from 'pixijs';

export const game = new Application({
  width: 500,
  height: 500
})

document.body.append(game.view as HTMLCanvasElement)