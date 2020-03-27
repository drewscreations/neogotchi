import React from 'react'
import HomeBtn from '../components/HomeBtn';
import StoreInside from '../static/img/store_inside.png'
import {GameEngine} from 'react-game-engine';
import { Button } from '@material-ui/core';
import Item from '../entities/Item'
import itemSystem from '../systems/itemSystem'
import axios from 'axios';

export default function GeneralStore() {
    const BackgroundUrl = `url(${StoreInside})`;
    const inventoryPromise = axios.get('http://localhost:8000/api/items')
        .then(res=>{
            const storeInventory = [...res.data.items];
            const storeEntries = [];
            storeInventory.map((item, index)=>storeEntries.push({position:{x:250+200*index,y:600}, item:true, cost: item.cost, name:item.name, description:item.description, sprite:'', renderer:<Item/>}))
            return storeEntries
        })
    return (
        <div>
            <h1>GeneralStore</h1>
            <HomeBtn/>
            <GameEngine
                style={{ width: 1000, height: 600, backgroundImage:BackgroundUrl, backgroundSize:"100%"}}
                systems={[itemSystem]}
                entities={
                {
                    inventoryPromise
                    // user: { position:{x:100,y:100}, name:'user', sprite:'user.png', renderer: <User />},
                }}>
            </GameEngine>
            
        </div>
    )
}
