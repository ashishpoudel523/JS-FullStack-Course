import { useNavigate } from "react-router-dom";

function Events() {
  const navigation = useNavigate();
  function handleGotoUsers() {
    navigation({ pathname: "/users", search: "?id=10&from=events" });
  }

  function handleGotoSingleUser() {
    navigation({ pathname: "/users/ashish" });
  }
  return (
    <div>
      <h3>Events Page</h3>
      <button onClick={handleGotoUsers}>Users</button>
      <button onClick={handleGotoSingleUser}>SingleUser</button>
    </div>
  );
}

export { Events };
