import { useEffect, useState } from "react";

async function getData() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const json = await response.json();
  return json;
}

function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState(null);

  const [error, setError] = useState("");

  //fetch API function
  useEffect(() => {}, []);

  //it runs when count (i.e. dependency array) changes
  useEffect(() => {
    console.log("I am useEffect");
  }, [count]);

  async function handleTodo() {
    try {
      const todos = await getData();
      setTodos(todos);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h1>Hello</h1>
      {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}
      <p>First todo title: {todos?.[5].title}</p>
      <button onClick={handleTodo}>Get the Todo</button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count = {count}
      </button>
    </>
  );
}

export default App;
