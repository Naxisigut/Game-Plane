export default class EnemyPlane{
  public x: number = 0
  public y: number = 0
  public speed: number = 5
  constructor(opts?){
    Object.assign(this, opts)
  }
  move(direction){
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
        break;
    }
  }
}