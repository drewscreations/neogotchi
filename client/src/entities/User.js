import React from 'react';
import userImg from '../static/img/user.png';

const User = (props) =>{
      //props.(position, name, sprite, renderer)
      //if main, props.position.main = "house, store, etc., otherwise, props.position(x, y)"

      const size=100;
      const {body, target, name, sprite} = props

      const x = body.position.x;
      const y = body.position.y
      // const x = body.position.x - size/2;
      // const y = body.position.y - size/2;
      
      //ill move the import up one level to whatever view its in, then pass the imported pics as prop in the prop.sprite
      const BackgroundUrl = `url(${userImg})`;
      const userStyle = {
            position: "absolute",
            width: size,
            height: size,
            backgroundImage:BackgroundUrl,
            backgroundSize:size,
            left: x,
            top: y,
            transform: `rotate(${props.body.angle*57.3}deg)`
      }
      return (

            <div style={userStyle}>
            {/* <img src={Store} alt={"logo"}/> */}
            <div style={{color:'black'}}>{name}</div>
            </div>

      );
}
export default User;