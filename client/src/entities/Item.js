import React, {useState} from 'react';

import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import DefaultEgg from '../static/img/defaultEgg.png'
const Item = (props) =>{
      const [navigateBtn, setNavigateBtn] = useState(false);
      //props.(position, name, sprite, renderer)
      //if main, props.position.main = "house, store, etc., otherwise, props.position(x, y)"

      const size=100;
      const {position, name, sprite} = props

      const x = position.x - size/2;
      const y = position.y - size/2;
      
      //ill move the import up one level to whatever view its in, then pass the imported pics as prop in the prop.sprite
      // console.log('making egg')
      const mouseOverHandler = (e)=>{
            setNavigateBtn(true);
      }
      const mouseLeaveHandler = (e)=>{
            setNavigateBtn(false)
      }
      const divStyle = { position: "absolute", width: size, height: size, left: x, top: y }
      return (

            <div onMouseEnter={e=>mouseOverHandler(e)} onMouseLeave={e=>mouseLeaveHandler(e)} style={divStyle}>
            <img src={DefaultEgg} alt={"logo"}/>
            <div style={{backgroundColor:'grey',color:'black'}}>Name: {props.name}, Cost: {props.cost}</div>
            {navigateBtn?<Link to='/' style={{textDecoration:'none'}}> <Button style={{color:'white', background:'skyblue'}}>Buy Me!</Button> </Link>:null}
            </div>

      );
}
export default Item;