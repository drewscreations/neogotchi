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
    let gameEngineRef = useRef(null);
    // useEffect(()=>{
    //     gameEngineRef.current.focus()
    // },[])
    

                
   
    
    // Render.run(render);
    

    const setupWorld = () => {
        var Engine = Matter.Engine,

        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        MouseConstraint = Matter.MouseConstraint;
        var engine = Engine.create();
        const defaultCategory = 0x0001, userCategory = 0x0002

        var house = Bodies.rectangle(100, 250, 100, 100, { isStatic: true }, {collisionFilter: {category: defaultCategory, group:1}});
        var shop = Bodies.rectangle(380, 600, 100, 100, { isStatic: true },{collisionFilter: {category: defaultCategory}});
        var hatchery = Bodies.rectangle(500, 300, 100, 100, { isStatic: true },{collisionFilter: {category: defaultCategory}});
        var ground = Bodies.rectangle(400, 800, 800, 60, { isStatic: true }, {collisionFilter: {category: defaultCategory}});
        var wallLeft = Bodies.rectangle(20, 400, 60, 800, { isStatic: true }, {collisionFilter: {category: defaultCategory}});
        var wallRight = Bodies.rectangle(800, 400, 60, 800, { isStatic: true }, {collisionFilter: {category: defaultCategory, group:1}});
        var ceiling = Bodies.rectangle(400, 0, 800, 60, { isStatic: true }, {collisionFilter: {category: defaultCategory}});
        var user = Bodies.rectangle(300, 100, 100, 100, {collisionFilter: {category: userCategory, group:1}});
        user.collisionFilter.group =1;
        house.collisionFilter.group =1
        World.add(engine.world, [shop, hatchery, house, user, ground, wallLeft, wallRight, ceiling]);
    //     var mouse = Mouse.create(),
    //     mouseConstraint = MouseConstraint.create(engine, {
    //       mouse: mouse,
    //       constraint: {
    //         stiffness: 0.2,
    //         render: {
    //           visible: true
    //         }
    //       }
    //     });
  
    //   World.add(engine.world, mouseConstraint);
        return {//order goes lowest -> highest in render priority
            background:{body:ground, size: [2000,2000], color:'white', renderer: <Box/>},
            physics: { engine: engine, world: engine.world },
            // house: { body: house, size: [50, 50], color: 'red', renderer: <Box/>},
            house: { body: house, name:'house', sprite:'house.png', renderer: <Building />},
            shop: { body: shop,  name:'shop', sprite:'store.png', renderer: <Building />},
            hatchery: { body: hatchery,  name:'hatchery', sprite:'hatchery.png', renderer: <Building />},
            ground:{ body: ground, size: [800, 60], color: 'purple', renderer: <Box/>},
            wallLeft:{ body: wallLeft, size: [60, 800], color: 'pink', renderer: <Box/>},
            wallRight:{ body: wallRight, size: [60, 800], color: 'red', renderer: <Box/>},
            ceiling:{ body: ceiling, size: [800, 60], color: 'brown', renderer: <Box/>},
            dialogueBox:{},
            user: {body: user, target:{x:400,y:0}, name:'user', sprite:'user.png', renderer: <User />},
            
        }
    }
    const matterEntities = setupWorld();
    
    return (
        <div style={divStyle}>
            <h1>world, move with "wasd"</h1>
            <GameEngine id='gameEngine' ref={(ref)=>{gameEngineRef=ref}}
                style={{ width: 800, height: 600, backgroundColor: "white" }}
                // systems={[MoveUser, Physics]}
                systems={[ Physics]}
                entities={
                {
                    // house: { position:{...namedBuildings.house}, name:'house', sprite:'house.png', renderer: <Building />},
                    // shop: { position:{...namedBuildings.shop}, name:'shop', sprite:'store.png', renderer: <Building />},
                    // hatchery: { position:{...namedBuildings.hatchery}, name:'hatchery', sprite:'hatchery.png', renderer: <Building />},
                    // user: { position:{x:400,y:350}, target:{x:200,y:0}, name:'user', sprite:'user.png', renderer: <User />},
                    
                    ...matterEntities
                }}>
            </GameEngine>
            <div ref={myRef}/>

        </div>
    )
}
