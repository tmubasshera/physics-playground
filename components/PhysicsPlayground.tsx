"use client";

import { useEffect, useRef, useState } from "react";
import SimulationControls from "./SimulationControls";
import { PhysicsState, updatePhysics } from "@/types/physics";
import PhysicsCanvas from "@/components/PhysicsCanvas";

export default function PhysicsPlayground() {
//   const [position, setPosition] = useState(0);
//   const [velocity, setVelocity] = useState(0);
    const [physicsState, setPhysicsState] = useState<PhysicsState>({
        position: 200,
        velocity: 0,
    });
    const [isRunning, setIsRunning] = useState(false);
    const reset = () => {
        setPhysicsState({
            position: 200,
            velocity: 0,
        });

  setIsRunning(false);
};
  const [gravity, setGravity] = useState(9.81);
  const [restitution, setRestitution] = useState(0.7);
  const [mass, setMass] = useState(1);
  const lastTime = useRef<number | null>(null);

  useEffect(() => {
    if (!isRunning) {
      lastTime.current = null;
      return;
    }

    let animationFrameId: number;

    const animate = (currentTime: number) => {
      //set lastTime
        if (lastTime.current === null) {
        lastTime.current = currentTime;
      }

      const deltaTime = (currentTime - lastTime.current) / 1000;
      lastTime.current = currentTime;

        setPhysicsState((currentState) =>
            updatePhysics(currentState, gravity, deltaTime, restitution,mass)
        );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isRunning, gravity]);

  return (
    <main style={{ padding: "40px" }}>
      <h1>Physics Playground</h1>
      {/* render the controls for gravity and IsRunning  */}
       <SimulationControls
           gravity={gravity}
           setGravity={setGravity}
           isRunning={isRunning}
           setIsRunning={setIsRunning}
           reset={reset}    
           restitution={restitution}
            setRestitution={setRestitution}
           mass={mass}
           setMass={setMass}
       />
      <p>Position: {physicsState.position.toFixed(2)}</p>
      <p>Velocity: {physicsState.velocity.toFixed(2)}</p>

      <PhysicsCanvas physicsState={physicsState} />
    </main>
  );
}