import { useRef, useState } from "react";
import axios from "axios";

async function getData() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const response = await axios.get(url);

    return response.data;
  } catch (err) {
    console.log({ err });
    throw err;
  }
}

const App = () => {
  const inputRef = useRef();

  const [user1, setUser1] = useState();

  async function handleButton() {
    inputRef.current.focus();
    const a = await getData();
    console.log({ a });
    setUser1(a[3]);
  }
  return (
    <>
      <h1>Count</h1>
      {user1?.title}
      <br />
      <input placeholder="text" type="text" ref={inputRef} />
      <br />
      <button onClick={() => handleButton()}>Ref Button </button>
    </>
  );
};

export default App;
