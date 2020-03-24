import React, {useRef} from 'react';
import House from '../static/img/house.png';
import Store from '../static/img/store.png';
import Hatchery from '../static/img/hatchery.png';


const Building = (props) =>{
      //props.(position, name, sprite, renderer)
      //if main, props.position.main = "house, store, etc., otherwise, props.position(x, y)"

      const {body, name, sprite} = props
      const position = body.position;
      const size = Math.sqrt(body.area)


      const divHolder = useRef(null)
      const x = position.x
      const y = position.y
      // const x = position.x-size/2;
      // const y = position.y-size/2;
      //ill move the import up one level to whatever view its in, then pass the imported pics as prop in the prop.sprite
      const BackgroundUrl = `url(${name==="shop"?Store:name==="house"?House:name==="hatchery"?Hatchery:null})`;
      let divStyle={ position: "absolute", width: size, height: size, backgroundImage:BackgroundUrl, backgroundSize:size, left: x, top: y }
      const mouseOverHandler = (e)=>{
            divHolder.current.focus();
            divHolder.current.style.backgroundSize ='200px';//until i get opening door image or something

      }
      const mouseLeaveHandler = (e)=>{
            divHolder.current.focus();
            divHolder.current.style.backgroundSize =`${size}px`;

      }
      return (

            // <a href={"/neogotchi/"+props.name}>
            //             onMouseDown onMouseEnter onMouseLeave
            // onMouseMove onMouseOut onMouseOver onMouseUp
            <a>
                  <div onMouseEnter={e=>mouseOverHandler(e)} onMouseLeave={e=>mouseLeaveHandler(e)} ref={divHolder}  style={divStyle}>
                        {/* <img src={Store} alt={"logo"}/> */}
                        <div style={{color:'black'}}>{props.name}</div>
                  </div>
            </a>

      );
}
export default Building;

