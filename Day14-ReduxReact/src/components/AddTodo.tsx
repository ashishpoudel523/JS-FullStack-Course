import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

function AddTodo() {
  const [input, setInput] = useState("");

  // useDispatch is used to trigger redux action
  const dispatch = useDispatch();

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    // uta todoSlice ma vako reducers vitra ko addTodo:{} use garna ko lagi yeta dispatch use garna parxa

    // addTodo vitra ko payload chai input
    dispatch(addTodo(input));
    setInput("");
  }

  // kei value select / read  garna ko lagi useSelector. Yesko 1st argument nai function ani tyo function ko 1st argoument nai state ho.
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { AddTodo };
