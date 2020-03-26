import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import House from '../static/img/house.png';
import Store from '../static/img/store.png';
import Hatchery from '../static/img/hatchery.png';
import Lake from '../static/img/lake.png'
import Forrest from '../static/img/forrest.png'


const Building = (props) =>{
      const [navigateBtn, setNavigateBtn] = useState(false);
      //props.(position, name, sprite, renderer)
      //if main, props.position.main = "house, store, etc., otherwise, props.position(x, y)"

      const {body, name, sprite} = props
      const position = body.position;
      const size = Math.sqrt(body.area)


      const picHolder = useRef(null)
      const x = position.x
      const y = position.y
      // const x = position.x-size/2;
      // const y = position.y-size/2;
      //ill move the import up one level to whatever view its in, then pass the imported pics as prop in the prop.sprite
      const BackgroundUrl = `url(${name==="shop"?Store:name==="house"?House:name==="hatchery"?Hatchery:null})`;
      // let divStyle={ position: "absolute", width: size, height: size, backgroundImage:BackgroundUrl, backgroundSize:'100px', left: x, top: y }
      let divStyle={ position: "absolute", width: size, height: size, left: x, top: y }
     
      const mouseOverHandler = (e)=>{
            picHolder.current.focus();
            // console.log(picHolder.current.src)
            // picHolder.current.style.height ='200px';//until i get opening door image or something
            setNavigateBtn(true);
      }
      const mouseLeaveHandler = (e)=>{
            picHolder.current.focus();
            // picHolder.current.style.height =`${size}px`;
            setNavigateBtn(false)
      }
      const linkToDict={
            house:'/neogotchi/home',
            store:'/neogotchi/generalstore',
            hatchery:'/neogotchi/hatchery',
            lake:'/neogotchi/lake',
            forrest:'/neogotchi/forrest'
      }
      const linkTo = linkToDict[name]

      return (
            <a>
                  <div onMouseEnter={e=>mouseOverHandler(e)} onMouseLeave={e=>mouseLeaveHandler(e)}  style={divStyle}>
                        <img src={name==="store"?Store:name==="house"?House:name==="hatchery"?Hatchery:name==="lake"?Lake:name==="forrest"?Forrest:null} style={{height:'100%', width:'100%', objectFit: 'contain'}} alt={"logo"} ref={picHolder} />
                        <div style={{color:'black'}}>{props.name}</div>
                        {navigateBtn?<Link to={linkTo} style={{textDecoration:'none'}}> <Button style={{color:'white', background:'skyblue'}}>GO!</Button> </Link>:null}
                  </div>
            </a>

      );
}
export default Building;

