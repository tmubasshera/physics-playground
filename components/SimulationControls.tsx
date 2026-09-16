type SimulationControlsProps = {
  gravity: number;
  setGravity: (gravity: number) => void;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
};

export default function SimulationControls({
  gravity,
  setGravity,
  isRunning,
  setIsRunning, }: SimulationControlsProps) 
  
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
      </div>
    </div>
  );
}