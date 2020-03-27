import React, {useEffect, useReducer, useContext} from 'react'
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
        // then(console.log("state's inv",state.generalStoreInv))
    },[])

    const inventoryPromise = axios.get('http://localhost:8000/api/neoGotchi/hatcheryOwned')
        .then(res=>{
            const eggEntities = [...res.data.neogotchies];
            const myObjectEntries = [];
            eggEntities.map((item, index)=>myObjectEntries.push({position:{x:100+200*index,y:550}, egg:true, cost: 100*item.totalExp+100, id:item._id, name:item.name, sprite:'', renderer:<Egg/>}))
            return myObjectEntries
        })
    const clickHandler = () =>{
        axios.post('http://localhost:8000/api/neoGotchi/',{name:'newEgg'})
    }
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
            <button onClick={clickHandler()}>add egg</button>
        </div>
    )
}
