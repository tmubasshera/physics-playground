"use client";

import { useEffect, useRef, useState } from "react";
import SimulationControls from "./SimulationControls";
import { PhysicsState, updatePhysics } from "@/types/physics";

export default function PhysicsPlayground() {
//   const [position, setPosition] = useState(0);
//   const [velocity, setVelocity] = useState(0);
    const [physicsState, setPhysicsState] = useState<PhysicsState>({
        position: 200,
        velocity: 0,
    });
  const [isRunning, setIsRunning] = useState(false);

  const [gravity, setGravity] = useState(9.81);

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

    //   setVelocity((currentVelocity) => {
    //     const newVelocity = currentVelocity - gravity * deltaTime;

    //     setPosition((currentPosition) => {
    //         const newPosition =
    //             currentPosition + newVelocity * deltaTime;

    //         if (newPosition <= 0) {
    //             return 0;
    //         }

    //         return newPosition;
    //     });

    //     return newVelocity;
    //   });

        setPhysicsState((currentState) =>
            updatePhysics(currentState, gravity, deltaTime)
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
      render the controls for gravity and IsRunning 
       <SimulationControls
           gravity={gravity}
           setGravity={setGravity}
           isRunning={isRunning}
           setIsRunning={setIsRunning}
       />
      <p>Position: {physicsState.position.toFixed(2)}</p>
      <p>Velocity: {physicsState.velocity.toFixed(2)}</p>

      <div
        style={{
          width: "400px",
          height: "300px",
          border: "2px solid black",
          position: "relative",
          marginTop: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "red",
            position: "absolute",
            left: "50%",
            bottom: `${physicsState.position}px`,
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </main>
  );
}