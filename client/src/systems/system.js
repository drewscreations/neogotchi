const MoveBox  = (entities, { input })=>{
    const {payload:mouseMove} = input.find(x=>x.name === 'onMouseMove') || {};
    const {payload:drag} = input.find(x=>x.name === 'onDrag') || {};
    const {payload:mouseDown} = input.find(x=>x.name === 'onMouseDown') || {};

    if (mouseMove){
        // console.log(input)
        const {user} = entities;
        // console.log(entities)
        user.x = mouseMove.pageX;
        user.y = mouseMove.pageY;

    }
    if(drag){
        console.log('dragging')
    }
    if(mouseDown){
        console.log('mouse down')
        for (const [key, value] of Object.entries(entities)) {
            console.log(key, value);
          }
    }
    return entities
}
export default MoveBox