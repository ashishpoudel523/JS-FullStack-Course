import { useState } from "react";
import "./App.css";

function App() {
  const [diceNumber, setDiceNumber] = useState(1);

  const refreshDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNum);
  };

  return (
    <div>
      <center>
        <img width={300} height={300} src={`/assets/dice${diceNumber}.jpg`} />
        <br />
        <button onClick={() => refreshDice()} className="diceBtn">
          Roll
        </button>
      </center>
    </div>
  );
}

export default App;
