import Matter from "matter-js";

const Physics = (entities, { touches, time, dispatch }) => {
    let engine = entities.physics.engine;
    let world = entities.physics.world;
    let bird = entities.bird.body;

    Matter.Engine.update(engine, time.delta);
}
export default Physics