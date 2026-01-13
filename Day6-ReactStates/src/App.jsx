import ButtonList from "./components/ButtonList";
import Car from "./components/Car";

// Root component should ONLY compose other components
// ❌ No state
// ❌ No business logic
function App() {
  return (
    <>
      <ButtonList />
      <Car brand="BYD" model="Mustang" />
    </>
  );
}

export default App;
