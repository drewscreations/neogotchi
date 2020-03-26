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
    house:{x:200, y:200},
    shop:{x:400, y:300},
    hatchery:{x:700, y:600}
    }
const namedAdventures={
    lake:{x:100, y:400},
    forrest: {x:650, y:300},
}



export default function MyWorld() {
    const divStyle={ position: "static"}


    
    return (
        <div style={divStyle}>
            <h1>Welcome to the world of NeoGotchi!</h1>
            <GameEngine id='gameEngine' 
                style={{ width: 800, height: 600, backgroundColor: "white" }}
                // systems={[MoveUser, Physics]}
                systems={[]}
                entities={
                {
                    house: { body:{position:{...namedBuildings.house}, area:10000}, name:'house', sprite:'house.png', renderer: <Building />},
                    store: { body:{position:{...namedBuildings.shop}, area:10000}, name:'store', sprite:'store.png', renderer: <Building />},
                    hatchery: { body:{position:{...namedBuildings.hatchery}, area:10000}, name:'hatchery', sprite:'hatchery.png', renderer: <Building />},
                    lake: { body:{position:{...namedAdventures.lake}, area:10000}, name:'lake', sprite:'lake.png', renderer: <Building />},
                    forrest: { body:{position:{...namedAdventures.forrest}, area:10000}, name:'forrest', sprite:'forrest.png', renderer: <Building />},
                    
                    dialogueBox:{},
                    // user: { position:{x:400,y:350}, target:{x:200,y:0}, name:'user', sprite:'user.png', renderer: <User />},
                
                }}>
            </GameEngine>

        </div>
    )
}
