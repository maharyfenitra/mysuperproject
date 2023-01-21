import React from 'react';
import Rectangle from './Rectangle';
import { usePosition } from '../hooks/usePosition';

const Canvas = () => {
    const position1 = usePosition({x:100, y:100})
    const position2 = usePosition({x:100, y:100})
  return (
    <div  style={{width: window.innerWidth,height: window.innerHeight, position: "relative", background: "green"}}>
        <Rectangle {...position1} size={{width: 100, height: 100}} backgroundColor='blue'/>
        <Rectangle {...position2} size={{width: 200, height: 100}} backgroundColor='red'/>
    </div>
  )
}

export default Canvas