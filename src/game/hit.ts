/* 碰撞逻辑 */

type rectObj = {
  x: number,
  y: number, 
  width: number,
  height: number
}

export const hitCheck = (a: rectObj, b: rectObj)=>{
  console.log( 1, a.x + a.width);
  console.log( 2, b.x);
  console.log( 3, a.y + a.height);
  console.log( 4, b.y);

  // const centerXA = (a.x + a.width) / 2
  // const centerYA = (a.y + a.height) / 2
  // const centerXB = (a.x + a.width) / 2
  // const centerYA = (a.y + a.height) / 2

  const xCoincide = (a.x < b.x + b.width) && (a.x + a.width > b.x)
  const yCoincide = (a.y < b.y + b.height) && (a.y + a.height > b.y)
  if(xCoincide && yCoincide) return true
  return false

  // if((a.x + a.width) > b.x && (a.y + a.height) > b.y)return true
  // return false
}