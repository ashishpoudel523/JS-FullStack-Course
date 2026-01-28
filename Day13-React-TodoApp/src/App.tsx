import { useState } from "react";
import "./App.css";

// MAKE TODO APP

// todo ko type tala use garda <Todo> garni
type Todo = {
  id: string;
  text: string;
};

type User<IdType> = {
  id: IdType;
  name?: string;
  email?: string;
  address?: string;
};

// GENERICS
const user: User<number> = {
  id: 23,
};

const user2: User<string> = {
  id: "ashish",
};

const user3 = {
  name: "Tara",
  email: "tara@gmail.com",
};

type User3Type = typeof user3;

function App() {
  // form ma input gareko data lai save garni state
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState<Todo[]>([]);

  // e ko type herna tala vako <form onSubmit={(e)} ma hover garni ani tesko type dekhauxa, teslai copy garera yo function ma e ko type vandini otherwise e ko type any hunxa jun use garna hudaina typescript ma
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    // to avoid whole page refresh/reload
    e.preventDefault();
    const todoItem = { id: Math.random.toString(), text: input };
    // purano todos haru spread vayera ...todos ma basxa, naya todos aayera todoItem ma basxa
    setTodos([...todos, todoItem]);
  }

  function handleTodoDelete(id: string) {
    const filteredTodos = todos.filter((item) => item.id != id);
    setTodos(filteredTodos);
  }

  return (
    <div>
      <h1>React Todo App</h1>
      <form
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {todos.map((item) => {
          return (
            <div>
              {/* list render garna lai map use garna parxa */}
              <p key="item.id">{item.text}</p>
              <button onClick={() => handleTodoDelete(item.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
