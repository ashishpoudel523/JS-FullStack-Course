import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Users } from "./Users";
import { Events } from "./Events";
import { SingleUser } from "./SingleUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* THIS 1ST ROUTE 👇👇 IS CALLED LAYOUT ROUTE WHICH HAS CHILDREN ROUTES */}
        <Route path="/" element={<Layout />}>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<SingleUser />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
