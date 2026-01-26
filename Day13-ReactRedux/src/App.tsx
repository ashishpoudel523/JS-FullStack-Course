import { useState } from "react";
import "./App.css";

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

const user: User<number> = {
  id: 23,
};

const user2: User<string> = {
  id: "ashish",
};

function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const todoItem = { id: Math.random.toString(), text: input };
    setTodos([...todos, todoItem]);
  }

  function handleTodoDelete(id) {
    const filteredTodo = todos.filter((item) => item.id != id);
    setTodos(filteredTodo);
  }

  return (
    <div>
      <h1>React Todo App</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
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
              <p key="item.id">{item.text}</p>;
              <button onClick={() => handleTodoDelete(item.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
