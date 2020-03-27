import React, {useEffect, useReducer} from 'react'
import {GameEngine} from 'react-game-engine';
import HatcheryInside from '../static/img/hatchery_inside.png'
import Egg from '../entities/Egg';
import HomeBtn from '../components/HomeBtn';
import eggSystem from '../systems/eggSystem'
import axios from 'axios'

// import MoveUser from '../systems/userController'
const initialState = {
    generalStoreInv:[]
}
const reducer = (state, action) =>{ //this is used to update state...updates different parts of state depending on type of dispatch
    switch(action.type){
        case 'generalStoreInv':
            console.log('changing state generalInv')
            return {
                ...state,
                generalStoreInv:[
                    ...action.payload
                ]
            }
        default://do nothing but still rerender page
            return {
                ...state,  
            }
    }  
}
export default ()=> {
    const BackgroundUrl = `url(${HatcheryInside})`;
    const [state, dispatch] = useReducer(reducer, initialState);
    let eggEntities=[]
    let myName='';
    const createEggs = () =>{
        let eggEntities = []
        state.generalStoreInv.map((inv, index)=>eggEntities.push({position:{x:100,y:750}, name:inv.name, sprite:'', renderer:<Egg/>}))
        return eggEntities
    }
    
    useEffect(()=>{
        console.log('inside useEffect');
        axios.get('http://localhost:8000/api/neoGotchi/hatcheryOwned').
        then(res=>{
            // console.log(res.data.neogotchies);
            dispatch({
                type:'generalStoreInv',
                payload:[...res.data.neogotchies]
            })
        })
        .then(res=>{
            eggEntities=createEggs();
            // console.log('eggEntities',eggEntities, 'first one',eggEntities[0]!==undefined?eggEntities[0].name:'not loaded yet');
            myName=eggEntities[0];    
        })
        // then(console.log("state's inv",state.generalStoreInv))
    },[])

    const inventoryPromise = axios.get('http://localhost:8000/api/neoGotchi/hatcheryOwned')
        .then(res=>{
            const eggEntities = [...res.data.neogotchies];
            const myObjectEntries = [];
            eggEntities.map((item, index)=>myObjectEntries.push({position:{x:100+200*index,y:550}, egg:true, cost: 100*item.totalExp+100, name:item.name, sprite:'', renderer:<Egg/>}))
            return myObjectEntries
        })
    
    return (
        <div>
            <GameEngine
                style={{ width: 1000, height: 600, backgroundImage:BackgroundUrl, backgroundSize:"100%"}}
                systems={[eggSystem]}
                entities={
                {
                    inventoryPromise
                }}>

            </GameEngine>
            
        </div>
    )
}
