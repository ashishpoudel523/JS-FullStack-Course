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

function App() {
  const [users, setUsers] = useState([]);

  const [parentCount, setParentCount] = useState(0);

  async function handleUsers() {
    const data = await getUsers();
    setUsers(data);
  }

  useEffect(() => {
    console.log("hello");

    return () => {
      console.log("bye");
    };
  }, [parentCount]);

  return (
    <div>
      <h3>Day 9 - React Patterns and Custom Hooks - {parentCount} </h3>

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
  );
}

export default App;
