import React from 'react'
import {GameEngine} from 'react-game-engine';
import HomeInside from '../static/img/house_inside.png'
import User from '../entities/User';
import {navigate} from '@reach/router'

import MoveUser from '../systems/userSystem'
export default function home() {
    const BackgroundUrl = `url(${HomeInside})`;
    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=>navigate('/neogotchi/world')}>back to world</button>
            <GameEngine
                style={{ width: 1000, height: 600, backgroundImage:BackgroundUrl, backgroundSize:"100%"}}
                // systems={[MoveUser]}
                entities={
                {
                    // user: { position:{x:100,y:100}, name:'user', sprite:'user.png', renderer: <User />},
                }}>
            </GameEngine>
        </div>
    )
}
