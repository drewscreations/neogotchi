import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import userImg from '../static/img/user.png';

const DialogueBox = (props) =>{
      //props.(position, name, sprite, renderer)
      //if main, props.position.main = "house, store, etc., otherwise, props.position(x, y)"


      const {position, text, size, reqInput, linkTo} = props
      const {height, width} = size;
      const x = position.x;
      const y = position.y;
      
      //ill move the import up one level to whatever view its in, then pass the imported pics as prop in the prop.sprite
      // const BackgroundUrl = `url(${userImg})`;

      return (

            <div style={{ position: "absolute", width: width, height: height, backgroundColor:'purple', left: x, top: y }}>
            {/* <img src={Store} alt={"logo"}/> */}
            <div style={{color:'black'}}>{props.name}</div>
            {text}
            {reqInput? <Link to={linkTo} style={{textDecoration:'none'}}> <Button style={{color:'white', background:'skyblue'}}>GO!</Button> </Link>:'...'}
            </div>

      );
}
export default DialogueBox;




