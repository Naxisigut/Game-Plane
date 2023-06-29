export default class Bullet{
  public x: number = 0
  public y: number = 0
  public speed: number = 1
  public border: number = 0
  public onDestroy: any
  public parent: any

  constructor(opts?){
    Object.assign(this, opts)
  }

  move(){
    this.y -= this.speed
    if(this.y < this.border)this.onDestroy()
  }
  
}
