import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <br />
      <Link to="/users">Go to Users Page</Link> <br />
      <Link to="/events">Go to Events Page</Link>
      {/* Components above Outlet remain same, only child route elements are rendered.*/}
      <Outlet />
    </div>
  );
}

export { Home };
