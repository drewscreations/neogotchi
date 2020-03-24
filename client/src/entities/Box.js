import React from 'react';




export default (props)=>{
    const width = props.size[0];
    const height = props.size[1];
    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;
    return (
    <div
        style={{
            position: "absolute",
            left: x,
            top: y,
            width: width,
            height: height,
            backgroundColor: props.color,
            transform: `rotate(${props.body.angle*57.3}deg)`
        }} />
    );
}