import React, {useReducer, useContext, useEffect} from 'react'
import {GameEngine} from 'react-game-engine';
import { Button } from '@material-ui/core';
import HomeInside from '../static/img/house_inside.png'
import User from '../entities/User';
import myUser from '../context/context'
import axios from 'axios'
import neoGotchiSystem from '../systems/neoGotchiSystem'
import NeoGotchi from '../entities/neoGotchi'
import WorkBtn from '../components/WorkBtn';
import FeedBtn from '../components/FeedBtn';
import PlayBtn from '../components/PlayBtn';
import RestBtn from '../components/RestBtn';


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
        case 'activePet':
            return {
                ...state,
                activePet:{...action.payload}
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

    const clickHandler = (e, pet) => {
        console.log('pet has been clicked')
        dispatch({
            type:'activePet',
            payload:{...pet}
        })
    }

    const setActivePet = (e, id) => {
        dispatch()
    }

    const inventoryPromise = axios.get('http://localhost:8000/api/neoGotchi/userOwned/'+userID)
        .then(res=>{
            // console.log('incventory promise res.data:',res.data)
            const neoEntities = [...res.data.neogotchies];
            // console.log('eneo enitiesL:',neoEntities)
            const myObjectEntries = [];
            neoEntities.map((item, index)=>
                myObjectEntries.push({position:{x:100+200*index,y:550}, neo:true, 
                    direction:'left', active:false, wholePackage:item, id:item._id, 
                    name:item.name, sprite:'', setActivePet:clickHandler, renderer:<NeoGotchi/>}))
            console.log('myobject entries:',myObjectEntries)
            return myObjectEntries
        })
    return (
        <div>
            {state.activePet.status!==undefined? <p>Active Pet: {state.activePet.name} 
            <br/>Hunger: {state.activePet.status.hunger}<br/>Happiness: {state.activePet.status.happiness}</p> :<p>no active pet</p>}
            <GameEngine
                style={{ width: 1000, height: 600, backgroundImage:BackgroundUrl, backgroundSize:"100%"}}
                systems={[neoGotchiSystem]}
                entities={
                {
                    inventoryPromise
                    // user: { position:{x:100,y:100}, name:'user', sprite:'user.png', renderer: <User />},
                }}>
                    {/* {JSON.stringify(state)} */}
                <FeedBtn neogotchi={state.activePet}/>
                <PlayBtn neogotchi={state.activePet}/>          
                <RestBtn neogotchi={state.activePet}/>
                <WorkBtn neogotchi={state.activePet}/>
            </GameEngine>
            {/* {state.ownedPets.map((item, index)=><p key={index}>pet: {item.name}</p>)} */}
        </div>
    )
}

