import axios from "axios";
import { useEffect, useState } from "react";
import { NameCard } from "./components/NameCard";

async function getUsers() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  } catch (error) {
    return error;
  }
}

// CUSTOM HOOK = RESUABLE FUNCTION WITHOUT DUPLICATING CODE
function useDebounce(inputValue, delay) {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, inputValue]);

  return debounceValue;
}

function App() {
  const [users, setUsers] = useState([]);

  const [parentCount, setParentCount] = useState(0);

  const [inputValue, setInputValue] = useState("");

  async function handleUsers() {
    const data = await getUsers();
    setUsers(data);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  const debouncedValue = useDebounce(inputValue, 600);

  return (
    <div>
      <h3>Day 9 - React Patterns and Custom Hooks - {parentCount} </h3>
      Input Value: {inputValue} <br />
      Debounce Value: {debouncedValue} <br />
      <input
        placeholder="search"
        onChange={handleChange}
        value={inputValue}
      ></input>
      <br />
      {/* Using map() in React is a common way to create multiple elements from an array of data. It lets you loop through an array and return a React element for each item, which React will render as a list.

      Each element should have a unique 'key' prop to the root element that should be unique inside 'map' to help React identify which items have changed, added, or removed for efficient re-rendering. 
      
        Eg.:   
      {
      "id": 1,
      "name": "Leanne Graham"
      },
      {
      "id": 2,
      "name": "Ervin Howell"
      }
      */}
      <button onClick={handleUsers}>Get Users</button>
      <div className="cards">
        {users.map((item) => {
          return (
            <NameCard
              key={item.id}
              id={item.id}
              username={item.username}
              email={item.email}
              handleCount={setParentCount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
