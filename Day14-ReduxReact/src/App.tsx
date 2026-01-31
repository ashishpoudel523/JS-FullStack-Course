import { useSelector } from "react-redux";
import { AddTodo } from "./components/AddTodo";
import { type RootState } from "./app/store";
import ManageTheme from "./components/ManageTheme";

function App() {
  // theme ko lagi useSelector - value read garna ko lagi
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    // redux use garepaxi, component chai <Provider> le wrap garnai parxa
    // redux use garya vayera, Provider le store magxa.

    <div className={`main-${theme}`}>
      <ManageTheme />
      <h2>React Redux - Todo App</h2>
      <AddTodo />
    </div>
  );
}

export default App;
