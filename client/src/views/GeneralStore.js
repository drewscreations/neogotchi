import React from 'react'
import HomeBtn from '../components/HomeBtn';
import StoreInside from '../static/img/store_inside.png'
import {GameEngine} from 'react-game-engine';
import { Button } from '@material-ui/core';

export default function GeneralStore() {
    const BackgroundUrl = `url(${StoreInside})`;
    return (
        <div>
            <h1>GeneralStore</h1>
            <GameEngine
                style={{ width: 1000, height: 600, backgroundImage:BackgroundUrl, backgroundSize:"100%"}}
                // systems={[MoveUser]}
                entities={
                {
                    // user: { position:{x:100,y:100}, name:'user', sprite:'user.png', renderer: <User />},
                }}>
            </GameEngine>
            <HomeBtn/>
        </div>
    )
}
