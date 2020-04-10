let activePet = {}
const setActivePet = (e, neoGotchi) =>{
    activePet = neoGotchi
    console.log('neo system active pet:',activePet)
}

const eggHandler = (entities, {input}) => {
    const {payload:onKeyDown} = input.find(x=>x.name === 'onKeyDown') || {};
    
    if(onKeyDown){
        // console.log('keypress',onKeyDown.keyCode)
        const input = onKeyDown.keyCode
        if(input===65){
            console.log('all entities:',entities);
            // console.log(entities.inventoryPromise);
            
            }
        let availableNeos = [];
        for (let entity in entities){
            // console.log(entity)
            // console.log(`entity: ${entities[entity]}, ${entities[entity].neo}`)
            if (entities[entity].neo){
                availableNeos.push(entities[entity]);
            }
        }
        if(input===68){//d
            // console.log(entities)
            
            console.log(`available neos: ${availableNeos}`);
            const activePetIndex = availableNeos.findIndex(neo =>{console.log(`neo: ${neo.name}, activePet: ${activePet.name}`); return neo.name === activePet.name});
            console.log(`active pet infes:${activePetIndex}`)
            if(activePetIndex<availableNeos.length-1){
                let entitiesIndex = availableNeos[activePetIndex+1].name
                activePet = entities[entitiesIndex].wholePackage
                // activePet = entities[availableNeos[activePetIndex+1].name]
            }
            if(activePetIndex===availableNeos.length-1){
                let entitiesIndex = availableNeos[0].name
                activePet = entities[entitiesIndex].wholePackage
            }
            
        }
        }
        
    
    if (entities && entities.inventoryPromise){//if entities exist and the promise is still there
        const {inventoryPromise} = entities
        inventoryPromise.then(res=>{
            res.map((item, index)=>{
                entities[item.name]=item;//unpack the promise result
                entities[item.name].setActivePet = setActivePet//give promise result (neoGotchi) ability to setActivePet
                entities[item.name].neo = true;
            });
            // console.log(res)
            if(Array.isArray(res) && res.length){
                console.log('deleting that prommise')
                delete entities.inventoryPromise
            }
            
        })
        
    }
    // const walkController = () =>{

    // }
    if(entities.activePet&&entities.activePet.switch){activePet=entities.activePet; entities.activePet.switch=false;}
    entities.activePet = activePet;
    if(entities["activePetHolder"]&&entities[activePet.name]&&entities[activePet.name].wholePackage){
        entities["activePetHolder"].text = `
        Name: ${entities[activePet.name].wholePackage.name}, 
        Exp: ${entities[activePet.name].wholePackage.totalExp}, 
        Hunger: ${entities.activePet.status.hunger}`
    }
    
    for (const entity in entities) {
        // console.log(entity)
        
        if (entities[entity].neo===true){
            const neoGotchi = entities[entity];
            // console.log('its true')
            if (neoGotchi.direction==='left'){
                entities[entity].position.x--;
                if (neoGotchi.position.x<100||Math.random()>.99){
                    neoGotchi.direction='right'
                }
            } else if(neoGotchi.direction==='right'){
                entities[entity].position.x++;
                if (neoGotchi.position.x>800||Math.random()>.99){
                    neoGotchi.direction='left'
                }
            }
            
        }
    };

    
    return entities
}
export default eggHandler