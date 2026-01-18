import { useState } from "react";
import "./Namecard.css";

function EmailWrapper({ email }) {
  return <p>Email: {email}</p>;
}

function NameCard({ id, username, email, handleCount }) {
  const [count, setCount] = useState(0);

  return (
    <div className="namecard">
      <p>Id: {id} </p>
      <p>Name: {username}</p>
      <EmailWrapper email={email} />
      <p>Count: {count}</p>
      <button
        onClick={() => {
          const counted = count + 1;
          setCount(counted);
          handleCount(counted);
        }}
      >
        Increment Count
      </button>
    </div>
  );
}

export { NameCard };
