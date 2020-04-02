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
    return Math.floor(Math.random()*num)
}
const buttonDict = { //buttonType:buttonText
    feed:"feed",
    play:"play",
    work:"work",
    rest:"rest"
}

const buttonSystem = (entities, {input}) => {
    const clickHandler = (e, buttonType) => {
        // e.preventDefault();
        const expVals = expDict[buttonType] //button type must be feed, play rest work
        const neogotchi = entities.activePet;
        const expSend = {};
        for (const action in expVals) {//using for loop because I dont know if just status, exp, or both are affected
            for (const stat in expVals[action]){//made expsend with strings as keys because thats how mongoose wants it?
                expSend[`${action}.${stat}`] = neogotchi[action][stat]+randomVal(expVals[action][stat])
            }
        }
        console.log('exp vals',expVals)
        console.log('neo vals',neogotchi.status, neogotchi.exp)
        axios.put(`http://localhost:8000/api/neoGotchi/${entities.activePet._id}/edit`, {...expSend})
        .then(res => {
            console.log('res data neo',res.data.neogotchi);
            entities[entities.activePet.name].wholePackage=res.data.neogotchi;
        })//neogotchi.wholePackage = res
        .catch(err => console.log('error with axios put',err));
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

    
    return entities
}

export default buttonSystem