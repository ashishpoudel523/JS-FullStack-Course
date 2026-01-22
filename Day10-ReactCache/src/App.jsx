import { useCallback, useMemo, useState } from "react";

function App() {
  const [myName, setMyName] = useState("Robin");

  const [count, setCount] = useState(0);

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

  // INSTEAD USE useMemo = to cache/memoize value
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

  // WITHOUT useCallback - creates new function every time component re-renders.

  // useCallback hook  = to cache/memoize the whole function. This is created once and reused.
  const callbackClick = useCallback(() => {
    setCount((c) => c + 1);
    alert("App rendered");
  }, [count]);

  return (
    <>
      <h2>Hello All</h2>
      <p> {greeting} </p>
      <p> {id2User.name} </p>
      <button onClick={handleClick}>Find User - useMemo</button>
      <button onClick={callbackClick}>useCallback Button = {count}</button>
    </>
  );
}

export default App;
