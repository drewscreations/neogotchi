import React, {useReducer, useContext, useEffect} from 'react'
import {GameEngine} from 'react-game-engine';
import { Button } from '@material-ui/core';
import HomeInside from '../static/img/house_inside.png'
import User from '../entities/User';
import myUser from '../context/context'
import axios from 'axios'
import neoGotchiSystem from '../systems/neoGotchiSystem'
import NeoGotchi from '../entities/neoGotchi'

import MoveUser from '../systems/userSystem'

const initialState = {
    userID:'test',
    ownedPets:['none yet'],
    activePet:{},
    loaded:false,
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'ownedPets':
            console.log('changing state generalInv')
            return {
                ...state,
                ownedPets:[...action.payload]
            }
        default://do nothing but still rerender page
            return {
                ...state,  
                [action.type]:[action.payload]
            }
    }  

}
export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const user = useContext(myUser);
    console.log('user',user)
    const BackgroundUrl = `url(${HomeInside})`;
    const userID = user.clientSideUser._id;
    console.log('userid',userID)
    useEffect(()=>{
        dispatch({type:'userID', payload:userID});
        dispatch({type:'loaded', payload:true})},[])
    console.log('user id from state',state.userID)
    useEffect(()=>{
        if(state.loaded&&userID!==undefined){
        axios.get('http://localhost:8000/api/neoGotchi/userOwned/'+userID)
        .then(res=>{
            console.log('successful axios response',res.data.neogotchies);
            dispatch({type:'ownedPets',payload:res.data.neogotchies});
            console.log('state.owned pets is now',state.ownedPets)
        })
        .then(
            dispatch({type:'loaded', payload:false})
        )
        
    }},[userID])
    console.log(state)
    const inventoryPromise = axios.get('http://localhost:8000/api/neoGotchi/userOwned/'+userID)
        .then(res=>{
            // console.log('incventory promise res.data:',res.data)
            const neoEntities = [...res.data.neogotchies];
            // console.log('eneo enitiesL:',neoEntities)
            const myObjectEntries = [];
            neoEntities.map((item, index)=>myObjectEntries.push({position:{x:100+200*index,y:550}, neo:true, direction:'left', active:false, wholePackage:item, id:item._id, name:item.name, sprite:'', renderer:<NeoGotchi/>}))
            console.log('myobject entries:',myObjectEntries)
            return myObjectEntries
        })
    return (
        <div>
            <GameEngine
                style={{ width: 1000, height: 600, backgroundImage:BackgroundUrl, backgroundSize:"100%"}}
                systems={[neoGotchiSystem]}
                entities={
                {
                    inventoryPromise
                    // user: { position:{x:100,y:100}, name:'user', sprite:'user.png', renderer: <User />},
                }}>
                <Button style={{color:'white', background: '#836379', margin: '4px'}}>Feed</Button>
                <Button style={{color:'white', background: '#836379', margin: '4px'}}>Play</Button>
                <Button style={{color:'white', background: '#836379', margin: '4px'}}>Rest</Button>
                <Button style={{color:'white', background: '#836379', margin: '4px'}}>Work</Button>
            </GameEngine>
            {state.ownedPets.map((item, index)=><p key={index}>pet: {item.name}</p>)}
        </div>
    )
}
