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
        }
    
    if (entities && entities.inventoryPromise){
        const {inventoryPromise} = entities
        inventoryPromise.then(res=>{
            res.map((item, index)=>{
                entities[item.name]=item;
                entities[item.name].setActivePet = setActivePet
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
    entities.activePet = activePet;
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