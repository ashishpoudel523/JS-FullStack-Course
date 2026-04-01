import { useState } from "react";
import "./App.css";
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)} className="btn">
        Add
      </button>
      <button onClick={() => setNumber(number - 1)} className="btn">
        Subtract
      </button>
      <button onClick={() => setNumber(0)} className="btn">
        Reset
      </button>
    </div>
  );
}

export default App;
