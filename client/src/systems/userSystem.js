
import React from 'react'
import DialogueBox from '../entities/DialogueBox'
const MoveUser  = (entities, { input })=>{

    const {payload:mouseMove} = input.find(x=>x.name === 'onMouseMove') || {};
    const {payload:drag} = input.find(x=>x.name === 'onDrag') || {};
    const {payload:mouseDown} = input.find(x=>x.name === 'onMouseDown') || {};
    const {payload:mouseOut} = input.find(x=>x.name === 'onMouseOut') || {};
    
    const {user, house, shop, hatchery} = entities;//entities: position, target, name, sprite
    const {position, target} = user;

    
    //update target takes coords = {x:0,y:0}
    // console.log('targetx:',target.x,'userx,',position.x)
    user.position.x += Math.abs(target.x-position.x)>10?(target.x-position.x)*.01:0;
    user.position.y += Math.abs(target.y-position.y)>10?(target.y-position.y)*.01:0;
    const collisions = {
        houseCollision:false,
        shopCollision:false,
        hatcheryCollision:false
    }
    const compensated = (input) => {
        return ({x:input.x+200,y:input.y+600})
    }
    const checkCollisions = () =>{
        if( Math.abs(target.x-house.position.x)<100&&Math.abs(target.y-house.position.y)<100){
            console.log('house collision')
            collisions.houseCollision=true
        } else if( Math.abs(target.x-shop.position.x)<100&&Math.abs(target.y-shop.position.y)<100){
            collisions.shopCollision=true
        }else if( Math.abs(target.x-hatchery.position.x)<100&&Math.abs(target.y-hatchery.position.y)<100){
            collisions.hatcheryCollision=true
        } else {//fix with an iterator
            collisions.houseCollision=false;
            collisions.shopCollision=false;
            collisions.hatcheryCollision=false
        }
        
    }
    checkCollisions(); 

    if (mouseMove&&!mouseOut){
        // console.log(input)
        
        // console.log(mouseMove.view) want to know how to stop following mouse if outside parent div
        

    }
    if(drag){
        console.log('dragging')
    }
    if(mouseDown){
        console.log('mouse down')
        // for (const [key, value] of Object.entries(entities)) {
        //     console.log(key, value);
        //   }
        const coords = {
            x:mouseDown.pageX,
            y:mouseDown.pageY
        }
        user.target.x=coords.x;
        user.target.y=coords.y
    }
    
    if(collisions){
        if(collisions.houseCollision){
            entities.dialogueBox={position:{x:100,y:100}, text:'Enter Home?', confirm:'none', renderer: <DialogueBox/>}
        } else if(collisions.shopCollision){
            entities.dialogueBox={position:{x:100,y:100}, text:'Enter Shop?', confirm:'none', renderer: <DialogueBox/>}
        } else if(collisions.hatcheryCollision){
            entities.dialogueBox={position:{x:100,y:100}, text:'Enter Hatchery?', confirm:'none', renderer: <DialogueBox/>}
        } else {
            entities.dialogueBox={}
        }
        // console.log('hes close to !',collisions)
        
    } else {
        // console.log(Math.abs(target.x-house.position.x))
        entities.dialogueBox={}
    }
    return entities
};

export default MoveUser;