import { ButtonList } from "./components/ButtonList.jsx";
import { MyButton } from "./components/MyButton.jsx";

function App() {
  return (
    <>
      <ButtonList />
      Form : <input type="number" />
      <br />
      <Car brand="BYD" model="Mustang" />
    </>
  );
}

/* CAR COMPONENT */
function Car({ brand, model }) {
  const btnStyle = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <>
      <button
        style={btnStyle}
        className="btn-primary"
        onClick={() => alert("Clicked!")}
      >
        Button from Car function
      </button>
      <p>
        I am a {brand} car and {model} model.
      </p>
    </>
  );
}

export { App };
