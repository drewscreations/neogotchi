const MoveUser  = (entities, { input })=>{
    const {payload:mouseMove} = input.find(x=>x.name === 'onMouseMove') || {};
    const {payload:drag} = input.find(x=>x.name === 'onDrag') || {};
    const {payload:mouseDown} = input.find(x=>x.name === 'onMouseDown') || {};
    const {payload:mouseOut} = input.find(x=>x.name === 'onMouseOut') || {};

    if (mouseMove&&!mouseOut){
        // console.log(input)
        const {user} = entities;
        // console.log(mouseMove.view) want to know how to stop following mouse if outside parent div
        user.position.x += Math.abs(mouseMove.pageX-user.position.x)>100?(mouseMove.pageX-user.position.x)*.01:0;
        user.position.y += Math.abs(mouseMove.pageY-user.position.y)>100?(mouseMove.pageY-user.position.y)*.01:0;

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
export default MoveUser