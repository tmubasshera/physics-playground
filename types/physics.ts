export type PhysicsState = {
  position: number;
  velocity: number;
};

export function updatePhysics(
  state: PhysicsState,
  gravity: number,
  deltaTime: number,
  restitution: number,
  mass: number
): PhysicsState {
  let velocity = state.velocity - gravity * mass * deltaTime;
  let position = state.position + velocity * deltaTime;

  if (position <= 0) {
    position = 0;
    velocity = -velocity * restitution; // Apply restitution factor on bounce   
  }

  return {
    position,
    velocity
  };
}