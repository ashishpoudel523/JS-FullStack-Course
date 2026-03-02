import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../features/themes/themeSlice";
import "../App.css";
import type { RootState } from "../app/store";

function ManageTheme() {
  const dispatch = useDispatch();

  // read current theme from redux
  const theme = useSelector((state: RootState) => state.theme.theme);

  function handleTheme() {
    dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  }

  return (
    <div>
      <button onClick={handleTheme}>Change Theme</button>
    </div>
  );
}
export default ManageTheme;
