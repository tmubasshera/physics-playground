"use client";

import { useEffect, useRef } from "react";
import { PhysicsState } from "@/types/physics";

type PhysicsCanvasProps = {
  physicsState: PhysicsState;
};

export default function PhysicsCanvas({
  physicsState,
}: PhysicsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    const ballRadius = 20;

    const x = canvas.width / 2;
    const y = canvas.height - physicsState.position - ballRadius;

    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
  }, [physicsState]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={300}
      style={{
        border: "2px solid black",
        marginTop: "20px",
      }}
    />
  );
}