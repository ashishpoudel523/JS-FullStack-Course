import { useParams } from "react-router-dom";

function SingleUser() {
  const { username } = useParams();
  return (
    <div>
      <h2>I am SingleUser my username is: {username} </h2>
    </div>
  );
}

export { SingleUser };
