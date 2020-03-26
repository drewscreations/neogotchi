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
            console.log('eggEntities',eggEntities, 'first one',eggEntities[0]!==undefined?eggEntities[0].name:'not loaded yet');
            myName=eggEntities[0];    
        })
        // then(console.log("state's inv",state.generalStoreInv))
    },[])

    
    
    return (
        <div>
            <GameEngine
                style={{ width: 1000, height: 600, backgroundImage:BackgroundUrl, backgroundSize:"100%"}}
                systems={[eggSystem]}
                entities={
                {
    

                    egg1: {position:{x:100,y:550}, egg:true, name:myName, sprite:'', renderer:<Egg/>},
                    egg2: {position:{x:300,y:550}, name:'egg', sprite:'', renderer:<Egg/>},
                    egg3: {position:{x:500,y:550}, name:'egg', sprite:'', renderer:<Egg/>}
                    // // user: { position:{x:100,y:100}, name:'user', sprite:'user.png', renderer: <User />},
                }}>

            </GameEngine>
            {/* <button onClick={(e)=>dispatch({type:'default', payload:'testing'})}>hi</button> */}
            <div>{state.generalStoreInv.map((inv, index)=><p key={index}>{inv.name}</p>)}</div>
            
        </div>
    )
}
