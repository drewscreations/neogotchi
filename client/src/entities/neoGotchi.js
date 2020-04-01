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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const NeoGotchi = (props) =>{
      const user = useContext(myUser);
      // console.log('user id',user.clientSideUser._id)
      const [navigateBtn, setNavigateBtn] = useState(false);
      //props.(position, name, sprite, renderer)
      //if main, props.position.main = "house, store, etc., otherwise, props.position(x, y)"

      const size=200;
      const {position, name, sprite, wholePackage} = props

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
      if (props.active){
            divHolder.current.style.border = '1px dotted blue';
      }
    const clickHandler= (e)=>{
      //   console.log('clicked in neogotchi!')
        divHolder.current.focus();
      //   console.log(divHolder.current);
        props.setActivePetRoot(e, props.wholePackage);
        props.setActivePet(e, props.wholePackage);
        
      }
      const speciesDict = {
            Egg:{
                  sprite:{0:neoEgg1, 1:neoEgg2, 2:neoEgg3, 3:neoEgg4, 4:neoEgg5},
                  size:100
            },
            Baby:{
                  sprite:{0:neoBaby1, 1:neoBaby2, 2:neoBaby3, 3:neoBaby4, 4:neoBaby5},
                  size:150
            },
            Child:{
                  sprite:{0:neoChild1, 1:neoChild2, 2:neoChild3, 3:neoChild4, 4:neoChild5},
                  size:200
            },
            Adult:{
                  sprite:{0:neoAdult1, 1:neoAdult2, 2:neoAdult3, 3:neoAdult4, 4:neoAdult5},
                  size:300
            },
      }
      const neoPicker = (species, stage) =>{
            // console.log('species',species,'stage',stage)
            return {
                  img:speciesDict[stage].sprite[species], 
                  size:speciesDict[stage].size}
      }
      const currentNeo = neoPicker(wholePackage.species, wholePackage.stage);
      // console.log(currentNeo)
      const divHolder = useRef(null)
      const divStyle = { position: "absolute", width: size, height: size, left: x, top: y-currentNeo.size }
      return (

            <div onClick={e=>clickHandler()}onMouseEnter={e=>mouseOverHandler(e)} onMouseLeave={e=>mouseLeaveHandler(e)} ref={divHolder} style={divStyle}>
                  <img src={currentNeo.img} alt={"logo"} width={currentNeo.size} height='auto' />
                  <div style={{color:'black'}}>Name: {props.name}</div>
                  {navigateBtn?
                        <Card variant="outlined">
                              <CardContent>
                                    <div>Name: {name}</div>
                                    <div>Exp: {props.wholePackage.totalExp}</div>
                                    <div>Hunger: {props.wholePackage.status.hunger}</div>
                                    <div>Happyness: {props.wholePackage.status.happiness}</div>
                              </CardContent>
                        </Card>
                  :null}
            </div>

      );
}
export default NeoGotchi;