import React, {useState, useContext, useRef} from 'react';

import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import neoEgg1 from '../static/img/pets/egg1.png'
import neoEgg2 from '../static/img/pets/egg2.png'
import neoEgg3 from '../static/img/pets/egg3.png'
import neoEgg4 from '../static/img/pets/egg4.png'
import neoEgg5 from '../static/img/pets/egg5.png'
import neoChild1 from '../static/img/pets/child1.png'
import neoChild2 from '../static/img/pets/child2.png'
import neoChild3 from '../static/img/pets/child3.png'
import neoChild4 from '../static/img/pets/child4.png'
import neoChild5 from '../static/img/pets/child5.png'
import neoBaby1 from '../static/img/pets/baby1.png'
import neoBaby2 from '../static/img/pets/baby2.png'
import neoBaby3 from '../static/img/pets/baby3.png'
import neoBaby4 from '../static/img/pets/baby4.png'
import neoBaby5 from '../static/img/pets/baby5.png'
import neoAdult1 from '../static/img/pets/adult1.png'
import neoAdult2 from '../static/img/pets/adult2.png'
import neoAdult3 from '../static/img/pets/adult3.png'
import neoAdult4 from '../static/img/pets/adult4.png'
import neoAdult5 from '../static/img/pets/adult5.png'
import myUser from '../context/context'
import axios from 'axios'
const NeoGotchi = (props) =>{
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
    const clickHandler= (e)=>{
        console.log('clicked!')
        divHolder.current.focus();
        console.log(divHolder.current);
        divHolder.current.style.border = '1px dotted blue';
      }
      const divHolder = useRef(null)
      const divStyle = { position: "absolute", width: size, height: size, left: x, top: y }
      return (

            <div onClick={e=>clickHandler()}onMouseEnter={e=>mouseOverHandler(e)} onMouseLeave={e=>mouseLeaveHandler(e)} ref={divHolder} style={divStyle}>
            <img src={neoChild5} alt={"logo"} width={size} height='auto' />
            <div style={{color:'black'}}>Name: {props.name}</div>

            </div>

      );
}
export default NeoGotchi;