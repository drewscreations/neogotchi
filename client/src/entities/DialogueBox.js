import React from 'react';
import userImg from '../static/img/user.png';

const Egg = (props) =>{
      //props.(position, name, sprite, renderer)
      //if main, props.position.main = "house, store, etc., otherwise, props.position(x, y)"

      const size=100;
      const {position, text, sprite} = props

      const x = position.x;
      const y = position.y;
      
      //ill move the import up one level to whatever view its in, then pass the imported pics as prop in the prop.sprite
      const BackgroundUrl = `url(${userImg})`;

      return (

            <div style={{ position: "absolute", width: size, height: size, backgroundColor:'purple', left: x, top: y }}>
            {/* <img src={Store} alt={"logo"}/> */}
            <div style={{color:'black'}}>{props.name}</div>
            {text}
            </div>

      );
}
export default Egg;