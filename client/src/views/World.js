import React from 'react'
import {GameEngine} from 'react-game-engine';
import Building from '../entities/Building';
import User from '../entities/User';
import MoveUser from '../systems/system'
export default function world() {
    return (
        <div>
            <h1>world</h1>
            <GameEngine
                style={{ width: 1000, height: 600, backgroundColor: "white" }}
                systems={[MoveUser]}
                entities={
                {
                    house: { position:{main:'house'}, name:'house', sprite:'house.png', renderer: <Building />},
                    shop: { position:{main:'shop'}, name:'shop', sprite:'store.png', renderer: <Building />},
                    hatchery: { position:{main:'hatchery'}, name:'hatchery', sprite:'hatchery.png', renderer: <Building />},
                    user: { position:{x:100,y:100}, name:'user', sprite:'user.png', renderer: <User />},
                }}>
            </GameEngine>
        </div>
    )
}
