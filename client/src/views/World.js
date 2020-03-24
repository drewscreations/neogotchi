import React, {useRef, useEffect} from 'react'
import {GameEngine} from 'react-game-engine';
import Building from '../entities/Building';
import User from '../entities/User';
import DialogueBox from '../entities/DialogueBox'
import Box from '../entities/Box'
import MoveUser from '../systems/userSystem'
import Matter from 'matter-js'
import Physics from '../systems/Physics';
const namedBuildings={
    house:{x:500, y:200},
    shop:{x:800, y:300},
    hatchery:{x:700, y:600}
    }



export default function MyWorld() {
    const divStyle={ position: "static"}
    const myRef = useRef(null);
    useEffect(()=>{
        myRef.current.focus()
    },[])
    
    

                
   
    
    // Render.run(render);
    

    const setupWorld = () => {
        var Engine = Matter.Engine,
        Render = Matter.Render,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        MouseConstraint = Matter.MouseConstraint;
        var engine = Engine.create();

        var house = Bodies.rectangle(400, 200, 100, 100, { isStatic: true });
        var shop = Bodies.rectangle(380, 500, 100, 100, { isStatic: true });
        var hatchery = Bodies.rectangle(460, 300, 100, 100, { isStatic: true });
        var ground = Bodies.rectangle(200, 600, 810, 60, { isStatic: true });
        var user = Bodies.rectangle(200, 200, 100, 100);
        
        World.add(engine.world, [shop, hatchery, house, user, ground]);
        var mouse = Mouse.create(),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: true
            }
          }
        });
  
      World.add(engine.world, mouseConstraint);
  
    //   Matter.Events.on(mouseConstraint, "mousedown", function(event) {
    //     // World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
    //   });
        Engine.run(engine);


        return {
            physics: { engine: engine, world: engine.world },
            // house: { body: house, size: [50, 50], color: 'red', renderer: <Box/>},
            house: { body: house, name:'house', sprite:'house.png', renderer: <Building />},
            shop: { body: shop,  name:'shop', sprite:'store.png', renderer: <Building />},
            hatchery: { body: hatchery,  name:'hatchery', sprite:'hatchery.png', renderer: <Building />},
            ground:{ body: ground, size: [810, 60], color: 'purple', renderer: <Box/>},
            user: {body: user, target:{x:200,y:0}, name:'user', sprite:'user.png', renderer: <User />}
        }
    }
    const matterEntities = setupWorld();
  
    return (
        <div style={divStyle}>
            <h1>world</h1>
            <GameEngine
                style={{ width: 800, height: 600, backgroundColor: "white" }}
                // systems={[MoveUser, Physics]}
                // systems={[ Physics]}
                entities={
                {
                    // house: { position:{...namedBuildings.house}, name:'house', sprite:'house.png', renderer: <Building />},
                    // shop: { position:{...namedBuildings.shop}, name:'shop', sprite:'store.png', renderer: <Building />},
                    // hatchery: { position:{...namedBuildings.hatchery}, name:'hatchery', sprite:'hatchery.png', renderer: <Building />},
                    // user: { position:{x:400,y:350}, target:{x:200,y:0}, name:'user', sprite:'user.png', renderer: <User />},
                    // dialogueBox:{},
                    ...matterEntities
                }}>
            </GameEngine>
            <div ref={myRef}/>

        </div>
    )
}
