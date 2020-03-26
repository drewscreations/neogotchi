import React from 'react'
import {GameEngine} from 'react-game-engine';
import { Button } from '@material-ui/core';
import HomeInside from '../static/img/house_inside.png'
import User from '../entities/User';

import MoveUser from '../systems/userSystem'
export default function home() {
    const BackgroundUrl = `url(${HomeInside})`;
    return (
        <div>
            <GameEngine
                style={{ width: 1000, height: 600, backgroundImage:BackgroundUrl, backgroundSize:"100%"}}
                // systems={[MoveUser]}
                entities={
                {
                    // user: { position:{x:100,y:100}, name:'user', sprite:'user.png', renderer: <User />},
                }}>
                <Button style={{color:'white', background: '#836379', margin: '4px'}}>Feed</Button>
                <Button style={{color:'white', background: '#836379', margin: '4px'}}>Play</Button>
                <Button style={{color:'white', background: '#836379', margin: '4px'}}>Rest</Button>
                <Button style={{color:'white', background: '#836379', margin: '4px'}}>Work</Button>
            </GameEngine>
        </div>
    )
}
