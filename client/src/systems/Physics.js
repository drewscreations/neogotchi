import React from 'react'
import Matter from "matter-js";
import DialogueBox from '../entities/DialogueBox'

const Physics = (entities, { time, input }) => {
    const {payload:onKeyDown} = input.find(x=>x.name === 'onKeyDown') || {};
    const engine = entities.physics.engine;
    // let world = entities.physics.world;
    const {user, house, shop, hatchery, dialogueBox} = entities;
    if(onKeyDown){
        // console.log('keypress',onKeyDown.keyCode)
        const input = onKeyDown.keyCode
        if(input===65){
            Matter.Body.applyForce( user.body, user.body.position, {x: -0.10, y: 0.0})
        }else if(input===87){
            Matter.Body.applyForce( user.body, user.body.position, {x: 0.0, y: -0.50})
        } else if(input===68){
            Matter.Body.applyForce( user.body, user.body.position, {x: 0.10, y: 0.00})
        } else if(input===83){
            Matter.Body.applyForce( user.body, user.body.position, {x: 0.0, y: 0.10})
        }
    }
    const resetUser = () =>{
        Matter.Body.setPosition(user.body, {x:100, y:100})
    }
    if(Math.abs(user.body.position.x-house.body.position.x)<100&&Math.abs(user.body.position.y-house.body.position.y)<100){
        dialogueBox.text="enter home";
        dialogueBox.position={x:400,y:350}
        dialogueBox.renderer= <DialogueBox />
        
    }
    if(Math.abs(user.body.position.x-hatchery.body.position.x)<100&&Math.abs(user.body.position.y-hatchery.body.position.y)<100){
        dialogueBox.text="enter hatchery";
        dialogueBox.position={x:400,y:350}
        dialogueBox.renderer= <DialogueBox />
        
    }
    if(Math.abs(user.body.position.x-shop.body.position.x)<100&&Math.abs(user.body.position.y-shop.body.position.y)<100){
        dialogueBox.text="enter shop";
        dialogueBox.position={x:400,y:350}
        dialogueBox.renderer= <DialogueBox />
        
    }
    if (user.body.x<0||user.body.y<0||user.body.x>1000||user.body.y>1000){
        resetUser()
    }
    //left, up, right, down... 37, 38, 39, 40
    Matter.Events.on(engine, 'collisionStart', (event) => {
        var pairs = event.pairs;
        
        // console.log(pairs.bodyA);         
    });
    Matter.Engine.update(engine, time.delta);
    return entities
}
export default Physics