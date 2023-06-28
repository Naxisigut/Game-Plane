interface Plane {
  x: number,
  y: number,
  speed: number,
  moveDown: ()=>void
  moveUp: ()=>void
  moveLeft: ()=>void
  moveRight: ()=>void
}

const defaultOpts = {
  x: 0, 
  y: 0,
  speed: 5
}

export const initPlane = (plane, opts?): Plane  => {
  Object.assign(plane, defaultOpts, opts)

  plane.moveDown = ()=>{
    plane.y += plane.speed
  }

  plane.moveUp = ()=>{
    plane.y -= plane.speed
  }

  plane.moveLeft = ()=>{
    plane.x -= plane.speed
  }

  plane.moveRight = ()=>{
    plane.x += plane.speed
  }

  return plane
}