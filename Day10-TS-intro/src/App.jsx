import { useMemo, useState } from "react";

function App() {
  const [myName, setMyName] = useState("Robin");

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul",
    },
    {
      id: 2,
      name: "Daniel",
    },
    {
      id: 3,
      name: "Emmaa",
    },
  ]);

  // derived state -  derived from existing props or state, rather than stored separately
  // don't use "useEffect" coz it can lead to unnecessary complexity and bugs.
  const greeting = "Good morning " + myName + " sir";

  /*
  const id2User = users.find((item) => {
    console.log("user found");
    if (item.id === 2) {
      return item;
    }
  });
  */

  // INSTEAD USE useMemo = to keep data in cache
  // useMemo also has dependency array
  // dependency array 1 choti matrai change huda run hunxa , next time ma paila kai cache value use garxa
  const id2User = useMemo(() => {
    const foundUser = users.find((item) => {
      console.log("find chalyo");
      if (item.id === 2) {
        return item;
      }
    });

    return foundUser;
  }, [users]);

  function handleClick() {
    setMyName("Ashish");
  }

  // useCallback hook  = to cache the whole function

  return (
    <>
      <h2>Hello All</h2>
      <p> {greeting} </p>
      <p> {id2User.name} </p>
      <button onClick={handleClick}>Find User</button>
    </>
  );
}

export default App;
