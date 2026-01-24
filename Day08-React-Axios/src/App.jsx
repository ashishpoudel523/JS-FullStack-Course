import { useRef, useState } from "react";
import { getUserData, createUser } from "./services/users";

const App = () => {
  const inputRef = useRef();

  // states vaneko = variables holding data that changes and updates the HTML
  // form data display garni state
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  // API lo username dispaly garni state
  const [user, setUser] = useState();

  // state for showing loading..... , or submitting......
  // first ma false, submit hunjel true, last ma feri false
  const [submitting, setSubmitting] = useState(false);

  //"Ref Button" click geresi, useRef apply garni function
  function handleButton() {
    inputRef.current.focus();
  }

  // jsoplaceholder bata users fetch garni function
  const apiCall = async () => {
    try {
      const users = await getUserData();
      console.log({ users });

      setUser(users[9]);
    } catch (e) {
      console.log({ e });
    }
  };

  // form submit vayesi apply huni function,
  async function handleSubmit(e) {
    // to prevent page reload, we use e.preventDefault()
    e.preventDefault();
    const formData = { name, address, email };
    setSubmitting(true);
    await createUser(formData);
    setSubmitting(false);
    alert(`Form submitted with name: ${name}`);

    // submit garera sakesi, form clear garni
    // ani yo khali state tala ko value = {name} ma gayera basxa - yeslai 2 way binding vaninxa
    setName("");
    setAddress("");
    setEmail("");
  }

  console.log({ submitting });

  return (
    <>
      <h1>Count</h1>
      Name: {name} <br />
      Address: {address} <br />
      Email: {email} <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          /* Two way binding = state bata remove or add vako kura UI ma ni reflect huna value = {} use garni
          form submit garesi, form clear gana ko lagi use hunxa */
          value={name}
          ref={inputRef}
          onChange={(e) => {
            /* sets the current value of the input field */
            setName(e.target.value);
          }}
          required
        />
        <br />
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          required
        />
        <br />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br />
        <button type="submit">
          {submitting ? "Submitting....." : "SUBMIT"}
        </button>
      </form>
      <br />
      <button onClick={() => handleButton()}>Ref Button </button>
      <br /> <br />
      <button onClick={() => apiCall()}> Fetch User from API </button> <br />
      {/* Yo mathi ko "API" wala Button click garda, api bata user number4, yo html ma print huna paryo */}
      Username from API = {user?.name} <br />
    </>
  );
};

export default App;
