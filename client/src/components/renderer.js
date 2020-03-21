import React from 'react';

const Box = (props) =>{
    const size=100;
    const x = props.x - size/2;
    const y = props.y - size/2;
    const color = props.color||'white';
    return (

            <div style={{ position: "absolute", width: size, height: size, backgroundColor: color, left: x, top: y }}>
            <div style={{color:'black'}}>{props.name}</div>
            </div>

      );
}
export default Box;