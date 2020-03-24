import Matter from "matter-js";

const Physics = (entities, { time }) => {
    let engine = entities.physics.engine;
    // let world = entities.physics.world;
    let boxA = entities.boxA.body;

    Matter.Engine.update(engine, time.delta);
}
export default Physics