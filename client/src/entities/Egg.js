import React, {useState, useContext} from 'react';

import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import DefaultEgg from '../static/img/defaultEgg.png'
import neoEgg1 from '../static/img/pets/egg1.png'
import neoEgg2 from '../static/img/pets/egg2.png'
import neoEgg3 from '../static/img/pets/egg3.png'
import neoEgg4 from '../static/img/pets/egg4.png'
import neoEgg5 from '../static/img/pets/egg5.png'
import myUser from '../context/context'
import axios from 'axios'
const Egg = (props) =>{
      const user = useContext(myUser);
      // console.log('user id',user.clientSideUser._id)
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
      const onPurchaseHandler = (e) =>{
            console.log('inside purchase handler');
            axios.put(`http://localhost:8000/api/user/${user.clientSideUser.userID}`, {gold: user.clientSideUser.gold - props.cost})
            axios.put('http://localhost:8000/api/neoGotchi/'+props.id+'/edit', {owner:user.clientSideUser._id});
            console.log('user id',user.clientSideUser._id)
      }
      const divStyle = { position: "absolute", width: size, height: size, left: x, top: y }
      const eggPicker = (myIndex) =>{
            const allEggs = [neoEgg1, neoEgg2, neoEgg3, neoEgg4, neoEgg5, DefaultEgg]
            return allEggs[myIndex] 
      }
      return (

            <div onMouseEnter={e=>mouseOverHandler(e)} onMouseLeave={e=>mouseLeaveHandler(e)} style={divStyle}>
            <img src={eggPicker(props.species)} alt={"logo"} width='200px' height='auto'/>
            <div style={{color:'black'}}>Name: {props.name}, Cost: {props.cost}</div>
            {navigateBtn?<Button onClick={(e)=>onPurchaseHandler()} style={{color:'white', background:'skyblue'}}>Buy Me!</Button>:null}
            </div>

      );
}
export default Egg;