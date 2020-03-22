import React from 'react';
import House from '../static/img/house.png';
import Store from '../static/img/store.png';
import Hatchery from '../static/img/hatchery.png';


const Building = (props) =>{
      //props.(position, name, sprite, renderer)
      //if main, props.position.main = "house, store, etc., otherwise, props.position(x, y)"
      const namedBuildings={
            house:{x:200, y:200},
            shop:{x:500, y:400},
            hatchery:{x:700, y:100}
            }
      const size=100;
      const {position, name, sprite} = props
      let x, y;
      if (position.main && namedBuildings[position.main]){
            x=namedBuildings[position.main].x - size/2;
            y=namedBuildings[position.main].y - size/2;
      } else {
            x = position.x - size/2;
            y = position.y - size/2;
      }
      //ill move the import up one level to whatever view its in, then pass the imported pics as prop in the prop.sprite
      const BackgroundUrl = `url(${name==="shop"?Store:name==="house"?House:name==="hatchery"?Hatchery:null})`;

      return (

            <a href={"/neogotchi/"+props.name}>
                  <div style={{ position: "relative", width: size, height: size, backgroundImage:BackgroundUrl, backgroundSize:size, left: x, top: y }}>
                        {/* <img src={Store} alt={"logo"}/> */}
                        <div style={{color:'black'}}>{props.name}</div>
                  </div>
            </a>

      );
}
export default Building;

