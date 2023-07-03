export default class Bullet{
  public x: number = 0
  public y: number = 0
  public width: number = 20
  public height: number = 20
  public speed: number = 1
  public border: number = 0
  public parent: any

  constructor(parent, opts?){
    this.parent = parent
    Object.assign(this, opts)
  }

  move(){
    this.y -= this.speed
    if(this.y < this.border)this.onDestroy()
  }

  onDestroy(){
    const index = this.parent.bullets.indexOf(this)
    this.parent.bullets.splice(index, 1)
  }
  
}
