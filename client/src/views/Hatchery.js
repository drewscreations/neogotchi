import React from 'react'
import {GameEngine} from 'react-game-engine';
import HatcheryInside from '../static/img/hatchery_inside.png'
import Egg from '../entities/Egg';
import {navigate} from '@reach/router'

// import MoveUser from '../systems/userController'
export default function hatchery() {
    const BackgroundUrl = `url(${HatcheryInside})`;
    
    return (
        <div>
            <h1>hatchery</h1>
            <button onClick={()=>navigate('/neogotchi/world')}>back to world</button>
            <GameEngine
                style={{ width: 1000, height: 600, backgroundImage:BackgroundUrl, backgroundSize:"100%"}}
                // systems={[MoveUser]}
                entities={
                {
                    egg1: {position:{x:500,y:750}, name:'egg', sprite:'', renderer:<Egg/>},
                    egg2: {position:{x:700,y:750}, name:'egg', sprite:'', renderer:<Egg/>},
                    egg3: {position:{x:900,y:750}, name:'egg', sprite:'', renderer:<Egg/>}
                    // user: { position:{x:100,y:100}, name:'user', sprite:'user.png', renderer: <User />},
                }}>
            </GameEngine>
        </div>
    )
}
