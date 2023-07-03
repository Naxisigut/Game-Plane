/* 碰撞逻辑 */

type rectObj = {
  x: number,
  y: number, 
  width: number,
  height: number
}

export const hitCheck = (a: rectObj, b: rectObj)=>{
  const xCoincide = (a.x < b.x + b.width) && (a.x + a.width > b.x)
  const yCoincide = (a.y < b.y + b.height) && (a.y + a.height > b.y)
  return xCoincide && yCoincide
}