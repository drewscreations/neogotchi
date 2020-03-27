import React, {useEffect} from 'react'
import Egg from '../entities/Egg'

const eggHandler = (entities, {input}) => {
    const {payload:onKeyDown} = input.find(x=>x.name === 'onKeyDown') || {};
    const {inventoryPromise} = entities
    if(onKeyDown){
        // console.log('keypress',onKeyDown.keyCode)
        const input = onKeyDown.keyCode
        if(input===65){
            console.log('all entities:',entities);
            // console.log(entities.inventoryPromise);
            
            }
        }
    if (entities.inventoryPromise){
        inventoryPromise.then(res=>{
            res.map((item, index)=>entities[item.name]=item)
        })
        // entities.inventoryPromise=false// only does this once hopefully
    }
    return entities
    }

export default eggHandler