export type PhysicsState = {
  position: number;
  velocity: number;
};

export function updatePhysics(
  state: PhysicsState,
  gravity: number,
  deltaTime: number
): PhysicsState {
  let velocity = state.velocity - gravity * deltaTime;
  let position = state.position + velocity * deltaTime;

  if (position <= 0) {
    position = 0;
    velocity = -velocity;
  }

  return {
    position,
    velocity,
  };
}