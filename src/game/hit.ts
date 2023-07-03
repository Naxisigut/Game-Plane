/* 碰撞逻辑 */

type rectObj = {
  x: number,
  y: number, 
  width: number,
  height: number
}

export const hitCheck = (a, b)=>{
  if((a.x + a.width) > b.x && (a.y + a.height) > b.y)return true
  return false
}