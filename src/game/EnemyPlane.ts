export default class EnemyPlane{
  public x: number = 0
  public y: number = 0
  public width: number = 50
  public height: number = 50
  public speed: number = 5
  public group: Array<EnemyPlane>
  public border: number = 500
  constructor(group: Array<EnemyPlane> , opts?){
    this.group = group
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
  onDestroy(){
    const index = this.group.indexOf(this)
    this.group.splice(index, 1)
  }
}


export const generateEnemy = (enemies: Array<EnemyPlane>, interval: number = 2000)=>{
  setInterval(()=>{
    enemies.push(new EnemyPlane(enemies))
  }, interval)
}