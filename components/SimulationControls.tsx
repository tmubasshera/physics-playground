type SimulationControlsProps = {
  gravity: number;
  setGravity: (gravity: number) => void;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
  reset: () => void;  
  restitution: number;
  setRestitution: (restitution: number) => void; 
  mass: number; 
  setMass: (mass: number) => void;
};

export default function SimulationControls({
  gravity,
  setGravity,
  isRunning,
  setIsRunning, 
  reset, 
  setRestitution,
  restitution, 
  mass, 
  setMass
}: SimulationControlsProps) 
  
  {
  return (
    <div>
      <label htmlFor="gravity">Gravity: </label>

      <input
        id="gravity"
        type="number"
        value={gravity}
        step="0.1"
        onChange={(event) => setGravity(Number(event.target.value))}
      />
      <br />
      <label htmlFor="restitution">Restitution: </label>
      <input
        id="restitution"
        type="number"
        value={restitution}
        step="0.1"
        onChange={(event) => setRestitution(Number(event.target.value))}
      />
            <br />
        <label htmlFor="mass">Mass: </label>
        <input 
            id="mass"
            type="number"
            value={mass}
            step="0.1"
            onChange={(event) => setMass(Number(event.target.value))}
        />  

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setIsRunning(true)}>
          Start
        </button>

        <button
          onClick={() => setIsRunning(false)}
          style={{ marginLeft: "10px" }}
        >
          Pause
        </button>

        <button
          onClick={() => reset()}
          style={{ marginLeft: "10px" }}
        >
            Reset
        </button>
      </div>
    </div>
  );
}