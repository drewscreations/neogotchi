import React from 'react';
import axios from 'axios';
import InteractionButton from '../entities/InteractionButton';

const expDict={
    feed:{
        status:{
            hunger:20,
            happiness:20,
        }
    },
    play:{
        status:{
            hunger:-15,
            happiness:30,
        },
        exp:{
            dexterity:20,
        }
    },
    rest:{
        status:{
            hunger:-10,
            happiness:10,
        },
        exp:{
            dexterity:10,
            strength:10,
            intelligence:10,
        },
    },
    work:{
        status:{
            hunger:-20,
            happiness:-10,
        },
        exp:{
            dexterity:20,
            strength:30,
            intelligence:10,
        },
    }
}
const goldDict={//need user ID
    work:{//the work button
        gold:500
    }
}
const randomVal = (num) => {
    return Math.random()*num
}
const buttonDict = { //buttonType:buttonText
    feed:"feed",
    play:"play",
    work:"work",
    rest:"rest"
}

const buttonSystem = (entities, {input}) => {
    // const {payload:onKeyDown} = input.find(x=>x.name === 'onKeyDown') || {};
    // const {activePet} = entities;
    // console.log('button enetities',entities.activePet)
    // console.log('butons active pet:',activePet._id)
    const clickHandler = (e, buttonType) => {//********need neogotchi not just ID*************
        // console.log('button system active pet',activePet)
        // const id = entities.activePet._id//make active neo
        // console.log('button id',id)
        // e.preventDefault();
        const expVals = expDict[buttonType] //button type must be feed, play rest work
        for (const action in expVals) {
            const neogotchi = entities.activePet;
            for (const stat in expVals[action].status){
                expVals[action].status[stat] = neogotchi.status[stat] + randomVal(expDict[buttonType].status[stat])
            };
            for (const stat in expVals[action].exp){
                expVals[action].exp[stat] = neogotchi.exp[stat] + randomVal(expDict[buttonType].exp[stat])
            }
        }
        console.log('exp vals',expVals)
        axios.put(`http://localhost:8000/api/neoGotchi/${entities.activePet._id}/edit`, {'exp.strength':'2000', 'status.hunger':'5'})
        .then(res => {
            console.log('res data neo',res.data.neogotchi);
            entities[entities.activePet.name].wholePackage=res.data.neogotchi;
        })//neogotchi.wholePackage = res
        .catch(err => console.log(err));
    }
    if(entities && entities.settup === true){
        console.log('setting up buttons')
        entities = {
            ...entities, //can do these button settups in a loop
            feedBtn:{
                text:'feed!',
                activeNeogotchi:null,
                clickHandler:clickHandler, 
                buttonType:'feed',
                position:1,
                renderer:<InteractionButton/>
                },
            playBtn:{
                text:'play!',
                activeNeogotchi:null,
                clickHandler:clickHandler, 
                buttonType:'play',
                position:2,
                renderer:<InteractionButton/>
                },
            restBtn:{
                text:'rest!',
                activeNeogotchi:null,
                clickHandler:clickHandler, 
                buttonType:'rest',
                position:3,
                renderer:<InteractionButton/>
                },
            workBtn:{
                text:'work!',
                activeNeogotchi:null,
                clickHandler:clickHandler, 
                buttonType:'work',
                position:4,
                renderer:<InteractionButton/>
                },
            settup:false 
        }           
    }
    // for (const entity in entities) {
    //     // console.log(entity)
    //     if (entities[entity].button===true){// if the entity is a button (button key is true)
    //         const button = entities[entity];//call it button locally
    //         // console.log('its true')
    //         //button.action
    //         //button entitiy parameters: on click, text (feed, play, work)
    //         //on click needs target, sends exp and inventory update and returns updated neogotchi
    //         //exp calculated from item used, aciton type, user pet raising exp?

            
    //     }
    // };

    
    return entities
}

export default buttonSystem