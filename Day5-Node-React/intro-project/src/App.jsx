import MyButton from "./MyButton";
import "./App.css";

function App() {
  const x = 5;
  const res = x < 10 ? "Hello" : "Bye";
  console.log(res);
  return (
    <div>
      <h1>Ashish Poudel</h1>
      <h2>Web Developer</h2>
      <MyButton />

      <h1>{res} </h1>
    </div>
  );
}

export default App;
